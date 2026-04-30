"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star, Clock, Flag, ChevronLeft, ChevronRight, Save, Send, X,
  AlertTriangle, BookOpen, ListChecks,
} from "lucide-react";
import {
  ExamType, MOCK_DATABASE, EXAM_META, SAMPLE_CLAT_MOCK_1, MockQuestion,
} from "./constants";

type QStatus = "not-visited" | "answered" | "skipped" | "marked" | "answered-marked";

function getStatus(
  idx: number,
  answers: (number | null)[],
  visited: Set<number>,
  marked: Set<number>,
): QStatus {
  const isAnswered = answers[idx] !== null;
  const isMarked = marked.has(idx);
  const isVisited = visited.has(idx);
  if (isAnswered && isMarked) return "answered-marked";
  if (isMarked) return "marked";
  if (isAnswered) return "answered";
  if (isVisited) return "skipped";
  return "not-visited";
}

const STATUS_BG: Record<QStatus, string> = {
  "not-visited":
    "bg-gray-100 dark:bg-white/10 text-gray-500 border-gray-200 dark:border-white/10",
  "answered": "bg-emerald-500 text-white border-emerald-500",
  "skipped": "bg-red-500 text-white border-red-500",
  "marked": "bg-purple-500 text-white border-purple-500",
  "answered-marked": "bg-purple-500 text-white border-purple-500",
};

interface Props {
  examType: ExamType;
  mockNumber: number;
  onBack: () => void;
  onComplete: (res: {
    score: number;
    total: number;
    timeSpent: number;
    answers: (number | null)[];
    questions: MockQuestion[];
  }) => void;
}

export default function FullMockRunner({
  examType,
  mockNumber,
  onBack,
  onComplete,
}: Props) {
  const questions =
    MOCK_DATABASE[examType]?.[mockNumber] || SAMPLE_CLAT_MOCK_1;
  const TOTAL_SECONDS = 120 * 60;

  const [phase, setPhase] = React.useState<"instructions" | "running">("instructions");
  const [current, setCurrent] = React.useState(0);
  const [answers, setAnswers] = React.useState<(number | null)[]>(
    Array(questions.length).fill(null),
  );
  const [marked, setMarked] = React.useState<Set<number>>(new Set());
  const [visited, setVisited] = React.useState<Set<number>>(new Set([0]));
  const [timePerQuestion, setTimePerQuestion] = React.useState<number[]>(() => Array(questions.length).fill(0));
  const qStartRef = React.useRef<number>(Date.now());
  const [startTime, setStartTime] = React.useState<number | null>(null);
  const [timeLeft, setTimeLeft] = React.useState(TOTAL_SECONDS);
  const [showSubmitConfirm, setShowSubmitConfirm] = React.useState(false);
  const [showExitConfirm, setShowExitConfirm] = React.useState(false);
  const [showPaletteMobile, setShowPaletteMobile] = React.useState(false);

  // Group sections (preserve question order; first-occurrence index)
  const sections = React.useMemo(() => {
    const seen = new Map<string, { firstIdx: number; lastIdx: number; count: number }>();
    questions.forEach((q, i) => {
      const s = q.section || "General";
      const e = seen.get(s);
      if (!e) seen.set(s, { firstIdx: i, lastIdx: i, count: 1 });
      else { e.lastIdx = i; e.count += 1; }
    });
    return Array.from(seen.entries()).map(([name, v]) => ({ name, ...v }));
  }, [questions]);

  // Timer (only when running). Auto-submit on 0.
  const finishedRef = React.useRef(false);
  React.useEffect(() => {
    if (phase !== "running") return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (!finishedRef.current) {
            finishedRef.current = true;
            const t = setTimeout(() => doFinish(), 0);
            void t;
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const startTest = () => {
    setStartTime(Date.now());
    setPhase("running");
  };

  const goToQuestion = (idx: number) => {
    if (idx < 0 || idx >= questions.length) return;
    const elapsed = Date.now() - qStartRef.current;
    if (elapsed > 0 && elapsed < 1000 * 60 * 60) {
      setTimePerQuestion((prev) => {
        const next = [...prev];
        next[current] = (next[current] || 0) + elapsed;
        return next;
      });
    }
    qStartRef.current = Date.now();
    setCurrent(idx);
    setVisited((prev) => {
      if (prev.has(idx)) return prev;
      const next = new Set(prev);
      next.add(idx);
      return next;
    });
    setShowPaletteMobile(false);
  };

  const handleAnswer = (i: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[current] = i;
      return next;
    });
  };

  const clearResponse = () => {
    setAnswers((prev) => {
      const next = [...prev];
      next[current] = null;
      return next;
    });
  };

  const toggleMark = () => {
    setMarked((prev) => {
      const next = new Set(prev);
      if (next.has(current)) next.delete(current);
      else next.add(current);
      return next;
    });
  };

  const saveAndNext = () => {
    if (current < questions.length - 1) goToQuestion(current + 1);
  };

  const doFinish = () => {
    if (finishedRef.current === false) finishedRef.current = true;
    const finalElapsed = Date.now() - qStartRef.current;
    const finalTpq = [...timePerQuestion];
    if (finalElapsed > 0 && finalElapsed < 1000 * 60 * 60) {
      finalTpq[current] = (finalTpq[current] || 0) + finalElapsed;
    }
    const score = answers.reduce<number>(
      (acc, ans, i) => (ans === questions[i].correct ? acc + 1 : acc),
      0,
    );
    const timeSpent = Math.round(
      (Date.now() - (startTime || Date.now())) / 1000,
    );
    onComplete({
      score,
      total: questions.length,
      timeSpent,
      answers,
      questions,
      timePerQuestion: finalTpq.map((ms) => Math.round(ms / 1000)),
    });
  };

  const stats = React.useMemo(() => {
    let answered = 0, skipped = 0, mfr = 0, notVisited = 0, answeredMarked = 0;
    for (let i = 0; i < questions.length; i++) {
      const s = getStatus(i, answers, visited, marked);
      if (s === "answered") answered++;
      else if (s === "answered-marked") { answered++; mfr++; answeredMarked++; }
      else if (s === "marked") mfr++;
      else if (s === "skipped") skipped++;
      else notVisited++;
    }
    return { answered, skipped, mfr, notVisited, answeredMarked };
  }, [answers, visited, marked, questions.length]);

  if (phase === "instructions") {
    return (
      <InstructionsScreen
        examType={examType}
        mockNumber={mockNumber}
        questions={questions}
        sections={sections}
        totalSeconds={TOTAL_SECONDS}
        onStart={startTest}
        onBack={onBack}
      />
    );
  }

  const q = questions[current];
  const currentSection = q.section || "General";

  return (
    <div className="space-y-5 pb-32">
      {/* Top bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-11 h-11 ${EXAM_META[examType].color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
          >
            <Star size={20} />
          </div>
          <div>
            <h2 className="text-base lg:text-lg font-black text-[#060818] dark:text-white uppercase tracking-tight">
              {examType} Mock {mockNumber}
            </h2>
            <p className="text-[11px] text-gray-400 font-medium">
              Question {current + 1} of {questions.length}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-black text-base border ${
            timeLeft < 300
              ? "bg-red-500/10 text-red-500 border-red-500/30 animate-pulse"
              : "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20"
          }`}>
            <Clock size={18} />
            <span className="tabular-nums">
              {Math.floor(timeLeft / 60).toString().padStart(2, "0")}:
              {(timeLeft % 60).toString().padStart(2, "0")}
            </span>
          </div>
          <button
            onClick={() => setShowExitConfirm(true)}
            className="hidden md:flex items-center gap-2 px-3 py-2 bg-white dark:bg-white/5 text-gray-500 border border-gray-100 dark:border-white/10 rounded-2xl font-bold text-sm hover:text-[#060818] dark:hover:text-white"
          >
            <Save size={16} /> Save & Exit
          </button>
          <button
            onClick={() => setShowSubmitConfirm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#060818] text-white rounded-2xl font-bold text-sm hover:scale-[1.02] transition-transform"
          >
            <Send size={16} /> Submit
          </button>
          <button
            onClick={() => setShowPaletteMobile(true)}
            className="lg:hidden flex items-center gap-2 px-3 py-2 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl"
          >
            <ListChecks size={16} />
            <span className="font-black text-xs">
              {current + 1}/{questions.length}
            </span>
          </button>
        </div>
      </div>

      {/* Section switcher */}
      {sections.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar -mx-2 px-2">
          {sections.map((s) => {
            const isActive = currentSection === s.name;
            return (
              <button
                key={s.name}
                onClick={() => goToQuestion(s.firstIdx)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest border-2 transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-[#F59E0B] border-[#F59E0B] text-[#060818] shadow-md"
                    : "bg-white dark:bg-white/5 border-gray-100 dark:border-white/10 text-gray-500 hover:border-[#F59E0B]/50"
                }`}
              >
                {s.name} <span className="opacity-60 font-bold">({s.count})</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        {/* Question column */}
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
          className="space-y-5"
        >
          {q.passage && (
            <div className="bg-white dark:bg-white/5 p-6 lg:p-8 rounded-3xl border border-gray-100 dark:border-white/10 leading-relaxed text-gray-700 dark:text-gray-300 italic relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#F59E0B] opacity-50" />
              <div className="space-y-3">
                {q.passage.split("\n").map((para, i) => (
                  <p key={i} className="last:mb-0">{para}</p>
                ))}
              </div>
            </div>
          )}

          <div className="bg-white dark:bg-white/5 p-6 lg:p-10 rounded-[2rem] border border-gray-100 dark:border-white/10 space-y-7 shadow-sm">
            <div className="space-y-3">
              <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest flex items-center gap-2">
                <BookOpen size={12} /> Question {current + 1}
                {currentSection !== "General" && <> · {currentSection}</>}
              </p>
              <h3 className="text-xl lg:text-2xl font-black text-[#060818] dark:text-white leading-tight">
                {q.question}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {q.options.map((opt, i) => {
                const selected = answers[current] === i;
                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all font-bold text-base flex items-center gap-4 ${
                      selected
                        ? "bg-[#F59E0B]/10 border-[#F59E0B] text-[#060818] dark:text-white ring-4 ring-[#F59E0B]/10"
                        : "bg-gray-50 dark:bg-white/5 border-transparent text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10"
                    }`}
                  >
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black flex-shrink-0 ${
                        selected
                          ? "bg-[#F59E0B] text-white"
                          : "bg-gray-200 dark:bg-white/10"
                      }`}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="flex-1">{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Palette (desktop) */}
        <aside className="hidden lg:block">
          <div className="sticky top-4">
            <Palette
              questions={questions}
              current={current}
              answers={answers}
              visited={visited}
              marked={marked}
              stats={stats}
              onJump={goToQuestion}
              onSubmit={() => setShowSubmitConfirm(true)}
            />
          </div>
        </aside>
      </div>

      {/* Bottom action bar — sticky */}
      <div className="fixed left-0 right-0 bottom-3 px-3 lg:px-6 z-40 pointer-events-none">
        <div className="max-w-7xl mx-auto pointer-events-auto">
          <div className="flex flex-wrap items-center gap-2 bg-white/95 dark:bg-[#060818]/95 backdrop-blur-md p-3 rounded-2xl border border-gray-100 dark:border-white/10 shadow-2xl">
            <button
              onClick={toggleMark}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm border-2 transition-colors ${
                marked.has(current)
                  ? "bg-purple-500 border-purple-500 text-white"
                  : "bg-white dark:bg-white/5 border-purple-300 dark:border-purple-500/30 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-500/10"
              }`}
            >
              <Flag size={16} />
              <span className="hidden sm:inline">
                {marked.has(current) ? "Unmark" : "Mark for Review"}
              </span>
              <span className="sm:hidden">{marked.has(current) ? "Unmark" : "Mark"}</span>
            </button>
            <button
              onClick={clearResponse}
              disabled={answers[current] === null}
              className="px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-500 rounded-xl font-bold text-sm disabled:opacity-30 hover:text-[#060818] dark:hover:text-white"
            >
              <span className="hidden sm:inline">Clear Response</span>
              <span className="sm:hidden">Clear</span>
            </button>
            <button
              onClick={() => setShowExitConfirm(true)}
              className="md:hidden px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-500 rounded-xl font-bold text-sm"
            >
              <Save size={16} />
            </button>
            <div className="flex-1" />
            <button
              onClick={() => goToQuestion(Math.max(0, current - 1))}
              disabled={current === 0}
              className="px-4 py-2 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-500 rounded-xl font-bold text-sm disabled:opacity-30 flex items-center gap-1 hover:text-[#060818] dark:hover:text-white"
            >
              <ChevronLeft size={16} />
              <span className="hidden sm:inline">Previous</span>
            </button>
            {current < questions.length - 1 ? (
              <button
                onClick={saveAndNext}
                className="px-5 py-2 bg-[#060818] dark:bg-white text-white dark:text-[#060818] rounded-xl font-black text-sm flex items-center gap-1 hover:scale-[1.02] transition-transform"
              >
                <span className="hidden sm:inline">Save & Next</span>
                <span className="sm:hidden">Next</span>
                <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={() => setShowSubmitConfirm(true)}
                className="px-5 py-2 bg-[#F59E0B] text-[#060818] rounded-xl font-black text-sm flex items-center gap-1 hover:scale-[1.02] transition-transform"
              >
                Submit Test
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile palette drawer */}
      <AnimatePresence>
        {showPaletteMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPaletteMobile(false)}
            className="fixed inset-0 z-50 bg-black/60 lg:hidden flex justify-end"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="w-[92%] max-w-sm h-full bg-white dark:bg-[#060818] p-4 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-black text-lg text-[#060818] dark:text-white">
                  Question Palette
                </h3>
                <button
                  onClick={() => setShowPaletteMobile(false)}
                  className="p-2 -mr-2"
                >
                  <X size={20} />
                </button>
              </div>
              <Palette
                questions={questions}
                current={current}
                answers={answers}
                visited={visited}
                marked={marked}
                stats={stats}
                onJump={goToQuestion}
                onSubmit={() => {
                  setShowPaletteMobile(false);
                  setShowSubmitConfirm(true);
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit confirmation */}
      <AnimatePresence>
        {showSubmitConfirm && (
          <ConfirmDialog
            title="Submit your test?"
            icon={<Send size={28} />}
            onCancel={() => setShowSubmitConfirm(false)}
            onConfirm={doFinish}
            confirmLabel="Yes, Submit"
            cancelLabel="Continue Test"
            danger
          >
            <div className="grid grid-cols-2 gap-3 mt-4">
              <StatBlock label="Answered" value={stats.answered} color="emerald" />
              <StatBlock label="Not Answered" value={stats.skipped} color="red" />
              <StatBlock label="Marked for Review" value={stats.mfr} color="purple" />
              <StatBlock label="Not Visited" value={stats.notVisited} color="gray" />
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Once submitted, you cannot change your answers. Your test will be evaluated immediately.
            </p>
          </ConfirmDialog>
        )}
        {showExitConfirm && (
          <ConfirmDialog
            title="Save and exit the test?"
            icon={<AlertTriangle size={28} />}
            onCancel={() => setShowExitConfirm(false)}
            onConfirm={onBack}
            confirmLabel="Yes, Exit"
            cancelLabel="Continue Test"
          >
            <p className="text-sm text-gray-500 mt-2">
              Your progress will not be evaluated. The timer cannot be paused — exiting now will discard the current attempt.
            </p>
          </ConfirmDialog>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ──────────────────────────  Sub-components  ────────────────────────── */

function InstructionsScreen({
  examType,
  mockNumber,
  questions,
  sections,
  totalSeconds,
  onStart,
  onBack,
}: {
  examType: ExamType;
  mockNumber: number;
  questions: MockQuestion[];
  sections: { name: string; count: number; firstIdx: number; lastIdx: number }[];
  totalSeconds: number;
  onStart: () => void;
  onBack: () => void;
}) {
  const [agreed, setAgreed] = React.useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto space-y-6"
    >
      <button
        onClick={onBack}
        className="text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-[#F59E0B]"
      >
        ← Back to mocks
      </button>

      <div className="bg-white dark:bg-white/5 p-6 lg:p-10 rounded-[2.5rem] border border-gray-100 dark:border-white/10 space-y-7">
        <div className="space-y-2">
          <span className="text-[10px] font-black text-[#F59E0B] uppercase tracking-[0.2em]">
            {examType} Mock {mockNumber} · Instructions
          </span>
          <h1 className="text-3xl lg:text-4xl font-black text-[#060818] dark:text-white tracking-tight">
            Read carefully before you begin.
          </h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            The timer will start the moment you click <strong>I am ready, Begin Test</strong>. There is no pause.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <Meta label="Duration" value={`${Math.round(totalSeconds / 60)} min`} />
          <Meta label="Questions" value={String(questions.length)} />
          <Meta label="Sections" value={String(sections.length)} />
          <Meta label="Marking" value="+1 / 0" />
        </div>

        <div className="bg-amber-50 dark:bg-[#F59E0B]/10 border border-amber-200 dark:border-[#F59E0B]/20 rounded-2xl p-5 space-y-3">
          <p className="font-black text-[#F59E0B] uppercase text-xs tracking-widest">Question Palette Legend</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Legend color="bg-emerald-500" label="Answered" />
            <Legend color="bg-red-500" label="Not Answered (visited)" />
            <Legend color="bg-purple-500" label="Marked for Review" />
            <Legend color="bg-gray-200 dark:bg-white/10 text-gray-500 border" label="Not Visited" />
          </div>
        </div>

        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          {[
            "The clock starts on Begin Test and cannot be paused. The test auto-submits when time runs out.",
            "Use the question palette on the right to jump between questions. Click any number to jump instantly.",
            "Mark for Review flags a question without locking your answer — useful for ones you want to revisit.",
            "Save & Next moves to the next question, keeping your selected answer.",
            "Clear Response wipes your selected answer for the current question.",
            "Save & Exit discards the current attempt — your timer cannot be resumed.",
            "There is no negative marking on this mock unless explicitly stated for the section.",
          ].map((t, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="w-5 h-5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <label className="flex items-start gap-3 cursor-pointer p-4 rounded-2xl border-2 border-gray-100 dark:border-white/10 hover:border-[#F59E0B]/50 transition-colors">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 w-5 h-5 accent-[#F59E0B]"
          />
          <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
            I have read all the instructions. I understand the timer cannot be paused. I am ready to begin under exam-like conditions.
          </span>
        </label>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-500 rounded-2xl font-bold"
          >
            Cancel
          </button>
          <button
            onClick={onStart}
            disabled={!agreed}
            className="flex-1 px-6 py-3 bg-[#F59E0B] text-[#060818] rounded-2xl font-black text-base disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
          >
            I am ready, Begin Test <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function Palette({
  questions,
  current,
  answers,
  visited,
  marked,
  stats,
  onJump,
  onSubmit,
}: {
  questions: MockQuestion[];
  current: number;
  answers: (number | null)[];
  visited: Set<number>;
  marked: Set<number>;
  stats: { answered: number; skipped: number; mfr: number; notVisited: number };
  onJump: (i: number) => void;
  onSubmit: () => void;
}) {
  // Group by section
  const groups = React.useMemo(() => {
    const map = new Map<string, number[]>();
    questions.forEach((q, i) => {
      const s = q.section || "General";
      if (!map.has(s)) map.set(s, []);
      map.get(s)!.push(i);
    });
    return Array.from(map.entries());
  }, [questions]);

  return (
    <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4 space-y-4 max-h-[80vh] overflow-y-auto">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-2">
        <PaletteStat color="bg-emerald-500" label="Answered" value={stats.answered} />
        <PaletteStat color="bg-red-500" label="Skipped" value={stats.skipped} />
        <PaletteStat color="bg-purple-500" label="Review" value={stats.mfr} />
        <PaletteStat color="bg-gray-300 dark:bg-white/20" label="Not Visited" value={stats.notVisited} />
      </div>

      {/* Question grid (per section) */}
      {groups.map(([section, indices]) => (
        <div key={section} className="space-y-2">
          {groups.length > 1 && (
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              {section} <span className="text-gray-300">({indices.length})</span>
            </p>
          )}
          <div className="grid grid-cols-6 gap-1.5">
            {indices.map((idx) => {
              const status = getStatus(idx, answers, visited, marked);
              const isCurrent = idx === current;
              return (
                <button
                  key={idx}
                  onClick={() => onJump(idx)}
                  className={`relative w-full aspect-square rounded-md text-[11px] font-black border-2 transition-all ${STATUS_BG[status]} ${
                    isCurrent ? "ring-2 ring-[#F59E0B] ring-offset-1 dark:ring-offset-[#060818]" : ""
                  }`}
                  title={`Q${idx + 1} · ${status.replace("-", " ")}`}
                >
                  {idx + 1}
                  {status === "answered-marked" && (
                    <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-300" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <button
        onClick={onSubmit}
        className="w-full mt-2 py-2.5 bg-[#F59E0B] text-[#060818] rounded-xl font-black text-sm flex items-center justify-center gap-2"
      >
        <Send size={16} /> Submit Test
      </button>
    </div>
  );
}

function PaletteStat({ color, label, value }: { color: string; label: string; value: number }) {
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-white/5 rounded-lg">
      <span className={`w-3 h-3 rounded-sm ${color} flex-shrink-0`} />
      <div className="leading-tight">
        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{label}</p>
        <p className="text-sm font-black text-[#060818] dark:text-white">{value}</p>
      </div>
    </div>
  );
}

function ConfirmDialog({
  title, icon, onCancel, onConfirm, confirmLabel, cancelLabel, danger, children,
}: {
  title: string;
  icon: React.ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
  confirmLabel: string;
  cancelLabel: string;
  danger?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onCancel}
    >
      <motion.div
        initial={{ scale: 0.95, y: 10 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 10 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-[#060818] w-full max-w-md rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/10"
      >
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 ${danger ? "bg-[#F59E0B]/15 text-[#F59E0B]" : "bg-amber-50 text-amber-500"} rounded-2xl flex items-center justify-center flex-shrink-0`}>
            {icon}
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="text-lg font-black text-[#060818] dark:text-white">{title}</h3>
            {children}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-6">
          <button
            onClick={onCancel}
            className="flex-1 px-5 py-2.5 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-500 rounded-xl font-bold text-sm hover:text-[#060818] dark:hover:text-white"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            className={`flex-1 px-5 py-2.5 rounded-xl font-black text-sm ${danger ? "bg-[#F59E0B] text-[#060818]" : "bg-[#060818] text-white"}`}
          >
            {confirmLabel}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function StatBlock({ label, value, color }: { label: string; value: number; color: "emerald" | "red" | "purple" | "gray" }) {
  const map: Record<string, string> = {
    emerald: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20",
    red: "bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border-red-100 dark:border-red-500/20",
    purple: "bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-500/20",
    gray: "bg-gray-50 dark:bg-white/5 text-gray-500 border-gray-100 dark:border-white/10",
  };
  return (
    <div className={`p-3 rounded-xl border ${map[color]}`}>
      <p className="text-2xl font-black tabular-nums">{value}</p>
      <p className="text-[10px] font-black uppercase tracking-widest opacity-80">{label}</p>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-2xl border border-gray-100 dark:border-white/10">
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{label}</p>
      <p className="text-lg font-black text-[#060818] dark:text-white">{value}</p>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-4 h-4 rounded ${color} flex-shrink-0 border-gray-200 dark:border-white/10`} />
      <span className="text-gray-600 dark:text-gray-300 font-medium">{label}</span>
    </div>
  );
}

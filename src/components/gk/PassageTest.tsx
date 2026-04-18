"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Zap,
  RefreshCw,
  BookOpen,
  Trophy,
  RotateCcw,
  FileText,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { gkSupabase } from "@/lib/gk-supabase";

interface PassageTestProps {
  onComplete?: (results: {
    score: number;
    total: number;
    timeSpent: number;
  }) => void;
}

interface PassageQuestion {
  id: number;
  test_number: number;
  passage_number: number;
  passage_title: string;
  passage_text: string;
  question_number: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  topic: string;
  difficulty: string;
}

interface PassageGroup {
  passage_number: number;
  passage_title: string;
  passage_text: string;
  questions: PassageQuestion[];
}

const TEST_THEMES = [
  {
    num: 1,
    label: "Test 1",
    subtitle: "India–Pakistan & Operation Sindoor",
    color: "#EF4444",
    bg: "bg-red-50 dark:bg-red-900/10",
    border: "border-red-100 dark:border-red-900/20",
    icon: "🇮🇳",
  },
  {
    num: 2,
    label: "Test 2",
    subtitle: "Constitution & Governance",
    color: "#8B5CF6",
    bg: "bg-violet-50 dark:bg-violet-900/10",
    border: "border-violet-100 dark:border-violet-900/20",
    icon: "⚖️",
  },
  {
    num: 3,
    label: "Test 3",
    subtitle: "Economy & Trade",
    color: "#10B981",
    bg: "bg-emerald-50 dark:bg-emerald-900/10",
    border: "border-emerald-100 dark:border-emerald-900/20",
    icon: "📈",
  },
  {
    num: 4,
    label: "Test 4",
    subtitle: "Science, Tech & Environment",
    color: "#3B82F6",
    bg: "bg-blue-50 dark:bg-blue-900/10",
    border: "border-blue-100 dark:border-blue-900/20",
    icon: "🔬",
  },
  {
    num: 5,
    label: "Test 5",
    subtitle: "International Affairs & Law",
    color: "#F59E0B",
    bg: "bg-amber-50 dark:bg-amber-900/10",
    border: "border-amber-100 dark:border-amber-900/20",
    icon: "🌐",
  },
];

const TIPS = [
  "Read the passage once quickly to grasp the main idea, then re-read relevant sections for each question.",
  'For "NOT supported" questions, verify each option directly against the passage—don\'t rely on outside knowledge.',
  "Vocabulary questions: use the surrounding sentence as context. The passage itself reveals the intended meaning.",
  "Inference questions ask what MUST be true, not what could be true. Stick close to the text.",
  'For "author\'s purpose" questions, focus on the tone and the paragraph structure rather than individual facts.',
];

// ─── Test Selector ────────────────────────────────────────────────────────────

function TestSelector({ onSelect }: { onSelect: (n: number) => void }) {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-[10px] font-black text-[#F59E0B] bg-amber-50 dark:bg-[#F59E0B]/10 px-3 py-1 rounded-full uppercase tracking-[0.2em]">
          Passage Practice
        </span>
        <h2 className="text-3xl font-black mt-3 tracking-tight text-[#060818] dark:text-white">
          Select a Practice Test
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2 font-medium">
          Each test contains 5 passages · 25 questions · ~30 minutes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEST_THEMES.map((t) => (
          <motion.button
            key={t.num}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(t.num)}
            className={`text-left p-8 rounded-[2rem] border-2 ${t.bg} ${t.border} transition-all group relative overflow-hidden`}
          >
            <div className="text-4xl mb-4">{t.icon}</div>
            <div
              className="text-xs font-black uppercase tracking-widest mb-1"
              style={{ color: t.color }}
            >
              {t.label}
            </div>
            <div className="text-lg font-black text-[#060818] dark:text-white leading-snug">
              {t.subtitle}
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-gray-400">
              <FileText size={13} />5 Passages · 25 MCQs
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-10"
              style={{ background: t.color }}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Passage Viewer ────────────────────────────────────────────────────────────

function PassageViewer({
  passages,
  testNum,
  onBack,
  onComplete,
}: {
  passages: PassageGroup[];
  testNum: number;
  onBack: () => void;
  onComplete: (score: number, total: number, timeSpent: number) => void;
}) {
  const theme = TEST_THEMES[testNum - 1];

  // Flatten all questions in order
  const allQuestions: { pIdx: number; q: PassageQuestion }[] = [];
  passages.forEach((p, pIdx) => {
    p.questions.forEach((q) => allQuestions.push({ pIdx, q }));
  });
  const total = allQuestions.length;

  const [currentIdx, setCurrentIdx] = React.useState(0);
  const [answers, setAnswers] = React.useState<(number | null)[]>(
    new Array(total).fill(null),
  );
  const [submitted, setSubmitted] = React.useState(false);
  const [reviewMode, setReviewMode] = React.useState(false);
  const [timeSpent, setTimeSpent] = React.useState(0);
  const [passageExpanded, setPassageExpanded] = React.useState(true);

  React.useEffect(() => {
    if (submitted) return;
    const t = setInterval(() => setTimeSpent((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [submitted]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    return `${m.toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;
  };

  const { pIdx, q } = allQuestions[currentIdx];
  const currentPassage = passages[pIdx];
  const selectedAns = answers[currentIdx];

  const handleSelect = (idx: number) => {
    if (submitted) return;
    const next = [...answers];
    next[currentIdx] = idx;
    setAnswers(next);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const score = answers.reduce<number>((acc, ans, i) => {
      return ans === allQuestions[i].q.correct ? acc + 1 : acc;
    }, 0);
    onComplete(score, total, timeSpent);
  };

  const score = submitted
    ? answers.reduce<number>(
        (acc, ans, i) => (ans === allQuestions[i].q.correct ? acc + 1 : acc),
        0,
      )
    : 0;

  const answered = answers.filter((a) => a !== null).length;
  const tipIdx = pIdx % TIPS.length;

  // ── Results Screen ──────────────────────────────────────────────────────────
  if (submitted && !reviewMode) {
    const pct = Math.round((score / total) * 100);
    const grade =
      pct >= 80
        ? "Excellent"
        : pct >= 60
          ? "Good"
          : pct >= 40
            ? "Average"
            : "Needs Work";
    const gradeColor =
      pct >= 80
        ? "#10B981"
        : pct >= 60
          ? "#F59E0B"
          : pct >= 40
            ? "#3B82F6"
            : "#EF4444";

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto text-center space-y-8"
      >
        <div className="text-6xl">🏆</div>
        <div>
          <h2 className="text-4xl font-black text-[#060818] dark:text-white">
            {grade}!
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Test {testNum} · {theme.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Score", value: `${score}/${total}`, icon: Trophy },
            { label: "Accuracy", value: `${pct}%`, icon: CheckCircle2 },
            { label: "Time", value: formatTime(timeSpent), icon: Clock },
          ].map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/5"
            >
              <Icon size={20} className="mx-auto mb-2 text-[#F59E0B]" />
              <div
                className="text-2xl font-black text-[#060818] dark:text-white"
                style={{ color: gradeColor }}
              >
                {value}
              </div>
              <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Passage breakdown */}
        <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/5 text-left space-y-3">
          <div className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
            Passage Breakdown
          </div>
          {passages.map((p, pi) => {
            const pStart = pi * 5;
            const pScore = answers
              .slice(pStart, pStart + 5)
              .reduce<number>((acc, ans, qi) => {
                return ans === allQuestions[pStart + qi].q.correct
                  ? acc + 1
                  : acc;
              }, 0);
            return (
              <div key={pi} className="flex items-center justify-between">
                <span className="text-sm font-bold text-gray-600 dark:text-gray-400 truncate max-w-[200px]">
                  P{pi + 1}: {p.passage_title}
                </span>
                <span className="text-sm font-black text-[#060818] dark:text-white">
                  {pScore}/5
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setReviewMode(true)}
            className="flex items-center gap-2 justify-center px-6 py-3 rounded-xl border-2 border-[#F59E0B] text-[#F59E0B] font-black hover:bg-amber-50 dark:hover:bg-[#F59E0B]/10 transition-colors"
          >
            <BookOpen size={18} />
            Review Answers
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 justify-center px-6 py-3 rounded-xl bg-[#060818] dark:bg-white text-white dark:text-[#060818] font-black hover:opacity-90 transition-opacity"
          >
            <RotateCcw size={18} />
            Try Another Test
          </button>
        </div>
      </motion.div>
    );
  }

  // ── Review Mode ─────────────────────────────────────────────────────────────
  if (reviewMode) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-[#060818] dark:text-white">
            Review — Test {testNum}
          </h2>
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-black text-gray-400 hover:text-[#060818] dark:hover:text-white transition-colors"
          >
            <RotateCcw size={16} /> New Test
          </button>
        </div>

        {passages.map((p, pi) => (
          <div
            key={pi}
            className="bg-white dark:bg-white/5 rounded-[2rem] border border-gray-100 dark:border-white/5 overflow-hidden"
          >
            <div className="p-6 border-b border-gray-100 dark:border-white/5">
              <div className="text-[10px] font-black text-[#F59E0B] uppercase tracking-widest mb-1">
                Passage {pi + 1}
              </div>
              <div className="text-lg font-black text-[#060818] dark:text-white">
                {p.passage_title}
              </div>
              <details className="mt-3">
                <summary className="text-xs font-bold text-gray-400 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">
                  Show Passage Text
                </summary>
                <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed space-y-3">
                  {p.passage_text.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </details>
            </div>
            <div className="divide-y divide-gray-50 dark:divide-white/5">
              {p.questions.map((q, qi) => {
                const globalIdx = pi * 5 + qi;
                const userAns = answers[globalIdx];
                const isCorrect = userAns === q.correct;
                return (
                  <div key={qi} className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isCorrect ? "bg-green-100 dark:bg-green-900/30" : "bg-red-100 dark:bg-red-900/30"}`}
                      >
                        {isCorrect ? (
                          <CheckCircle2
                            size={14}
                            className="text-green-600 dark:text-green-400"
                          />
                        ) : (
                          <span className="text-red-500 font-black text-xs">
                            ✗
                          </span>
                        )}
                      </div>
                      <span className="font-bold text-[#060818] dark:text-white text-sm leading-snug">
                        {q.question}
                      </span>
                    </div>
                    <div className="ml-9 space-y-2">
                      {q.options.map((opt, oi) => {
                        const isOpt = oi === q.correct;
                        const wasChosen = oi === userAns;
                        return (
                          <div
                            key={oi}
                            className={`text-sm px-4 py-2.5 rounded-xl font-medium ${
                              isOpt
                                ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-900/40"
                                : wasChosen && !isOpt
                                  ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/40"
                                  : "text-gray-500 dark:text-gray-500"
                            }`}
                          >
                            <span className="font-black mr-2">
                              {String.fromCharCode(65 + oi)}.
                            </span>
                            {opt}
                          </div>
                        );
                      })}
                    </div>
                    <div className="ml-9 bg-amber-50 dark:bg-[#F59E0B]/10 rounded-xl p-4 border border-amber-100 dark:border-[#F59E0B]/20">
                      <span className="text-[10px] font-black text-[#F59E0B] uppercase tracking-widest block mb-1">
                        Explanation
                      </span>
                      <p className="text-amber-900/80 dark:text-[#F59E0B]/80 text-sm font-medium leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="flex justify-center pt-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-[#060818] dark:bg-white text-white dark:text-[#060818] font-black hover:opacity-90 transition-opacity"
          >
            <RotateCcw size={18} /> Try Another Test
          </button>
        </div>
      </div>
    );
  }

  // ── Quiz Screen ──────────────────────────────────────────────────────────────
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-xl border border-gray-100 dark:border-white/5 bg-white dark:bg-white/5 text-gray-400 hover:text-[#060818] dark:hover:text-white transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div>
            <span
              className="text-[10px] font-black uppercase tracking-[0.2em]"
              style={{ color: theme.color }}
            >
              Test {testNum} · Passage {pIdx + 1}/5
            </span>
            <h3 className="text-lg font-black text-[#060818] dark:text-white leading-tight">
              {currentPassage.passage_title}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-xs font-bold text-gray-400">
            {answered}/{total} answered
          </div>
          <div className="flex items-center gap-2 bg-[#060818] dark:bg-[#F59E0B] text-white dark:text-[#060818] px-4 py-2 rounded-xl font-mono text-sm font-bold">
            <Clock size={14} className="text-[#F59E0B] dark:text-[#060818]" />
            {formatTime(timeSpent)}
          </div>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1 flex-wrap">
        {allQuestions.map((_, i) => {
          const isAnswered = answers[i] !== null;
          const isCurrent = i === currentIdx;
          return (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              className={`h-2 rounded-full transition-all ${
                isCurrent
                  ? "w-6 bg-[#F59E0B]"
                  : isAnswered
                    ? "w-2 bg-green-400 dark:bg-green-500"
                    : "w-2 bg-gray-200 dark:bg-white/10"
              }`}
            />
          );
        })}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Passage panel */}
        <div className="bg-white dark:bg-white/5 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm overflow-hidden lg:sticky lg:top-24 lg:max-h-[calc(100vh-200px)]">
          {/* Passage header / toggle */}
          <button
            onClick={() => setPassageExpanded((v) => !v)}
            className="w-full flex items-center justify-between px-8 py-5 border-b border-gray-50 dark:border-white/5 lg:cursor-default"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black"
                style={{ background: theme.color + "20", color: theme.color }}
              >
                P{pIdx + 1}
              </div>
              <span className="font-black text-[#060818] dark:text-white text-sm">
                {currentPassage.passage_title}
              </span>
            </div>
            <span className="text-gray-400 lg:hidden">
              {passageExpanded ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {passageExpanded && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="overflow-hidden"
              >
                <div className="p-8 lg:overflow-y-auto lg:max-h-[calc(100vh-340px)]">
                  {currentPassage.passage_text.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5 text-base font-medium"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Question panel */}
        <div className="space-y-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm"
            >
              {/* Q header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                  Q{currentIdx + 1} of {total} &nbsp;·&nbsp; {q.topic}
                </span>
                <span
                  className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${
                    q.difficulty === "easy"
                      ? "bg-green-50 dark:bg-green-900/20 text-green-600"
                      : q.difficulty === "medium"
                        ? "bg-amber-50 dark:bg-amber-900/20 text-amber-600"
                        : "bg-red-50 dark:bg-red-900/20 text-red-500"
                  }`}
                >
                  {q.difficulty}
                </span>
              </div>

              <h3 className="text-xl font-black mb-7 leading-tight text-[#060818] dark:text-white">
                {q.question}
              </h3>

              <div className="space-y-3">
                {q.options.map((opt, oi) => (
                  <button
                    key={oi}
                    onClick={() => handleSelect(oi)}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center gap-4 group ${
                      selectedAns === oi
                        ? "border-[#F59E0B] bg-amber-50/40 dark:bg-[#F59E0B]/10"
                        : "border-gray-50 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10 bg-gray-50/50 dark:bg-white/5"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0 transition-colors ${
                        selectedAns === oi
                          ? "bg-[#F59E0B] text-[#060818]"
                          : "bg-white dark:bg-white/10 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                      }`}
                    >
                      {String.fromCharCode(65 + oi)}
                    </div>
                    <span
                      className={`text-base font-bold leading-snug ${selectedAns === oi ? "text-[#060818] dark:text-[#F59E0B]" : "text-gray-600 dark:text-gray-400"}`}
                    >
                      {opt}
                    </span>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-between pt-6 border-t border-gray-50 dark:border-white/5">
                <button
                  disabled={currentIdx === 0}
                  onClick={() => setCurrentIdx((i) => i - 1)}
                  className="flex items-center gap-2 text-gray-400 hover:text-[#060818] dark:hover:text-white font-black text-sm uppercase tracking-widest disabled:opacity-30 transition-colors"
                >
                  <ChevronLeft size={18} /> Prev
                </button>

                {currentIdx === total - 1 ? (
                  <button
                    onClick={handleSubmit}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#060818] dark:bg-[#F59E0B] text-white dark:text-[#060818] font-black hover:opacity-90 transition-opacity text-sm"
                  >
                    Submit Test <CheckCircle2 size={18} />
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentIdx((i) => i + 1)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#060818] dark:bg-[#F59E0B] text-white dark:text-[#060818] font-black hover:opacity-90 transition-opacity text-sm"
                  >
                    Next <ChevronRight size={18} />
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Tip card */}
          <div className="bg-amber-50 dark:bg-[#F59E0B]/10 p-6 rounded-[2rem] border border-amber-100 dark:border-[#F59E0B]/20">
            <h4 className="text-[#F59E0B] font-black text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
              <Zap size={14} fill="currentColor" /> Strategy Tip
            </h4>
            <p className="text-amber-900/70 dark:text-[#F59E0B]/70 text-sm font-medium leading-relaxed">
              {TIPS[tipIdx]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function PassageTest({ onComplete }: PassageTestProps) {
  const [selectedTest, setSelectedTest] = React.useState<number | null>(null);
  const [passages, setPassages] = React.useState<PassageGroup[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [done, setDone] = React.useState(false);

  const loadTest = async (testNum: number) => {
    setLoading(true);
    setError(null);
    setDone(false);
    try {
      const { data, error: err } = await gkSupabase
        .from("gk_passage_questions")
        .select("*")
        .eq("test_number", testNum)
        .order("passage_number")
        .order("question_number");

      if (err) throw new Error(err.message);
      if (!data || data.length === 0)
        throw new Error("No questions found for this test.");

      // Group by passage
      const groups: Record<number, PassageGroup> = {};
      (data as PassageQuestion[]).forEach((row) => {
        if (!groups[row.passage_number]) {
          groups[row.passage_number] = {
            passage_number: row.passage_number,
            passage_title: row.passage_title,
            passage_text: row.passage_text,
            questions: [],
          };
        }
        groups[row.passage_number].questions.push(row);
      });

      const sorted = Object.values(groups).sort(
        (a, b) => a.passage_number - b.passage_number,
      );
      setPassages(sorted);
      setSelectedTest(testNum);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to load test");
    } finally {
      setLoading(false);
    }
  };

  const handleComplete = (score: number, total: number, timeSpent: number) => {
    setDone(true);
    if (onComplete) onComplete({ score, total, timeSpent });
  };

  const handleBack = () => {
    setSelectedTest(null);
    setPassages([]);
    setDone(false);
  };

  // Loading
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-4">
        <RefreshCw size={36} className="animate-spin text-[#F59E0B]" />
        <p className="text-gray-500 dark:text-gray-400 font-bold">
          Loading passages…
        </p>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-6 text-center">
        <div className="text-5xl">⚠️</div>
        <p className="text-gray-500 dark:text-gray-400 font-bold">{error}</p>
        <button
          onClick={() => {
            setError(null);
            setSelectedTest(null);
          }}
          className="px-6 py-3 rounded-xl bg-[#F59E0B] text-[#060818] font-black hover:opacity-90 transition-opacity"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Test in progress
  if (selectedTest !== null && passages.length > 0) {
    return (
      <PassageViewer
        passages={passages}
        testNum={selectedTest}
        onBack={handleBack}
        onComplete={handleComplete}
      />
    );
  }

  // Test selector
  return <TestSelector onSelect={loadTest} />;
}

'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Trophy,
  Timer,
  RefreshCw,
  AlertCircle,
  BookOpen,
  FileText,
} from 'lucide-react';
import { gkSupabase } from '@/lib/gk-supabase';

interface Props {
  onComplete: (score: number, total: number) => void;
  onBack: () => void;
}

interface PYQQuestion {
  id: number;
  exam: string;
  year: number;
  question: string;
  options: string[];
  correct: number;         // 0-based index
  explanation?: string;
  difficulty?: string;
  topic?: string;
  passage_id?: number | null;
  passage_title?: string | null;
  passage_text?: string | null;
}

const EXAMS = ['CLAT', 'AILET', 'MHCET', 'NLAT'] as const;
const YEARS = [2020, 2021, 2022, 2023, 2024, 2025];
const SECONDS_PER_Q = 90;

type Step = 'select-exam' | 'select-year' | 'quiz' | 'result';

export default function GKPYQTest({ onComplete, onBack }: Props) {
  const [step, setStep] = React.useState<Step>('select-exam');
  const [selectedExam, setSelectedExam] = React.useState<string | null>(null);
  const [selectedYear, setSelectedYear] = React.useState<number | null>(null);

  // Quiz state
  const [questions, setQuestions] = React.useState<PYQQuestion[]>([]);
  const [answers, setAnswers] = React.useState<(number | null)[]>([]);
  const [currentQ, setCurrentQ] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState(SECONDS_PER_Q);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [submitted, setSubmitted] = React.useState(false);
  const [showPassage, setShowPassage] = React.useState(true);

  // Timer
  React.useEffect(() => {
    if (step !== 'quiz' || submitted) return;
    if (timeLeft <= 0) { handleNext(); return; }
    const t = setTimeout(() => setTimeLeft(p => p - 1), 1000);
    return () => clearTimeout(t);
  }, [step, timeLeft, submitted]);

  async function loadQuestions(exam: string, year: number) {
    setLoading(true);
    setError(null);
    const { data, error: err } = await gkSupabase
      .from('gk_pyq_questions')
      .select('*')
      .eq('exam', exam)
      .eq('year', year)
      .order('id');
    setLoading(false);
    if (err || !data || data.length === 0) {
      setError(err?.message || `No questions found for ${exam} ${year}`);
      return;
    }
    setQuestions(data as PYQQuestion[]);
    setAnswers(new Array(data.length).fill(null));
    setCurrentQ(0);
    setTimeLeft(SECONDS_PER_Q);
    setSubmitted(false);
    setShowPassage(true);
    setStep('quiz');
  }

  function handleSelectExam(exam: string) {
    setSelectedExam(exam);
    setStep('select-year');
  }

  function handleSelectYear(year: number) {
    setSelectedYear(year);
    loadQuestions(selectedExam!, year);
  }

  function handleAnswer(idx: number) {
    if (submitted) return;
    setAnswers(prev => {
      const next = [...prev];
      next[currentQ] = idx;
      return next;
    });
  }

  function handleNext() {
    if (currentQ < questions.length - 1) {
      const nextQ = currentQ + 1;
      setCurrentQ(nextQ);
      setTimeLeft(SECONDS_PER_Q);
      setSubmitted(false);
      // Auto-show passage if next question has one (and it's a different passage)
      const cur = questions[currentQ];
      const nxt = questions[nextQ];
      if (nxt?.passage_id && nxt.passage_id !== cur?.passage_id) {
        setShowPassage(true);
      }
    } else {
      finishQuiz();
    }
  }

  function handlePrev() {
    if (currentQ > 0) {
      setCurrentQ(p => p - 1);
      setTimeLeft(SECONDS_PER_Q);
      setSubmitted(false);
    }
  }

  function finishQuiz() {
    const score = questions.reduce((acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0), 0);
    onComplete(score, questions.length);
    setStep('result');
  }

  function restart() {
    setStep('select-exam');
    setSelectedExam(null);
    setSelectedYear(null);
    setQuestions([]);
    setAnswers([]);
    setCurrentQ(0);
    setTimeLeft(SECONDS_PER_Q);
    setSubmitted(false);
    setError(null);
  }

  // ── Select Exam ───────────────────────────────────────────────────────────────
  if (step === 'select-exam') {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={onBack} className="p-2 rounded-lg bg-[#0d1425] border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white transition-all">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-white">PYQ Tests</h2>
            <p className="text-gray-400 text-sm">Previous Year Questions — Select Exam</p>
          </div>
        </div>
        <div className="bg-[#0d1425] border border-gray-800 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-bold text-white">Choose Your Exam</h3>
          </div>
          <p className="text-gray-400 mb-8">90 seconds per question · Timed GK section</p>
          <div className="grid grid-cols-2 gap-4">
            {EXAMS.map(exam => (
              <motion.button key={exam} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={() => handleSelectExam(exam)}
                className="bg-[#0a0f1e] border border-blue-500/30 hover:border-blue-400 rounded-xl p-6 text-white text-xl font-bold hover:bg-blue-500/10 transition-all text-center">
                {exam}
                <p className="text-gray-400 text-sm font-normal mt-1">
                  {exam === 'CLAT'  && 'Common Law Admission Test'}
                  {exam === 'AILET' && 'All India Law Entrance Test'}
                  {exam === 'MHCET' && 'Maharashtra CET Law'}
                  {exam === 'NLAT'  && 'National Law Aptitude Test'}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── Select Year ───────────────────────────────────────────────────────────────
  if (step === 'select-year') {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => setStep('select-exam')} className="p-2 rounded-lg bg-[#0d1425] border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white transition-all">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-white">{selectedExam} PYQs</h2>
            <p className="text-gray-400 text-sm">Select a year to begin</p>
          </div>
        </div>
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center gap-3 text-red-400">
            <AlertCircle className="w-5 h-5 shrink-0" /><span>{error}</span>
          </div>
        )}
        <div className="bg-[#0d1425] border border-gray-800 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-2">{selectedExam} — Select Year</h3>
          <p className="text-gray-400 mb-8">90 seconds per question · Timed GK section</p>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <RefreshCw className="w-8 h-8 text-blue-400 animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {YEARS.map(year => (
                <motion.button key={year} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelectYear(year)}
                  className="bg-[#0a0f1e] border border-blue-500/30 hover:border-blue-400 rounded-xl p-5 text-white text-lg font-semibold hover:bg-blue-500/10 transition-all">
                  {year}
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── Quiz ──────────────────────────────────────────────────────────────────────
  if (step === 'quiz') {
    const q = questions[currentQ];
    if (!q) return null;

    const opts = q.options || [];
    const correctIdx = q.correct; // already a 0-based index
    const chosen = answers[currentQ];
    const timerPct = (timeLeft / SECONDS_PER_Q) * 100;
    const timerColor = timeLeft > 30 ? 'bg-green-500' : timeLeft > 10 ? 'bg-yellow-500' : 'bg-red-500';
    const hasPassage = !!(q.passage_id && q.passage_text);

    return (
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={restart} className="p-2 rounded-lg bg-[#0d1425] border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white transition-all">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-lg font-bold text-white">{selectedExam} {selectedYear}</h2>
              <p className="text-gray-400 text-sm">GK Section · PYQ</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-white font-mono text-lg">
            <Timer className="w-5 h-5 text-blue-400" />
            <span className={timeLeft <= 10 ? 'text-red-400' : ''}>{timeLeft}s</span>
          </div>
        </div>

        {/* Timer bar */}
        <div className="w-full bg-gray-800 rounded-full h-1.5">
          <div className={`${timerColor} h-1.5 rounded-full transition-all duration-1000`} style={{ width: `${timerPct}%` }} />
        </div>

        {/* Question counter */}
        <div className="text-gray-400 text-sm">Question {currentQ + 1} of {questions.length}</div>

        {/* Passage block */}
        {hasPassage && (
          <div className="bg-[#0a0f1e] border border-amber-500/30 rounded-2xl overflow-hidden">
            <button
              onClick={() => setShowPassage(p => !p)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-amber-500/5 transition-all"
            >
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-amber-300 font-semibold text-sm">{q.passage_title || 'Passage'}</span>
              </div>
              <span className="text-amber-400 text-xs">{showPassage ? '▲ Hide' : '▼ Show'}</span>
            </button>
            <AnimatePresence>
              {showPassage && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 text-gray-300 text-sm leading-relaxed border-t border-amber-500/20 pt-3 max-h-64 overflow-y-auto">
                    {q.passage_text}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Question card */}
        <AnimatePresence mode="wait">
          <motion.div key={currentQ}
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            className="bg-[#0d1425] border border-gray-800 rounded-2xl p-6"
          >
            <p className="text-white text-lg font-medium mb-6 leading-relaxed">{q.question}</p>
            <div className="space-y-3">
              {opts.map((opt, idx) => {
                let cls = 'w-full text-left p-4 rounded-xl border transition-all font-medium ';
                if (!submitted) {
                  cls += chosen === idx
                    ? 'bg-blue-500/20 border-blue-400 text-white'
                    : 'bg-[#0a0f1e] border-gray-700 text-gray-300 hover:border-blue-500/50 hover:bg-blue-500/5';
                } else {
                  if (idx === correctIdx)        cls += 'bg-green-500/20 border-green-400 text-green-300';
                  else if (chosen === idx)       cls += 'bg-red-500/20 border-red-400 text-red-300';
                  else                           cls += 'bg-[#0a0f1e] border-gray-700 text-gray-500';
                }
                return (
                  <button key={idx} onClick={() => handleAnswer(idx)} disabled={submitted} className={cls}>
                    <span className="mr-3 text-gray-500 font-bold">{String.fromCharCode(65 + idx)}.</span>
                    {opt}
                    {submitted && idx === correctIdx && <CheckCircle2 className="inline w-4 h-4 ml-2 text-green-400" />}
                    {submitted && chosen === idx && idx !== correctIdx && <XCircle className="inline w-4 h-4 ml-2 text-red-400" />}
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {submitted && q.explanation && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl text-blue-300 text-sm">
                <strong className="text-blue-400">Explanation: </strong>{q.explanation}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button onClick={handlePrev} disabled={currentQ === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0d1425] border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 disabled:opacity-30 transition-all">
            <ArrowLeft className="w-4 h-4" /> Prev
          </button>

          {!submitted && chosen !== null && (
            <button onClick={() => setSubmitted(true)}
              className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all">
              Check Answer
            </button>
          )}

          {(submitted || chosen === null) && (
            <button onClick={handleNext}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all">
              {currentQ === questions.length - 1 ? 'Finish' : 'Next'} <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── Result ────────────────────────────────────────────────────────────────────
  if (step === 'result') {
    const score = questions.reduce((acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0), 0);
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="space-y-6 text-center">
        <div className="bg-[#0d1425] border border-gray-800 rounded-2xl p-10">
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-1">{selectedExam} {selectedYear} Complete!</h2>
          <p className="text-gray-400 mb-6">GK Section · PYQ</p>
          <div className="text-6xl font-bold text-white mb-2">{score}/{questions.length}</div>
          <div className={`text-2xl font-semibold mb-8 ${pct >= 70 ? 'text-green-400' : pct >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
            {pct}%
          </div>
          <div className="flex gap-4 justify-center">
            <button onClick={restart} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all">
              <RefreshCw className="w-4 h-4" /> Try Another
            </button>
            <button onClick={onBack} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0a0f1e] border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-semibold transition-all">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

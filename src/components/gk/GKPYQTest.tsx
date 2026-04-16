'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  History,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Trophy,
  Timer,
  RefreshCw,
  AlertCircle,
  Lightbulb,
  BookOpen
} from 'lucide-react';
import { gkSupabase } from '@/lib/gk-supabase';

interface PYQQuestion {
  id: number;
  year: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  topic?: string;
  passage_text?: string;
  passage_title?: string;
}

interface GKPYQTestProps {
  onComplete?: (results: { score: number; total: number; timeSpent: number }) => void;
  onBack?: () => void;
}

const YEARS = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

const YEAR_COLORS: Record<number, { bg: string; text: string; accent: string }> = {
  2020: { bg: 'bg-blue-500', text: 'text-white', accent: 'bg-blue-500/10' },
  2021: { bg: 'bg-purple-500', text: 'text-white', accent: 'bg-purple-500/10' },
  2022: { bg: 'bg-emerald-500', text: 'text-white', accent: 'bg-emerald-500/10' },
  2023: { bg: 'bg-rose-500', text: 'text-white', accent: 'bg-rose-500/10' },
  2024: { bg: 'bg-orange-500', text: 'text-white', accent: 'bg-orange-500/10' },
  2025: { bg: 'bg-cyan-500', text: 'text-white', accent: 'bg-cyan-500/10' },
  2026: { bg: 'bg-[#F59E0B]', text: 'text-[#060818]', accent: 'bg-[#F59E0B]/10' },
};

function YearSelector({ onSelect, onBack }: { onSelect: (year: number) => void; onBack?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between flex-wrap gap-4">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
          >
            <ArrowLeft size={16} /> Back to Engine
          </button>
        )}
        <div>
          <h2 className="text-3xl font-black text-[#060818] dark:text-white tracking-tight">
            PYQs (2020–2026)
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium text-sm mt-1">
            Official Previous Year Questions with detailed legal explanations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {YEARS.map((year, idx) => {
          const c = YEAR_COLORS[year];
          return (
            <motion.button
              key={year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onSelect(year)}
              className="group bg-white dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/10 text-left hover:shadow-xl transition-all duration-300 space-y-4 overflow-hidden relative"
            >
              <div className={`absolute -right-6 -top-6 w-24 h-24 ${c.bg} opacity-5 group-hover:opacity-10 rounded-full transition-all`} />
              <div className={`w-12 h-12 ${c.bg} ${c.text} rounded-2xl flex items-center justify-center shadow-lg font-black text-sm relative`}>
                {year}
              </div>
              <div className="relative">
                <p className="font-black text-[#060818] dark:text-white text-lg group-hover:text-[#F59E0B] transition-colors">
                  CLAT {year}
                </p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                  GK · Current Affairs
                </p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-50 dark:border-white/5 relative">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">PYQ Set</span>
                <ArrowRight size={14} className="text-gray-300 group-hover:text-[#F59E0B] group-hover:translate-x-1 transition-all" />
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

function QuizScreen({
  questions,
  year,
  onComplete,
  onBack,
}: {
  questions: PYQQuestion[];
  year: number;
  onComplete: (r: { score: number; total: number; timeSpent: number }) => void;
  onBack: () => void;
}) {
  const [current, setCurrent] = React.useState(0);
  const [answers, setAnswers] = React.useState<(number | null)[]>(Array(questions.length).fill(null));
  const [answered, setAnswered] = React.useState(false);
  const [selected, setSelected] = React.useState<number | null>(null);
  const [timeLeft, setTimeLeft] = React.useState(questions.length * 75);
  const [startTime] = React.useState(Date.now());
  const [showPassage, setShowPassage] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinish(answers);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAnswer = (optIndex: number) => {
    if (answered) return;
    setSelected(optIndex);
    setAnswered(true);
    const updated = [...answers];
    updated[current] = optIndex;
    setAnswers(updated);
  };

  const handleFinish = (finalAnswers: (number | null)[]) => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    const score = finalAnswers.reduce((acc, ans, i) => {
      return ans === questions[i].correct ? acc + 1 : acc;
    }, 0) as number;
    onComplete({ score, total: questions.length, timeSpent });
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      const next = current + 1;
      setCurrent(next);
      setAnswered(answers[next] !== null);
      setSelected(answers[next]);
      setShowPassage(false);
    } else {
      handleFinish(answers);
    }
  };

  const q = questions[current];
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const progress = ((current + 1) / questions.length) * 100;
  const isCorrect = selected === q.correct;
  const OPTION_LABELS = ['A', 'B', 'C', 'D'];

  return (
    <motion.div
      key={current}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6 max-w-2xl mx-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
        >
          <ArrowLeft size={14} /> CLAT {year}
        </button>
        <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-black text-sm ${
          timeLeft < 60 ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'
        }`}>
          <Timer size={16} />
          {mins}:{secs.toString().padStart(2, '0')}
        </div>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
            Question {current + 1} of {questions.length}
          </span>
          <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">
            CLAT {year} PYQ
          </span>
        </div>
        <div className="h-1.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* Passage (if any) */}
      {q.passage_text && (
        <div className="bg-blue-50 dark:bg-blue-500/5 rounded-2xl border border-blue-100 dark:border-blue-500/10 overflow-hidden">
          <button
            onClick={() => setShowPassage(!showPassage)}
            className="w-full flex items-center justify-between p-4 font-bold text-sm text-blue-700 dark:text-blue-300"
          >
            <span className="flex items-center gap-2">
              <BookOpen size={16} />
              {q.passage_title || 'Read Passage'}
            </span>
            <span className="text-[10px] uppercase tracking-widest">{showPassage ? 'Hide' : 'Show'}</span>
          </button>
          <AnimatePresence>
            {showPassage && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-4 pb-4"
              >
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{q.passage_text}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/10 space-y-6"
        >
          {q.topic && (
            <span className="inline-block text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">
              {q.topic}
            </span>
          )}
          <p className="text-base font-bold text-[#060818] dark:text-white leading-relaxed">
            {q.question}
          </p>

          <div className="space-y-3">
            {q.options.map((opt, i) => {
              let style = 'bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-blue-300/50';
              if (answered) {
                if (i === q.correct) style = 'bg-green-50 dark:bg-green-500/10 border-green-400 text-green-700 dark:text-green-300';
                else if (i === selected && selected !== q.correct) style = 'bg-red-50 dark:bg-red-500/10 border-red-400 text-red-700 dark:text-red-300';
                else style = 'bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-white/10 text-gray-400 opacity-60';
              }
              return (
                <motion.button
                  key={i}
                  whileTap={!answered ? { scale: 0.98 } : {}}
                  onClick={() => handleAnswer(i)}
                  disabled={answered}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left font-medium text-sm ${style} ${!answered ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-[11px] font-black shrink-0 ${
                    answered && i === q.correct ? 'bg-green-500 text-white' :
                    answered && i === selected && selected !== q.correct ? 'bg-red-500 text-white' :
                    'bg-gray-200 dark:bg-white/10 text-gray-500'
                  }`}>
                    {answered && i === q.correct ? <CheckCircle2 size={14} /> :
                     answered && i === selected && selected !== q.correct ? <XCircle size={14} /> :
                     OPTION_LABELS[i]}
                  </span>
                  {opt}
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence>
            {answered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-2xl border ${
                  isCorrect
                    ? 'bg-green-50 dark:bg-green-500/10 border-green-200 dark:border-green-500/20'
                    : 'bg-amber-50 dark:bg-[#F59E0B]/10 border-amber-200 dark:border-[#F59E0B]/20'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {isCorrect
                    ? <CheckCircle2 size={14} className="text-green-600" />
                    : <Lightbulb size={14} className="text-[#F59E0B]" />
                  }
                  <span className={`text-[10px] font-black uppercase tracking-widest ${isCorrect ? 'text-green-700' : 'text-[#F59E0B]'}`}>
                    {isCorrect ? 'Correct!' : 'Explanation'}
                  </span>
                </div>
                <p className="text-xs font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                  {q.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {answered && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleNext}
          className="w-full py-4 bg-[#060818] dark:bg-[#F59E0B] text-white dark:text-[#060818] rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl"
        >
          {current < questions.length - 1 ? (
            <><ArrowRight size={18} /> Next Question</>
          ) : (
            <><Trophy size={18} /> View Results</>
          )}
        </motion.button>
      )}

      {/* Nav dots */}
      <div className="flex flex-wrap gap-1.5 justify-center">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === current ? 'w-4 bg-blue-500' :
              answers[i] !== null
                ? answers[i] === questions[i].correct ? 'w-2 bg-green-400' : 'w-2 bg-red-400'
                : 'w-2 bg-gray-200 dark:bg-white/20'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function GKPYQTest({ onComplete, onBack }: GKPYQTestProps) {
  const [selectedYear, setSelectedYear] = React.useState<number | null>(null);
  const [questions, setQuestions] = React.useState<PYQQuestion[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const loadYear = async (year: number) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: err } = await gkSupabase
        .from('gk_pyq_questions')
        .select('*')
        .eq('year', year)
        .order('id');

      if (err) throw err;
      if (!data || data.length === 0) throw new Error('No questions found for this year.');
      setQuestions(data as PYQQuestion[]);
      setSelectedYear(year);
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : 'Failed to load questions.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        >
          <RefreshCw size={32} className="text-blue-500" />
        </motion.div>
        <p className="text-sm font-bold text-gray-500 dark:text-gray-400">Loading PYQs…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
        <AlertCircle size={40} className="text-red-500" />
        <p className="font-bold text-[#060818] dark:text-white">Failed to load questions</p>
        <p className="text-sm text-gray-500">{error}</p>
        <button
          onClick={() => { setError(null); setSelectedYear(null); }}
          className="px-5 py-2 bg-[#F59E0B] text-[#060818] rounded-xl font-black text-sm"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!selectedYear) {
    return <YearSelector onSelect={loadYear} onBack={onBack} />;
  }

  return (
    <QuizScreen
      questions={questions}
      year={selectedYear}
      onComplete={onComplete || (() => {})}
      onBack={() => setSelectedYear(null)}
    />
  );
}

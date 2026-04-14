import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  Trophy,
  Zap,
  BookOpen,
  ChevronRight,
  RotateCcw,
  AlertCircle,
  Target,
  Lightbulb
} from 'lucide-react';
import {
  WeeklyQuiz,
  WeeklyQuizQuestion,
  WeeklyQuizResult,
  WeeklyQuizCategoryResult,
  QUIZ_CATEGORY_META,
  QuizCategory
} from '../data/weekly-quiz/types';

// âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
// WeeklyQuizListing â shows all available quizzes as cards
// âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
interface ListingProps {
  quizzes: WeeklyQuiz[];
  onSelect: (quiz: WeeklyQuiz) => void;
  onBack: () => void;
}

export function WeeklyQuizListing({ quizzes, onSelect, onBack }: ListingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Back + Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-brand-amber transition-colors font-bold uppercase text-[10px] tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Engine
        </button>
        <div className="text-right">
          <h2 className="text-2xl font-black text-brand-navy dark:text-white">Weekly Quizzes</h2>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
            {quizzes.length} {quizzes.length === 1 ? 'Quiz' : 'Quizzes'} Available
          </p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-brand-amber/10 border border-brand-amber/20 rounded-3xl p-6 flex items-start gap-4">
        <div className="w-10 h-10 bg-brand-amber rounded-2xl flex items-center justify-center flex-shrink-0">
          <Zap size={20} className="text-brand-navy" fill="currentColor" />
        </div>
        <div className="space-y-1">
          <p className="font-black text-brand-navy dark:text-white text-sm">
            30 questions Â· 35 minutes Â· No negative marking
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">
            Covers National &amp; International Current Affairs, Legal GK, Static GK, Important Days &amp; more â updated every week.
          </p>
        </div>
      </div>

      {/* Quiz Cards */}
      {quizzes.length === 0 ? (
        <div className="bg-white dark:bg-white/5 p-12 rounded-[3rem] border border-gray-100 dark:border-white/10 text-center space-y-4">
          <div className="w-16 h-16 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto">
            <BookOpen size={32} className="text-gray-300" />
          </div>
          <p className="text-brand-navy dark:text-white font-black text-lg">No quizzes yet</p>
          <p className="text-gray-500 text-sm font-medium">The first weekly quiz will appear here every Monday.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {quizzes.map((quiz, idx) => (
            <motion.button
              key={quiz.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(quiz)}
              className="group relative bg-white dark:bg-white/5 p-7 rounded-[2.5rem] border border-gray-100 dark:border-white/10 text-left hover:shadow-2xl hover:shadow-brand-amber/10 transition-all duration-300 overflow-hidden"
            >
              {/* Accent blob */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-brand-amber opacity-5 group-hover:opacity-10 rounded-full transition-all duration-500" />

              <div className="space-y-5 relative">
                {/* Week badge */}
                <div className="flex items-start justify-between">
                  <span className="inline-block bg-brand-amber/10 text-brand-amber font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                    Week {quiz.week} Â· {quiz.month} {quiz.year}
                  </span>
                  <ChevronRight
                    size={18}
                    className="text-gray-300 group-hover:text-brand-amber transition-all group-hover:translate-x-1"
                  />
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-black text-brand-navy dark:text-white text-base leading-snug group-hover:text-brand-amber transition-colors">
                    {quiz.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-bold mt-1 uppercase tracking-widest">
                    {quiz.dateRange}
                  </p>
                </div>

                {/* Stats row */}
                <div className="pt-4 border-t border-gray-50 dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs font-bold">
                    <Target size={13} />
                    <span>{quiz.totalQuestions} Questions</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs font-bold">
                    <Clock size={13} />
                    <span>35 Mins</span>
                  </div>
                  <span className="text-[10px] font-black text-brand-amber uppercase tracking-widest bg-brand-amber/10 px-2 py-0.5 rounded">
                    Start â
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
// WeeklyQuizRunner â runs a quiz and shows scorecard after
// âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
interface RunnerProps {
  quiz: WeeklyQuiz;
  onBack: () => void;           // back to listing
  onFinish: () => void;         // back to listing after results
}

export function WeeklyQuizRunner({ quiz, onBack, onFinish }: RunnerProps) {
  const DURATION_SECS = 35 * 60; // 35 minutes

  const [phase, setPhase] = React.useState<'quiz' | 'result'>('quiz');
  const [current, setCurrent] = React.useState(0);
  const [answers, setAnswers] = React.useState<(number | null)[]>(
    Array(quiz.totalQuestions).fill(null)
  );
  const [revealed, setRevealed] = React.useState(false);   // show correct answer for current Q
  const [timeLeft, setTimeLeft] = React.useState(DURATION_SECS);
  const [startTime] = React.useState(Date.now());
  const [result, setResult] = React.useState<WeeklyQuizResult | null>(null);

  // Timer
  React.useEffect(() => {
    if (phase !== 'quiz') return;
    if (timeLeft <= 0) { handleSubmit(); return; }
    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, phase]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const q: WeeklyQuizQuestion = quiz.questions[current];
  const selected = answers[current];

  const selectAnswer = (idx: number) => {
    if (revealed) return;
    const next = [...answers];
    next[current] = idx;
    setAnswers(next);
    setRevealed(true);
  };

  const goNext = () => {
    setRevealed(false);
    if (current < quiz.totalQuestions - 1) {
      setCurrent(c => c + 1);
    } else {
      handleSubmit();
    }
  };

  const goPrev = () => {
    setRevealed(false);
    if (current > 0) setCurrent(c => c - 1);
  };

  const handleSubmit = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);

    // Build per-category results
    const catMap: Record<string, { correct: number; incorrect: number; unattempted: number; total: number }> = {};
    quiz.questions.forEach((question, i) => {
      const cat = question.category;
      if (!catMap[cat]) catMap[cat] = { correct: 0, incorrect: 0, unattempted: 0, total: 0 };
      catMap[cat].total++;
      if (answers[i] === null) catMap[cat].unattempted++;
      else if (answers[i] === question.correct) catMap[cat].correct++;
      else catMap[cat].incorrect++;
    });

    const categoryResults: WeeklyQuizCategoryResult[] = Object.entries(catMap).map(([cat, stats]) => ({
      category: cat as QuizCategory,
      label: QUIZ_CATEGORY_META[cat as QuizCategory]?.label ?? cat,
      ...stats,
      score: stats.correct,
    }));

    const totalScore = categoryResults.reduce((s, c) => s + c.correct, 0);

    setResult({
      quizId: quiz.id,
      quizTitle: quiz.title,
      totalScore,
      totalQuestions: quiz.totalQuestions,
      timeSpent,
      categoryResults,
      answers,
      questions: quiz.questions,
    });
    setPhase('result');
  };

  // ââ SCORECARD âââââââââââââââââââââââââââââââââââââââââââââ
  if (phase === 'result' && result) {
    return <WeeklyQuizScorecard result={result} quiz={quiz} onBack={onFinish} onRetake={() => {
      setPhase('quiz');
      setCurrent(0);
      setAnswers(Array(quiz.totalQuestions).fill(null));
      setRevealed(false);
      setTimeLeft(DURATION_SECS);
      setResult(null);
    }} />;
  }

  // ââ QUIZ UI ââââââââââââââââââââââââââââââââââââââââââââââ
  const answered = answers.filter(a => a !== null).length;
  const timerWarning = timeLeft < 5 * 60;
  const meta = QUIZ_CATEGORY_META[q.category];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 max-w-3xl mx-auto"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-brand-amber transition-colors font-bold uppercase text-[10px] tracking-widest"
        >
          <ArrowLeft size={16} /> Back
        </button>
        <div className="flex items-center gap-4">
          {/* Timer */}
          <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-black text-sm transition-colors ${
            timerWarning
              ? 'bg-red-500/10 text-red-500'
              : 'bg-gray-50 dark:bg-white/5 text-brand-navy dark:text-white'
          }`}>
            <Clock size={16} />
            {formatTime(timeLeft)}
          </div>
          {/* Progress */}
          <div className="text-xs font-black text-gray-400 uppercase tracking-widest">
            {answered} / {quiz.totalQuestions} Answered
          </div>
          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="bg-brand-navy text-white px-4 py-2 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-navy/80 transition-all"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-brand-amber"
          animate={{ width: `${((current + 1) / quiz.totalQuestions) * 100}%` }}
          transition={{ type: 'spring', stiffness: 120 }}
        />
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-white/5 rounded-[2.5rem] border border-gray-100 dark:border-white/10 p-8 space-y-8"
        >
          {/* Category + Q number */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <span
              className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ color: meta?.color ?? '#f59e0b', backgroundColor: meta?.bgColor ?? '#fffbeb' }}
            >
              {meta?.label ?? q.category}
            </span>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Q {current + 1} / {quiz.totalQuestions}
              {q.difficulty && (
                <span className={`ml-2 px-2 py-0.5 rounded text-[10px] font-black ${
                  q.difficulty === 'Easy' ? 'bg-green-100 text-green-600' :
                  q.difficulty === 'Hard' ? 'bg-red-100 text-red-600' :
                  'bg-amber-100 text-amber-600'
                }`}>
                  {q.difficulty}
                </span>
              )}
            </span>
          </div>

          {/* Question Text */}
          <p className="text-brand-navy dark:text-white font-bold text-base leading-relaxed">
            {q.question_text}
          </p>

          {/* Options */}
          <div className="space-y-3">
            {q.options.map((option, idx) => {
              const isSelected = selected === idx;
              const isCorrect = idx === q.correct;
              let cls = 'border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:border-brand-amber/50';
              if (revealed) {
                if (isCorrect) cls = 'border-green-400 bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400';
                else if (isSelected && !isCorrect) cls = 'border-red-400 bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400';
              } else if (isSelected) {
                cls = 'border-brand-amber bg-brand-amber/10 text-brand-navy dark:text-white';
              }

              return (
                <button
                  key={idx}
                  onClick={() => selectAnswer(idx)}
                  disabled={revealed}
                  className={`w-full text-left px-6 py-4 rounded-2xl border-2 transition-all font-semibold text-sm flex items-center gap-3 ${cls}`}
                >
                  <span className="w-6 h-6 rounded-lg border-2 border-current flex items-center justify-center font-black text-[11px] flex-shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1">{option}</span>
                  {revealed && isCorrect && <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />}
                  {revealed && isSelected && !isCorrect && <XCircle size={18} className="text-red-500 flex-shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation (shown after answer) */}
          <AnimatePresence>
            {revealed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-amber-50 dark:bg-brand-amber/5 border border-amber-100 dark:border-brand-amber/20 rounded-2xl p-5"
              >
                <div className="flex items-start gap-3">
                  <Lightbulb size={18} className="text-brand-amber mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-medium text-amber-900/80 dark:text-brand-amber/80 leading-relaxed">
                    {q.explanation}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl font-black text-sm text-brand-navy dark:text-white disabled:opacity-40 hover:border-brand-amber/50 transition-all"
        >
          <ArrowLeft size={16} /> Previous
        </button>

        {/* Mini nav dots */}
        <div className="flex items-center gap-1.5 flex-wrap justify-center max-w-xs">
          {quiz.questions.map((_, i) => (
            <button
              key={i}
              onClick={() => { setRevealed(false); setCurrent(i); }}
              title={`Q${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? 'bg-brand-amber scale-125' :
                answers[i] !== null ? 'bg-green-400' :
                'bg-gray-200 dark:bg-white/10'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="flex items-center gap-2 px-6 py-3 bg-brand-amber text-brand-navy rounded-2xl font-black text-sm hover:shadow-xl hover:shadow-brand-amber/20 transition-all"
        >
          {current === quiz.totalQuestions - 1 ? 'Finish' : 'Next'}
          <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
}

// âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
// WeeklyQuizScorecard â shown after quiz completion
// âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
interface ScorecardProps {
  result: WeeklyQuizResult;
  quiz: WeeklyQuiz;
  onBack: () => void;
  onRetake: () => void;
}

function WeeklyQuizScorecard({ result, quiz, onBack, onRetake }: ScorecardProps) {
  const [reviewMode, setReviewMode] = React.useState(false);
  const [reviewIdx, setReviewIdx] = React.useState(0);
  const pct = Math.round((result.totalScore / result.totalQuestions) * 100);
  const grade = pct >= 80 ? { label: 'Excellent!', color: 'text-green-500' } :
                pct >= 60 ? { label: 'Good Job!',  color: 'text-brand-amber' } :
                pct >= 40 ? { label: 'Fair',       color: 'text-orange-500' } :
                            { label: 'Needs Work', color: 'text-red-500' };

  if (reviewMode) {
    const q = quiz.questions[reviewIdx];
    const userAnswer = result.answers[reviewIdx];
    const meta = QUIZ_CATEGORY_META[q.category];
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6 max-w-3xl mx-auto"
      >
        <button
          onClick={() => setReviewMode(false)}
          className="flex items-center gap-2 text-gray-500 hover:text-brand-amber transition-colors font-bold uppercase text-[10px] tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Scorecard
        </button>

        {/* Q navigation */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <span style={{ color: meta?.color, backgroundColor: meta?.bgColor }}
            className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
            {meta?.label ?? q.category}
          </span>
          <span className="text-xs font-black text-gray-400 uppercase tracking-widest">
            Q {reviewIdx + 1} / {quiz.totalQuestions}
          </span>
        </div>

        <div className="bg-white dark:bg-white/5 rounded-[2.5rem] border border-gray-100 dark:border-white/10 p-8 space-y-6">
          <p className="text-brand-navy dark:text-white font-bold text-base leading-relaxed">{q.question_text}</p>
          <div className="space-y-3">
            {q.options.map((opt, idx) => {
              const isCorrect = idx === q.correct;
              const isUser = idx === userAnswer;
              let cls = 'border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400';
              if (isCorrect) cls = 'border-green-400 bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400';
              else if (isUser && !isCorrect) cls = 'border-red-400 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400';
              return (
                <div key={idx} className={`flex items-center gap-3 px-6 py-4 rounded-2xl border-2 font-semibold text-sm ${cls}`}>
                  <span className="w-6 h-6 rounded-lg border-2 border-current flex items-center justify-center font-black text-[11px] flex-shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1">{opt}</span>
                  {isCorrect && <CheckCircle2 size={17} className="text-green-500 flex-shrink-0" />}
                  {isUser && !isCorrect && <XCircle size={17} className="text-red-500 flex-shrink-0" />}
                </div>
              );
            })}
          </div>
          <div className="bg-amber-50 dark:bg-brand-amber/5 border border-amber-100 dark:border-brand-amber/20 rounded-2xl p-5 flex items-start gap-3">
            <Lightbulb size={18} className="text-brand-amber mt-0.5 flex-shrink-0" />
            <p className="text-sm font-medium text-amber-900/80 dark:text-brand-amber/80 leading-relaxed">{q.explanation}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button onClick={() => setReviewIdx(i => Math.max(0, i - 1))} disabled={reviewIdx === 0}
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl font-black text-sm disabled:opacity-40 hover:border-brand-amber/50 transition-all text-brand-navy dark:text-white">
            <ArrowLeft size={16} /> Prev
          </button>
          <button onClick={() => setReviewIdx(i => Math.min(quiz.totalQuestions - 1, i + 1))} disabled={reviewIdx === quiz.totalQuestions - 1}
            className="flex items-center gap-2 px-6 py-3 bg-brand-amber text-brand-navy rounded-2xl font-black text-sm hover:shadow-xl hover:shadow-brand-amber/20 transition-all">
            Next <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-8 max-w-4xl mx-auto"
    >
      {/* Back */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-brand-amber transition-colors font-bold uppercase text-[10px] tracking-widest"
      >
        <ArrowLeft size={16} /> Back to Quizzes
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Score Card */}
        <div className="bg-brand-navy p-10 rounded-[3rem] text-center space-y-6 shadow-2xl">
          <div className="relative inline-block">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 128 128">
              <circle cx="64" cy="64" r="56" stroke="white" strokeOpacity="0.1" strokeWidth="12" fill="transparent" />
              <motion.circle
                cx="64" cy="64" r="56"
                stroke="#f59e0b" strokeWidth="12" fill="transparent"
                strokeLinecap="round"
                strokeDasharray={351.9}
                initial={{ strokeDashoffset: 351.9 }}
                animate={{ strokeDashoffset: 351.9 - (351.9 * pct) / 100 }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-white">{pct}%</span>
            </div>
          </div>
          <div>
            <p className="text-white font-black text-2xl">{result.totalScore} / {result.totalQuestions}</p>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Correct Answers</p>
          </div>
          <p className={`font-black text-xl ${grade.color}`}>{grade.label}</p>
          <div className="pt-4 border-t border-white/10 flex justify-between text-left">
            <div>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Time Taken</p>
              <p className="text-white font-bold text-sm mt-0.5">
                {Math.floor(result.timeSpent / 60)}m {result.timeSpent % 60}s
              </p>
            </div>
            <div className="text-right">
              <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Unattempted</p>
              <p className="text-white font-bold text-sm mt-0.5">
                {result.answers.filter(a => a === null).length}
              </p>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/10 space-y-5">
            <h3 className="text-base font-black text-brand-navy dark:text-white flex items-center gap-2">
              <Target size={18} className="text-brand-amber" />
              Category Breakdown
            </h3>
            <div className="space-y-4">
              {result.categoryResults.map((cat) => {
                const catPct = cat.total > 0 ? Math.round((cat.correct / cat.total) * 100) : 0;
                const meta = QUIZ_CATEGORY_META[cat.category];
                return (
                  <div key={cat.category} className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-bold">
                      <span className="text-brand-navy dark:text-white">{cat.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-green-500 text-xs">{cat.correct} â</span>
                        {cat.incorrect > 0 && <span className="text-red-500 text-xs">{cat.incorrect} â</span>}
                        {cat.unattempted > 0 && <span className="text-gray-400 text-xs">{cat.unattempted} â</span>}
                        <span className="text-gray-400 text-xs">{catPct}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: meta?.color ?? '#f59e0b' }}
                        initial={{ width: 0 }}
                        animate={{ width: `${catPct}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Missed Questions Preview */}
          {result.answers.some((a, i) => a !== null && a !== result.questions[i].correct) && (
            <div className="bg-red-50 dark:bg-red-500/5 border border-red-100 dark:border-red-500/10 p-6 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 text-red-500 font-black text-[10px] uppercase tracking-widest">
                <AlertCircle size={14} /> Incorrect Answers
              </div>
              <div className="flex flex-wrap gap-2">
                {result.answers.map((a, i) => {
                  if (a === null || a === result.questions[i].correct) return null;
                  return (
                    <button
                      key={i}
                      onClick={() => { setReviewIdx(i); setReviewMode(true); }}
                      className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 font-black text-xs hover:bg-red-200 transition-all"
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <button
          onClick={() => { setReviewMode(true); setReviewIdx(0); }}
          className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-white/10 border border-gray-100 dark:border-white/10 text-brand-navy dark:text-white rounded-2xl font-black hover:border-brand-amber/40 transition-all"
        >
          <BookOpen size={18} /> Review All Answers
        </button>
        <button
          onClick={onRetake}
          className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-white/10 border border-gray-100 dark:border-white/10 text-brand-navy dark:text-white rounded-2xl font-black hover:border-brand-amber/40 transition-all"
        >
          <RotateCcw size={18} /> Retake Quiz
        </button>
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-8 py-4 bg-brand-amber text-brand-navy rounded-2xl font-black hover:shadow-xl hover:shadow-brand-amber/20 transition-all"
        >
          <Trophy size={18} /> More Quizzes
        </button>
      </div>
    </motion.div>
  );
}

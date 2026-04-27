'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Lock,
  Play,
  Clock,
  CheckCircle2,
  Target,
  Trophy,
  Zap,
  Star,
  BookOpen,
} from 'lucide-react';

type ExamTab = 'CLAT' | 'AILET' | 'MHCET' | 'NLAT';

interface MockMeta {
  id: number;
  label: string;
  questions: number;
  duration: number; // minutes
  difficulty: 'Easy' | 'Medium' | 'Hard';
  free: boolean;
}

const EXAM_TABS: ExamTab[] = ['CLAT', 'AILET', 'MHCET', 'NLAT'];

const EXAM_INFO: Record<ExamTab, { color: string; desc: string }> = {
  CLAT:  { color: 'bg-purple-600',  desc: '150 Qs · 2 Hours · NLU Consortium' },
  AILET: { color: 'bg-blue-600',    desc: '150 Qs · 1.5 Hours · NLU Delhi' },
  MHCET: { color: 'bg-emerald-600', desc: '150 Qs · 2 Hours · Maharashtra' },
  NLAT:  { color: 'bg-amber-500',   desc: '40 Qs · 45 Minutes · NALSAR' },
};

function buildMocks(exam: ExamTab): MockMeta[] {
  const difficulties: MockMeta['difficulty'][] = [
    'Easy', 'Easy', 'Medium', 'Medium', 'Medium',
    'Medium', 'Hard', 'Hard', 'Hard', 'Hard',
  ];
  return Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    label: `${exam} Mock ${i + 1}`,
    questions: exam === 'NLAT' ? 40 : 150,
    duration: exam === 'NLAT' ? 45 : exam === 'AILET' ? 90 : 120,
    difficulty: difficulties[i],
    free: i === 0,
  }));
}

const DIFFICULTY_STYLES: Record<MockMeta['difficulty'], string> = {
  Easy:   'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  Medium: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  Hard:   'bg-red-500/10 text-red-500 dark:text-red-400',
};

// ─── Mini Mock Player (Free Mock #1 simulation) ────────────────────────────

const SAMPLE_PASSAGE = `The Supreme Court of India, in a landmark judgment, held that the right to access
the internet is a fundamental right under Article 19(1)(a) of the Constitution of India.
The Court reasoned that in the modern digital age, freedom of speech and expression is
incomplete without the freedom to access information through the internet. The State may
impose reasonable restrictions under Article 19(2), but any restriction on internet access
must be temporary, limited in scope, and subject to judicial review. Indefinite suspension
of internet services was declared unconstitutional.`;

const SAMPLE_QUESTIONS = [
  {
    q: 'According to the passage, under which Article did the Supreme Court locate the right to internet access?',
    options: ['Article 14', 'Article 19(1)(a)', 'Article 21', 'Article 32'],
    correct: 1,
  },
  {
    q: 'What did the Court declare unconstitutional?',
    options: [
      'Temporary suspension of internet services',
      'Indefinite suspension of internet services',
      'All restrictions under Article 19(2)',
      'Judicial review of internet policies',
    ],
    correct: 1,
  },
  {
    q: 'Which of the following is NOT mentioned as a requirement for a valid restriction on internet access?',
    options: ['Temporary', 'Limited in scope', 'Approved by Parliament', 'Subject to judicial review'],
    correct: 2,
  },
  {
    q: 'What is the primary basis for linking internet access to freedom of speech?',
    options: [
      'International human rights treaties',
      'Parliamentary legislation',
      'The digital age makes information access inseparable from expression',
      'Prior Supreme Court precedents on broadcasting',
    ],
    correct: 2,
  },
  {
    q: 'The passage is most likely an excerpt from which type of document?',
    options: [
      'A legislative bill presented in Parliament',
      'A Supreme Court judgment or summary thereof',
      'A legal textbook chapter on fundamental rights',
      'A government white paper on digital policy',
    ],
    correct: 1,
  },
];

function MockPlayer({
  mock,
  onFinish,
  onBack,
}: {
  mock: MockMeta;
  onFinish: () => void;
  onBack: () => void;
}) {
  const [current, setCurrent] = React.useState(0);
  const [answers, setAnswers] = React.useState<(number | null)[]>(Array(SAMPLE_QUESTIONS.length).fill(null));
  const [submitted, setSubmitted] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(mock.duration * 60);

  React.useEffect(() => {
    if (submitted) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(timer); setSubmitted(true); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [submitted]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const score = answers.filter((a, i) => a === SAMPLE_QUESTIONS[i].correct).length;

  const select = (opt: number) => {
    if (submitted) return;
    const next = [...answers];
    next[current] = opt;
    setAnswers(next);
  };

  const q = SAMPLE_QUESTIONS[current];

  if (submitted) {
    const pct = Math.round((score / SAMPLE_QUESTIONS.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto space-y-8">
        <div className="bg-[#060818] p-10 rounded-[3rem] text-center space-y-6">
          <Trophy size={48} className="text-[#F59E0B] mx-auto" />
          <h2 className="text-3xl font-black text-white">Free Mock Complete!</h2>
          <div className="text-6xl font-black text-[#F59E0B]">{pct}%</div>
          <p className="text-gray-400">{score} / {SAMPLE_QUESTIONS.length} correct · {mock.label}</p>
          <p className="text-sm text-gray-500 bg-white/5 rounded-2xl p-4">
            This was a 5-question preview. The full mock has {mock.questions} questions over {mock.duration} minutes with section-wise analytics and an All-India rank predictor.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <button onClick={onBack} className="px-8 py-4 bg-white dark:bg-white/10 border border-gray-100 dark:border-white/10 text-[#060818] dark:text-white rounded-2xl font-bold hover:bg-gray-50 transition-all">
            Back to Mocks
          </button>
          <button onClick={onFinish} className="px-8 py-4 bg-purple-600 text-white rounded-2xl font-black shadow-xl shadow-purple-600/20 hover:bg-purple-500 transition-all">
            Unlock All Mocks — ₹999
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest">
          <ArrowLeft size={16} /> Exit Mock
        </button>
        <div className="flex items-center gap-3 bg-[#060818] px-6 py-3 rounded-2xl">
          <Clock size={16} className="text-[#F59E0B]" />
          <span className="text-white font-black tabular-nums">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Passage */}
      <div className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/10">
        <p className="text-[10px] font-black text-[#F59E0B] uppercase tracking-widest mb-4 flex items-center gap-2">
          <BookOpen size={12} /> Reading Passage
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{SAMPLE_PASSAGE}</p>
      </div>

      {/* Question */}
      <div className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
            Question {current + 1} of {SAMPLE_QUESTIONS.length}
          </span>
          <div className="flex gap-1">
            {SAMPLE_QUESTIONS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-7 h-7 rounded-lg text-[10px] font-black transition-all ${
                  i === current ? 'bg-[#F59E0B] text-[#060818]' :
                  answers[i] !== null ? 'bg-purple-600/20 text-purple-500' :
                  'bg-gray-100 dark:bg-white/10 text-gray-400'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        <p className="text-base font-bold text-[#060818] dark:text-white leading-relaxed">{q.q}</p>

        <div className="space-y-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => select(i)}
              className={`w-full text-left px-6 py-4 rounded-2xl font-medium text-sm transition-all border-2 ${
                answers[current] === i
                  ? 'bg-purple-600/10 border-purple-500 text-purple-700 dark:text-purple-300'
                  : 'bg-gray-50 dark:bg-white/5 border-transparent text-gray-700 dark:text-gray-300 hover:border-gray-200 dark:hover:border-white/20'
              }`}
            >
              <span className="font-black mr-3 text-gray-400">{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <button
            onClick={() => setCurrent(p => Math.max(0, p - 1))}
            disabled={current === 0}
            className="flex-1 py-3 bg-gray-100 dark:bg-white/5 text-[#060818] dark:text-white rounded-2xl font-bold disabled:opacity-40 hover:bg-gray-200 dark:hover:bg-white/10 transition-all"
          >
            Previous
          </button>
          {current < SAMPLE_QUESTIONS.length - 1 ? (
            <button
              onClick={() => setCurrent(p => p + 1)}
              className="flex-1 py-3 bg-[#F59E0B] text-[#060818] rounded-2xl font-black hover:bg-amber-400 transition-all"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => setSubmitted(true)}
              className="flex-1 py-3 bg-purple-600 text-white rounded-2xl font-black hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/20"
            >
              Submit Mock
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main GKFullMockTest Component ────────────────────────────────────────────

interface GKFullMockTestProps {
  hasMockAccess?: boolean;
  onUnlockMocks?: () => void;
  onBack: () => void;
}

export default function GKFullMockTest({ hasMockAccess = false, onUnlockMocks, onBack }: GKFullMockTestProps) {
  const [activeTab, setActiveTab] = React.useState<ExamTab>('CLAT');
  const [activeMock, setActiveMock] = React.useState<MockMeta | null>(null);

  const mocks = buildMocks(activeTab);

  if (activeMock) {
    return (
      <MockPlayer
        mock={activeMock}
        onBack={() => setActiveMock(null)}
        onFinish={() => { setActiveMock(null); onUnlockMocks?.(); }}
      />
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      {/* Back + Title */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Engine
        </button>
        <h2 className="text-2xl font-black text-[#060818] dark:text-white">Full Mock Tests</h2>
      </div>

      {/* Promo Banner */}
      {!hasMockAccess && (
        <div className="bg-purple-600 text-white p-6 rounded-[2rem] flex flex-col sm:flex-row items-center gap-4 justify-between shadow-2xl shadow-purple-600/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Star size={24} className="text-white" fill="currentColor" />
            </div>
            <div>
              <p className="font-black text-lg">Mock #1 of each exam is FREE</p>
              <p className="text-purple-200 text-sm font-medium">Unlock all 40 mocks with a one-time ₹999 payment. Lifetime access.</p>
            </div>
          </div>
          <button
            onClick={onUnlockMocks}
            className="flex-shrink-0 bg-white text-purple-700 px-8 py-3 rounded-2xl font-black hover:bg-purple-50 transition-all shadow-lg"
          >
            Unlock All — ₹999
          </button>
        </div>
      )}

      {/* Exam Tabs */}
      <div className="flex gap-3 flex-wrap">
        {EXAM_TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-2xl font-black text-sm transition-all border-2 ${
              activeTab === tab
                ? 'bg-[#060818] border-[#060818] text-white shadow-xl'
                : 'bg-white dark:bg-white/5 border-gray-100 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Exam subtitle */}
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest -mt-4">
        {EXAM_INFO[activeTab].desc}
      </p>

      {/* Mock Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {mocks.map((mock) => {
            const isLocked = !mock.free && !hasMockAccess;

            return (
              <motion.button
                key={mock.id}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (isLocked) {
                    onUnlockMocks?.();
                  } else {
                    setActiveMock(mock);
                  }
                }}
                className={`group relative text-left p-6 rounded-[2rem] border-2 transition-all duration-300 overflow-hidden ${
                  isLocked
                    ? 'bg-gray-50 dark:bg-white/3 border-gray-100 dark:border-white/5 hover:border-purple-300 dark:hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10'
                    : mock.free
                    ? 'bg-white dark:bg-white/5 border-purple-200 dark:border-purple-500/30 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/15'
                    : 'bg-white dark:bg-white/5 border-gray-100 dark:border-white/10 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/10'
                }`}
              >
                {/* Free / Lock Badge */}
                <div className="absolute top-4 right-4">
                  {mock.free ? (
                    <span className="bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                      FREE
                    </span>
                  ) : isLocked ? (
                    <span className="bg-purple-600/10 text-purple-500 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Lock size={9} /> ₹999
                    </span>
                  ) : (
                    <span className="bg-purple-600/10 text-purple-500 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                      Unlocked
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                  isLocked ? 'bg-gray-100 dark:bg-white/5' : 'bg-purple-600/10'
                }`}>
                  {isLocked ? (
                    <Lock size={20} className="text-gray-400" />
                  ) : (
                    <Target size={20} className="text-purple-500" />
                  )}
                </div>

                <h4 className={`font-black text-base mb-1 transition-colors ${
                  isLocked ? 'text-gray-400 dark:text-gray-600' : 'text-[#060818] dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400'
                }`}>
                  {mock.label}
                </h4>

                <div className="flex items-center gap-2 mt-3 flex-wrap">
                  <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${DIFFICULTY_STYLES[mock.difficulty]}`}>
                    {mock.difficulty}
                  </span>
                  <span className="text-[9px] font-bold text-gray-400 flex items-center gap-1">
                    <Clock size={9} /> {mock.duration}m
                  </span>
                  <span className="text-[9px] font-bold text-gray-400 flex items-center gap-1">
                    <CheckCircle2 size={9} /> {mock.questions}Q
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/5">
                  {isLocked ? (
                    <p className="text-[10px] font-black text-purple-500 uppercase tracking-widest">
                      Unlock — ₹999
                    </p>
                  ) : (
                    <p className="text-[10px] font-black text-purple-600 dark:text-purple-400 uppercase tracking-widest flex items-center gap-1">
                      <Play size={10} fill="currentColor" /> Start Mock
                    </p>
                  )}
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Bottom CTA if not subscribed */}
      {!hasMockAccess && (
        <div className="flex flex-col items-center gap-4 py-8 text-center">
          <p className="text-sm font-bold text-gray-500 dark:text-gray-400 max-w-md">
            Enjoying the free mock? Unlock all 40 full-length mocks across CLAT, AILET, MHCET, and NLAT for a one-time payment.
          </p>
          <button
            onClick={onUnlockMocks}
            className="bg-purple-600 text-white px-12 py-4 rounded-2xl font-black text-lg shadow-xl shadow-purple-600/20 hover:bg-purple-500 transition-all"
          >
            Unlock All 40 Mocks — ₹999
          </button>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Lifetime access · No recurring charges</p>
        </div>
      )}
    </motion.div>
  );
}

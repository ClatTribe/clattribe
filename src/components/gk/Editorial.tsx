'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────

interface MCQ {
  question: string;
  options: string[];
  correctAnswer: number;   // 0-indexed
  explanation: string;
}

interface EditorialCard {
  id: string;
  source: string;
  title: string;
  date: string;
  url: string;
  content: string;
  mcqs: MCQ[];
}

// ─── Supabase config ──────────────────────────────────────────────────────────

const SUPABASE_URL = 'https://fjswchcothephgtzqbgq.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
  'eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.' +
  'AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4';

// Transform Supabase row → EditorialCard
function transformRow(row: any): EditorialCard {
  const rawMcqs: any[] = Array.isArray(row.mcqs) ? row.mcqs : [];
  const optionKeys = ['A', 'B', 'C', 'D'];

  const mcqs: MCQ[] = rawMcqs.map((m: any) => {
    const options: string[] = optionKeys.map(k => m.options?.[k] ?? '');
    const correctIndex = optionKeys.indexOf(m.correct ?? 'A');
    return {
      question: m.q ?? '',
      options,
      correctAnswer: correctIndex >= 0 ? correctIndex : 0,
      explanation: m.explanation ?? '',
    };
  });

  return {
    id: row.id,
    source: row.source,
    title: row.title,
    date: row.date,
    url: row.url ?? '',
    content: row.content ?? '',
    mcqs,
  };
}

async function fetchEditorialsByDate(date: string): Promise<EditorialCard[]> {
  const url =
    SUPABASE_URL + '/rest/v1/gk_editorials' +
    '?date=eq.' + date + '&order=source.asc&select=*';

  const res = await fetch(url, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: 'Bearer ' + SUPABASE_ANON_KEY,
    },
  });

  if (!res.ok) throw new Error('Supabase error: ' + res.status);
  const rows: any[] = await res.json();
  return rows.map(transformRow);
}

async function fetchAvailableDates(): Promise<string[]> {
  const url =
    SUPABASE_URL + '/rest/v1/gk_editorials' +
    '?select=date&order=date.desc&limit=60';

  const res = await fetch(url, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: 'Bearer ' + SUPABASE_ANON_KEY,
    },
  });

  if (!res.ok) throw new Error('Supabase error: ' + res.status);
  const rows: any[] = await res.json();
  return [...new Set(rows.map((r: any) => r.date as string))];
}

function todayISO(): string {
  return new Date().toISOString().split('T')[0];
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const SourceBadge = ({ source }: { source: string }) => {
  const isHindu = source === 'The Hindu';
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
        isHindu
          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
          : 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300'
      }`}
    >
      {source}
    </span>
  );
};

const EditorialItem = ({
  editorial,
  isSelected,
  onClick,
}: {
  editorial: EditorialCard;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <motion.div
    layout
    whileHover={{ scale: 1.01 }}
    onClick={onClick}
    className={`cursor-pointer rounded-xl border p-4 transition-all duration-200 ${
      isSelected
        ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 shadow-md'
        : 'border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-indigo-300 hover:bg-indigo-50/50 dark:hover:bg-white/10'
    }`}
  >
    <div className="flex items-start justify-between gap-3">
      <div className="flex-1 min-w-0">
        <SourceBadge source={editorial.source} />
        <h3 className="mt-2 text-sm font-semibold text-gray-800 dark:text-gray-100 line-clamp-2 leading-snug">
          {editorial.title}
        </h3>
      </div>
      <span className="shrink-0 text-xs text-gray-400 mt-1">
        {editorial.mcqs.length} MCQs
      </span>
    </div>
    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
      {editorial.content.substring(0, 160)}…
    </p>
  </motion.div>
);

function DetailedEditorial({ editorial }: { editorial: EditorialCard }) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean[]>([]);

  const mcqs = editorial.mcqs;
  const q = mcqs[currentQuestion];

  const handleOptionSelect = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    setShowExplanation(true);
    if (idx === q.correctAnswer) setScore(s => s + 1);
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < mcqs.length) {
      setCurrentQuestion(c => c + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setQuizFinished(false);
    setAnsweredCorrectly([]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-6"
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <SourceBadge source={editorial.source} />
          <span className="text-xs text-gray-400">{editorial.date}</span>
          {editorial.url && (
            <a
              href={editorial.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
            >
              Read original ↗
            </a>
          )}
        </div>
        <h2 className="text-xl font-bold text-white leading-snug mb-4">
          {editorial.title}
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
          {editorial.content.substring(0, 1200)}
          {editorial.content.length > 1200 && '…'}
        </p>
      </div>

      {mcqs.length > 0 && (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-base font-semibold text-white">
              📝 Practice MCQs ({mcqs.length} questions)
            </h3>
            {!showQuiz ? (
              <button
                onClick={() => setShowQuiz(true)}
                className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
              >
                Start Quiz
              </button>
            ) : (
              <button
                onClick={() => { setShowQuiz(false); resetQuiz(); }}
                className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 text-sm font-medium transition-colors"
              >
                Close Quiz
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            {showQuiz && !quizFinished && q && (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                      style={{ width: ((currentQuestion) / mcqs.length * 100) + '%' }}
                    />
                  </div>
                  <span className="text-xs text-gray-400 shrink-0">
                    {currentQuestion + 1} / {mcqs.length}
                  </span>
                </div>

                <p className="text-sm font-medium text-white leading-relaxed mb-4">
                  Q{currentQuestion + 1}. {q.question}
                </p>

                <div className="flex flex-col gap-2 mb-4">
                  {q.options.map((opt, idx) => {
                    const isCorrect = idx === q.correctAnswer;
                    const isSelected = selectedOption === idx;
                    const revealed = selectedOption !== null;
                    let bg = 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-indigo-400/50';
                    if (revealed) {
                      if (isCorrect) bg = 'bg-green-900/40 border-green-500';
                      else if (isSelected) bg = 'bg-red-900/40 border-red-500';
                      else bg = 'bg-white/5 border-white/10 opacity-60';
                    }
                    return (
                      <button
                        key={idx}
                        onClick={() => handleOptionSelect(idx)}
                        disabled={revealed}
                        className={`w-full text-left rounded-xl border px-4 py-3 text-sm transition-all duration-200 ${bg} ${!revealed ? 'cursor-pointer' : 'cursor-default'}`}
                      >
                        <span className="font-semibold text-gray-400 mr-2">
                          {['A', 'B', 'C', 'D'][idx]}.
                        </span>
                        <span className={revealed && isCorrect ? 'text-green-300' : revealed && isSelected ? 'text-red-300' : 'text-gray-200'}>
                          {opt}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="rounded-xl bg-indigo-950/60 border border-indigo-500/30 p-4 mb-4">
                        <p className="text-xs font-semibold text-indigo-300 mb-1">💡 Explanation</p>
                        <p className="text-xs text-gray-300 leading-relaxed">{q.explanation}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {selectedOption !== null && (
                  <div className="flex justify-end">
                    <button
                      onClick={nextQuestion}
                      className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
                    >
                      {currentQuestion + 1 < mcqs.length ? 'Next Question →' : 'See Results'}
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {showQuiz && quizFinished && (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="text-5xl mb-3">
                  {score === mcqs.length ? '🏆' : score >= mcqs.length * 0.7 ? '🎉' : score >= mcqs.length * 0.5 ? '👍' : '📚'}
                </div>
                <p className="text-2xl font-bold text-white mb-1">
                  {score} / {mcqs.length}
                </p>
                <p className="text-sm text-gray-400 mb-6">
                  {score === mcqs.length
                    ? 'Perfect score! Outstanding!'
                    : score >= mcqs.length * 0.7
                    ? 'Great work! Keep it up!'
                    : score >= mcqs.length * 0.5
                    ? 'Good effort! Review the explanations.'
                    : "Keep practising — you'll get there!"}
                </p>
                <button
                  onClick={resetQuiz}
                  className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors"
                >
                  Retry Quiz
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {!showQuiz && (
            <p className="text-xs text-gray-500">
              Test your comprehension of this editorial with {mcqs.length} CLAT-level questions.
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Editorial() {
  const [selectedDate, setSelectedDate] = useState<string>(todayISO());
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [editorials, setEditorials] = useState<EditorialCard[]>([]);
  const [selectedEditorial, setSelectedEditorial] = useState<EditorialCard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAvailableDates()
      .then(dates => {
        setAvailableDates(dates);
        if (dates.length > 0 && !dates.includes(todayISO())) {
          setSelectedDate(dates[0]);
        }
      })
      .catch(err => console.error('Failed to load dates:', err));
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setSelectedEditorial(null);
    fetchEditorialsByDate(selectedDate)
      .then(data => {
        setEditorials(data);
        if (data.length > 0) setSelectedEditorial(data[0]);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [selectedDate]);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="shrink-0 px-6 pt-6 pb-4 border-b border-white/[0.06]">
        <h1 className="text-xl font-bold text-white">📰 Daily Editorials</h1>
        <p className="text-xs text-gray-400 mt-1">
          The Hindu &amp; Indian Express · 10 CLAT MCQs per editorial
        </p>
      </div>

      <div className="shrink-0 flex gap-2 px-6 py-3 overflow-x-auto border-b border-white/[0.06]">
        {availableDates.length === 0 ? (
          <span className="text-xs text-gray-500 py-1">Loading dates…</span>
        ) : (
          availableDates.map(d => (
            <button
              key={d}
              onClick={() => setSelectedDate(d)}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                d === selectedDate
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200'
              }`}
            >
              {new Date(d + 'T00:00:00').toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
              })}
            </button>
          ))
        )}
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-72 shrink-0 overflow-y-auto border-r border-white/[0.06] p-4 flex flex-col gap-3">
          {loading && (
            <div className="flex flex-col gap-3 pt-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-28 rounded-xl bg-white/5 animate-pulse" />
              ))}
            </div>
          )}
          {!loading && error && (
            <div className="rounded-xl border border-red-500/30 bg-red-950/30 p-4 text-xs text-red-300">
              <p className="font-semibold mb-1">Failed to load editorials</p>
              <p className="text-red-400">{error}</p>
              <button
                onClick={() => setSelectedDate(s => s)}
                className="mt-3 px-3 py-1 rounded-lg bg-red-800/50 hover:bg-red-700/50 text-white text-xs transition-colors"
              >
                Retry
              </button>
            </div>
          )}
          {!loading && !error && editorials.length === 0 && (
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
              <p className="text-2xl mb-2">📭</p>
              <p className="text-sm text-gray-400 font-medium">No editorials yet</p>
              <p className="text-xs text-gray-500 mt-1">
                Run the daily pipeline to populate today's editorials.
              </p>
            </div>
          )}
          {!loading && !error && editorials.map(ed => (
            <EditorialItem
              key={ed.id}
              editorial={ed}
              isSelected={selectedEditorial?.id === ed.id}
              onClick={() => setSelectedEditorial(ed)}
            />
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {loading && (
            <div className="space-y-4">
              <div className="h-10 w-2/3 rounded-xl bg-white/5 animate-pulse" />
              <div className="h-64 rounded-2xl bg-white/5 animate-pulse" />
              <div className="h-96 rounded-2xl bg-white/5 animate-pulse" />
            </div>
          )}
          {!loading && !selectedEditorial && !error && (
            <div className="flex flex-col items-center justify-center h-full text-center gap-3 pb-16">
              <span className="text-5xl">📰</span>
              <p className="text-gray-400 font-medium">Select an editorial to read and practise MCQs</p>
              <p className="text-xs text-gray-500">
                Editorials are fetched fresh daily from The Hindu and Indian Express.
              </p>
            </div>
          )}
          {!loading && selectedEditorial && (
            <DetailedEditorial key={selectedEditorial.id} editorial={selectedEditorial} />
          )}
        </div>
      </div>
    </div>
  );
}

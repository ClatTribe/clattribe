"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Loader2, CheckCircle, XCircle, Trophy,
  ChevronRight, RotateCcw, Zap, Target, BookOpen
} from 'lucide-react';
import Navbar from '../../components/navbar';
import NewFooter from '../../components/newFooter';

type QuizQuestion = {
  question: string;
  answer: string;
  category: string;
  date: string;
  source: string;
};

type QuizState = 'loading' | 'ready' | 'active' | 'review' | 'completed';

const WeeklyQuizClient: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [quizState, setQuizState] = useState<QuizState>('loading');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswers, setUserAnswers] = useState<('correct' | 'incorrect' | null)[]>([]);
  const [quizSize, setQuizSize] = useState(20);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const SUPABASE_URL = 'https://fjswchcothephgtzqbgq.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4';

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        // Get data from the last 7 days
        const endDate = new Date().toISOString().split('T')[0];
        const startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

        const response = await fetch(
          `${SUPABASE_URL}/rest/v1/gk-vault?date=gte.${startDate}&date=lte.${endDate}&select=date,source,flashcards&order=date.desc`,
          {
            headers: {
              'apikey': SUPABASE_KEY,
              'Authorization': `Bearer ${SUPABASE_KEY}`
            }
          }
        );
        const data = await response.json();

        if (data && Array.isArray(data)) {
          const allQuestions: QuizQuestion[] = [];
          for (const row of data) {
            if (row.flashcards && Array.isArray(row.flashcards)) {
              for (const fc of row.flashcards) {
                allQuestions.push({
                  question: fc.question,
                  answer: fc.answer,
                  category: fc.category || 'General',
                  date: row.date,
                  source: row.source,
                });
              }
            }
          }

          // Shuffle
          for (let i = allQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
          }

          setQuestions(allQuestions);
          setQuizState('ready');
        }
      } catch (error) {
        console.error('Error fetching quiz data:', error);
        setQuizState('ready');
      }
    };

    fetchQuizData();
  }, []);

  const categories = ['All', ...Array.from(new Set(questions.map(q => q.category)))];
  const filteredQuestions = selectedCategory === 'All'
    ? questions
    : questions.filter(q => q.category === selectedCategory);

  const activeQuestions = filteredQuestions.slice(0, quizSize);
  const currentQuestion = activeQuestions[currentIndex];

  const startQuiz = () => {
    setUserAnswers(new Array(activeQuestions.length).fill(null));
    setCurrentIndex(0);
    setShowAnswer(false);
    setQuizState('active');
  };

  const handleAnswer = (result: 'correct' | 'incorrect') => {
    const updated = [...userAnswers];
    updated[currentIndex] = result;
    setUserAnswers(updated);
    setShowAnswer(false);

    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setQuizState('completed');
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setUserAnswers([]);
    setQuizState('ready');
  };

  const correctCount = userAnswers.filter(a => a === 'correct').length;
  const incorrectCount = userAnswers.filter(a => a === 'incorrect').length;
  const scorePercentage = activeQuestions.length > 0 ? Math.round((correctCount / activeQuestions.length) * 100) : 0;

  // Category breakdown of results
  const categoryResults: Record<string, { correct: number; total: number }> = {};
  if (quizState === 'completed') {
    activeQuestions.forEach((q, idx) => {
      if (!categoryResults[q.category]) categoryResults[q.category] = { correct: 0, total: 0 };
      categoryResults[q.category].total++;
      if (userAnswers[idx] === 'correct') categoryResults[q.category].correct++;
    });
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <Link href="/clat-gk-vault" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#F59E0B] text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to GK Vault
        </Link>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3 h-3" /> Weekly Quiz
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            GK <span className="text-[#F59E0B]">Knowledge Check</span>
          </h1>
          <p className="text-slate-400 text-sm">Test yourself on the past 7 days of current affairs</p>
        </div>

        {quizState === 'loading' && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-12 h-12 text-[#F59E0B] animate-spin" />
            <p className="text-slate-400 font-medium">Preparing your quiz...</p>
          </div>
        )}

        {quizState === 'ready' && (
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8 text-center">
            <Target className="w-16 h-16 text-[#F59E0B] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Ready to test your GK?</h2>
            <p className="text-slate-400 text-sm mb-6">{questions.length} questions available from the past week</p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#F59E0B] text-slate-950'
                      : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Quiz Size */}
            <div className="flex justify-center gap-3 mb-6">
              {[10, 20, 30, 50].filter(s => s <= filteredQuestions.length).map((size) => (
                <button
                  key={size}
                  onClick={() => setQuizSize(size)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    quizSize === size
                      ? 'bg-indigo-500 text-white'
                      : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:text-white'
                  }`}
                >
                  {size} Qs
                </button>
              ))}
            </div>

            <button
              onClick={startQuiz}
              disabled={filteredQuestions.length === 0}
              className="px-8 py-3 bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-bold rounded-xl transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Start Quiz ({Math.min(quizSize, filteredQuestions.length)} questions)
            </button>
          </div>
        )}

        {quizState === 'active' && currentQuestion && (
          <div>
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-400 text-xs">Question {currentIndex + 1} of {activeQuestions.length}</span>
                <div className="flex gap-3 text-xs">
                  <span className="text-green-400"><CheckCircle className="w-3 h-3 inline mr-1" />{correctCount}</span>
                  <span className="text-red-400"><XCircle className="w-3 h-3 inline mr-1" />{incorrectCount}</span>
                </div>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#F59E0B] rounded-full transition-all duration-300"
                  style={{ width: `${((currentIndex) / activeQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 uppercase">
                  {currentQuestion.category}
                </span>
                <span className="text-slate-600 text-[10px]">
                  {new Date(currentQuestion.date + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} &middot; {currentQuestion.source}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-relaxed">{currentQuestion.question}</h2>
            </div>

            {/* Answer / Actions */}
            {!showAnswer ? (
              <div className="text-center">
                <button
                  onClick={() => setShowAnswer(true)}
                  className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl transition-all hover:scale-105"
                >
                  Show Answer
                </button>
              </div>
            ) : (
              <div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 mb-6 text-center">
                  <p className="text-emerald-300 text-lg font-bold">{currentQuestion.answer}</p>
                </div>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => handleAnswer('correct')}
                    className="flex-1 max-w-xs py-3 rounded-xl bg-green-500/20 text-green-400 border border-green-500/30 font-bold hover:bg-green-500/30 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 inline mr-2" /> I Knew It
                  </button>
                  <button
                    onClick={() => handleAnswer('incorrect')}
                    className="flex-1 max-w-xs py-3 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 font-bold hover:bg-red-500/30 transition-colors"
                  >
                    <XCircle className="w-4 h-4 inline mr-2" /> Didn&apos;t Know
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {quizState === 'completed' && (
          <div>
            {/* Score Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-800 rounded-2xl p-6 sm:p-8 text-center mb-8">
              <Trophy className={`w-16 h-16 mx-auto mb-4 ${scorePercentage >= 70 ? 'text-[#F59E0B]' : scorePercentage >= 40 ? 'text-amber-600' : 'text-slate-500'}`} />
              <h2 className="text-3xl font-bold text-white mb-2">
                {scorePercentage >= 80 ? 'Excellent!' : scorePercentage >= 60 ? 'Good Job!' : scorePercentage >= 40 ? 'Keep Practicing!' : 'More Revision Needed'}
              </h2>
              <div className="flex justify-center gap-6 mt-4 mb-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#F59E0B]">{scorePercentage}%</p>
                  <p className="text-slate-500 text-xs mt-1">Score</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-400">{correctCount}</p>
                  <p className="text-slate-500 text-xs mt-1">Correct</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-400">{incorrectCount}</p>
                  <p className="text-slate-500 text-xs mt-1">Incorrect</p>
                </div>
              </div>

              {/* Category Breakdown */}
              <div className="bg-slate-950/50 rounded-xl p-4 text-left mb-6">
                <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#F59E0B]" /> Category Breakdown
                </h3>
                <div className="space-y-2">
                  {Object.entries(categoryResults).sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total)).map(([cat, stats]) => {
                    const pct = Math.round((stats.correct / stats.total) * 100);
                    return (
                      <div key={cat} className="flex items-center gap-3">
                        <span className="text-slate-400 text-xs w-40 truncate">{cat}</span>
                        <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${pct >= 70 ? 'bg-green-500' : pct >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-xs text-slate-500 w-16 text-right">{stats.correct}/{stats.total} ({pct}%)</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={resetQuiz}
                  className="px-6 py-3 bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-bold rounded-xl transition-all hover:scale-105 flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" /> Try Again
                </button>
                <Link
                  href="/clat-gk-vault"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all flex items-center gap-2"
                >
                  Back to Vault <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Review Wrong Answers */}
            {incorrectCount > 0 && (
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-400" /> Review Incorrect Answers
                </h3>
                <div className="space-y-4">
                  {activeQuestions.map((q, idx) => {
                    if (userAnswers[idx] !== 'incorrect') return null;
                    return (
                      <div key={idx} className="bg-slate-950/50 rounded-xl p-4 border border-red-500/20">
                        <div className="flex items-start gap-3">
                          <span className="text-red-400 text-sm font-bold mt-0.5">Q{idx + 1}.</span>
                          <div>
                            <p className="text-white text-sm font-semibold mb-1">{q.question}</p>
                            <p className="text-emerald-400 text-sm">Answer: {q.answer}</p>
                            <p className="text-slate-600 text-[10px] mt-1">{q.category} &middot; {new Date(q.date + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <NewFooter />
    </div>
  );
};

export default WeeklyQuizClient;

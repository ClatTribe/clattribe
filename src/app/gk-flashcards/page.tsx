"use client";

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { RefreshCw, CheckCircle, XCircle, Award, Loader2 } from 'lucide-react';
import Layout from '../components/Layout';

type FlashcardType = {
  id: number;
  category: string;
  question: string;
  answer: string;
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://fjswchcothephgtzqbgq.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4"
);

const FlashcardsPage: React.FC = () => {
  const [flashcards, setFlashcards] = useState<FlashcardType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [knewCount, setKnewCount] = useState(0);
  const [forgotCount, setForgotCount] = useState(0);
  const [currentDay, setCurrentDay] = useState(1);
  const [dailyCards, setDailyCards] = useState<FlashcardType[]>([]);

  const CARDS_PER_DAY = 20;

  useEffect(() => {
    loadCurrentDay();
  }, []);

  useEffect(() => {
    if (currentDay > 0) {
      fetchFlashcards();
    }
  }, [currentDay]);

  useEffect(() => {
    if (flashcards.length > 0) {
      const startIndex = (currentDay - 1) * CARDS_PER_DAY;
      const endIndex = startIndex + CARDS_PER_DAY;
      const todaysCards = flashcards.slice(startIndex, endIndex);
      setDailyCards(todaysCards);
    }
  }, [currentDay, flashcards]);

  const loadCurrentDay = () => {
    const stored = localStorage.getItem('clat_flashcard_day');
    const storedDate = localStorage.getItem('clat_flashcard_date');
    const today = new Date().toDateString();

    if (storedDate === today && stored) {
      setCurrentDay(parseInt(stored));
    } else if (storedDate && storedDate !== today && stored) {
      const nextDay = parseInt(stored) + 1;
      const maxDay = 10;
      const newDay = nextDay > maxDay ? 1 : nextDay;
      
      setCurrentDay(newDay);
      localStorage.setItem('clat_flashcard_day', newDay.toString());
      localStorage.setItem('clat_flashcard_date', today);
    } else {
      setCurrentDay(1);
      localStorage.setItem('clat_flashcard_day', '1');
      localStorage.setItem('clat_flashcard_date', today);
    }
  };

  const fetchFlashcards = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('flashcard')
        .select('*')
        .order('id', { ascending: true });

      if (error) throw error;

      setFlashcards(data || []);
    } catch (err: any) {
      setError(err.message || 'Failed to load flashcards');
    } finally {
      setLoading(false);
    }
  };

   const handleNext = (knew: boolean) => {
    if (knew) {
      setKnewCount(prev => prev + 1);
    } else {
      setForgotCount(prev => prev + 1);
    }

    setIsFlipped(false);
    setTimeout(() => {
      // Don't loop - just move to next if available
      if (currentIndex < dailyCards.length - 1) {
        setCurrentIndex(prev => prev + 1);
      }
    }, 200);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnewCount(0);
    setForgotCount(0);
  };

  const currentCard = dailyCards[currentIndex];
  const totalCards = knewCount + forgotCount;
  const scorePercentage = totalCards > 0 ? Math.round((knewCount / totalCards) * 100) : 0;
  const isCompleted = currentIndex >= dailyCards.length - 1 && (knewCount + forgotCount) > 0;

  const getScoreMessage = () => {
    if (scorePercentage >= 60) {
      return {
        title: "Outstanding Performance!",
        message: `Congratulations! You scored ${scorePercentage}%. You're absolutely crushing it! Your dedication and understanding of these concepts is exceptional. Keep this momentum going!`,
      };
    } else if (scorePercentage >= 30) {
      return {
        title: "Great Progress!",
        message: `Well done! You scored ${scorePercentage}%. You're on the right track and showing real improvement. Focus on reviewing the challenging cards and you'll master them in no time!`,
      };
    } else {
      return {
        title: "Every Expert Started Here!",
        message: `You scored ${scorePercentage}%. Don't be discouraged - mastery takes practice and repetition. Each review session makes you stronger. Hit that reset button and watch yourself improve!`,
      };
    }
  };


  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#F59E0B] animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Loading flashcards...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-red-400 mb-4">Error: {error}</p>
          <button
            onClick={fetchFlashcards}
            className="px-6 py-2 bg-[#F59E0B] text-slate-950 rounded-lg font-semibold hover:bg-[#F59E0B]/90 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (flashcards.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <p className="text-slate-400">No flashcards available</p>
      </div>
    );
  }

  if (dailyCards.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-slate-400 mb-4">No flashcards available for today</p>
          <p className="text-slate-500 text-sm">Please check back tomorrow!</p>
        </div>
      </div>
    );
  }

  return (
    <Layout>
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2 sm:mb-3">
            CLAT <span className="text-[#F59E0B]">Flashcards</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-400">
            Master key facts and concepts for CLAT preparation
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-slate-900/50 border border-slate-800">
            <span className="text-slate-400 text-xs sm:text-sm">Progress: </span>
            <span className="text-white font-semibold text-xs sm:text-sm">
              {currentIndex + 1} / {dailyCards.length}
            </span>
          </div>
          <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-green-500/10 border border-green-500/30">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 text-green-400" />
            <span className="text-green-400 font-semibold text-xs sm:text-sm">{knewCount}</span>
          </div>
          <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-red-500/10 border border-red-500/30">
            <XCircle className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 text-red-400" />
            <span className="text-red-400 font-semibold text-xs sm:text-sm">{forgotCount}</span>
          </div>
          {currentIndex >= dailyCards.length - 1 && (knewCount + forgotCount) > 0 && (
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-lg bg-[#F59E0B] text-slate-950 font-semibold hover:bg-[#F59E0B]/90 transition text-xs sm:text-sm"
            >
              Reset
            </button>
          )}
        </div>

        {/* Flashcard */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div
            className="relative w-full max-w-2xl h-[350px] sm:h-[400px] md:h-[450px] cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ perspective: '1000px' }}
          >
            <div
              className="w-full h-full relative transition-transform duration-600"
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* FRONT */}
              <div
                className="absolute inset-0 flex flex-col justify-between shadow-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2"
                style={{
                  backfaceVisibility: 'hidden',
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  borderColor: '#F59E0B',
                }}
              >
                {isCompleted ? (
                  <>
                    {/* <div className="flex justify-center">
                      <span className="text-6xl sm:text-7xl md:text-8xl">{getScoreMessage().emoji}</span>
                    </div> */}

                     <div className="flex-1 flex flex-col items-center justify-center px-2 sm:px-4 py-4 gap-4">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center" style={{ color: '#F59E0B' }}>
                        {getScoreMessage().title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-center leading-relaxed max-w-lg text-slate-700">
                        {getScoreMessage().message}
                      </p>
                      <div className="flex gap-6 mt-6">
                        <div className="text-center px-6 py-3 rounded-xl bg-green-50 border-2 border-green-200">
                          <div className="text-4xl sm:text-5xl font-bold text-green-600">{knewCount}</div>
                          <div className="text-xs sm:text-sm text-green-700 font-semibold mt-1">Cards Mastered</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-slate-600 text-xs sm:text-sm font-medium">
                      <span>Click the Reset button above to practice again</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-start">
                      <span className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold bg-[#F59E0B]/20 text-[#F59E0B] uppercase">
                        {currentCard.category}
                      </span>
                    </div>

                    <div className="flex-1 flex items-center justify-center px-2 sm:px-4 py-4">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed text-center">
                        {currentCard.question}
                      </h3>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-slate-500 text-xs sm:text-sm">
                      <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Tap to reveal answer</span>
                    </div>
                  </>
                )}
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 flex flex-col justify-between shadow-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  backgroundColor: '#1e293b',
                  color: 'white',
                  borderColor: '#3b82f6',
                }}
              >
                <div className="flex justify-start">
                  <span className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 uppercase">
                    Answer
                  </span>
                </div>

                <div className="flex-1 flex items-center justify-center px-2 sm:px-4 py-4">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center">
                    {currentCard.answer}
                  </h3>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext(true);
                    }}
                    className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl flex items-center justify-center gap-2 font-semibold text-xs sm:text-sm transition-all hover:scale-105"
                    style={{
                      backgroundColor: 'rgba(34, 197, 94, 0.2)',
                      color: '#22c55e',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                    }}
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Knew it</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext(false);
                    }}
                    className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl flex items-center justify-center gap-2 font-semibold text-xs sm:text-sm transition-all hover:scale-105"
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.2)',
                      color: '#ef4444',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                    }}
                  >
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Review Later</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Completion Message */}
        {/* {currentIndex === dailyCards.length - 1 && (knewCount + forgotCount) > 0 && (
          <div className="max-w-2xl mx-auto">
            <div className="rounded-xl border-2 border-[#F59E0B]/30 bg-slate-900/70 backdrop-blur-sm p-4 sm:p-6 text-center">
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-[#F59E0B] mx-auto mb-2 sm:mb-3" />
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
                Day {currentDay} Complete! 🎉
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4">
                You've reviewed all {dailyCards.length} flashcards for today. Come back tomorrow for the next set!
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 sm:px-6 sm:py-2 bg-[#F59E0B] text-slate-950 rounded-lg font-semibold hover:bg-[#F59E0B]/90 transition text-sm"
                >
                  Reset & Review Again
                </button>
              </div>
            </div>
          </div>
        )} */}
        <div className="flex justify-center mt-6">
          <div
            className="flex flex-col md:flex-row items-center gap-4 px-6 py-4 rounded-xl shadow-lg border w-full max-w-2xl"
            style={{
              backgroundColor: "#1e293b",
              borderColor: "#f59e0b33",
            }}
          >
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-serif font-bold">
                Subscribe to daily GK Flashcards 
              </h3>
              <div className="flex items-center gap-3 mt-2">
                <span
                  className="text-2xl font-bold line-through opacity-50"
                  style={{ color: "#94a3b8" }}
                >
                  ₹999
                </span>
                <span
                  className="text-3xl font-bold"
                  style={{ color: "#f59e0b" }}
                >
                  ₹0
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: "#22c55e33",
                    color: "#22c55e",
                  }}
                >
                  LIMITED TIME
                </span>
              </div>
            </div>
            <button
              onClick={() => window.open('https://chat.whatsapp.com/EIMkBl02bhr8lC36jvVCiv', '_blank')}
              className="px-6 py-3 text-sm font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-105 whitespace-nowrap cursor-pointer"
              style={{
                backgroundColor: "#f59e0b",
                color: "#0f172a",
              }}
            >
              Join the tribe
            </button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default FlashcardsPage;
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

  useEffect(() => {
    fetchFlashcards();
  }, []);

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
      setCurrentIndex((prev) => (prev + 1) % flashcards.length);
    }, 200);
  };

  const currentCard = flashcards[currentIndex];

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#F59E0B] animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Loading flashcards...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
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
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <p className="text-slate-400">No flashcards available</p>
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

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            CLAT <span className="text-[#F59E0B]">Flashcards</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400">
            Master key facts and concepts for CLAT preparation
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-800">
            <span className="text-slate-400 text-sm">Progress: </span>
            <span className="text-white font-semibold">
              {currentIndex + 1} / {flashcards.length}
            </span>
          </div>
          <div className="px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30">
            <CheckCircle className="w-4 h-4 inline mr-1 text-green-400" />
            <span className="text-green-400 font-semibold">{knewCount}</span>
          </div>
          <div className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30">
            <XCircle className="w-4 h-4 inline mr-1 text-red-400" />
            <span className="text-red-400 font-semibold">{forgotCount}</span>
          </div>
        </div>

        {/* Flashcard */}
        <div className="flex justify-center mb-8">
          <div
            className="relative w-full max-w-2xl h-[400px] cursor-pointer perspective-1000"
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
                className="absolute inset-0 flex flex-col justify-center items-center text-center shadow-2xl rounded-2xl p-8 border-2"
                style={{
                  backfaceVisibility: 'hidden',
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  borderColor: '#F59E0B',
                }}
              >
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F59E0B]/20 text-[#F59E0B] uppercase">
                    {currentCard.category}
                  </span>
                </div>

                <div className="flex-1 flex items-center justify-center px-4">
                  <h3 className="text-2xl sm:text-3xl font-bold leading-relaxed">
                    {currentCard.question}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <RefreshCw className="w-4 h-4" />
                  <span>Tap to reveal answer</span>
                </div>
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 flex flex-col justify-center items-center text-center shadow-2xl rounded-2xl p-8 border-2"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  backgroundColor: '#1e293b',
                  color: 'white',
                  borderColor: '#3b82f6',
                }}
              >
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 uppercase">
                    Answer
                  </span>
                </div>

                <div className="flex-1 flex items-center justify-center px-4 mb-6">
                  <h3 className="text-xl sm:text-2xl leading-relaxed">
                    {currentCard.answer}
                  </h3>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext(true);
                    }}
                    className="px-6 py-3 rounded-xl flex items-center gap-2 font-semibold text-sm transition-all hover:scale-105"
                    style={{
                      backgroundColor: 'rgba(34, 197, 94, 0.2)',
                      color: '#22c55e',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                    }}
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Knew it</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext(false);
                    }}
                    className="px-6 py-3 rounded-xl flex items-center gap-2 font-semibold text-sm transition-all hover:scale-105"
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.2)',
                      color: '#ef4444',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                    }}
                  >
                    <XCircle className="w-5 h-5" />
                    <span>Review Later</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Completion Message */}
        {currentIndex === flashcards.length - 1 && (knewCount + forgotCount) > 0 && (
          <div className="max-w-2xl mx-auto">
            <div className="rounded-xl border-2 border-[#F59E0B]/30 bg-slate-900/70 backdrop-blur-sm p-6 text-center">
              <Award className="w-12 h-12 text-[#F59E0B] mx-auto mb-3" />
              <h2 className="text-xl font-bold text-white mb-2">
                Great Progress!
              </h2>
              <p className="text-slate-400 text-sm mb-4">
                You've reviewed {knewCount + forgotCount} flashcards. Keep practicing daily!
              </p>
              <button
                onClick={() => {
                  setCurrentIndex(0);
                  setIsFlipped(false);
                  setKnewCount(0);
                  setForgotCount(0);
                }}
                className="px-6 py-2 bg-[#F59E0B] text-slate-950 rounded-lg font-semibold hover:bg-[#F59E0B]/90 transition"
              >
                Restart Practice
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    </Layout>
  );
};

export default FlashcardsPage;
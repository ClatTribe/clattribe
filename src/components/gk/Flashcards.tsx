'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Brain,
  Bookmark,
  Share2
} from 'lucide-react';

const SUPABASE_URL = 'https://fjswchcothephgtzqbgq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4';

interface RepetitionData {
  repetition: number;
  interval: number;
  easeFactor: number;
  nextReviewDate: string;
}

interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const DEFAULT_REPETITION: RepetitionData = {
  repetition: 0,
  interval: 0,
  easeFactor: 2.5,
  nextReviewDate: new Date().toISOString(),
};

function calculateSM2(quality: number, prevData: RepetitionData): RepetitionData {
  let { repetition, interval, easeFactor } = prevData;
  if (quality >= 3) {
    if (repetition === 0) { interval = 1; }
    else if (repetition === 1) { interval = 6; }
    else { interval = Math.round(interval * easeFactor); }
    repetition += 1;
  } else {
    repetition = 0;
    interval = 1;
  }
  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;
  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + interval);
  return { repetition, interval, easeFactor, nextReviewDate: nextReviewDate.toISOString() };
}

export default function Flashcards() {
  const [allCards, setAllCards] = React.useState<Flashcard[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [repetitionStats, setRepetitionStats] = React.useState<Record<string, RepetitionData>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('flashcard_repetition_data');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });
  const [toast, setToast] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch(`${SUPABASE_URL}/rest/v1/flashcard?select=*&order=id.asc&limit=500`, {
      headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` }
    })
      .then(r => r.json())
      .then((rows: any[]) => {
        if (!Array.isArray(rows)) { setLoading(false); return; }
        setAllCards(rows.map((r: any) => ({
          id: String(r.id),
          question: r.question ?? '',
          answer: r.answer ?? '',
          category: r.category ?? '',
        })));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    localStorage.setItem('flashcard_repetition_data', JSON.stringify(repetitionStats));
  }, [repetitionStats]);

  const sortedCards = React.useMemo(() => {
    return [...allCards].sort((a, b) => {
      const dateA = repetitionStats[a.id]?.nextReviewDate || DEFAULT_REPETITION.nextReviewDate;
      const dateB = repetitionStats[b.id]?.nextReviewDate || DEFAULT_REPETITION.nextReviewDate;
      return new Date(dateA).getTime() - new Date(dateB).getTime();
    });
  }, [allCards, repetitionStats]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % sortedCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + sortedCards.length) % sortedCards.length);
  };

  const handleReview = (quality: number) => {
    const currentCard = sortedCards[currentIndex];
    const currentRepData = repetitionStats[currentCard.id] || DEFAULT_REPETITION;
    const newData = calculateSM2(quality, currentRepData);
    setRepetitionStats(prev => ({ ...prev, [currentCard.id]: newData }));
    const label = quality === 0 ? 'Again' : quality === 3 ? 'Hard' : quality === 4 ? 'Good' : 'Easy';
    showToast(`Scheduled for review in ${newData.interval} days (${label})`);
    setTimeout(() => { handleNext(); }, 500);
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center py-32 space-y-4">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-[#F59E0B] border-t-transparent rounded-full" />
        <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">Loading Flashcards...</p>
      </div>
    );
  }

  if (sortedCards.length === 0) {
    return (
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center py-32 space-y-4">
        <Brain size={48} className="text-gray-300" />
        <p className="text-gray-400 font-bold">No flashcards available.</p>
      </div>
    );
  }

  const currentCard = sortedCards[currentIndex];
  const masteredCount = Object.values(repetitionStats).filter((d: RepetitionData) => d.repetition > 0).length;
  const dueCount = sortedCards.filter(c => {
    const date = repetitionStats[c.id]?.nextReviewDate || DEFAULT_REPETITION.nextReviewDate;
    return new Date(date) <= new Date();
  }).length;

  return (
    <div className="max-w-4xl mx-auto space-y-12 relative">
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-[#060818] text-white px-6 py-3 rounded-2xl font-bold shadow-2xl border border-white/10">
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center space-y-4">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 dark:bg-[#F59E0B]/10 text-[#F59E0B] text-[10px] font-black uppercase tracking-widest">
          <Brain size={14} /> Active Recall Training
        </motion.div>
        <h2 className="text-4xl font-black tracking-tight text-[#060818] dark:text-white">
          GK & Legal <span className="text-[#F59E0B]">Flashcards</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium">Master complex concepts through spaced repetition.</p>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest">
          <span>Progress</span>
          <span>{currentIndex + 1} / {sortedCards.length} Cards</span>
        </div>
        <div className="h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
          <motion.div className="h-full bg-[#F59E0B]" initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / sortedCards.length) * 100}%` }}
            transition={{ type: 'spring', stiffness: 50 }} />
        </div>
      </div>

      <div className="relative h-[450px] perspective-1000 group">
        <motion.div className="w-full h-full relative preserve-3d cursor-pointer"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
          onClick={() => setIsFlipped(!isFlipped)}>
          <div className="absolute inset-0 backface-hidden bg-white dark:bg-white/5 rounded-[3rem] border-2 border-gray-100 dark:border-white/10 p-12 flex flex-col items-center justify-center text-center shadow-xl shadow-gray-900/5 transition-colors">
            <div className="absolute top-8 left-8">
              <span className="px-3 py-1 rounded-full bg-gray-50 dark:bg-white/10 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                {currentCard.category}
              </span>
            </div>
            <div className="absolute top-8 right-8 flex gap-2">
              <button onClick={(e) => { e.stopPropagation(); showToast('Bookmarked!'); }} className="p-2 text-gray-300 hover:text-[#F59E0B] transition-colors">
                <Bookmark size={20} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); showToast('Shared!'); }} className="p-2 text-gray-300 hover:text-blue-500 transition-colors">
                <Share2 size={20} />
              </button>
            </div>
            <h3 className="text-3xl font-black text-[#060818] dark:text-white leading-tight max-w-lg">{currentCard.question}</h3>
            <div className="mt-12 flex items-center gap-2 text-gray-400 font-bold text-sm">
              <RotateCcw size={16} /> Click to flip
            </div>
          </div>
          <div className="absolute inset-0 backface-hidden bg-[#060818] dark:bg-[#F59E0B] rounded-[3rem] p-12 flex flex-col items-center justify-center text-center shadow-2xl transition-colors"
            style={{ transform: 'rotateY(180deg)' }}>
            <div className="absolute top-8 left-8">
              <span className="px-3 py-1 rounded-full bg-white/10 dark:bg-[#060818]/10 text-[10px] font-black text-white/50 dark:text-[#060818]/50 uppercase tracking-widest">Answer</span>
            </div>
            <p className="text-2xl font-bold text-white dark:text-[#060818] leading-relaxed max-w-lg">{currentCard.answer}</p>
            <div className="mt-12 flex items-center gap-2 text-white/50 dark:text-[#060818]/50 font-bold text-sm">
              <RotateCcw size={16} /> Click to flip back
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <button onClick={handlePrev} className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-[#060818] dark:text-white hover:border-[#F59E0B] transition-all">
            <ChevronLeft size={24} />
          </button>
          <button onClick={handleNext} className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-[#060818] dark:text-white hover:border-[#F59E0B] transition-all">
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          {isFlipped ? (
            <div className="flex gap-2">
              <button onClick={() => handleReview(0)} className="px-6 py-3 rounded-xl bg-red-500 text-white font-black text-xs hover:bg-red-600 transition-all shadow-lg shadow-red-500/20">Again</button>
              <button onClick={() => handleReview(3)} className="px-6 py-3 rounded-xl bg-amber-500 text-white font-black text-xs hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20">Hard</button>
              <button onClick={() => handleReview(4)} className="px-6 py-3 rounded-xl bg-blue-500 text-white font-black text-xs hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20">Good</button>
              <button onClick={() => handleReview(5)} className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-black text-xs hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">Easy</button>
            </div>
          ) : (
            <div className="text-gray-400 font-bold text-sm bg-gray-50 dark:bg-white/5 px-6 py-3 rounded-xl border border-gray-100 dark:border-white/10">Flip to rate performance</div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-gray-100 dark:border-white/5">
        <div className="text-center p-6 bg-gray-50 dark:bg-white/5 rounded-3xl">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Cards</p>
          <p className="text-2xl font-black">{sortedCards.length}</p>
        </div>
        <div className="text-center p-6 bg-gray-50 dark:bg-white/5 rounded-3xl">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Mastered</p>
          <p className="text-2xl font-black text-emerald-500">{masteredCount}</p>
        </div>
        <div className="text-center p-6 bg-gray-50 dark:bg-white/5 rounded-3xl">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Due Today</p>
          <p className="text-2xl font-black text-[#F59E0B]">{dueCount}</p>
        </div>
      </div>
    </div>
  );
}

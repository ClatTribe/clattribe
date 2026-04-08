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
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const FLASHCARDS: Flashcard[] = [
  {
    id: '1',
    category: 'Legal Reasoning',
    difficulty: 'Medium',
    question: "What is the 'Doctrine of Pith and Substance' in Indian Constitutional Law?",
    answer: "It's a legal doctrine used to determine which legislature has the power to enact a law when it appears to encroach upon the field of another. It looks at the 'true nature and character' of the legislation rather than its incidental effects."
  },
  {
    id: '2',
    category: 'Current Affairs',
    difficulty: 'Easy',
    question: "Who is the current Chief Justice of India (as of late 2023)?",
    answer: "Justice Dhananjaya Y. Chandrachud, who took office as the 50th Chief Justice of India on November 9, 2022."
  },
  {
    id: '3',
    category: 'Logical Reasoning',
    difficulty: 'Hard',
    question: "Explain the 'Syllogism' logical argument structure.",
    answer: "A syllogism is a form of deductive reasoning where a conclusion is drawn from two given or assumed premises, each of which shares a term with the conclusion, and shares a common or middle term not present in the conclusion (e.g., All men are mortal; Socrates is a man; therefore, Socrates is mortal)."
  },
  {
    id: '4',
    category: 'Legal Maxims',
    difficulty: 'Medium',
    question: "What does the maxim 'Audi Alteram Partem' mean?",
    answer: "It means 'listen to the other side', or 'let the other side be heard as well'. It is a fundamental principle of natural justice stating that no person should be judged without a fair hearing."
  },
  {
    id: '5',
    category: 'English Language',
    difficulty: 'Easy',
    question: "What is the meaning of the word 'Ephemeral'?",
    answer: "Lasting for a very short time; short-lived; transitory."
  }
];

const DEFAULT_REPETITION: RepetitionData = {
  repetition: 0,
  interval: 0,
  easeFactor: 2.5,
  nextReviewDate: new Date().toISOString(),
};

function calculateSM2(quality: number, prevData: RepetitionData): RepetitionData {
  let { repetition, interval, easeFactor } = prevData;

  if (quality >= 3) {
    if (repetition === 0) {
      interval = 1;
    } else if (repetition === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetition += 1;
  } else {
    repetition = 0;
    interval = 1;
  }

  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;

  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + interval);

  return {
    repetition,
    interval,
    easeFactor,
    nextReviewDate: nextReviewDate.toISOString(),
  };
}

export default function Flashcards() {
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
    localStorage.setItem('flashcard_repetition_data', JSON.stringify(repetitionStats));
  }, [repetitionStats]);

  const sortedCards = React.useMemo(() => {
    return [...FLASHCARDS].sort((a, b) => {
      const dateA = repetitionStats[a.id]?.nextReviewDate || DEFAULT_REPETITION.nextReviewDate;
      const dateB = repetitionStats[b.id]?.nextReviewDate || DEFAULT_REPETITION.nextReviewDate;
      return new Date(dateA).getTime() - new Date(dateB).getTime();
    });
  }, [repetitionStats]);

  const currentCard = sortedCards[currentIndex];
  const currentRepData = repetitionStats[currentCard.id] || DEFAULT_REPETITION;

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
    const newData = calculateSM2(quality, currentRepData);
    setRepetitionStats(prev => ({
      ...prev,
      [currentCard.id]: newData
    }));
    
    const labels = ['Again', 'Hard', 'Good', 'Easy'];
    const label = quality === 0 ? 'Again' : quality === 3 ? 'Hard' : quality === 4 ? 'Good' : 'Easy';
    showToast(`Scheduled for review in ${newData.interval} days (${label})`);
    
    setTimeout(() => {
      handleNext();
    }, 500);
  };

  const masteredCount = Object.values(repetitionStats).filter((d: RepetitionData) => d.repetition > 0).length;
  const dueCount = sortedCards.filter(c => {
    const date = repetitionStats[c.id]?.nextReviewDate || DEFAULT_REPETITION.nextReviewDate;
    return new Date(date) <= new Date();
  }).length;

  return (
    <div className="max-w-4xl mx-auto space-y-12 relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-[#060818] text-white px-6 py-3 rounded-2xl font-bold shadow-2xl border border-white/10"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 dark:bg-[#F59E0B]/10 text-[#F59E0B] text-[10px] font-black uppercase tracking-widest"
        >
          <Brain size={14} />
          Active Recall Training
        </motion.div>
        <h2 className="text-4xl font-black tracking-tight text-[#060818] dark:text-white">
          GK & Legal <span className="text-[#F59E0B]">Flashcards</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          Master complex concepts through spaced repetition.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest">
          <span>Progress</span>
          <span>{currentIndex + 1} / {sortedCards.length} Cards</span>
        </div>
        <div className="h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#F59E0B]"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / sortedCards.length) * 100}%` }}
            transition={{ type: 'spring', stiffness: 50 }}
          />
        </div>
      </div>

      {/* Flashcard Container */}
      <div className="relative h-[450px] perspective-1000 group">
        <motion.div
          className="w-full h-full relative preserve-3d cursor-pointer"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front Side */}
          <div className="absolute inset-0 backface-hidden bg-white dark:bg-white/5 rounded-[3rem] border-2 border-gray-100 dark:border-white/10 p-12 flex flex-col items-center justify-center text-center shadow-xl shadow-gray-900/5 transition-colors">
            <div className="absolute top-8 left-8 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-gray-50 dark:bg-white/10 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                {currentCard.category}
              </span>
              <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                currentCard.difficulty === 'Easy' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10' :
                currentCard.difficulty === 'Medium' ? 'bg-amber-50 text-amber-600 dark:bg-amber-500/10' :
                'bg-red-50 text-red-600 dark:bg-red-500/10'
              }`}>
                {currentCard.difficulty}
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

            <h3 className="text-3xl font-black text-[#060818] dark:text-white leading-tight max-w-lg">
              {currentCard.question}
            </h3>
            
            <div className="mt-12 flex items-center gap-2 text-gray-400 font-bold text-sm">
              <RotateCcw size={16} />
              Click to flip
            </div>
          </div>

          {/* Back Side */}
          <div 
            className="absolute inset-0 backface-hidden bg-[#060818] dark:bg-[#F59E0B] rounded-[3rem] p-12 flex flex-col items-center justify-center text-center shadow-2xl transition-colors"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <div className="absolute top-8 left-8">
              <span className="px-3 py-1 rounded-full bg-white/10 dark:bg-[#060818]/10 text-[10px] font-black text-white/50 dark:text-[#060818]/50 uppercase tracking-widest">
                Answer
              </span>
            </div>

            <p className="text-2xl font-bold text-white dark:text-[#060818] leading-relaxed max-w-lg">
              {currentCard.answer}
            </p>

            <div className="mt-12 flex items-center gap-2 text-white/50 dark:text-[#060818]/50 font-bold text-sm">
              <RotateCcw size={16} />
              Click to flip back
            </div>
          </div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={handlePrev}
            className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-[#060818] dark:text-white hover:border-[#F59E0B] transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={handleNext}
            className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-[#060818] dark:text-white hover:border-[#F59E0B] transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {isFlipped ? (
            <div className="flex gap-2">
              <button 
                onClick={() => handleReview(0)}
                className="px-6 py-3 rounded-xl bg-red-500 text-white font-black text-xs hover:bg-red-600 transition-all shadow-lg shadow-red-500/20"
              >
                Again
              </button>
              <button 
                onClick={() => handleReview(3)}
                className="px-6 py-3 rounded-xl bg-amber-500 text-white font-black text-xs hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20"
              >
                Hard
              </button>
              <button 
                onClick={() => handleReview(4)}
                className="px-6 py-3 rounded-xl bg-blue-500 text-white font-black text-xs hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
              >
                Good
              </button>
              <button 
                onClick={() => handleReview(5)}
                className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-black text-xs hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20"
              >
                Easy
              </button>
            </div>
          ) : (
            <div className="text-gray-400 font-bold text-sm bg-gray-50 dark:bg-white/5 px-6 py-3 rounded-xl border border-gray-100 dark:border-white/10">
              Flip to rate performance
            </div>
          )}
        </div>
      </div>

      {/* Stats Summary */}
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

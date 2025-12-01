"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw, CheckCircle, XCircle } from "lucide-react";

type FlashcardType = {
  id: number;
  category: string;
  question: string;
  answer: string;
};

const SAMPLE_CARDS: FlashcardType[] = [
  {
    id: 1,
    category: "Legal GK",
    question: "Who is the current Chief Justice of India?",
    answer: "Justice Sanjiv Khanna (verify updated current affairs).",
  },
  {
    id: 2,
    category: "Constitution",
    question: "Which Article deals with Uniform Civil Code?",
    answer: "Article 44.",
  },
  {
    id: 3,
    category: "International",
    question: "Where is the ICJ headquarters?",
    answer: "The Hague, Netherlands.",
  },
];

const Flashcards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % SAMPLE_CARDS.length);
    }, 200);
  };

  const currentCard = SAMPLE_CARDS[currentIndex];

  return (
    <section className="py-20" style={{ backgroundColor: "#0f172a" }}>
      <div className="container mx-auto px-6 text-white">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-2">
              Smart Flashcards
            </h2>
            <p className="text-slate-400">
              Review 1000+ key facts. Swipe, flip, master.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <span
              className="px-4 py-2 rounded-lg text-sm font-mono"
              style={{
                backgroundColor: "#1e293b",
                color: "#f59e0b",
              }}
            >
              Card {currentIndex + 1} / {SAMPLE_CARDS.length}
            </span>
          </div>
        </div>

        {/* Flashcard */}
        <div className="flex justify-center perspective-1000">
          <div
            className="relative w-full max-w-2xl h-80 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              className="w-full h-full relative preserve-3d"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* FRONT */}
              <div
                className="absolute inset-0 backface-hidden flex flex-col justify-center items-center text-center shadow-2xl rounded-2xl p-10 border-b-8"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  borderColor: "#f59e0b",
                }}
              >
                <span className="absolute top-6 left-6 text-xs font-bold text-slate-600 uppercase">
                  {currentCard.category}
                </span>

                <h3 className="text-2xl md:text-3xl font-serif font-bold">
                  {currentCard.question}
                </h3>

                <p className="mt-8 text-sm text-slate-500 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" /> Tap to flip
                </p>
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 backface-hidden flex flex-col justify-center items-center text-center shadow-2xl rounded-2xl p-10 border-b-8"
                style={{
                  backgroundColor: "#1e293b",
                  color: "white",
                  transform: "rotateY(180deg)",
                  borderColor: "#024687",
                }}
              >
                <span className="absolute top-6 left-6 text-xs font-bold text-blue-300 uppercase">
                  Answer
                </span>

                <h3 className="text-xl md:text-2xl leading-relaxed">
                  {currentCard.answer}
                </h3>

                {/* Buttons */}
                <div className="mt-8 flex gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="px-6 py-2 rounded-full flex items-center gap-2 font-bold text-sm transition"
                    style={{
                      backgroundColor: "rgba(22, 163, 74, 0.2)",
                      color: "#22c55e",
                    }}
                  >
                    <CheckCircle className="w-4 h-4" /> Knew it
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="px-6 py-2 rounded-full flex items-center gap-2 font-bold text-sm transition"
                    style={{
                      backgroundColor: "rgba(220, 38, 38, 0.2)",
                      color: "#ef4444",
                    }}
                  >
                    <XCircle className="w-4 h-4" /> Forgot
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </section>
  );
};

export default Flashcards;

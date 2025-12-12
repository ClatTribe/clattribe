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
  {
    id: 4,
    category: "International",
    question: "53rd Chief Justice of India (Appointed Nov 2025)",
    answer: "Justice Surya Kant",
  },
  {
    id: 5,
    category: "International",
    question: "Ruling: Mihir Rajesh Shah v. State of Maharashtra (2025)",
    answer: "Grounds of arrest must be communicated to the accused in writing in a language they understand.",
  },
  {
    id: 6,
    category: "International",
    question: "Ruling: All India Judges Association v. Union of India (2025)",
    answer: "Seniority in Higher Judicial Services is protected; if recruitment is delayed, later appointees don't lose seniority relative to the vacancy year.",
  },
  {
    id: 7,
    category: "International",
    question: "Supreme Court verdict on Governor's assent to Bills (Art 200)",
    answer: "The discharge of functions by the Governor regarding assent is not justiciable; courts cannot prescribe strict timelines.",
  },
  {
    id: 8,
    category: "International",
    question: "Objective of Constitution (131st Amendment) Bill, 2025",
    answer: "To bring Chandigarh under Article 240, allowing the President to appoint an independent Administrator.",
  },
  {
    id: 9,
    category: "International",
    question: "Significance of Article 240 of the Constitution",
    answer: "It grants the President the power to make regulations for the peace, progress, and good government of certain Union Territories.",
  },
  {
    id: 10,
    category: "International",
    question: "Winner of Bihar Assembly Elections 2025",
    answer: "National Democratic Alliance (NDA); Nitish Kumar sworn in as CM.",
  },
  {
    id: 11,
    category: "International",
    question: "Location of Mudh-Nyoma Air Force Station",
    answer: "Ladakh (Altitude: 13,700 feet)",
  },
  {
    id: 12,
    category: "International",
    question: "Theme of Constitution Day 2025 (76th Anniversary)",
    answer: "Access to Justice as a Constitutional North Star",
  },
  {
    id: 13,
    category: "International",
    question: "US designation for Saudi Arabia (Nov 2025)",
    answer: "Major Non-NATO Ally (MNNA)",
  },
  {
    id: 14,
    category: "International",
    question: "First Arab nation authorized to buy F-35 jets",
    answer: "Saudi Arabia",
  },
  {
    id: 15,
    category: "International",
    question: "Winner of Booker Prize 2025",
    answer: "David Szalay (Novel:- Flesh)",
  },
  {
    id: 16,
    category: "International",
    question: "Cambridge Dictionary Word of the Year 2025",
    answer: "Parasocial",
  },
  {
    id: 17,
    category: "International",
    question: "Winner of Miss Universe 2025",
    answer: "Fatima Bosch (Mexico)",
  },
  {
    id: 18,
    category: "International",
    question: "First woman to lead UN Tourism (Nov 2025)",
    answer: "Shaikha Nasser Al Nowais",
  },
  {
    id: 19,
    category: "International",
    question: "Winner of ICC Women's Cricket World Cup 2025",
    answer: "India (First-ever title)",
  },
  {
    id: 20,
    category: "International",
    question: "Player of the Series: ICC Women's World Cup 2025",
    answer: "Deepti Sharma",
  },
];

interface FlashcardsProps {
  onNavigate?: (section: 'leadform') => void;
}

const Flashcards: React.FC<FlashcardsProps> = ({ onNavigate }) => {
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

        {/* Call-to-Action Section */}
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
              onClick={() => onNavigate?.('leadform')}
              className="px-6 py-3 text-sm font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-105 whitespace-nowrap"
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
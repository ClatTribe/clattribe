"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Clock, BookOpen } from "lucide-react";
import { ExamType, MOCK_DATABASE, EXAM_META, SAMPLE_CLAT_MOCK_1 } from "./constants";

export default function FullMockRunner({
  examType,
  mockNumber,
  onBack,
  onComplete,
}: {
  examType: ExamType;
  mockNumber: number;
  onBack: () => void;
  onComplete: (res: { score: number; total: number; timeSpent: number }) => void;
}) {
  const questions = MOCK_DATABASE[examType]?.[mockNumber] || SAMPLE_CLAT_MOCK_1;
  const [current, setCurrent] = React.useState(0);
  const [answers, setAnswers] = React.useState<(number | null)[]>(
    Array(questions.length).fill(null),
  );
  const [startTime] = React.useState(Date.now());
  const [timeLeft, setTimeLeft] = React.useState(120 * 60);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleFinish = () => {
    const score = answers.reduce(
      (acc, ans, i) => (ans === questions[i].correct ? acc + 1 : acc),
      0,
    );
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    onComplete({ score, total: questions.length, timeSpent });
  };

  const q = questions[current];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto space-y-8 pb-20"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`w-12 h-12 ${EXAM_META[examType].color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
          >
            <Star size={24} />
          </div>
          <div>
            <h2 className="text-xl font-black text-[#060818] dark:text-white uppercase tracking-tight">
              {examType} Mock {mockNumber}
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#F59E0B]">
                Question {current + 1}
              </span>
              <span className="text-sm font-medium text-gray-400">
                of {questions.length}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-[#F59E0B]/10 text-[#F59E0B] px-5 py-2.5 rounded-2xl font-black text-lg border border-[#F59E0B]/20 shadow-sm">
          <Clock size={20} />
          {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner">
        <motion.div 
          className="h-full bg-gradient-to-r from-[#F59E0B] to-[#D97706]"
          initial={{ width: 0 }}
          animate={{ width: `${((current + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Vertical Stack Layout */}
      <div className="flex flex-col gap-8">
        {/* Section Header */}
        {q.section && (
          <div className="bg-[#060818] text-[#F59E0B] px-6 py-3 rounded-xl text-xs font-black uppercase tracking-[0.2em] w-fit shadow-xl mx-auto lg:mx-0">
            {q.section}
          </div>
        )}

        {/* Passage Area (Full Width) */}
        {q.passage && (
          <div className="bg-white dark:bg-white/5 p-8 lg:p-12 rounded-[2.5rem] border border-gray-100 dark:border-white/10 shadow-sm leading-relaxed text-gray-700 dark:text-gray-300 italic text-lg relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#F59E0B] opacity-50" />
            <div className="space-y-4">
              {q.passage.split('\n').map((para, i) => (
                <p key={i} className="last:mb-0">{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* Question Area (Full Width) */}
        <div className="bg-white dark:bg-white/5 p-8 lg:p-12 rounded-[3rem] border border-gray-100 dark:border-white/10 space-y-10 shadow-xl">
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl font-black text-[#060818] dark:text-white leading-tight">
              {q.question}
            </h3>
            {!q.passage && (
              <p className="text-sm text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
                <BookOpen size={14} /> Direct Question
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => {
                  const newAns = [...answers];
                  newAns[current] = i;
                  setAnswers(newAns);
                }}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all font-bold text-base flex items-center gap-5 shadow-sm group ${
                  answers[current] === i
                    ? "bg-[#F59E0B]/10 border-[#F59E0B] text-[#060818] dark:text-white ring-4 ring-[#F59E0B]/5"
                    : "bg-gray-50 dark:bg-white/5 border-transparent text-gray-500 hover:bg-gray-100 hover:border-gray-200"
                }`}
              >
                <span
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0 transition-colors ${
                    answers[current] === i 
                      ? "bg-[#F59E0B] text-white" 
                      : "bg-gray-200 dark:bg-white/10 group-hover:bg-gray-300"
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1">{opt}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
          className="px-8 py-3 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-500 rounded-2xl font-bold disabled:opacity-30"
        >
          Previous
        </button>
        {current < questions.length - 1 ? (
          <button
            onClick={() => setCurrent((c) => c + 1)}
            className="px-8 py-3 bg-[#060818] text-white rounded-2xl font-bold"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleFinish}
            className="px-8 py-3 bg-[#F59E0B] text-[#060818] rounded-2xl font-black"
          >
            Finish Test
          </button>
        )}
      </div>
    </motion.div>
  );
}

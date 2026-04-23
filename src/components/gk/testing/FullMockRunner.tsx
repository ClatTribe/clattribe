"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Clock } from "lucide-react";
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
      className="max-w-3xl mx-auto space-y-8"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 ${EXAM_META[examType].color} rounded-xl flex items-center justify-center text-white`}
          >
            <Star size={20} />
          </div>
          <div>
            <h2 className="font-black text-[#060818] dark:text-white">
              {examType} Mock {mockNumber}
            </h2>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Question {current + 1} of {questions.length}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#F59E0B]/10 text-[#F59E0B] px-4 py-2 rounded-2xl font-black text-sm">
          <Clock size={16} />
          {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")}
        </div>
      </div>

      <div className="space-y-6">
        {q.section && (
          <div className="bg-[#060818] text-[#F59E0B] px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] w-fit">
            {q.section}
          </div>
        )}
        
        {q.passage && (
          <div className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/10 shadow-sm leading-relaxed text-gray-700 dark:text-gray-300 italic text-sm max-h-[300px] overflow-y-auto">
            {q.passage.split('\n').map((para, i) => (
              <p key={i} className="mb-4 last:mb-0">{para}</p>
            ))}
          </div>
        )}

        <div className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/10 space-y-8">
          <p className="text-lg font-bold text-[#060818] dark:text-white leading-relaxed">
            {q.question}
          </p>
          <div className="grid gap-3">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => {
                  const newAns = [...answers];
                  newAns[current] = i;
                  setAnswers(newAns);
                }}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all font-bold text-sm flex items-center gap-4 ${
                  answers[current] === i
                    ? "bg-[#F59E0B]/10 border-[#F59E0B] text-[#060818] dark:text-white"
                    : "bg-gray-50 dark:bg-white/5 border-transparent text-gray-500 hover:border-gray-200"
                }`}
              >
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${answers[current] === i ? "bg-[#F59E0B] text-white" : "bg-gray-200 dark:bg-white/10"}`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
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

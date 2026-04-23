"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Target, Zap, CheckCircle2 } from "lucide-react";
import { TestResult } from "./constants";

export default function FeedbackScreen({
  result,
  onBack,
}: {
  result: TestResult;
  onBack: () => void;
}) {
  const percentage = Math.round((result.score / result.total) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Engine
        </button>
        <h2 className="text-2xl font-black text-[#060818] dark:text-white">
          Performance Analysis
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Score Card */}
        <div className="bg-[#060818] p-8 md:p-10 rounded-3xl md:rounded-[3rem] text-center space-y-6 shadow-2xl">
          <div className="relative inline-block">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="58"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                className="text-white/10"
              />
              <motion.circle
                cx="64"
                cy="64"
                r="58"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={364.4}
                initial={{ strokeDashoffset: 364.4 }}
                animate={{
                  strokeDashoffset: 364.4 - (364.4 * percentage) / 100,
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-[#F59E0B]"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-white">
                {percentage}%
              </span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-white font-black text-2xl">
              {result.score} / {result.total}
            </p>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
              Correct Answers
            </p>
          </div>
          <div className="pt-4 border-t border-white/10 flex justify-between items-center">
            <div className="text-left">
              <p className="text-white/50 text-[10px] font-black uppercase tracking-widest">
                Time Taken
              </p>
              <p className="text-white font-bold">
                {Math.floor(result.timeSpent / 60)}m {result.timeSpent % 60}s
              </p>
            </div>
            <p className="text-[#F59E0B] font-black text-sm uppercase tracking-widest">
              {percentage >= 80
                ? "Excellent!"
                : percentage >= 50
                  ? "Good!"
                  : "Retry!"}
            </p>
          </div>
        </div>

        {/* Breakdown & Suggestions */}
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          {/* Breakdown */}
          <div className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-gray-100 dark:border-white/10 space-y-6">
            <h3 className="text-lg font-black text-[#060818] dark:text-white flex items-center gap-2">
              <Target size={20} className="text-[#F59E0B]" />
              Sectional Performance
            </h3>
            <div className="space-y-6">
              {result.topicBreakdown.map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-xs font-black text-[#F59E0B] uppercase tracking-widest block mb-1">
                        Category {i + 1}
                      </span>
                      <span className="text-base font-bold text-[#060818] dark:text-white">
                        {item.topic}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-black text-[#060818] dark:text-white">
                        {Math.round((item.correct / item.total) * 100)}%
                      </span>
                      <span className="text-[10px] font-bold text-gray-400 block uppercase">
                        {item.correct} of {item.total} Correct
                      </span>
                    </div>
                  </div>
                  <div className="h-4 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden border border-gray-200 dark:border-white/10">
                    <motion.div
                      className={`h-full shadow-lg ${
                        item.correct / item.total >= 0.8
                          ? "bg-gradient-to-r from-green-400 to-green-600"
                          : item.correct / item.total >= 0.5
                            ? "bg-gradient-to-r from-amber-400 to-amber-600"
                            : "bg-gradient-to-r from-red-400 to-red-600"
                      }`}
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(item.correct / item.total) * 100}%`,
                      }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div className="bg-amber-50 dark:bg-[#F59E0B]/10 p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-amber-100 dark:border-[#F59E0B]/20 space-y-4 shadow-sm">
            <h3 className="text-lg font-black text-[#F59E0B] flex items-center gap-2">
              <Zap size={20} fill="currentColor" />
              Strategic Feedback
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.suggestions.map((suggestion, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-4 bg-white/50 dark:bg-white/5 rounded-2xl text-xs font-medium text-amber-900/80 dark:text-[#F59E0B]/80 leading-relaxed border border-amber-100/50 dark:border-[#F59E0B]/10"
                >
                  <div className="w-2 h-2 rounded-full bg-[#F59E0B] mt-1 flex-shrink-0 shadow-sm shadow-amber-500/50" />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Answer Sheet Review */}
      {result.questions && result.answers && (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black text-[#060818] dark:text-white">
              Detailed Answer Sheet
            </h3>
            <div className="flex gap-4 text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-gray-500">Correct</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-gray-500">Your Wrong Pick</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {result.questions.map((q, idx) => {
              const userAns = result.answers![idx];
              const isCorrect = userAns === q.correct;

              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-white/5 rounded-[2.5rem] border border-gray-100 dark:border-white/10 overflow-hidden shadow-sm"
                >
                  <div className="p-6 md:p-8 space-y-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <span className="text-[10px] font-black text-[#F59E0B] uppercase tracking-[0.2em]">
                          Question {idx + 1} | {q.section}
                        </span>
                        <h4 className="text-lg font-bold text-[#060818] dark:text-white leading-relaxed">
                          {q.question}
                        </h4>
                      </div>
                      <div
                        className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest ${
                          isCorrect
                            ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                            : userAns === null
                            ? "bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-400"
                            : "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
                        }`}
                      >
                        {isCorrect ? "Correct" : userAns === null ? "Skipped" : "Incorrect"}
                      </div>
                    </div>

                    {q.passage && (
                      <div className="p-4 bg-gray-50 dark:bg-white/[0.02] rounded-2xl border-l-4 border-[#F59E0B]/30 italic text-sm text-gray-500 dark:text-gray-400 line-clamp-3 hover:line-clamp-none transition-all cursor-pointer">
                        {q.passage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {q.options.map((opt, optIdx) => {
                        const isThisCorrect = optIdx === q.correct;
                        const isThisUserPick = optIdx === userAns;

                        return (
                          <div
                            key={optIdx}
                            className={`p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 ${
                              isThisCorrect
                                ? "bg-green-50 border-green-200 dark:bg-green-500/5 dark:border-green-500/30"
                                : isThisUserPick
                                ? "bg-red-50 border-red-200 dark:bg-red-500/5 dark:border-red-500/30"
                                : "bg-transparent border-gray-50 dark:border-white/5"
                            }`}
                          >
                            <span className={`text-sm font-bold ${
                              isThisCorrect ? "text-green-700 dark:text-green-400" : 
                              isThisUserPick ? "text-red-700 dark:text-red-400" : 
                              "text-gray-600 dark:text-gray-400"
                            }`}>
                              {opt}
                            </span>
                            {isThisCorrect && (
                              <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                            )}
                            {isThisUserPick && !isThisCorrect && (
                              <div className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-6 border-t border-gray-100 dark:border-white/10">
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
                        Explanation
                      </p>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={onBack}
          className="px-6 md:px-10 py-4 bg-white dark:bg-white/10 border border-gray-100 dark:border-white/10 text-[#060818] dark:text-white rounded-2xl font-bold hover:bg-gray-50 dark:hover:bg-white/20 transition-all text-sm md:text-base"
        >
          Retake Test
        </button>
        <button
          onClick={onBack}
          className="px-6 md:px-10 py-4 bg-[#F59E0B] text-[#060818] rounded-2xl font-bold hover:shadow-xl hover:shadow-[#F59E0B]/20 transition-all text-sm md:text-base"
        >
          Explore More Tests
        </button>
      </div>
    </motion.div>
  );
}

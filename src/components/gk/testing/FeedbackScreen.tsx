"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Target, Zap } from "lucide-react";
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
              Topic Breakdown
            </h3>
            <div className="space-y-4">
              {result.topicBreakdown.map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-[#060818] dark:text-white">
                      {item.topic}
                    </span>
                    <span className="text-gray-500">
                      {item.correct}/{item.total}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${item.correct === item.total ? "bg-green-500" : "bg-[#F59E0B]"}`}
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(item.correct / item.total) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div className="bg-amber-50 dark:bg-[#F59E0B]/10 p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-amber-100 dark:border-[#F59E0B]/20 space-y-4">
            <h3 className="text-lg font-black text-[#F59E0B] flex items-center gap-2">
              <Zap size={20} fill="currentColor" />
              Areas for Improvement
            </h3>
            <ul className="space-y-3">
              {result.suggestions.map((suggestion, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm font-medium text-amber-900/70 dark:text-[#F59E0B]/70"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 flex-shrink-0" />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

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

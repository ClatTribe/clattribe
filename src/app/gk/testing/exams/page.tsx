"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, Star, Trophy } from "lucide-react";
import { EXAM_META, ExamType } from "@/components/gk/testing/constants";

export default function ExamsListPage() {
  const router = useRouter();
  const exams = Object.keys(EXAM_META) as ExamType[];

  return (
    <div className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8 max-w-7xl mx-auto w-full">
      {/* Top bar: back + title */}
      <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
        <button
          onClick={() => router.push("/gk/testing")}
          className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] font-bold uppercase text-[10px] tracking-widest transition-colors"
        >
          <ArrowLeft size={14} /> Testing
        </button>
        <h1 className="text-lg sm:text-2xl font-black text-[#060818] dark:text-white tracking-tight">
          Full Mock Tests
        </h1>
      </div>

      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mb-5 sm:mb-7 max-w-2xl">
        Choose an exam to see its available mock series. Each mock simulates
        the real paper&apos;s pattern, duration and section split.
      </p>

      {/* Exam grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
        {exams.map((exam, idx) => {
          const meta = EXAM_META[exam];
          return (
            <motion.button
              key={exam}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                router.push(`/gk/testing/exams/${exam.toLowerCase()}`)
              }
              className="group relative bg-white dark:bg-white/5 p-4 sm:p-5 rounded-2xl border border-gray-100 dark:border-white/10 text-left hover:shadow-lg hover:border-[#F59E0B]/60 transition-all overflow-hidden"
            >
              <div
                className={`absolute -right-5 -top-5 w-24 h-24 ${meta.color} opacity-5 group-hover:opacity-10 rounded-full transition-all`}
              />

              <div className="space-y-3 sm:space-y-4 relative">
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 ${meta.color} rounded-xl flex items-center justify-center text-white shadow-md`}
                >
                  <Trophy size={20} />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-black text-[#060818] dark:text-white group-hover:text-[#F59E0B] transition-colors">
                    {exam}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-snug line-clamp-2">
                    {meta.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-white/5">
                  <span className="flex items-center gap-1 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    <Star size={11} className="text-[#F59E0B]" fill="currentColor" />
                    5 Mocks
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-black text-[#F59E0B] uppercase tracking-widest">
                    Open <ChevronRight size={13} />
                  </span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

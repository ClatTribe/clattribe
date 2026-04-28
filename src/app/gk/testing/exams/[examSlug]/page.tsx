"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Award, Clock, FileText, Star, Target } from "lucide-react";
import { EXAM_META, ExamType } from "@/components/gk/testing/constants";

const TOTAL_MOCKS = 5;

export default function ExamMocksPage() {
  const params = useParams();
  const router = useRouter();

  const examSlug = ((params?.examSlug as string) ?? "").toLowerCase();
  const examType = examSlug.toUpperCase() as ExamType;

  const validExams = Object.keys(EXAM_META) as ExamType[];
  const isValid = validExams.includes(examType);

  if (!isValid) {
    return (
      <div className="px-4 py-10 sm:py-16 max-w-2xl mx-auto text-center">
        <p className="text-base sm:text-lg font-black text-[#060818] dark:text-white mb-3">
          Exam not found
        </p>
        <button
          onClick={() => router.push("/gk/testing/exams")}
          className="text-[#F59E0B] font-bold underline text-sm"
        >
          Back to all exams
        </button>
      </div>
    );
  }

  const meta = EXAM_META[examType];
  const duration = examType === "AILET" ? "90m" : "120m";
  const questionCount = examType === "CLAT" ? "120 Qs" : "150 Qs";

  return (
    <div className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
        <button
          onClick={() => router.push("/gk/testing/exams")}
          className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] font-bold uppercase text-[10px] tracking-widest transition-colors"
        >
          <ArrowLeft size={14} /> Exams
        </button>

        <div className="flex items-center gap-2">
          <div className={`w-7 h-7 sm:w-8 sm:h-8 ${meta.color} rounded-lg flex items-center justify-center text-white`}>
            <Award size={16} />
          </div>
          <h1 className="text-lg sm:text-2xl font-black text-[#060818] dark:text-white tracking-tight">
            {examType} Mocks
          </h1>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mb-5 sm:mb-7 max-w-2xl">
        {meta.description}
      </p>

      {/* Mock grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
        {Array.from({ length: TOTAL_MOCKS }, (_, i) => i + 1).map((num) => (
          <motion.button
            key={num}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: num * 0.04 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              router.push(`/gk/testing/exams/${examSlug}/mock-${num}`)
            }
            className="group bg-white dark:bg-white/5 p-4 sm:p-5 rounded-2xl border border-gray-100 dark:border-white/10 text-left hover:border-[#F59E0B]/70 hover:shadow-lg hover:shadow-[#F59E0B]/5 transition-all"
          >
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <div className={`w-10 h-10 sm:w-11 sm:h-11 ${meta.color} rounded-xl flex items-center justify-center text-white`}>
                <FileText size={18} />
              </div>
              <Star size={14} className="text-[#F59E0B]" fill="currentColor" />
            </div>

            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
              Mock Series
            </p>
            <h3 className="text-base sm:text-lg font-black text-[#060818] dark:text-white group-hover:text-[#F59E0B] transition-colors">
              Mock {num}
            </h3>

            <div className="flex items-center gap-3 mt-3 flex-wrap">
              <span className="flex items-center gap-1 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                <Clock size={10} /> {duration}
              </span>
              <span className="flex items-center gap-1 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                <Target size={10} /> {questionCount}
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Award, FileText, Lock, Star, Clock, Target, Trophy, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { ExamType, EXAM_META } from "./constants";

export default function MockSelectionFlow({
  initialExam = null,
  onBack,
}: {
  initialExam?: ExamType | null;
  onBack: () => void;
}) {
  const router = useRouter();
  const [selectedExam, setSelectedExam] = React.useState<ExamType | null>(initialExam);

  const handleExamSelect = (type: ExamType) => {
    setSelectedExam(type);
    router.push(`/gk/testing/exam/${type.toLowerCase()}`);
  };

  const handleMockSelect = (num: number) => {
    if (selectedExam) {
      router.push(`/gk/testing/exam/${selectedExam.toLowerCase()}/mock-${num}`);
    }
  };

  if (selectedExam) {
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              setSelectedExam(null);
              router.push("/gk/testing/exam");
            }}
            className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
          >
            <ArrowLeft size={16} /> Back to Exams
          </button>
          <div className="flex items-center gap-3">
            <div
              className={`w-8 h-8 ${EXAM_META[selectedExam].color} rounded-lg flex items-center justify-center text-white`}
            >
              <Award size={18} />
            </div>
            <h2 className="text-2xl font-black text-[#060818] dark:text-white">
              {selectedExam} Mocks
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5].map((num) => {
            const isAvailable = true; // All 5 mocks are now available for both NLAT and MHCET
            return (
              <motion.button
                key={num}
                whileHover={isAvailable ? { y: -4, scale: 1.02 } : {}}
                whileTap={isAvailable ? { scale: 0.98 } : {}}
                onClick={() => isAvailable && handleMockSelect(num)}
                className={`p-6 rounded-[2rem] border text-left flex flex-col justify-between h-48 transition-all relative overflow-hidden ${
                  isAvailable
                    ? "bg-white dark:bg-white/5 border-gray-100 dark:border-white/10 hover:border-[#F59E0B] hover:shadow-xl hover:shadow-[#F59E0B]/5"
                    : "bg-gray-50 dark:bg-white/[0.02] border-transparent opacity-60"
                }`}
              >
                {!isAvailable && (
                  <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-[1px] flex items-center justify-center z-10">
                    <div className="bg-white dark:bg-[#060818] p-3 rounded-full shadow-lg">
                      <Lock size={20} className="text-gray-400" />
                    </div>
                  </div>
                )}
                <div className="flex justify-between items-start">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isAvailable ? EXAM_META[selectedExam].color : "bg-gray-200 dark:bg-white/10"}`}
                  >
                    <FileText size={24} className="text-white" />
                  </div>
                  {isAvailable && (
                    <Star
                      size={16}
                      className="text-[#F59E0B]"
                      fill="currentColor"
                    />
                  )}
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                    Mock Series
                  </p>
                  <h3 className="text-xl font-black text-[#060818] dark:text-white">
                    Mock {num}
                  </h3>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="flex items-center gap-1 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      <Clock size={10} />{" "}
                      {selectedExam === "AILET" ? "90m" : "120m"}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      <Target size={10} />{" "}
                      {selectedExam === "CLAT" ? "120 Qs" : "150 Qs"}
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

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Engine
        </button>
        <h2 className="text-2xl font-black text-[#060818] dark:text-white">
          Select Exam Type
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {(Object.keys(EXAM_META) as ExamType[]).map((type) => (
          <motion.button
            key={type}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleExamSelect(type)}
            className="group relative bg-white dark:bg-white/5 p-8 rounded-[3rem] border border-gray-100 dark:border-white/10 text-left hover:shadow-2xl hover:border-[#F59E0B] transition-all overflow-hidden"
          >
            <div
              className={`absolute -right-8 -top-8 w-40 h-40 ${EXAM_META[type].color} opacity-5 group-hover:opacity-10 rounded-full transition-all duration-500`}
            />

            <div className="space-y-6 relative z-10">
              <div
                className={`w-16 h-16 ${EXAM_META[type].color} rounded-[1.5rem] flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}
              >
                <Trophy size={32} />
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl font-black text-[#060818] dark:text-white group-hover:text-[#F59E0B] transition-colors">
                  {type}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                  {EXAM_META[type].description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-50 dark:border-white/5">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    <Star
                      size={12}
                      className="text-[#F59E0B]"
                      fill="currentColor"
                    />
                    5 Mocks
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#F59E0B] font-black text-xs uppercase tracking-widest">
                  View Series <ChevronRight size={16} />
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

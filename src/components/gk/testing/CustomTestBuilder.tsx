"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, FileText, Clock, Zap } from "lucide-react";
import { TOPICS, QUESTION_TYPES, TIME_LIMITS } from "./constants";

export default function CustomTestBuilder({ onBack }: { onBack: () => void }) {
  const [selectedTopics, setSelectedTopics] = React.useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = React.useState<string[]>([]);
  const [timeLimit, setTimeLimit] = React.useState<number>(30);
  const [isBuilding, setIsBuilding] = React.useState(false);

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const handleStart = () => {
    setIsBuilding(true);
    setTimeout(() => {
      setIsBuilding(false);
      alert(
        "Custom test generation logic would go here! Starting test with selected parameters...",
      );
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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
          Configure Custom Test
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Topics & Types */}
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          {/* Topics */}
          <div className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-gray-100 dark:border-white/10 space-y-6">
            <h3 className="text-lg font-black text-[#060818] dark:text-white flex items-center gap-2">
              <BookOpen size={20} className="text-[#F59E0B]" />
              Select Topics
            </h3>
            <div className="flex flex-wrap gap-3">
              {TOPICS.map((topic) => (
                <button
                  key={topic}
                  onClick={() => toggleTopic(topic)}
                  className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all border-2 ${
                    selectedTopics.includes(topic)
                      ? "bg-[#F59E0B] border-[#F59E0B] text-[#060818]"
                      : "bg-gray-50 dark:bg-white/5 border-transparent text-gray-500 hover:border-gray-200"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Question Types */}
          <div className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-gray-100 dark:border-white/10 space-y-6">
            <h3 className="text-lg font-black text-[#060818] dark:text-white flex items-center gap-2">
              <FileText size={20} className="text-[#F59E0B]" />
              Question Types
            </h3>
            <div className="flex flex-wrap gap-3">
              {QUESTION_TYPES.map((type) => (
                <button
                  key={type}
                  onClick={() => toggleType(type)}
                  className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all border-2 ${
                    selectedTypes.includes(type)
                      ? "bg-[#060818] border-[#060818] text-white"
                      : "bg-gray-50 dark:bg-white/5 border-transparent text-gray-500 hover:border-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Time & Summary */}
        <div className="space-y-6 md:space-y-8">
          {/* Time Limit */}
          <div className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-gray-100 dark:border-white/10 space-y-6">
            <h3 className="text-lg font-black text-[#060818] dark:text-white flex items-center gap-2">
              <Clock size={20} className="text-[#F59E0B]" />
              Time Limit
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {TIME_LIMITS.map((limit) => (
                <button
                  key={limit.value}
                  onClick={() => setTimeLimit(limit.value)}
                  className={`p-4 rounded-2xl font-bold text-sm transition-all border-2 ${
                    timeLimit === limit.value
                      ? "bg-[#F59E0B] border-[#F59E0B] text-[#060818]"
                      : "bg-gray-50 dark:bg-white/5 border-transparent text-gray-500 hover:border-gray-200"
                  }`}
                >
                  {limit.label}
                </button>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <div className="bg-[#060818] p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] space-y-6">
            <div className="space-y-2">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Test Summary
              </p>
              <div className="space-y-1">
                <p className="text-white font-bold text-sm flex justify-between">
                  Topics: <span>{selectedTopics.length || "All"}</span>
                </p>
                <p className="text-white font-bold text-sm flex justify-between">
                  Types: <span>{selectedTypes.length || "All"}</span>
                </p>
                <p className="text-white font-bold text-sm flex justify-between">
                  Duration: <span>{timeLimit} Mins</span>
                </p>
              </div>
            </div>
            <button
              disabled={isBuilding}
              onClick={handleStart}
              className="w-full bg-[#F59E0B] text-[#060818] py-4 rounded-2xl font-black text-lg shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isBuilding ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  <Clock size={24} />
                </motion.div>
              ) : (
                <>
                  Start Custom Test
                  <Zap size={20} fill="currentColor" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

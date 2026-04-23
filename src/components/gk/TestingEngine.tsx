"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  History,
  ChevronRight,
  Clock,
  Trophy,
  ArrowLeft,
  CheckCircle2,
  Timer,
  TrendingDown,
  Lightbulb,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";

// Local imports
import GKPassageTest from "./PassageTest"; 
import GKSectionalTest from "./GKSectionalTest";
import GKWeeklyTest from "./GKWeeklyTest";
import GKPYQTest from "./GKPYQTest";

// Extracted components and constants
import { 
  CATEGORIES, 
  TestType, 
  TestResult, 
  TestCategory 
} from "./testing/constants";
import CustomTestBuilder from "./testing/CustomTestBuilder";
import FeedbackScreen from "./testing/FeedbackScreen";
import MockSelectionFlow from "./testing/MockSelectionFlow";

export default function TestingEngine() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = React.useState<TestType>(null);
  const [testResult, setTestResult] = React.useState<TestResult | null>(null);
  const [history, setHistory] = React.useState<TestResult[]>(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("clat_test_history");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const insights = React.useMemo(() => {
    if (history.length === 0) return null;

    const topicStats: Record<
      string,
      { correct: number; total: number; time: number; count: number }
    > = {};

    history.forEach((test) => {
      test.topicBreakdown.forEach((item) => {
        if (!topicStats[item.topic]) {
          topicStats[item.topic] = { correct: 0, total: 0, time: 0, count: 0 };
        }
        topicStats[item.topic].correct += item.correct;
        topicStats[item.topic].total += item.total;
        const topicWeight = item.total / test.total;
        topicStats[item.topic].time += test.timeSpent * topicWeight;
        topicStats[item.topic].count += 1;
      });
    });

    const analyzedTopics = Object.entries(topicStats).map(([topic, stats]) => ({
      topic,
      accuracy: Math.round((stats.correct / stats.total) * 100),
      avgTimePerQuestion: Math.round(stats.time / stats.total),
      totalQuestions: stats.total,
    }));

    const weakAreas = analyzedTopics
      .filter((t) => t.accuracy < 70)
      .sort((a, b) => a.accuracy - b.accuracy);

    const slowAreas = analyzedTopics
      .filter((t) => t.avgTimePerQuestion > 60)
      .sort((a, b) => b.avgTimePerQuestion - a.avgTimePerQuestion);

    return { analyzedTopics, weakAreas, slowAreas };
  }, [history]);

  const handleCategoryClick = (catId: TestType) => {
    if (catId === "mock") {
      router.push("/gk/testing/exam");
    } else if (catId) {
      router.push(`/gk/testing/${catId}`);
    }
  };

  if (testResult) {
    return (
      <FeedbackScreen
        result={testResult}
        onBack={() => {
          setTestResult(null);
          setActiveCategory(null);
        }}
      />
    );
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-black text-[#060818] dark:text-white tracking-tight">
          Testing Engine
        </h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          Master the art of CLAT with our comprehensive test series.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#060818] dark:bg-white/5 p-6 rounded-3xl border border-white/10 flex items-center gap-4">
          <div className="w-12 h-12 bg-[#F59E0B] rounded-2xl flex items-center justify-center text-[#060818]">
            <Trophy size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Total Tests Taken
            </p>
            <p className="text-2xl font-black text-white">{history.length}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/10 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Avg. Accuracy
            </p>
            <p className="text-2xl font-black text-[#060818] dark:text-white">
              {history.length > 0
                ? Math.round(
                    (history.reduce(
                      (acc, curr) => acc + curr.score / curr.total,
                      0,
                    ) /
                      history.length) *
                      100,
                  )
                : 0}
              %
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/10 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500">
            <Timer size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Time Spent
            </p>
            <p className="text-2xl font-black text-[#060818] dark:text-white">
              {Math.round(
                (history.reduce((acc, curr) => acc + curr.timeSpent, 0) /
                  3600) *
                  10,
              ) / 10}
              h
            </p>
          </div>
        </div>
      </div>

      {/* Personalized Insights */}
      {insights &&
        (insights.weakAreas.length > 0 || insights.slowAreas.length > 0) && (
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center text-[#F59E0B]">
                <Lightbulb size={18} />
              </div>
              <h3 className="text-2xl font-black tracking-tight dark:text-white">
                Personalized Insights
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {insights.weakAreas.length > 0 && (
                <div className="bg-red-50 dark:bg-red-500/5 p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-red-100 dark:border-red-500/10 space-y-4">
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-black text-[10px] uppercase tracking-widest">
                    <TrendingDown size={14} />
                    Weak Areas (Accuracy &lt; 70%)
                  </div>
                  <div className="space-y-4">
                    {insights.weakAreas.slice(0, 2).map((area) => (
                      <div
                        key={area.topic}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <p className="text-sm font-black text-[#060818] dark:text-white">
                            {area.topic}
                          </p>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            {area.totalQuestions} questions attempted
                          </p>
                        </div>
                        <span className="text-lg font-black text-red-600">
                          {area.accuracy}%
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveCategory("custom")}
                    className="w-full py-3 bg-red-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-700 transition-all"
                  >
                    Practice Weak Topics
                  </button>
                </div>
              )}

              {insights.slowAreas.length > 0 && (
                <div className="bg-amber-50 dark:bg-[#F59E0B]/5 p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-amber-100 dark:border-[#F59E0B]/10 space-y-4">
                  <div className="flex items-center gap-2 text-[#F59E0B] font-black text-[10px] uppercase tracking-widest">
                    <Clock size={14} />
                    Speed Bottlenecks
                  </div>
                  <div className="space-y-4">
                    {insights.slowAreas.slice(0, 2).map((area) => (
                      <div
                        key={area.topic}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <p className="text-sm font-black text-[#060818] dark:text-white">
                            {area.topic}
                          </p>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            Avg. {area.avgTimePerQuestion}s / question
                          </p>
                        </div>
                        <span className="text-lg font-black text-[#F59E0B]">
                          Slow
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveCategory("passage")}
                    className="w-full py-3 bg-[#F59E0B] text-[#060818] rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-amber-400 transition-all"
                  >
                    Improve Reading Speed
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

      {/* Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCategoryClick(cat.id)}
              className="group relative bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/10 text-left hover:shadow-2xl hover:shadow-[#F59E0B]/10 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute -right-8 -top-8 w-32 h-32 ${cat.color} opacity-5 group-hover:opacity-10 rounded-full transition-all duration-500`}
              />

              <div className="space-y-6 relative">
                <div
                  className={`w-14 h-14 ${cat.color} ${cat.accent} rounded-2xl flex items-center justify-center shadow-lg shadow-current/10`}
                >
                  {cat.icon}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-[#060818] dark:text-white group-hover:text-[#F59E0B] transition-colors">
                      {cat.title}
                    </h3>
                    <ChevronRight
                      size={20}
                      className="text-gray-300 group-hover:text-[#F59E0B] transition-all group-hover:translate-x-1"
                    />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-gray-50 dark:border-white/5">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    {cat.count}
                  </span>
                  <span className="text-[10px] font-black text-[#F59E0B] uppercase tracking-widest bg-[#F59E0B]/10 px-2 py-0.5 rounded">
                    Start Now
                  </span>
                </div>
              </div>
            </motion.button>
          ))}

          {/* Custom Test Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#F59E0B] p-8 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-125 transition-transform duration-700">
              <Zap size={120} className="text-[#060818]" />
            </div>
            <div className="space-y-4 relative">
              <h3 className="text-2xl font-black text-[#060818] leading-tight">
                Create Custom Test
              </h3>
              <p className="text-[#060818]/60 text-sm font-bold">
                Mix topics and set your own timer for a personalized challenge.
              </p>
            </div>
            <button
              onClick={() => handleCategoryClick("custom")}
              className="bg-[#060818] text-white px-6 py-3 rounded-2xl font-black text-sm w-fit mt-8 relative group-hover:bg-gray-800 transition-colors"
            >
              Build Test
            </button>
          </motion.div>
        </div>

        {/* Test History Sidebar */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black tracking-tight dark:text-white">
              Test History
            </h3>
            <History size={20} className="text-[#F59E0B]" />
          </div>

          <div className="bg-white dark:bg-white/5 p-6 rounded-[2.5rem] border border-gray-100 dark:border-white/10 space-y-4 max-h-[600px] overflow-y-auto">
            {history.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto text-gray-300">
                  <History size={24} />
                </div>
                <p className="text-sm font-bold text-gray-400">
                  No tests taken yet.
                </p>
              </div>
            ) : (
              history.map((test, idx) => (
                <motion.button
                  key={test.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setTestResult(test)}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-left group border border-transparent hover:border-[#F59E0B]/20"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs ${
                      test.score / test.total >= 0.8
                        ? "bg-emerald-500/10 text-emerald-500"
                        : test.score / test.total >= 0.5
                          ? "bg-amber-500/10 text-amber-500"
                          : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {Math.round((test.score / test.total) * 100)}%
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-black text-[#060818] dark:text-white group-hover:text-[#F59E0B] transition-colors">
                      {test.category}
                    </p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {test.date}
                    </p>
                  </div>
                  <ChevronRight
                    size={16}
                    className="text-gray-300 group-hover:text-[#F59E0B] transition-all group-hover:translate-x-1"
                  />
                </motion.button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Zap, Layers } from "lucide-react";

const capsules = [
  {
    id: "long",
    title: "The Marathon",
    duration: "6 Months",
    icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    color: "from-[#024687] to-[#0ea5e9]",
    description:
      "Comprehensive coverage of past events. Deep dive into legal precedents and historical context.",
    stats: ["1200+ Topics", "Deep Analysis", "Video Explainers"],
    oldPrice: "15,999",
    currentPrice: "9,999",
    link: "https://pages.razorpay.com/clattribemarathon",
  },
  {
    id: "medium",
    title: "The Sprinter",
    duration: "1 Month",
    icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    color: "from-[#7c3aed] to-[#ec4899]",
    description:
      "High-yield topics only. Focused entirely on likely exam candidates and current affairs.",
    stats: ["300+ Key Topics", "Summary Notes", "Weekly Quizzes"],
    oldPrice: "5,999",
    currentPrice: "3,999",
    link: "https://rzp.io/rzp/clattribesprinter",
  },
  {
    id: "short",
    title: "The Finisher",
    duration: "7 Days",
    icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    color: "from-[#f59e0b] to-[#f97316]",
    description:
      "Rapid revision, acronym, one liners etc specially designed for AILET.",
    stats: ["100 Hot Topics", "Flash Memorization", "Cheat Sheets"],
    oldPrice: "1,999",
    currentPrice: "999",
    link: "https://pages.razorpay.com/clattribefinisher", 
  },
];

const CapsuleSystem = () => {
  const [activeCapsule, setActiveCapsule] = useState(capsules[0]);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-[#1e293b] min-h-screen">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[length:24px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 sm:mb-4 text-white px-2">
            Strategic GK Capsules
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Whether you have months or days, we have a structured learning path for you. Don&apos;t study hard, study smart.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-stretch justify-center max-w-7xl mx-auto">
          <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-2/5 xl:w-1/3">
            {capsules.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setActiveCapsule(cap)}
                className={`flex items-center justify-between gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 border ${
                  activeCapsule.id === cap.id
                    ? "bg-[#334155] border-[#f59e0b]/50 shadow-lg scale-[1.02] sm:scale-105"
                    : "bg-transparent border-[#334155] hover:bg-[#334155]/50 hover:border-[#475569]"
                }`}
              >
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                  <div className={`p-2 sm:p-2.5 md:p-3 rounded-lg bg-gradient-to-br ${cap.color} text-white shadow-inner flex-shrink-0`}>
                    {cap.icon}
                  </div>

                  <div className="text-left min-w-0 flex-1">
                    <h3 className={`font-bold text-sm sm:text-base md:text-lg truncate ${
                        activeCapsule.id === cap.id ? "text-white" : "text-slate-300"
                      }`}>
                      {cap.duration}
                    </h3>
                    <p className="text-xs text-slate-500 uppercase tracking-wide truncate">
                      {cap.title}
                    </p>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <div className="text-xs sm:text-sm text-slate-400 line-through">
                    ₹{cap.oldPrice}
                  </div>
                  <div className="text-base sm:text-lg md:text-xl font-bold text-white whitespace-nowrap">
                    ₹{cap.currentPrice}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="w-full lg:w-3/5 xl:w-2/3 min-h-[450px] sm:min-h-[500px] lg:h-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapsule.id}
                initial={{ opacity: 0, y: 20, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 10 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="w-full h-full"
              >
                <div className={`w-full h-full rounded-xl sm:rounded-2xl bg-gradient-to-br ${activeCapsule.color} p-0.5 sm:p-1`}>
                  <div className="w-full h-full bg-[#0f172a]/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col justify-between border border-white/10">
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white/10 text-white uppercase">
                          {activeCapsule.icon}
                          <span className="hidden xs:inline">{activeCapsule.title}</span>
                        </div>
                        <span className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white/20">
                          {activeCapsule.duration}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white leading-snug">
                        {activeCapsule.description}
                      </h3>
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 my-4 sm:my-6">
                      {activeCapsule.stats.map((stat, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 + 0.2 }}
                          className="bg-[#1e293b] p-2 sm:p-3 rounded-lg text-center"
                        >
                          <span className="block font-bold text-[#f59e0b] text-base sm:text-lg">
                            ✓
                          </span>
                          <span className="text-[10px] sm:text-xs text-slate-300 leading-tight block mt-1">
                            {stat}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <div className="flex justify-between text-xs sm:text-sm text-slate-400 mb-1.5 sm:mb-2">
                          <span>Coverage Depth</span>
                          <span>
                            {activeCapsule.id === "long"
                              ? "100%"
                              : activeCapsule.id === "medium"
                              ? "60%"
                              : "20%"}
                          </span>
                        </div>
                        <div className="h-1.5 sm:h-2 w-full bg-[#334155] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{
                              width:
                                activeCapsule.id === "long"
                                  ? "100%"
                                  : activeCapsule.id === "medium"
                                  ? "60%"
                                  : "20%",
                            }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className={`h-full bg-gradient-to-r ${activeCapsule.color}`}
                          />
                        </div>
                      </div>

                      <motion.a
                        href={activeCapsule.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl bg-gradient-to-r ${activeCapsule.color} text-white font-bold text-sm sm:text-base md:text-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 block`}
                      >
                        Join Now
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapsuleSystem;
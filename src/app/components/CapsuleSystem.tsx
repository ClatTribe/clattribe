"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, Zap, Layers } from "lucide-react";

const capsules = [
  {
    id: "long",
    title: "The Marathon",
    duration: "6 Months",
    icon: <Layers className="w-6 h-6" />,
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
    icon: <Calendar className="w-6 h-6" />,
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
    icon: <Zap className="w-6 h-6" />,
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
    <section className="py-24 relative overflow-hidden bg-[#1e293b] min-h-screen">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">
            Strategic GK Capsules
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Whether you have months or days, we have a structured learning path
            for you. Don't study hard, study smart.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Controls */}
          <div className="flex flex-col gap-4 w-full lg:w-1/3">
            {capsules.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setActiveCapsule(cap)}
                className={`flex items-center justify-between gap-4 p-4 rounded-xl transition-all duration-300 border ${
                  activeCapsule.id === cap.id
                    ? "bg-[#334155] border-[#f59e0b]/50 shadow-lg scale-105"
                    : "bg-transparent border-[#334155] hover:bg-[#334155]/50 hover:border-[#475569]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg bg-linear-to-br ${cap.color} text-white shadow-inner`}
                  >
                    {cap.icon}
                  </div>

                  <div className="text-left">
                    <h3
                      className={`font-bold text-lg ${
                        activeCapsule.id === cap.id
                          ? "text-white"
                          : "text-slate-300"
                      }`}
                    >
                      {cap.duration} Capsule
                    </h3>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">
                      {cap.title}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm text-slate-400 line-through">
                    ₹{cap.oldPrice}
                  </div>
                  <div className="text-xl font-bold text-white">
                    ₹{cap.currentPrice}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Visualization */}
          <div className="w-full lg:w-1/2 h-[500px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapsule.id}
                initial={{ opacity: 0, y: 20, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 10 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="absolute inset-0"
              >
                <div
                  className={`w-full h-full rounded-2xl bg-linear-to-br ${activeCapsule.color} p-1`}
                >
                  <div className="w-full h-full bg-[#0f172a]/90 backdrop-blur-xl rounded-xl p-8 flex flex-col justify-between border border-white/10">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white uppercase">
                          {activeCapsule.icon} {activeCapsule.title}
                        </div>
                        <span className="text-4xl font-serif font-bold text-white/20">
                          {activeCapsule.duration}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold mb-4 text-white">
                        {activeCapsule.description}
                      </h3>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {activeCapsule.stats.map((stat, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 + 0.2 }}
                          className="bg-[#1e293b] p-3 rounded-lg text-center"
                        >
                          <span className="block font-bold text-[#f59e0b] text-lg">
                            ✓
                          </span>
                          <span className="text-xs text-slate-300">{stat}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-6">
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Coverage Depth</span>
                        <span>
                          {activeCapsule.id === "long"
                            ? "100%"
                            : activeCapsule.id === "medium"
                            ? "60%"
                            : "20%"}
                        </span>
                      </div>
                      <div className="h-2 w-full bg-[#334155] rounded-full overflow-hidden">
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
                          className={`h-full bg-linear-to-r ${activeCapsule.color}`}
                        />
                      </div>
                    </div>

                    {/* Join Now Button */}
                    <motion.a
                      href={activeCapsule.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className={`mt-6 w-full py-4 rounded-xl bg-gradient-to-r ${activeCapsule.color} text-white font-bold text-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 block`}
                    >
                      Join Now
                    </motion.a>
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
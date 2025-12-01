"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 text-white"
      style={{ backgroundColor: "#0f172a" }}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "#f59e0b1A" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: "#3b82f61A" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-left mb-10 md:mb-0"
        >
          <div
            className="inline-block px-3 py-1 mb-4 border rounded-full text-sm font-semibold tracking-wide"
            style={{
              borderColor: "#f59e0b4D",
              backgroundColor: "#f59e0b1A",
              color: "#f59e0b",
            }}
          >
            #1 GK PLATFORM FOR CLAT
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            Master the Facts.
            <br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r"
              style={{
                backgroundImage: "linear-gradient(to right, #f59e0b, #fde68a)",
              }}
            >
              Rule the Law.
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            Stop drowning in newspapers. ClatTribe delivers high-impact GK
            capsules, smart flashcards, and strategies curated by Yash Ji.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="px-8 py-4 font-bold rounded-lg transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              style={{
                backgroundColor: "#f59e0b",
                color: "#0f172a",
              }}
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              className="px-8 py-4 border text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              style={{
                borderColor: "#1e293b",
                backgroundColor: "#1e293b80",
              }}
            >
              <BookOpen className="w-5 h-5" />
              View Capsules
            </button>
          </div>
        </motion.div>

        {/* Hero Image / Yash Ji */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center relative"
        >
          <div className="relative w-80 h-80 md:w-[500px] md:h-[600px]">
            {/* Decorative Frame */}
            <div
              className="absolute inset-0 border-2 rounded-2xl transform rotate-3 scale-105"
              style={{ borderColor: "#f59e0b33" }}
            ></div>

            <div
              className="absolute inset-0 bg-gradient-to-b z-10"
              style={{ backgroundImage: "linear-gradient(to bottom, transparent, #0f172a)" }}
            ></div>

            <img
              src="https://picsum.photos/seed/yashji/500/600"
              alt="Yash Ji - Star Teacher"
              className="w-full h-full object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-10 -left-6 md:-left-10 border p-4 rounded-xl shadow-xl z-20"
              style={{
                backgroundColor: "#1e293b",
                borderColor: "#334155",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl"
                  style={{
                    backgroundColor: "#f59e0b",
                    color: "#0f172a",
                  }}
                >
                  Y
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">
                    Mentored by
                  </p>
                  <p className="font-serif font-bold text-white text-lg">
                    Yash Ji
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

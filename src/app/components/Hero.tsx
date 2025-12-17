"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

interface HeroProps {
  onNavigate: (section: 'leadform' | 'capsules') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      className="relative min-h-screen lg:flex hidden sm:block items-center justify-center overflow-hidden pt-20 text-white"
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
            className="w-[215px] hidden sm:block px-3 mt-2 py-1 mb-4 border rounded-full text-sm font-semibold tracking-wide "
            style={{
              borderColor: "#f59e0b4D",
              backgroundColor: "#f59e0b1A",
              color: "#f59e0b",
            }}
          >
            #1 GK PLATFORM FOR CLAT
          </div>

          <h1 className="text-3xl hidden sm:block md:text-6xl font-serif font-bold leading-tight mb-2">
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

          <p className="text-slate-400 hidden sm:block text-[14px] md:text-xl mb-6 max-w-lg leading-relaxed">
            Stop drowning in newspapers. ClatTribe delivers high-impact GK
            capsules, smart flashcards, and strategies curated by us.
          </p>

          <div className="hidden sm:block lg:flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate('leadform')}
              className="px-8 py-4 font-bold rounded-lg transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-105"
              style={{
                backgroundColor: "#f59e0b",
                color: "#0f172a",
              }}
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('capsules')}
              className="px-8 py-4 border text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:bg-white/10 hover:scale-105"
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

        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center relative"
        >
          <div className="relative hidden sm:block w-80 h-80 mb-7 md:w-[500px] md:h-[600px]">
            {/* Decorative Frame */}
            <div
              className="absolute inset-0 border-2 rounded-2xl transform rotate-3 scale-105"
              style={{ borderColor: "#f59e0b33" }}
            ></div>

            <div
              // className="absolute inset-0 bg-gradient-to-b z-10"
              // style={{ backgroundImage: "linear-gradient(to bottom, transparent, #0f172a)" }}
            ></div>

            <img
              src="https://res.cloudinary.com/daetdadtt/image/upload/v1765009390/IMG_5613_1_knzs0v.jpg"
              alt=" Star Teacher"
              className="w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-700"
            />

            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, Zap, CheckCircle2, Crown } from "lucide-react";

interface GKSubscriptionModalProps {
  onSubscribe: () => void;
  onClose: () => void;
}

const FEATURES = [
  "Unlimited daily editorials & MCQs",
  "Access to all 6 years of PYQs",
  "Full mock test series (15 mocks)",
  "AI-powered passage analysis",
  "Spaced repetition flashcard system",
  "Monthly GK capsule summaries",
];

export default function GKSubscriptionModal({
  onSubscribe,
  onClose,
}: GKSubscriptionModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-lg bg-white dark:bg-[#060818] rounded-[3rem] shadow-2xl border border-gray-100 dark:border-white max-h-[90vh] overflow-y-auto/10 overflow-hidden relative"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="bg-[#060818] p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[#F59E0B]/5 pointer-events-none" />
          <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-[#F59E0B]/20">
            <Crown size={32} className="text-[#F59E0B]" />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] text-[10px] font-black uppercase tracking-widest mb-4">
            <Zap size={12} />
            Your Free Trial Has Ended
          </div>
          <h2 className="text-3xl font-black text-white mb-2">Go Premium</h2>
          <p className="text-gray-400 text-sm font-medium">
            Unlock the full CLAT Tribe GK experience
          </p>
        </div>

        {/* Features */}
        <div className="p-6 space-y-5">
          <div className="space-y-4">
            {FEATURES.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F59E0B]/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={14} className="text-[#F59E0B]" />
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-6 text-center border border-gray-100 dark:border-white/5">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
              Flat Monthly Fee
            </p>
            <div className="flex items-end justify-center gap-1">
              <span className="text-5xl font-black text-[#060818] dark:text-white">
                ₹99
              </span>
              <span className="text-gray-400 font-bold mb-2">/month</span>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              No hidden charges. Cancel anytime.
            </p>
          </div>

          <button
            onClick={onSubscribe}
            className="w-full bg-[#F59E0B] text-[#060818] py-4 rounded-2xl font-black text-lg shadow-xl shadow-[#F59E0B]/20 hover:bg-amber-400 transition-all"
          >
            Unlock Premium Access
          </button>
          <button
            onClick={onClose}
            className="w-full text-gray-400 text-sm font-bold py-2 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          >
            Maybe later
          </button>
        </div>
      </motion.div>
    </div>
  );
}

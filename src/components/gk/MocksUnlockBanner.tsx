"use client";
import React from "react";
import { motion } from "framer-motion";
import { Lock, Star, Trophy, ArrowRight, Clock } from "lucide-react";
import { useAccess, RAZORPAY_LINKS } from "@/lib/access";

/**
 * Shown above the testing engine grid (and on each exam's mocks list).
 * - Hidden while loading.
 * - Hidden when user already has mocks lifetime access.
 * - Visible otherwise — promotes the ₹999 one-time unlock.
 *
 * Note: Mock #1 of every exam is free regardless. This banner sells
 * the unlock for mocks #2–#5 across all 4 exams.
 */
export default function MocksUnlockBanner() {
  const access = useAccess();

  if (access.loading) return null;
  if (access.hasMocks) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-gradient-to-r from-purple-700 via-purple-600 to-fuchsia-600 rounded-[2rem] overflow-hidden shadow-xl shadow-purple-600/30"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />

      <div className="relative p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/15 rounded-2xl flex items-center justify-center flex-shrink-0">
          <Trophy size={22} className="text-white" fill="currentColor" />
        </div>

        <div className="flex-1 min-w-0 space-y-1.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] bg-white/15 px-2 py-0.5 rounded-full">
              Lifetime
            </span>
            <span className="flex items-center gap-1 text-[10px] font-black text-emerald-300 uppercase tracking-widest">
              <Star size={10} fill="currentColor" /> Mock #1 free
            </span>
          </div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white leading-tight tracking-tight">
            Unlock all 40 Full Mocks for life — ₹999
          </h3>
          <p className="text-purple-100 text-xs sm:text-sm font-medium">
            CLAT, AILET, MHCET, NLAT — every full-length mock, with section
            breakdown and AI rank predictor. Pay once, prep forever.
          </p>
        </div>

        <div className="flex flex-col items-stretch sm:items-end gap-1.5 w-full sm:w-auto">
          <a
            href={RAZORPAY_LINKS.mocksLifetime}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-700 px-5 sm:px-7 py-3 rounded-2xl font-black text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Pay ₹999 — Unlock All
            <ArrowRight size={16} />
          </a>
          <p className="text-[10px] text-purple-100/80 font-medium flex items-center gap-1 justify-center sm:justify-end">
            <Clock size={10} /> Activates within 30 minutes
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Inline lock variant — for individual mock cards that are gated.
 * Use this on mocks #2–#5 to replace the start CTA when locked.
 */
export function MockLockedCTA() {
  return (
    <a
      href={RAZORPAY_LINKS.mocksLifetime}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest hover:bg-purple-500 transition-colors"
    >
      <Lock size={10} /> Unlock ₹999
    </a>
  );
}

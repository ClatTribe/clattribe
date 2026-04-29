"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Crown,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useAccess, RAZORPAY_LINKS } from "@/lib/access";

/**
 * Shown on the dashboard (and anywhere else gated by portal access).
 * - Hidden while loading.
 * - Hidden when user has portal access (trial OR paid).
 * - Visible when trial has ended and user has not paid.
 *
 * Pure CTA card. Pricing: Rs 99/month. Activation lag: ~30 minutes.
 */
export default function PortalPaywall() {
  const access = useAccess();

  if (access.loading) return null;
  if (access.hasPortal) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-gradient-to-br from-[#F59E0B] via-amber-400 to-[#F59E0B] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#F59E0B]/30"
    >
      {/* Decorative blob */}
      <div className="absolute -top-12 -right-12 w-56 h-56 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-16 -left-12 w-72 h-72 bg-[#060818]/10 rounded-full blur-3xl" />

      <div className="relative p-6 sm:p-10 grid lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
        {/* Left: pitch */}
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#060818] rounded-xl flex items-center justify-center">
              <Crown size={18} className="text-[#F59E0B]" />
            </div>
            <p className="text-[10px] font-black text-[#060818] uppercase tracking-[0.2em]">
              CLAT Tribe Premium
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#060818] tracking-tight leading-tight">
              Your free trial has ended.
              <br />
              Don&apos;t break the streak.
            </h2>
            <p className="text-[#060818]/80 font-medium text-sm sm:text-base max-w-xl">
              Continue full access to Daily GK Vault, Monthly Summary,
              Editorials, Flashcards, Static GK and the Testing Engine — for
              just <span className="font-black">₹99/month</span>.
            </p>
          </div>

          <ul className="space-y-2">
            {[
              "Daily CLAT GK Vault — 12 stories per day",
              "Monthly Summary — 40+ events curated for CLAT",
              "Editorials, Flashcards, Static GK, all Free mocks",
              "Cancel anytime — pay only when you continue",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-2 text-sm text-[#060818]/90 font-medium"
              >
                <CheckCircle2
                  size={16}
                  className="text-[#060818] mt-0.5 flex-shrink-0"
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: price card + CTA */}
        <div className="bg-[#060818] rounded-[2rem] p-6 sm:p-7 text-white shadow-2xl space-y-5">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl sm:text-6xl font-black text-[#F59E0B] leading-none">
              ₹99
            </span>
            <span className="text-gray-400 font-bold">/month</span>
          </div>

          <div className="text-xs text-gray-400 font-medium leading-relaxed">
            One-time payment. 30 days of full access. No card stored, no
            auto-renew — pay again when the month ends.
          </div>

          <a
            href={RAZORPAY_LINKS.portalMonthly}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#F59E0B] text-[#060818] text-center py-4 rounded-2xl font-black text-base sm:text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Pay ₹99 — Continue Access
            <ArrowRight size={18} />
          </a>

          <div className="flex items-start gap-2 text-[10px] text-gray-300 font-medium pt-1">
            <Clock size={12} className="text-[#F59E0B] mt-0.5 flex-shrink-0" />
            <span>
              After payment, your access activates within 30 minutes. We&apos;ll
              also email you a confirmation. If it takes longer,
              <br />
              email <span className="text-[#F59E0B]">support@clattribe.com</span>.
            </span>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <span className="flex items-center gap-1">
              <Sparkles size={11} className="text-[#F59E0B]" />
              Razorpay Secure
            </span>
            <span>UPI · Cards · NetBanking</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

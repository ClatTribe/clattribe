"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, ArrowRight, Sparkles, MessageCircle } from "lucide-react";

/**
 * Razorpay redirects users here after a successful payment.
 * Access is provisioned manually by the mentor team within 30 minutes,
 * so this page sets the right expectation instead of pretending it's instant.
 */
export default function PaymentSuccessPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-2xl w-full bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/30 rounded-[2rem] p-6 sm:p-10 text-center shadow-2xl shadow-emerald-500/10"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
          className="w-20 h-20 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 ring-4 ring-emerald-500/10"
        >
          <CheckCircle2 size={48} className="text-emerald-400" strokeWidth={2.5} />
        </motion.div>

        <h1 className="text-3xl sm:text-4xl font-black text-white mb-3 tracking-tight">
          Payment Received
        </h1>
        <p className="text-white/70 text-base sm:text-lg mb-8 max-w-md mx-auto leading-relaxed">
          Thanks for joining CLAT Tribe. Your access is being activated.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 flex items-start gap-3 text-left">
          <Clock size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-white font-bold text-sm sm:text-base">
              Activation within 30 minutes
            </p>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Our team manually verifies every payment to keep your account secure. You&apos;ll get a WhatsApp confirmation once your portal is live — no need to log out and back in.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <Link
            href="/gk/dashboard"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-2xl font-black text-sm sm:text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Go to Dashboard <ArrowRight size={16} />
          </Link>
          <Link
            href="/gk/testing"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-2xl font-black text-sm sm:text-base transition-all hover:scale-[1.02] active:scale-[0.98] border border-white/10"
          >
            <Sparkles size={16} /> View Mocks
          </Link>
        </div>

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-xs sm:text-sm font-medium transition-colors"
        >
          <MessageCircle size={14} /> Need help? WhatsApp us
        </a>
      </motion.div>
    </div>
  );
}

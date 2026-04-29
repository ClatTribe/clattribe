'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2, Circle, Clock, TrendingUp, Zap, ArrowRight, Sparkles,
} from 'lucide-react';
import { getDailyTargets } from '@/constants/gk-constants';

function firstName(full: string): string {
  if (!full) return 'Student';
  const trimmed = full.trim();
  if (!trimmed) return 'Student';
  return trimmed.split(/\s+/)[0];
}

export default function GKDashboard() {
  const dailyTargets = getDailyTargets();
  const [toast, setToast] = React.useState<string | null>(null);
  const [userName, setUserName] = React.useState<string>('Student');
  const [readingSpeed, setReadingSpeed] = React.useState<string>('—');

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const name = window.localStorage.getItem('gk_userName') || '';
      if (name) setUserName(name);
      const wpm = window.localStorage.getItem('gk_readingSpeed');
      if (wpm && !isNaN(parseInt(wpm, 10)) && parseInt(wpm, 10) > 0) {
        setReadingSpeed(`${wpm} wpm`);
      }
    } catch {}
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  // Stats: Reading Speed pulled from real localStorage tracking in EditorialDetail.
  // Other metrics show "—" until activity tracking is wired up — no fake numbers.
  const stats = [
    { label: 'Accuracy Rate', value: '—', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Reading Speed', value: readingSpeed, icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: 'Quizzes Taken', value: '—', icon: CheckCircle2, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Editorials Read', value: '—', icon: Sparkles, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  return (
    <div className="space-y-12 relative">
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-[#060818] text-white px-6 py-3 rounded-2xl font-bold shadow-2xl border border-white/10"
        >
          {toast}
        </motion.div>
      )}

      {/* Welcome — h1 for SEO, real userName from auth */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-[#F59E0B] font-black text-xs uppercase tracking-[0.2em] mb-3">
            <Sparkles size={14} /> Student Portal
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-[#060818] dark:text-white">
            Welcome back, {firstName(userName)}!
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 font-medium">
            Pick up where you left off — your daily targets are ready below.
          </p>
        </div>
      </section>

      {/* Stats — only Reading Speed is real today; others stay "—" until tracked */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-[2rem] flex items-center justify-between p-8"
          >
            <div>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-3xl font-black text-[#060818] dark:text-white">{stat.value}</p>
              {stat.value === '—' && (
                <p className="text-[10px] text-gray-400 font-medium mt-1">Tracking your activity</p>
              )}
            </div>
            <div className={`p-4 rounded-2xl ${stat.bg} dark:bg-white/10 ${stat.color}`}>
              <stat.icon size={28} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Daily Targets */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black tracking-tight dark:text-white">Daily Targets</h2>
          <div className="flex items-center gap-2 text-sm font-bold text-[#F59E0B] bg-amber-50 dark:bg-[#F59E0B]/10 px-4 py-1.5 rounded-full">
            <CheckCircle2 size={16} /> {dailyTargets.filter((t) => t.is_completed).length}/{dailyTargets.length} Completed
          </div>
        </div>
        <div className="grid gap-4">
          {dailyTargets.map((target, idx) => (
            <motion.div
              key={target.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              onClick={() => !target.is_completed && showToast(`Starting: ${target.title}`)}
              className={`group p-6 rounded-[2rem] border transition-all duration-300 flex items-center gap-6 cursor-pointer ${
                target.is_completed
                  ? 'bg-gray-50 dark:bg-white/5 border-transparent opacity-60'
                  : 'bg-white dark:bg-white/5 border-gray-100 dark:border-white/5 hover:border-[#F59E0B] hover:shadow-xl hover:shadow-[#F59E0B]/5'
              }`}
            >
              <div className={target.is_completed ? 'text-emerald-500' : 'text-gray-200 dark:text-gray-700 group-hover:text-[#F59E0B] transition-colors'}>
                {target.is_completed ? <CheckCircle2 size={32} /> : <Circle size={32} />}
              </div>
              <div className="flex-1">
                <h3 className={`text-lg font-bold ${target.is_completed ? 'text-gray-400 dark:text-gray-600 line-through' : 'text-[#060818] dark:text-white'}`}>
                  {target.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">{target.description}</p>
              </div>
              {!target.is_completed && (
                <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-300 dark:text-gray-600 group-hover:bg-[#F59E0B] group-hover:text-[#060818] transition-all">
                  <ArrowRight size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Promo + Strategy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-[#060818] text-white p-10 rounded-[3rem] relative overflow-hidden group">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F59E0B] text-[10px] font-black uppercase tracking-widest mb-6">
              New Module
            </div>
            <h3 className="text-3xl font-black mb-4 leading-tight">Master Legal<br />Reasoning</h3>
            <p className="text-gray-400 mb-10 max-w-xs font-medium">
              Our latest strategic module on Constitutional Law is now live. Perfect for CLAT 2027 aspirants.
            </p>
            <button
              onClick={() => showToast('Legal Reasoning module loading…')}
              className="bg-[#F59E0B] text-[#060818] px-8 py-4 rounded-2xl font-black hover:bg-amber-400 transition-all shadow-xl shadow-[#F59E0B]/20"
            >
              Start Learning
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F59E0B]/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-[#F59E0B]/20 transition-all duration-700" />
        </section>

        <section className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-[2rem] p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-widest mb-6">
            <Clock size={14} /> Strategy Tip
          </div>
          <blockquote className="text-2xl font-bold text-[#060818] dark:text-white leading-tight italic">
            &ldquo;Don&apos;t read to memorize. Read to understand the logic behind the author&apos;s argument. In CLAT GK, the answer is often hidden in the passage&apos;s structure.&rdquo;
          </blockquote>
          <div className="flex items-center gap-4 pt-6 border-t border-gray-50 dark:border-white/5 mt-6">
            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10" />
            <div>
              <p className="text-sm font-black text-[#060818] dark:text-white uppercase tracking-widest">CLAT Tribe Mentor Desk</p>
              <p className="text-xs text-gray-400 font-bold">Lead Mentor</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

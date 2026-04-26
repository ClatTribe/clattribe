'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2, Circle, Clock, TrendingUp, Zap, ArrowRight,
  Sparkles, Trophy, Medal, Flame, Calendar as CalendarIcon,
} from 'lucide-react';
import { getDailyTargets, GK_LEADERBOARD_DATA } from '@/constants/gk-constants';

const NAVY = '#060818';
const AMBER = '#F59E0B';

export default function GKDashboard() {
  const dailyTargets = getDailyTargets();
  const [toast, setToast] = React.useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const stats = [
    { label: 'Accuracy Rate', value: '84%', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Reading Speed', value: '320 wpm', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: 'Quizzes Taken', value: '42', icon: CheckCircle2, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Current Streak', value: '5 Days', icon: Flame, color: 'text-orange-600', bg: 'bg-orange-50' },
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

      {/* Welcome */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-[#F59E0B] font-black text-xs uppercase tracking-[0.2em] mb-3">
            <Sparkles size={14} /> Student Portal
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-[#060818] dark:text-white">
            Welcome back, Abhinav!
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 font-medium">
            You're on a 5-day streak. Your consistency is your superpower.
          </p>
        </div>
        <div className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 p-2 rounded-2xl border border-gray-100 dark:border-white/5">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-[#060818] bg-gray-200 dark:bg-gray-800" />
            ))}
          </div>
          <span className="text-xs font-bold text-gray-500 dark:text-gray-400 pr-2">12+ friends studying now</span>
        </div>
      </section>

      {/* Stats */}
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
            </div>
            <div className={`p-4 rounded-2xl ${stat.bg} dark:bg-white/10 ${stat.color}`}>
              <stat.icon size={28} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Streak */}
      <section className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-[2rem] p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
          <Flame size={200} />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 bg-orange-500/10 rounded-full flex items-center justify-center border-4 border-orange-500/20 relative">
              <Flame size={48} className="text-orange-500" fill="currentColor" />
              <div className="absolute -top-2 -right-2 bg-[#F59E0B] text-[#060818] text-[10px] font-black px-2 py-1 rounded-full shadow-lg">
                HOT!
              </div>
            </div>
            <div>
              <h4 className="text-3xl font-black text-[#060818] dark:text-white">5 Day Streak</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">Keep it up!</p>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-7 gap-4 w-full">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => {
              const isCompleted = idx < 5;
              const isToday = idx === 4;
              return (
                <div key={day} className="flex flex-col items-center gap-3">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${isToday ? 'text-[#F59E0B]' : 'text-gray-400'}`}>
                    {day}
                  </span>
                  <div className={`w-full aspect-square rounded-2xl flex items-center justify-center transition-all border-2 ${
                    isCompleted
                      ? 'bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/20'
                      : 'bg-gray-50 dark:bg-white/5 border-transparent text-gray-300 dark:text-gray-700'
                  } ${isToday ? 'ring-4 ring-[#F59E0B]/20' : ''}`}>
                    {isCompleted ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="md:w-64 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
              <CalendarIcon size={14} /> Next Milestone: 7 Days
            </div>
            <div className="h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: '71%' }} className="h-full bg-orange-500" />
            </div>
            <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
              Complete your targets tomorrow to unlock the "Consistency King" badge!
            </p>
          </div>
        </div>
      </section>

      {/* Daily Targets + Leaderboard */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black tracking-tight dark:text-white">Daily Targets</h3>
            <div className="flex items-center gap-2 text-sm font-bold text-[#F59E0B] bg-amber-50 dark:bg-[#F59E0B]/10 px-4 py-1.5 rounded-full">
              <CheckCircle2 size={16} /> {dailyTargets.filter(t => t.is_completed).length}/{dailyTargets.length} Completed
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
                  <h4 className={`text-lg font-bold ${target.is_completed ? 'text-gray-400 dark:text-gray-600 line-through' : 'text-[#060818] dark:text-white'}`}>
                    {target.title}
                  </h4>
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
        </div>

        {/* Leaderboard */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black tracking-tight dark:text-white">Leaderboard</h3>
            <Trophy size={20} className="text-[#F59E0B]" />
          </div>
          <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-[2rem] p-6 space-y-4">
            {GK_LEADERBOARD_DATA.map((student, idx) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.05 }}
                className={`flex items-center gap-4 p-3 rounded-2xl transition-all ${
                  student.is_user
                    ? 'bg-[#F59E0B]/10 border border-[#F59E0B]/20'
                    : 'hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs ${
                  student.rank === 1 ? 'bg-amber-400 text-[#060818] shadow-lg shadow-amber-400/20' :
                  student.rank === 2 ? 'bg-gray-300 text-[#060818]' :
                  student.rank === 3 ? 'bg-amber-700 text-white' :
                  'bg-gray-100 dark:bg-white/10 text-gray-500'
                }`}>
                  {student.rank}
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#060818] dark:bg-white/10 flex items-center justify-center text-white dark:text-gray-300 font-bold text-xs">
                  {student.avatar}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-black ${student.is_user ? 'text-[#060818] dark:text-[#F59E0B]' : 'text-[#060818] dark:text-white'}`}>
                    {student.name}
                  </p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{student.score} pts</p>
                </div>
                {student.rank <= 3 && (
                  <Medal size={16} className={
                    student.rank === 1 ? 'text-amber-400' :
                    student.rank === 2 ? 'text-gray-400' :
                    'text-amber-700'
                  } />
                )}
              </motion.div>
            ))}
            <button
              onClick={() => showToast('Full leaderboard coming soon!')}
              className="w-full py-3 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] hover:text-[#F59E0B] transition-colors"
            >
              View Full Rankings
            </button>
          </div>
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
              Our latest strategic module on Constitutional Law is now live. Perfect for CLAT 2025 aspirants.
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
            "Don't read to memorize. Read to understand the logic behind the author's argument. In CLAT GK, the answer is often hidden in the passage's structure."
          </blockquote>
          <div className="flex items-center gap-4 pt-6 border-t border-gray-50 dark:border-white/5 mt-6">
            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10" />
            <div>
              <p className="text-sm font-black text-[#060818] dark:text-white uppercase tracking-widest">IIT-IIM Strategy Desk</p>
              <p className="text-xs text-gray-400 font-bold">Lead Mentor</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

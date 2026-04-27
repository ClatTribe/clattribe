'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, CheckCircle2, Star, ArrowLeft, Lock } from 'lucide-react';
import GKLayout from '@/components/gk/GKLayout';
import { EXAM_TABS, EXAM_INFO, ExamTab } from '@/components/gk/GKFullMockTest';

const EXAM_COLORS: Record<ExamTab, { card: string; badge: string; icon: string }> = {
  CLAT:  { card: 'from-purple-600 to-purple-700', badge: 'bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300', icon: 'bg-purple-600' },
  AILET: { card: 'from-blue-600 to-blue-700',     badge: 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300',       icon: 'bg-blue-600'   },
  MHCET: { card: 'from-emerald-600 to-emerald-700', badge: 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300', icon: 'bg-emerald-600' },
  NLAT:  { card: 'from-amber-500 to-amber-600',   badge: 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300',   icon: 'bg-amber-500'  },
};

export default function ExamsPage() {
  const router = useRouter();
  const [hasMockAccess, setHasMockAccess] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const loggedIn = localStorage.getItem('gk_isLoggedIn') === 'true';
    const mockAccess = localStorage.getItem('gk_hasMockAccess') === 'true';
    setIsLoggedIn(loggedIn);
    setHasMockAccess(mockAccess);
    if (!loggedIn) router.push('/gk');
  }, []);

  if (!mounted) return null;

  return (
    <GKLayout activeTab="testing" setActiveTab={() => router.push('/gk')}>
      <div className="space-y-10">
        {/* Breadcrumb + Header */}
        <div className="space-y-4">
          <button
            onClick={() => router.push('/gk')}
            className="flex items-center gap-2 text-gray-400 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
          >
            <ArrowLeft size={14} /> Testing Engine
          </button>

          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl font-black text-[#060818] dark:text-white tracking-tight">
              Full Mock Tests
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              Choose an exam to see available mocks. Mock #1 of every exam is free.
            </p>
          </div>
        </div>

        {%* Unlock banner */}
        {!hasMockAccess && (
          <div className="bg-purple-600 text-white px-6 py-5 rounded-[2rem] flex flex-col sm:flex-row items-center gap-4 justify-between shadow-xl shadow-purple-600/20">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <Star size={22} className="text-white" fill="currentColor" />
              </div>
              <div>
                <p className="font-black text-base">Mock #1 of every exam is FREE</p>
                <p className="text-purple-200 text-sm font-medium">Unlock all 40 mocks â one-time â¹999, lifetime access.</p>
              </div>
            </div>
            <button className="flex-shrink-0 bg-white text-purple-700 px-7 py-3 rounded-2xl font-black hover:bg-purple-50 transition-all shadow-md text-sm">
              Unlock All â â¹999
            </button>
          </div>
        )}

        {/* Exam Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {EXAM_TABS.map((exam, idx) => {
            const info = EXAM_INFO[exam];
            const colors = EXAM_COLORS[exam];

            return (
              <motion.button
                key={exam}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07 }}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push(`/gk/testing/exams/${exam.toLowerCase()}`)}
                className="group relative text-left bg-white dark:bg-white/5 rounded-[2.5rem] border border-gray-100 dark:border-white/10 overflow-hidden hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40 transition-all duration-300"
              >
                {/* Colored top strip */}
                <div className={`h-2 w-full bg-gradient-to-r ${colors.card}`} />

                <div className="p-7 space-y-5">
                  {/* Exam name + arrow */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5">
                      <h2 className="text-2xl font-black text-[#060818] dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {exam}
                      </h2>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        {exam === 'CLAT' ? 'NLU Consortium' :
                         exam === 'AILET' ? 'National Law University, Delhi' :
                         exam === 'MHCET' ? 'Maharashtra Common Entrance' :
                         'NALSAR University of Law'}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-purple-50 dark:group-hover:bg-purple-500/10 transition-colors flex-shrink-0">
                      <ChevronRight size={20} className="text-gray-300 group-hover:text-purple-500 transition-colors group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${colors.badge}`}>
                      <CheckCircle2 size={10} /> {info.questions} Questions
                    </span>
                    <span className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${colors.badge}`}>
                      <Clock size={10} /> {info.duration} Minutes
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                      <Star size={9} fill="currentColor" /> 1 Free
                    </span>
                  </div>

                  {/* Bottom: mock count */}
                  <div className="pt-4 border-t border-gray-50 dark:border-white/5 flex items-center justify-between">
                    <div className="flex -space-x-1.5">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-5 h-5 rounded-full border-2 border-white dark:border-[#060818] ${
                            i === 0
                              ? 'bg-emerald-500'
                              : hasMockAccess
                              ? `bg-gradient-to-br ${colors.card}`
                              : 'bg-gray-200 dark:bg-white/10'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      10 Mocks
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Info footer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Total Mocks', value: '40', sub: 'across 4 exams' },
            { label: 'Questions Each', value: '40â150', sub: 'exam-pattern accurate' },
            { label: 'Free Mocks', value: '4', sub: 'one per exam' },
          ].map(stat => (
            <div key={stat.label} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-5 text-center">
              <div className="text-2xl font-black text-[#060818] dark:text-white">{stat.value}</div>
              <div className="text-[10px] font-black text-[#F59E0B] uppercase tracking-widest mt-0.5">{stat.label}</div>
              <div className="text-xs text-gray-400 font-medium mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </GKLayout>
  );
}

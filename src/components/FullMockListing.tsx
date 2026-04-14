import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Target, Zap, BookOpen, AlertCircle, ChevronRight } from 'lucide-react';
import { NLATMock } from '../data/nlat/types';

type ExamFilter = 'clat' | 'nlat' | 'ailet' | 'mhcet';

interface FullMockListingProps {
  nlatMocks: NLATMock[];
  onStartNLAT: (mock: NLATMock) => void;
  onBack: () => void;
}

const EXAM_TABS: { id: ExamFilter; label: string; color: string }[] = [
  { id: 'clat', label: 'CLAT', color: '#7c3aed' },
  { id: 'nlat', label: 'NLAT Mocks', color: '#0ea5e9' },
  { id: 'ailet', label: 'AILET', color: '#059669' },
  { id: 'mhcet', label: 'MHCET Law', color: '#f97316' },
];

// Placeholder CLAT mocks metadata (to be wired in when CLAT mocks are ready)
const CLAT_MOCK_META = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `CLAT Mock Test ${String(i + 1).padStart(2, '0')}`,
  questions: 150,
  duration: 120,
  negativeMarking: 0.25,
  available: false,
}));

const AILET_MOCK_META = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `AILET Mock Test ${String(i + 1).padStart(2, '0')}`,
  questions: 150,
  duration: 90,
  negativeMarking: 0,
  available: false,
}));

const MHCET_MOCK_META = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `MHCET Law Mock Test ${String(i + 1).padStart(2, '0')}`,
  questions: 150,
  duration: 90,
  negativeMarking: 0,
  available: false,
}));

function NLATMockCard({ mock, onStart, index }: { mock: NLATMock; onStart: () => void; index: number; }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="group bg-white dark:bg-white/5 rounded-[2rem] border border-gray-100 dark:border-white/10 p-6 hover:shadow-xl hover:shadow-sky-500/10 hover:border-sky-200 dark:hover:border-sky-500/30 transition-all duration-300 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute -right-6 -top-6 w-28 h-28 bg-sky-500 opacity-5 group-hover:opacity-10 rounded-full transition-all duration-500" />
      <div className="flex items-start justify-between gap-4 relative">
        <div className="space-y-3 flex-1 min-w-0">
          {/* Mock number badge */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400">
              Mock {String(mock.id).padStart(2, '0')}
            </span>
          </div>
          <h3 className="text-base font-black text-brand-navy dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-tight">
            {mock.name}
          </h3>
          {/* Specs row */}
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span className="flex items-center gap-1 text-[11px] font-bold text-gray-500">
              <BookOpen size={12} /> {mock.questions.length} Questions
            </span>
            <span className="flex items-center gap-1 text-[11px] font-bold text-gray-500">
              <Clock size={12} /> 120 Minutes
            </span>
            <span className="flex items-center gap-1 text-[11px] font-bold text-green-600 dark:text-green-400">
              <Zap size={12} /> No Negative Marking
            </span>
          </div>
          {/* Section pills */}
          <div className="flex flex-wrap gap-1.5">
            {['Verbal', 'GK & CA', 'Legal', 'Logical', 'Quant'].map(sec => (
              <span key={sec} className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400">
                {sec} · 30
              </span>
            ))}
          </div>
        </div>
        {/* Start button */}
        <div className="flex-shrink-0">
          <button
            onClick={onStart}
            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-5 py-3 rounded-2xl font-black text-sm transition-all hover:shadow-lg hover:shadow-sky-500/30 group-hover:scale-105"
          >
            Start <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ComingSoonCard({ name, index }: { name: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      className="bg-gray-50 dark:bg-white/[0.03] rounded-[2rem] border border-gray-100 dark:border-white/5 p-6 opacity-60"
    >
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h3 className="text-base font-black text-gray-400">{name}</h3>
          <p className="text-xs font-bold text-gray-400 flex items-center gap-1">
            <AlertCircle size={12} /> Coming Soon
          </p>
        </div>
        <div className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-white/5 text-gray-400 text-xs font-bold">
          Locked
        </div>
      </div>
    </motion.div>
  );
}

export default function FullMockListing({ nlatMocks, onStartNLAT, onBack }: FullMockListingProps) {
  const [activeExam, setActiveExam] = React.useState<ExamFilter>('nlat');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-brand-amber transition-colors font-bold uppercase text-[10px] tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Engine
        </button>
        <h2 className="text-2xl font-black text-brand-navy dark:text-white">Full Mock Tests</h2>
      </div>

      {/* Exam filter tabs */}
      <div className="flex gap-2 bg-gray-100 dark:bg-white/5 p-1.5 rounded-2xl w-fit flex-wrap">
        {EXAM_TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveExam(tab.id)}
            className={`px-6 py-2.5 rounded-xl font-black text-sm transition-all ${
              activeExam === tab.id
                ? 'text-white shadow-lg'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
            }`}
            style={activeExam === tab.id ? { backgroundColor: tab.color } : {}}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* NLAT Mocks */}
      {activeExam === 'nlat' && (
        <div className="space-y-6">
          {/* Info banner */}
          <div className="bg-sky-50 dark:bg-sky-500/10 border border-sky-100 dark:border-sky-500/20 rounded-2xl p-5 flex items-start gap-4">
            <Target size={22} className="text-sky-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-black text-sky-700 dark:text-sky-300 text-sm">NLAT — NMIMS Law Aptitude Test</p>
              <p className="text-sky-600/70 dark:text-sky-400/70 text-xs font-medium mt-1 leading-relaxed">
                150 questions · 120 minutes · No negative marking · 5 sections: Verbal, GK & CA, Legal, Logical, Quant (30 each)
              </p>
            </div>
          </div>
          {/* Mock cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {nlatMocks.map((mock, i) => (
              <div key={mock.id}>
                <NLATMockCard mock={mock} index={i} onStart={() => onStartNLAT(mock)} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CLAT Mocks (Coming soon) */}
      {activeExam === 'clat' && (
        <div className="space-y-6">
          <div className="bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 rounded-2xl p-5 flex items-start gap-4">
            <AlertCircle size={22} className="text-purple-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-black text-purple-700 dark:text-purple-300 text-sm">CLAT Full Mocks — Coming Soon</p>
              <p className="text-purple-600/70 dark:text-purple-400/70 text-xs font-medium mt-1">
                We're curating the most exam-aligned CLAT mocks. Check back soon!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CLAT_MOCK_META.map((m, i) => (
              <div key={m.id}><ComingSoonCard name={m.name} index={i} /></div>
            ))}
          </div>
        </div>
      )}

      {/* AILET Mocks (Coming soon) */}
      {activeExam === 'ailet' && (
        <div className="space-y-6">
          <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 rounded-2xl p-5 flex items-start gap-4">
            <AlertCircle size={22} className="text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-black text-emerald-700 dark:text-emerald-300 text-sm">AILET Full Mocks — Coming Soon</p>
              <p className="text-emerald-600/70 dark:text-emerald-400/70 text-xs font-medium mt-1">
                AILET-pattern mocks are being prepared. Stay tuned!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {AILET_MOCK_META.map((m, i) => (
              <div key={m.id}><ComingSoonCard name={m.name} index={i} /></div>
            ))}
          </div>
        </div>
      )}

      {/* MHCET Law Mocks (Coming soon) */}
      {activeExam === 'mhcet' && (
        <div className="space-y-6">
          <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 rounded-2xl p-5 flex items-start gap-4">
            <AlertCircle size={22} className="text-orange-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-black text-orange-700 dark:text-orange-300 text-sm">MHCET Law Full Mocks — Coming Soon</p>
              <p className="text-orange-600/70 dark:text-orange-400/70 text-xs font-medium mt-1">
                MHCET Law-pattern mocks are being prepared. Stay tuned!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MHCET_MOCK_META.map((m, i) => (
              <div key={m.id}><ComingSoonCard name={m.name} index={i} /></div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

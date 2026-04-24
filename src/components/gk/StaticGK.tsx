'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Scale,
  BookOpen,
  Gavel,
  Landmark,
  ChevronDown,
  ChevronUp,
  Search,
  X,
  Tag,
  BookMarked,
} from 'lucide-react';
import { gkSupabase } from '@/lib/gk-supabase';

type Category = 'constitution' | 'maxims' | 'cases' | 'polity';
type Difficulty = 'foundational' | 'moderate' | 'advanced';
type ExamRelevance = 'high' | 'medium' | 'low';

interface StaticGKItem {
  id: string;
  category: Category;
  title: string;
  content: string;
  tags: string[];
  difficulty: Difficulty;
  exam_relevance: ExamRelevance;
}

const TABS: { id: Category; label: string; icon: React.ElementType; desc: string }[] = [
  { id: 'constitution', label: 'Constitutional GK', icon: Landmark, desc: 'Fundamental Rights, DPSPs, Amendments' },
  { id: 'maxims', label: 'Legal Maxims', icon: Scale, desc: 'Latin maxims tested in CLAT & AILET' },
  { id: 'cases', label: 'Landmark Cases', icon: Gavel, desc: 'Key SC judgments every aspirant must know' },
  { id: 'polity', label: 'Polity Quick Ref', icon: BookOpen, desc: 'Institutions, bodies, constitutional provisions' },
];

const DIFFICULTY_CONFIG: Record<Difficulty, { label: string; color: string }> = {
  foundational: {
    label: 'Foundational',
    color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  },
  moderate: {
    label: 'Moderate',
    color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  },
  advanced: {
    label: 'Advanced',
    color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  },
};

const RELEVANCE_CONFIG: Record<ExamRelevance, { label: string; dot: string }> = {
  high: { label: 'High CLAT chance', dot: 'bg-green-500' },
  medium: { label: 'Medium CLAT chance', dot: 'bg-amber-500' },
  low: { label: 'Low CLAT chance', dot: 'bg-gray-400' },
};

export default function StaticGK() {
  const [activeTab, setActiveTab] = React.useState<Category>('constitution');
  const [items, setItems] = React.useState<StaticGKItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [expandedId, setExpandedId] = React.useState<string | null>(null);
  const [difficultyFilter, setDifficultyFilter] = React.useState<Difficulty | 'all'>('all');

  React.useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const { data, error } = await gkSupabase
        .from('static_gk_items')
        .select('*')
        .order('created_at', { ascending: true });
      if (!error && data) {
        setItems(data as StaticGKItem[]);
      }
      setLoading(false);
    };
    fetchItems();
  }, []);

  const tabCounts = React.useMemo(() => {
    const counts: Record<string, number> = {};
    TABS.forEach((t) => {
      counts[t.id] = items.filter((i) => i.category === t.id).length;
    });
    return counts;
  }, [items]);

  const filtered = React.useMemo(() => {
    return items.filter((item) => {
      if (item.category !== activeTab) return false;
      if (difficultyFilter !== 'all' && item.difficulty !== difficultyFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.content.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [items, activeTab, difficultyFilter, searchQuery]);

  const handleTabChange = (tabId: Category) => {
    setActiveTab(tabId);
    setExpandedId(null);
    setDifficultyFilter('all');
    setSearchQuery('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Static GK</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Constitution · Legal Maxims · Landmark Cases · Polity — the pillars CLAT tests every year
        </p>
      </div>
      <div className="flex items-start gap-3 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-xl px-4 py-3">
        <BookMarked size={16} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
          <span className="font-bold">MENTOR TIP</span> — CLAT tests static GK every year via passage-based questions.
          Know your Articles, maxims, and landmark cases cold — these are free marks if you prepare them.
          Aim for all Foundational items first, then Moderate, then Advanced.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button key={tab.id} onClick={() => handleTabChange(tab.id)}
              className={`flex flex-col items-start gap-2 p-3 rounded-xl border text-left transition-all duration-150 ${isActive ? 'bg-amber-50 dark:bg-amber-500/10 border-amber-300 dark:border-amber-500/30' : 'bg-white dark:bg-white/5 border-gray-100 dark:border-white/10 hover:border-amber-200 dark:hover:border-amber-500/20'}`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400' : 'bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400'}`}>
                <Icon size={16} />
              </div>
              <div>
                <p className={`text-xs font-semibold leading-tight ${isActive ? 'text-amber-600 dark:text-amber-400' : 'text-gray-700 dark:text-gray-300'}`}>{tab.label}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{tabCounts[tab.id] ?? 0} items</p>
              </div>
            </button>
          );
        })}
      </div>
      <div className="space-y-2 pb-8">{filtered.map((item, idx) => { const isOpen = expandedId === item.id; const diff = DIFFICULTY_CONFIG[item.difficulty]; const rel = RELEVANCE_CONFIG[item.exam_relevance]; return (<motion.div key={item.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.025, duration: 0.18 }} className={`rounded-xl border transition-all duration-150 overflow-hidden ${isOpen ? 'border-amber-300 dark:border-amber-500/40 bg-amber-50/40 dark:bg-amber-500/5' : 'border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 hover:border-amber-200 dark:hover:border-amber-500/20'}`}><button className="w-full flex items-center gap-3 px-4 py-3.5 text-left" onClick={() => setExpandedId(isOpen ? null : item.id)}><div className="flex-1 min-w-0"><div className="flex items-center gap-2 flex-wrap"><span className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">{item.title}</span><span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${diff.color}`}>{diff.label}</span></div></div>{isOpen ? <ChevronUp size={16} className="text-amber-500 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}</button></motion.div>); })}</div>
    </div>
  );
}

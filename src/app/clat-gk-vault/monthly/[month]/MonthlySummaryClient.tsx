"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Calendar, Newspaper, Loader2, ChevronRight, BookOpen,
  Zap, ArrowLeft, BarChart3
} from 'lucide-react';
import Navbar from '../../../components/navbar';
import NewFooter from '../../../components/newFooter';

type SnippetType = {
  title: string;
  summary: string;
  impact?: 'High' | 'Medium' | 'Low';
  category?: string;
  headline?: string;
};

type MonthlyEntry = {
  date: string;
  source: string;
  snippets: SnippetType[];
  flashcards: { question: string; answer: string; category: string }[];
};

interface MonthlySummaryClientProps {
  month: string; // YYYY-MM format
}

const MonthlySummaryClient: React.FC<MonthlySummaryClientProps> = ({ month }) => {
  const [entries, setEntries] = useState<MonthlyEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSource, setSelectedSource] = useState<'all' | 'The Hindu' | 'Times of India'>('all');
  const [expandedDate, setExpandedDate] = useState<string | null>(null);

  const SUPABASE_URL = 'https://fjswchcothephgtzqbgq.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4';

  const [year, mon] = month.split('-');
  const monthName = new Date(`${year}-${mon}-01T00:00:00`).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });

  useEffect(() => {
    const fetchMonthlyData = async () => {
      setLoading(true);
      try {
        const startDate = `${month}-01`;
        const endMonth = parseInt(mon) === 12 ? `${parseInt(year) + 1}-01` : `${year}-${String(parseInt(mon) + 1).padStart(2, '0')}`;
        const endDate = `${endMonth}-01`;

        const response = await fetch(
          `${SUPABASE_URL}/rest/v1/gk-vault?date=gte.${startDate}&date=lt.${endDate}&select=date,source,snippets,flashcards&order=date.desc`,
          {
            headers: {
              'apikey': SUPABASE_KEY,
              'Authorization': `Bearer ${SUPABASE_KEY}`
            }
          }
        );
        const data = await response.json();

        if (data && Array.isArray(data)) {
          setEntries(data);
        }
      } catch (error) {
        console.error('Error fetching monthly data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMonthlyData();
  }, [month, year, mon]);

  const filteredEntries = selectedSource === 'all'
    ? entries
    : entries.filter(e => e.source === selectedSource);

  // Group entries by date
  const entriesByDate = filteredEntries.reduce((acc, entry) => {
    if (!acc[entry.date]) acc[entry.date] = [];
    acc[entry.date].push(entry);
    return acc;
  }, {} as Record<string, MonthlyEntry[]>);

  const sortedDates = Object.keys(entriesByDate).sort((a, b) => b.localeCompare(a));

  // Stats
  const totalSnippets = filteredEntries.reduce((sum, e) => sum + (e.snippets?.length || 0), 0);
  const totalFlashcards = filteredEntries.reduce((sum, e) => sum + (e.flashcards?.length || 0), 0);
  const totalDays = sortedDates.length;

  // Category breakdown
  const categoryCount: Record<string, number> = {};
  for (const entry of filteredEntries) {
    if (entry.snippets) {
      for (const snippet of entry.snippets) {
        const cat = snippet.category || 'Uncategorized';
        categoryCount[cat] = (categoryCount[cat] || 0) + 1;
      }
    }
  }
  const sortedCategories = Object.entries(categoryCount).sort((a, b) => b[1] - a[1]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {/* Header */}
        <div className="mb-8">
          <Link href="/clat-gk-vault" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#F59E0B] text-sm mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to GK Vault
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] text-xs font-bold uppercase tracking-wider mb-3 ml-4">
            <Calendar className="w-3 h-3" /> Monthly Summary
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            {monthName} <span className="text-[#F59E0B]">Compilation</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">Complete GK coverage for the month at a glance.</p>
        </div>

        {/* Source Filter */}
        <div className="flex bg-slate-900/50 p-1 rounded-xl border border-slate-800 w-fit mb-8">
          {(['all', 'The Hindu', 'Times of India'] as const).map((source) => (
            <button
              key={source}
              onClick={() => setSelectedSource(source)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedSource === source
                  ? 'bg-[#F59E0B] text-slate-950 shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {source === 'all' ? 'Both' : source}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-12 h-12 text-[#F59E0B] animate-spin" />
            <p className="text-slate-400 font-medium">Loading monthly summary...</p>
          </div>
        ) : entries.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/20 rounded-3xl border border-dashed border-slate-800">
            <BookOpen className="w-16 h-16 text-slate-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No data for {monthName}</h3>
            <p className="text-slate-500">Content for this month hasn&apos;t been added yet.</p>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-[#F59E0B]">{totalDays}</p>
                <p className="text-slate-500 text-xs mt-1">Days Covered</p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-emerald-400">{totalSnippets}</p>
                <p className="text-slate-500 text-xs mt-1">News Stories</p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-indigo-400">{totalFlashcards}</p>
                <p className="text-slate-500 text-xs mt-1">Flashcards</p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-purple-400">{sortedCategories.length}</p>
                <p className="text-slate-500 text-xs mt-1">Categories</p>
              </div>
            </div>

            {/* Category Breakdown */}
            {sortedCategories.length > 0 && (
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-[#F59E0B]" />
                  <h3 className="text-white font-bold">Category Breakdown</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sortedCategories.map(([cat, count]) => (
                    <span key={cat} className="px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-sm">
                      <span className="text-white font-semibold">{cat}</span>
                      <span className="text-slate-500 ml-1.5">({count})</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Day-by-Day List */}
            <div className="space-y-4">
              {sortedDates.map((date) => {
                const dayEntries = entriesByDate[date];
                const isExpanded = expandedDate === date;
                const dateObj = new Date(date + 'T00:00:00');
                const formattedDate = dateObj.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
                const allSnippets = dayEntries.flatMap(e => e.snippets || []);
                const allFlashcards = dayEntries.flatMap(e => e.flashcards || []);

                return (
                  <div key={date} className="bg-slate-900/30 border border-slate-800 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setExpandedDate(isExpanded ? null : date)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex flex-col items-center justify-center">
                          <span className="text-[#F59E0B] text-lg font-bold leading-none">{dateObj.getDate()}</span>
                          <span className="text-[#F59E0B] text-[9px] uppercase">{dateObj.toLocaleDateString('en-GB', { month: 'short' })}</span>
                        </div>
                        <div className="text-left">
                          <h3 className="text-white font-semibold text-sm sm:text-base">{formattedDate}</h3>
                          <p className="text-slate-500 text-xs">
                            {allSnippets.length} stories &middot; {allFlashcards.length} flashcards
                            {dayEntries.length > 1 && ` &middot; ${dayEntries.map(e => e.source).join(' + ')}`}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-slate-500 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>

                    {isExpanded && (
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-slate-800/50">
                        <div className="space-y-3 mt-4">
                          {allSnippets.map((snippet, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-[#F59E0B] mt-2 shrink-0"></div>
                              <div>
                                <h4 className="text-white text-sm font-semibold">{snippet.title}</h4>
                                <p className="text-slate-500 text-xs mt-0.5">{snippet.summary}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4">
                          <Link
                            href={`/clat-gk-vault/${date}`}
                            className="inline-flex items-center gap-2 text-[#F59E0B] text-xs font-semibold hover:underline"
                          >
                            View full day details <ChevronRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      <NewFooter />
    </div>
  );
};

export default MonthlySummaryClient;

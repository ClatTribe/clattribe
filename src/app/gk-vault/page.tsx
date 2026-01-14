"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Headphones, 
  Zap, 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  BookOpen, 
  Calendar,
  Newspaper,
  ChevronRight,
  Sparkles,
  History,
  Loader2
} from 'lucide-react';

type SnippetType = {
  id: string;
  title: string;
  summary: string;
  impact: string;
};

type NewspaperData = {
  audioDuration: string;
  snippets: SnippetType[];
};

type DailyDataTemplates = {
  'The Hindu': NewspaperData;
  'Times of India': NewspaperData;
};

const DAILY_DATA_TEMPLATES: DailyDataTemplates = {
  'The Hindu': {
    audioDuration: '08:42',
    snippets: [
      { id: '1', title: 'SC issues guidelines on preventive detention', summary: 'The Supreme Court emphasized that detention orders must be passed only when necessary for public order.', impact: 'High' },
      { id: '2', title: 'India-France defense deal updates', summary: 'Negotiations for 26 Rafale Marine jets enter the final commercial phase.', impact: 'Medium' },
      { id: '3', title: 'New environmental norms for Himalayas', summary: 'Ministry of Environment proposes stricter construction limits in ecologically sensitive zones.', impact: 'High' }
    ]
  },
  'Times of India': {
    audioDuration: '06:15',
    snippets: [
      { id: '4', title: 'Sensex hits all-time high amid global rally', summary: 'Indian markets outperformed peers as foreign institutional investors turned net buyers.', impact: 'Low' },
      { id: '5', title: 'Digital India Act: Draft finalized', summary: 'The government plans to replace the IT Act, 2000 with a comprehensive Digital India Act.', impact: 'High' },
      { id: '6', title: 'Global South Summit concludes in New Delhi', summary: 'Over 100 countries discussed energy security and debt restructuring.', impact: 'Medium' }
    ]
  }
};

const generateHistory = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 100; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    dates.push(d);
  }
  return dates;
};

const DailyCurrentAffairsPage: React.FC = () => {
  const [activeNewspaper, setActiveNewspaper] = useState<'The Hindu' | 'Times of India'>('The Hindu');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const historyDates = generateHistory();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(p => (p < 100 ? p + 0.1 : 0));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const content = DAILY_DATA_TEMPLATES[activeNewspaper];
  const formattedSelectedDate = selectedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 sm:mb-12">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" /> {formattedSelectedDate}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
              Daily <span className="text-[#F59E0B]">GK Vault</span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg">Stop reading. Start listening. Master GK in 10 minutes.</p>
          </div>

          <div className="flex bg-slate-900/50 p-1 rounded-xl border border-slate-800 w-full md:w-auto">
            {(['The Hindu', 'Times of India'] as const).map((paper) => (
              <button
                key={paper}
                onClick={() => { setActiveNewspaper(paper); setProgress(0); setIsPlaying(false); }}
                className={`flex-1 md:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeNewspaper === paper 
                  ? 'bg-[#F59E0B] text-slate-950 shadow-lg' 
                  : 'text-slate-400 hover:text-white'
                }`}
              >
                <Newspaper className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">{paper}</span>
                <span className="sm:hidden">{paper === 'The Hindu' ? 'Hindu' : 'TOI'}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 100-Day History Ribbon */}
        <div className="mb-8 sm:mb-12 relative">
          <div className="flex items-center gap-2 mb-3 sm:mb-4 text-slate-500 font-bold text-[10px] uppercase tracking-wider">
            <History className="w-3 h-3" /> Past 100 Days Archive
          </div>
          <div 
            ref={scrollRef}
            className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 sm:pb-6 snap-x cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {historyDates.map((date, idx) => {
              const isSelected = date.toDateString() === selectedDate.toDateString();
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedDate(date);
                    setProgress(0);
                    setIsPlaying(false);
                  }}
                  className={`flex-shrink-0 w-20 sm:w-24 p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 snap-start flex flex-col items-center gap-1 ${
                    isSelected 
                    ? 'bg-[#F59E0B] border-[#F59E0B] text-slate-950 shadow-lg scale-105' 
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider opacity-60">
                    {date.toLocaleDateString('en-GB', { month: 'short' })}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold">{date.getDate()}</span>
                  <span className="text-[9px] sm:text-[10px] font-semibold opacity-60">
                    {date.toLocaleDateString('en-GB', { weekday: 'short' })}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="absolute right-0 top-8 bottom-4 w-16 sm:w-24 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
        </div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Audio Player Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-800/80 to-slate-900/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-700/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Headphones className="w-24 h-24 sm:w-32 sm:h-32 text-white" />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between min-h-[400px] sm:min-h-[500px]">
              <div>
                <span className="text-[#F59E0B] font-bold uppercase tracking-wider text-[10px] block mb-3 sm:mb-4">Tribe Audiobook</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Today's Briefing</h3>
                <p className="text-slate-400 text-xs sm:text-sm italic">Curated by Poorva Didi & Team.</p>
              </div>

              <div className="my-8 sm:my-12">
                <div className="flex items-center justify-center gap-6 sm:gap-8 mb-6 sm:mb-8">
                  <button className="text-slate-500 hover:text-white transition-colors">
                    <SkipBack className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-[#F59E0B] text-slate-950 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-xl"
                  >
                    {isPlaying ? <Pause className="w-8 h-8 sm:w-10 sm:h-10" /> : <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1" />}
                  </button>
                  <button className="text-slate-500 hover:text-white transition-colors">
                    <SkipForward className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <span>{isPlaying ? 'Playing' : 'Paused'}</span>
                    <span className="text-[#F59E0B]">{content.audioDuration}</span>
                  </div>
                  <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#F59E0B] transition-all duration-100" 
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 sm:p-4 bg-slate-950/50 rounded-xl sm:rounded-2xl border border-slate-800">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F59E0B] flex items-center justify-center font-bold text-slate-950 text-xs sm:text-sm flex-shrink-0">P</div>
                <div className="min-w-0">
                  <p className="text-white text-xs sm:text-sm font-bold truncate">Narration by Poorva Didi</p>
                  <p className="text-slate-500 text-[9px] sm:text-[10px] uppercase font-bold tracking-wider truncate">NLU Success Specialist</p>
                </div>
              </div>
            </div>
          </div>

          {/* Snippets & Flashcards */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
            
            {/* Snippets List */}
            <div className="bg-slate-900/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-800">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#F59E0B]" />
                  Key Highlights
                </h3>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">{content.snippets.length} Points</span>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {content.snippets.map((snippet: SnippetType, i: number) => (
                  <div 
                    key={snippet.id}
                    className="group cursor-pointer p-3 sm:p-4 hover:bg-white/5 rounded-xl sm:rounded-2xl transition-all"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${
                        snippet.impact === 'High' ? 'bg-red-500' : snippet.impact === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-bold mb-1 group-hover:text-[#F59E0B] transition-colors text-sm sm:text-base">{snippet.title}</h4>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{snippet.summary}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-[#F59E0B] group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Practice Flashcards */}
            <div className="bg-[#F59E0B] text-slate-950 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 opacity-10">
                <Sparkles className="w-32 h-32 sm:w-40 sm:h-40" />
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 relative z-10">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">Practice This Day's Facts</h3>
                  <p className="font-semibold text-slate-950/60 uppercase text-[10px] tracking-wider">Instant Flashcards for {formattedSelectedDate}</p>
                </div>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-slate-950 text-white font-bold rounded-xl hover:bg-slate-900 transition-colors shadow-xl flex items-center justify-center gap-2 text-sm whitespace-nowrap">
                  <BookOpen className="w-4 h-4" /> Start Practicing
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 sm:mt-24 text-center">
          <div className="max-w-3xl mx-auto p-8 sm:p-12 bg-slate-900/30 rounded-2xl sm:rounded-3xl border border-dashed border-slate-800">
            <p className="text-slate-400 text-lg sm:text-xl md:text-2xl italic leading-relaxed">
              "Reading the newspaper takes 2 hours. Mastering the news takes 10 minutes. <br className="hidden sm:block" />
              <span className="text-white font-bold">The Tribe process makes the difference."</span>
            </p>
          </div>
        </div>

        {/* Subscription CTA */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <div className="flex flex-col md:flex-row items-center gap-4 px-6 py-4 rounded-xl shadow-lg border w-full max-w-2xl bg-slate-900/50 border-slate-800">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-white">
                Subscribe to daily GK Vault
              </h3>
              <div className="flex items-center justify-center md:justify-start gap-3 mt-2">
                <span className="text-2xl font-bold line-through opacity-50 text-slate-400">
                  ₹999
                </span>
                <span className="text-3xl font-bold text-[#F59E0B]">
                  ₹0
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-400">
                  LIMITED TIME
                </span>
              </div>
            </div>
            <button
              onClick={() => window.open('https://chat.whatsapp.com/EIMkBl02bhr8lC36jvVCiv', '_blank')}
              className="w-full md:w-auto px-6 py-3 text-sm font-bold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap bg-[#F59E0B] text-slate-950"
            >
              Join the tribe
            </button>
          </div>
        </div>

      </div>
      
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
        div {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default DailyCurrentAffairsPage;
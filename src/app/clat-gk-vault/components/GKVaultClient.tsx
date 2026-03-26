"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Headphones, Zap, Play, Pause, SkipForward, SkipBack,
  BookOpen, Calendar, Newspaper, ChevronRight, Sparkles,
  History, Loader2, AlertCircle, Lock, RefreshCw, CheckCircle, XCircle, PartyPopper,
  Share2, Link2, MessageCircle, Search, X
} from 'lucide-react';
import Navbar from '../../components/navbar';
import NewFooter from '../../components/newFooter';

// Types updated to match Database Schema
type SnippetType = {
  title: string;
  summary: string;
  impact: 'High' | 'Medium' | 'Low';
};

type FlashcardType = {
  question: string;
  answer: string;
  category: string;
};

type GKEntry = {
  audio_duration: string;
  audio_url_hindi: string;
  audio_url_english: string;
  snippets: SnippetType[];
  flashcards: FlashcardType[];
  date: string;
  holiday: boolean;
  message: string | null;
};

type PaymentPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PaymentPopup: React.FC<PaymentPopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handlePayNow = () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    localStorage.setItem('gkVaultUserEmail', email);
    window.location.href = 'https://rzp.io/rzp/clatgkvault';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-8 max-w-md w-full border border-slate-700 shadow-2xl animate-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
        >
          <span className="sr-only">Close</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center">
            <Lock className="w-8 h-8 text-[#F59E0B]" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white text-center mb-2">
          Unlock Full Archive
        </h2>
        <p className="text-slate-400 text-center text-sm mb-6">
          Access all past editions and never miss a day
        </p>

        <div className="bg-slate-950/50 rounded-2xl p-4 mb-6 space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-[#F59E0B]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Sparkles className="w-3 h-3 text-[#F59E0B]" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Unlimited Access</p>
              <p className="text-slate-500 text-xs">Read & listen to all past editions</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-[#F59E0B]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Sparkles className="w-3 h-3 text-[#F59E0B]" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Both Newspapers</p>
              <p className="text-slate-500 text-xs">The Hindu & Times of India archives</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-[#F59E0B]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Sparkles className="w-3 h-3 text-[#F59E0B]" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">One-Time Payment</p>
              <p className="text-slate-500 text-xs">Pay once, access forever</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-slate-300 text-sm font-semibold mb-2">
              Your Email Address
            </label>
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@example.com"
                className="w-full pl-12 pr-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#F59E0B] transition-colors"
              />
            </div>
            <p className="text-slate-500 text-xs mt-2">
              We&apos;ll use this to verify your access after payment
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#F59E0B]/10 to-amber-600/10 border border-[#F59E0B]/30 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">One-Time Payment</p>
                <p className="text-white text-3xl font-bold mt-1">&#8377;99</p>
              </div>
              <svg className="w-10 h-10 text-[#F59E0B]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
          </div>

          <button
            onClick={handlePayNow}
            disabled={!email}
            className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            Pay Now &#8377;99
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        <p className="text-center text-slate-500 text-xs mt-4">
          After payment, return here and enter the same email to access all content
        </p>
      </div>
    </div>
  );
};

interface GKVaultClientProps {
  initialDate?: string; // YYYY-MM-DD format
}
const toDateStr = (d: Date): string =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    
const GKVaultClient: React.FC<GKVaultClientProps> = ({ initialDate }) => {
  const router = useRouter();

  const [activeNewspaper, setActiveNewspaper] = useState<'The Hindu' | 'Times of India'>('The Hindu');
  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    if (initialDate) {
      const parsed = new Date(initialDate + 'T00:00:00');
      if (!isNaN(parsed.getTime())) return parsed;
    }
    return new Date();
  });
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [audioLanguage, setAudioLanguage] = useState<'hindi' | 'english'>('english');

  const [entry, setEntry] = useState<GKEntry | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [availableDates, setAvailableDates] = useState<{date: string, newspaper: 'The Hindu' | 'Times of India'}[]>([]);
  const [datesLoading, setDatesLoading] = useState<boolean>(true);

  const [isPaidUser, setIsPaidUser] = useState<boolean>(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState<boolean>(false);
  const [checkingAccess, setCheckingAccess] = useState<boolean>(true);

  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);
  const [knewCount, setKnewCount] = useState<number>(0);
  const [forgotCount, setForgotCount] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [linkCopied, setLinkCopied] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<{date: string; source: string; title: string; summary: string}[]>([]);
  const [searching, setSearching] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);

  const SUPABASE_URL = 'https://fjswchcothephgtzqbgq.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4';

  // Update URL when date changes (without full page navigation)
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    const formatted = toDateStr(date);
    window.history.replaceState(null, '', `/clat-gk-vault/${formatted}`);
  };

  useEffect(() => {
    const checkUserAccess = async () => {
      const savedEmail = typeof window !== 'undefined' ? localStorage.getItem('gkVaultUserEmail')?.trim() : null;

      if (savedEmail) {
        try {
          const response = await fetch(
            `${SUPABASE_URL}/rest/v1/gk-vault-access?email=eq.${savedEmail}`,
            {
              headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`
              }
            }
          );
          const data = await response.json();

          if (data && data.length > 0) {
            setIsPaidUser(true);
          }
        } catch (error) {
          console.error("Error checking access:", error);
        }
      }

      setCheckingAccess(false);
    };

    checkUserAccess();

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        checkUserAccess();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const fetchAvailableDates = async () => {
      try {
        const response = await fetch(
          `${SUPABASE_URL}/rest/v1/gk-vault?select=date,source&source=eq.${activeNewspaper}&order=date.desc`,
          {
            headers: {
              'apikey': SUPABASE_KEY,
              'Authorization': `Bearer ${SUPABASE_KEY}`
            }
          }
        );
        const data = await response.json();

        if (data && Array.isArray(data) && data.length > 0) {
          const dates = data.map((item: { date: string, source: string }) => ({
            date: item.date,
            newspaper: item.source as 'The Hindu' | 'Times of India'
          }));
          setAvailableDates(dates);

          const currentDateExists = dates.some((d: {date: string}) => d.date === toDateStr(selectedDate));
          if (!currentDateExists && dates.length > 0) {
            const latestDate = new Date(dates[0].date + 'T00:00:00');
            setSelectedDate(latestDate);
            window.history.replaceState(null, '', `/clat-gk-vault/${dates[0].date}`);
          }
        }
      } catch (error) {
        console.error("Error fetching available dates:", error);
      } finally {
        setDatesLoading(false);
      }
    };

    fetchAvailableDates();
  }, [activeNewspaper]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
      setDuration(0);
      setCurrentCardIndex(0);
      setIsCardFlipped(false);
      setKnewCount(0);
      setForgotCount(0);
      setSelectedCategory('All');

      const formattedDate = toDateStr(selectedDate);

      try {
        const response = await fetch(
          `${SUPABASE_URL}/rest/v1/gk-vault?date=eq.${formattedDate}&source=eq.${activeNewspaper}&select=*`,
          {
            headers: {
              'apikey': SUPABASE_KEY,
              'Authorization': `Bearer ${SUPABASE_KEY}`
            }
          }
        );
        const data = await response.json();

        if (data && data.length > 0) {
          setEntry(data[0]);
        } else {
          setEntry(null);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedDate, activeNewspaper]);

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setShowSearch(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Inject JSON-LD structured data when entry loads
  useEffect(() => {
    // Remove any previous JSON-LD
    const existingScript = document.getElementById('gk-vault-jsonld');
    if (existingScript) existingScript.remove();

    if (!entry || entry.holiday) return;

    const dateStr = toDateStr(selectedDate);
    const formatted = selectedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `CLAT GK Current Affairs - ${formatted} (${activeNewspaper})`,
      description: `Daily current affairs for CLAT preparation from ${activeNewspaper} - ${formatted}. Covers ${entry.snippets.length} key topics with audio briefings and flashcards.`,
      datePublished: dateStr,
      dateModified: dateStr,
      author: { '@type': 'Organization', name: 'CLAT Tribe', url: 'https://clattribe.com' },
      publisher: { '@type': 'Organization', name: 'CLAT Tribe', url: 'https://clattribe.com' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://clattribe.com/clat-gk-vault/${dateStr}` },
      about: entry.snippets.slice(0, 6).map(s => ({ '@type': 'Thing', name: s.title, description: s.summary })),
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: entry.flashcards.slice(0, 10).map(fc => ({
        '@type': 'Question',
        name: fc.question,
        acceptedAnswer: { '@type': 'Answer', text: fc.answer },
      })),
    };

    const script = document.createElement('script');
    script.id = 'gk-vault-jsonld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify([articleSchema, faqSchema]);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('gk-vault-jsonld');
      if (el) el.remove();
    };
  }, [entry, selectedDate, activeNewspaper]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      setIsPlaying(false);
      setCurrentTime(0);
      setProgress(0);
    }
  }, [audioLanguage]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.play().catch(() => setIsPlaying(false));
      else audioRef.current.pause();
    }
  }, [isPlaying]);

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const audio = e.currentTarget;
    setCurrentTime(audio.currentTime);
    setDuration(audio.duration);
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !audioRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;
    audioRef.current.currentTime = newTime;
  };

  const skipTime = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + seconds));
    }
  };

  const handleCardNext = (knew: boolean) => {
    if (knew) setKnewCount(prev => prev + 1);
    else setForgotCount(prev => prev + 1);

    setIsCardFlipped(false);
    setTimeout(() => {
      // Use filteredFlashcards length for navigation
      const totalCards = selectedCategory === 'All'
        ? (entry?.flashcards?.length ?? 0)
        : (entry?.flashcards?.filter(fc => fc.category === selectedCategory).length ?? 0);
      if (currentCardIndex < totalCards - 1) {
        setCurrentCardIndex(prev => prev + 1);
      } else {
        setCurrentCardIndex(totalCards);
      }
    }, 200);
  };

  const handleCardReset = () => {
    setCurrentCardIndex(0);
    setIsCardFlipped(false);
    setKnewCount(0);
    setForgotCount(0);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentCardIndex(0);
    setIsCardFlipped(false);
    setKnewCount(0);
    setForgotCount(0);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

    if (query.trim().length < 2) {
      setSearchResults([]);
      setSearching(false);
      return;
    }

    setSearching(true);
    searchTimeoutRef.current = setTimeout(async () => {
      try {
        // Fetch all entries and search client-side (Supabase REST doesn't support JSONB text search directly)
        const response = await fetch(
          `${SUPABASE_URL}/rest/v1/gk-vault?select=date,source,snippets&order=date.desc`,
          {
            headers: {
              'apikey': SUPABASE_KEY,
              'Authorization': `Bearer ${SUPABASE_KEY}`
            }
          }
        );
        const data = await response.json();

        if (data && Array.isArray(data)) {
          const q = query.toLowerCase();
          const results: {date: string; source: string; title: string; summary: string}[] = [];

          for (const row of data) {
            if (row.snippets && Array.isArray(row.snippets)) {
              for (const snippet of row.snippets) {
                if (
                  (snippet.title && snippet.title.toLowerCase().includes(q)) ||
                  (snippet.summary && snippet.summary.toLowerCase().includes(q))
                ) {
                  results.push({
                    date: row.date,
                    source: row.source,
                    title: snippet.title || 'Untitled',
                    summary: snippet.summary || '',
                  });
                }
              }
            }
            if (results.length >= 20) break;
          }

          setSearchResults(results.slice(0, 20));
        }
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setSearching(false);
      }
    }, 400);
  };

  const formattedSelectedDate = selectedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const historyDates = availableDates.map(item => new Date(item.date + 'T00:00:00')).sort((a, b) => b.getTime() - a.getTime());

  // Filtered flashcards based on category
  const filteredFlashcards = entry?.flashcards
    ? selectedCategory === 'All'
      ? entry.flashcards
      : entry.flashcards.filter(fc => fc.category === selectedCategory)
    : [];
  const flashcardCategories = entry?.flashcards
    ? ['All', ...Array.from(new Set(entry.flashcards.map(fc => fc.category)))]
    : ['All'];

  const currentCard = filteredFlashcards[currentCardIndex];
  const isFlashcardsCompleted = filteredFlashcards.length > 0 && currentCardIndex >= filteredFlashcards.length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar/>
      <PaymentPopup isOpen={showPaymentPopup} onClose={() => setShowPaymentPopup(false)} />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 sm:mb-12">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" /> {formattedSelectedDate}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
              CLAT <span className="text-[#F59E0B]">GK Vault</span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg">Stop reading. Start listening. Master GK in 10 minutes.</p>
            {/* Share Buttons */}
            <div className="flex items-center gap-2 mt-3">
              <button
                onClick={() => {
                  const dateStr = toDateStr(selectedDate);
                  const formatted = selectedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
                  const text = `Check out CLAT GK Vault for ${formatted} - Daily current affairs with audio & flashcards for CLAT prep!\nhttps://clattribe.com/clat-gk-vault/${dateStr}`;
                  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-600/10 border border-green-600/30 text-green-400 text-xs font-semibold hover:bg-green-600/20 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </button>
              <button
                onClick={() => {
                  const dateStr = toDateStr(selectedDate);
                  navigator.clipboard.writeText(`https://clattribe.com/clat-gk-vault/${dateStr}`);
                  setLinkCopied(true);
                  setTimeout(() => setLinkCopied(false), 2000);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-400 text-xs font-semibold hover:text-white hover:border-slate-600 transition-all"
              >
                <Link2 className="w-3.5 h-3.5" /> {linkCopied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>

          <div className="flex bg-slate-900/50 p-1 rounded-xl border border-slate-800 w-full md:w-auto">
            {(['The Hindu', 'Times of India'] as const).map((paper) => (
              <button
                key={paper}
                onClick={() => setActiveNewspaper(paper)}
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

        {/* Search Bar */}
        <div className="mb-6 relative" ref={searchContainerRef}>
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => setShowSearch(true)}
                placeholder="Search across all dates (e.g., FCRA, RBI, Bihar...)"
                className="w-full pl-11 pr-10 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#F59E0B]/50 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => { setSearchQuery(''); setSearchResults([]); setShowSearch(false); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Search Results Dropdown */}
          {showSearch && searchQuery.trim().length >= 2 && (
            <div className="absolute z-30 top-full mt-2 w-full bg-slate-900 border border-slate-800 rounded-xl shadow-2xl max-h-80 overflow-y-auto">
              {searching ? (
                <div className="flex items-center justify-center py-6">
                  <Loader2 className="w-5 h-5 text-[#F59E0B] animate-spin" />
                  <span className="ml-2 text-slate-400 text-sm">Searching...</span>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="py-6 text-center text-slate-500 text-sm">No results found for &quot;{searchQuery}&quot;</div>
              ) : (
                <>
                  <div className="px-4 py-2 text-[10px] text-slate-500 uppercase font-bold tracking-wider border-b border-slate-800">
                    {searchResults.length} results found
                  </div>
                  {searchResults.map((result, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        const d = new Date(result.date + 'T00:00:00');
                        handleDateSelect(d);
                        setActiveNewspaper(result.source as 'The Hindu' | 'Times of India');
                        setSearchQuery('');
                        setSearchResults([]);
                        setShowSearch(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-slate-800/50 transition-colors border-b border-slate-800/50 last:border-b-0"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[#F59E0B]"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white text-sm font-semibold truncate">{result.title}</h4>
                          <p className="text-slate-500 text-xs truncate mt-0.5">{result.summary}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] text-[#F59E0B] font-semibold">
                              {new Date(result.date + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </span>
                            <span className="text-[10px] text-slate-600">{result.source}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </>
              )}
            </div>
          )}
        </div>

        <div className="mb-8 sm:mb-12 relative">
          <div className="flex items-center gap-2 mb-3 sm:mb-4 text-slate-500 font-bold text-[10px] uppercase tracking-wider">
            <History className="w-3 h-3" /> Daily Archives
            {!isPaidUser && <span className="text-[#F59E0B] ml-2">(First 2 days free)</span>}
          </div>

          {datesLoading || checkingAccess ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 text-[#F59E0B] animate-spin" />
            </div>
          ) : (
            <div className="relative">
              <div
                className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 sm:pb-6 snap-x scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900/50 hover:scrollbar-thumb-[#F59E0B]"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#475569 transparent'
                }}
              >
                {historyDates.map((date, idx) => {
                  const isSelected = date.toDateString() === selectedDate.toDateString();
                  const isLocked = !isPaidUser && idx >= 2;
                  return (
                    <button
                      key={idx}
                      onClick={() => isLocked ? setShowPaymentPopup(true) : handleDateSelect(date)}
                      className={`relative flex-shrink-0 w-20 sm:w-24 p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 snap-start flex flex-col items-center gap-1 ${
                        isSelected
                        ? 'bg-[#F59E0B] border-[#F59E0B] text-slate-950 shadow-lg scale-105'
                        : isLocked
                        ? 'bg-slate-900/30 border-slate-800/50 text-slate-600 cursor-pointer hover:border-[#F59E0B]/50'
                        : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      {isLocked && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/70 rounded-xl sm:rounded-2xl backdrop-blur-sm group/lock">
                          <Lock className="w-4 h-4 text-[#F59E0B] group-hover/lock:hidden" />
                          <span className="hidden group-hover/lock:block text-[#F59E0B] text-[10px] font-bold">Unlock</span>
                          <span className="absolute top-1 right-1 px-1.5 py-0.5 bg-[#F59E0B]/20 text-[#F59E0B] text-[7px] font-bold rounded-md uppercase">Pro</span>
                        </div>
                      )}
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
            </div>
          )}

          {/* Monthly Summary & Quiz Links */}
          <div className="mt-3 flex flex-wrap justify-end gap-4">
            <Link
              href={`/clat-gk-vault/monthly/${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}`}
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#F59E0B] font-semibold transition-colors"
            >
              <BookOpen className="w-3 h-3" /> {selectedDate.toLocaleDateString('en-GB', { month: 'long' })} Summary <ChevronRight className="w-3 h-3" />
            </Link>
            <Link
              href="/clat-gk-vault/quiz"
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-400 font-semibold transition-colors"
            >
              <Zap className="w-3 h-3" /> Weekly Quiz <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-12 h-12 text-[#F59E0B] animate-spin" />
            <p className="text-slate-400 font-medium">Fetching today&apos;s highlights...</p>
          </div>
        ) : entry ? (
          entry.holiday ? (
            <div className="text-center py-20 bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-3xl border border-amber-500/30">
              <PartyPopper className="w-20 h-20 text-amber-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Holiday</h3>
              <p className="text-amber-200 text-lg max-w-md mx-auto leading-relaxed">
                {entry.message || 'No content available today due to a holiday.'}
              </p>
            </div>
          ) : (
            <>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-800/50 mb-8 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center">
                      <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B]" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-white">Audio Briefing</h2>
                      <p className="text-slate-400 text-xs sm:text-sm">Listen to today&apos;s key highlights</p>
                    </div>
                  </div>
                  <div className="flex bg-slate-900/50 p-1 rounded-lg border border-slate-800">
                    <button onClick={() => setAudioLanguage('english')} className={`px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-bold transition-all ${audioLanguage === 'english' ? 'bg-[#F59E0B] text-slate-950' : 'text-slate-400'}`}>English</button>
                    <button onClick={() => setAudioLanguage('hindi')} className={`px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-bold transition-all ${audioLanguage === 'hindi' ? 'bg-[#F59E0B] text-slate-950' : 'text-slate-400'}`}>Hindi</button>
                  </div>
                </div>

                <audio
                  ref={audioRef}
                  src={audioLanguage === 'english' ? entry.audio_url_english : entry.audio_url_hindi}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                  onEnded={() => setIsPlaying(false)}
                />

                <div className="bg-slate-950/50 rounded-xl p-4">
                  <div ref={progressBarRef} onClick={handleProgressBarClick} className="w-full h-2 bg-slate-800 rounded-full cursor-pointer mb-3 overflow-hidden group">
                    <div className="h-full bg-[#F59E0B] rounded-full transition-all duration-150 group-hover:bg-amber-400" style={{ width: `${progress}%` }} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs font-mono w-12">{formatTime(currentTime)}</span>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <button onClick={() => skipTime(-10)} className="p-2 text-slate-400 hover:text-white transition-colors"><SkipBack className="w-4 h-4 sm:w-5 sm:h-5" /></button>
                      <button onClick={() => setIsPlaying(!isPlaying)} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F59E0B] flex items-center justify-center text-slate-950 hover:scale-105 hover:bg-amber-400 transition-all shadow-lg">
                        {isPlaying ? <Pause className="w-5 h-5 sm:w-6 sm:h-6" /> : <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-1" />}
                      </button>
                      <button onClick={() => skipTime(10)} className="p-2 text-slate-400 hover:text-white transition-colors"><SkipForward className="w-4 h-4 sm:w-5 sm:h-5" /></button>
                    </div>
                    <span className="text-slate-500 text-xs font-mono w-12 text-right">{formatTime(duration)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-800/50 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-white">Key Highlights</h2>
                    <p className="text-slate-400 text-xs sm:text-sm">{entry.snippets.length} stories covered</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {entry.snippets.map((snippet, i) => (
                    <div key={i} className="group p-4 hover:bg-white/5 rounded-2xl transition-all border border-transparent hover:border-slate-800">
                      <div className="flex items-start gap-4">
                        <div className={`mt-1.5 w-2.5 h-2.5 rounded-full shrink-0 ${snippet.impact === 'High' ? 'bg-red-500' : snippet.impact === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'}`} />
                        <div className="flex-1">
                          <h4 className="text-white font-bold mb-1 group-hover:text-[#F59E0B]">{snippet.title}</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">{snippet.summary}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {entry.flashcards && entry.flashcards.length > 0 && (
                <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-indigo-500/30 mb-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4">
                      <Sparkles className="w-4 h-4" /> Interactive Learning
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Master Today&apos;s <span className="text-indigo-400">Key Facts</span></h2>
                  </div>

                  {/* Category Filter Chips */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {flashcardCategories.map((cat) => {
                      const count = cat === 'All' ? entry.flashcards.length : entry.flashcards.filter(fc => fc.category === cat).length;
                      return (
                        <button
                          key={cat}
                          onClick={() => handleCategoryChange(cat)}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                            selectedCategory === cat
                              ? 'bg-indigo-500 text-white shadow-lg'
                              : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-indigo-500/50 hover:text-white'
                          }`}
                        >
                          {cat} <span className="opacity-60">({count})</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap justify-center gap-3 mb-6">
                    <div className="px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-800">
                      <span className="text-slate-400 text-xs">Progress: </span>
                      <span className="text-white font-semibold text-sm">
                        {Math.min(currentCardIndex + 1, filteredFlashcards.length)} / {filteredFlashcards.length}
                      </span>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 font-semibold text-sm">
                      <CheckCircle className="w-4 h-4 inline mr-1" /> {knewCount}
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 font-semibold text-sm">
                      <XCircle className="w-4 h-4 inline mr-1" /> {forgotCount}
                    </div>
                    <button onClick={handleCardReset} className="px-4 py-2 rounded-lg bg-[#F59E0B] text-slate-950 font-semibold text-sm flex items-center gap-2"><RefreshCw className="w-4 h-4" /> Reset</button>
                  </div>

                  <div className="flex justify-center">
                    <div className="relative w-full max-w-2xl h-[350px] sm:h-[400px] cursor-pointer" onClick={() => !isFlashcardsCompleted && setIsCardFlipped(!isCardFlipped)} style={{ perspective: '1000px' }}>
                      <div className="w-full h-full relative transition-transform duration-500" style={{ transformStyle: 'preserve-3d', transform: isCardFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                        <div className="absolute inset-0 flex flex-col justify-between shadow-2xl rounded-2xl p-6 sm:p-8 border-2 bg-white text-slate-900 border-indigo-500" style={{ backfaceVisibility: 'hidden' }}>
                          {isFlashcardsCompleted ? (
                            <div className="flex-1 flex flex-col items-center justify-center gap-4">
                              <h3 className="text-3xl font-bold text-indigo-600">Great Work!</h3>
                              <p className="text-slate-600 text-center">
                                You&apos;ve completed all {selectedCategory === 'All' ? '' : selectedCategory + ' '}cards for today.
                              </p>
                            </div>
                          ) : (
                            <>
                              <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-600 uppercase w-fit">{currentCard?.category}</span>
                              <h3 className="text-xl sm:text-2xl font-bold text-center flex-1 flex items-center justify-center">{currentCard?.question}</h3>
                              <div className="flex items-center justify-center gap-2 text-slate-400 text-sm"><RefreshCw className="w-4 h-4" /> Tap to reveal answer</div>
                            </>
                          )}
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-between shadow-2xl rounded-2xl p-6 sm:p-8 border-2 bg-slate-800 text-white border-indigo-500" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 uppercase w-fit">{currentCard?.category}</span>
                          <h3 className="text-lg sm:text-xl font-bold text-center flex-1 flex items-center justify-center">{currentCard?.answer}</h3>
                          <div className="flex gap-4">
                            <button onClick={(e) => { e.stopPropagation(); handleCardNext(true); }} className="flex-1 py-3 rounded-xl bg-green-500/20 text-green-400 border border-green-500/30 font-bold">Knew it</button>
                            <button onClick={(e) => { e.stopPropagation(); handleCardNext(false); }} className="flex-1 py-3 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 font-bold">Review Later</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )
        ) : (
          <div className="text-center py-20 bg-slate-900/20 rounded-3xl border border-dashed border-slate-800">
            <AlertCircle className="w-16 h-16 text-slate-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Data not available yet</h3>
            <p className="text-slate-500">Preparing the briefing for {formattedSelectedDate}.</p>
          </div>
        )}

        {/* Paywall CTA Banner for free users */}
        {!isPaidUser && !checkingAccess && !loading && entry && !entry.holiday && (
          <div className="mt-8 relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#F59E0B]/30 bg-gradient-to-r from-amber-900/20 via-slate-900 to-indigo-900/20 p-6 sm:p-8">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#F59E0B]/5 rounded-full blur-3xl"></div>
            <div className="relative flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3 h-3" /> Unlock Full Access
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {availableDates.length - 2}+ more days of GK content waiting for you
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Get unlimited access to all past editions, both newspapers, audio briefings, and flashcards. One-time payment, forever access.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start text-xs text-slate-500">
                  <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500" /> All dates unlocked</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500" /> Both newspapers</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500" /> Audio + Flashcards</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-slate-500 text-xs line-through">&#8377;499</p>
                <p className="text-white text-4xl font-bold">&#8377;99</p>
                <button
                  onClick={() => setShowPaymentPopup(true)}
                  className="px-8 py-3 bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-bold rounded-xl transition-all hover:scale-105 shadow-lg flex items-center gap-2"
                >
                  <Lock className="w-4 h-4" /> Unlock Now
                </button>
                <p className="text-slate-600 text-[10px]">One-time payment</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 10px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #475569;
          border-radius: 10px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #F59E0B;
        }
      `}</style>
      <NewFooter/>
    </div>
  );
};

export default GKVaultClient;

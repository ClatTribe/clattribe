"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Headphones, Zap, Play, Pause, SkipForward, SkipBack, 
  BookOpen, Calendar, Newspaper, ChevronRight, Sparkles, 
  History, Loader2, AlertCircle, Lock, RefreshCw, CheckCircle, XCircle, PartyPopper
} from 'lucide-react';
import Navbar from '../components/navbar';
import NewFooter from '../components/newFooter';

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
              We'll use this to verify your access after payment
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#F59E0B]/10 to-amber-600/10 border border-[#F59E0B]/30 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">One-Time Payment</p>
                <p className="text-white text-3xl font-bold mt-1">₹99</p>
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
            Pay Now ₹99
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

const DailyCurrentAffairsPage: React.FC = () => {
  const [activeNewspaper, setActiveNewspaper] = useState<'The Hindu' | 'Times of India'>('The Hindu');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
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
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  
  const SUPABASE_URL = 'https://fjswchcothephgtzqbgq.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4';

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

    // Re-check access when user returns to the tab (after payment)
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
          
          // Set to latest date on initial load
          const currentDateExists = dates.some((d: {date: string}) => d.date === selectedDate.toISOString().split('T')[0]);
          if (!currentDateExists && dates.length > 0) {
            setSelectedDate(new Date(dates[0].date));
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
      
      const formattedDate = selectedDate.toISOString().split('T')[0];
      
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
      if (entry && entry.flashcards && currentCardIndex < entry.flashcards.length - 1) {
        setCurrentCardIndex(prev => prev + 1);
      } else {
        setCurrentCardIndex(entry ? entry.flashcards.length : 0);
      }
    }, 200);
  };

  const handleCardReset = () => {
    setCurrentCardIndex(0);
    setIsCardFlipped(false);
    setKnewCount(0);
    setForgotCount(0);
  };

  const formattedSelectedDate = selectedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const historyDates = availableDates.map(item => new Date(item.date)).sort((a, b) => b.getTime() - a.getTime());
  const currentCard = entry?.flashcards?.[currentCardIndex];
  const isFlashcardsCompleted = entry?.flashcards && currentCardIndex >= entry.flashcards.length;

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
                      onClick={() => isLocked ? setShowPaymentPopup(true) : setSelectedDate(date)}
                      className={`relative flex-shrink-0 w-20 sm:w-24 p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 snap-start flex flex-col items-center gap-1 ${
                        isSelected 
                        ? 'bg-[#F59E0B] border-[#F59E0B] text-slate-950 shadow-lg scale-105' 
                        : isLocked
                        ? 'bg-slate-900/30 border-slate-800/50 text-slate-600 cursor-pointer hover:border-[#F59E0B]/50'
                        : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      {isLocked && (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                          <Lock className="w-5 h-5 text-[#F59E0B]" />
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
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-12 h-12 text-[#F59E0B] animate-spin" />
            <p className="text-slate-400 font-medium">Fetching today's highlights...</p>
          </div>
        ) : entry ? (
          entry.holiday ? (
            <div className="text-center py-20 bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-3xl border border-amber-500/30">
              <PartyPopper className="w-20 h-20 text-amber-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Holiday 🎉</h3>
              <p className="text-amber-200 text-lg max-w-md mx-auto leading-relaxed">
                {entry.message || 'No content available today due to a holiday.'}
              </p>
              <p className="text-slate-500 text-sm mt-4">Check back tomorrow for the latest updates!</p>
            </div>
          ) : (
            <>
              <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 mb-8 animate-in fade-in duration-500">
                <div className="lg:col-span-5 bg-gradient-to-b from-slate-800/80 to-slate-900/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-700/50 relative overflow-hidden">
  <audio 
    ref={audioRef} 
    src={audioLanguage === 'hindi' ? entry.audio_url_hindi : entry.audio_url_english}
    onTimeUpdate={handleTimeUpdate}
    onEnded={() => setIsPlaying(false)}
  />
  
  <div className="relative z-10 flex flex-col h-full justify-between min-h-[400px]">
    <div>
      <span className="text-[#F59E0B] font-bold uppercase tracking-wider text-[10px] block mb-3 sm:mb-4">Tribe Audiobook</span>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setAudioLanguage('english')}
          className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
            audioLanguage === 'english' ? 'bg-[#F59E0B] text-slate-950' : 'bg-slate-800/50 text-slate-400'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setAudioLanguage('hindi')}
          className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
            audioLanguage === 'hindi' ? 'bg-[#F59E0B] text-slate-950' : 'bg-slate-800/50 text-slate-400'
          }`}
        >
          हिंदी
        </button>
      </div>
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Today's Briefing</h3>
      <p className="text-slate-400 text-xs sm:text-sm italic">Curated by Purva Didi & Team.</p>
    </div>

    {/* Center Section: Headphone above the Play Button */}
    <div className="flex flex-col items-center justify-center my-4">
      {/* Headphone Icon positioned specifically above the button */}
      <Headphones className="w-24 h-24 sm:w-32 sm:h-32 text-white/10 mb-8 sm:mb-[50px]" />
      
      <div className="text-center relative z-20">
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-20 h-20 bg-[#F59E0B] text-slate-950 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-xl mx-auto"
        >
          {isPlaying ? <Pause className="w-10 h-10" /> : <Play className="w-10 h-10 ml-1" />}
        </button>
        
        <div className="flex items-center justify-center gap-4 mt-6">
          <button onClick={() => skipTime(-10)} className="p-2 rounded-full bg-slate-800/50 text-slate-400 hover:text-white">
            <SkipBack className="w-5 h-5" />
          </button>
          <button onClick={() => skipTime(10)} className="p-2 rounded-full bg-slate-800/50 text-slate-400 hover:text-white">
            <SkipForward className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    {/* Progress Bar Section */}
    <div className="mt-4 space-y-2">
      <div className="flex justify-between text-xs font-bold text-slate-500">
        <span>{formatTime(currentTime)}</span>
        <span className="text-[#F59E0B]">{formatTime(duration)}</span>
      </div>
      <div 
        ref={progressBarRef}
        onClick={handleProgressBarClick}
        className="h-2 bg-slate-700 rounded-full overflow-hidden cursor-pointer"
      >
        <div className="h-full bg-[#F59E0B]" style={{ width: `${progress}%` }}></div>
      </div>
    </div>

    <div className="flex items-center gap-3 p-4 mt-6 bg-slate-950/50 rounded-xl border border-slate-800">
      <div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center font-bold text-slate-950">P</div>
      <div>
        <p className="text-white text-xs sm:text-sm font-bold">Narration by Purva Didi & Team.</p>
        <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">NLU Success Specialist</p>
      </div>
    </div>
  </div>
</div>

                <div className="lg:col-span-7 bg-slate-900/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-800">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2"><Zap className="w-5 h-5 text-[#F59E0B]" /> Key Highlights</h3>
                    <span className="text-xs text-slate-500 font-bold uppercase">{entry.snippets.length} Points</span>
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
              </div>

              {entry.flashcards && entry.flashcards.length > 0 && (
                <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-indigo-500/30 mb-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4">
                      <Sparkles className="w-4 h-4" /> Interactive Learning
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Master Today's <span className="text-indigo-400">Key Facts</span></h2>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3 mb-6">
                    <div className="px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-800">
                      <span className="text-slate-400 text-xs">Progress: </span>
                      <span className="text-white font-semibold text-sm">
                        {Math.min(currentCardIndex + 1, entry.flashcards.length)} / {entry.flashcards.length}
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
                              <h3 className="text-3xl font-bold text-indigo-600">Great Work! 🎉</h3>
                              <p className="text-slate-600 text-center">You've completed all cards for today.</p>
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

export default DailyCurrentAffairsPage;
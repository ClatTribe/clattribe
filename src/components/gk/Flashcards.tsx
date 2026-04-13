'use client';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Brain, Zap, Trophy, Flame, Clock, CheckCircle, XCircle, ArrowLeft, ArrowRight, BookOpen, Star, Target, RefreshCw, ChevronRight, Award, TrendingUp, BarChart2 } from 'lucide-react';

// ── Supabase ──────────────────────────────────────────────────────────────────
const SUPABASE_URL = 'https://fjswchcothephgtzqbgq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4';

// ── Types ─────────────────────────────────────────────────────────────────────
interface FlashCard {
  id: number;
  question: string;
  answer: string;
  category: string;
  difficulty?: number;
}

type Mode = 'home' | 'daily' | 'speed' | 'browse' | 'mastery';

// ── SM2 Spaced Repetition ─────────────────────────────────────────────────────
interface SM2Card { id: number; ef: number; interval: number; due: string; }
function getSM2Cards(): SM2Card[] {
  try { return JSON.parse(localStorage.getItem('ct_sm2') || '[]'); } catch { return []; }
}
function saveSM2Cards(cards: SM2Card[]) {
  localStorage.setItem('ct_sm2', JSON.stringify(cards));
}
function calculateSM2(card: SM2Card, quality: number): SM2Card {
  const ef = Math.max(1.3, card.ef + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  const interval = quality < 3 ? 1 : card.interval <= 1 ? 1 : card.interval <= 6 ? 6 : Math.round(card.interval * ef);
  const due = new Date(Date.now() + interval * 86400000).toISOString().split('T')[0];
  return { ...card, ef, interval, due };
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function seededRng(seed: number) {
  let s = seed;
  return () => { s = (s * 16807 + 0) % 2147483647; return (s - 1) / 2147483646; };
}

function getDailyCards(all: FlashCard[]): FlashCard[] {
  if (!all.length) return [];
  const today = new Date().toISOString().split('T')[0];
  const seed = parseInt(today.replace(/-/g, ''));
  const rng = seededRng(seed);
  const sm2 = getSM2Cards();
  const todayDue = sm2.filter(c => c.due <= today).map(c => c.id);
  const dueCards = all.filter(c => todayDue.includes(c.id));
  const rest = all.filter(c => !todayDue.includes(c.id)).sort(() => rng() - 0.5);
  return [...dueCards, ...rest].slice(0, 15);
}

// ── Motivational quotes for CLAT aspirants ────────────────────────────────────
const QUOTES = [
  '"Every expert was once a beginner. Every CLAT topper started with one card."',
  '"Your daily dose of GK is your edge over the competition."',
  '"The CLAT exam tests 100 questions. You are preparing one card at a time."',
  '"Consistency beats intelligence. Show up daily."',
  '"NLU dreams are built one fact at a time. Keep going."',
];

// ── SwipeCard (Browse/Tinder mode) ────────────────────────────────────────────
interface SwipeCardProps {
  card: FlashCard;
  onSwipe: (dir: 'left' | 'right') => void;
  onFlip: () => void;
  isFlipped: boolean;
  isDraggable: boolean;
}

function SwipeCard({ card, onSwipe, onFlip, isFlipped, isDraggable }: SwipeCardProps) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-260, 260], [-14, 14]);
  const gotItOp = useTransform(x, [20, 110], [0, 1]);
  const revOp = useTransform(x, [-20, -110], [0, 1]);
  const isDragging = useRef(false);

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing select-none"
      style={{ x: isDraggable ? x : undefined, rotate: isDraggable ? rotate : undefined, zIndex: 10 }}
      drag={isDraggable ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.6}
      onDragStart={() => { isDragging.current = true; }}
      onDragEnd={(_, info) => {
        isDragging.current = false;
        if (Math.abs(info.offset.x) > 80) onSwipe(info.offset.x > 0 ? 'right' : 'left');
      }}
      onClick={() => { if (!isDragging.current) onFlip(); }}
    >
      <div className="absolute inset-0 rounded-3xl overflow-hidden"
        style={{ backgroundColor: '#ffffff', boxShadow: '0 16px 48px rgba(0,0,0,0.22)' }}>

        {/* GOT IT stamp */}
        <motion.div className="absolute top-8 left-6 px-3 py-1 rounded-lg border-4 z-20"
          style={{ opacity: gotItOp, rotate: -22, borderColor: '#16a34a', color: '#16a34a', fontSize: 22, fontWeight: 900, letterSpacing: '0.08em' }}>
          GOT IT
        </motion.div>
        {/* REVIEW stamp */}
        <motion.div className="absolute top-8 right-6 px-3 py-1 rounded-lg border-4 z-20"
          style={{ opacity: revOp, rotate: 22, borderColor: '#dc2626', color: '#dc2626', fontSize: 22, fontWeight: 900, letterSpacing: '0.08em' }}>
          REVIEW
        </motion.div>

        <AnimatePresence mode="wait" initial={false}>
          {!isFlipped ? (
            <motion.div key="front" className="absolute inset-0 flex flex-col"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              style={{ backgroundColor: '#ffffff' }}>
              <div className="flex-1 flex flex-col items-center justify-center p-7 gap-4">
                <span style={{ backgroundColor: '#f1f5f9', borderRadius: 999, padding: '3px 12px', color: '#64748b', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  {card.category}
                </span>
                <p style={{ color: '#0f172a', fontSize: '1.15rem', fontWeight: 700, textAlign: 'center', lineHeight: 1.55 }}>
                  {card.question}
                </p>
                <span style={{ color: '#94a3b8', fontSize: 12, marginTop: 8 }}>Tap to reveal · Swipe to judge</span>
              </div>
              <div style={{ height: 5, flexShrink: 0, background: 'linear-gradient(to right, #fbbf24, #f59e0b)' }} />
            </motion.div>
          ) : (
            <motion.div key="back" className="absolute inset-0 flex flex-col"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              style={{ backgroundColor: '#0f172a' }}>
              <div className="flex-1 flex flex-col items-center justify-center p-7 gap-4">
                <span style={{ color: '#60a5fa', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Answer</span>
                <p style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 700, textAlign: 'center', lineHeight: 1.55 }}>
                  {card.answer}
                </p>
              </div>
              <div className="flex gap-3 px-6 pb-5">
                <button
                  onClick={e => { e.stopPropagation(); onSwipe('left'); }}
                  style={{ flex: 1, backgroundColor: '#b91c1c', borderRadius: 999, color: '#fff', fontWeight: 700, fontSize: 14, padding: '10px 0', border: 'none', cursor: 'pointer' }}>
                  Forgot
                </button>
                <button
                  onClick={e => { e.stopPropagation(); onSwipe('right'); }}
                  style={{ flex: 1, backgroundColor: '#15803d', borderRadius: 999, color: '#fff', fontWeight: 700, fontSize: 14, padding: '10px 0', border: 'none', cursor: 'pointer' }}>
                  Knew it ✓
                </button>
              </div>
              <div style={{ height: 5, flexShrink: 0, background: 'linear-gradient(to right, #3b82f6, #6366f1)' }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ── FlipCard (Daily / Speed modes) ────────────────────────────────────────────
function FlipCard({ question, answer, category, flippedState, onFlip }: {
  question: string; answer: string; category: string; flippedState: boolean; onFlip: () => void;
}) {
  return (
    <div className="relative w-full max-w-[320px] mx-auto h-[340px] cursor-pointer select-none"
      onClick={onFlip} style={{ perspective: 1200 }}>
      <motion.div className="relative w-full h-full"
        animate={{ rotateY: flippedState ? 180 : 0 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: 'preserve-3d' }}>
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col"
          style={{ backfaceVisibility: 'hidden', backgroundColor: '#ffffff', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
          <div className="flex-1 flex flex-col items-center justify-center p-6 gap-3">
            <span style={{ backgroundColor: '#f1f5f9', borderRadius: 999, padding: '3px 12px', color: '#64748b', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              {category}
            </span>
            <p style={{ color: '#0f172a', fontSize: '1.05rem', fontWeight: 700, textAlign: 'center', lineHeight: 1.55 }}>
              {question}
            </p>
            <span style={{ color: '#94a3b8', fontSize: 12, marginTop: 4 }}>Tap to reveal</span>
          </div>
          <div style={{ height: 5, flexShrink: 0, background: 'linear-gradient(to right, #fbbf24, #f59e0b)' }} />
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', backgroundColor: '#0f172a', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}>
          <div className="flex-1 flex flex-col items-center justify-center p-6 gap-3">
            <span style={{ color: '#60a5fa', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Answer</span>
            <p style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, textAlign: 'center', lineHeight: 1.55 }}+
              {answer}
            </p>
          </div>
          <div style={{ height: 5, flexShrink: 0, background: 'linear-gradient(to right, #3b82f6, #6366f1)' }} />
        </div>
      </motion.div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function Flashcards() {
  const [allCards, setAllCards] = useState<FlashCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<Mode>('home');
  const [streak, setStreak] = useState(0);
  const [mastered, setMastered] = useState<Set<number>>(new Set());

  // Daily Dose
  const [dailyCards, setDailyCards] = useState<FlashCard[]>([]);
  const [dailyIdx, setDailyIdx] = useState(0);
  const [dailyFlipped, setDailyFlipped] = useState(false);
  const [dailyResults, setDailyResults] = useState<('knew' | 'forgot')[]>([]);
  const [dailyDone, setDailyDone] = useState(false);

  // Exam Blitz (Speed)
  const [speedCards, setSpeedCards] = useState<FlashCard[]>([]);
  const [speedIdx, setSpeedIdx] = useState(0);
  const [speedFlipped, setSpeedFlipped] = useState(false);
  const [speedCorrect, setSpeedCorrect] = useState(0);
  const [speedTimer, setSpeedTimer] = useState(90);
  const [speedRunning, setSpeedRunning] = useState(false);
  const [speedDone, setSpeedDone] = useState(false);
  const [speedBest, setSpeedBest] = useState(0);

  // Browse (Swipe)
  const [swipeCards, setSwipeCards] = useState<FlashCard[]>([]);
  const [swipeIdx, setSwipeIdx] = useState(0);
  const [swipeFlipped, setSwipeFlipped] = useState(false);
  const [missedIds, setMissedIds] = useState<number[]>([]);
  const [swipeDone, setSwipeDone] = useState(false);
  const [revisingMissed, setRevisingMissed] = useState(false);

  const handleSwipeRef = useRef<(dir: 'left' | 'right') => void>(() => {});
  const speedIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Boot ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    const s = parseInt(localStorage.getItem('ct_streak') || '0');
    const last = localStorage.getItem('ct_last_daily') || '';
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (last === today || last === yesterday) setStreak(s);
    else if (last && last < yesterday) setStreak(0);
    else setStreak(s);

    try {
      const m = JSON.parse(localStorage.getItem('ct_mastered_v2') || '[]') as number[];
      setMastered(new Set(m));
    } catch { /* */ }

    setSpeedBest(parseInt(localStorage.getItem('ct_speed_best') || '0'));

    fetch(`${SUPABASE_URL}/rest/v1/flashcard?select=*&order=id.asc&limit=500`, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    })
      .then(r => r.json())
      .then(data => { if (Array.isArray(data)) setAllCards(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  // ── Speed timer ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (speedRunning) {
      speedIntervalRef.current = setInterval(() => {
        setSpeedTimer(t => {
          if (t <= 1) { endSpeed(); return 0; }
          return t - 1;
        });
      }, 1000);
    }
    return () => { if (speedIntervalRef.current) clearInterval(speedIntervalRef.current); };
  }, [speedRunning]); // eslint-disable-line

  // ── Swipe ref ─────────────────────────────────────────────────────────────
  useEffect(() => {
    handleSwipeRef.current = (dir: 'left' | 'right') => {
      const card = swipeCards[swipeIdx];
      if (!card) return;
      if (dir === 'left') {
        setMissedIds(prev => [...prev, card.id]);
      } else {
        setMastered(prev => {
          const next = new Set(prev);
          next.add(card.id);
          localStorage.setItem('ct_mastered_v2', JSON.stringify(Array.from(next)));
          return next;
        });
      }
      setSwipeFlipped(false);
      if (swipeIdx + 1 >= swipeCards.length) setSwipeDone(true);
      else setSwipeIdx(i => i + 1);
    };
  }, [swipeCards, swipeIdx]);

  // ── Keyboard (Browse mode) ────────────────────────────────────────────────
  useEffect(() => {
    if (mode !== 'browse') return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleSwipeRef.current('right');
      else if (e.key === 'ArrowLeft') handleSwipeRef.current('left');
      else if (e.key === ' ') { e.preventDefault(); setSwipeFlipped(f => !f); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [mode]);

  // ── Daily Dose ────────────────────────────────────────────────────────────
  const startDaily = () => {
    if (!allCards.length) return;
    const cards = getDailyCards(allCards);
    setDailyCards(cards);
    setDailyIdx(0);
    setDailyFlipped(false);
    setDailyResults([]);
    setDailyDone(false);
    setMode('daily');
  };

  const handleDailyAnswer = (knew: boolean) => {
    if (!dailyFlipped) return;
    const card = dailyCards[dailyIdx];
    const newResults: ('knew' | 'forgot')[] = [...dailyResults, knew ? 'knew' : 'forgot'];
    setDailyResults(newResults);

    const sm2 = getSM2Cards();
    const existing = sm2.find(c => c.id === card.id) || { id: card.id, ef: 2.5, interval: 0, due: '' };
    const updated = calculateSM2(existing, knew ? 4 : 1);
    saveSM2Cards([...sm2.filter(c => c.id !== card.id), updated]);

    if (knew) {
      setMastered(prev => {
        const next = new Set(prev);
        next.add(card.id);
        localStorage.setItem('ct_mastered_v2', JSON.stringify(Array.from(next)));
        return next;
      });
    }

    if (dailyIdx + 1 >= dailyCards.length) {
      const today = new Date().toISOString().split('T')[0];
      const last = localStorage.getItem('ct_last_daily') || '';
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      const newStreak = (last === yesterday || last === today) ? streak + 1 : 1;
      setStreak(newStreak);
      localStorage.setItem('ct_streak', String(newStreak));
      localStorage.setItem('ct_last_daily', today);
      setDailyDone(true);
    } else {
      setDailyIdx(i => i + 1);
      setDailyFlipped(false);
    }
  };

  // ── Speed ─────────────────────────────────────────────────────────────────
  const startSpeed = () => {
    if (!allCards.length) return;
    const shuffled = [...allCards].sort(() => Math.random() - 0.5);
    setSpeedCards(shuffled);
    setSpeedIdx(0);
    setSpeedFlipped(false);
    setSpeedCorrect(0);
    setSpeedTimer(90);
    setSpeedDone(false);
    setSpeedRunning(true);
    setMode('speed');
  };

  const endSpeed = () => {
    if (speedIntervalRef.current) clearInterval(speedIntervalRef.current);
    setSpeedRunning(false);
    setSpeedDone(true);
  };

  const handleSpeedAnswer = (knew: boolean) => {
    if (!speedRunning || speedDone || !speedFlipped) return;
    if (knew) {
      const next = speedCorrect + 1;
      setSpeedCorrect(next);
      const best = parseInt(localStorage.getItem('ct_speed_best') || '0');
      if (next > best) {
        localStorage.setItem('ct_speed_best', String(next));
        setSpeedBest(next);
      }
    }
    if (speedIdx + 1 >= speedCards.length) { endSpeed(); return; }
    setSpeedIdx(i => i + 1);
    setSpeedFlipped(false);
  };

  // ── Browse ────────────────────────────────────────────────────────────────
  const startBrowse = (cards?: FlashCard[]) => {
    const pool = cards || allCards;
    if (!pool.length) return;
    setSwipeCards([...pool].sort(() => Math.random() - 0.5));
    setSwipeIdx(0);
    setSwipeFlipped(false);
    setMissedIds([]);
    setSwipeDone(false);
    setRevisingMissed(!!cards);
    setMode('browse');
  };

  const handleSwipe = (dir: 'left' | 'right') => handleSwipeRef.current(dir);
  const currentSwipeCard = swipeCards[swipeIdx];

  // ── Category stats ────────────────────────────────────────────────────────
  const categoryStats = useMemo(() => {
    const stats: Record<string, { total: number; done: number }> = {};
    allCards.forEach(c => {
      if (!stats[c.category]) stats[c.category] = { total: 0, done: 0 };
      stats[c.category].total++;
      if (mastered.has(c.id)) stats[c.category].done++;
    });
    return Object.entries(stats)
      .map(([cat, s]) => ({ cat, ...s, pct: s.total ? Math.round((s.done / s.total) * 100) : 0 }))
      .sort((a, b) => a.pct - b.pct);
  }, [allCards, mastered]);

  const totalMastered = mastered.size;
  const todayQuote = QUOTES[new Date().getDay() % QUOTES.length];
  const overallPct = allCards.length ? Math.round((totalMastered / allCards.length) * 100) : 0;

  // ── Loading ───────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div style={{ width: 48, height: 48, borderRadius: '50%', border: '4px solid #334155', borderTopColor: '#f59e0b', animation: 'spin 0.8s linear infinite' }} />
        <p style={{ color: '#64748b', fontSize: 14 }}>Loading flashcards…</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // DAILY DOSE
  // ══════════════════════════════════════════════════════════════════════════
  if (mode === 'daily') {
    const card = dailyCards[dailyIdx];
    const knewCount = dailyResults.filter(r => r === 'knew').length;
    const forgotCount = dailyResults.filter(r => r === 'forgot').length;

    if (dailyDone) {
      const score = Math.round((knewCount / dailyCards.length) * 100);
      return (
        <div className="flex flex-col items-center gap-6 py-6 px-4 max-w-lg mx-auto">
          <button onClick={() => setMode('home')} style={{ alignSelf: 'flex-start', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: 14 }}>
            <ArrowLeft size={16} /> Home
          </button>

          <div className="w-full rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
            <div style={{ fontSize: 48 }}>{score >= 80 ? '🏆' : score >= 60 ? '💪' : '📚'}</div>
            <p style={{ color: '#f8fafc', fontSize: 22, fontWeight: 800, marginTop: 8 }}>
              {score >= 80 ? 'Outstanding!' : score >= 60 ? 'Good effort!' : 'Keep practising!'}
            </p>
            <p style={{ color: '#94a3b8', fontSize: 14, marginTop: 4 }}>You knew {knewCount} out of {dailyCards.length} cards</p>
            <div className="flex justify-center gap-6 mt-5">
              <div className="text-center">
                <p style={{ color: '#4ade80', fontSize: 28, fontWeight: 800 }}>{knewCount}</p>
                <p style={{ color: '#94a3b8', fontSize: 12 }}>Knew it</p>
              </div>
              <div className="text-center">
                <p style={{ color: '#f87171', fontSize: 28, fontWeight: 800 }}>{forgotCount}</p>
                <p style={{ color: '#94a3b8', fontSize: 12 }}>Forgot</p>
              </div>
              <div className="text-center">
                <p style={{ color: '#fbbf24', fontSize: 28, fontWeight: 800 }}>{streak}</p>
                <p style={{ color: '#94a3b8', fontSize: 12 }}>Day streak 🔥</p>
              </div>
            </div>
          </div>

          <div className="w-full rounded-xl p-4" style={{ backgroundColor: '#1e293b' }}>
            <p style={{ color: '#94a3b8', fontSize: 12, marginBottom: 8 }}>Score: {score}%</p>
            <div style={{ height: 10, borderRadius: 999, backgroundColor: '#334155', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${score}%`, background: score >= 80 ? 'linear-gradient(to right,#4ade80,#22c55e)' : score >= 60 ? 'linear-gradient(to right,#fbbf24,#f59e0b)' : 'linear-gradient(to right,#f87171,#ef4444)', borderRadius: 999, transition: 'width 0.6s ease' }} />
            </div>
          </div>

          <p style={{ color: '#64748b', fontSize: 13, textAlign: 'center', fontStyle: 'italic' }}>{todayQuote}</p>

          <div className="flex gap-3 w-full">
            {forgotCount > 0 && (
              <button
                onClick={() => startBrowse(dailyCards.filter((_, i) => dailyResults[i] === 'forgot'))}
                style={{ flex: 1, padding: '12px 0', borderRadius: 12, backgroundColor: '#1e293b', color: '#60a5fa', fontWeight: 700, fontSize: 14, border: '1px solid #334155', cursor: 'pointer' }}>
                Revise {forgotCount} missed
              </button>
            )}
            <button onClick={() => setMode('home')}
              style={{ flex: 1, padding: '12px 0', borderRadius: 12, background: 'linear-gradient(135deg,#f59e0b,#d97706)', color: '#fff', fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer' }}>
              Back to Home
            </button>
          </div>
        </div>
      );
    }

    if (!card) return null;

    return (
      <div className="flex flex-col items-center gap-5 py-4 px-4 max-w-lg mx-auto">
        <div className="flex items-center justify-between w-full">
          <button onClick={() => setMode('home')} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: 14 }}>
            <ArrowLeft size={16} /> Home
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Flame size={16} style={{ color: '#f59e0b' }} />
            <span style={{ color: '#f59e0b', fontWeight: 700, fontSize: 14 }}>{streak} day streak</span>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between mb-1">
            <span style={{ color: '#64748b', fontSize: 12 }}>Daily Dose</span>
            <span style={{ color: '#64748b', fontSize: 12 }}>{dailyIdx + 1} / {dailyCards.length}</span>
          </div>
          <div style={{ height: 6, borderRadius: 999, backgroundColor: '#1e293b', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${(dailyIdx / dailyCards.length) * 100}%`, background: 'linear-gradient(to right,#fbbf24,#f59e0b)', borderRadius: 999, transition: 'width 0.3s ease' }} />
          </div>
        </div>

        <FlipCard
          question={card.question}
          answer={card.answer}
          category={card.category}
          flippedState={dailyFlipped}
          onFlip={() => setDailyFlipped(f => !f)}
        />

        <AnimatePresence>
          {dailyFlipped && (
            <motion.div className="flex gap-3 w-full max-w-[320px]"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <button onClick={() => handleDailyAnswer(false)}
                style={{ flex: 1, padding: '14px 0', borderRadius: 12, backgroundColor: '#450a0a', color: '#fca5a5', fontWeight: 700, fontSize: 14, border: '1px solid #7f1d1d', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <XCircle size={18} /> Forgot
              </button>
              <button onClick={() => handleDailyAnswer(true)}
                style={{ flex: 1, padding: '14px 0', borderRadius: 12, backgroundColor: '#052e16', color: '#86efac', fontWeight: 700, fontSize: 14, border: '1px solid #14532d', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <CheckCircle size={18} /> Knew it
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {!dailyFlipped && (
          <p style={{ color: '#475569', fontSize: 13, textAlign: 'center' }}>Tap the card to reveal the answer</p>
        )}
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // EXAM BLITZ (SPEED)
  // ══════════════════════════════════════════════════════════════════════════
  if (mode === 'speed') {
    const card = speedCards[speedIdx];
    const timerPct = (speedTimer / 90) * 100;
    const timerColor = speedTimer > 30 ? '#4ade80' : speedTimer > 10 ? '#fbbf24' : '#ef4444';

    if (speedDone) {
      const attempted = speedIdx + 1;
      const accuracy = attempted > 0 ? Math.round((speedCorrect / attempted) * 100) : 0;
      const isNewBest = speedCorrect > 0 && speedCorrect >= speedBest;
      return (
        <div className="flex flex-col items-center gap-6 py-6 px-4 max-w-lg mx-auto">
          <button onClick={() => setMode('home')} style={{ alignSelf: 'flex-start', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: 14 }}>
            <ArrowLeft size={16} /> Home
          </button>

          <div className="w-full rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
            {isNewBest && <div style={{ color: '#fbbf24', fontSize: 13, fontWeight: 700, marginBottom: 8, letterSpacing: '0.1em' }}>🎉 NEW PERSONAL BEST!</div>}
            <p style={{ color: '#f8fafc', fontSize: 22, fontWeight: 800 }}>Time&apos;s Up!</p>
            <p style={{ color: '#4ade80', fontSize: 48, fontWeight: 900, lineHeight: 1.2, marginTop: 8 }}>{speedCorrect}</p>
            <p style={{ color: '#94a3b8', fontSize: 14 }}>correct answers in 90 seconds</p>
            <div className="flex justify-center gap-8 mt-5">
              <div className="text-center">
                <p style={{ color: '#60a5fa', fontSize: 22, fontWeight: 800 }}>{accuracy}%</p>
                <p style={{ color: '#94a3b8', fontSize: 12 }}>Accuracy</p>
              </div>
              <div className="text-center">
                <p style={{ color: '#a78bfa', fontSize: 22, fontWeight: 800 }}>{attempted}</p>
                <p style={{ color: '#94a3b8', fontSize: 12 }}>Attempted</p>
              </div>
              <div className="text-center">
                <p style={{ color: '#fbbf24', fontSize: 22, fontWeight: 800 }}>{speedBest}</p>
                <p style={{ color: '#94a3b8', fontSize: 12 }}>Personal Best</p>
              </div>
            </div>
          </div>

          <p style={{ color: '#64748b', fontSize: 13, textAlign: 'center' }}>
            {accuracy >= 80 ? '🔥 Excellent! You\'re CLAT-ready!' : accuracy >= 60 ? '💪 Good job! Keep pushing!' : '📚 Accuracy over speed. Practise more.'}
          </p>

          <div className="flex gap-3 w-full">
            <button onClick={startSpeed}
              style={{ flex: 1, padding: '12px 0', borderRadius: 12, backgroundColor: '#1e293b', color: '#60a5fa', fontWeight: 700, fontSize: 14, border: '1px solid #334155', cursor: 'pointer' }}>
              Try Again
            </button>
            <button onClick={() => setMode('home')}
              style={{ flex: 1, padding: '12px 0', borderRadius: 12, background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer' }}>
              Back to Home
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center gap-5 py-4 px-4 max-w-lg mx-auto">
        <div className="flex items-center justify-between w-full">
          <button onClick={() => { endSpeed(); setMode('home'); }} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: 14 }}>
            <ArrowLeft size={16} /> Quit
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <CheckCircle size={14} style={{ color: '#4ade80' }} />
            <span style={{ color: '#4ade80', fontWeight: 700, fontSize: 16 }}>{speedCorrect}</span>
            <span style={{ color: '#475569', fontSize: 14 }}>correct</span>
          </div>
        </div>

        {/* Timer ring */}
        <div className="relative flex items-center justify-center" style={{ width: 90, height: 90 }}>
          <svg width={90} height={90} style={{ transform: 'rotate(-90deg)', position: 'absolute' }}>
            <circle cx={45} cy={45} r={38} fill="none" stroke="#1e293b" strokeWidth={8} />
            <circle cx={45} cy={45} r={38} fill="none" stroke={timerColor} strokeWidth={8}
              strokeDasharray={2 * Math.PI * 38}
              strokeDashoffset={2 * Math.PI * 38 * (1 - timerPct / 100)}
              style={{ transition: 'stroke-dashoffset 0.5s linear, stroke 0.5s' }} />
          </svg>
          <div style={{ textAlign: 'center', zIndex: 1 }}>
            <p style={{ color: timerColor, fontSize: 22, fontWeight: 900, lineHeight: 1 }}>{speedTimer}</p>
            <p style={{ color: '#475569', fontSize: 10 }}>sec</p>
          </div>
        </div>

        {card && (
          <FlipCard
            question={card.question}
            answer={card.answer}
            category={card.category}
            flippedState={speedFlipped}
            onFlip={() => setSpeedFlipped(f => !f)}
          />
        )}

        <AnimatePresence>
          {speedFlipped && card && (
            <motion.div className="flex gap-3 w-full max-w-[320px]"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <button onClick={() => handleSpeedAnswer(false)}
                style={{ flex: 1, padding: '12px 0', borderRadius: 12, backgroundColor: '#450a0a', color: '#fca5a5', fontWeight: 700, fontSize: 14, border: '1px solid #7f1d1d', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <XCircle size={16} /> Forgot
              </button>
              <button onClick={() => handleSpeedAnswer(true)}
                style={{ flex: 1, padding: '12px 0', borderRadius: 12, backgroundColor: '#052e16', color: '#86efac', fontWeight: 700, fontSize: 14, border: '1px solid #14532d', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <CheckCircle size={16} /> Knew it
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {!speedFlipped && card && (
          <p style={{ color: '#475569', fontSize: 13, textAlign: 'center' }}>Tap card to reveal · Be quick!</p>
        )}
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // BROWSE (TINDER SWIPE)
  // ══════════════════════════════════════════════════════════════════════════
  if (mode === 'browse') {
    if (swipeDone) {
      const missedCards = allCards.filter(c => missedIds.includes(c.id));
      return (
        <div className="flex flex-col items-center gap-6 py-6 px-4 max-w-lg mx-auto">
          <button onClick={() => setMode('home')} style={{ alignSelf: 'flex-start', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: 14 }}>
            <ArrowLeft size={16} /> Home
          </button>

          <div className="w-full rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg,#1e293b,#0f172a)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
            <div style={{ fontSize: 40 }}>{revisingMissed ? '🔄' : '🃏'}</div>
            <p style={{ color: '#f8fafc', fontSize: 20, fontWeight: 800, marginTop: 8 }}>
              {revisingMissed ? 'Revision done!' : 'Deck complete!'}
            </p>
            <div className="flex justify-center gap-8 mt-5">
              <div className="text-center">
                <p style={{ color: '#4ade80', fontSize: 26, fontWeight: 800 }}>{swipeCards.length - missedIds.length}</p>
                <p style={{ color: '#94a3b8', fontSize: 12 }}>Knew it ✓</p>
              </div>
              <div className="text-center">
                <p style={{ color: '#f87171', fontSize: 26, fontWeight: 800 }}>{missedIds.length}</p>
                <p style={{ color: '#94a3b8', fontSize: 12 }}>To review</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 w-full">
            {missedCards.length > 0 && (
              <button onClick={() => startBrowse(missedCards)}
                style={{ flex: 1, padding: '12px 0', borderRadius: 12, background: 'linear-gradient(135deg,#f59e0b,#d97706)', color: '#fff', fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer' }}>
                Revise {missedCards.length} missed
              </button>
            )}
            <button onClick={() => setMode('home')}
              style={{ flex: 1, padding: '12px 0', borderRadius: 12, backgroundColor: '#1e293b', color: '#94a3b8', fontWeight: 700, fontSize: 14, border: '1px solid #334155', cursor: 'pointer' }}>
              Home
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center gap-5 py-4 px-4 max-w-lg mx-auto">
        <div className="flex items-center justify-between w-full">
          <button onClick={() => setMode('home')} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: 14 }}>
            <ArrowLeft size={16} /> {revisingMissed ? 'End revision' : 'Home'}
          </button>
          <span style={{ color: '#64748b', fontSize: 13 }}>{swipeIdx + 1} / {swipeCards.length}</span>
        </div>

        <div className="flex gap-8">
          <span style={{ color: '#ef4444', fontSize: 12, fontWeight: 600 }}>← Forgot</span>
          <span style={{ color: '#22c55e', fontSize: 12, fontWeight: 600 }}>Knew it →</span>
        </div>

        {currentSwipeCard && (
          <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[320px]" style={{ height: 420 }}>
            {swipeIdx + 2 < swipeCards.length && (
              <div className="absolute inset-0 rounded-3xl" style={{ transform: 'scale(0.86) translateY(22px)', zIndex: 1, transformOrigin: 'bottom center', backgroundColor: '#e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            )}
            {swipeIdx + 1 < swipeCards.length && (
              <div className="absolute inset-0 rounded-3xl" style={{ transform: 'scale(0.93) translateY(11px)', zIndex: 2, transformOrigin: 'bottom center', backgroundColor: '#f1f5f9', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }} />
            )}
            <SwipeCard
              key={currentSwipeCard.id + '-' + swipeIdx}
              card={currentSwipeCard}
              onSwipe={handleSwipe}
              onFlip={() => setSwipeFlipped(f => !f)}
              isFlipped={swipeFlipped}
              isDraggable={true}
            />
          </div>
        )}

        <p style={{ color: '#334155', fontSize: 11, textAlign: 'center' }}>
          Keyboard: ← Forgot &nbsp;|&nbsp; → Knew it &nbsp;|&nbsp; Space = flip
        </p>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // MASTERY TRACKER
  // ══════════════════════════════════════════════════════════════════════════
  if (mode === 'mastery') {
    const weakCategories = categoryStats.filter(c => c.pct < 40);
    const strongCategories = categoryStats.filter(c => c.pct >= 70);

    return (
      <div className="flex flex-col gap-5 py-4 px-4 max-w-lg mx-auto">
        <div className="flex items-center gap-3">
          <button onClick={() => setMode('home')} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: 14 }}>
            <ArrowLeft size={16} />
          </button>
          <h2 style={{ color: '#f8fafc', fontSize: 18, fontWeight: 800, margin: 0 }}>Mastery Tracker</h2>
        </div>

        <div className="rounded-2xl p-5" style={{ background: 'linear-gradient(135deg,#1e293b,#0f172a)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
          <div className="flex justify-between items-center mb-3">
            <p style={{ color: '#94a3b8', fontSize: 13, margin: 0 }}>Overall Mastery</p>
            <p style={{ color: '#fbbf24', fontSize: 22, fontWeight: 900, margin: 0 }}>{overallPct}%</p>
          </div>
          <div style={{ height: 10, borderRadius: 999, backgroundColor: '#334155', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${overallPct}%`, background: 'linear-gradient(to right,#fbbf24,#f59e0b)', borderRadius: 999, transition: 'width 0.8s ease' }} />
          </div>
          <p style={{ color: '#475569', fontSize: 12, marginTop: 8, marginBottom: 0 }}>{totalMastered} of {allCards.length} cards mastered</p>
        </div>

        {weakCategories.length > 0 && (
          <div className="rounded-xl p-4" style={{ backgroundColor: '#450a0a', border: '1px solid #7f1d1d' }}>
            <p style={{ color: '#fca5a5', fontSize: 13, fontWeight: 700, marginBottom: 8, marginTop: 0 }}>⚠ Focus areas — below 40%</p>
            <div className="flex flex-wrap gap-2">
              {weakCategories.map(c => (
                <span key={c.cat} style={{ backgroundColor: '#7f1d1d', color: '#fca5a5', borderRadius: 999, fontSize: 11, fontWeight: 600, padding: '3px 10px' }}>
                  {c.cat} ({c.pct}%)
                </span>
              ))}
            </div>
          </div>
        )}

        {strongCategories.length > 0 && (
          <div className="rounded-xl p-4" style={{ backgroundColor: '#052e16', border: '1px solid #14532d' }}>
            <p style={{ color: '#86efac', fontSize: 13, fontWeight: 700, marginBottom: 8, marginTop: 0 }}>✓ Strong areas — 70%+</p>
            <div className="flex flex-wrap gap-2">
              {strongCategories.map(c => (
                <span key={c.cat} style={{ backgroundColor: '#14532d', color: '#86efac', borderRadius: 999, fontSize: 11, fontWeight: 600, padding: '3px 10px' }}>
                  {c.cat} ({c.pct}%)
                </span>
              ))}
            </div>
          </div>
        )}

        <p style={{ color: '#64748b', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>All Categories</p>
        {categoryStats.map(c => (
          <div key={c.cat} className="rounded-xl p-3" style={{ backgroundColor: '#1e293b' }}>
            <div className="flex justify-between mb-2">
              <span style={{ color: '#e2e8f0', fontSize: 13, fontWeight: 600 }}>{c.cat}</span>
              <span style={{ color: c.pct >= 70 ? '#4ade80' : c.pct >= 40 ? '#fbbf24' : '#f87171', fontSize: 13, fontWeight: 700 }}>{c.pct}%</span>
            </div>
            <div style={{ height: 5, borderRadius: 999, backgroundColor: '#334155', overflow: 'hidden' }}>
              <div style={{ height: '100%', borderRadius: 999, transition: 'width 0.6s ease', width: `${c.pct}%`, background: c.pct >= 70 ? 'linear-gradient(to right,#4ade80,#22c55e)' : c.pct >= 40 ? 'linear-gradient(to right,#fbbf24,#f59e0b)' : 'linear-gradient(to right,#f87171,#ef4444)' }} />
            </div>
            <p style={{ color: '#475569', fontSize: 11, marginTop: 4, marginBottom: 0 }}>{c.done}/{c.total} mastered</p>
          </div>
        ))}
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // HOME
  // ══════════════════════════════════════════════════════════════════════════
  const todayDailyDone = typeof window !== 'undefined' && localStorage.getItem('ct_last_daily') === new Date().toISOString().split('T')[0];

  return (
    <div className="flex flex-col gap-5 py-4 px-4 max-w-lg mx-auto">
      {/* Stats bar */}
      <div className="flex items-center justify-between rounded-2xl px-5 py-3"
        style={{ background: 'linear-gradient(135deg,#1e293b,#0f172a)', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
        <div className="flex items-center gap-2">
          <Flame size={18} style={{ color: '#f59e0b' }} />
          <div>
            <p style={{ color: '#fbbf24', fontSize: 18, fontWeight: 900, lineHeight: 1, margin: 0 }}>{streak}</p>
            <p style={{ color: '#64748b', fontSize: 10, margin: 0 }}>day streak</p>
          </div>
        </div>
        <div className="text-center">
          <p style={{ color: '#f8fafc', fontSize: 13, fontWeight: 700, margin: 0 }}>GK Flashcards</p>
          <p style={{ color: '#475569', fontSize: 11, margin: 0 }}>CLAT Edition</p>
        </div>
        <div className="flex items-center gap-2">
          <Trophy size={18} style={{ color: '#a78bfa' }} />
          <div className="text-right">
            <p style={{ color: '#a78bfa', fontSize: 18, fontWeight: 900, lineHeight: 1, margin: 0 }}>{overallPct}%</p>
            <p style={{ color: '#64748b', fontSize: 10, margin: 0 }}>mastered</p>
          </div>
        </div>
      </div>

      {/* Quote */}
      <p style={{ color: '#475569', fontSize: 12, textAlign: 'center', fontStyle: 'italic', lineHeight: 1.6, margin: 0 }}>{todayQuote}</p>

      {/* Daily Dose */}
      <button onClick={startDaily}
        className="w-full rounded-2xl p-5 text-left relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#78350f,#92400e)', border: 'none', cursor: 'pointer', boxShadow: '0 4px 20px rgba(245,158,11,0.2)' }}>
        {todayDailyDone && (
          <span style={{ position: 'absolute', top: 12, right: 14, backgroundColor: '#4ade80', color: '#052e16', fontSize: 10, fontWeight: 700, borderRadius: 999, padding: '2px 8px' }}>✓ Done today</span>
        )}
        <div className="flex items-center gap-3 mb-2">
          <div style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: 'rgba(251,191,36,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <BookOpen size={20} style={{ color: '#fbbf24' }} />
          </div>
          <div>
            <p style={{ color: '#fbbf24', fontSize: 15, fontWeight: 800, margin: 0 }}>Daily Dose</p>
            <p style={{ color: '#d97706', fontSize: 11, margin: 0 }}>15 curated cards · SM2 spaced repetition</p>
          </div>
        </div>
        <p style={{ color: '#a16207', backgroundColor: 'rgba(251,191,36,0.15)', borderRadius: 8, padding: '6px 10px', fontSize: 12, margin: 0 }}>
          📖 Personalised daily deck based on what you need to review
        </p>
      </button>

      {/* Exam Blitz */}
      <button onClick={startSpeed}
        className="w-full rounded-2xl p-5 text-left"
        style={{ background: 'linear-gradient(135deg,#1e1b4b,#312e81)', border: 'none', cursor: 'pointer', boxShadow: '0 4px 20px rgba(99,102,241,0.2)' }}>
        <div className="flex items-center gap-3 mb-2">
          <div style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: 'rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Zap size={20} style={{ color: '#818cf8' }} />
          </div>
          <div>
            <p style={{ color: '#818cf8', fontSize: 15, fontWeight: 800, margin: 0 }}>Exam Blitz</p>
            <p style={{ color: '#6366f1', fontSize: 11, margin: 0 }}>90 seconds · CLAT exam pressure training</p>
          </div>
        </div>
        <p style={{ color: '#4338ca', backgroundColor: 'rgba(99,102,241,0.12)', borderRadius: 8, padding: '6px 10px', fontSize: 12, margin: 0 }}>
          ⚡ Simulate real CLAT GK section · Personal best: <strong style={{ color: '#818cf8' }}>{speedBest}</strong>
        </p>
      </button>

      {/* Browse & Swipe */}
      <button onClick={() => startBrowse()}
        className="w-full rounded-2xl p-5 text-left"
        style={{ background: 'linear-gradient(135deg,#0c4a6e,#0369a1)', border: 'none', cursor: 'pointer', boxShadow: '0 4px 20px rgba(14,165,233,0.2)' }}>
        <div className="flex items-center gap-3 mb-2">
          <div style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: 'rgba(14,165,233,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <RefreshCw size={20} style={{ color: '#38bdf8' }} />
          </div>
          <div>
            <p style={{ color: '#38bdf8', fontSize: 15, fontWeight: 800, margin: 0 }}>Browse &amp; Swipe</p>
            <p style={{ color: '#0284c7', fontSize: 11, margin: 0 }}>Swipe right = got it · left = review later</p>
          </div>
        </div>
        <p style={{ color: '#075985', backgroundColor: 'rgba(14,165,233,0.1)', borderRadius: 8, padding: '6px 10px', fontSize: 12, margin: 0 }}>
          🃏 Browse all {allCards.length} cards · Tinder-style · Missed cards auto-saved
        </p>
      </button>

      {/* Mastery Tracker */}
      <button onClick={() => setMode('mastery')}
        className="w-full rounded-2xl p-5 text-left"
        style={{ background: 'linear-gradient(135deg,#134e4a,#0f766e)', border: 'none', cursor: 'pointer', boxShadow: '0 4px 20px rgba(20,184,166,0.15)' }}>
        <div className="flex items-center gap-3 mb-3">
          <div style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: 'rgba(20,184,166,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <BarChart2 size={20} style={{ color: '#2dd4bf' }} />
          </div>
          <div>
            <p style={{ color: '#2dd4bf', fontSize: 15, fontWeight: 800, margin: 0 }}>Mastery Tracker</p>
            <p style={{ color: '#0d9488', fontSize: 11, margin: 0 }}>{totalMastered} / {allCards.length} cards mastered</p>
          </div>
        </div>
        <div style={{ height: 6, borderRadius: 999, backgroundColor: 'rgba(20,184,166,0.2)', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${overallPct}%`, background: 'linear-gradient(to right,#2dd4bf,#14b8a6)', borderRadius: 999 }} />
        </div>
      </button>

      {/* Mentor Tip */}
      <div className="rounded-xl p-4" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
        <p style={{ color: '#fbbf24', fontSize: 11, fontWeight: 700, marginBottom: 4, marginTop: 0 }}>💡 MENTOR TIP</p>
        <p style={{ color: '#94a3b8', fontSize: 12, lineHeight: 1.6, margin: 0 }}>
          CLAT GK tests current affairs from the last 12 months. Do your Daily Dose every morning — 15 minutes a day for 90 days covers the entire syllabus with spaced repetition.
        </p>
      </div>
    </div>
  );
}

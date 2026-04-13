'use client';
import React from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Brain, Zap, Trophy, Flame, Clock, CheckCircle, XCircle, ArrowLeft, ArrowRight } from 'lucide-react';

const SUPABASE_URL = 'https://fjswchcothephgtzqbgq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4';

interface Flashcard { id: string; question: string; answer: string; category: string; }
interface SM2State { repetitions: number; interval: number; easeFactor: number; nextReviewDate: string; }
interface CardState extends SM2State { id: string; }

function calculateSM2(state: SM2State, quality: number): SM2State {
  let { repetitions, interval, easeFactor } = state;
  if (quality >= 3) {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    repetitions += 1;
  } else { repetitions = 0; interval = 1; }
  easeFactor = Math.max(1.3, easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  const d = new Date(); d.setDate(d.getDate() + interval);
  return { repetitions, interval, easeFactor, nextReviewDate: d.toISOString().split('T')[0] };
}

const LS_MASTERED = 'ct_mastered_v2';
const LS_STREAK   = 'ct_streak';
const LS_LAST_DAY = 'ct_last_daily';
const LS_SPEED_PB = 'ct_speed_best';

const getMastered  = (): Set<string> => { try { return new Set(JSON.parse(localStorage.getItem(LS_MASTERED) || '[]')); } catch { return new Set(); } };
const saveMastered = (s: Set<string>) => localStorage.setItem(LS_MASTERED, JSON.stringify([...s]));
const getStreak    = (): number => parseInt(localStorage.getItem(LS_STREAK) || '0');
const getSpeedPB   = (): number => parseInt(localStorage.getItem(LS_SPEED_PB) || '0');
const todayStr     = (): string => new Date().toISOString().split('T')[0];
const isDailyDone  = (): boolean => localStorage.getItem(LS_LAST_DAY) === todayStr();

function seededRng(seed: number) {
  let s = seed;
  return () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff; };
}
function getDailyCards(cards: Flashcard[]): Flashcard[] {
  if (!cards.length) return [];
  const rng = seededRng(parseInt(todayStr().replace(/-/g, '')));
  return [...cards].sort(() => rng() - 0.5).slice(0, Math.min(10, cards.length));
}

type Mode = 'browse' | 'daily' | 'speed' | 'mastery';

// ── SwipeCard (standalone) ─────────────────────────────────────────────────
interface SwipeCardProps {
  card: Flashcard;
  onSwipe: (dir: 'left' | 'right') => void;
  onFlip: () => void;
  isFlipped: boolean;
  isDraggable: boolean;
}
function SwipeCard({ card, onSwipe, onFlip, isFlipped, isDraggable }: SwipeCardProps) {
  const x            = useMotionValue(0);
  const rotate       = useTransform(x, [-260, 260], [-16, 16]);
  const gotItOpacity = useTransform(x, [20, 110], [0, 1]);
  const revOpacity   = useTransform(x, [-20, -110], [0, 1]);
  const isDragging   = React.useRef(false);

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing select-none"
      style={{ x: isDraggable ? x : undefined, rotate: isDraggable ? rotate : undefined }}
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
      <div className="w-full h-full rounded-3xl bg-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] relative overflow-hidden">
        {isDraggable && (
          <motion.div style={{ opacity: gotItOpacity, rotate: -22 }}
            className="absolute top-7 left-5 z-20 border-[3px] border-green-500 bg-green-500/10 text-green-600 rounded-xl px-3 py-1 font-black text-lg uppercase tracking-widest pointer-events-none">
            GOT IT ✓
          </motion.div>
        )}
        {isDraggable && (
          <motion.div style={{ opacity: revOpacity, rotate: 22 }}
            className="absolute top-7 right-5 z-20 border-[3px] border-red-500 bg-red-500/10 text-red-600 rounded-xl px-3 py-1 font-black text-lg uppercase tracking-widest pointer-events-none">
            REVIEW ✗
          </motion.div>
        )}
        <AnimatePresence mode="wait" initial={false}>
          {!isFlipped ? (
            <motion.div key="front" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}
              className="absolute inset-0 rounded-3xl overflow-hidden bg-white">
              <div className="absolute top-5 left-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{card.category}</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center px-8" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
                <p className="text-slate-900 text-xl font-bold text-center leading-snug">{card.question}</p>
              </div>
              <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center gap-1.5">
                <span className="text-slate-400 text-xs">&#8635; Tap to flip</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-amber-400 to-yellow-400" />
            </motion.div>
          ) : (
            <motion.div key="back" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}
              className="absolute inset-0 rounded-3xl overflow-hidden bg-[#0f172a]">
              <div className="absolute top-5 left-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400">Answer</span>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-8 gap-5" style={{ paddingTop: '3.5rem', paddingBottom: '4.5rem' }}>
                <p className="text-white text-xl font-bold text-center leading-snug">{card.answer}</p>
                <div className="flex gap-3">
                  <button onClick={(e) => { e.stopPropagation(); onSwipe('right'); }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-700 hover:bg-green-600 text-white font-semibold text-sm active:scale-95 transition-all shadow-md">
                    <CheckCircle size={15} /> Knew it
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); onSwipe('left'); }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-700 hover:bg-red-600 text-white font-semibold text-sm active:scale-95 transition-all shadow-md">
                    <XCircle size={15} /> Forgot
                  </button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-blue-500 to-indigo-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function Flashcards() {
  const [allCards,   setAllCards]   = React.useState<Flashcard[]>([]);
  const [loading,    setLoading]    = React.useState(true);
  const [mode,       setMode]       = React.useState<Mode>('browse');
  const [selCat,     setSelCat]     = React.useState('All');
  const [cardStates, setCardStates] = React.useState<Record<string, CardState>>({});
  const [mastered,   setMastered]   = React.useState<Set<string>>(new Set());
  // Daily
  const [dailyCards, setDailyCards] = React.useState<Flashcard[]>([]);
  const [dIdx,       setDIdx]       = React.useState(0);
  const [dFlipped,   setDFlipped]   = React.useState(false);
  const [dScore,     setDScore]     = React.useState(0);
  const [dDone,      setDDone]      = React.useState(false);
  const [streak,     setStreak]     = React.useState(0);
  // Speed
  const [sCards,     setSCards]     = React.useState<Flashcard[]>([]);
  const [sIdx,       setSIdx]       = React.useState(0);
  const [sFlipped,   setSFlipped]   = React.useState(false);
  const [sCorrect,   setSCorrect]   = React.useState(0);
  const [sTotal,     setSTotal]     = React.useState(0);
  const [sTime,      setSTime]      = React.useState(60);
  const [sRunning,   setSRunning]   = React.useState(false);
  const [sDone,      setSDone]      = React.useState(false);
  const [pb,         setPb]         = React.useState(0);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  // Swipe / Browse
  const [swipeCards,       setSwipeCards]       = React.useState<Flashcard[]>([]);
  const [swipeIdx,         setSwipeIdx]         = React.useState(0);
  const [swipeFlipped,     setSwipeFlipped]     = React.useState(false);
  const [gotItIds,         setGotItIds]         = React.useState<string[]>([]);
  const [reviseIds,        setReviseIds]        = React.useState<string[]>([]);
  const [swipeDone,        setSwipeDone]        = React.useState(false);
  const [isRevisingMissed, setIsRevisingMissed] = React.useState(false);
  const handleSwipeRef = React.useRef<(dir: 'left' | 'right') => void>(() => {});

  React.useEffect(() => {
    fetch(`${SUPABASE_URL}/rest/v1/flashcard?select=*&order=id.asc&limit=500`, {
      headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
    })
      .then(r => r.json())
      .then((rows: any[]) => {
        if (Array.isArray(rows)) setAllCards(rows.map((r: any) => ({ id: String(r.id), question: r.question ?? '', answer: r.answer ?? '', category: r.category ?? '' })));
        setLoading(false);
      })
      .catch(() => setLoading(false));
    setMastered(getMastered()); setStreak(getStreak()); setPb(getSpeedPB());
  }, []);

  React.useEffect(() => {
    if (sRunning && sTime > 0) { timerRef.current = setTimeout(() => setSTime(t => t - 1), 1000); }
    else if (sRunning && sTime === 0) { endSpeed(); }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [sRunning, sTime]);

  React.useEffect(() => {
    if (mode !== 'browse' || !allCards.length || isRevisingMissed) return;
    const cards = selCat === 'All' ? [...allCards] : allCards.filter(c => c.category === selCat);
    setSwipeCards(cards); setSwipeIdx(0); setSwipeFlipped(false);
    setGotItIds([]); setReviseIds([]); setSwipeDone(false);
  }, [allCards, selCat, mode]);

  React.useEffect(() => {
    if (mode !== 'browse') return;
    const handler = (e: KeyboardEvent) => {
      if (e.code === 'Space') { setSwipeFlipped(f => !f); e.preventDefault(); }
      else if (e.code === 'ArrowRight') handleSwipeRef.current('right');
      else if (e.code === 'ArrowLeft')  handleSwipeRef.current('left');
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [mode]);

  function sm2(card: Flashcard, quality: number) {
    const prev = cardStates[card.id] || { repetitions: 0, interval: 1, easeFactor: 2.5, nextReviewDate: todayStr() };
    const next = calculateSM2(prev, quality);
    setCardStates(cs => ({ ...cs, [card.id]: { id: card.id, ...next } }));
    if (quality >= 4) { setMastered(m => { const n = new Set(m); n.add(card.id); saveMastered(n); return n; }); }
  }

  function startSpeed() {
    const shuffled = [...allCards].sort(() => Math.random() - 0.5);
    setSCards(shuffled); setSIdx(0); setSFlipped(false);
    setSCorrect(0); setSTotal(0); setSTime(60); setSRunning(true); setSDone(false);
  }
  function endSpeed() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setSRunning(false); setSDone(true);
    if (sCorrect > pb) { localStorage.setItem(LS_SPEED_PB, String(sCorrect)); setPb(sCorrect); }
  }

  function handleSwipe(dir: 'left' | 'right') {
    if (swipeDone || swipeIdx >= swipeCards.length) return;
    const card = swipeCards[swipeIdx];
    if (dir === 'right') setGotItIds(g => [...g, card.id]);
    else setReviseIds(r => [...r, card.id]);
    setSwipeFlipped(false);
    const next = swipeIdx + 1;
    if (next >= swipeCards.length) setSwipeDone(true);
    setSwipeIdx(next);
  }
  handleSwipeRef.current = handleSwipe;

  // ── TabBar ───────────────────────────────────────────────────────────────
  function TabBar() {
    const tabs = [
      { key: 'browse'  as Mode, label: 'Browse',  icon: <Brain size={12} /> },
      { key: 'daily'   as Mode, label: 'Daily',   icon: <Flame size={12} /> },
      { key: 'speed'   as Mode, label: 'Speed',   icon: <Zap size={12} /> },
      { key: 'mastery' as Mode, label: 'Mastery', icon: <Trophy size={12} /> },
    ];
    return (
      <div className="flex items-center bg-zinc-900 rounded-2xl p-1 gap-1">
        {tabs.map(t => (
          <button key={t.key} onClick={() => setMode(t.key)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200
              ${mode === t.key ? 'bg-red-600 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}>
            {t.icon}{t.label}
          </button>
        ))}
      </div>
    );
  }

  // ── FlipCard ──────────────────────────────────────────────────────────────
  function FlipCard({ question, answer, category, flippedState, onFlip, height = 'h-56' }: {
    question: string; answer: string; category: string;
    flippedState: boolean; onFlip: () => void; height?: string;
  }) {
    return (
      <div className={`relative ${height} cursor-pointer select-none`} onClick={onFlip} style={{ perspective: 1200 }}>
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateY: flippedState ? 180 : 0 }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          style={{ transformStyle: 'preserve-3d' }}>
          <div className="absolute inset-0 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden"
            style={{ backfaceVisibility: 'hidden' }}>
            <div className="absolute top-4 left-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{category}</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center px-6" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
              <p className="text-slate-900 text-lg font-bold text-center leading-snug">{question}</p>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <span className="text-slate-400 text-xs">&#8635; Tap to flip</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-amber-400 to-yellow-400" />
          </div>
          <div className="absolute inset-0 rounded-2xl bg-[#0f172a] shadow-[0_8px_30px_rgba(0,0,0,0.35)] overflow-hidden"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <div className="absolute top-4 left-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400">Answer</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center px-6" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
              <p className="text-white text-xl font-bold text-center leading-snug">{answer}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-blue-500 to-indigo-500" />
          </div>
        </motion.div>
      </div>
    );
  }

  if (loading) return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center bg-zinc-900 rounded-2xl p-1 gap-1 animate-pulse">
        {['Browse','Daily','Speed','Mastery'].map(l => <div key={l} className="flex-1 py-2 rounded-xl bg-zinc-800" />)}
      </div>
      <div className="h-64 rounded-3xl bg-zinc-900 animate-pulse" />
    </div>
  );

  // ── DAILY ──────────────────────────────────────────────────────────────────
  if (mode === 'daily') {
    if (!dailyCards.length) {
      return (
        <div className="flex flex-col gap-4">
          <TabBar />
          {isDailyDone() ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <CheckCircle size={44} className="text-green-500" />
              <h2 className="text-white font-bold text-lg">Daily Complete!</h2>
              <p className="text-zinc-400 text-sm text-center">You have finished today's challenge.<br />Come back tomorrow!</p>
              <div className="flex items-center gap-2 bg-zinc-900 rounded-2xl px-5 py-3 border border-zinc-800">
                <Flame size={20} className="text-orange-400" />
                <span className="text-white font-bold text-lg">{streak}</span>
                <span className="text-zinc-400 text-sm">day streak</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-5 py-8">
              <div className="text-5xl">🔥</div>
              <h2 className="text-white font-bold text-lg">Daily Challenge</h2>
              <p className="text-zinc-400 text-sm text-center">10 cards · ~5 minutes<br />Build your streak every day!</p>
              <div className="flex items-center gap-2 bg-zinc-900 rounded-2xl px-5 py-3 border border-zinc-800">
                <Flame size={20} className="text-orange-400" />
                <span className="text-white font-bold text-lg">{streak}</span>
                <span className="text-zinc-400 text-sm">day streak</span>
              </div>
              <button onClick={() => { setDailyCards(getDailyCards(allCards)); setDIdx(0); setDFlipped(false); setDScore(0); setDDone(false); }}
                className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-semibold transition-all active:scale-95">
                Start Today's Cards
              </button>
            </div>
          )}
        </div>
      );
    }
    if (dDone) {
      return (
        <div className="flex flex-col gap-4">
          <TabBar />
          <div className="flex flex-col items-center gap-5 py-6">
            <div className="text-5xl">{dScore >= 8 ? '🏆' : dScore >= 5 ? '🎉' : '📚'}</div>
            <h2 className="text-white font-bold text-xl">{dScore >= 8 ? 'Outstanding!' : dScore >= 5 ? 'Great Job!' : 'Keep Practicing!'}</h2>
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-3">
                <span className="text-white font-black text-2xl">{dScore}</span>
                <span className="text-zinc-500 text-xs">Score</span>
              </div>
              <div className="flex flex-col items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-3">
                <span className="text-orange-400 font-black text-2xl flex items-center gap-1"><Flame size={18} />{streak}</span>
                <span className="text-zinc-500 text-xs">Streak</span>
              </div>
            </div>
            <button onClick={() => { setDailyCards([]); setDIdx(0); setDFlipped(false); }}
              className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 rounded-2xl font-medium text-sm transition">
              Back to Daily
            </button>
          </div>
        </div>
      );
    }
    const dc = dailyCards[dIdx];
    return (
      <div className="flex flex-col gap-3">
        <TabBar />
        <div className="flex items-center justify-between px-0.5">
          <span className="text-zinc-600 text-xs">{dIdx + 1} <span className="text-zinc-700">of</span> {dailyCards.length}</span>
          <div className="flex items-center gap-1 text-orange-400 text-xs font-semibold"><Flame size={12} /> {streak} streak</div>
        </div>
        <div className="flex gap-1">
          {dailyCards.map((_, i) => (
            <div key={i} className={`h-1 flex-1 rounded-full transition-all ${i < dIdx ? 'bg-green-500' : i === dIdx ? 'bg-red-500' : 'bg-zinc-800'}`} />
          ))}
        </div>
        <FlipCard question={dc.question} answer={dc.answer} category={dc.category} flippedState={dFlipped} onFlip={() => setDFlipped(f => !f)} height="h-60 max-w-[300px] sm:max-w-xs mx-auto" />
        <AnimatePresence>
          {dFlipped && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="grid grid-cols-4 gap-1.5 max-w-[300px] sm:max-w-xs mx-auto w-full">
              {[
                { label: 'Again',   q: 1, color: 'text-red-400',   hover: 'hover:bg-red-950/40 hover:border-red-900' },
                { label: 'Hard',    q: 3, color: 'text-amber-400', hover: 'hover:bg-amber-950/40 hover:border-amber-900' },
                { label: 'Easy',    q: 4, color: 'text-green-400', hover: 'hover:bg-green-950/40 hover:border-green-900' },
                { label: 'Perfect', q: 5, color: 'text-blue-400',  hover: 'hover:bg-blue-950/40 hover:border-blue-900' },
              ].map(({ label, q, color, hover }) => (
                <button key={label} onClick={() => {
                  sm2(dc, q); if (q >= 3) setDScore(s => s + 1); setDFlipped(false);
                  if (dIdx + 1 >= dailyCards.length) {
                    localStorage.setItem(LS_LAST_DAY, todayStr());
                    const ns = getStreak() + 1; localStorage.setItem(LS_STREAK, String(ns)); setStreak(ns); setDDone(true);
                  } else { setDIdx(i => i + 1); }
                }} className={`py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold transition-all ${color} ${hover}`}>
                  {label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // ── SPEED ──────────────────────────────────────────────────────────────────
  if (mode === 'speed') {
    if (!sRunning && !sDone) {
      return (
        <div className="flex flex-col gap-4">
          <TabBar />
          <div className="flex flex-col items-center gap-5 py-8">
            <div className="text-5xl">⚡</div>
            <h2 className="text-white font-bold text-lg">Speed Round</h2>
            <p className="text-zinc-400 text-sm text-center">60 seconds · Answer as many as you can!</p>
            {pb > 0 && (
              <div className="flex items-center gap-2 bg-zinc-900 rounded-2xl px-5 py-3 border border-zinc-800">
                <Trophy size={16} className="text-amber-400" />
                <span className="text-zinc-400 text-sm">Best:</span>
                <span className="text-white font-bold">{pb} cards</span>
              </div>
            )}
            <button onClick={startSpeed}
              className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-semibold transition-all active:scale-95">
              Start Blitz
            </button>
          </div>
        </div>
      );
    }
    if (sDone) {
      return (
        <div className="flex flex-col gap-4">
          <TabBar />
          <div className="flex flex-col items-center gap-5 py-6">
            <div className="text-5xl">{sCorrect >= pb && sCorrect > 0 ? '🏆' : '⚡'}</div>
            <h2 className="text-white font-bold text-xl">{sCorrect >= pb && sCorrect > 0 ? 'New Personal Best!' : "Time's Up!"}</h2>
            <div className="flex gap-3">
              <div className="flex flex-col items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-3">
                <span className="text-green-400 font-black text-2xl">{sCorrect}</span>
                <span className="text-zinc-500 text-xs">Correct</span>
              </div>
              <div className="flex flex-col items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-3">
                <span className="text-red-400 font-black text-2xl">{sTotal - sCorrect}</span>
                <span className="text-zinc-500 text-xs">Missed</span>
              </div>
              <div className="flex flex-col items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-3">
                <span className="text-amber-400 font-black text-2xl">{pb}</span>
                <span className="text-zinc-500 text-xs">Best</span>
              </div>
            </div>
            <button onClick={() => { setSRunning(false); setSDone(false); }}
              className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 rounded-2xl font-medium text-sm transition">
              Try Again
            </button>
          </div>
        </div>
      );
    }
    const sc = sCards[sIdx] || sCards[0];
    if (!sc) return <div className="flex flex-col gap-4"><TabBar /><div className="text-center py-12 text-zinc-500 text-sm">No cards loaded.</div></div>;
    const timerPct   = (sTime / 60) * 100;
    const timerColor = sTime > 30 ? '#22c55e' : sTime > 15 ? '#f59e0b' : '#ef4444';
    return (
      <div className="flex flex-col gap-3">
        <TabBar />
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${timerPct}%`, backgroundColor: timerColor }} />
          </div>
          <div className="flex items-center gap-1 text-xs font-bold shrink-0" style={{ color: timerColor }}>
            <Clock size={12} /> {sTime}s
          </div>
        </div>
        <div className="flex items-center justify-between px-0.5 text-xs">
          <span className="text-green-400">✓ {sCorrect}</span>
          <span className="text-red-400">✗ {sTotal - sCorrect}</span>
        </div>
        <FlipCard question={sc.question} answer={sc.answer} category={sc.category} flippedState={sFlipped} onFlip={() => setSFlipped(f => !f)} height="h-60 max-w-[300px] sm:max-w-xs mx-auto" />
        <AnimatePresence>
          {sFlipped && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="grid grid-cols-2 gap-2 max-w-[300px] sm:max-w-xs mx-auto w-full">
              <button onClick={() => {
                setSTotal(t => t + 1); setSFlipped(false);
                const ni = sIdx + 1 < sCards.length ? sIdx + 1 : 0;
                if (ni === 0) setSCards(s => [...s].sort(() => Math.random() - 0.5)); setSIdx(ni);
              }} className="py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-red-400 font-semibold text-sm hover:bg-red-950/30 transition">
                ✗ Missed
              </button>
              <button onClick={() => {
                setSCorrect(c => c + 1); setSTotal(t => t + 1); setSFlipped(false);
                const ni = sIdx + 1 < sCards.length ? sIdx + 1 : 0;
                if (ni === 0) setSCards(s => [...s].sort(() => Math.random() - 0.5)); setSIdx(ni);
              }} className="py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-green-400 font-semibold text-sm hover:bg-green-950/30 transition">
                ✓ Got It
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // ── MASTERY ────────────────────────────────────────────────────────────────
  if (mode === 'mastery') {
    if (!allCards.length) return (
      <div className="flex flex-col gap-4">
        <TabBar />
        <div className="text-center text-zinc-500 py-12"><Brain size={36} className="mx-auto mb-2 opacity-20" /><p className="text-sm">Loading cards...</p></div>
      </div>
    );
    const cats    = Array.from(new Set(allCards.map(c => c.category))).sort();
    const grouped: Record<string, Flashcard[]> = {};
    cats.forEach(cat => { grouped[cat] = allCards.filter(c => c.category === cat); });
    const totalM     = mastered.size;
    const overallPct = Math.round((totalM / allCards.length) * 100);
    return (
      <div className="flex flex-col gap-4">
        <TabBar />
        <div className="bg-zinc-900/80 rounded-2xl p-4 border border-zinc-800">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white text-sm font-semibold">Overall Progress</span>
            <span className="text-zinc-400 text-xs">{overallPct}%</span>
          </div>
          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full transition-all duration-700" style={{ width: `${overallPct}%` }} />
          </div>
          <p className="text-zinc-600 text-xs mt-2">{totalM} of {allCards.length} cards mastered</p>
        </div>
        <div className="flex flex-col gap-1.5 overflow-y-auto max-h-80 pr-0.5" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}>
          {cats.map(cat => {
            const catCards = grouped[cat];
            const done     = catCards.filter(c => mastered.has(c.id)).length;
            const pct      = Math.round((done / catCards.length) * 100);
            const barColor = pct === 100 ? '#22c55e' : pct >= 50 ? '#f59e0b' : '#ef4444';
            return (
              <div key={cat} className="bg-zinc-900/80 rounded-xl px-3 py-2.5 border border-zinc-800/80">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-white text-xs font-medium">{cat}{pct === 100 ? ' 🏆' : ''}</span>
                  <span className="text-zinc-500 text-xs">{done}/{catCards.length}</span>
                </div>
                <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, backgroundColor: barColor }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ── BROWSE — Tinder Swipe Stack ────────────────────────────────────────────
  const categories = ['All', ...Array.from(new Set(allCards.map(c => c.category))).sort()];

  if (swipeDone) {
    return (
      <div className="flex flex-col gap-4">
        <TabBar />
        {!isRevisingMissed && (
          <div className="flex gap-1.5 overflow-x-auto pb-0.5" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setSelCat(cat)}
                className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap
                  ${selCat === cat ? 'bg-red-600 text-white' : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-zinc-800'}`}>
                {cat}
              </button>
            ))}
          </div>
        )}
        <div className="flex flex-col items-center gap-5 py-6">
          <div className="text-5xl">🎉</div>
          <h2 className="text-white font-bold text-xl">Deck Complete!</h2>
          <p className="text-zinc-500 text-sm">{isRevisingMissed ? 'Revision round done!' : `${swipeCards.length} cards reviewed`}</p>
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-1.5 bg-green-900/30 border border-green-800/50 rounded-2xl px-6 py-4">
              <span className="text-green-400 text-3xl font-black">{gotItIds.length}</span>
              <span className="text-zinc-400 text-xs font-medium">Got It ✓</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 bg-red-900/30 border border-red-800/50 rounded-2xl px-6 py-4">
              <span className="text-red-400 text-3xl font-black">{reviseIds.length}</span>
              <span className="text-zinc-400 text-xs font-medium">To Review</span>
            </div>
          </div>
          {reviseIds.length > 0 && (
            <button onClick={() => {
              const missed = allCards.filter(c => reviseIds.includes(c.id));
              setSwipeCards(missed); setSwipeIdx(0); setSwipeFlipped(false);
              setGotItIds([]); setReviseIds([]); setSwipeDone(false); setIsRevisingMissed(true);
            }}
              className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-semibold text-sm transition-all active:scale-95">
              📌 Revise {reviseIds.length} Missed Cards
            </button>
          )}
          <button onClick={() => {
            setIsRevisingMissed(false);
            const cards = selCat === 'All' ? [...allCards] : allCards.filter(c => c.category === selCat);
            setSwipeCards(cards); setSwipeIdx(0); setSwipeFlipped(false);
            setGotItIds([]); setReviseIds([]); setSwipeDone(false);
          }}
            className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 rounded-2xl font-medium text-sm transition">
            🔄 Start Over
          </button>
        </div>
      </div>
    );
  }

  const currentCard = swipeCards[swipeIdx];
  const progress    = swipeCards.length > 0 ? swipeIdx / swipeCards.length : 0;
  const remaining   = swipeCards.length - swipeIdx;

  if (!currentCard) return (
    <div className="flex flex-col gap-4">
      <TabBar />
      <div className="text-center text-zinc-500 py-12"><Brain size={36} className="mx-auto mb-2 opacity-20" /><p className="text-sm">No cards to show.</p></div>
    </div>
  );

  return (
    <div className="flex flex-col gap-3">
      <TabBar />
      {!isRevisingMissed && (
        <div className="flex gap-1.5 overflow-x-auto pb-0.5" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelCat(cat)}
              className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap
                ${selCat === cat ? 'bg-red-600 text-white' : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-zinc-800'}`}>
              {cat}
            </button>
          ))}
        </div>
      )}
      <div className="flex items-center gap-2 mx-auto w-full max-w-[300px] sm:max-w-[320px]">
        <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full transition-all duration-300" style={{ width: `${progress * 100}%` }} />
        </div>
        <span className="text-zinc-600 text-xs shrink-0">{swipeIdx}/{swipeCards.length}</span>
      </div>
      <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[320px] h-[400px] sm:h-[440px]">
        {swipeIdx + 2 < swipeCards.length && (
          <div className="absolute inset-0 rounded-3xl bg-white/70 shadow"
            style={{ transform: 'scale(0.86) translateY(22px)', zIndex: 1, transformOrigin: 'bottom center' }} />
        )}
        {swipeIdx + 1 < swipeCards.length && (
          <div className="absolute inset-0 rounded-3xl bg-white/85 shadow-md"
            style={{ transform: 'scale(0.93) translateY(11px)', zIndex: 2, transformOrigin: 'bottom center' }} />
        )}
        <SwipeCard
          key={currentCard.id + '-' + swipeIdx}
          card={currentCard}
          onSwipe={handleSwipe}
          onFlip={() => setSwipeFlipped(f => !f)}
          isFlipped={swipeFlipped}
          isDraggable={true}
        />
      </div>
      <div className="flex items-center justify-between px-1 pt-1 mx-auto w-full max-w-[300px] sm:max-w-[320px]">
        <button onClick={() => handleSwipe('left')}
          className="flex flex-col items-center gap-1 px-5 py-3 rounded-2xl bg-zinc-900 border border-zinc-700/80 text-red-400 hover:bg-red-950/30 hover:border-red-800/60 transition-all active:scale-95 text-xs font-semibold">
          <ArrowLeft size={18} />
          Review
        </button>
        <div className="flex flex-col items-center gap-0.5 text-center">
          <span className="text-zinc-500 text-xs font-medium">{remaining} left</span>
          <span className="text-zinc-700 text-[10px]">swipe or tap buttons</span>
        </div>
        <button onClick={() => handleSwipe('right')}
          className="flex flex-col items-center gap-1 px-5 py-3 rounded-2xl bg-zinc-900 border border-zinc-700/80 text-green-400 hover:bg-green-950/30 hover:border-green-800/60 transition-all active:scale-95 text-xs font-semibold">
          <ArrowRight size={18} />
          Got It
        </button>
      </div>
    </div>
  );
}

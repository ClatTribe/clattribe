'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Brain,
  Zap,
  Trophy,
  Flame,
  Clock,
  CheckCircle,
  XCircle,
} from 'lucide-react';

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

export default function Flashcards() {
  const [allCards,   setAllCards]   = React.useState<Flashcard[]>([]);
  const [loading,    setLoading]    = React.useState(true);
  const [mode,       setMode]       = React.useState<Mode>('browse');
  const [selCat,     setSelCat]     = React.useState('All');
  const [curIdx,     setCurIdx]     = React.useState(0);
  const [flipped,    setFlipped]    = React.useState(false);
  const [cardStates, setCardStates] = React.useState<Record<string, CardState>>({});
  const [mastered,   setMastered]   = React.useState<Set<string>>(new Set());
  const [dailyCards, setDailyCards] = React.useState<Flashcard[]>([]);
  const [dIdx,       setDIdx]       = React.useState(0);
  const [dFlipped,   setDFlipped]   = React.useState(false);
  const [dScore,     setDScore]     = React.useState(0);
  const [dDone,      setDDone]      = React.useState(false);
  const [streak,     setStreak]     = React.useState(0);
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

  const categories = React.useMemo(() => ['All', ...Array.from(new Set(allCards.map(c => c.category))).sort()], [allCards]);
  const filtered   = React.useMemo(() => selCat === 'All' ? allCards : allCards.filter(c => c.category === selCat), [allCards, selCat]);
  const card = filtered[curIdx];

  function toggleMastered(id: string) { const s = new Set(mastered); s.has(id) ? s.delete(id) : s.add(id); setMastered(s); saveMastered(s); }
  function sm2(c: Flashcard, q: number) {
    const prev = cardStates[c.id] || { repetitions: 0, interval: 1, easeFactor: 2.5, nextReviewDate: todayStr(), id: c.id };
    setCardStates(s => ({ ...s, [c.id]: { ...prev, ...calculateSM2(prev, q) } }));
    if (q >= 4) toggleMastered(c.id);
  }
  function goNext() { setCurIdx(i => Math.min(filtered.length - 1, i + 1)); setFlipped(false); }
  function goPrev() { setCurIdx(i => Math.max(0, i - 1)); setFlipped(false); }

  function startDaily() { setDailyCards(getDailyCards(allCards)); setDIdx(0); setDFlipped(false); setDScore(0); setDDone(false); setMode('daily'); }
  function dailyAnswer(correct: boolean) {
    const ns = dScore + (correct ? 1 : 0);
    if (dIdx + 1 >= dailyCards.length) {
      setDScore(ns); setDDone(true);
      const yest = new Date(); yest.setDate(yest.getDate() - 1);
      const last = localStorage.getItem(LS_LAST_DAY);
      const newStreak = last === yest.toISOString().split('T')[0] ? streak + 1 : 1;
      setStreak(newStreak); localStorage.setItem(LS_STREAK, String(newStreak)); localStorage.setItem(LS_LAST_DAY, todayStr());
    } else { if (correct) setDScore(s => s + 1); setDIdx(i => i + 1); setDFlipped(false); }
  }
  function startSpeed() { setSCards([...allCards].sort(() => Math.random() - 0.5)); setSIdx(0); setSFlipped(false); setSCorrect(0); setSTotal(0); setSTime(60); setSDone(false); setSRunning(true); setMode('speed'); }
  function speedAnswer(correct: boolean) {
    if (!sRunning) return;
    if (correct) setSCorrect(c => c + 1);
    setSTotal(t => t + 1); setSIdx(i => (i + 1) % sCards.length); setSFlipped(false);
  }
  function endSpeed() {
    setSRunning(false); setSDone(true);
    if (sCorrect > pb) { setPb(sCorrect); localStorage.setItem(LS_SPEED_PB, String(sCorrect)); }
  }

  const TabBar = () => (
    <div className="flex items-center bg-zinc-900 rounded-2xl p-1 gap-1">
      {([
        { id: 'browse',  label: 'Browse',  Icon: Brain,  color: 'text-red-400' },
        { id: 'daily',   label: 'Daily',   Icon: Flame,  color: 'text-orange-400' },
        { id: 'speed',   label: 'Speed',   Icon: Zap,    color: 'text-yellow-400' },
        { id: 'mastery', label: 'Mastery', Icon: Trophy, color: 'text-yellow-300' },
      ] as const).map(({ id, label, Icon, color }) => (
        <button
          key={id}
          onClick={() => {
            if (id === 'daily')  { startDaily(); return; }
            if (id === 'speed')  { setMode('speed'); setSRunning(false); setSDone(false); setSTotal(0); return; }
            setMode(id as Mode);
          }}
          className={`relative flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200
            ${mode === id
              ? id === 'browse'  ? 'bg-red-600 text-white shadow-lg shadow-red-900/40'
              : id === 'daily'   ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/40'
              : id === 'speed'   ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-900/40'
              : 'bg-yellow-400 text-black shadow-lg shadow-yellow-900/40'
              : `bg-transparent ${color} hover:bg-zinc-800`
            }`}
        >
          <Icon size={13} />
          {label}
          {id === 'daily' && streak > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[9px] rounded-full min-w-[14px] h-[14px] flex items-center justify-center font-bold px-0.5 leading-none">
              {streak > 9 ? '9+' : streak}
            </span>
          )}
        </button>
      ))}
    </div>
  );
  const FlipCard = ({ question, answer, category, flippedState, onFlip, height = 'h-56' }: {
    question: string; answer: string; category: string;
    flippedState: boolean; onFlip: () => void; height?: string;
  }) => (
    <motion.div className={`relative ${height} cursor-pointer select-none`} onClick={onFlip} style={{ perspective: 1200 }}>
      <motion.div
        className="absolute inset-0 rounded-2xl border border-zinc-800 bg-zinc-900 flex flex-col items-center justify-center p-6 gap-3"
        animate={{ rotateY: flippedState ? 180 : 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        style={{ backfaceVisibility: 'hidden' }}
      >
        <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-zinc-500 bg-zinc-800 px-2.5 py-1 rounded-full">{category}</span>
        <p className="text-white text-center font-medium leading-relaxed text-base">{question}</p>
        <span className="text-zinc-600 text-xs mt-1">tap to flip</span>
      </motion.div>
      <motion.div
        className="absolute inset-0 rounded-2xl border border-red-900/50 bg-gradient-to-br from-red-950/80 to-zinc-900 flex flex-col items-center justify-center p-6 gap-3"
        initial={{ rotateY: 180 }}
        animate={{ rotateY: flippedState ? 360 : 180 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        style={{ backfaceVisibility: 'hidden' }}
      >
        <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-red-500/70">Answer</span>
        <p className="text-red-200 text-2xl font-bold text-center leading-tight">{answer}</p>
      </motion.div>
    </motion.div>
  );

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-64 gap-3">
      <div className="animate-spin rounded-full h-10 w-10 border-2 border-zinc-700 border-t-red-500" />
      <p className="text-zinc-500 text-sm">Loading flashcards…</p>
    </div>
  );

  if (mode === 'daily') {
    if (dDone) {
      const pct = Math.round((dScore / dailyCards.length) * 100);
      return (
        <div className="flex flex-col gap-4">
          <TabBar />
          <div className="flex flex-col items-center gap-4 py-6">
            <div className="text-5xl">{pct === 100 ? '🎯' : pct >= 70 ? '💪' : '📚'}</div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">{pct === 100 ? 'Perfect!' : pct >= 70 ? 'Great job!' : 'Keep going!'}</h3>
              <p className="text-zinc-400 text-sm mt-1">
                <span className="text-red-400 font-bold text-lg">{dScore}</span>
                <span className="text-zinc-500">/{dailyCards.length} correct</span>
              </p>
            </div>
            <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-2xl px-5 py-2.5">
              <Flame size={18} className="text-orange-400" />
              <span className="text-orange-300 font-semibold">{streak} day streak</span>
            </div>
            <div className="flex gap-2 w-full">
              <button onClick={() => setMode('browse')} className="flex-1 py-2.5 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition text-sm font-medium">Browse</button>
              <button onClick={startSpeed} className="flex-1 py-2.5 rounded-xl bg-red-600 text-white hover:bg-red-700 transition text-sm font-medium flex items-center justify-center gap-1.5"><Zap size={14} />Speed</button>
            </div>
          </div>
        </div>
      );
    }
    const dc = dailyCards[dIdx];
    if (!dc) return null;
    return (
      <div className="flex flex-col gap-3">
        <TabBar />
        <div className="flex items-center justify-between px-0.5">
          <div className="flex items-center gap-1.5"><Flame size={14} className="text-orange-400" /><span className="text-orange-400 text-xs font-bold">{streak} day streak</span></div>
          <span className="text-zinc-500 text-xs font-medium">{dIdx + 1} / {dailyCards.length}</span>
          <span className="text-green-400 text-xs font-bold">{dScore} ✓</span>
        </div>
        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full" animate={{ width: `${(dIdx / dailyCards.length) * 100}%` }} transition={{ duration: 0.3 }} />
        </div>
        <FlipCard question={dc.question} answer={dc.answer} category={dc.category} flippedState={dFlipped} onFlip={() => setDFlipped(f => !f)} height="h-52" />
        <AnimatePresence>
          {dFlipped && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex gap-2">
              <button onClick={() => dailyAnswer(false)} className="flex-1 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white hover:border-red-800 hover:bg-red-950/30 transition flex items-center justify-center gap-1.5 text-sm font-medium"><XCircle size={15} className="text-red-400" /> Missed</button>
              <button onClick={() => dailyAnswer(true)} className="flex-1 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white hover:border-green-800 hover:bg-green-950/30 transition flex items-center justify-center gap-1.5 text-sm font-medium"><CheckCircle size={15} className="text-green-400" /> Got it!</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
  if (mode === 'speed') {
    if (sDone) {
      const isNewPB = sCorrect > 0 && sCorrect >= pb;
      return (
        <div className="flex flex-col gap-4">
          <TabBar />
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="text-5xl">{isNewPB ? '🎉' : '⚡'}</div>
            <h3 className="text-xl font-bold text-white">{isNewPB ? 'New Record!' : "Time's Up!"}</h3>
            <div className="grid grid-cols-3 gap-3 w-full">
              {[
                { val: sCorrect, label: 'Correct',  color: 'text-green-400' },
                { val: sTotal,   label: 'Attempted', color: 'text-zinc-300' },
                { val: pb,       label: 'Best',       color: 'text-yellow-400' },
              ].map(({ val, label, color }) => (
                <div key={label} className="bg-zinc-900 rounded-2xl p-3 text-center border border-zinc-800">
                  <p className={`text-2xl font-bold ${color}`}>{val}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
            {sTotal > 0 && <p className="text-zinc-500 text-sm">Accuracy <span className="text-white font-semibold">{Math.round((sCorrect / sTotal) * 100)}%</span></p>}
            <div className="flex gap-2 w-full">
              <button onClick={() => setMode('browse')} className="flex-1 py-2.5 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition text-sm font-medium">Browse</button>
              <button onClick={startSpeed} className="flex-1 py-2.5 rounded-xl bg-red-600 text-white hover:bg-red-700 transition text-sm font-medium flex items-center justify-center gap-1.5"><RotateCcw size={13} />Again</button>
            </div>
          </div>
        </div>
      );
    }
    if (!sRunning && sTotal === 0) {
      return (
        <div className="flex flex-col gap-4">
          <TabBar />
          <div className="flex flex-col items-center gap-4 py-6">
            <div className="w-20 h-20 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
              <Zap size={36} className="text-yellow-400" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">Speed Round</h3>
              <p className="text-zinc-400 text-sm mt-1">Flip cards as fast as you can in <span className="text-white font-semibold">60 seconds</span></p>
            </div>
            {pb > 0 && (
              <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-xl px-4 py-2">
                <Trophy size={14} className="text-yellow-400" />
                <span className="text-yellow-300 text-sm">Best: <strong>{pb}</strong> correct</span>
              </div>
            )}
            <button onClick={startSpeed} className="w-full py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2">
              <Zap size={16} /> Start
            </button>
            <button onClick={() => setMode('browse')} className="text-zinc-500 hover:text-zinc-300 text-sm transition">← Back to Browse</button>
          </div>
        </div>
      );
    }
    const sc = sCards[sIdx];
    if (!sc) return null;
    const timerPct   = (sTime / 60) * 100;
    const timerColor = sTime > 30 ? '#22c55e' : sTime > 10 ? '#f59e0b' : '#ef4444';
    return (
      <div className="flex flex-col gap-3">
        <TabBar />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5"><Clock size={14} style={{ color: timerColor }} /><span className="font-bold text-lg tabular-nums" style={{ color: timerColor }}>{sTime}s</span></div>
          <div className="text-sm font-medium"><span className="text-green-400">{sCorrect}</span><span className="text-zinc-600"> / {sTotal}</span></div>
          <div className="flex items-center gap-1 text-yellow-500"><Trophy size={12} /><span className="text-xs font-semibold">{pb}</span></div>
        </div>
        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div className="h-full rounded-full" animate={{ width: `${timerPct}%`, backgroundColor: timerColor }} transition={{ duration: 1, ease: 'linear' }} />
        </div>
        <FlipCard question={sc.question} answer={sc.answer} category={sc.category} flippedState={sFlipped} onFlip={() => !sFlipped && setSFlipped(true)} height="h-48" />
        <AnimatePresence>
          {sFlipped && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex gap-2">
              <button onClick={() => speedAnswer(false)} className="flex-1 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white hover:border-red-800 hover:bg-red-950/30 transition flex items-center justify-center gap-1.5 text-sm font-medium"><XCircle size={15} className="text-red-400" /> Missed</button>
              <button onClick={() => speedAnswer(true)} className="flex-1 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white hover:border-green-800 hover:bg-green-950/30 transition flex items-center justify-center gap-1.5 text-sm font-medium"><CheckCircle size={15} className="text-green-400" /> Got it!</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
  if (mode === 'mastery') {
    const grouped = allCards.reduce((acc, c) => { if (!acc[c.category]) acc[c.category] = []; acc[c.category].push(c); return acc; }, {} as Record<string, Flashcard[]>);
    const cats = Object.keys(grouped).sort();
    const totalM = mastered.size;
    const overallPct = allCards.length > 0 ? Math.round((totalM / allCards.length) * 100) : 0;
    return (
      <div className="flex flex-col gap-3">
        <TabBar />
        <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
          <div className="flex justify-between items-center mb-2">
            <span className="text-zinc-400 text-sm font-medium">Overall Mastery</span>
            <span className="text-white font-bold text-sm">{overallPct}%</span>
          </div>
          <div className="h-2.5 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-500 to-orange-400 rounded-full transition-all duration-700" style={{ width: `${overallPct}%` }} />
          </div>
          <p className="text-zinc-600 text-xs mt-2">{totalM} of {allCards.length} cards mastered</p>
        </div>
        <div className="flex flex-col gap-1.5 overflow-y-auto max-h-80 pr-0.5" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}>
          {cats.map(cat => {
            const catCards = grouped[cat];
            const done = catCards.filter(c => mastered.has(c.id)).length;
            const pct  = Math.round((done / catCards.length) * 100);
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

  if (!card) return (
    <div className="flex flex-col gap-4">
      <TabBar />
      <div className="text-center text-zinc-500 py-12"><Brain size={36} className="mx-auto mb-2 opacity-20" /><p className="text-sm">No cards in this category.</p></div>
    </div>
  );

  return (
    <div className="flex flex-col gap-3">
      <TabBar />
      <div className="flex gap-1.5 overflow-x-auto pb-0.5" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}>
        {categories.map(cat => (
          <button key={cat}
            onClick={() => { setSelCat(cat); setCurIdx(0); setFlipped(false); }}
            className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-150 whitespace-nowrap
              ${selCat === cat ? 'bg-red-600 text-white' : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border border-zinc-800'}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between px-0.5">
        <span className="text-zinc-600 text-xs">{curIdx + 1} <span className="text-zinc-700">of</span> {filtered.length}</span>
        {mastered.has(card.id) && (
          <span className="text-xs text-green-500 font-medium flex items-center gap-1"><CheckCircle size={11} /> Mastered</span>
        )}
      </div>
      <FlipCard question={card.question} answer={card.answer} category={card.category} flippedState={flipped} onFlip={() => setFlipped(f => !f)} height="h-56" />
      <AnimatePresence>
        {flipped && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="grid grid-cols-4 gap-1.5">
            {[
              { label: 'Again',   q: 1, color: 'text-red-400',   hover: 'hover:bg-red-950/40 hover:border-red-900' },
              { label: 'Hard',    q: 3, color: 'text-amber-400', hover: 'hover:bg-amber-950/40 hover:border-amber-900' },
              { label: 'Easy',    q: 4, color: 'text-green-400', hover: 'hover:bg-green-950/40 hover:border-green-900' },
              { label: 'Perfect', q: 5, color: 'text-blue-400',  hover: 'hover:bg-blue-950/40 hover:border-blue-900' },
            ].map(({ label, q, color, hover }) => (
              <button key={label} onClick={() => { sm2(card, q); goNext(); }}
                className={`py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold transition-all ${color} ${hover}`}>
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex items-center justify-between pt-0.5">
        <button onClick={goPrev} disabled={curIdx === 0} className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center disabled:opacity-25 hover:bg-zinc-800 transition">
          <ChevronLeft size={18} className="text-white" />
        </button>
        <button onClick={() => { setCurIdx(0); setFlipped(false); }} className="flex items-center gap-1 text-zinc-500 hover:text-zinc-300 text-xs transition font-medium">
          <RotateCcw size={12} /> Reset
        </button>
        <button onClick={goNext} disabled={curIdx === filtered.length - 1} className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center disabled:opacity-25 hover:bg-zinc-800 transition">
          <ChevronRight size={18} className="text-white" />
        </button>
      </div>
    </div>
  );
}

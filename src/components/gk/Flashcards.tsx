'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Brain,
  Bookmark,
  Share2,
  Zap,
  Trophy,
  Flame,
  Clock,
  CheckCircle,
  XCircle,
} from 'lucide-react';

const SUPABASE_URL = 'https://fjswchcothephgtzqbgq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4';

interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface SM2State {
  repetitions: number;
  interval: number;
  easeFactor: number;
  nextReviewDate: string;
}

interface CardState extends SM2State {
  id: string;
}

function calculateSM2(state: SM2State, quality: number): SM2State {
  let { repetitions, interval, easeFactor } = state;
  if (quality >= 3) {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    repetitions += 1;
  } else {
    repetitions = 0;
    interval = 1;
  }
  easeFactor = Math.max(1.3, easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  const d = new Date();
  d.setDate(d.getDate() + interval);
  return { repetitions, interval, easeFactor, nextReviewDate: d.toISOString().split('T')[0] };
}

const LS_MASTERED  = 'ct_mastered_v2';
const LS_STREAK    = 'ct_streak';
const LS_LAST_DAY  = 'ct_last_daily';
const LS_SPEED_PB  = 'ct_speed_best';

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
  const [allCards, setAllCards]   = React.useState<Flashcard[]>([]);
  const [loading,  setLoading]    = React.useState(true);
  const [mode,     setMode]       = React.useState<Mode>('browse');
  const [selCat,      setSelCat]      = React.useState('All');
  const [curIdx,      setCurIdx]      = React.useState(0);
  const [flipped,     setFlipped]     = React.useState(false);
  const [cardStates,  setCardStates]  = React.useState<Record<string, CardState>>({});
  const [mastered,    setMastered]    = React.useState<Set<string>>(new Set());
  const [dailyCards,  setDailyCards]  = React.useState<Flashcard[]>([]);
  const [dIdx,        setDIdx]        = React.useState(0);
  const [dFlipped,    setDFlipped]    = React.useState(false);
  const [dScore,      setDScore]      = React.useState(0);
  const [dDone,       setDDone]       = React.useState(false);
  const [dAlready,    setDAlready]    = React.useState(false);
  const [streak,      setStreak]      = React.useState(0);
  const [sCards,    setSCards]    = React.useState<Flashcard[]>([]);
  const [sIdx,      setSIdx]      = React.useState(0);
  const [sFlipped,  setSFlipped]  = React.useState(false);
  const [sCorrect,  setSCorrect]  = React.useState(0);
  const [sTotal,    setSTotal]    = React.useState(0);
  const [sTime,     setSTime]     = React.useState(60);
  const [sRunning,  setSRunning]  = React.useState(false);
  const [sDone,     setSDone]     = React.useState(false);
  const [pb,        setPb]        = React.useState(0);
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
    setMastered(getMastered()); setStreak(getStreak()); setPb(getSpeedPB()); setDAlready(isDailyDone());
  }, []);
  React.useEffect(() => {
    if (sRunning && sTime > 0) { timerRef.current = setTimeout(() => setSTime(t => t - 1), 1000); }
    else if (sRunning && sTime === 0) { endSpeed(); }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [sRunning, sTime]);
  const categories = React.useMemo(() => ['All', ...Array.from(new Set(allCards.map(c => c.category))).sort()], [allCards]);
  const filtered = React.useMemo(() => selCat === 'All' ? allCards : allCards.filter(c => c.category === selCat), [allCards, selCat]);
  const card = filtered[curIdx];
  function toggleMastered(id: string) { const s = new Set(mastered); s.has(id) ? s.delete(id) : s.add(id); setMastered(s); saveMastered(s); }
  function sm2(c: Flashcard, q: number) {
    const prev = cardStates[c.id] || { repetitions: 0, interval: 1, easeFactor: 2.5, nextReviewDate: todayStr(), id: c.id };
    const next = calculateSM2(prev, q);
    setCardStates(s => ({ ...s, [c.id]: { ...prev, ...next } }));
    if (q >= 4) toggleMastered(c.id);
  }
  function next() { setCurIdx(i => Math.min(filtered.length - 1, i + 1)); setFlipped(false); }
  function prev() { setCurIdx(i => Math.max(0, i - 1)); setFlipped(false); }
  function startDaily() { setDailyCards(getDailyCards(allCards)); setDIdx(0); setDFlipped(false); setDScore(0); setDDone(false); setMode('daily'); }
  function dailyAnswer(correct: boolean) {
    const newScore = dScore + (correct ? 1 : 0);
    if (dIdx + 1 >= dailyCards.length) { finishDaily(newScore); }
    else { if (correct) setDScore(s => s + 1); setDIdx(i => i + 1); setDFlipped(false); }
  }
  function finishDaily(score: number) {
    setDScore(score); setDDone(true);
    const yest = new Date(); yest.setDate(yest.getDate() - 1);
    const yStr = yest.toISOString().split('T')[0];
    const last = localStorage.getItem(LS_LAST_DAY);
    const ns = last === yStr ? streak + 1 : 1;
    setStreak(ns); localStorage.setItem(LS_STREAK, String(ns)); localStorage.setItem(LS_LAST_DAY, todayStr()); setDAlready(true);
  }
  function startSpeed() {
    setSCards([...allCards].sort(() => Math.random() - 0.5));
    setSIdx(0); setSFlipped(false); setSCorrect(0); setSTotal(0); setSTime(60); setSDone(false); setSRunning(true); setMode('speed');
  }
  function speedAnswer(correct: boolean) {
    if (!sRunning) return;
    if (correct) setSCorrect(c => c + 1);
    setSTotal(t => t + 1); setSIdx(i => (i + 1) % sCards.length); setSFlipped(false);
  }
  function endSpeed() {
    setSRunning(false); setSDone(true);
    if (sCorrect > pb) { setPb(sCorrect); localStorage.setItem(LS_SPEED_PB, String(sCorrect)); }
  }

  if (loading) return (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600" />
    </div>
  );

  if (mode === 'daily') {
    if (dDone) {
      const pct = Math.round((dScore / dailyCards.length) * 100);
      const msg = pct === 100 ? 'Perfect Score! 🎯' : pct >= 70 ? 'Great Job! 💪' : 'Keep Practising! 📚';
      return (
        <div className="flex flex-col items-center gap-5 py-8">
          <div className="text-6xl">🏆</div>
          <h2 className="text-2xl font-bold text-white">{msg}</h2>
          <p className="text-gray-400 text-lg">You scored <span className="text-red-400 font-bold text-2xl">{dScore}</span><span className="text-gray-500">/{dailyCards.length}</span></p>
          <div className="flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 rounded-2xl px-6 py-3">
            <Flame size={22} className="text-orange-400" />
            <span className="text-orange-300 font-semibold text-lg">{streak} Day Streak!</span>
          </div>
          <div className="flex gap-3 mt-2">
            <button onClick={() => setMode('browse')} className="px-5 py-2.5 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition text-sm font-medium">Browse Cards</button>
            <button onClick={startSpeed} className="px-5 py-2.5 rounded-xl bg-red-600 text-white hover:bg-red-700 transition text-sm font-medium flex items-center gap-2"><Zap size={15} /> Speed Round</button>
          </div>
        </div>
      );
    }
    const dc = dailyCards[dIdx];
    if (!dc) return null;
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <button onClick={() => setMode('browse')} className="text-gray-400 hover:text-white text-sm flex items-center gap-1 transition"><ChevronLeft size={15} /> Back</button>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-sm font-medium">{dIdx + 1} / {dailyCards.length}</span>
            <div className="flex items-center gap-1"><Flame size={15} className="text-orange-400" /><span className="text-orange-400 text-sm font-bold">{streak}</span></div>
          </div>
        </div>
        <div className="w-full bg-zinc-800 rounded-full h-2">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-500" style={{ width: `${(dIdx / dailyCards.length) * 100}%` }} />
        </div>
        <p className="text-xs text-center text-gray-500 uppercase tracking-widest">{dc.category}</p>
        <motion.div className="relative h-56 cursor-pointer" onClick={() => setDFlipped(f => !f)} style={{ perspective: 1000 }}>
          <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 flex flex-col items-center justify-center p-6"
            animate={{ rotateY: dFlipped ? 180 : 0 }} transition={{ duration: 0.4 }} style={{ backfaceVisibility: 'hidden' }}>
            <Brain size={20} className="text-red-500 mb-3" />
            <p className="text-white text-center text-lg font-medium leading-snug">{dc.question}</p>
            <p className="text-gray-500 text-sm mt-4">Tap to reveal</p>
          </motion.div>
          <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-950 to-zinc-900 border border-red-800/60 flex flex-col items-center justify-center p-6"
            initial={{ rotateY: 180 }} animate={{ rotateY: dFlipped ? 360 : 180 }} transition={{ duration: 0.4 }} style={{ backfaceVisibility: 'hidden' }}>
            <p className="text-xs text-red-400/70 uppercase tracking-widest mb-3">Answer</p>
            <p className="text-red-200 text-2xl font-bold text-center">{dc.answer}</p>
          </motion.div>
        </motion.div>
        <AnimatePresence>
          {dFlipped && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
              <button onClick={() => dailyAnswer(false)} className="flex-1 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white hover:bg-red-900/30 hover:border-red-700 transition flex items-center justify-center gap-2 font-medium"><XCircle size={17} className="text-red-400" /> Missed</button>
              <button onClick={() => dailyAnswer(true)} className="flex-1 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white hover:bg-green-900/30 hover:border-green-700 transition flex items-center justify-center gap-2 font-medium"><CheckCircle size={17} className="text-green-400" /> Got it!</button>
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
        <div className="flex flex-col items-center gap-5 py-8">
          <div className="text-6xl">{isNewPB ? '🎉' : '⚡'}</div>
          <h2 className="text-2xl font-bold text-white">{isNewPB ? 'New Record!' : "Time's Up!"}</h2>
          <div className="flex gap-8 text-center">
            <div><p className="text-3xl font-bold text-green-400">{sCorrect}</p><p className="text-gray-500 text-xs mt-1">Correct</p></div>
            <div><p className="text-3xl font-bold text-gray-400">{sTotal}</p><p className="text-gray-500 text-xs mt-1">Attempted</p></div>
            <div><p className="text-3xl font-bold text-yellow-400">{pb}</p><p className="text-gray-500 text-xs mt-1">Best</p></div>
          </div>
          {sTotal > 0 && <p className="text-gray-500 text-sm">Accuracy: <span className="text-white font-semibold">{Math.round((sCorrect / sTotal) * 100)}%</span></p>}
          <div className="flex gap-3 mt-2">
            <button onClick={() => setMode('browse')} className="px-5 py-2.5 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition text-sm font-medium">Browse</button>
            <button onClick={startSpeed} className="px-5 py-2.5 rounded-xl bg-red-600 text-white hover:bg-red-700 transition text-sm font-medium flex items-center gap-2"><RotateCcw size={14} /> Try Again</button>
          </div>
        </div>
      );
    }
    if (!sRunning && sTotal === 0) {
      return (
        <div className="flex flex-col items-center gap-5 py-8">
          <div className="text-6xl">⚡</div>
          <h2 className="text-2xl font-bold text-white">Speed Round</h2>
          <p className="text-gray-400 text-center max-w-xs text-sm leading-relaxed">Flip cards as fast as you can in <strong className="text-white">60 seconds</strong>. How many can you get right?</p>
          {pb > 0 && (
            <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-xl px-4 py-2">
              <Trophy size={16} className="text-yellow-400" />
              <span className="text-yellow-300 text-sm">Personal Best: <strong>{pb}</strong> correct</span>
            </div>
          )}
          <button onClick={startSpeed} className="mt-2 px-10 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition flex items-center gap-2 text-base"><Zap size={18} /> Start!</button>
          <button onClick={() => setMode('browse')} className="text-gray-500 hover:text-gray-300 text-sm transition">← Back</button>
        </div>
      );
    }
    const sc = sCards[sIdx];
    if (!sc) return null;
    const timerPct = (sTime / 60) * 100;
    const timerColor = sTime > 30 ? '#22c55e' : sTime > 10 ? '#f59e0b' : '#ef4444';
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2"><Clock size={16} style={{ color: timerColor }} /><span className="font-bold text-xl tabular-nums" style={{ color: timerColor }}>{sTime}s</span></div>
          <div className="text-sm"><span className="text-green-400 font-bold">{sCorrect}</span><span className="text-gray-500"> / {sTotal} correct</span></div>
          <div className="flex items-center gap-1 text-yellow-500"><Trophy size={13} /><span className="text-xs font-semibold">{pb}</span></div>
        </div>
        <div className="w-full bg-zinc-800 rounded-full h-2">
          <div className="h-2 rounded-full transition-all duration-1000" style={{ width: `${timerPct}%`, backgroundColor: timerColor }} />
        </div>
        <motion.div className="relative h-52 cursor-pointer" onClick={() => !sFlipped && setSFlipped(true)} style={{ perspective: 1000 }}>
          <motion.div className="absolute inset-0 rounded-2xl bg-zinc-900 border border-zinc-700 flex flex-col items-center justify-center p-5"
            animate={{ rotateY: sFlipped ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ backfaceVisibility: 'hidden' }}>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">{sc.category}</p>
            <p className="text-white text-center font-medium leading-snug">{sc.question}</p>
            <p className="text-gray-600 text-xs mt-3">Tap to flip</p>
          </motion.div>
          <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-950 to-zinc-900 border border-red-800/60 flex items-center justify-center p-5"
            initial={{ rotateY: 180 }} animate={{ rotateY: sFlipped ? 360 : 180 }} transition={{ duration: 0.3 }} style={{ backfaceVisibility: 'hidden' }}>
            <p className="text-red-200 text-2xl font-bold text-center">{sc.answer}</p>
          </motion.div>
        </motion.div>
        <AnimatePresence>
          {sFlipped && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
              <button onClick={() => speedAnswer(false)} className="flex-1 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white hover:bg-red-900/30 hover:border-red-700 transition flex items-center justify-center gap-2 font-medium"><XCircle size={17} className="text-red-400" /> Missed</button>
              <button onClick={() => speedAnswer(true)} className="flex-1 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white hover:bg-green-900/30 hover:border-green-700 transition flex items-center justify-center gap-2 font-medium"><CheckCircle size={17} className="text-green-400" /> Got it!</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
  if (mode === 'mastery') {
    const grouped = allCards.reduce((acc, c) => { if (!acc[c.category]) acc[c.category] = []; acc[c.category].push(c); return acc; }, {} as Record<string, Flashcard[]>);
    const cats = Object.keys(grouped).sort();
    const totalMastered = mastered.size;
    const overallPct = allCards.length > 0 ? Math.round((totalMastered / allCards.length) * 100) : 0;
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <button onClick={() => setMode('browse')} className="text-gray-400 hover:text-white flex items-center gap-1 text-sm transition"><ChevronLeft size={15} /> Back</button>
          <h2 className="text-white font-bold flex items-center gap-2"><Trophy size={16} className="text-yellow-400" /> Category Mastery</h2>
          <div />
        </div>
        <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-700">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400 text-sm">Overall Progress</span>
            <span className="text-white font-bold text-sm">{totalMastered} / {allCards.length} — {overallPct}%</span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-3">
            <div className="h-3 rounded-full bg-gradient-to-r from-red-500 to-orange-400 transition-all duration-700" style={{ width: `${overallPct}%` }} />
          </div>
        </div>
        <div className="flex flex-col gap-2 overflow-y-auto max-h-96 pr-1">
          {cats.map(cat => {
            const cards = grouped[cat];
            const done = cards.filter(c => mastered.has(c.id)).length;
            const pct  = Math.round((done / cards.length) * 100);
            const color = pct === 100 ? '#22c55e' : pct >= 50 ? '#f59e0b' : '#ef4444';
            return (
              <div key={cat} className="bg-zinc-900/70 rounded-xl p-3 border border-zinc-800">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-white text-sm font-medium">{cat}{pct === 100 ? ' 🏆' : ''}</span>
                  <span className="text-gray-400 text-xs">{done}/{cards.length}</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-1.5">
                  <div className="h-1.5 rounded-full transition-all duration-500" style={{ width: `${pct}%`, backgroundColor: color }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (!card) return (
    <div className="text-center text-gray-500 py-16"><Brain size={40} className="mx-auto mb-3 opacity-30" /><p>No cards found.</p></div>
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-4 gap-2">
        {[
          { id: 'browse',  label: 'Browse',  Icon: Brain,  active: 'bg-red-600 text-white',    badge: null },
          { id: 'daily',   label: 'Daily',   Icon: Flame,  active: 'bg-orange-600 text-white', badge: streak > 0 ? streak : null },
          { id: 'speed',   label: 'Speed',   Icon: Zap,    active: 'bg-yellow-500 text-black', badge: null },
          { id: 'mastery', label: 'Mastery', Icon: Trophy, active: 'bg-yellow-400 text-black', badge: null },
        ].map(({ id, label, Icon, active, badge }) => (
          <button key={id}
            onClick={() => {
              if (id === 'daily')   { startDaily(); return; }
              if (id === 'speed')   { setMode('speed'); setSRunning(false); setSDone(false); setSTotal(0); return; }
              setMode(id as Mode);
            }}
            className={`relative py-2 px-1 rounded-xl text-xs font-semibold transition flex flex-col items-center gap-1 ${mode === id ? active : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'}`}
          >
            <Icon size={14} />
            {label}
            {badge !== null && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold leading-none">
                {(badge as number) > 9 ? '9+' : badge}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {categories.map(cat => (
          <button key={cat} onClick={() => { setSelCat(cat); setCurIdx(0); setFlipped(false); }}
            className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium transition ${selCat === cat ? 'bg-red-600 text-white' : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'}`}>
            {cat}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{curIdx + 1} of {filtered.length}</span>
        <span>{mastered.has(card.id) ? '✅ Mastered' : ''}</span>
      </div>
      <motion.div className="relative h-60 cursor-pointer" onClick={() => setFlipped(f => !f)} style={{ perspective: 1000 }}>
        <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 flex flex-col items-center justify-center p-6"
          animate={{ rotateY: flipped ? 180 : 0 }} transition={{ duration: 0.45 }} style={{ backfaceVisibility: 'hidden' }}>
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">{card.category}</p>
          <Brain size={22} className="text-red-500 mb-3" />
          <p className="text-white text-center text-lg font-medium leading-snug">{card.question}</p>
          <p className="text-gray-500 text-sm mt-4">Tap to reveal answer</p>
        </motion.div>
        <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-950 to-zinc-900 border border-red-800/50 flex flex-col items-center justify-center p-6"
          initial={{ rotateY: 180 }} animate={{ rotateY: flipped ? 360 : 180 }} transition={{ duration: 0.45 }} style={{ backfaceVisibility: 'hidden' }}>
          <p className="text-xs text-red-400/70 uppercase tracking-widest mb-3">Answer</p>
          <p className="text-red-200 text-2xl font-bold text-center leading-tight">{card.answer}</p>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {flipped && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-2">
            {[
              { label: 'Again',   q: 1, cls: 'text-red-400    hover:bg-red-900/20' },
              { label: 'Hard',    q: 3, cls: 'text-yellow-400 hover:bg-yellow-900/20' },
              { label: 'Easy',    q: 4, cls: 'text-green-400  hover:bg-green-900/20' },
              { label: 'Perfect', q: 5, cls: 'text-blue-400   hover:bg-blue-900/20' },
            ].map(({ label, q, cls }) => (
              <button key={label} onClick={() => { sm2(card, q); next(); }}
                className={`flex-1 py-2 rounded-xl bg-zinc-800 border border-zinc-700 text-sm transition ${cls}`}>
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex items-center justify-between">
        <button onClick={prev} disabled={curIdx === 0} className="p-2 rounded-xl bg-zinc-800 disabled:opacity-30 hover:bg-zinc-700 transition">
          <ChevronLeft size={20} className="text-white" />
        </button>
        <button onClick={() => { setCurIdx(0); setFlipped(false); }} className="flex items-center gap-1 text-gray-400 hover:text-white text-sm transition">
          <RotateCcw size={13} /> Reset
        </button>
        <button onClick={next} disabled={curIdx === filtered.length - 1} className="p-2 rounded-xl bg-zinc-800 disabled:opacity-30 hover:bg-zinc-700 transition">
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
}

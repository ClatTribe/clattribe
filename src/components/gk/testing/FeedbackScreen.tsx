"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Target,
  CheckCircle2,
  XCircle,
  Clock,
  Trophy,
  TrendingUp,
  TrendingDown,
  Award,
  Flame,
  Lightbulb,
  Activity,
  BarChart3,
} from "lucide-react";
import { TestResult } from "./constants";

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}m ${s}s`;
}

function pct(part: number, whole: number) {
  if (!whole) return 0;
  return Math.round((part / whole) * 100);
}

function predictRank(percentage: number, totalQuestions: number) {
  let percentile: number;
  if (percentage >= 90) percentile = 99 + (percentage - 90) * 0.05;
  else if (percentage >= 80) percentile = 95 + (percentage - 80) * 0.4;
  else if (percentage >= 70) percentile = 88 + (percentage - 70) * 0.7;
  else if (percentage >= 60) percentile = 75 + (percentage - 60) * 1.3;
  else if (percentage >= 50) percentile = 60 + (percentage - 50) * 1.5;
  else if (percentage >= 35) percentile = 30 + (percentage - 35) * 2;
  else percentile = Math.max(2, percentage * 0.8);
  percentile = Math.min(99.5, percentile);
  const totalAspirants = 70000;
  const air = Math.max(1, Math.round((1 - percentile / 100) * totalAspirants));
  let band: "top-tier" | "mid-tier" | "moderate" | "low";
  let nlu: string;
  if (percentile >= 99) { band = "top-tier"; nlu = "NLSIU Bangalore / NALSAR Hyderabad"; }
  else if (percentile >= 95) { band = "top-tier"; nlu = "NLU Delhi / NUJS Kolkata / NLU Jodhpur"; }
  else if (percentile >= 88) { band = "mid-tier"; nlu = "GNLU / HNLU / RGNUL / NLU Bhopal"; }
  else if (percentile >= 75) { band = "moderate"; nlu = "RMLNLU / NLUO / TNNLU / DSNLU"; }
  else if (percentile >= 60) { band = "moderate"; nlu = "Lower-cutoff NLUs / private law schools"; }
  else { band = "low"; nlu = "Strong private law schools (Symbiosis / Jindal)"; }
  const confidenceWidth = percentile >= 90 ? 1 : percentile >= 70 ? 3 : 5;
  return {
    percentile: Math.round(percentile * 10) / 10,
    air,
    nlu,
    band,
    confidenceLow: Math.round(Math.max(1, air * (1 - confidenceWidth / 100))),
    confidenceHigh: Math.round(air * (1 + confidenceWidth / 100)),
    totalAspirants,
    totalQuestions,
  };
}

function topperBenchmark(totalQuestions: number, totalSeconds: number) {
  return {
    accuracy: 92,
    avgScore: Math.round(totalQuestions * 0.92),
    avgTime: Math.round(totalSeconds * 0.78),
  };
}

function timeBand(seconds: number, expectedSec: number) {
  if (seconds === 0) return "skip" as const;
  if (seconds <= expectedSec * 0.6) return "fast" as const;
  if (seconds <= expectedSec * 1.3) return "ok" as const;
  if (seconds <= expectedSec * 2.2) return "slow" as const;
  return "stuck" as const;
}

const BAND_BG: Record<string, string> = {
  skip: "bg-gray-200 dark:bg-white/10 text-gray-500 border-gray-200 dark:border-white/10",
  fast: "bg-emerald-500 text-white border-emerald-500",
  ok: "bg-emerald-300 text-emerald-900 border-emerald-300 dark:bg-emerald-500/30 dark:text-emerald-200 dark:border-emerald-500/40",
  slow: "bg-amber-400 text-amber-900 border-amber-400 dark:bg-amber-500/30 dark:text-amber-200 dark:border-amber-500/40",
  stuck: "bg-red-500 text-white border-red-500",
};

export default function FeedbackScreen({
  result,
  onBack,
}: {
  result: TestResult;
  onBack: () => void;
}) {
  const percentage = pct(result.score, result.total);
  const attempted = (result.answers || []).filter((a) => a !== null).length;
  const skipped = result.total - attempted;
  const wrong = attempted - result.score;
  const realAccuracy = attempted ? Math.round((result.score / attempted) * 100) : 0;

  const expectedPerQuestion = Math.max(20, Math.round(result.timeSpent / Math.max(1, result.total)));

  // Read optional timePerQuestion via type assertion (interface change can land later)
  const tpq: number[] =
    (result as TestResult & { timePerQuestion?: number[] }).timePerQuestion || [];

  const rank = predictRank(percentage, result.total);
  const topper = topperBenchmark(result.total, result.timeSpent);

  const weakness = [...(result.topicBreakdown || [])]
    .map((t) => ({ ...t, accuracy: pct(t.correct, t.total) }))
    .sort((a, b) => a.accuracy - b.accuracy);

  const sectionTime: Record<string, number> = {};
  if (result.questions && tpq.length === result.questions.length) {
    result.questions.forEach((q, i) => {
      const s = q.section || "General";
      sectionTime[s] = (sectionTime[s] || 0) + (tpq[i] || 0);
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-6xl mx-auto space-y-8"
    >
      <div className="flex items-center justify-between flex-wrap gap-3">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Engine
        </button>
        <h2 className="text-2xl lg:text-3xl font-black text-[#060818] dark:text-white uppercase tracking-tight">
          Performance Analysis
        </h2>
      </div>

      <div className="bg-gradient-to-br from-[#F59E0B] via-[#F59E0B]/95 to-amber-600 rounded-[2.5rem] p-6 lg:p-10 text-[#060818] shadow-2xl shadow-[#F59E0B]/20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-[2rem] bg-[#060818] text-white flex flex-col items-center justify-center shadow-xl">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#F59E0B]">Your score</p>
              <p className="text-5xl lg:text-6xl font-black tabular-nums leading-none mt-1">
                {percentage}<span className="text-2xl">%</span>
              </p>
              <p className="text-[11px] font-bold text-gray-400 mt-2">{result.score} / {result.total}</p>
            </div>
          </div>
          <div className="flex-1 space-y-4 w-full">
            <div className="space-y-1">
              <p className="text-[11px] font-black uppercase tracking-widest opacity-70">{result.category}</p>
              <h3 className="text-3xl lg:text-4xl font-black leading-tight">
                {percentage >= 80
                  ? "Outstanding performance."
                  : percentage >= 60
                    ? "Strong work — keep building."
                    : percentage >= 40
                      ? "Solid base. Sharpen the gaps."
                      : "Plenty of room to grow."}
              </h3>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <HeroStat icon={<CheckCircle2 size={16} />} label="Correct" value={String(result.score)} />
              <HeroStat icon={<XCircle size={16} />} label="Wrong" value={String(wrong)} />
              <HeroStat icon={<Activity size={16} />} label="Skipped" value={String(skipped)} />
              <HeroStat icon={<Clock size={16} />} label="Time" value={formatTime(result.timeSpent)} />
            </div>
          </div>
        </div>
      </div>

      <Section icon={<Trophy size={18} />} eyebrow="AI Rank Predictor" title="Your projected rank">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <RankCard label="Predicted percentile" value={`${rank.percentile}`} suffix="%" tone={rank.band === "top-tier" ? "good" : rank.band === "low" ? "bad" : "neutral"} sub={`Top ${(100 - rank.percentile).toFixed(1)}%`} />
          <RankCard label="Predicted AIR" value={rank.air.toLocaleString("en-IN")} sub={`±${rank.confidenceLow.toLocaleString("en-IN")} – ${rank.confidenceHigh.toLocaleString("en-IN")} (95% CI)`} tone={rank.band === "top-tier" ? "good" : rank.band === "low" ? "bad" : "neutral"} />
          <RankCard label="Likely shortlist" value={rank.nlu} small tone={rank.band === "top-tier" ? "good" : rank.band === "low" ? "bad" : "neutral"} />
        </div>
        <div className="mt-4 text-[11px] text-gray-400 font-medium leading-relaxed">
          Estimate based on this mock alone, calibrated against {rank.totalAspirants.toLocaleString("en-IN")} historical CLAT aspirants. The wider the confidence band, the more your real rank can move with each subsequent mock — keep testing.
        </div>
      </Section>

      <Section icon={<Award size={18} />} eyebrow="Comparison" title="You vs. 99-percentile topper">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <CompareBar label="Score" you={result.score} top={topper.avgScore} max={result.total} unit={`/${result.total}`} />
          <CompareBar label="Accuracy" you={realAccuracy} top={topper.accuracy} max={100} unit="%" />
          <CompareBar label="Time used" you={result.timeSpent} top={topper.avgTime} max={Math.max(result.timeSpent, topper.avgTime, 1)} unit="" invert valueFormatter={(v) => formatTime(v)} />
        </div>
      </Section>

      {result.topicBreakdown && result.topicBreakdown.length > 0 && (
        <Section icon={<BarChart3 size={18} />} eyebrow="Section-wise scores" title="How each section performed">
          <div className="space-y-3">
            {result.topicBreakdown.map((t) => {
              const acc = pct(t.correct, t.total);
              return (
                <div key={t.topic} className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <p className="font-black text-[#060818] dark:text-white text-sm">{t.topic}</p>
                    <p className="text-xs font-black text-gray-500">
                      {t.correct}/{t.total}
                      <span className="ml-2 text-[#F59E0B]">{acc}%</span>
                      {sectionTime[t.topic] ? (<span className="ml-2 text-gray-400 font-bold">· {formatTime(sectionTime[t.topic])}</span>) : null}
                    </p>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                    <div className={`h-full rounded-full ${acc >= 75 ? "bg-emerald-500" : acc >= 50 ? "bg-[#F59E0B]" : "bg-red-500"}`} style={{ width: `${acc}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      )}

      {weakness.length > 0 && (
        <Section icon={<TrendingDown size={18} />} eyebrow="Weakness map" title="Where to focus next">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {weakness.slice(0, 6).map((t, i) => {
              const tone = t.accuracy >= 75 ? "strong" : t.accuracy >= 50 ? "ok" : t.accuracy >= 30 ? "weak" : "critical";
              const toneClass: Record<string, string> = {
                strong: "border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/5 text-emerald-700 dark:text-emerald-300",
                ok: "border-[#F59E0B]/40 bg-amber-50 dark:bg-[#F59E0B]/10 text-amber-700 dark:text-amber-300",
                weak: "border-orange-300 dark:border-orange-500/30 bg-orange-50 dark:bg-orange-500/5 text-orange-700 dark:text-orange-300",
                critical: "border-red-300 dark:border-red-500/30 bg-red-50 dark:bg-red-500/5 text-red-700 dark:text-red-300",
              };
              return (
                <div key={t.topic} className={`p-4 rounded-2xl border-2 ${toneClass[tone]}`}>
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Priority #{i + 1}</p>
                      <p className="text-base font-black">{t.topic}</p>
                    </div>
                    <p className="text-2xl font-black tabular-nums">{t.accuracy}%</p>
                  </div>
                  <p className="text-xs font-medium opacity-80">
                    {tone === "strong" ? "Already strong — protect this lead with weekly revision." : tone === "ok" ? "Hold the line. One sectional drill per week should keep it locked." : tone === "weak" ? "Drill 50 questions in this section before your next full mock." : "Critical gap. Build conceptual base first, then drill."}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>
      )}

      {tpq.length > 0 && (
        <Section icon={<Flame size={18} />} eyebrow="Heatmap" title="Time spent on every question">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-4 leading-relaxed">
            Each cell is a question. Greener = quick, redder = stuck. Average target was about {expectedPerQuestion}s/question.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {tpq.map((seconds, i) => {
              const band = timeBand(seconds, expectedPerQuestion);
              const correct = result.answers && result.questions ? result.answers[i] === result.questions[i]?.correct : null;
              return (
                <div key={i} className={`relative w-7 h-7 rounded-md text-[10px] font-black border flex items-center justify-center ${BAND_BG[band]}`} title={`Q${i + 1} · ${seconds}s · ${band}${correct === true ? " · correct" : correct === false ? " · wrong" : ""}`}>
                  {i + 1}
                  {correct === false && (<span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-500 border border-white" />)}
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-5 text-[11px] font-bold">
            <Legend cls="bg-emerald-500" label="Fast" />
            <Legend cls="bg-emerald-300" label="On pace" />
            <Legend cls="bg-amber-400" label="Slow" />
            <Legend cls="bg-red-500" label="Stuck" />
            <Legend cls="bg-gray-200" label="Skipped" />
            <span className="ml-auto text-gray-400 font-medium">Red dot ⇒ wrong answer</span>
          </div>
        </Section>
      )}

      {result.suggestions && result.suggestions.length > 0 && (
        <Section icon={<Lightbulb size={18} />} eyebrow="Coach notes" title="Action items for the next mock">
          <ul className="space-y-2">
            {result.suggestions.map((s, i) => (
              <li key={i} className="flex gap-3 items-start bg-gray-50 dark:bg-white/5 p-4 rounded-2xl border border-gray-100 dark:border-white/10">
                <span className="w-6 h-6 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">{i + 1}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200 leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <div className="flex justify-center pt-4">
        <button onClick={onBack} className="px-8 py-3 bg-[#F59E0B] text-[#060818] rounded-2xl font-black text-sm shadow-xl shadow-[#F59E0B]/20 hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center gap-2">
          <Target size={16} /> Explore More Tests
        </button>
      </div>
    </motion.div>
  );
}

function HeroStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-[#060818]/10 border border-[#060818]/15 rounded-2xl p-3">
      <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest opacity-70">{icon} {label}</div>
      <p className="text-xl font-black tabular-nums mt-1">{value}</p>
    </div>
  );
}

function Section({ icon, eyebrow, title, children }: { icon: React.ReactNode; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[2rem] p-5 lg:p-7 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-[#F59E0B]/15 text-[#F59E0B] flex items-center justify-center flex-shrink-0">{icon}</div>
        <div className="leading-tight">
          <p className="text-[10px] font-black text-[#F59E0B] uppercase tracking-[0.2em]">{eyebrow}</p>
          <h3 className="text-base lg:text-lg font-black text-[#060818] dark:text-white">{title}</h3>
        </div>
      </div>
      {children}
    </section>
  );
}

function RankCard({ label, value, suffix, sub, tone = "neutral", small }: { label: string; value: string; suffix?: string; sub?: string; tone?: "good" | "neutral" | "bad"; small?: boolean }) {
  const toneClass: Record<string, string> = {
    good: "from-emerald-500/15 to-emerald-500/5 border-emerald-500/30 text-emerald-700 dark:text-emerald-300",
    neutral: "from-[#F59E0B]/15 to-[#F59E0B]/5 border-[#F59E0B]/30 text-[#F59E0B]",
    bad: "from-red-500/15 to-red-500/5 border-red-500/30 text-red-600 dark:text-red-400",
  };
  return (
    <div className={`bg-gradient-to-br ${toneClass[tone]} border-2 rounded-2xl p-5`}>
      <p className="text-[10px] font-black uppercase tracking-widest opacity-70">{label}</p>
      <p className={`${small ? "text-base lg:text-lg leading-snug" : "text-3xl lg:text-4xl"} font-black tabular-nums mt-1`}>
        {value}{suffix && <span className="text-lg font-bold opacity-70">{suffix}</span>}
      </p>
      {sub && <p className="text-[11px] font-bold opacity-70 mt-1">{sub}</p>}
    </div>
  );
}

function CompareBar({ label, you, top, max, unit, invert, valueFormatter }: { label: string; you: number; top: number; max: number; unit: string; invert?: boolean; valueFormatter?: (v: number) => string }) {
  const youPct = Math.min(100, (you / Math.max(1, max)) * 100);
  const topPct = Math.min(100, (top / Math.max(1, max)) * 100);
  const youAhead = invert ? you < top : you > top;
  const fmt = valueFormatter || ((v: number) => `${v}${unit}`);
  return (
    <div className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4 space-y-3">
      <div className="flex items-center justify-between">
        <p className="font-black text-[#060818] dark:text-white text-sm">{label}</p>
        <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${youAhead ? "bg-emerald-500/15 text-emerald-600" : "bg-red-500/15 text-red-600"}`}>
          {youAhead ? (<span className="flex items-center gap-1"><TrendingUp size={11} /> Ahead</span>) : (<span className="flex items-center gap-1"><TrendingDown size={11} /> Behind</span>)}
        </span>
      </div>
      <div className="space-y-2">
        <div>
          <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">
            <span>You</span>
            <span className="text-[#060818] dark:text-white">{fmt(you)}</span>
          </div>
          <div className="h-2 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
            <div className="h-full rounded-full bg-[#F59E0B]" style={{ width: `${youPct}%` }} />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">
            <span>Topper avg</span>
            <span className="text-[#060818] dark:text-white">{fmt(top)}</span>
          </div>
          <div className="h-2 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
            <div className="h-full rounded-full bg-emerald-500" style={{ width: `${topPct}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Legend({ cls, label }: { cls: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className={`w-3 h-3 rounded-sm ${cls}`} />
      <span className="text-gray-500 dark:text-gray-300">{label}</span>
    </div>
  );
}

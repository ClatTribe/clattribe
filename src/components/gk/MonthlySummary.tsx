"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronDown,
  ChevronUp,
  Globe,
  Landmark,
  TrendingUp,
  Scale,
  Building2,
  Trophy,
  Award,
  User,
  FileText,
  Rocket,
  Target,
  Sparkles,
} from "lucide-react";
import { gkSupabase } from "@/lib/gk-supabase";

// ---------- Types ----------

type SectionKey =
  | "Polity & Constitution"
  | "Economy & Budget"
  | "International Relations"
  | "Legal Updates"
  | "Government Schemes"
  | "Sports"
  | "Awards & Honours"
  | "Persons in News"
  | "Books, Reports & Indices"
  | "Defence & Space";

interface SummaryEvent {
  rank: number;
  title: string;
  date: string;
  body: string;
  clat_angle: string;
  connect_to: string[];
}

interface SummarySection {
  section: SectionKey;
  intro_tagline: string | null;
  events: SummaryEvent[];
  published_at: string | null;
}

interface PublishedMonth {
  year: number;
  month: number;
}

// ---------- Section meta ----------

const SECTION_META: Record<
  SectionKey,
  { emoji: string; icon: React.ComponentType<{ size?: number; className?: string }> }
> = {
  "Polity & Constitution": { emoji: "🏛️", icon: Landmark },
  "Economy & Budget": { emoji: "💹", icon: TrendingUp },
  "International Relations": { emoji: "🌍", icon: Globe },
  "Legal Updates": { emoji: "⚖️", icon: Scale },
  "Government Schemes": { emoji: "🏗️", icon: Building2 },
  "Sports": { emoji: "🏆", icon: Trophy },
  "Awards & Honours": { emoji: "🎖️", icon: Award },
  "Persons in News": { emoji: "👤", icon: User },
  "Books, Reports & Indices": { emoji: "📚", icon: FileText },
  "Defence & Space": { emoji: "🚀", icon: Rocket },
};

const SECTION_ORDER: SectionKey[] = [
  "Polity & Constitution",
  "Economy & Budget",
  "International Relations",
  "Legal Updates",
  "Government Schemes",
  "Sports",
  "Awards & Honours",
  "Persons in News",
  "Books, Reports & Indices",
  "Defence & Space",
];

// ---------- Helpers ----------

function monthName(month: number): string {
  return new Date(2000, month - 1, 1).toLocaleString("en-IN", { month: "long" });
}

function sectionAnchor(section: SectionKey): string {
  return section
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// ---------- Main component ----------

export default function MonthlySummary() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [availableMonths, setAvailableMonths] = React.useState<PublishedMonth[]>([]);
  const [selected, setSelected] = React.useState<PublishedMonth | null>(null);
  const [sections, setSections] = React.useState<SummarySection[]>([]);

  // 1. On mount: fetch the list of published months.
  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error: err } = await gkSupabase
          .from("monthly_summary_published")
          .select("year, month")
          .order("year", { ascending: false })
          .order("month", { ascending: false });

        if (cancelled) return;

        if (err) {
          setError(err.message);
          setLoading(false);
          return;
        }

        // Deduplicate (year, month) — view returns one row per section.
        const seen = new Set<string>();
        const months: PublishedMonth[] = [];
        for (const row of data ?? []) {
          const key = `${row.year}-${row.month}`;
          if (!seen.has(key)) {
            seen.add(key);
            months.push({ year: row.year, month: row.month });
          }
        }
        setAvailableMonths(months);

        if (months.length > 0) {
          setSelected(months[0]); // default to most recent
        } else {
          setLoading(false);
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Failed to load");
          setLoading(false);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // 2. When `selected` changes, fetch the sections for that month.
  React.useEffect(() => {
    if (!selected) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error: err } = await gkSupabase.rpc("get_monthly_summary", {
          p_year: selected.year,
          p_month: selected.month,
        });

        if (cancelled) return;

        if (err) {
          setError(err.message);
          setSections([]);
          setLoading(false);
          return;
        }

        setSections((data ?? []) as SummarySection[]);
        setLoading(false);
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Failed to load month");
          setLoading(false);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [selected]);

  // ---------- Render ----------

  if (loading && !selected) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  if (availableMonths.length === 0) {
    return <EmptyState />;
  }

  const totalEvents = sections.reduce((acc, s) => acc + (s.events?.length ?? 0), 0);

  return (
    <div className="space-y-10">
      {/* Header + month picker */}
      <Header
        selected={selected!}
        availableMonths={availableMonths}
        totalEvents={totalEvents}
        onSelect={setSelected}
      />

      {/* Sticky table of contents */}
      <TableOfContents sections={sections} />

      {/* 10 sections */}
      <div className="space-y-12">
        {SECTION_ORDER.map((key) => {
          const sec = sections.find((s) => s.section === key);
          if (!sec) return null;
          return <SectionBlock key={key} section={sec} />;
        })}
      </div>

      {/* Bottom navigation: previous / next month */}
      <MonthNavFooter
        selected={selected!}
        availableMonths={availableMonths}
        onSelect={setSelected}
      />
    </div>
  );
}

// ---------- Sub-components ----------

function Header({
  selected,
  availableMonths,
  totalEvents,
  onSelect,
}: {
  selected: PublishedMonth;
  availableMonths: PublishedMonth[];
  totalEvents: number;
  onSelect: (m: PublishedMonth) => void;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div className="space-y-2">
        <p className="text-[10px] font-black text-[#F59E0B] uppercase tracking-[0.2em]">
          Monthly Compendium
        </p>
        <h1 className="text-3xl sm:text-4xl font-black text-[#060818] dark:text-white tracking-tight">
          {monthName(selected.month)} {selected.year} Summary
        </h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium text-sm sm:text-base">
          {totalEvents} events · 10 sections · CLAT-ready revision asset.
        </p>
      </div>

      {/* Month picker */}
      {availableMonths.length > 1 && (
        <div className="relative">
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl font-bold text-sm text-[#060818] dark:text-white hover:border-[#F59E0B]/60 transition-all"
          >
            <Calendar size={16} className="text-[#F59E0B]" />
            {monthName(selected.month)} {selected.year}
            {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-[#060818] border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden z-50 max-h-72 overflow-y-auto">
              {availableMonths.map((m) => {
                const isCurrent =
                  m.year === selected.year && m.month === selected.month;
                return (
                  <button
                    key={`${m.year}-${m.month}`}
                    onClick={() => {
                      onSelect(m);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm font-bold transition-colors ${
                      isCurrent
                        ? "bg-[#F59E0B]/10 text-[#F59E0B]"
                        : "text-[#060818] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                    }`}
                  >
                    {monthName(m.month)} {m.year}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function TableOfContents({ sections }: { sections: SummarySection[] }) {
  if (!sections.length) return null;

  return (
    <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-5 sm:p-6 border border-gray-100 dark:border-white/10">
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">
        Jump to section
      </p>
      <div className="flex flex-wrap gap-2">
        {SECTION_ORDER.map((key) => {
          const sec = sections.find((s) => s.section === key);
          if (!sec) return null;
          const count = sec.events?.length ?? 0;
          return (
            <a
              key={key}
              href={`#${sectionAnchor(key)}`}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all ${
                count > 0
                  ? "bg-white dark:bg-white/10 text-[#060818] dark:text-white border border-gray-200 dark:border-white/10 hover:border-[#F59E0B]"
                  : "bg-gray-100 dark:bg-white/[0.03] text-gray-400 border border-transparent"
              }`}
            >
              <span>{SECTION_META[key].emoji}</span>
              {key}
              {count > 0 && (
                <span className="text-[#F59E0B] font-black">{count}</span>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}

function SectionBlock({ section }: { section: SummarySection }) {
  const Icon = SECTION_META[section.section].icon;
  const emoji = SECTION_META[section.section].emoji;
  const count = section.events?.length ?? 0;

  return (
    <section id={sectionAnchor(section.section)} className="scroll-mt-24 space-y-5">
      {/* Section header */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F59E0B]/10 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
          {emoji}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-black text-[#F59E0B] uppercase tracking-[0.2em]">
            <Icon size={11} className="inline mr-1 -mt-0.5" />
            Section · {count} event{count === 1 ? "" : "s"}
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-[#060818] dark:text-white tracking-tight">
            {section.section}
          </h2>
          {section.intro_tagline && (
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 italic mt-1 leading-relaxed">
              {section.intro_tagline}
            </p>
          )}
        </div>
      </div>

      {/* Events */}
      {count === 0 ? (
        <div className="ml-16 sm:ml-18 text-sm text-gray-400 dark:text-gray-500 italic">
          No major developments this month.
        </div>
      ) : (
        <div className="ml-2 sm:ml-18 space-y-4">
          {section.events
            .slice()
            .sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99))
            .map((ev, idx) => (
              <EventCard key={`${ev.rank}-${idx}`} event={ev} />
            ))}
        </div>
      )}
    </section>
  );
}

function EventCard({ event }: { event: SummaryEvent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-5 sm:p-6 hover:border-[#F59E0B]/40 hover:shadow-lg transition-all"
    >
      <div className="flex items-start gap-3 mb-3">
        <span className="flex-shrink-0 w-7 h-7 bg-[#060818] dark:bg-[#F59E0B] text-white dark:text-[#060818] rounded-lg flex items-center justify-center text-xs font-black">
          {event.rank}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-black text-[#060818] dark:text-white leading-snug">
            {event.title}
          </h3>
          {event.date && (
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 flex items-center gap-1">
              <Calendar size={10} /> {event.date}
            </p>
          )}
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
        {event.body}
      </p>

      {event.clat_angle && (
        <div className="bg-[#F59E0B]/10 border-l-4 border-[#F59E0B] rounded-r-lg px-4 py-2.5 mb-3">
          <p className="text-[10px] font-black text-[#F59E0B] uppercase tracking-widest mb-0.5 flex items-center gap-1">
            <Target size={10} /> CLAT Angle
          </p>
          <p className="text-sm text-[#060818] dark:text-white font-medium leading-snug">
            {event.clat_angle}
          </p>
        </div>
      )}

      {event.connect_to && event.connect_to.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
            <Sparkles size={10} /> Connect to
          </span>
          {event.connect_to.map((c, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-[11px] font-bold text-gray-600 dark:text-gray-300"
            >
              {c}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function MonthNavFooter({
  selected,
  availableMonths,
  onSelect,
}: {
  selected: PublishedMonth;
  availableMonths: PublishedMonth[];
  onSelect: (m: PublishedMonth) => void;
}) {
  const idx = availableMonths.findIndex(
    (m) => m.year === selected.year && m.month === selected.month
  );
  const newer = idx > 0 ? availableMonths[idx - 1] : null;
  const older = idx >= 0 && idx < availableMonths.length - 1 ? availableMonths[idx + 1] : null;

  if (!newer && !older) return null;

  return (
    <div className="grid grid-cols-2 gap-3 pt-8 border-t border-gray-100 dark:border-white/10">
      {older ? (
        <button
          onClick={() => onSelect(older)}
          className="flex items-center gap-3 p-4 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl hover:border-[#F59E0B]/60 transition-all text-left"
        >
          <ArrowLeft size={18} className="text-[#F59E0B] flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Previous
            </p>
            <p className="text-sm font-black text-[#060818] dark:text-white truncate">
              {monthName(older.month)} {older.year}
            </p>
          </div>
        </button>
      ) : (
        <div />
      )}

      {newer ? (
        <button
          onClick={() => onSelect(newer)}
          className="flex items-center justify-end gap-3 p-4 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl hover:border-[#F59E0B]/60 transition-all text-right"
        >
          <div className="min-w-0">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Next
            </p>
            <p className="text-sm font-black text-[#060818] dark:text-white truncate">
              {monthName(newer.month)} {newer.year}
            </p>
          </div>
          <ArrowRight size={18} className="text-[#F59E0B] flex-shrink-0" />
        </button>
      ) : (
        <div />
      )}
    </div>
  );
}

function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 space-y-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-12 h-12 border-4 border-[#F59E0B] border-t-transparent rounded-full"
      />
      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
        Loading Monthly Summary
      </p>
    </div>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8 text-center space-y-2">
      <p className="text-base font-black text-red-500">Failed to load Monthly Summary</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{message}</p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[2.5rem] p-10 sm:p-14 text-center space-y-6">
      <div className="w-16 h-16 bg-[#F59E0B]/10 rounded-2xl flex items-center justify-center mx-auto">
        <BookOpen size={32} className="text-[#F59E0B]" />
      </div>
      <div className="space-y-2 max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black text-[#060818] dark:text-white tracking-tight">
          Your Monthly Compendium is brewing
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-medium leading-relaxed">
          We are curating this month&apos;s top 30+ events across Polity, Economy, International
          Relations, Legal Updates, Schemes, Sports, Awards, Persons in News, Books & Indices,
          and Defence & Space. Until then, your daily edge is in the CLAT GK Vault — read it
          every morning and you&apos;ll never feel behind.
        </p>
      </div>
      <a
        href="/clat-gk-vault"
        className="inline-flex items-center gap-2 px-7 py-3 bg-[#F59E0B] text-[#060818] rounded-2xl font-black text-sm hover:scale-[1.02] transition-all"
      >
        Open today&apos;s CLAT GK Vault
        <ArrowRight size={16} />
      </a>
    </div>
  );
}

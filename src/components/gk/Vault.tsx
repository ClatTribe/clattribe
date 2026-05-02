"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Play,
  Pause,
  Square,
  BookOpen,
  Bookmark,
  Volume2,
  Sparkles,
  ArrowUpRight,
  Loader2,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { gkSupabase } from "@/lib/gk-supabase";

interface NewsRow {
  id: string;
  date: string;
  source: string;
  title: string;
  url: string;
  slug: string | null;
  excerpt: string | null;
  audio_summary: string | null;
  category: string | null;
}

/**
 * GK Vault - daily CLAT-related legal NEWS articles (not editorials).
 *
 * Sources: LiveLaw, Bar & Bench, SCC Online - pure legal-news outlets.
 * Editorials live on /gk/editorial. Vault is the news ticker.
 *
 * Audio architecture:
 *  - Gemini (server-side, in the daily news pipeline) writes a 60-90 word
 *    audio-friendly summary into gk_news_articles.audio_summary.
 *  - The browser's native SpeechSynthesis API reads it aloud on demand.
 */
export default function Vault() {
  const [items, setItems] = React.useState<NewsRow[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [bookmarks, setBookmarks] = React.useState<string[]>([]);
  const [toast, setToast] = React.useState<string | null>(null);

  // Audio state - only one article plays at a time
  const [playingId, setPlayingId] = React.useState<string | null>(null);
  const [paused, setPaused] = React.useState(false);
  const [ttsSupported, setTtsSupported] = React.useState(true);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    setTtsSupported(typeof window.speechSynthesis !== "undefined");
    try {
      const stored = JSON.parse(
        window.localStorage.getItem("gk_vault_bookmarks") || "[]",
      );
      if (Array.isArray(stored)) setBookmarks(stored);
    } catch {}
  }, []);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - 14);
        const cutoffIso = cutoff.toISOString().slice(0, 10);
        const { data, error } = await gkSupabase
          .from("gk_news_articles")
          .select("id, date, source, title, url, slug, excerpt, audio_summary, category")
          .gte("date", cutoffIso)
          .order("date", { ascending: false })
          .order("created_at", { ascending: false })
          .limit(50);
        if (error) throw error;
        if (!cancelled) setItems(data || []);
      } catch (e) {
        if (!cancelled)
          setError(
            e instanceof Error ? e.message : "Failed to load today's news.",
          );
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    // Stop TTS on unmount so audio doesn't bleed into other pages.
    return () => {
      cancelled = true;
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2400);
  };

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) => {
      const next = prev.includes(id)
        ? prev.filter((b) => b !== id)
        : [...prev, id];
      try {
        window.localStorage.setItem(
          "gk_vault_bookmarks",
          JSON.stringify(next),
        );
      } catch {}
      showToast(prev.includes(id) ? "Bookmark removed" : "Bookmarked");
      return next;
    });
  };

  /** Play audio summary via Web Speech API. Cancels any in-flight playback. */
  const speak = (item: NewsRow) => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      showToast("Audio playback isn't supported in this browser.");
      return;
    }
    if (!item.audio_summary) {
      showToast("Audio summary not yet available for this article.");
      return;
    }

    const synth = window.speechSynthesis;

    if (playingId === item.id) {
      if (paused) {
        synth.resume();
        setPaused(false);
      } else {
        synth.pause();
        setPaused(true);
      }
      return;
    }

    synth.cancel();
    setPaused(false);

    const u = new SpeechSynthesisUtterance(item.audio_summary);
    u.rate = 1.05;
    u.pitch = 1;
    u.volume = 1;

    try {
      const voices = synth.getVoices();
      const preferred =
        voices.find((v) => /en-IN|en-GB|en_IN|en_GB/i.test(v.lang)) ||
        voices.find((v) => /^en/i.test(v.lang));
      if (preferred) u.voice = preferred;
    } catch {}

    u.onstart = () => {
      setPlayingId(item.id);
      setPaused(false);
    };
    u.onend = () => {
      setPlayingId(null);
      setPaused(false);
    };
    u.onerror = () => {
      setPlayingId(null);
      setPaused(false);
      showToast("Couldn't play audio. Try again.");
    };

    synth.speak(u);
  };

  const stop = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setPlayingId(null);
    setPaused(false);
  };

  const todayItems = items.filter((i) => i.date === items[0]?.date);
  const olderItems = items.filter((i) => i.date !== items[0]?.date);

  return (
    <div className="space-y-8 sm:space-y-12">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-[100] bg-[#060818] text-white px-6 py-3 rounded-2xl font-bold shadow-2xl text-center"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="text-center py-10 sm:py-16 bg-white dark:bg-white/5 rounded-[2rem] sm:rounded-[3rem] border border-gray-100 dark:border-white/5 relative overflow-hidden">
        <div className="absolute top-6 right-6 hidden sm:flex items-center gap-1 text-[10px] font-black text-[#F59E0B] uppercase tracking-widest">
          <Sparkles size={12} /> Powered by Gemini
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-black text-[#060818] dark:text-white mb-4 sm:mb-6 leading-tight">
            Legal news for the CLAT student.{" "}
            <span className="text-[#F59E0B]">Read or listen.</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-500 dark:text-gray-400 mb-8 sm:mb-10 max-w-md mx-auto">
            Supreme Court rulings, new statutes, courtroom news from LiveLaw,
            Bar &amp; Bench and SCC Online - with a 60-second audio briefing on
            every story.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button
              onClick={() => {
                if (todayItems[0]) speak(todayItems[0]);
              }}
              disabled={loading || !todayItems[0]?.audio_summary}
              className="bg-[#060818] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all text-sm sm:text-base flex-1 sm:flex-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play
                size={18}
                fill="currentColor"
                className="text-[#F59E0B]"
              />{" "}
              Listen to today's top story
            </button>
            <a
              href="/gk/editorial"
              className="bg-white dark:bg-white/10 text-[#060818] dark:text-white border-2 border-gray-100 dark:border-white/10 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold hover:border-[#F59E0B] transition-all text-sm sm:text-base flex-1 sm:flex-none flex items-center justify-center gap-2"
            >
              <BookOpen size={18} /> Editorials &amp; analysis
            </a>
          </div>
        </div>
      </section>

      {/* TTS unsupported banner */}
      {!ttsSupported && (
        <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-2xl p-4 text-sm text-amber-800 dark:text-amber-300 font-medium">
          <strong>Heads up:</strong> Your browser doesn't support on-device
          audio playback. Reading summaries will still work; the Listen button
          is disabled.
        </div>
      )}

      {/* Loading / error / empty */}
      {loading ? (
        <div className="flex items-center justify-center py-16 text-gray-400">
          <Loader2 size={20} className="animate-spin mr-2" />
          <span className="font-bold uppercase text-xs tracking-widest">
            Loading today's newsâ¦
          </span>
        </div>
      ) : error ? (
        <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-2xl p-5 text-red-700 dark:text-red-300 text-sm font-medium">
          Couldn't load news: {error}
        </div>
      ) : items.length === 0 ? (
        <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-8 text-center text-gray-500">
          No legal news has been ingested yet. The daily pipeline runs at
          7&nbsp;AM IST.
        </div>
      ) : (
        <>
          {/* Today */}
          <section className="space-y-5 sm:space-y-8">
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl sm:text-2xl font-black dark:text-white">
                Today's headlines
              </h3>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                {todayItems[0]?.date}
              </span>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {todayItems.map((item, idx) => (
                <NewsCard
                  key={item.id}
                  item={item}
                  idx={idx}
                  bookmarked={bookmarks.includes(item.id)}
                  onBookmark={() => toggleBookmark(item.id)}
                  onPlay={() => speak(item)}
                  onStop={stop}
                  isPlaying={playingId === item.id && !paused}
                  isPaused={playingId === item.id && paused}
                  ttsSupported={ttsSupported}
                />
              ))}
            </div>
          </section>

          {/* Older */}
          {olderItems.length > 0 && (
            <section className="space-y-5 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-black dark:text-white">
                Earlier this week
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {olderItems.slice(0, 20).map((item, idx) => (
                  <NewsCard
                    key={item.id}
                    item={item}
                    idx={idx}
                    bookmarked={bookmarks.includes(item.id)}
                    onBookmark={() => toggleBookmark(item.id)}
                    onPlay={() => speak(item)}
                    onStop={stop}
                    isPlaying={playingId === item.id && !paused}
                    isPaused={playingId === item.id && paused}
                    ttsSupported={ttsSupported}
                    compact
                  />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}

/* âââââââââââââââââââââââââââ Card âââââââââââââââââââââââââââ */

function NewsCard({
  item,
  idx,
  bookmarked,
  onBookmark,
  onPlay,
  onStop,
  isPlaying,
  isPaused,
  ttsSupported,
  compact,
}: {
  item: NewsRow;
  idx: number;
  bookmarked: boolean;
  onBookmark: () => void;
  onPlay: () => void;
  onStop: () => void;
  isPlaying: boolean;
  isPaused: boolean;
  ttsSupported: boolean;
  compact?: boolean;
}) {
  const blurb = item.audio_summary || item.excerpt || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05 }}
      className={`bg-white dark:bg-white/5 ${
        compact ? "p-4 sm:p-5" : "p-5 sm:p-7"
      } rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 dark:border-white/5 hover:border-[#F59E0B]/60 transition-all`}
    >
      <div className="flex justify-between items-start mb-3 gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          {item.category && (
            <span className="text-[10px] font-black px-3 py-1 rounded-full bg-gray-50 dark:bg-white/10 text-gray-500 uppercase tracking-widest">
              {item.category}
            </span>
          )}
          <span className="text-[10px] font-black px-2 py-1 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] uppercase tracking-widest">
            {item.source}
          </span>
        </div>
        <button
          onClick={onBookmark}
          className="p-1.5 text-gray-300 hover:text-[#F59E0B] transition-colors flex-shrink-0"
          aria-label={bookmarked ? "Remove bookmark" : "Bookmark this story"}
        >
          <Bookmark
            size={18}
            className={bookmarked ? "fill-[#F59E0B] text-[#F59E0B]" : ""}
          />
        </button>
      </div>

      <Link
        href={item.slug ? `/gk/news/${item.date}/${item.slug}` : item.url}
        className="block group"
      >
        <h4
          className={`${
            compact ? "text-sm sm:text-base" : "text-base sm:text-xl"
          } font-bold mb-2 text-[#060818] dark:text-white group-hover:text-[#F59E0B] transition-colors leading-snug flex items-start gap-2`}
        >
          <span className="flex-1">{item.title}</span>
          <ExternalLink
            size={14}
            className="opacity-0 group-hover:opacity-100 transition-opacity mt-1 flex-shrink-0"
          />
        </h4>
        {blurb && (
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
            {blurb}
          </p>
        )}
      </Link>

      <div className="flex items-center gap-2 mt-4 flex-wrap">
        {item.audio_summary ? (
          <>
            <button
              onClick={onPlay}
              disabled={!ttsSupported}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${
                isPlaying
                  ? "bg-[#F59E0B] text-[#060818]"
                  : isPaused
                    ? "bg-amber-100 dark:bg-amber-500/20 text-[#F59E0B]"
                    : "bg-[#060818] text-white hover:bg-gray-800"
              } disabled:opacity-40 disabled:cursor-not-allowed`}
              aria-label={
                isPlaying
                  ? "Pause audio"
                  : isPaused
                    ? "Resume audio"
                    : "Play audio summary"
              }
            >
              {isPlaying ? (
                <>
                  <Pause size={14} fill="currentColor" /> Pause
                </>
              ) : isPaused ? (
                <>
                  <Play size={14} fill="currentColor" /> Resume
                </>
              ) : (
                <>
                  <Volume2 size={14} /> Listen
                </>
              )}
            </button>
            {(isPlaying || isPaused) && (
              <button
                onClick={onStop}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-gray-500 hover:text-[#060818] dark:hover:text-white text-xs font-bold uppercase tracking-widest"
                aria-label="Stop audio"
              >
                <Square size={12} fill="currentColor" /> Stop
              </button>
            )}
          </>
        ) : (
          <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest flex items-center gap-1">
            <Calendar size={10} /> Audio briefing pending
          </span>
        )}
        <Link
          href={item.slug ? `/gk/news/${item.date}/${item.slug}` : item.url}
          className="ml-auto flex items-center gap-1 px-3 py-2 text-xs font-black text-gray-500 dark:text-gray-300 hover:text-[#F59E0B] uppercase tracking-widest"
        >
          Read full <ArrowUpRight size={12} />
        </Link>
      </div>
    </motion.div>
  );
}

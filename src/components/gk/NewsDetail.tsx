"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Play,
  Pause,
  Square,
  Volume2,
  Sparkles,
  ExternalLink,
  Calendar,
  Bookmark,
} from "lucide-react";

export interface NewsArticle {
  id: string;
  date: string;
  source: string;
  title: string;
  url: string;
  slug: string | null;
  excerpt: string | null;
  content: string | null;
  audio_summary: string | null;
  category: string | null;
}

/**
 * In-portal detail page for a single legal-news article.
 *
 * Audio: Web Speech API reads the Gemini-written audio_summary on demand.
 * Content: scraped article body, rendered as paragraphs. Original source
 * always linked at the top and bottom for attribution.
 */
export default function NewsDetail({ article }: { article: NewsArticle }) {
  const [bookmarked, setBookmarked] = React.useState(false);
  const [playingId, setPlayingId] = React.useState<string | null>(null);
  const [paused, setPaused] = React.useState(false);
  const [ttsSupported, setTtsSupported] = React.useState(true);
  const [toast, setToast] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    setTtsSupported(typeof window.speechSynthesis !== "undefined");
    try {
      const list: string[] = JSON.parse(
        window.localStorage.getItem("gk_vault_bookmarks") || "[]",
      );
      setBookmarked(Array.isArray(list) && list.includes(article.id));
    } catch {}
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [article.id]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2400);
  };

  const toggleBookmark = () => {
    if (typeof window === "undefined") return;
    try {
      const list: string[] = JSON.parse(
        window.localStorage.getItem("gk_vault_bookmarks") || "[]",
      );
      const next = list.includes(article.id)
        ? list.filter((b) => b !== article.id)
        : [...list, article.id];
      window.localStorage.setItem("gk_vault_bookmarks", JSON.stringify(next));
      setBookmarked(next.includes(article.id));
      showToast(list.includes(article.id) ? "Bookmark removed" : "Bookmarked");
    } catch {}
  };

  const speak = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      showToast("Audio playback isn't supported in this browser.");
      return;
    }
    if (!article.audio_summary) {
      showToast("Audio summary not available.");
      return;
    }
    const synth = window.speechSynthesis;

    if (playingId === article.id) {
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

    const u = new SpeechSynthesisUtterance(article.audio_summary);
    // Slower, more explanatory cadence - like a teacher walking the student through it
    u.rate = 0.92;
    u.pitch = 1.05;
    u.volume = 1;
    try {
      const voices = synth.getVoices();
      const preferred =
        voices.find((v) => /en-IN|en-GB|en_IN|en_GB/i.test(v.lang)) ||
        voices.find((v) => /^en/i.test(v.lang));
      if (preferred) u.voice = preferred;
    } catch {}
    u.onstart = () => {
      setPlayingId(article.id);
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

  const isPlaying = playingId === article.id && !paused;
  const isPaused = playingId === article.id && paused;

  const paragraphs = React.useMemo(() => {
    const text = article.content || article.excerpt || "";
    return text
      .split(/\n+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }, [article.content, article.excerpt]);

  const formattedDate = React.useMemo(() => {
    try {
      return new Date(article.date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return article.date;
    }
  }, [article.date]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto space-y-6"
    >
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-[#060818] text-white px-6 py-3 rounded-2xl font-bold shadow-2xl"
        >
          {toast}
        </motion.div>
      )}

      {/* Back link */}
      <Link
        href="/gk/vault"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] font-bold uppercase text-[10px] tracking-widest"
      >
        <ArrowLeft size={14} /> Back to Vault
      </Link>

      <article className="bg-white dark:bg-white/5 p-6 lg:p-10 rounded-[2rem] border border-gray-100 dark:border-white/10 space-y-7">
        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {article.category && (
              <span className="text-[10px] font-black px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 uppercase tracking-widest">
                {article.category}
              </span>
            )}
            <span className="text-[10px] font-black px-3 py-1 rounded-full bg-[#F59E0B]/15 text-[#F59E0B] uppercase tracking-widest">
              {article.source}
            </span>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
              <Calendar size={11} /> {formattedDate}
            </span>
          </div>
          <h1 className="text-2xl lg:text-4xl font-black text-[#060818] dark:text-white leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={toggleBookmark}
              className="p-2 -ml-2 text-gray-400 hover:text-[#F59E0B] transition-colors"
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark"}
            >
              <Bookmark
                size={18}
                className={bookmarked ? "fill-[#F59E0B] text-[#F59E0B]" : ""}
              />
            </button>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-[#F59E0B]"
            >
              Original at {article.source} <ExternalLink size={12} />
            </a>
          </div>
        </header>

        {/* Audio briefing card — only if audio_summary exists */}
        {article.audio_summary && (
          <section className="bg-amber-50 dark:bg-[#F59E0B]/10 border border-amber-200 dark:border-[#F59E0B]/20 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-[#F59E0B]" />
              <span className="text-[10px] font-black text-[#F59E0B] uppercase tracking-widest">
                Audio briefing - 60 seconds, powered by Gemini
              </span>
            </div>
            <p className="text-sm lg:text-base text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
              {article.audio_summary}
            </p>
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={speak}
                disabled={!ttsSupported}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${
                  isPlaying
                    ? "bg-[#F59E0B] text-[#060818]"
                    : isPaused
                      ? "bg-amber-100 dark:bg-amber-500/20 text-[#F59E0B]"
                      : "bg-[#060818] text-white hover:bg-gray-800"
                } disabled:opacity-40 disabled:cursor-not-allowed`}
                aria-label={
                  isPlaying ? "Pause audio" : isPaused ? "Resume audio" : "Play audio briefing"
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
                  onClick={stop}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-gray-500 hover:text-[#060818] dark:hover:text-white text-xs font-bold uppercase tracking-widest"
                  aria-label="Stop audio"
                >
                  <Square size={12} fill="currentColor" /> Stop
                </button>
              )}
              {!ttsSupported && (
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Audio not supported on this browser
                </span>
              )}
            </div>
          </section>
        )}

        {/* Body */}
        {paragraphs.length > 0 ? (
          <div className="prose dark:prose-invert max-w-none space-y-5">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium"
              >
                {para}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 italic">
            Article body unavailable. Read the original at{" "}
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F59E0B] hover:underline font-bold"
            >
              {article.source}
            </a>
            .
          </p>
        )}

        {/* Bottom attribution */}
        <footer className="pt-6 border-t border-gray-100 dark:border-white/10 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between text-xs">
          <span className="text-gray-400 font-medium">
            Originally published by <strong>{article.source}</strong> on {formattedDate}.
            CLAT Tribe summarises and curates for exam relevance.
          </span>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-1 px-4 py-2 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-[#F59E0B]/10 hover:text-[#F59E0B] font-black text-[10px] uppercase tracking-widest text-gray-500 transition-colors"
          >
            View original <ExternalLink size={11} />
          </a>
        </footer>
      </article>
    </motion.div>
  );
}

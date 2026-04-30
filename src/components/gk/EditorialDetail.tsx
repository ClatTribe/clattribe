"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ChevronRight,
  BookMarked,
  FileText,
  Zap,
  ArrowRight,
  Type,
  Highlighter,
  Check,
  X as XIcon,
  ExternalLink,
} from "lucide-react";

export interface MCQ {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface EditorialCard {
  id: string;
  source: "The Hindu" | "The Indian Express";
  title: string;
  date: string;
  isoDate: string;
  slug: string;
  readTime: string;
  summary: string;
  content: string;
  tags: string[];
  mcqs: MCQ[];
  /** Curated 4-point exam-ready takeaways. Empty/missing → box hidden. */
  takeaways: string[];
}

function cleanEditorialContent(raw: string): string[] {
  if (!raw) return [];
  const footerMarkers = [
    "\nPublished\n",
    "\nRead Comments",
    "\nCopy link",
    "\nPrint\n",
    "\nShare\n",
  ];
  let text = raw;
  for (const marker of footerMarkers) {
    const idx = text.indexOf(marker);
    if (idx > 200) {
      text = text.substring(0, idx);
      break;
    }
  }
  text = text.replace(/\n([,;])/g, "$1");
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
  const paragraphs: string[] = [];
  let current = "";
  for (const line of lines) {
    if (!current) {
      current = line;
      continue;
    }
    if (/^[a-z,;(]/.test(line)) {
      current += " " + line;
    } else {
      paragraphs.push(current);
      current = line;
    }
  }
  if (current) paragraphs.push(current);
  return paragraphs.filter((p) => p.length > 10);
}

export default function EditorialDetail({
  editorial: item,
}: {
  editorial: EditorialCard;
}) {
  const searchParams = useSearchParams();
  const autoOpenQuiz = searchParams?.get("quiz") === "1";

  const [showQuiz, setShowQuiz] = React.useState(autoOpenQuiz);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [showExplanation, setShowExplanation] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [quizFinished, setQuizFinished] = React.useState(false);
  const [bookmarked, setBookmarked] = React.useState(false);

  // Reading tools state
  const [readingProgress, setReadingProgress] = React.useState(0);
  const [fontSize, setFontSize] = React.useState<"sm" | "base" | "lg" | "xl">("base");
  const [isRead, setIsRead] = React.useState(false);
  const [highlights, setHighlights] = React.useState<string[]>([]);
  const [selection, setSelection] = React.useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);
  const [glossary, setGlossary] = React.useState<{
    term: string;
    summary: string;
    url?: string;
    loading: boolean;
    x: number;
    y: number;
  } | null>(null);
  const proseRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const list = JSON.parse(
        window.localStorage.getItem("gk_editorial_bookmarks") || "[]",
      );
      setBookmarked(Array.isArray(list) && list.includes(item.id));
    } catch {}
  }, [item.id]);

  // Reading-speed tracking — stores rolling avg in localStorage for the dashboard widget
  React.useEffect(() => {
    const startMs = Date.now();
    return () => {
      const elapsed = (Date.now() - startMs) / 60000;
      if (elapsed >= 0.3 && elapsed <= 25) {
        const wc = item.content
          ? item.content.split(/\s+/).filter(Boolean).length
          : 200;
        const wpm = Math.round(wc / elapsed);
        if (wpm >= 80 && wpm <= 700 && typeof window !== "undefined") {
          const prev = parseInt(
            window.localStorage.getItem("gk_readingSpeed") || "0",
            10,
          );
          window.localStorage.setItem(
            "gk_readingSpeed",
            String(prev > 0 ? Math.round((prev + wpm) / 2) : wpm),
          );
        }
      }
    };
  }, [item]);

  const toggleBookmark = () => {
    if (typeof window === "undefined") return;
    try {
      const list: string[] = JSON.parse(
        window.localStorage.getItem("gk_editorial_bookmarks") || "[]",
      );
      const next = list.includes(item.id)
        ? list.filter((x) => x !== item.id)
        : [...list, item.id];
      window.localStorage.setItem(
        "gk_editorial_bookmarks",
        JSON.stringify(next),
      );
      setBookmarked(next.includes(item.id));
    } catch {}
  };

  // Persist font size + read state across sessions
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const f = window.localStorage.getItem("gk_font_size");
      if (f === "sm" || f === "base" || f === "lg" || f === "xl") setFontSize(f);
      const list: { id: string }[] = JSON.parse(
        window.localStorage.getItem("gk_read_editorials") || "[]",
      );
      setIsRead(Array.isArray(list) && list.some((r) => r && r.id === item.id));
      const h: string[] = JSON.parse(
        window.localStorage.getItem(`gk_highlights_${item.id}`) || "[]",
      );
      if (Array.isArray(h)) setHighlights(h);
    } catch {}
  }, [item.id]);

  // Track reading progress (top of viewport bar)
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight || 1;
      const pct = Math.min(100, Math.max(0, (window.scrollY / total) * 100));
      setReadingProgress(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Track text selection inside the prose container
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const onUp = () => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed) return setSelection(null);
      const text = sel.toString().trim();
      if (text.length < 2 || text.length > 280) return setSelection(null);
      const root = proseRef.current;
      if (!root) return;
      const anchor = sel.anchorNode;
      const node =
        anchor &&
        (anchor.nodeType === 1 ? (anchor as Element) : (anchor.parentElement as Element));
      if (!node || !root.contains(node)) return setSelection(null);
      const range = sel.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setSelection({
        text,
        x: rect.left + rect.width / 2 + window.scrollX,
        y: rect.top + window.scrollY - 8,
      });
    };
    document.addEventListener("mouseup", onUp);
    document.addEventListener("touchend", onUp);
    return () => {
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("touchend", onUp);
    };
  }, []);

  const changeFontSize = (delta: 1 | -1) => {
    const order: ("sm" | "base" | "lg" | "xl")[] = ["sm", "base", "lg", "xl"];
    const i = order.indexOf(fontSize);
    const next = order[Math.min(order.length - 1, Math.max(0, i + delta))];
    setFontSize(next);
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem("gk_font_size", next);
      } catch {}
    }
  };

  const proseSizeClass =
    fontSize === "sm"
      ? "text-sm md:text-base"
      : fontSize === "base"
        ? "text-base md:text-lg"
        : fontSize === "lg"
          ? "text-lg md:text-xl"
          : "text-xl md:text-2xl";

  const saveHighlight = (text: string) => {
    if (typeof window === "undefined") return;
    const trimmed = text.trim();
    if (!trimmed) return;
    try {
      const key = `gk_highlights_${item.id}`;
      const existing: string[] = JSON.parse(
        window.localStorage.getItem(key) || "[]",
      );
      if (existing.includes(trimmed)) {
        setSelection(null);
        return;
      }
      const nextList = [...existing, trimmed];
      window.localStorage.setItem(key, JSON.stringify(nextList));
      setHighlights(nextList);
      const globalKey = "gk_saved_highlights";
      const all: {
        id: string;
        editorialId: string;
        title: string;
        text: string;
        savedAt: string;
      }[] = JSON.parse(window.localStorage.getItem(globalKey) || "[]");
      all.push({
        id: `${item.id}_${Date.now()}`,
        editorialId: item.id,
        title: item.title,
        text: trimmed,
        savedAt: new Date().toISOString(),
      });
      window.localStorage.setItem(globalKey, JSON.stringify(all.slice(-200)));
    } catch {}
    setSelection(null);
    try {
      window.getSelection()?.removeAllRanges();
    } catch {}
  };

  const lookupTerm = async (term: string, x: number, y: number) => {
    setSelection(null);
    setGlossary({ term, summary: "", loading: true, x, y });
    try {
      const slug = encodeURIComponent(term.replace(/\s+/g, " ").trim());
      const res = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${slug}?redirect=true`,
      );
      if (!res.ok) throw new Error("not found");
      const data = await res.json();
      const summary =
        (data.extract && String(data.extract).split(". ").slice(0, 2).join(". ")) ||
        "No summary available.";
      const url =
        (data.content_urls &&
          data.content_urls.desktop &&
          data.content_urls.desktop.page) ||
        undefined;
      setGlossary({ term, summary, url, loading: false, x, y });
    } catch {
      setGlossary({
        term,
        summary: "No quick definition found. Tap to search the web.",
        url: `https://www.google.com/search?q=${encodeURIComponent(term)}`,
        loading: false,
        x,
        y,
      });
    }
  };

  const markAsRead = () => {
    if (typeof window === "undefined") return;
    try {
      const key = "gk_read_editorials";
      const list: { id: string; isoDate: string; readAt: string }[] = JSON.parse(
        window.localStorage.getItem(key) || "[]",
      );
      const filtered = list.filter((r) => r && r.id !== item.id);
      filtered.push({
        id: item.id,
        isoDate: item.isoDate,
        readAt: new Date().toISOString(),
      });
      window.localStorage.setItem(key, JSON.stringify(filtered));
      setIsRead(true);
    } catch {}
  };

  const handleOptionSelect = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    if (idx === item.mcqs[currentQuestion].correctAnswer) setScore((s) => s + 1);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < item.mcqs.length) {
      setCurrentQuestion((c) => c + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else setQuizFinished(true);
  };

  const paragraphs = cleanEditorialContent(item.content);
  const hasTakeaways =
    Array.isArray(item.takeaways) && item.takeaways.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      {/* Reading progress bar — fixed at top of viewport */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gray-100 dark:bg-white/5 pointer-events-none">
        <div
          className="h-full bg-[#F59E0B] transition-[width] duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Floating action menu when text is selected inside the prose */}
      {selection && (
        <div
          style={{
            position: "absolute",
            top: selection.y,
            left: selection.x,
            transform: "translate(-50%, -100%)",
            zIndex: 70,
          }}
          onMouseDown={(e) => e.preventDefault()}
          className="flex items-center gap-1 bg-[#060818] text-white rounded-2xl shadow-2xl border border-white/10 p-1.5"
        >
          <button
            onClick={() => saveHighlight(selection.text)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#F59E0B] hover:text-[#060818] text-xs font-black uppercase tracking-widest transition-colors"
          >
            <Highlighter size={12} /> Save
          </button>
          <button
            onClick={() => lookupTerm(selection.text, selection.x, selection.y)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#F59E0B] hover:text-[#060818] text-xs font-black uppercase tracking-widest transition-colors"
          >
            <FileText size={12} /> Define
          </button>
          <button
            onClick={() => setSelection(null)}
            className="w-7 h-7 rounded-xl text-gray-400 hover:text-white flex items-center justify-center"
            aria-label="Dismiss"
          >
            <XIcon size={14} />
          </button>
        </div>
      )}

      {/* Glossary popover (Wikipedia summary) */}
      {glossary && (
        <div
          style={{
            position: "absolute",
            top: glossary.y,
            left: glossary.x,
            transform: "translate(-50%, -100%)",
            zIndex: 70,
            maxWidth: "min(360px, calc(100vw - 32px))",
          }}
          className="bg-white dark:bg-[#060818] border border-gray-100 dark:border-white/10 rounded-2xl shadow-2xl p-4"
        >
          <div className="flex items-start justify-between gap-2 mb-1">
            <p className="text-[10px] font-black text-[#F59E0B] uppercase tracking-widest">
              {glossary.term}
            </p>
            <button
              onClick={() => setGlossary(null)}
              className="text-gray-400 hover:text-[#060818] dark:hover:text-white"
              aria-label="Close"
            >
              <XIcon size={14} />
            </button>
          </div>
          {glossary.loading ? (
            <p className="text-xs text-gray-500 italic">Looking it up…</p>
          ) : (
            <>
              <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                {glossary.summary}
              </p>
              {glossary.url && (
                <a
                  href={glossary.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-[10px] font-black text-[#F59E0B] uppercase tracking-widest hover:underline"
                >
                  Read more <ExternalLink size={11} />
                </a>
              )}
            </>
          )}
        </div>
      )}

      <Link
        href="/gk/editorial"
        className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
      >
        <ChevronRight size={16} className="rotate-180" /> Back to Editorials
      </Link>

      <div className="bg-white dark:bg-white/5 p-6 md:p-10 rounded-3xl md:rounded-[3rem] border border-gray-100 dark:border-white/10 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                item.source === "The Hindu"
                  ? "bg-[#F59E0B]/10 text-[#F59E0B]"
                  : "bg-blue-500/10 text-blue-500"
              }`}
            >
              {item.source}
            </span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {item.date}
            </span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-3xl font-black text-[#060818] dark:text-white leading-tight flex-1">
              {item.title}
            </h1>
            <button
              onClick={toggleBookmark}
              className={`p-2 rounded-xl transition-all shrink-0 ${
                bookmarked
                  ? "text-amber-500 bg-amber-50 dark:bg-amber-500/10"
                  : "text-gray-400 hover:text-amber-500 bg-gray-50 dark:bg-white/5"
              }`}
              title="Bookmark article"
            >
              <BookMarked size={20} />
            </button>
          </div>
          <div className="flex gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-gray-50 dark:bg-white/5 text-[10px] font-black text-gray-400 uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          ref={proseRef}
          className={`prose dark:prose-invert max-w-none space-y-5 ${proseSizeClass}`}
        >
          {paragraphs.map((para, idx) => (
            <p
              key={idx}
              className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium"
            >
              {para}
            </p>
          ))}
        </div>

        {/* Takeaways box: only rendered when curated takeaways exist in the DB.
            No more chopped-off article paragraphs masquerading as analysis. */}
        {hasTakeaways && (
          <div className="bg-amber-50 dark:bg-[#F59E0B]/10 border border-amber-200 dark:border-[#F59E0B]/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-[#F59E0B] rounded-lg flex items-center justify-center shrink-0">
                <Zap size={12} className="text-[#060818]" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-[#F59E0B]">
                Key GK Takeaways for CLAT
              </span>
            </div>
            <ul className="space-y-3">
              {item.takeaways.map((t, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed"
                >
                  <span className="w-5 h-5 bg-[#F59E0B]/20 text-[#F59E0B] rounded-full flex items-center justify-center shrink-0 text-[10px] font-black mt-0.5">
                    {i + 1}
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            {/* Font size toggle */}
            <div className="flex items-center gap-1 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl p-1">
              <button
                onClick={() => changeFontSize(-1)}
                disabled={fontSize === "sm"}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-[#F59E0B] hover:bg-white dark:hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-base font-black"
                title="Smaller text"
              >
                A-
              </button>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">
                <Type size={12} className="inline" />
              </span>
              <button
                onClick={() => changeFontSize(1)}
                disabled={fontSize === "xl"}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-[#F59E0B] hover:bg-white dark:hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-base font-black"
                title="Larger text"
              >
                A+
              </button>
            </div>
            <button className="flex items-center gap-2 text-[#060818] dark:text-white font-bold hover:text-[#F59E0B] transition-colors">
              <FileText size={20} /> Download PDF
            </button>
          </div>
          {/* Mark as Read — drives streak completion on the dashboard */}
          <button
            onClick={markAsRead}
            disabled={isRead}
            className={`w-full sm:w-auto px-6 py-3 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 border-2 ${
              isRead
                ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 cursor-default"
                : "bg-white dark:bg-white/5 border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-[#060818] active:scale-[0.98]"
            }`}
          >
            {isRead ? (
              <>
                <Check size={18} /> Marked as Read
              </>
            ) : (
              <>
                <BookMarked size={18} /> Mark as Read
              </>
            )}
          </button>
          {item.mcqs.length > 0 && (
            <button
              onClick={() => setShowQuiz(true)}
              className="w-full sm:w-auto bg-[#F59E0B] text-[#060818] px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-[#F59E0B]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Zap size={18} fill="currentColor" /> Take Passage Quiz
            </button>
          )}
        </div>
      </div>

      {showQuiz && item.mcqs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 z-[100] bg-[#060818]/90 backdrop-blur-sm flex items-center justify-center p-6"
        >
          <div className="bg-white dark:bg-[#060818] w-full max-w-2xl rounded-[3rem] p-10 shadow-2xl border border-white/10 relative overflow-hidden">
            <button
              onClick={() => setShowQuiz(false)}
              className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors"
            >
              <Zap size={24} className="rotate-45" />
            </button>

            {!quizFinished ? (
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-[#F59E0B] uppercase tracking-widest">
                    Question {currentQuestion + 1} of {item.mcqs.length}
                  </p>
                  <h3 className="text-xl font-black text-[#060818] dark:text-white">
                    {item.mcqs[currentQuestion].question}
                  </h3>
                </div>
                <div className="grid gap-4">
                  {item.mcqs[currentQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={selectedOption !== null}
                      className={`w-full p-6 rounded-2xl text-left font-bold transition-all border-2 ${
                        selectedOption === idx
                          ? idx === item.mcqs[currentQuestion].correctAnswer
                            ? "bg-green-500 border-green-500 text-white"
                            : "bg-red-500 border-red-500 text-white"
                          : selectedOption !== null &&
                              idx === item.mcqs[currentQuestion].correctAnswer
                            ? "bg-green-500/20 border-green-500 text-green-500"
                            : "bg-gray-50 dark:bg-white/5 border-transparent text-gray-600 dark:text-gray-300 hover:border-[#F59E0B]/50"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 bg-[#F59E0B]/10 rounded-2xl border border-[#F59E0B]/20"
                  >
                    <p className="text-sm font-bold text-[#F59E0B] mb-2 uppercase tracking-widest">
                      Explanation
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                      {item.mcqs[currentQuestion].explanation}
                    </p>
                    <button
                      onClick={nextQuestion}
                      className="mt-6 w-full bg-[#F59E0B] text-[#060818] py-4 rounded-xl font-black text-sm flex items-center justify-center gap-2"
                    >
                      {currentQuestion + 1 < item.mcqs.length
                        ? "Next Question"
                        : "Finish Quiz"}{" "}
                      <ArrowRight size={18} />
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="text-center space-y-8 py-10">
                <div className="w-24 h-24 bg-[#F59E0B]/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap size={48} className="text-[#F59E0B]" fill="currentColor" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-[#060818] dark:text-white">
                    Quiz Completed!
                  </h3>
                  <p className="text-gray-500 font-bold">
                    You scored {score} out of {item.mcqs.length}
                  </p>
                </div>
                <button
                  onClick={() => setShowQuiz(false)}
                  className="bg-[#F59E0B] text-[#060818] px-10 py-4 rounded-2xl font-black text-sm shadow-xl shadow-[#F59E0B]/20"
                >
                  Back to Editorial
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

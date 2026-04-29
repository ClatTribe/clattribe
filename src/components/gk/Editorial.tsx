"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Lock,
  ChevronRight,
  BookOpen,
  FileText,
  Clock,
  Zap,
  BookMarked,
} from "lucide-react";

interface MCQ {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface EditorialCard {
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
}

const SUPABASE_URL = "https://fjswchcothephgtzqbgq.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
  "eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0." +
  "AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function isoToDisplayDate(iso: string): string {
  const parts = iso.split("-");
  const month = MONTH_NAMES[parseInt(parts[1]) - 1];
  const day = parseInt(parts[2]);
  return `${month} ${day}, ${parts[0]}`;
}

function estimateReadTime(content: string): string {
  const words = (content || "").trim().split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min`;
}

function slugify(s: string): string {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function transformRow(row: any): EditorialCard {
  const optionKeys = ["A", "B", "C", "D"];
  const rawMcqs: any[] = Array.isArray(row.mcqs) ? row.mcqs : [];
  const mcqs = rawMcqs.map((m: any) => ({
    question: m.q ?? "",
    options: optionKeys.map((k) => m.options?.[k] ?? ""),
    correctAnswer: Math.max(0, optionKeys.indexOf(m.correct ?? "A")),
    explanation: m.explanation ?? "",
  }));
  const content = row.content ?? "";
  const isoDate =
    row.date && row.date !== "1970-01-01"
      ? row.date
      : new Date().toISOString().split("T")[0];
  return {
    id: row.id,
    source: (row.source === "Indian Express"
      ? "The Indian Express"
      : row.source) as "The Hindu" | "The Indian Express",
    title: row.title,
    date: isoToDisplayDate(isoDate),
    isoDate,
    slug: slugify(row.title || ""),
    readTime: estimateReadTime(content),
    summary: content.replace(/\n/g, " ").substring(0, 200).trim(),
    content,
    tags: [],
    mcqs,
  };
}

export default function Editorial() {
  const [selectedDate, setSelectedDate] = React.useState(
    String(new Date().getDate()),
  );
  const [allEditorials, setAllEditorials] = React.useState<EditorialCard[]>([]);
  const [bookmarkedIds, setBookmarkedIds] = React.useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(
        window.localStorage.getItem("gk_editorial_bookmarks") || "[]",
      );
    } catch {
      return [];
    }
  });

  const toggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setBookmarkedIds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "gk_editorial_bookmarks",
          JSON.stringify(next),
        );
      }
      return next;
    });
  };

  React.useEffect(() => {
    fetch(
      `${SUPABASE_URL}/rest/v1/gk_editorials?order=date.desc&limit=60&select=*`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
      },
    )
      .then((r) => r.json())
      .then((rows: any[]) => {
        if (!Array.isArray(rows)) {
          console.error("Supabase error", rows);
          return;
        }
        setAllEditorials(rows.map(transformRow));
        const days = new Set<string>(
          rows.map((r: any) => String(parseInt(r.date.split("-")[2]))),
        );
        const today = String(new Date().getDate());
        if (!days.has(today) && days.size > 0) {
          const sorted = [...days].map(Number).sort((a, b) => b - a);
          setSelectedDate(String(sorted[0]));
        }
      })
      .catch((e) => console.error("Editorial fetch failed:", e));
  }, []);

  const filteredEditorials = React.useMemo(() => {
    return allEditorials.filter((e) =>
      e.date.includes(`${selectedDate}, ${new Date().getFullYear()}`),
    );
  }, [allEditorials, selectedDate]);

  const ARCHIVE_DATES = React.useMemo(() => {
    const now = new Date();
    const today = now.getDate();
    const months = [
      "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
      "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
    ];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return Array.from({ length: 14 }, (_, i) => {
      const d = new Date(now.getFullYear(), now.getMonth(), today - i);
      const dateStr = String(d.getDate());
      return {
        month: months[d.getMonth()],
        date: dateStr,
        day: dayNames[d.getDay()],
        active: dateStr === selectedDate,
        locked: i >= 2,
      };
    });
  }, [selectedDate]);

  return (
    <div className="space-y-8">
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] flex items-center gap-2">
            <Clock size={14} /> Daily Archives
          </h2>
          <span className="text-[10px] font-black text-[#F59E0B] uppercase tracking-widest bg-[#F59E0B]/10 px-2 py-0.5 rounded">
            (First 2 Days Free)
          </span>
        </div>

        <div className="relative group">
          <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar mask-fade-right">
            {ARCHIVE_DATES.map((item) => (
              <motion.button
                key={`${item.month}-${item.date}`}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => !item.locked && setSelectedDate(item.date)}
                className={`flex-shrink-0 w-24 h-32 rounded-3xl flex flex-col items-center justify-center gap-1 transition-all relative border-2 ${
                  selectedDate === item.date
                    ? "bg-[#F59E0B] border-[#F59E0B] text-[#060818] shadow-lg shadow-[#F59E0B]/20"
                    : "bg-white dark:bg-[#060818] border-gray-100 dark:border-white/10 text-gray-400 dark:text-gray-500 hover:border-[#F59E0B]/50"
                } ${item.locked ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
              >
                {item.locked && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-[#F59E0B]/20 text-[#F59E0B] text-[8px] font-black px-1.5 py-0.5 rounded uppercase">
                      PRO
                    </span>
                  </div>
                )}
                <span
                  className={`text-[10px] font-black uppercase tracking-widest ${selectedDate === item.date ? "text-[#060818]/60" : ""}`}
                >
                  {item.month}
                </span>
                <span
                  className={`text-3xl font-black ${selectedDate === item.date ? "text-[#060818]" : "text-[#060818] dark:text-white"}`}
                >
                  {item.locked ? <Lock size={20} className="mb-1" /> : item.date}
                </span>
                <span
                  className={`text-[10px] font-bold ${selectedDate === item.date ? "text-[#060818]/60" : ""}`}
                >
                  {item.day}
                </span>
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-2">
            <div className="h-1 bg-gray-100 dark:bg-white/5 rounded-full flex-1 max-w-[200px] overflow-hidden">
              <motion.div
                className="h-full bg-[#F59E0B]"
                initial={{ width: "20%" }}
                animate={{ width: "15%" }}
              />
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-6 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
              <Link
                href="/gk/monthly-summary"
                className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors"
              >
                <BookMarked size={14} /> Monthly Summary <ChevronRight size={12} />
              </Link>
              <Link
                href="/gk/testing"
                className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors"
              >
                <Zap size={14} /> Weekly Quiz <ChevronRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Editorials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-4">
            <h2 className="text-2xl font-black text-[#060818] dark:text-white flex items-center gap-3">
              <div className="w-2 h-8 bg-[#F59E0B] rounded-full" />
              The Hindu
            </h2>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              {filteredEditorials.filter((e) => e.source === "The Hindu").length} Editorials
            </span>
          </div>
          <div className="space-y-6">
            {filteredEditorials
              .filter((e) => e.source === "The Hindu")
              .map((item) => (
                <EditorialItem
                  key={item.id}
                  item={item}
                  bookmarkedIds={bookmarkedIds}
                  onToggleBookmark={toggleBookmark}
                />
              ))}
            {filteredEditorials.filter((e) => e.source === "The Hindu").length === 0 && (
              <p className="text-gray-500 font-medium py-8 text-center">
                No editorials found for this date.
              </p>
            )}
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-4">
            <h2 className="text-2xl font-black text-[#060818] dark:text-white flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-500 rounded-full" />
              The Indian Express
            </h2>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              {filteredEditorials.filter((e) => e.source === "The Indian Express").length} Editorials
            </span>
          </div>
          <div className="space-y-6">
            {filteredEditorials
              .filter((e) => e.source === "The Indian Express")
              .map((item) => (
                <EditorialItem
                  key={item.id}
                  item={item}
                  bookmarkedIds={bookmarkedIds}
                  onToggleBookmark={toggleBookmark}
                />
              ))}
            {filteredEditorials.filter((e) => e.source === "The Indian Express").length === 0 && (
              <p className="text-gray-500 font-medium py-8 text-center">
                No editorials found for this date.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const EditorialItem: React.FC<{
  item: EditorialCard;
  bookmarkedIds: string[];
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
}> = ({ item, bookmarkedIds, onToggleBookmark }) => {
  const router = useRouter();
  const detailUrl = `/gk/editorial/${item.isoDate}/${item.slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => router.push(detailUrl)}
      className="group bg-white dark:bg-white/5 p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-gray-100 dark:border-white/10 hover:shadow-2xl hover:shadow-[#F59E0B]/5 transition-all duration-300 cursor-pointer"
    >
      <div className="flex justify-between items-start mb-6">
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
        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
          <Clock size={12} /> {item.readTime}
        </div>
      </div>

      <h3 className="text-xl font-black text-[#060818] dark:text-white mb-4 group-hover:text-[#F59E0B] transition-colors leading-tight">
        {item.title}
      </h3>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 line-clamp-2 font-medium">
        {item.summary}
      </p>

      <div className="flex flex-wrap gap-3">
        <Link
          href={detailUrl}
          onClick={(e) => e.stopPropagation()}
          className="flex-1 bg-[#060818] dark:bg-white/10 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all flex items-center justify-center gap-2"
        >
          <BookOpen size={16} /> Read
        </Link>
        <button
          onClick={(e) => onToggleBookmark(item.id, e)}
          className={`p-3 rounded-2xl border transition-all ${
            bookmarkedIds.includes(item.id)
              ? "bg-amber-50 dark:bg-amber-500/10 border-amber-300 dark:border-amber-500/30 text-amber-500"
              : "bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-white/10 text-gray-400 hover:text-amber-500"
          }`}
          title="Bookmark"
        >
          <BookMarked size={16} />
        </button>
        <Link
          href={`${detailUrl}?quiz=1`}
          onClick={(e) => e.stopPropagation()}
          className="p-3 rounded-2xl bg-gray-50 dark:bg-white/5 text-[#060818] dark:text-white hover:bg-[#F59E0B] hover:text-[#060818] transition-all flex items-center justify-center"
          title="Take Quiz"
        >
          <FileText size={20} />
        </Link>
      </div>
    </motion.div>
  );
};

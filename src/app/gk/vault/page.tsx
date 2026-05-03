import GKVault from "@/components/gk/Vault";
import { Metadata } from "next";
import Link from "next/link";

const SUPABASE_URL = "https://fjswchcothephgtzqbgq.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
  "eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0." +
  "AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4";

export const metadata: Metadata = {
  title: "CLAT Current Affairs Vault - Daily Legal & GK News (May 2026)",
  description:
    "Access the comprehensive vault of current affairs and static GK resources.",
  alternates: { canonical: "/gk/vault" },
};

interface NewsRow {
  id: string;
  date: string;
  slug: string | null;
  title: string;
  source: string;
  category: string | null;
}

async function fetchRecentNews(): Promise<NewsRow[]> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/gk_news_articles?select=id,date,slug,title,source,category&order=date.desc&limit=30`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
        next: { revalidate: 1800 },
      },
    );
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export default async function VaultPage() {
  const articles = (await fetchRecentNews()).filter((a) => a.slug);

  return (
    <>
      {/* Server-rendered SEO shell - real H1, real intro, real anchor list for crawlers */}
      <section className="mb-8 space-y-4">
        <h1 className="text-3xl lg:text-4xl font-black tracking-tight text-[#060818] dark:text-white">
          CLAT Current Affairs Vault
        </h1>
        <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
          Daily curated legal and current-affairs news for CLAT, AILET, and NLAT
          aspirants. Every article includes a teacher-style audio briefing that
          explains why it matters for the exam, from major Supreme Court
          rulings to international summits, indices, and India-impact events.
        </p>
        {articles.length > 0 && (
          <details className="pt-2">
            <summary className="text-[10px] font-black uppercase tracking-widest text-[#F59E0B] cursor-pointer hover:text-amber-600">
              Browse {articles.length} recent articles
            </summary>
            <ul className="mt-4 space-y-2 text-sm">
              {articles.map((a) => (
                <li key={a.id} className="leading-relaxed">
                  <Link
                    href={`/gk/news/${a.date}/${a.slug}`}
                    className="text-gray-700 dark:text-gray-200 hover:text-[#F59E0B] font-medium"
                  >
                    {a.title}
                  </Link>
                  <span className="text-gray-400 dark:text-gray-500 text-xs ml-2">
                    {a.category ? `· ${a.category} ` : ""}
                    {`· ${formatDate(a.date)}`}
                  </span>
                </li>
              ))}
            </ul>
          </details>
        )}
      </section>

      <GKVault />
    </>
  );
}

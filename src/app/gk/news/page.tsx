import { Metadata } from "next";
import Link from "next/link";

const SUPABASE_URL = "https://fjswchcothephgtzqbgq.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
  "eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0." +
  "AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4";

export const metadata: Metadata = {
  title:
    "Daily Legal & Current Affairs News for CLAT 2027 | CLAT Tribe",
  description:
    "Daily curated legal news and current-affairs updates for CLAT, AILET, and NLAT aspirants. Major Supreme Court rulings, international summits, indices, and India-impact events with teacher-style audio briefings.",
  alternates: { canonical: "/gk/news" },
};

interface NewsRow {
  id: string;
  date: string;
  slug: string | null;
  title: string;
  source: string;
  excerpt: string | null;
  category: string | null;
}

async function fetchRecentNews(): Promise<NewsRow[]> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/gk_news_articles?select=id,date,slug,title,source,excerpt,category&slug=not.is.null&order=date.desc&limit=30`,
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

export default async function NewsIndexPage() {
  const articles = (await fetchRecentNews()).filter((a) => a.slug);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Daily Legal & Current Affairs News for CLAT 2027",
    description:
      "Latest legal and current-affairs news curated for CLAT, AILET, and NLAT aspirants.",
    url: "https://www.clattribe.com/gk/news",
    numberOfItems: articles.length,
    itemListElement: articles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.clattribe.com/gk/news/${a.date}/${a.slug}`,
      name: a.title,
    })),
  };

  // Group articles by date for visual rhythm + SEO date hierarchy
  const groups: Record<string, NewsRow[]> = {};
  articles.forEach((a) => {
    if (!groups[a.date]) groups[a.date] = [];
    groups[a.date].push(a);
  });
  const dates = Object.keys(groups).sort((a, b) => (a < b ? 1 : -1));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl lg:text-5xl font-black tracking-tight text-[#060818] dark:text-white">
            Daily Legal & Current Affairs News for CLAT 2027
          </h1>
          <p className="text-base lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            Hand-picked legal news and current-affairs updates that matter for
            CLAT, AILET, and NLAT. Each article comes with a teacher-style
            audio briefing that explains why it matters for the exam, from
            major Supreme Court rulings to international summits, indices,
            and India-impact events.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <Link
              href="/gk/vault"
              className="text-[#F59E0B] hover:underline font-bold"
            >
              Open the interactive Current Affairs Vault
            </Link>{" "}
            for the listen-and-bookmark view.
          </p>
        </header>

        {articles.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No articles available right now. Check back tomorrow for the daily
            update.
          </p>
        ) : (
          <div className="space-y-8">
            {dates.map((d) => (
              <section key={d}>
                <h2 className="text-xs font-black uppercase tracking-widest text-[#F59E0B] mb-3">
                  {formatDate(d)}
                </h2>
                <ul className="space-y-3">
                  {groups[d].map((a) => (
                    <li
                      key={a.id}
                      className="border-b border-gray-100 dark:border-white/10 pb-3"
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        {a.category && (
                          <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 uppercase tracking-widest">
                            {a.category}
                          </span>
                        )}
                        {a.source && (
                          <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                            {a.source}
                          </span>
                        )}
                      </div>
                      <Link
                        href={`/gk/news/${a.date}/${a.slug}`}
                        className="block text-base lg:text-lg font-bold text-[#060818] dark:text-white hover:text-[#F59E0B] leading-snug"
                      >
                        {a.title}
                      </Link>
                      {a.excerpt && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                          {a.excerpt}
                      </p>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

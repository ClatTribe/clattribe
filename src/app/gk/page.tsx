import { Metadata } from "next";
import Link from "next/link";

const SUPABASE_URL = "https://fjswchcothephgtzqbgq.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
  "eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0." +
  "AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4";

export const metadata: Metadata = {
  title: "Daily GK for CLAT 2027 | Editorials, News, Flashcards | CLAT Tribe",
  description:
    "India's #1 GK platform for CLAT 2027. Daily editorials, current-affairs news, smart flashcards, full mocks, and monthly summaries - all in one place.",
  alternates: { canonical: "/gk" },
};

interface NewsRow {
  id: string;
  date: string;
  slug: string | null;
  title: string;
}

interface EditorialRow {
  id: string;
  date: string;
  title: string;
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

async function fetchRecent(): Promise<{
  news: NewsRow[];
  editorials: EditorialRow[];
}> {
  const headers = {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
  };
  const opts = { headers, next: { revalidate: 1800 } };
  try {
    const [newsRes, edRes] = await Promise.all([
      fetch(
        `${SUPABASE_URL}/rest/v1/gk_news_articles?select=id,date,slug,title&order=date.desc&limit=5`,
        opts,
      ),
      fetch(
        `${SUPABASE_URL}/rest/v1/gk_editorials?select=id,date,title&order=date.desc&limit=5`,
        opts,
      ),
    ]);
    return {
      news: newsRes.ok ? await newsRes.json() : [],
      editorials: edRes.ok ? await edRes.json() : [],
    };
  } catch {
    return { news: [], editorials: [] };
  }
}

const SECTIONS = [
  {
    href: "/gk/editorial",
    title: "Daily Editorials",
    desc: "The Hindu and Indian Express editorials with CLAT-focused MCQs, takeaways, and audio briefings.",
  },
  {
    href: "/gk/vault",
    title: "Current Affairs Vault",
    desc: "Major legal, national, international, indices, and summit news that show up in CLAT and AILET passages.",
  },
  {
    href: "/gk/static-gk",
    title: "Static GK",
    desc: "Constitutional GK, legal maxims, landmark Supreme Court cases, and polity notes for CLAT and AILET.",
  },
  {
    href: "/gk/monthly-summary",
    title: "Monthly Summary",
    desc: "Month-by-month rollups of the most important current-affairs items for CLAT 2027.",
  },
  {
    href: "/gk/flashcards",
    title: "Smart Flashcards",
    desc: "Spaced-repetition flashcards covering legal terms, constitutional articles, and high-yield GK facts.",
  },
  {
    href: "/gk/testing",
    title: "Testing Engine",
    desc: "Full-length mocks, sectional tests, and previous-year-question (PYQ) drills with detailed analytics.",
  },
];

export default async function GKHubPage() {
  const { news, editorials } = await fetchRecent();

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "CLAT Tribe",
    alternateName: "CLAT Tribe GK Portal",
    url: "https://www.clattribe.com/gk",
    logo: {
      "@type": "ImageObject",
      url: "https://www.clattribe.com/clattribe.png",
      width: 512,
      height: 512,
    },
    description:
      "India's #1 GK platform for CLAT 2027. Daily editorials, current-affairs news, smart flashcards, full mocks, and monthly summaries.",
    sameAs: ["https://www.clattribe.com"],
    knowsAbout: [
      "CLAT",
      "AILET",
      "NLAT",
      "MHCET Law",
      "Legal Reasoning",
      "Constitutional Law",
      "Current Affairs",
      "Indian Polity",
    ],
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "law-entrance-aspirant",
    },
  };

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <header className="space-y-4">
        <h1 className="text-3xl lg:text-5xl font-black tracking-tight text-[#060818] dark:text-white">
          Daily GK for CLAT 2027
        </h1>
        <p className="text-base lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
          Editorials, current-affairs news, flashcards, full mocks, and monthly
          summaries - everything a CLAT, AILET, or NLAT aspirant needs to
          dominate the GK section, in one privacy-first portal from CLAT Tribe.
        </p>
      </header>

      <section aria-label="Portal sections">
        <h2 className="text-xs font-black uppercase tracking-widest text-[#F59E0B] mb-4">
          Explore the GK Portal
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SECTIONS.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="block p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-[#F59E0B] hover:shadow-lg transition"
              >
                <h3 className="text-lg font-black text-[#060818] dark:text-white mb-1">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {s.desc}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {news.length > 0 && (
        <section aria-label="Latest current affairs">
          <h2 className="text-xs font-black uppercase tracking-widest text-[#F59E0B] mb-4">
            Latest Current Affairs
          </h2>
          <ul className="space-y-2 text-sm">
            {news
              .filter((n) => n.slug)
              .map((n) => (
                <li key={n.id}>
                  <Link
                    href={`/gk/news/${n.date}/${n.slug}`}
                    className="text-gray-700 dark:text-gray-200 hover:text-[#F59E0B] font-medium"
                  >
                    {n.title}
                  </Link>
                </li>
              ))}
          </ul>
          <p className="mt-3">
            <Link
              href="/gk/vault"
              className="text-[10px] font-black uppercase tracking-widest text-[#F59E0B] hover:text-amber-600"
            >
              See all current affairs in the Vault
            </Link>
          </p>
        </section>
      )}

      {editorials.length > 0 && (
        <section aria-label="Latest editorials">
          <h2 className="text-xs font-black uppercase tracking-widest text-[#F59E0B] mb-4">
            Latest Editorials
          </h2>
          <ul className="space-y-2 text-sm">
            {editorials.map((e) => {
              const slug = slugify(e.title);
              if (!slug) return null;
              return (
                <li key={e.id}>
                  <Link
                    href={`/gk/editorial/${e.date}/${slug}`}
                    className="text-gray-700 dark:text-gray-200 hover:text-[#F59E0B] font-medium"
                  >
                    {e.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-3">
            <Link
              href="/gk/editorial"
              className="text-[10px] font-black uppercase tracking-widest text-[#F59E0B] hover:text-amber-600"
            >
              Browse all daily editorials
            </Link>
          </p>
        </section>
      )}
    </div>
  );
}

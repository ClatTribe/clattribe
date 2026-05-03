import GKEditorial from "@/components/gk/Editorial";
import { Metadata } from "next";
import Link from "next/link";

const SUPABASE_URL = "https://fjswchcothephgtzqbgq.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
  "eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0." +
  "AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4";

export const metadata: Metadata = {
  title: "The Hindu Editorial for CLAT 2027 - Daily GK Capsule",
  description:
    "Read the latest CLAT-focused editorials and passages for Legal & GK preparation.",
  alternates: { canonical: "/gk/editorial" },
};

interface EditorialRow {
  id: string;
  date: string;
  title: string;
  source: string;
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

async function fetchRecentEditorials(): Promise<EditorialRow[]> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/gk_editorials?select=id,date,title,source&order=date.desc&limit=30`,
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

export default async function EditorialPage() {
  const editorials = await fetchRecentEditorials();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "The Hindu Editorial for CLAT 2027",
    description:
      "Daily editorials from The Hindu and The Indian Express, hand-picked for CLAT, AILET, and NLAT aspirants.",
    url: "https://www.clattribe.com/gk/editorial",
    numberOfItems: editorials.length,
    itemListElement: editorials
      .map((e, i) => {
        const slug = slugify(e.title);
        if (!slug) return null;
        return {
          "@type": "ListItem",
          position: i + 1,
          url: `https://www.clattribe.com/gk/editorial/${e.date}/${slug}`,
          name: e.title,
        };
      })
      .filter(Boolean),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      {/* Server-rendered SEO shell - real H1, real intro, real anchor list for crawlers */}
      <section className="mb-8 space-y-4">
        <h1 className="text-3xl lg:text-4xl font-black tracking-tight text-[#060818] dark:text-white">
          The Hindu Editorial for CLAT 2027
        </h1>
        <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
          Daily editorials from The Hindu and The Indian Express, hand-picked
          for CLAT, AILET, and NLAT aspirants. Each editorial comes with
          exam-ready takeaways, passage-based MCQs, and a 60-second audio
          briefing - perfect for your morning current-affairs revision.
        </p>
        {editorials.length > 0 && (
          <details className="pt-2">
            <summary className="text-[10px] font-black uppercase tracking-widest text-[#F59E0B] cursor-pointer hover:text-amber-600">
              Browse {editorials.length} recent editorials
            </summary>
            <ul className="mt-4 space-y-2 text-sm">
              {editorials.map((e) => {
                const slug = slugify(e.title);
                if (!slug) return null;
                return (
                  <li key={e.id} className="leading-relaxed">
                    <Link
                      href={`/gk/editorial/${e.date}/${slug}`}
                      className="text-gray-700 dark:text-gray-200 hover:text-[#F59E0B] font-medium"
                    >
                      {e.title}
                    </Link>
                    <span className="text-gray-400 dark:text-gray-500 text-xs ml-2">
                      {`· ${e.source} · ${formatDate(e.date)}`}
                    </span>
                  </li>
                );
              })}
            </ul>
          </details>
        )}
      </section>

      <GKEditorial />
    </>
  );
}

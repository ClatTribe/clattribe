import EditorialDetail, { EditorialCard } from "@/components/gk/EditorialDetail";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllBlogs } from "../../../../lib/blogs";
import { findTopRelated } from "../../../../lib/related";

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

interface Props {
  params: Promise<{ date: string; slug: string }>;
}

async function fetchEditorialByDateSlug(
  date: string,
  slug: string,
): Promise<EditorialCard | null> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/gk_editorials?date=eq.${encodeURIComponent(date)}&select=*`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return null;
    const rows = await res.json();
    if (!Array.isArray(rows)) return null;
    const match = rows.find(
      (r: { title?: string }) => slugify(r.title || "") === slug,
    );
    if (!match) return null;
    const optionKeys = ["A", "B", "C", "D"];
    const rawMcqs: Array<{
      q?: string;
      options?: Record<string, string>;
      correct?: string;
      explanation?: string;
    }> = Array.isArray(match.mcqs) ? match.mcqs : [];
    const mcqs = rawMcqs.map((m) => ({
      question: m.q ?? "",
      options: optionKeys.map((k) => m.options?.[k] ?? ""),
      correctAnswer: Math.max(0, optionKeys.indexOf(m.correct ?? "A")),
      explanation: m.explanation ?? "",
    }));
    const takeaways: string[] = Array.isArray(match.takeaways)
      ? match.takeaways
          .map((t: unknown) => (typeof t === "string" ? t.trim() : ""))
          .filter((t: string) => t.length > 0)
      : [];
    return {
      id: match.id,
      source: (match.source === "Indian Express"
        ? "The Indian Express"
        : match.source) as "The Hindu" | "The Indian Express",
      title: match.title,
      date: isoToDisplayDate(date),
      isoDate: date,
      slug,
      readTime: estimateReadTime(match.content || ""),
      summary: (match.content || "")
        .replace(/\n/g, " ")
        .substring(0, 200)
        .trim(),
      content: match.content || "",
      tags: [],
      mcqs,
      takeaways,
    };
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date, slug } = await params;
  const editorial = await fetchEditorialByDateSlug(date, slug);
  if (!editorial) {
    return {
      title: "Editorial Not Found",
      description: "This editorial could not be found.",
      robots: { index: false, follow: false },
    };
  }
  const description =
    editorial.summary ||
    `${editorial.source} editorial for ${editorial.date} — ${editorial.title}.`;
  const url = `/gk/editorial/${date}/${slug}`;
  return {
    title: editorial.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${editorial.title} | CLAT Tribe`,
      description,
      url,
      type: "article",
      publishedTime: editorial.isoDate,
      authors: [editorial.source],
      siteName: "CLAT Tribe",
    },
    twitter: {
      card: "summary_large_image",
      title: editorial.title,
      description,
    },
  };
}

export default async function EditorialDetailPage({ params }: Props) {
  const { date, slug } = await params;
  const editorial = await fetchEditorialByDateSlug(date, slug);
  if (!editorial) notFound();

  const allBlogs = await getAllBlogs();
  const relatedBlogs = findTopRelated(
    editorial.title,
    allBlogs,
    (b) => `${b.title} ${(b.tags || []).join(" ")}`,
    4,
  );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: editorial.title,
    datePublished: editorial.isoDate,
    dateModified: editorial.isoDate,
    author: { "@type": "Organization", name: editorial.source },
    publisher: {
      "@type": "Organization",
      name: "CLAT Tribe",
      logo: {
        "@type": "ImageObject",
        url: "https://www.clattribe.com/clattribe.png",
      },
    },
    description: editorial.summary,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.clattribe.com/gk/editorial/${date}/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <EditorialDetail editorial={editorial} />
      {relatedBlogs.length > 0 && (
        <section className="max-w-3xl mx-auto mt-10 px-6 lg:px-0">
          <h2 className="text-xs font-black uppercase tracking-widest text-[#F59E0B] mb-4">
            Related from CLAT Tribe Blogs
          </h2>
          <ul className="space-y-3">
            {relatedBlogs.map((b) => (
              <li
                key={b.slug}
                className="border-b border-gray-100 dark:border-white/10 pb-3"
              >
                <Link
                  href={`/blogs/${b.slug}`}
                  className="block text-base font-bold text-[#060818] dark:text-white hover:text-[#F59E0B] leading-snug"
                >
                  {b.title}
                </Link>
                {b.excerpt && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                    {b.excerpt}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

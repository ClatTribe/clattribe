import NewsDetail, { NewsArticle } from "@/components/gk/NewsDetail";
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

interface Props {
  params: Promise<{ date: string; slug: string }>;
}

async function fetchNewsByDateSlug(
  date: string,
  slug: string,
): Promise<NewsArticle | null> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/gk_news_articles?date=eq.${encodeURIComponent(date)}&slug=eq.${encodeURIComponent(slug)}&select=*&limit=1`,
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
    if (!Array.isArray(rows) || rows.length === 0) return null;
    const r = rows[0];
    return {
      id: r.id,
      date: r.date,
      source: r.source,
      title: r.title,
      url: r.url,
      slug: r.slug ?? slug,
      excerpt: r.excerpt ?? null,
      content: r.content ?? null,
      audio_summary: r.audio_summary ?? null,
      category: r.category ?? null,
    };
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date, slug } = await params;
  const article = await fetchNewsByDateSlug(date, slug);
  if (!article) {
    return {
      title: "News article not found",
      description: "This legal-news article could not be found.",
      robots: { index: false, follow: false },
    };
  }
  const description =
    article.audio_summary ||
    article.excerpt ||
    `${article.source} legal news from ${article.date}: ${article.title}.`;
  const url = `/gk/news/${date}/${slug}`;
  return {
    title: article.title,
    description: description.slice(0, 200),
    alternates: { canonical: url },
    openGraph: {
      title: `${article.title} | CLAT Tribe Legal News`,
      description: description.slice(0, 200),
      url,
      type: "article",
      publishedTime: article.date,
      authors: [article.source],
      siteName: "CLAT Tribe",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: description.slice(0, 200),
    },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { date, slug } = await params;
  const article = await fetchNewsByDateSlug(date, slug);
  if (!article) notFound();

  const allBlogs = await getAllBlogs();
  const relatedBlogs = findTopRelated(
    article.title,
    allBlogs,
    (b) => `${b.title} ${(b.tags || []).join(" ")}`,
    4,
  );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Organization", name: article.source },
    publisher: {
      "@type": "Organization",
      name: "CLAT Tribe",
      logo: {
        "@type": "ImageObject",
        url: "https://www.clattribe.com/clattribe.png",
      },
    },
    description: (article.audio_summary || article.excerpt || "").slice(0, 300),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.clattribe.com/gk/news/${date}/${slug}`,
    },
    isBasedOn: article.url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <NewsDetail article={article} />
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

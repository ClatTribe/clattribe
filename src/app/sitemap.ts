import { MetadataRoute } from "next";
import { getAllBlogs } from "./lib/blogs";

const SUPABASE_URL = "https://fjswchcothephgtzqbgq.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
  "eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0." +
  "AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4";

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

async function fetchEditorials(): Promise<
  Array<{ id: string; title: string; date: string }>
> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/gk_editorials?order=date.desc&limit=200&select=id,title,date`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return [];
    const rows = await res.json();
    return Array.isArray(rows) ? rows : [];
  } catch {
    return [];
  }
}

async function fetchNewsArticles(): Promise<
  Array<{ id: string; date: string; slug: string | null; title: string }>
> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/gk_news_articles?select=id,date,slug,title&slug=not.is.null&order=date.desc&limit=500`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return [];
    const rows = await res.json();
    return Array.isArray(rows) ? rows : [];
  } catch {
    return [];
  }
}

async function fetchMonthlySummaryMonths(): Promise<string[]> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/monthly_summary?select=year_month&order=year_month.desc&limit=24`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return [];
    const rows = await res.json();
    if (!Array.isArray(rows)) return [];
    const months = new Set<string>();
    rows.forEach((r: { year_month?: string }) => {
      if (r.year_month) months.add(r.year_month);
    });
    return [...months];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.clattribe.com";

  const [blogs, editorials, newsArticles, monthlySummaryMonths] =
    await Promise.all([
      getAllBlogs(),
      fetchEditorials(),
      fetchNewsArticles(),
      fetchMonthlySummaryMonths(),
    ]);

  const blogUrls: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.lastModified || post.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const editorialUrls: MetadataRoute.Sitemap = editorials
    .filter((e) => e.title && e.date && e.date !== "1970-01-01")
    .map((e) => ({
      url: `${baseUrl}/gk/editorial/${e.date}/${slugify(e.title)}`,
      lastModified: new Date(e.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const newsUrls: MetadataRoute.Sitemap = newsArticles
    .filter((a) => a.slug && a.date && a.date !== "1970-01-01")
    .map((a) => ({
      url: `${baseUrl}/gk/news/${a.date}/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const monthlySummaryUrls: MetadataRoute.Sitemap = monthlySummaryMonths.map(
    (ym) => ({
      url: `${baseUrl}/gk/monthly-summary/${ym}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }),
  );

  const gkRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/gk/dashboard`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gk/editorial`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gk/monthly-summary`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gk/static-gk`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gk/testing`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gk/flashcards`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/clat-2027-starter-kit`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/clat-gk-vault`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    ...gkRoutes,
    ...editorialUrls,
    ...newsUrls,
    ...monthlySummaryUrls,
    ...blogUrls,
  ];
}

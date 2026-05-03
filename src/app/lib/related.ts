// Tiny title-overlap relevance scorer used by detail pages to suggest
// related reading from the other content silo (blogs <-> /gk content).
// Pure function, no I/O, no React. Safe to import in server components.

const STOPWORDS = new Set<string>([
  "a",
  "an",
  "the",
  "and",
  "or",
  "but",
  "of",
  "in",
  "on",
  "at",
  "to",
  "for",
  "by",
  "with",
  "as",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "this",
  "that",
  "these",
  "those",
  "you",
  "your",
  "our",
  "they",
  "them",
  "their",
  "what",
  "which",
  "when",
  "where",
  "why",
  "how",
  "not",
  "into",
  "from",
  "about",
  "after",
  "before",
  "between",
  "over",
  "under",
  "than",
  "then",
  "also",
  "just",
  "very",
  "more",
  "most",
  "much",
  "many",
  "every",
  "each",
  "any",
  "all",
  "some",
  "other",
  "such",
  "its",
  "his",
  "her",
  "him",
  "she",
  "he",
  "it",
  "clat",
  "ailet",
  "nlat",
  "exam",
  "news",
  "today",
  "year",
  "years",
  "best",
  "guide",
  "complete",
]);

function tokenize(text: string): Set<string> {
  return new Set(
    (text || "")
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, " ")
      .split(/\s+/)
      .filter((t) => t.length >= 4 && !STOPWORDS.has(t)),
  );
}

export function scoreOverlap(srcTitle: string, candTitle: string): number {
  const a = tokenize(srcTitle);
  const b = tokenize(candTitle);
  if (a.size === 0 || b.size === 0) return 0;
  let overlap = 0;
  a.forEach((t) => {
    if (b.has(t)) overlap += 1;
  });
  return overlap / Math.min(a.size, b.size);
}

export function findTopRelated<T>(
  srcTitle: string,
  items: T[],
  getTitle: (item: T) => string,
  n = 4,
  excludeFn?: (item: T) => boolean,
): T[] {
  const scored = items
    .filter((item) => !excludeFn || !excludeFn(item))
    .map((item) => ({ item, score: scoreOverlap(srcTitle, getTitle(item)) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, n);
  return scored.map((r) => r.item);
}

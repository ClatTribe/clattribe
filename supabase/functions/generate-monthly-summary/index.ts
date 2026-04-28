// =====================================================================
// Edge Function: generate-monthly-summary
//
// Aggregates a month's gk-vault snippets into 10 section drafts inside
// the monthly_summary table. READ-ONLY against gk-vault. Writes ONLY to
// public.monthly_summary.
//
// Endpoint:    POST /functions/v1/generate-monthly-summary
// Auth:        Bearer <SERVICE_ROLE_KEY>
// Body:        { "year": 2026, "month": 4 }
// Response:    { year, month, snippets_processed, sections: [...] }
//
// Required env (set via `supabase secrets set ...`):
//   ANTHROPIC_API_KEY            sk-ant-...
//   SUPABASE_URL                 (auto-injected)
//   SUPABASE_SERVICE_ROLE_KEY    (auto-injected)
//
// Cost (Claude Sonnet 4.6): ~$2-3 per month per run. Idempotent.
// =====================================================================

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ---------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------

const ANTHROPIC_MODEL = "claude-sonnet-4-6";
const ANTHROPIC_MAX_TOKENS = 4000;
const ANTHROPIC_TEMPERATURE = 0.3;

const SECTIONS: ReadonlyArray<{ key: string; events_target: number }> = [
  { key: "Polity & Constitution",       events_target: 5 },
  { key: "Economy & Budget",            events_target: 4 },
  { key: "International Relations",     events_target: 6 },
  { key: "Legal Updates",               events_target: 6 },
  { key: "Government Schemes",          events_target: 3 },
  { key: "Sports",                      events_target: 4 },
  { key: "Awards & Honours",            events_target: 4 },
  { key: "Persons in News",             events_target: 4 },
  { key: "Books, Reports & Indices",    events_target: 3 },
  { key: "Defence & Space",             events_target: 3 },
];

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// ---------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------

interface VaultRow {
  date: string;
  source: string;
  snippets: unknown;
}

interface FlatSnippet {
  _date: string;
  _source: string;
  // shape-agnostic — Claude reads remaining keys as-is
  [k: string]: unknown;
}

interface SectionDraft {
  intro_tagline: string;
  events: Array<{
    rank: number;
    title: string;
    date: string;
    body: string;
    clat_angle: string;
    connect_to: string[];
  }>;
}

// ---------------------------------------------------------------------
// Prompt builder — the file you'll iterate on for quality
// ---------------------------------------------------------------------

function buildPrompt(
  year: number,
  month: number,
  section: string,
  target: number,
  snippets: FlatSnippet[],
): string {
  const monthName = new Date(year, month - 1, 1).toLocaleString("en-IN", {
    month: "long",
  });
  const dateFloor = `${year}-${String(month).padStart(2, "0")}-01`;

  return `You are a 15-year CLAT GK mentor reviewing the past month's news.
You are writing for 17-year-old CLAT aspirants who will revise this 2 months
before their exam — every word must serve quick recall.

INPUT: ${snippets.length} daily-briefing entries from ${monthName} ${year},
each carrying a title/heading, body/description, and source category from
the live CLAT GK Vault.

TASK — Produce a Monthly Summary section for: "${section}"

1. From the ${snippets.length} entries, select up to ${target} that genuinely
   belong to "${section}". Be ruthless — reject anything that won't appear in
   CLAT, AILET, MHCET-Law or NLAT.
2. Write a single one-sentence "intro_tagline" connecting the chosen events
   as a narrative — what is the STORY of ${monthName} in this section?
   Use cause-effect where possible (e.g., "${monthName} was the month X
   triggered Y, forcing Z").
3. For each selected event:
   - rank          1-based ordering by importance to CLAT
   - title         6-10 words, headline-style, no clickbait
   - date          best-guess YYYY-MM-DD inferred from the source entries
                   (use ${dateFloor} or month-end if unclear)
   - body          50-80 words. Factual. Include dates, figures, who-did-what.
                   No fluff. No "important", "crucial", "noteworthy".
   - clat_angle    ONE specific CLAT question prediction. Start with one of:
                   "Expect a passage on", "Likely match-the-following",
                   "Principle question on", "Static-link to",
                   "Fact-recall on".
   - connect_to    array of 3 specific items — Articles, Acts, landmark cases,
                   related events — for cross-linking to Static GK.

VOICE GUARDRAILS:
- Write to a 17-year-old, not an examiner.
- Show cause-effect across events when possible.
- Indian-school-comfortable English. Latin phrases only for legal maxims
  (and translate them inline).
- Avoid filler adjectives. Show CLAT relevance via the angle, don't tell.

If no relevant entries exist for "${section}" in ${monthName} ${year}:
{ "intro_tagline": "No major developments in ${monthName}.", "events": [] }

OUTPUT — STRICT JSON only, no markdown, no preamble:
{
  "intro_tagline": "...",
  "events": [
    {
      "rank": 1,
      "title": "...",
      "date": "${dateFloor}",
      "body": "...",
      "clat_angle": "...",
      "connect_to": ["...", "...", "..."]
    }
  ]
}

ENTRIES (read-only — do not echo):
${JSON.stringify(snippets, null, 2)}`;
}

// ---------------------------------------------------------------------
// Claude API call
// ---------------------------------------------------------------------

async function callClaude(prompt: string): Promise<SectionDraft> {
  const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY not set");

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: ANTHROPIC_MODEL,
      max_tokens: ANTHROPIC_MAX_TOKENS,
      temperature: ANTHROPIC_TEMPERATURE,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Claude API ${res.status}: ${t.slice(0, 500)}`);
  }

  const data = await res.json();
  const text: string = data?.content?.[0]?.text ?? "";

  // Strip code fences if Claude wrapped JSON
  const cleaned = text
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();

  let parsed: SectionDraft;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    throw new Error(
      `Claude returned non-JSON. First 200 chars: ${cleaned.slice(0, 200)}`,
    );
  }

  if (typeof parsed.intro_tagline !== "string" || !Array.isArray(parsed.events)) {
    throw new Error("Invalid SectionDraft shape returned by Claude");
  }

  // Light validation per event
  for (const ev of parsed.events) {
    if (!ev.title || !ev.body || !ev.clat_angle) {
      throw new Error("Event missing required fields (title/body/clat_angle)");
    }
    if (!Array.isArray(ev.connect_to)) ev.connect_to = [];
    if (typeof ev.rank !== "number") ev.rank = 0;
    if (!ev.date) ev.date = "";
  }

  return parsed;
}

// ---------------------------------------------------------------------
// Snippet flattening — shape-agnostic
// ---------------------------------------------------------------------

function flattenSnippets(rows: VaultRow[]): FlatSnippet[] {
  const out: FlatSnippet[] = [];
  for (const r of rows) {
    if (!r.snippets) continue;
    const arr = Array.isArray(r.snippets) ? r.snippets : [r.snippets];
    for (const s of arr) {
      if (s == null) continue;
      if (typeof s === "object") {
        out.push({ ...(s as Record<string, unknown>), _date: r.date, _source: r.source });
      } else if (typeof s === "string") {
        out.push({ body: s, _date: r.date, _source: r.source });
      }
    }
  }
  return out;
}

// ---------------------------------------------------------------------
// HTTP handler
// ---------------------------------------------------------------------

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const body = await req.json().catch(() => ({}));
    const year = Number(body?.year);
    const month = Number(body?.month);

    if (!Number.isFinite(year) || !Number.isFinite(month) ||
        month < 1 || month > 12 || year < 2020 || year > 2100) {
      return json({
        error: "Provide year (2020-2100) and month (1-12) in the JSON body",
      }, 400);
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceKey) {
      return json({ error: "Supabase env not configured" }, 500);
    }

    const supabase = createClient(supabaseUrl, serviceKey);

    // ---- 1. Read-only pull from gk-vault for the target month ----
    const startDate = `${year}-${String(month).padStart(2, "0")}-01`;
    const endMonth = month === 12 ? 1 : month + 1;
    const endYear = month === 12 ? year + 1 : year;
    const endDate = `${endYear}-${String(endMonth).padStart(2, "0")}-01`;

    const { data: rows, error: vaultErr } = await supabase
      .from("gk-vault")
      .select("date, source, snippets")
      .gte("date", startDate)
      .lt("date", endDate);

    if (vaultErr) {
      return json({ error: `gk-vault read failed: ${vaultErr.message}` }, 500);
    }

    const allSnippets = flattenSnippets((rows ?? []) as VaultRow[]);

    if (allSnippets.length === 0) {
      return json({
        year,
        month,
        snippets_processed: 0,
        message: "No gk-vault entries found for this month",
        sections: [],
      });
    }

    // ---- 2. Generate one section at a time (serial = avoids 429s) ----
    const results: Array<Record<string, unknown>> = [];
    for (const section of SECTIONS) {
      try {
        const prompt = buildPrompt(
          year, month, section.key, section.events_target, allSnippets,
        );
        const draft = await callClaude(prompt);

        // ---- 3. Upsert into monthly_summary (writes to NEW table only) ----
        const { error: upsertErr } = await supabase
          .from("monthly_summary")
          .upsert({
            year,
            month,
            section: section.key,
            intro_tagline: draft.intro_tagline,
            events: draft.events,
            status: "draft",
            ai_drafted: true,
          }, { onConflict: "year,month,section" });

        if (upsertErr) {
          results.push({
            section: section.key,
            error: `upsert failed: ${upsertErr.message}`,
          });
          continue;
        }

        results.push({
          section: section.key,
          events: draft.events.length,
          status: "draft",
        });
      } catch (err) {
        results.push({
          section: section.key,
          error: err instanceof Error ? err.message : String(err),
        });
      }
    }

    return json({
      year,
      month,
      snippets_processed: allSnippets.length,
      sections: results,
      generated_at: new Date().toISOString(),
    });

  } catch (err) {
    return json({
      error: err instanceof Error ? err.message : String(err),
    }, 500);
  }
});

// ---------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: { ...corsHeaders, "content-type": "application/json" },
  });
}

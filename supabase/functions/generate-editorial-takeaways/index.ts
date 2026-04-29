// Supabase Edge Function: generate-editorial-takeaways
// Generates 4 exam-ready takeaways per editorial using Gemini 2.5 Flash.
// - Reads gk_editorials WHERE takeaways IS NULL (or all if ?force=1)
// - Calls Gemini in parallel with structured JSON output
// - Writes a 4-string JSONB array back to each row
// - Idempotent: skips already-populated rows by default
//
// Invoke (POST is fine, GET is fine):
//   curl -X POST "https://<project>.supabase.co/functions/v1/generate-editorial-takeaways?limit=60" \
//        -H "Authorization: Bearer <ANON_OR_SERVICE_KEY>"
//
// Query params:
//   limit  — max rows to process this run (default 60, max 200)
//   force  — set to "1" to regenerate even if takeaways already exist

// deno-lint-ignore-file no-explicit-any
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY")!;
const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

interface EditorialRow {
  id: string;
  title: string;
  source: string;
  date: string;
  content: string;
}

const buildPrompt = (e: EditorialRow) => `You are a senior mentor at CLAT Tribe, India's #1 GK platform for CLAT preparation.

Given the editorial below, write EXACTLY 4 exam-ready takeaways for a CLAT 2026 aspirant.

REQUIREMENTS for each takeaway:
- 2-3 sentences, 40-70 words each
- Each takeaway must cover a DIFFERENT angle from this list: polity/governance, international relations/diplomacy, constitutional/legal, economic/social impact, science/environment
- Name specific actors, articles, treaties, statute sections where relevant
- Focus on what could appear in a CLAT GK or Legal Reasoning passage
- Use current law (post 1 July 2024) — Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS) and Bharatiya Sakshya Adhiniyam (BSA) replace the IPC, CrPC and Indian Evidence Act respectively
- No preamble. No commentary. No markdown.

Return ONLY a valid JSON array of EXACTLY 4 strings.

Editorial title: ${e.title}
Source: ${e.source}
Date: ${e.date}

Content:
${(e.content || "").slice(0, 8000)}`;

async function generateTakeaways(
  e: EditorialRow,
): Promise<string[] | null> {
  try {
    const res = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: buildPrompt(e) }] }],
        generationConfig: {
          temperature: 0.4,
          responseMimeType: "application/json",
          responseSchema: {
            type: "ARRAY",
            items: { type: "STRING" },
            minItems: 4,
            maxItems: 4,
          },
        },
      }),
    });
    if (!res.ok) {
      const txt = await res.text();
      console.error(`Gemini ${res.status} for editorial ${e.id}: ${txt.slice(0, 300)}`);
      return null;
    }
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) return null;
    const arr = JSON.parse(text);
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr
      .slice(0, 4)
      .map((s: any) => String(s).trim())
      .filter(Boolean);
  } catch (err) {
    console.error("generateTakeaways failed", e.id, err);
    return null;
  }
}

async function patchEditorial(
  id: string,
  takeaways: string[],
): Promise<boolean> {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/gk_editorials?id=eq.${id}`,
    {
      method: "PATCH",
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ takeaways }),
    },
  );
  return res.ok;
}

Deno.serve(async (req) => {
  try {
    const url = new URL(req.url);
    const limit = Math.min(
      Math.max(parseInt(url.searchParams.get("limit") || "60"), 1),
      200,
    );
    const force = url.searchParams.get("force") === "1";
    const filter = force ? "" : "&takeaways=is.null";

    const fetchRes = await fetch(
      `${SUPABASE_URL}/rest/v1/gk_editorials?select=id,title,source,date,content&order=date.desc&limit=${limit}${filter}`,
      {
        headers: {
          apikey: SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        },
      },
    );
    if (!fetchRes.ok) {
      return new Response(
        JSON.stringify({
          error: "Fetch editorials failed",
          status: fetchRes.status,
        }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }
    const editorials: EditorialRow[] = await fetchRes.json();
    if (editorials.length === 0) {
      return new Response(
        JSON.stringify({
          message: "No editorials need takeaways",
          processed: 0,
        }),
        { headers: { "Content-Type": "application/json" } },
      );
    }

    // Generate + write all in parallel
    const results = await Promise.all(
      editorials.map(async (e) => {
        const takeaways = await generateTakeaways(e);
        if (!takeaways) return { id: e.id, ok: false, reason: "gemini" };
        const ok = await patchEditorial(e.id, takeaways);
        return { id: e.id, ok, reason: ok ? "" : "patch" };
      }),
    );

    const successful = results.filter((r) => r.ok).length;
    const failed = results.filter((r) => !r.ok);
    return new Response(
      JSON.stringify({
        message: "Done",
        total: editorials.length,
        successful,
        failed_count: failed.length,
        failed,
      }),
      { headers: { "Content-Type": "application/json" } },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: String(err) }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
});

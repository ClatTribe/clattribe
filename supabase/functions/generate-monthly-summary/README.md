# generate-monthly-summary

Edge Function that aggregates a month's `gk-vault` snippets into 10
section drafts inside `public.monthly_summary`.

**This function is READ-ONLY against `gk-vault`.** It only writes to
the new `monthly_summary` table created by the migration.

---

## Deploy

```bash
# 1. Apply the migration first
supabase db push
# or paste supabase/migrations/20260428120000_monthly_summary.sql
# into Supabase SQL Editor and run.

# 2. Set the Anthropic API key
supabase secrets set ANTHROPIC_API_KEY=sk-ant-...

# 3. Deploy the function
supabase functions deploy generate-monthly-summary
```

## Invoke (manual)

```bash
curl -X POST \
  https://fjswchcothephgtzqbgq.supabase.co/functions/v1/generate-monthly-summary \
  -H "Authorization: Bearer <SERVICE_ROLE_KEY>" \
  -H "Content-Type: application/json" \
  -d '{"year":2026,"month":4}'
```

Expected response:

```json
{
  "year": 2026,
  "month": 4,
  "snippets_processed": 312,
  "sections": [
    { "section": "Polity & Constitution",   "events": 5, "status": "draft" },
    { "section": "Economy & Budget",        "events": 4, "status": "draft" },
    { "section": "International Relations", "events": 6, "status": "draft" },
    ...
  ],
  "generated_at": "2026-05-02T00:00:13.421Z"
}
```

After this runs, ten rows exist in `monthly_summary` with
`status = 'draft'`. A mentor opens an admin UI, edits, and flips status
to `published`.

## Mentor publish flow (until you build the admin UI)

```sql
-- Review the drafts in SQL Editor
select section, intro_tagline, jsonb_array_length(events) as n_events
from monthly_summary
where year = 2026 and month = 4
order by section;

-- Inspect one section
select events
from monthly_summary
where year = 2026 and month = 4 and section = 'International Relations';

-- After mentor edits, publish all 10 sections at once
update monthly_summary
set status = 'published', published_at = now()
where year = 2026 and month = 4 and status = 'draft';
```

## Cost

Roughly $2-3 per month per run on Claude Sonnet 4.6 (10 sections × one
call each, ~3000 input tokens × ~1500 output tokens per call).

## Schedule (optional)

The migration includes a commented-out `pg_cron` schedule block that
auto-runs this function on the 2nd of every month at 05:30 IST,
generating drafts for the previous month. Uncomment after first manual
run confirms the function works.

## Iteration loop

The single most-edited file is the `buildPrompt` function inside
`index.ts`. Tune voice and quality there. Re-run the function — it
upserts on `(year, month, section)` so re-runs replace prior drafts
**only if their `status` is still `draft`** (idempotent).

⚠️ Re-running on a `published` section WILL overwrite published copy.
If you want to lock published rows, change the upsert to a conditional
update or add a guard to the function:

```ts
.upsert({...}, { onConflict: "year,month,section", ignoreDuplicates: false })
```

becomes:

```ts
// Skip if already published
const existing = await supabase.from("monthly_summary")
  .select("status").eq("year", year).eq("month", month)
  .eq("section", section.key).maybeSingle();
if (existing.data?.status === "published") {
  results.push({ section: section.key, skipped: "published" });
  continue;
}
```

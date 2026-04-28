-- =====================================================================
-- Migration: monthly_summary
-- Purpose:  Aggregates "gk-vault" snippets into a 10-section monthly
--           compendium consumed by /gk/monthly-summary inside the portal.
-- Source:   public."gk-vault"  (snippets jsonb)
-- Target:   public.monthly_summary
-- Note:     Idempotent — safe to re-run.
-- =====================================================================

begin;

-- ---------------------------------------------------------------------
-- 1. Enums
-- ---------------------------------------------------------------------

do $$ begin
  create type public.monthly_summary_section as enum (
    'Polity & Constitution',
    'Economy & Budget',
    'International Relations',
    'Legal Updates',
    'Government Schemes',
    'Sports',
    'Awards & Honours',
    'Persons in News',
    'Books, Reports & Indices',
    'Defence & Space'
  );
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.monthly_summary_status as enum (
    'draft',
    'reviewed',
    'published',
    'archived'
  );
exception when duplicate_object then null;
end $$;

-- ---------------------------------------------------------------------
-- 2. Main table — one row per (year, month, section)
-- ---------------------------------------------------------------------

create table if not exists public.monthly_summary (
  id              uuid primary key default gen_random_uuid(),
  year            int  not null check (year between 2020 and 2100),
  month           int  not null check (month between 1 and 12),
  section         public.monthly_summary_section not null,
  intro_tagline   text,
  events          jsonb not null default '[]'::jsonb,
  status          public.monthly_summary_status not null default 'draft',
  ai_drafted      boolean not null default false,
  reviewed_by     uuid references auth.users(id),
  reviewed_at     timestamptz,
  published_at    timestamptz,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  unique (year, month, section)
);

comment on table public.monthly_summary is
  'Monthly Summary aggregations consumed by /gk/monthly-summary. One row per (year, month, section). Drafts created by generate-monthly-summary Edge Function; mentor reviews and flips status to published.';

comment on column public.monthly_summary.events is
  'JSONB array. Each entry: {rank, title, date, body, clat_angle, connect_to[], source_briefing_id?}';

-- ---------------------------------------------------------------------
-- 3. Indexes
-- ---------------------------------------------------------------------

create index if not exists monthly_summary_year_month_idx
  on public.monthly_summary (year desc, month desc);

create index if not exists monthly_summary_status_idx
  on public.monthly_summary (status);

create index if not exists monthly_summary_published_idx
  on public.monthly_summary (published_at desc)
  where status = 'published';

-- ---------------------------------------------------------------------
-- 4. updated_at trigger
-- ---------------------------------------------------------------------

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists monthly_summary_set_updated_at
  on public.monthly_summary;

create trigger monthly_summary_set_updated_at
  before update on public.monthly_summary
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------
-- 5. Row Level Security
--    - anon/authenticated:  SELECT only on published rows
--    - service_role:        full access (used by Edge Function & admin)
-- ---------------------------------------------------------------------

alter table public.monthly_summary enable row level security;

drop policy if exists "Published summaries are viewable by everyone"
  on public.monthly_summary;

create policy "Published summaries are viewable by everyone"
  on public.monthly_summary
  for select
  to anon, authenticated
  using (status = 'published');

drop policy if exists "Service role manages summaries"
  on public.monthly_summary;

create policy "Service role manages summaries"
  on public.monthly_summary
  for all
  to service_role
  using (true)
  with check (true);

-- ---------------------------------------------------------------------
-- 6. Convenience view: published summaries (anon-readable)
-- ---------------------------------------------------------------------

create or replace view public.monthly_summary_published as
select
  id,
  year,
  month,
  section,
  intro_tagline,
  events,
  published_at
from public.monthly_summary
where status = 'published';

grant select on public.monthly_summary_published to anon, authenticated;

-- ---------------------------------------------------------------------
-- 7. Helper RPC: get_monthly_summary(year, month)
--    Returns all 10 sections for a month in canonical order.
-- ---------------------------------------------------------------------

create or replace function public.get_monthly_summary(
  p_year  int,
  p_month int
)
returns table (
  section       public.monthly_summary_section,
  intro_tagline text,
  events        jsonb,
  published_at  timestamptz
)
language sql stable as $$
  select
    s.section,
    s.intro_tagline,
    s.events,
    s.published_at
  from public.monthly_summary s
  where s.year = p_year
    and s.month = p_month
    and s.status = 'published'
  order by
    array_position(
      array[
        'Polity & Constitution',
        'Economy & Budget',
        'International Relations',
        'Legal Updates',
        'Government Schemes',
        'Sports',
        'Awards & Honours',
        'Persons in News',
        'Books, Reports & Indices',
        'Defence & Space'
      ]::text[],
      s.section::text
    );
$$;

grant execute on function public.get_monthly_summary(int, int)
  to anon, authenticated;

commit;

-- =====================================================================
-- OPTIONAL: schedule monthly auto-generation via pg_cron + pg_net
-- (Run this AFTER deploying the generate-monthly-summary Edge Function
-- and confirming the cron + net extensions are enabled in your project.)
-- =====================================================================
--
-- create extension if not exists pg_cron;
-- create extension if not exists pg_net;
--
-- -- Runs at 00:00 UTC on the 2nd of every month (= 05:30 IST).
-- -- Generates drafts for the PREVIOUS month, then mentor reviews & publishes.
-- select cron.schedule(
--   'auto-generate-monthly-summary',
--   '0 0 2 * *',
--   $cron$
--     select net.http_post(
--       url     := 'https://fjswchcothephgtzqbgq.supabase.co/functions/v1/generate-monthly-summary',
--       headers := jsonb_build_object(
--         'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true),
--         'Content-Type',  'application/json'
--       ),
--       body    := jsonb_build_object(
--         'year',  extract(year  from (date_trunc('month', now() at time zone 'Asia/Kolkata') - interval '1 day'))::int,
--         'month', extract(month from (date_trunc('month', now() at time zone 'Asia/Kolkata') - interval '1 day'))::int
--       )
--     );
--   $cron$
-- );

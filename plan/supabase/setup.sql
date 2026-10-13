-- Project 520 study plan sync: database setup for Supabase.
-- Paste this whole file into Supabase > SQL Editor > New query, then press Run.
-- Running it again is safe: it only creates what's missing and refreshes the functions.

-- ---------------------------------------------------------------------------
-- Tables
-- ---------------------------------------------------------------------------

-- One row per client. Clients reach their row only through the secret token in
-- their link (via the client_pull / client_push functions below). Only coaches
-- can read or edit the table directly.
create table if not exists public.clients (
  id               text primary key,                 -- the plan's ID
  token            text not null unique default replace(gen_random_uuid()::text, '-', ''),
  name             text not null default '',
  tier             text not null default 'coaching',
  plan             jsonb not null,                   -- the whole plan, written by the coach
  plan_rev         bigint not null default 0,        -- plan.rev; the newest plan wins on the client
  data             jsonb not null default '{}'::jsonb, -- { progress, cars, fl }, written by the client
  version          integer not null default 0,       -- bumps on every change to data
  archived         boolean not null default false,
  created_at       timestamptz not null default now(),
  plan_updated_at  timestamptz not null default now(),
  data_updated_at  timestamptz,
  seen_at          timestamptz                       -- last time the client opened a page
);

-- Who counts as a coach. Add yourself after creating your login (see the setup guide).
create table if not exists public.coaches (
  user_id uuid primary key references auth.users (id) on delete cascade
);

-- ---------------------------------------------------------------------------
-- Bookkeeping trigger: keep version and timestamps right however a row is edited
-- ---------------------------------------------------------------------------
create or replace function public.clients_touch() returns trigger
language plpgsql set search_path = public, pg_temp as $$
begin
  if new.data is distinct from old.data then
    if new.version = old.version then new.version := old.version + 1; end if;
    new.data_updated_at := now();
  end if;
  if new.plan is distinct from old.plan then
    new.plan_updated_at := now();
  end if;
  return new;
end $$;

drop trigger if exists clients_touch on public.clients;
create trigger clients_touch before update on public.clients
  for each row execute function public.clients_touch();

-- ---------------------------------------------------------------------------
-- Access rules
-- ---------------------------------------------------------------------------
create or replace function public.is_coach() returns boolean
language sql stable security definer set search_path = public, pg_temp as $$
  select exists (select 1 from public.coaches where user_id = auth.uid());
$$;

alter table public.clients enable row level security;
alter table public.coaches enable row level security;

-- Supabase grants new tables to everyone by default. Take that back, then give
-- signed-in users table access that the coach-only policies below narrow down.
revoke all on table public.clients from anon, authenticated;
revoke all on table public.coaches from anon, authenticated;
grant select, insert, update, delete on table public.clients to authenticated;

drop policy if exists coach_all on public.clients;
create policy coach_all on public.clients for all to authenticated
  using (public.is_coach()) with check (public.is_coach());

-- ---------------------------------------------------------------------------
-- Client functions (called from the client pages with the token in their link)
-- ---------------------------------------------------------------------------

-- Everything the client's pages need. Also records when they last opened a page.
create or replace function public.client_pull(p_token text) returns jsonb
language plpgsql security definer set search_path = public, pg_temp as $$
declare r public.clients;
begin
  update public.clients set seen_at = now() where token = p_token returning * into r;
  if not found then
    raise exception 'unknown link' using errcode = 'P0002';
  end if;
  return jsonb_build_object('id', r.id, 'plan', r.plan, 'plan_rev', r.plan_rev, 'data', r.data, 'version', r.version);
end $$;

-- Save the client's progress and logs. p_base_version is the version the client
-- last saw; if someone else saved since, nothing is written and the current data
-- comes back so the client can merge and try again.
create or replace function public.client_push(p_token text, p_base_version integer, p_data jsonb) returns jsonb
language plpgsql security definer set search_path = public, pg_temp as $$
declare r public.clients;
begin
  if p_data is null or jsonb_typeof(p_data) <> 'object' then
    raise exception 'data must be an object' using errcode = '22023';
  end if;
  if octet_length(p_data::text) > 2000000 then
    raise exception 'data too large' using errcode = '54000';
  end if;
  update public.clients
     set data = p_data, version = version + 1, seen_at = now()
   where token = p_token and version = p_base_version
  returning * into r;
  if found then
    return jsonb_build_object('ok', true, 'version', r.version);
  end if;
  select * into r from public.clients where token = p_token;
  if not found then
    raise exception 'unknown link' using errcode = 'P0002';
  end if;
  return jsonb_build_object('ok', false, 'version', r.version, 'data', r.data);
end $$;

-- Used by the keep-awake GitHub Action so a quiet free project doesn't pause.
create or replace function public.ping() returns text
language sql stable set search_path = public, pg_temp as $$ select 'ok'::text $$;

revoke execute on function public.client_pull(text) from public, anon, authenticated;
revoke execute on function public.client_push(text, integer, jsonb) from public, anon, authenticated;
revoke execute on function public.ping() from public, anon, authenticated;
revoke execute on function public.is_coach() from public, anon, authenticated;
revoke execute on function public.clients_touch() from public, anon, authenticated;
grant execute on function public.client_pull(text) to anon, authenticated;
grant execute on function public.client_push(text, integer, jsonb) to anon, authenticated;
grant execute on function public.ping() to anon, authenticated;
grant execute on function public.is_coach() to authenticated;

-- Caring.co.kr clone schema
-- Run in Supabase SQL Editor (or via psql against the connection pooler).

create extension if not exists pgcrypto;

-- 1. services: 6 service category cards (가족요양, 방문요양, 주간보호, 요양원, 실버타운, 요양보호사 등록)
create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  tag text not null,
  title text not null,
  description text not null,
  accent text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- 2. guides: 요양 필수 가이드 카드
create table if not exists guides (
  id uuid primary key default gen_random_uuid(),
  badge text not null,
  title text not null,
  description text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- 3. reviews: 케어링 후기
create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  name text not null,
  rating smallint not null check (rating between 1 and 5),
  content text not null,
  created_at timestamptz not null default now()
);

-- 4. consult_topics: 전문가 무료 상담 카테고리별 누적 상담 건수
create table if not exists consult_topics (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  count integer not null default 0,
  sort_order integer not null default 0,
  updated_at timestamptz not null default now()
);

-- 5. staff_stories: 케어링 사람들 이야기
create table if not exists staff_stories (
  id uuid primary key default gen_random_uuid(),
  role text not null,
  name text not null,
  title text not null,
  excerpt text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- 6. more_info_links: 분야별 정보 더 보기
create table if not exists more_info_links (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- 7. company_info: 푸터에 표시되는 회사 정보 (단일 행)
create table if not exists company_info (
  id boolean primary key default true,
  name text not null,
  biz_number text not null,
  ceo text not null,
  address text not null,
  email text not null,
  ir_email text not null,
  phone text not null,
  hours text not null,
  updated_at timestamptz not null default now(),
  constraint company_info_singleton check (id)
);

-- Row Level Security: content is public read-only, no public writes.
alter table services enable row level security;
alter table guides enable row level security;
alter table reviews enable row level security;
alter table consult_topics enable row level security;
alter table staff_stories enable row level security;
alter table more_info_links enable row level security;
alter table company_info enable row level security;

create policy "Public read access" on services for select using (true);
create policy "Public read access" on guides for select using (true);
create policy "Public read access" on reviews for select using (true);
create policy "Public read access" on consult_topics for select using (true);
create policy "Public read access" on staff_stories for select using (true);
create policy "Public read access" on more_info_links for select using (true);
create policy "Public read access" on company_info for select using (true);

-- No insert/update/delete policies are defined, so writes are only possible
-- with the service_role (secret) key, which bypasses RLS.

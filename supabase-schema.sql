-- Run this in Supabase SQL editor (Dashboard → SQL Editor → New Query)
-- Apex Digital Bharat — full agency schema

-- =========================================================
-- 1. project_briefs — leads from the /contact form (project enquiries)
-- =========================================================
create table if not exists project_briefs (
  id uuid default gen_random_uuid() primary key,
  full_name text not null,
  company text not null,
  email text not null,
  phone text not null,
  service text not null, -- 'web' | 'ai' | 'uiux' | 'marketing' | 'gbp' | 'multiple' | 'not-sure'
  brief text not null,
  status text default 'new', -- 'new', 'replied', 'quoted', 'won', 'lost'
  notes text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create index if not exists idx_project_briefs_status on project_briefs(status);
create index if not exists idx_project_briefs_created on project_briefs(created_at desc);
create index if not exists idx_project_briefs_service on project_briefs(service);

alter table project_briefs enable row level security;

-- =========================================================
-- 2. clients — once a brief converts to a paying engagement
-- =========================================================
create table if not exists clients (
  id uuid default gen_random_uuid() primary key,
  company text not null,
  contact_name text,
  email text not null,
  phone text not null,
  primary_service text, -- main engagement type
  engagement_type text, -- 'project' | 'retainer' | 'productized'
  contract_value numeric, -- total project value or monthly retainer
  status text default 'active', -- 'active', 'paused', 'completed', 'churned'
  start_date date default current_date,
  end_date date,
  notes text,
  created_at timestamp with time zone default now()
);

alter table clients enable row level security;

-- =========================================================
-- 3. (legacy) audit_requests — kept for historical data
-- The free-audit form has been replaced by the project-brief form.
-- This table is preserved if you previously collected audit leads.
-- Safe to drop once you've migrated/exported any data.
-- =========================================================
create table if not exists audit_requests (
  id uuid default gen_random_uuid() primary key,
  business_name text not null,
  gbp_url text not null,
  whatsapp text not null,
  email text not null,
  industry text not null,
  problem text,
  status text default 'new',
  notes text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

alter table audit_requests enable row level security;

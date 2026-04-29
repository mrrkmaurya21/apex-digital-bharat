-- Run this in Supabase SQL editor (Dashboard → SQL Editor → New Query)

create table if not exists audit_requests (
  id uuid default gen_random_uuid() primary key,
  business_name text not null,
  gbp_url text not null,
  whatsapp text not null,
  email text not null,
  industry text not null,
  problem text,
  status text default 'new', -- 'new', 'audit_sent', 'converted', 'closed_lost'
  notes text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create index if not exists idx_audit_requests_status on audit_requests(status);
create index if not exists idx_audit_requests_created on audit_requests(created_at desc);

-- Row Level Security: only service role can read/write (we use service role key on server)
alter table audit_requests enable row level security;

-- Optional: a clients table for once they convert
create table if not exists clients (
  id uuid default gen_random_uuid() primary key,
  business_name text not null,
  contact_name text,
  whatsapp text not null,
  email text not null,
  gbp_url text,
  industry text,
  tier text not null, -- 'starter' | 'growth' | 'pro' | 'founding'
  monthly_amount numeric not null,
  status text default 'active', -- 'active', 'paused', 'churned'
  start_date date default current_date,
  notes text,
  created_at timestamp with time zone default now()
);

alter table clients enable row level security;

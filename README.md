# Apex Digital Bharat

Premium Google Business Profile management for India's local businesses.
Live site: https://apexdigitalbharat.com

## Quick start

```bash
# 1. Install
npm install

# 2. Setup env vars
cp .env.example .env.local
# Fill in Resend, Supabase, founder email

# 3. Setup Supabase
# - Create free project at supabase.com
# - Go to SQL Editor → run supabase-schema.sql
# - Copy URL + service_role key to .env.local

# 4. Setup Resend
# - Sign up at resend.com (free 3k emails/mo)
# - Add and verify apexdigitalbharat.com
# - Copy API key to .env.local

# 5. Dev
npm run dev
# http://localhost:3000

# 6. Deploy
vercel
# Connect to GitHub, push to main → auto-deploy
```

## Stack

- **Next.js 14** (App Router) — full-stack framework
- **Tailwind CSS** — styling
- **shadcn/ui patterns** — built into components (no separate install needed)
- **Resend** — transactional email (free 3k/mo)
- **Supabase** — Postgres + auth (free tier)
- **Vercel** — hosting (free tier handles 100k+ visitors/mo)
- **Google Fonts** — Fraunces (display) + Inter (body)
- **Lucide React** — icons

## Total month 1 cost

- Domain: ~₹500/year (already owned)
- Vercel: ₹0 (free tier)
- Supabase: ₹0 (free tier)
- Resend: ₹0 (free 3k/mo)
- **Total: ₹0/month**

## Project structure

```
app/
├── layout.tsx           # Root layout, SEO metadata
├── page.tsx            # Homepage
├── globals.css         # Global styles + Google Fonts
├── components/
│   ├── Header.tsx      # Sticky nav
│   └── Footer.tsx      # Footer
├── audit/
│   └── page.tsx        # Free audit request form (lead magnet)
├── api/
│   └── audit-submit/
│       └── route.ts    # POST handler: save to Supabase + email
├── pricing/
│   └── page.tsx        # 3 tiers + comparison + FAQ
├── about/
│   └── page.tsx        # Founder story + trust building
└── contact/
    └── page.tsx        # WhatsApp/email/phone

tailwind.config.ts      # Custom design tokens
supabase-schema.sql     # DB schema (run in Supabase dashboard)
```

## Design system

**Colors:**
- `bg`: `#FFFEF9` (cosmic latte / cream)
- `surface`: `#FAF6EC` (muted surface)
- `ink`: `#1A1A1A` (primary text)
- `muted`: `#4A4A4A` (secondary text)
- `accent`: `#C2410C` (warm orange CTAs)
- `accent-soft`: `#FFF7ED` (accent backgrounds)

**Typography:**
- Display: **Fraunces** (variable serif from Google Fonts)
- Body: **Inter**
- Use italic Fraunces for accent words ("get found")

**Voice:**
- Pure English, professional but warm
- Confident without being aggressive
- Specific over generic ("4 weekly posts in Hindi+English" not "regular content")
- Indian flavor in details ("Made in Bharat", "Gorakhpur", ₹ symbol everywhere)

## Pre-launch checklist

Before going live:

- [ ] Replace all `+91XXXXXXXXXX` with real WhatsApp number (search/replace globally)
- [ ] Replace `your-email@gmail.com` in `.env.local` with real founder email
- [ ] Add real WhatsApp Business profile photo + Apex logo
- [ ] Verify Resend domain (`apexdigitalbharat.com`)
- [ ] Setup Supabase tables via `supabase-schema.sql`
- [ ] Add Google Search Console + submit sitemap
- [ ] Setup Vercel Analytics (free) or Plausible
- [ ] Add Cloudflare DNS proxy (optional, free)
- [ ] Test audit form end-to-end (form → email → DB row)
- [ ] Lighthouse score: target >90 mobile, >95 desktop
- [ ] Add favicon (16/32/180/512px) — generate at favicon.io
- [ ] Add OG image 1200×630 — for social sharing
- [ ] Test mobile responsive (Chrome DevTools → iPhone 12)

## What's NOT in this MVP (intentionally)

- ❌ Client portal (build after first 5 paying clients confirm need)
- ❌ Razorpay subscription embedded (use Razorpay subscription links via WhatsApp instead — simpler)
- ❌ Blog/CMS (start with empty, add Velite or MDX after 10 clients)
- ❌ Hindi translation toggle (skip — primary audience reads English fine)
- ❌ Live chat widget (WhatsApp button is enough)

## Next steps after launch

Week 1-2: Sales sprint (in parallel with launch)
- Convert 1-2 casual mentions to pilot clients
- Walk-in audits to 20 local SMBs in Gorakhpur
- Cold WhatsApp to 50 contacts from JustDial scrape
- Target: 2-3 paying clients by Day 14

Week 3-4: Iterate based on real signals
- Add testimonials from first 3 clients
- Replace "founding member" copy with social proof
- Add a 2-3 case study mini-pages
- Setup Razorpay Subscription links

Month 2: Build client portal (only if real demand)
- Client login → view monthly report, scheduled posts, billing
- Build only what 5 clients have explicitly asked for

## Support

WhatsApp: +91 70520 67066
Email: apexbharatdigital@gmail.com

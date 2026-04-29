# Apex Digital Bharat

End-to-end digital partner for Indian businesses — web platforms, AI workflows, brand systems, growth campaigns, and Local SEO.
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
├── page.tsx             # Homepage (hero, services, who-we-serve, why-us, CTA)
├── globals.css          # Global styles + Google Fonts
├── components/
│   ├── Header.tsx       # Sticky nav (Services / About / Contact / Start a project)
│   └── Footer.tsx       # Footer (services + company columns)
├── about/
│   └── page.tsx         # Founder story, India-reach callout, how-we-work pillars
├── contact/
│   └── page.tsx         # Project brief form (name, company, email, phone, service, brief)
├── api/
│   └── project-brief/
│       └── route.ts     # POST handler: save to Supabase + email founder + confirm lead
├── privacy/
│   └── page.tsx         # Placeholder privacy policy
└── terms/
    └── page.tsx         # Placeholder terms of service

next.config.js           # Includes redirects: /audit → /contact, /pricing → /contact
tailwind.config.ts       # Custom design tokens
supabase-schema.sql      # DB schema (project_briefs, clients, legacy audit_requests)
public/
├── logo.svg             # Editorial wordmark (Apex · DIGITAL/BHARAT)
├── favicon.svg          # Orange-A square (browser tab visibility)
└── logo-option-*.svg    # Alternate logo explorations (kept for reference)
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
- Use italic Fraunces for accent words ("under one roof", "for all of Bharat")

**Voice:**
- Pure English, professional but warm
- Confident without being aggressive
- Specific over generic ("we use AI to move faster, every output goes through human review" not "AI-powered")
- Indian flavour in tone, not in literal city names — broad enough for India-wide positioning

## Services we deliver

1. **Web Development** — websites, portals, web apps (Next.js / WordPress / Shopify)
2. **AI & Automation** — chatbots, workflow automation, predictive analytics
3. **UI/UX Design** — interfaces, design systems, brand identities
4. **Digital Marketing** — SEO, paid ads, social media, content
5. **Local SEO & GBP** — Google Business Profile management (productized)

## Pre-launch checklist

Before going live:

- [x] Replace all `+91XXXXXXXXXX` with real WhatsApp number
- [x] Replace `your-email@gmail.com` in `.env.local` with real founder email
- [ ] Add real WhatsApp Business profile photo + Apex logo
- [ ] Verify Resend domain (`apexdigitalbharat.com`)
- [ ] Setup Supabase tables via `supabase-schema.sql`
- [ ] Add Google Search Console + submit sitemap
- [ ] Setup Vercel Analytics (free) or Plausible
- [ ] Test project brief form end-to-end (form → email → DB row)
- [ ] Lighthouse score: target >90 mobile, >95 desktop
- [ ] Add OG image 1200×630 — for social sharing (see `OG_IMAGE_BRIEF.md`)
- [ ] Test mobile responsive (Chrome DevTools → iPhone 12)

## What's NOT in this MVP (intentionally)

- ❌ Client portal (build after first 5 paying clients confirm need)
- ❌ Embedded Razorpay subscription (use Razorpay payment links per project — simpler)
- ❌ Blog/CMS (start with empty, add Velite or MDX after 10 clients)
- ❌ Per-service detail pages (single home page covers all 5 — split later if SEO data shows demand)
- ❌ Live chat widget (WhatsApp button is enough)
- ❌ Public pricing (agency model — quotes via project brief)

## Next steps after launch

**Week 1-2 — sales sprint (parallel with launch):**
- Convert 1-2 casual mentions into discovery calls
- LinkedIn outreach: 10 SMB founders/day in target cities
- Cold WhatsApp to warm-network contacts
- Target: 2-3 project briefs received by Day 14

**Week 3-4 — iterate based on real signals:**
- Add 2-3 case-study mini-pages from first delivered projects
- Add testimonials from first satisfied clients
- A/B test home hero copy if conversion is low

**Month 2 — productization push:**
- Add per-service landing pages for the highest-converting service
- Set up Razorpay payment links templates per service
- Consider client portal if 5+ active clients ask for it

## Support

WhatsApp: +91 70520 67066
Email: apexbharatdigital@gmail.com

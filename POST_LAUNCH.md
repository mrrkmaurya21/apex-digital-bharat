# Post-launch manual

This is your operating handbook once the site is live and leads start arriving. Everything you need to run the business day-to-day.

---

## 1. Handling a new audit request

Every audit lead is your most important task that day. Target: PDF in their inbox within 48 hours. Most weeks you should be doing 3–10 of these.

### The full workflow (≈15 minutes per audit)

**Step 1 — Lead arrives.** You'll get two signals:
- Email subject `🔥 New audit request: [Business Name]` lands in `apexbharatdigital@gmail.com`
- A new row in Supabase `audit_requests` table with `status = 'new'`

**Step 2 — Open Supabase and copy details.**
1. Go to https://supabase.com/dashboard → your project → **Table Editor** → `audit_requests`.
2. Sort by `created_at desc`. Click the new row to expand. Copy: `business_name`, `gbp_url`, `whatsapp`, `email`, `industry`, `problem`.

**Step 3 — Generate audit content with Claude Opus.**
1. Open https://claude.ai → start a new chat → make sure model is **Claude Opus**.
2. Open `AUDIT_PDF_TEMPLATE.md` in this repo. Copy the full prompt under "CLAUDE PROMPT TEMPLATE."
3. Fill in the 5 brackets: `[Business Name]`, `[Location]`, `[Industry]`, `[GBP URL]`, `[Self-reported problem]`.
4. Send. Claude generates ~1,150 words of structured audit (3 pages worth).

**Step 4 — Convert to PDF.**
1. Open Google Docs → new blank doc.
2. Copy Claude's full output → paste. Markdown formatting carries over.
3. Apply your saved template (Fraunces 24pt title, Inter 11pt body, Fraunces 14pt headers — see template file).
4. Add page breaks between Page 1 / Page 2 / Page 3.
5. Footer (Insert → Header & footer → Footer): `Apex Digital Bharat · apexdigitalbharat.com · WhatsApp +91 70520 67066`
6. **File → Download → PDF.** Filename: `Apex-Digital-Audit-[BusinessName]-[YYYY-MM-DD].pdf`

**Step 5 — Send the audit.**
1. Open the lead's row in Supabase → grab their email.
2. Compose email from `apexbharatdigital@gmail.com` (or noreply if you've set up Gmail SMTP). Use the delivery email template at the bottom of `AUDIT_PDF_TEMPLATE.md` — pre-written, just fill in `[First Name]` and `[Business Name]`.
3. Attach the PDF. Send.
4. Open WhatsApp Business → send to their number: `Hi [First Name], I just emailed your free GBP audit for [Business Name]. Take a look and let me know if you have questions. — Ashwini, Apex Digital Bharat`

**Step 6 — Update Supabase.**
1. Back to the `audit_requests` row.
2. Change `status` from `new` → `audit_sent`.
3. In `notes` field, add: `Audit sent [date]. Follow-up due [date+2].`
4. Set yourself a calendar reminder for `[date+2]` to send the WhatsApp follow-up message (template at bottom of `AUDIT_PDF_TEMPLATE.md`).

**Step 7 — 48h follow-up.**
1. Send the WhatsApp follow-up message from the audit template.
2. If they respond positively → discuss plan, send Razorpay subscription link.
3. If they sign up → update Supabase `status` to `converted`, add a row in the `clients` table.
4. If no response after 7 more days → `status` to `closed_lost`. Move on. Some leads will warm up months later.

### Lead status conventions

| status | meaning |
|---|---|
| `new` | Form submitted, audit not yet sent |
| `audit_sent` | PDF emailed + WhatsApp follow-up scheduled |
| `converted` | Signed up as paying client. Add to `clients` table. |
| `closed_lost` | No response after 7 days post-follow-up |

---

## 2. Updating the website

Vercel auto-deploys on every push to `main`. So: edit locally, commit, push, done.

```bash
cd C:\website\Owner_Website\website\apex-digital-bharat
# ... edit files ...
git add .
git commit -m "Update: short description of what changed"
git push
```

Vercel takes ~2 min to build and deploy. Watch progress at https://vercel.com/dashboard. The new version is live at apexdigitalbharat.com once the build is green.

### Common edits you'll do

- **Update founding seats counter** → `app/page.tsx` line ~50 (`7` in the stats block) and `app/pricing/page.tsx` line ~29 (`7 seats remaining` in the founding banner). Keep these two in sync until you extract to a constant.
- **Add testimonial** → no testimonials section yet. Add one between the "How it works" section and the pricing teaser on the homepage when you have your first 3 client wins. Plain quote + name + business — no photos needed for v1.
- **Change pricing** → `app/page.tsx` (homepage teaser cards) AND `app/pricing/page.tsx` (full tier cards) AND `app/layout.tsx` (SEO description). Three places. Easy to miss one.
- **Add a blog post** → out of scope right now per the README. Don't bolt this on until you have ~10 paying clients.

### Local preview before pushing

```bash
npm run dev
# http://localhost:3000
```

Always run this before pushing changes you haven't tested. Saves a wasted Vercel deploy when you spot a typo.

### If a deploy fails

Vercel emails you. Check **Deployments** → click the failed deploy → **View Build Logs**. 9 times out of 10 it's a TypeScript error. Fix locally, commit, push.

---

## 3. Tracking conversions

The whole pipeline is in two Supabase tables — `audit_requests` and `clients`. Open the dashboard once a week and look at the funnel.

### Weekly conversion check (10 min, every Monday)

1. Supabase → **Table Editor** → `audit_requests`. Filter by `created_at` last 7 days.
2. Count: total, `audit_sent`, `converted`, `closed_lost`. That's your funnel for the week.
3. Conversion goal week 1–4: **15–25%** new → converted. Below 15%? Audit quality or follow-up cadence is the issue.
4. `clients` table — count active rows. Goal: **2 by Day 14, 5 by Day 30, 10 by Day 60.**

### Quick SQL to track funnel (paste in Supabase → SQL Editor)

```sql
-- Last 30 days funnel
select
  status,
  count(*) as count
from audit_requests
where created_at > now() - interval '30 days'
group by status
order by count desc;

-- Source breakdown by industry
select
  industry,
  count(*) as total,
  sum(case when status = 'converted' then 1 else 0 end) as converted,
  round(100.0 * sum(case when status = 'converted' then 1 else 0 end) / count(*), 1) as conversion_pct
from audit_requests
where created_at > now() - interval '60 days'
group by industry
order by total desc;
```

This tells you which industries you convert best with. Once you see clinics outperform jewellers (or whatever), double down on that vertical for cold outreach.

### Updating a client

When a lead becomes a paying client, do both of these:

1. `audit_requests`: set `status = 'converted'`, note the date in `notes`.
2. `clients`: insert new row with `tier`, `monthly_amount`, `start_date = today`. The schema is in `supabase-schema.sql`.

Manual for now. When you hit ~20 clients, we can build a small admin page to do this in one click.

---

## 4. Common issues and fixes

### "The audit form returns an error in production"

Most common cause: Vercel env vars are wrong or missing. Check:

1. Vercel → your project → **Settings** → **Environment Variables**.
2. All four must be set for the **Production** environment:
   - `RESEND_API_KEY`
   - `FOUNDER_EMAIL`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. After fixing env vars, **redeploy** — env var changes don't apply to the existing build. Click **Deployments** → latest → ⋯ menu → **Redeploy**.

### "Confirmation email goes to spam"

- Domain just verified in Resend? Give it 24–48h for sender reputation to build.
- Check that DKIM record in Namecheap matches what Resend shows (it auto-rotates sometimes).
- Add a DMARC record if you skipped it: TXT on `_dmarc.apexdigitalbharat.com` value `v=DMARC1; p=none; rua=mailto:apexbharatdigital@gmail.com`. Soft policy, just enables monitoring.

### "Supabase row didn't get created"

- Check `SUPABASE_SERVICE_ROLE_KEY` in Vercel is the **service_role** secret, not the **anon** key. Anon won't write past Row Level Security.
- Vercel → **Logs** for `/api/audit-submit` will show the actual error.

### "WhatsApp link doesn't open WhatsApp"

The format is `https://wa.me/917052067066` (no plus, no spaces, country code + number). Already done correctly across the codebase. If a customer reports it broken, it's almost always their browser blocking the redirect — they should long-press → open in WhatsApp.

### "I changed pricing on /pricing but home page still shows old price"

You have to update **three** files (see "Common edits" above). Search the repo for the old price string with `git grep` to make sure you got them all:

```bash
git grep "1,999"
```

### "Vercel build fails with `Module not found`"

Run `npm install` locally — sometimes a new package was added but not committed. Then `git add package.json package-lock.json && git commit -m "Lock new deps"` and push.

### "Site is slow / Lighthouse score dropped"

- Check if you added a large image. Optimize with https://squoosh.app — target <100 KB per hero image.
- Check Vercel **Analytics** (free tier on dashboard) for which pages are slow.
- Run Lighthouse locally: `npm run build && npm run start`, then in Chrome DevTools → Lighthouse → mobile audit. Should still be >90 across the board.

### "I lost the .env.local file"

It's never in git (correctly). Re-create it locally with values from your password manager. Same values are in Vercel under Environment Variables → click **Reveal** to copy.

### "Domain stops working"

Check Namecheap DNS records for `@` (A record `76.76.21.21`) and `www` (CNAME `cname.vercel-dns.com`) are still there. Vercel sometimes asks you to re-verify after 90 days.

---

## 5. Things to do *only after* you have 5 paying clients

Don't build any of this earlier. The README's "What's NOT in this MVP" list is intentional. Premature features are the #1 reason solo founders never reach client #5.

- **Client portal** — login + monthly report viewer + billing history. Build only after 5 clients explicitly ask for it.
- **Razorpay subscription embed** — currently you send Razorpay links via WhatsApp manually. Embed only when you're processing 10+ subs/month and the manual cycle is annoying.
- **Blog** — add Velite or MDX-based blog after you have 3 client testimonials worth writing case studies about.
- **Hindi translation toggle** — only if data shows Hindi-first leads bouncing on the English site. Most Indian SMBs read English fine for service pages.
- **Live chat widget** — your WhatsApp button does the same job. Skip Intercom/Crisp.

---

## 6. Files in this repo you'll touch most often

| File | When to touch it |
|---|---|
| `app/page.tsx` | Homepage copy edits, founding seats counter |
| `app/pricing/page.tsx` | Pricing changes, new FAQ entries, founding seats counter |
| `app/about/page.tsx` | Update founder story when business grows beyond solo |
| `app/audit/page.tsx` | Add new industry options, tweak form fields |
| `AUDIT_PDF_TEMPLATE.md` | Refine the audit prompt as you learn what works |
| `supabase-schema.sql` | Add new columns to audit_requests/clients only via this file (run alterations in SQL Editor) |
| `LAUNCH_CHECKLIST.md` | Mostly done after launch — keep for future redeploys |

---

## 7. Backups

Three things you must back up:

1. **Supabase data** — Supabase dashboard → **Database** → **Backups**. Free tier gives 7 days. Once you have 10+ clients, upgrade to Pro for 14-day point-in-time recovery, ₹2,000/mo.
2. **`.env.local` values** — store in your password manager (1Password / Bitwarden / Apple Keychain). Re-creatable from Vercel but easier to have local.
3. **Audit PDFs** — keep a Google Drive folder `Apex Audits/` with one subfolder per client. Audit PDFs live there permanently for reference.

---

## 8. Monthly review (last day of each month, 30 min)

- Count: leads received, audits sent, converted, churned. Update a Google Sheet you maintain.
- Read: 3 random audit PDFs you sent — are they getting better or worse than month start? Refine the Claude prompt in `AUDIT_PDF_TEMPLATE.md`.
- Check: Vercel Analytics top pages, Search Console top queries — are people finding you for the keywords you targeted?
- Commit: any pricing/copy changes informed by the month's data.
- Plan: next month's sales sprint focus (industry, region, channel).

---

## 9. Day 5 sales sprint priorities

Per the original README, weeks 1–2 are sales-first while the site quietly bakes. Spend 70% of working hours on sales, 30% on tweaks.

In rough order of expected ROI for week 1:

1. **Convert your warm "casual mention" contacts** (people who already know you're starting this) into 1–2 free audits. These are your highest conversion rate. Target: 2 audits delivered by end of Day 7.
2. **Walk-in audits** — pick 20 SMBs in Civil Lines / Mohaddipur / Golghar that you can physically walk into. 5 per day × 4 days. Pitch the free audit, leave a one-pager (print the audit form fields + WhatsApp QR code). Realistic conversion: 1–2 of 20 → audit request.
3. **JustDial scrape + WhatsApp cold** — pick one industry (start with **clinics** — easier to find owners, faster decisions). Scrape 50 names with phone numbers. Cold message template:

   > Hi [Name], I run Apex Digital Bharat. We do Google Business Profile management for clinics in UP — weekly posts, review responses, the lot. We're offering 10 founding clients a free audit + ₹1,499/mo locked rate (vs our regular ₹3,499). Can I send you a free 3-page audit of your clinic's profile to see if it'd help? No payment, no obligation.

   Send 10/day for 5 days. Realistic: 5–10% reply, 1–2% sign up.
4. **Update the home page hero stat** as seats fill — `7` → `6` → `5`. Creates urgency. (Search-replace in two files; see "Updating the website" above.)
5. **Capture one client testimonial as soon as someone signs** — even before they see results. Quote like: *"I needed someone reliable to handle my profile. Within a week the difference was visible."* — Name, Business. Drop it on the homepage above the pricing teaser.

Goal Day 14: **2–3 paying clients.** That validates the pricing and unlocks Phase 2 of the business (case studies, social proof, the rest).

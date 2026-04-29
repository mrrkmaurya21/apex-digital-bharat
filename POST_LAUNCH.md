# Post-launch manual

This is your operating handbook once the site is live and project briefs start arriving. Everything you need to run the agency day-to-day.

---

## 1. Handling a new project brief

Every brief is your most important task that day. Target: **acknowledgement within 24 hours, full scope + quote within 48 hours.** Most weeks you should be processing 2–10 of these.

### The full workflow (≈30–45 min per brief, including thought)

**Step 1 — Lead arrives.** You'll get two signals:
- Email subject `🚀 New project brief: [Company] ([Service])` lands in `apexbharatdigital@gmail.com`
- A new row in Supabase `project_briefs` table with `status = 'new'`

**Step 2 — Quick acknowledgement (within 24 hours, ideally within 1 hour).**
1. Reply from `apexbharatdigital@gmail.com` to the lead's email. Template:

   > Hi [First Name],
   >
   > Got your brief on [project summary]. Looks interesting — let me dig in and come back within 48 hours with a clear scope, timeline, and fixed quote.
   >
   > One quick clarifying question: [pick the single most important unknown — budget range, hard deadline, existing tech stack, must-have features].
   >
   > — Ashwini, Apex Digital Bharat

2. Open WhatsApp Business → ping the same lead: `Hi [Name], saw your project brief — replying via email shortly with a clarifying question. Will have a full scope + quote within 48h.`
3. Update Supabase: `status = 'replied'`, add `notes: "Acknowledged [date], awaiting [their reply]"`.

**Step 3 — Scope and quote (within 48 hours).**
1. Open Claude (Opus or Sonnet) in claude.ai. Use this prompt template:

   > You are a senior digital agency consultant. A lead has sent us this project brief:
   >
   > **Company:** [name]
   > **Service:** [Web Dev / AI / UI/UX / Marketing / GBP / Multiple]
   > **Brief (verbatim):** [paste]
   > **Their reply to my clarifying question:** [paste]
   >
   > Generate:
   > 1. **Scope** — bullet list of deliverables, broken into phases if multi-month
   > 2. **Timeline** — realistic week-by-week plan
   > 3. **Quote** — fixed price with milestone breakdown (30% start, 40% midpoint, 30% on launch)
   > 4. **Assumptions and exclusions** — explicit list of what's IN and OUT
   > 5. **Next steps** — what they need to do to proceed
   >
   > Indian context: pricing in INR, GST extra (or inclusive — pick one and say so). Realistic Indian-agency rates. Be specific, not generic.

2. Review Claude's output. Adjust price up/down based on your gut and current capacity.
3. Convert to a clean PDF or formatted email. (Google Docs → Download as PDF works fine for v1.)
4. Send: email + WhatsApp ping with PDF attached.
5. Update Supabase: `status = 'quoted'`, add `notes: "Quote sent [date], amount ₹X, follow-up due [date+3]"`.

**Step 4 — 72h follow-up.**
1. WhatsApp: `Hi [First Name], hope you got a chance to look at the scope I sent. Happy to jump on a quick call to walk you through it — Tuesday or Thursday this week? What time works?`
2. If they want a call → Google Meet or WhatsApp video, 20 min, walk through scope + answer questions.
3. If they sign → update `status = 'won'`, add row in `clients` table, send Razorpay payment link for first milestone (30%), kick off the project.
4. If they ghost after 7 more days → `status = 'lost'`. Move on. Some leads warm up in 3–6 months.

### Lead status conventions

| status | meaning |
|---|---|
| `new` | Brief submitted, not yet acknowledged |
| `replied` | Acknowledged + clarifying question sent, awaiting their reply |
| `quoted` | Full scope + quote sent. 72h follow-up due. |
| `won` | Signed up. Project kicked off. Add to `clients` table. |
| `lost` | No response after follow-up cycle, OR explicitly declined |

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

- **Add a service** → `app/page.tsx` services grid (`<ServiceCard />` blocks). Update `app/components/Footer.tsx` services column too. SEO keywords in `app/layout.tsx` if it's a meaningful new service.
- **Add a case study** → no case studies section yet. Add one between "Who we serve" and "Why Apex" on the homepage when you have your first 3 client wins. Plain quote + name + business + outcome stat — no photos needed for v1.
- **Update the hero copy** → `app/page.tsx` lines 12–35. Test alternate variants by deploying to a Vercel preview branch first.
- **Add a per-service landing page** → create `app/services/[slug]/page.tsx`. Only do this once you see search traffic for that service in Search Console — don't pre-build pages no one asked for.

### Local preview before pushing

```bash
npm run dev
# http://localhost:3000
```

Always run this before pushing changes you haven't tested. Saves a wasted Vercel deploy when you spot a typo. **Important:** never run `npm run build` while `npm run dev` is also running — they share the `.next/` cache and will corrupt each other. Stop dev (`Ctrl+C`) before building.

### If a deploy fails

Vercel emails you. Check **Deployments** → click the failed deploy → **View Build Logs**. 9 times out of 10 it's a TypeScript error. Fix locally, commit, push.

---

## 3. Tracking conversions

The whole pipeline is in two Supabase tables — `project_briefs` and `clients`. Open the dashboard once a week and look at the funnel.

### Weekly conversion check (10 min, every Monday)

1. Supabase → **Table Editor** → `project_briefs`. Filter by `created_at` last 7 days.
2. Count: total, `replied`, `quoted`, `won`, `lost`. That's your funnel for the week.
3. Conversion goal week 1–4: **20–30%** new → won. Below 20%? Quote turnaround time, scope clarity, or pricing is off.
4. `clients` table — count `active` rows. Goal: **2 by Day 30, 5 by Day 60, 10 by Day 120.**

### Quick SQL to track funnel (paste in Supabase → SQL Editor)

```sql
-- Last 30 days funnel
select status, count(*) as count
from project_briefs
where created_at > now() - interval '30 days'
group by status
order by count desc;

-- Win rate by service vertical
select
  service,
  count(*) as briefs,
  sum(case when status = 'won' then 1 else 0 end) as won,
  round(100.0 * sum(case when status = 'won' then 1 else 0 end) / count(*), 1) as win_pct
from project_briefs
where created_at > now() - interval '90 days'
group by service
order by briefs desc;
```

This tells you which service vertical converts best. Once you see (e.g.) Web Dev outperform AI projects, you know where to focus marketing — and where you're underpriced or overpriced.

### Updating a client (when a brief converts)

1. `project_briefs`: set `status = 'won'`, note the date in `notes`.
2. `clients`: insert new row with `company`, `email`, `phone`, `primary_service`, `engagement_type` (`project` | `retainer` | `productized`), `contract_value`, `start_date = today`. Schema is in `supabase-schema.sql`.

Manual for now. When you hit ~20 clients, we can build a small admin page to do this in one click.

---

## 4. Common issues and fixes

### "The contact form returns an error in production"

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
- Vercel → **Logs** for `/api/project-brief` will show the actual error.
- Confirm the `project_briefs` table exists — re-run `supabase-schema.sql` if not.

### "WhatsApp link doesn't open WhatsApp"

The format is `https://wa.me/917052067066` (no plus, no spaces, country code + number). Already done correctly across the codebase. If a customer reports it broken, it's almost always their browser blocking the redirect — they should long-press → open in WhatsApp.

### "I changed copy on the home page but the live site still shows old text"

You probably forgot to push, or Vercel is mid-build. Check:
1. `git push` succeeded — `git status` should say "Your branch is up to date with origin/main"
2. Vercel **Deployments** — latest deploy is **Ready**, not **Building** or **Failed**
3. Hard-refresh your browser (Ctrl+F5) to bypass cache

### "Vercel build fails with `Module not found`"

Run `npm install` locally — sometimes a new package was added but not committed. Then `git add package.json package-lock.json && git commit -m "Lock new deps"` and push.

### "Site is slow / Lighthouse score dropped"

- Check if you added a large image. Optimise with https://squoosh.app — target <100 KB per hero image.
- Check Vercel **Analytics** (free tier on dashboard) for which pages are slow.
- Run Lighthouse locally: `npm run build && npm run start`, then in Chrome DevTools → Lighthouse → mobile audit. Should still be >90 across the board.

### "I lost the .env.local file"

It's never in git (correctly). Re-create it locally with values from your password manager. Same values are in Vercel under Environment Variables → click **Reveal** to copy.

### "Domain stops working"

Check Namecheap DNS records for `@` (A record `76.76.21.21`) and `www` (CNAME `cname.vercel-dns.com`) are still there. Vercel sometimes asks you to re-verify after 90 days.

### "Old `/audit` or `/pricing` URL throws an error"

It shouldn't — `next.config.js` has permanent redirects to `/contact`. If it doesn't redirect, you probably have an outdated build cache. Run `rm -rf .next && npm run dev` locally or trigger a fresh Vercel deploy.

---

## 5. Things to do *only after* you have 5 paying clients

Don't build any of this earlier. The README's "What's NOT in this MVP" list is intentional. Premature features are the #1 reason solo founders never reach client #5.

- **Per-service landing pages** — split the homepage services grid into individual `/services/web`, `/services/ai`, etc. pages with case studies. Build only after Search Console shows demand for specific service queries.
- **Client portal** — login + project status + billing history. Build only after 5 clients explicitly ask for it.
- **Razorpay subscription embed** — currently you send Razorpay payment links via WhatsApp manually. Embed only when you're processing 10+ subs/month for the productized GBP service.
- **Blog / case studies** — add Velite or MDX-based blog after you have 3 client outcomes worth writing about.
- **Live chat widget** — your WhatsApp button does the same job. Skip Intercom/Crisp.

---

## 6. Files in this repo you'll touch most often

| File | When to touch it |
|---|---|
| `app/page.tsx` | Homepage copy edits, services grid changes, new sections |
| `app/about/page.tsx` | Update founder story, India-reach pitch, pillars |
| `app/contact/page.tsx` | Form field tweaks, new service options in dropdown |
| `app/components/Header.tsx` / `Footer.tsx` | Nav and footer link changes |
| `app/api/project-brief/route.ts` | Email template tweaks, new validation rules |
| `AUDIT_PDF_TEMPLATE.md` | Refine the GBP audit prompt for Local SEO leads |
| `supabase-schema.sql` | Schema changes — apply via Supabase SQL Editor |
| `LAUNCH_CHECKLIST.md` | Mostly done after launch — keep for future redeploys |

---

## 7. Backups

Three things you must back up:

1. **Supabase data** — Supabase dashboard → **Database** → **Backups**. Free tier gives 7 days. Once you have 10+ clients, upgrade to Pro for 14-day point-in-time recovery, ₹2,000/mo.
2. **`.env.local` values** — store in your password manager (1Password / Bitwarden / Apple Keychain). Re-creatable from Vercel but easier to have local.
3. **Project deliverables** — keep a Google Drive folder `Apex Projects/` with one subfolder per client (PDFs of scopes, design mockups, wireframes, deliverable artefacts). Permanent record for case studies later.

---

## 8. Monthly review (last day of each month, 30 min)

- Count: briefs received, replied, quoted, won, lost, churned. Update a Google Sheet you maintain.
- Read: 3 random quotes you sent — are they sharper than last month? Adjust the Claude scope-and-quote prompt.
- Check: Vercel Analytics top pages, Search Console top queries — are people finding you for the keywords you targeted ("digital agency India", "web development India", etc.)?
- Commit: any pricing/copy changes informed by the month's data.
- Plan: next month's sales sprint focus (industry, channel, service vertical).

---

## 9. Day 5 sales sprint priorities

Per the README, weeks 1–2 are sales-first while the site quietly bakes. Spend 70% of working hours on sales, 30% on tweaks.

In rough order of expected ROI for week 1:

1. **Convert your warm "casual mention" contacts** (people who already know you're starting this) into discovery calls. These are your highest conversion rate. Target: 2 discovery calls by end of Day 7.

2. **LinkedIn outreach to founders** — pick one persona (start with **D2C brand owners** or **clinic chains** — both spend on web + marketing). Connect with 10/day with a personalised note:

   > Hi [Name], saw [their company] is doing well in [city/category]. We're a small Indian digital studio (web, AI, marketing, GBP) — happy to send over a free 15-min audit of your current site + Google profile if useful. No pitch, just genuine feedback. — Ashwini

   Realistic: 30–40% accept rate, 5–10% reply, 1–2% become a brief.

3. **Partner referrals** — message 5 people in adjacent services (CA firms, design freelancers, content writers) offering 10% revenue share for any client they refer. They have leads who need digital work but they don't deliver it themselves. Easiest source of qualified briefs.

4. **Content seed** — write 1 LinkedIn post per week sharing a short case ("How we'd fix [common Indian SMB digital problem]"). Even without case studies, frame as "what we do for clients in this situation". Target: 3 posts in week 1, 1 inbound brief by Day 14.

5. **Capture one client testimonial as soon as someone signs** — even before you've delivered. Quote like: *"They asked the right questions in the first call. That alone made the decision easy."* — Name, Company. Drop on the homepage between Who-We-Serve and Why-Apex sections.

Goal Day 30: **2–3 paying clients.** That validates the agency positioning and gives you the first case studies to convert the next 10.

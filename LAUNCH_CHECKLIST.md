# Launch Checklist — Apex Digital Bharat

Do these in order. Each step ends with a clear "you should now have X" so you know it's done.

There are 9 sections. Estimated total time: **2.5–3 hours of focused work**, but realistic elapsed time is 1–2 days because some steps (Resend domain, Razorpay KYC) wait on external verification.

---

## 0. Before you start — gather these in one tab group

Open these 8 tabs and keep them open for the whole session:

1. https://github.com — needs to be logged in
2. https://vercel.com — same Google/GitHub login is fine
3. https://supabase.com
4. https://resend.com
5. https://ap.www.namecheap.com (or whichever registrar holds `apexdigitalbharat.com`)
6. https://search.google.com/search-console
7. https://dashboard.razorpay.com
8. WhatsApp Business app on your phone

Have your **PAN card image, bank account details (account number + IFSC), and a cancelled cheque image** ready as files — Razorpay KYC will ask.

---

## 1. GitHub repo (5 min)

You need a private GitHub repo for the code before Vercel can deploy.

1. Go to https://github.com/new
2. Repository name: `apex-digital-bharat`
3. Owner: your personal account
4. Visibility: **Private** (you can flip to Public later if you want)
5. Do **not** initialize with README, .gitignore, or license — Claude already did `git init` locally.
6. Click **Create repository**.
7. On the next page, copy the HTTPS URL — looks like `https://github.com/<your-username>/apex-digital-bharat.git`. Save this. You'll give it to Claude in Phase 3.

✅ You should now have: a private empty GitHub repo URL.

---

## 2. Supabase project + schema (15 min)

1. Go to https://supabase.com/dashboard → **New project**
2. Organization: your default (or create one)
3. Project name: **apex-digital-bharat**
4. Database password: generate a strong one and **save it in your password manager**
5. Region: **South Asia (Mumbai) ap-south-1**
6. Plan: **Free**
7. Click **Create new project**. Wait ~2 minutes for provisioning.
8. Once green, left sidebar → **SQL Editor** → **New query**.
9. Open `supabase-schema.sql` in this repo, copy its full contents, paste into the SQL editor.
10. Click **Run**. You should see "Success. No rows returned." Both tables (`audit_requests` and `clients`) will appear in **Table Editor**.
11. Now grab your keys. Left sidebar → **Project Settings** (gear icon) → **API**.
12. Copy two values into a scratch note:
    - **Project URL** (looks like `https://xxxxxxxxxxxx.supabase.co`)
    - **service_role** secret key under "Project API keys" — click "Reveal" first. **This is the secret one — never paste it in client code.**

✅ You should now have: an empty Supabase project with the schema run, plus URL + service_role key in a scratch note.

---

## 3. Resend account + domain verification (10 min active, then 24–48h DNS propagation)

You need to send transactional email from `noreply@apexdigitalbharat.com` so audit confirmations don't go to spam.

1. Go to https://resend.com → **Sign up** (Google login fastest)
2. Once in, left sidebar → **Domains** → **Add Domain**
3. Domain: **apexdigitalbharat.com**
4. Region: **eu-west-1** is the closest free option (any works)
5. Resend will show 4 DNS records to add — **leave this tab open**, you'll need it for step 4. The records are typically:
   - 1 × MX record on `send.apexdigitalbharat.com`
   - 1 × TXT record on `send.apexdigitalbharat.com` (SPF)
   - 1 × TXT record on `resend._domainkey.apexdigitalbharat.com` (DKIM)
   - 1 × TXT record on `_dmarc.apexdigitalbharat.com` (DMARC, optional but recommended)
6. Don't click "Verify" yet — go to step 4 first.

✅ You should now have: a Resend domain pending DNS verification, with the records list visible.

---

## 4. Namecheap DNS — for both Vercel and Resend (15 min, plus 5–60 min propagation)

We're configuring DNS twice on the same panel: once for Resend (above), once for Vercel (later in step 5).

1. Go to https://ap.www.namecheap.com → **Domain List** → click **Manage** next to `apexdigitalbharat.com`.
2. Switch to the **Advanced DNS** tab.
3. **Delete the default Namecheap parking records** (CNAME `www → parkingpage.namecheap.com` and URL Redirect `@`). Keep any custom records you've added.
4. **Add Resend records** (from step 3). For each one:
    - Click **Add new record** → pick the type (MX / TXT) → host = subdomain part (e.g. `send` or `resend._domainkey`) → value = exactly what Resend showed → save.
    - For MX record: priority is usually 10.
5. Save all changes (green checkmark next to each row).
6. Go back to your Resend tab → click **Verify DNS records**. May take 5–60 minutes; sometimes 24h. Refresh occasionally.
7. Once verified, in Resend → **API Keys** → **Create API Key** → name it `apex-prod` → permission **Full access**. Copy the key (starts with `re_`) into your scratch note. **You only see it once.**

We'll add the Vercel-specific records (apex A record + www CNAME) in step 6 after Vercel hands them to you.

✅ You should now have: Resend domain showing **"Verified"**, an API key starting with `re_`, and Vercel-related DNS rows still pending.

---

## 5. Vercel signup + import GitHub repo (10 min)

1. Go to https://vercel.com/signup → sign in with GitHub (same account as step 1).
2. After login, **Add New** (top right) → **Project**.
3. **Import Git Repository** → find `apex-digital-bharat` → click **Import**. (If you don't see it, click "Adjust GitHub App Permissions" and grant access to the repo.)
4. Configure project:
   - Framework Preset: **Next.js** (auto-detected)
   - Root directory: leave blank (`./`)
   - Build & Output Settings: leave defaults
   - Environment Variables: **add these now** (copy/paste from your scratch note):
       - `RESEND_API_KEY` = `re_xxx...` (from step 4)
       - `FOUNDER_EMAIL` = `apexbharatdigital@gmail.com`
       - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase Project URL (from step 2)
       - `SUPABASE_SERVICE_ROLE_KEY` = your service_role key (from step 2)
5. Click **Deploy**. First deploy takes 2–4 minutes.
6. Once deployed, you'll get a `apex-digital-bharat-xxxx.vercel.app` URL. Open it — site should be live. The audit form might still error because we haven't pointed the domain yet, but the pages should render.

✅ You should now have: a `*.vercel.app` URL where your site loads.

---

## 6. Connect domain `apexdigitalbharat.com` to Vercel (10 min active, plus DNS propagation)

1. In Vercel project → **Settings** → **Domains** → enter `apexdigitalbharat.com` → **Add**.
2. Vercel will offer two options. Pick **A Record** (faster than nameserver change). Vercel shows:
   - Apex (`@`): A record → `76.76.21.21`
   - www: CNAME → `cname.vercel-dns.com`
3. Go back to Namecheap → **Advanced DNS** for the domain.
4. Add: **A Record** → host `@` → value `76.76.21.21` → TTL automatic.
5. Add: **CNAME Record** → host `www` → value `cname.vercel-dns.com.` (note the trailing dot) → TTL automatic.
6. Save. DNS propagation usually 5–30 minutes; sometimes longer.
7. Back in Vercel → click **Refresh** next to the domain. When both apex and www show **"Valid configuration"**, the domain is live.
8. Visit https://apexdigitalbharat.com in an incognito window. Site should load. Vercel auto-issues an SSL cert (Let's Encrypt) — give it 5 more minutes if HTTPS isn't ready immediately.

✅ You should now have: site reachable on https://apexdigitalbharat.com with a green padlock.

---

## 7. WhatsApp Business setup (15 min)

You need WhatsApp Business (not regular WhatsApp) so leads see a proper business profile.

1. On your phone, install **WhatsApp Business** from Play Store / App Store.
2. **IMPORTANT:** if you've been using +91 70520 67066 on regular WhatsApp, back it up first:
    - Regular WhatsApp → **Settings** → **Chats** → **Chat backup** → **Back up**.
    - Then uninstall regular WhatsApp **only after** WhatsApp Business is verified.
3. Open WhatsApp Business → register with **+91 70520 67066** → enter the OTP.
4. Set up business profile:
    - **Business name:** Apex Digital Bharat
    - **Category:** Marketing & PR
    - **Description:** Premium Google Business Profile management for India's local businesses. Free audits available.
    - **Address:** your area + Gorakhpur, UP (or skip if you prefer not to publish)
    - **Hours:** 9 AM – 7 PM, Mon–Sat
    - **Email:** apexbharatdigital@gmail.com
    - **Website:** https://apexdigitalbharat.com
    - **Profile photo:** upload `public/logo.svg` after converting to PNG (use https://cloudconvert.com/svg-to-png — render at 800x800, square)
5. **Settings** → **Business tools** → **Greeting message** → enable. Suggested copy:

   > Hi! Thanks for messaging Apex Digital Bharat. I'll get back to you within 1 hour during business hours (9 AM – 7 PM IST). For an immediate free GBP audit, you can also fill the form on apexdigitalbharat.com/audit.

6. **Business tools** → **Quick replies** → add a few:
    - `/audit` → "Sure, I can run a free audit on your Google Business Profile. Could you share your business name and city?"
    - `/pricing` → "Three plans — Starter ₹1,999, Growth ₹3,499, Pro ₹5,999. First 10 founding clients lock Growth at ₹1,499/mo forever. Want me to walk you through?"
    - `/payment` → "Payment via UPI Autopay through Razorpay. Monthly billing, no lock-in. I'll send a payment link as soon as you're ready."
7. **Business tools** → **Catalog** → optional, skip for now (revisit after 5 paying clients).

✅ You should now have: WhatsApp Business showing your branded profile when someone messages +91 70520 67066.

---

## 8. Razorpay account + KYC (20 min active, then 1–3 days for verification)

1. Go to https://dashboard.razorpay.com/signup → register with `apexbharatdigital@gmail.com`.
2. Complete email + phone OTP.
3. **Account Details** form:
    - Business name: **Apex Digital Bharat**
    - Business type: **Sole Proprietor** (recommended unless you've already registered as Pvt Ltd / LLP)
    - Business category: **Software & Internet Services** → **Marketing**
4. **KYC documents** — upload these:
    - **PAN card** (yours, since sole prop)
    - **Aadhaar** (number + face on cam — Razorpay does video KYC)
    - **Bank account proof** — cancelled cheque OR bank statement (last 3 months) with name + account number visible
    - **GST certificate** — *skip* if turnover under ₹20L/year. You can add later. Razorpay accepts non-GST sole prop accounts.
5. **Settlement bank account:** the account you want client payments to land in. Use your personal savings account (sole prop) or a current account if you have one.
6. Submit. Razorpay verifies in 1–3 business days.
7. While waiting, **don't** wire up Razorpay subscriptions in code yet. Per the README, the launch path is: WhatsApp → invoice with Razorpay payment link → done. Building Razorpay subscription embeds is post-launch.

After Razorpay approves:
- Dashboard → **Subscriptions** → **Plans** → create three plans:
   - `Starter ₹1,999/month` (interval: monthly)
   - `Growth ₹3,499/month`
   - `Pro ₹5,999/month`
   - Plus: `Founding Growth ₹1,499/month` (label clearly so you don't auto-charge non-founding members)
- For each plan, click **Create subscription link** when a client signs up — paste it into WhatsApp. That's the whole payment flow for now.

✅ You should now have: Razorpay KYC submitted (status "Verification in progress" is fine to move on from).

---

## 9. Google Search Console + sitemap (10 min)

Tell Google your site exists so it indexes you for "GBP management Gorakhpur" and similar queries.

1. Go to https://search.google.com/search-console.
2. **Add property** → **URL prefix** → enter `https://apexdigitalbharat.com` → **Continue**.
3. Verification methods — pick **HTML tag** (easiest with Vercel):
    - Copy the `<meta name="google-site-verification" content="..." />` tag.
    - Tell Claude (or do it yourself): add the verification string into `app/layout.tsx` metadata as:
      ```ts
      verification: { google: "the-content-string-here" },
      ```
    - Push to main, Vercel auto-deploys, then click **Verify**.
4. Once verified, **Sitemaps** → submit URL: `https://apexdigitalbharat.com/sitemap.xml`. (We don't generate one yet — flag this for the post-launch sprint. Until we add `next-sitemap`, Google will just crawl from the homepage. Acceptable for week 1.)
5. Submit individual page URLs for fast indexing — **URL Inspection** → paste each → **Request Indexing**:
    - `https://apexdigitalbharat.com`
    - `https://apexdigitalbharat.com/pricing`
    - `https://apexdigitalbharat.com/about`
    - `https://apexdigitalbharat.com/contact`
    - `https://apexdigitalbharat.com/audit`

✅ You should now have: Google Search Console verified for your domain, key pages submitted for indexing.

---

## 10. End-to-end audit form test (5 min) — DO THIS LAST

After everything else is connected, open **https://apexdigitalbharat.com/audit** in incognito and submit a test request with your own details:

- Business name: `Test Business` (so you know to delete the row later)
- GBP link: any Google Maps link
- WhatsApp: a number you can check (your own)
- Email: an email you can check (gmail)
- Industry: any
- Problem: "Test submission"

Expected result within 30 seconds:
1. ✅ Page shows "Audit request received." green confirmation.
2. ✅ Email lands in **apexbharatdigital@gmail.com** with subject `🔥 New audit request: Test Business`.
3. ✅ Email lands in the address you typed, subject `Your audit is in the queue — Apex Digital Bharat`.
4. ✅ New row appears in Supabase → **Table Editor** → `audit_requests` table.

If any of those four fail, check Vercel → **Logs** for the `/api/audit-submit` route. Most common issues:
- Email going to spam → check spam folder, ask Resend support if domain was just verified
- DB row missing → re-check `SUPABASE_SERVICE_ROLE_KEY` env var in Vercel (it should be the **service_role** key, not the **anon** key)
- 500 error → wrong env var name (case-sensitive)

Once test passes, in Supabase → delete the test row before going public.

---

## 🎯 Definition of "launched"

You're done with launch when **all five** of these are true:

- [ ] https://apexdigitalbharat.com loads with a green padlock
- [ ] Audit form end-to-end test passed (steps above)
- [ ] WhatsApp Business profile shows your branding
- [ ] Razorpay KYC submitted
- [ ] Google Search Console verified

Tell Claude "manual setup done, here are my keys/IDs" and Claude will start Phase 3 (push to GitHub, finalize, write `POST_LAUNCH.md`).

---

## Things to keep handy in your password manager / scratch note

| Item | Where it came from | Used in |
|---|---|---|
| GitHub repo URL | Step 1 | Phase 3 (Claude pushes) |
| Supabase Project URL | Step 2 | Vercel env var `NEXT_PUBLIC_SUPABASE_URL` |
| Supabase service_role key | Step 2 | Vercel env var `SUPABASE_SERVICE_ROLE_KEY` |
| Supabase database password | Step 2 | Future direct DB access |
| Resend API key (`re_...`) | Step 4 | Vercel env var `RESEND_API_KEY` |
| Vercel deployment URL | Step 5 | First sanity check |
| Razorpay key id + key secret | Step 8 (after KYC) | Future subscription integration |
| Google Search Console verification string | Step 9 | `app/layout.tsx` metadata |

# Audit PDF Generation — Claude Max workflow

This is your **lead magnet engine**. Every audit request you receive should generate a 3-page PDF within 15 minutes using this template.

## How to use

1. New audit request lands (email + Supabase row)
2. Open Claude Opus in claude.ai
3. Paste the prompt below, filling in the brackets `[]`
4. Claude generates 3-page PDF-ready content
5. Copy into Google Docs → Export as PDF → Send via email + WhatsApp
6. Total time: ~15 minutes per audit

---

## CLAUDE PROMPT TEMPLATE (copy-paste into Claude Opus)

```
You are an expert local SEO consultant writing a professional 3-page audit
PDF for an Indian small business. The business is:

BUSINESS NAME: [e.g., Sharma Jewellers]
LOCATION: [e.g., Civil Lines, Gorakhpur, UP]
INDUSTRY: [clinic / salon / restaurant / jeweller / coaching / retail / services]
GBP URL: [paste link or "search for them on Google Maps and infer"]
SELF-REPORTED PROBLEM: [from form, or "Not specified"]

Write a polished audit report with EXACTLY 3 sections, each fitting on 1 PDF
page. Output as clean markdown ready to paste into Google Docs.

Tone: Professional but warm. Pure English. Specific and actionable, not
generic. Show that you actually looked at their profile (or the type of
business profile typical for that industry/location).

============================================================

PAGE 1: Executive Summary

Format:
- Top: "Google Business Profile Audit"
- Subtitle: "[Business Name] — [Date]"
- A 2-paragraph overview of what they're doing well and what's broken
- 3-line "Bottom line" highlighting the SINGLE biggest issue and the
  estimated impact (specific numbers — "estimated 20-30% of nearby
  searches missing your profile")
- 4 quick stats (estimate from typical for industry):
   * Profile completeness: X%
   * Posts in last 60 days: estimate
   * Reviews unanswered: estimate
   * Q&A questions unanswered: estimate

============================================================

PAGE 2: 10 Specific Issues (with fix priority)

Format a numbered list of EXACTLY 10 issues. Each issue:
- One clear sentence describing the issue
- Priority level: HIGH / MEDIUM / LOW
- Estimated impact: 1-line specific outcome (e.g., "could surface to
  ~40 more daily searches")

Be specific to this business type. For a jeweller in Gorakhpur, mention
festive content (Karva Chauth, Dhanteras, Diwali) timing. For a clinic,
mention OPD timing display, doctor profiles, insurance accepted. For a
coaching center, mention exam-cycle content, course pages.

Real issues to consider (pick the 10 most relevant):
1. Last post older than 30 days
2. No business hours / incorrect hours
3. No services/menu listed
4. Sparse photo gallery (<10 photos)
5. Photos older than 6 months
6. Negative review unaddressed for >30 days
7. Common Q&A questions unanswered
8. Missing attributes (wifi, parking, payment options, accessibility)
9. Inconsistent NAP (name/address/phone) vs Justdial/Sulekha listing
10. No festive/seasonal posts in last 90 days
11. Missing booking/appointment link
12. Generic business description (no keywords)
13. Wrong category or missing secondary categories
14. No special hours for festivals
15. No FAQ in description
16. No products listed (for product-based business)

============================================================

PAGE 3: 4 Sample Posts + Next Steps

Format:

"4 sample posts written for [Business Name]:"

Then write 4 distinct, ready-to-publish Google Business Profile posts:
- Post 1: A "What's New" announcement post (e.g., new arrival, new doctor,
  new service)
- Post 2: A festive/seasonal post (most relevant upcoming Indian festival)
- Post 3: A customer education post (FAQ they probably get asked, answered
  publicly)
- Post 4: An offer/CTA post (limited-time offer or seasonal discount)

Each post:
- 60-80 words (Google's sweet spot)
- Mix of Hindi+English where natural (e.g., "Diwali special offer — 15% off
  on all gold jewellery this week!")
- Include a clear CTA
- Include 2-3 relevant hashtags at the end

Then a "Next Steps" section:
- "If you'd like us to handle all this, we offer 3 plans starting at ₹1,999/mo"
- "First 10 clients get our Founding Member rate at ₹1,499/mo locked forever"
- "Reply to this email or WhatsApp +91 70520 67066 to discuss"
- 30-day money-back guarantee
- Closing line: "Best regards, Ashwini Kumar Maurya, Apex Digital Bharat"

============================================================

CRITICAL RULES:
- Do NOT make up specific data you can't verify (e.g., exact star rating,
  exact review count). Use phrases like "based on a typical [industry]
  profile in [location]" or "we estimate."
- Do NOT promise specific revenue increases — you can mention "increased
  search visibility" or "more profile views" but never "₹X more revenue."
- Be specific to Indian context: Hindi flavors in posts, Indian festivals,
  Indian customer behavior patterns.
- The PDF will be sent within 48 hours, so write as if you've genuinely
  spent time looking at their profile.
- Length: PAGE 1 ~250 words, PAGE 2 ~400 words, PAGE 3 ~500 words.
  Total ~1,150 words across 3 pages.

Generate the full audit now.
```

---

## How to convert to PDF

After Claude generates the audit:

1. Copy entire output
2. Open Google Docs (or Pages, Word — anything)
3. Paste — formatting will preserve markdown structure
4. Apply this styling (one-time setup, save as template):
   - Title: Fraunces 24pt bold
   - Body: Inter 11pt
   - Headers: Fraunces 14pt bold
   - Page break between sections
   - Footer: "Apex Digital Bharat · apexdigitalbharat.com · WhatsApp +91 70520 67066"
   - Logo top-right (small, ~80px)
5. File → Download → PDF
6. Filename: `Apex-Digital-Audit-[BusinessName]-[Date].pdf`

## Delivery email template

```
Subject: Your free GBP audit — [Business Name]

Hi [First Name],

As promised, attached is your detailed Google Business Profile audit.

Quick summary:
- We found [X] specific issues with your current profile
- Top priority: [single biggest issue from page 1]
- Sample posts are included on page 3 — feel free to use them directly

If you'd like to discuss what we found or if you want us to handle all
this for you, just reply to this email or WhatsApp us at +91 70520 67066.

We're currently running a Founding Member offer — first 10 clients get
₹1,499/mo (Growth tier) locked forever, regular price ₹3,499. 7 seats
remaining.

No obligation, no pressure. The audit is yours to keep.

Best,
Ashwini Kumar Maurya
Apex Digital Bharat
Gorakhpur, UP
apexdigitalbharat.com
```

## WhatsApp follow-up (48 hours after audit sent)

```
Hi [First Name], hope you got a chance to look at the audit PDF we sent.

Did anything stand out as particularly urgent for [Business Name]?

If you'd like, I can spend 15 minutes on a call walking you through the
top 3 fixes — no charge. Or if you'd prefer we just handle everything,
the Founding Member offer (₹1,499/mo locked) is still open.

Either way, happy to help.
```

## Tracking

Update the Supabase row after each audit:
- `status`: change from `new` → `audit_sent`
- `notes`: add "Audit sent [date], follow-up due [date+2]"

After follow-up:
- `status`: → `converted` if they sign up, `closed_lost` if no response after 7 days

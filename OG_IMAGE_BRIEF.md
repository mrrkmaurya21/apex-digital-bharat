# OG Image Brief — Canva instructions

You need to create one image: `public/og-image.png` at exactly **1200 x 630 pixels**. This is what shows when someone shares your site on WhatsApp, LinkedIn, Twitter, or in iMessage.

## Quick Canva recipe (~10 minutes)

1. Go to canva.com → "Create a design" → "Custom size" → enter **1200 x 630 px**.
2. Set the canvas background to **#FFFEF9** (cosmic latte / cream).
3. Add a subtle background grain — Canva → "Elements" → search "grain texture" or "paper texture", lower opacity to ~5%.
4. Add a small orange square in the top-left as the logo mark:
   - Rectangle → fill **#C2410C** → corner radius ~14 → size 84 x 84 px → position 80 px from left, 80 px from top
   - Inside it, the letter "A" — Fraunces font, 56 pt, white **#FFFEF9**, centered
5. Beside or below the logo mark, type **Apex Digital Bharat** — Fraunces 28 pt, color **#1A1A1A**, weight 500.
6. The big tagline (centered, takes the visual middle of the canvas):
   - Line 1: **Where India's businesses get** — Fraunces 64 pt, **#1A1A1A**, weight 400
   - Line 2: ***found* online.** — Fraunces 64 pt italic, **#C2410C**, weight 300 (italicize just the word "found")
7. Below the tagline, smaller subline:
   - **Premium Google Business Profile management.** — Inter 22 pt, **#4A4A4A**, weight 400
8. Bottom-right corner footer:
   - **apexdigitalbharat.com · Made in Bharat** — Inter 16 pt, **#6B7280**, weight 500
9. Export as PNG → name it `og-image.png`.
10. Drop the file into `public/og-image.png` in this project.

## Color reference

| Token | Hex | Use |
|---|---|---|
| `bg` | `#FFFEF9` | Canvas background |
| `accent` | `#C2410C` | Logo mark fill, italic accent word |
| `ink` | `#1A1A1A` | Primary tagline text, brand name |
| `muted` | `#4A4A4A` | Subline |
| `subtle` | `#6B7280` | Footer URL line |

## Font fallbacks

If Canva doesn't have Fraunces (it should, search the font picker):
- Display: try **Playfair Display** or **Cormorant Garamond** instead
- Body: **Inter** (definitely in Canva)

## After you save it

After dropping `og-image.png` into `public/`, add the OG image references to `app/layout.tsx` metadata. Either you do it, or tell me to and I will. The block to add inside `openGraph: { ... }`:

```ts
images: [
  {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "Apex Digital Bharat — Where India's businesses get found online",
  },
],
```

And inside `twitter: { ... }`:

```ts
images: ["/og-image.png"],
```

## Sanity check

Once deployed, paste your URL into:
- https://www.opengraph.xyz/ — preview cards across platforms
- https://cards-dev.twitter.com/validator — Twitter-specific
- WhatsApp: send the URL to yourself and check the preview

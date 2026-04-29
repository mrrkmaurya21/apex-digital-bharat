import Link from "next/link";
import { Check, ArrowRight, Sparkles, X } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="px-6 py-20 max-w-6xl mx-auto">
      {/* HERO */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-block px-3 py-1.5 bg-accent-soft text-accent text-[11px] font-medium rounded-full mb-6 uppercase tracking-wider">
          Pricing
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-normal tracking-tightest mb-4">
          Premium service. <em className="text-accent italic font-light">Honest pricing.</em>
        </h1>
        <p className="text-muted text-lg leading-relaxed">
          No setup fees. Cancel anytime. 30-day money-back guarantee.
          All prices exclusive of GST.
        </p>
      </div>

      {/* FOUNDING OFFER */}
      <div className="mb-12 p-6 bg-accent-soft border border-accent-border rounded-xl flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex gap-3 items-start">
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-bg" />
          </div>
          <div>
            <div className="font-medium text-accent-deep mb-1">
              Founding Member offer · 7 seats remaining
            </div>
            <div className="text-sm text-accent-deep">
              First 10 paying clients get the Growth tier locked at{" "}
              <strong className="font-semibold">₹1,499/month forever</strong>.
              Once they&apos;re full, normal pricing applies.
            </div>
          </div>
        </div>
        <Link href="/audit" className="btn-primary flex-shrink-0">
          Claim seat
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* TIERS */}
      <div className="grid md:grid-cols-3 gap-4 mb-20">
        <Tier
          name="Starter"
          price="₹1,999"
          tagline="For single-location small businesses just getting started with their Google profile."
          features={[
            "4 weekly posts (Hindi + English)",
            "Review responses",
            "1 GBP location",
            "Basic monthly report",
            "Email support (48hr SLA)",
          ]}
          notIncluded={[
            "Q&A management",
            "Competitor tracking",
            "Ad copy",
          ]}
        />

        <Tier
          name="Growth"
          price="₹3,499"
          tagline="For ambitious local businesses serious about dominating local search."
          features={[
            "Everything in Starter",
            "Q&A management",
            "Detailed insights report",
            "WhatsApp support (same-day)",
            "Priority turnaround",
            "Festive content calendar",
            "Photo refresh (4/mo)",
          ]}
          notIncluded={["Multi-location", "Dedicated manager"]}
          featured
        />

        <Tier
          name="Pro"
          price="₹5,999"
          tagline="For multi-location businesses or those running paid ads alongside SEO."
          features={[
            "Everything in Growth",
            "Up to 3 GBP locations",
            "Competitor tracking",
            "Google Ads copy",
            "Dedicated account manager",
            "Quarterly strategy call",
            "Custom analytics dashboard",
          ]}
          notIncluded={[]}
        />
      </div>

      {/* COMPARISON BLOCK */}
      <div className="mb-20 bg-surface border border-border rounded-2xl p-8 md:p-12">
        <div className="text-xs text-accent font-medium uppercase tracking-wider mb-3">
          Why we&apos;re cheaper
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tighter mb-8">
          Same quality. Lower price. Here&apos;s how.
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="font-medium mb-3">What others charge</div>
            <div className="space-y-2 text-sm text-muted">
              <Row label="Birdeye (USA)" price="₹15,000+/mo" />
              <Row label="Synup" price="₹12,000+/mo" />
              <Row label="Local digital agencies" price="₹15,000–₹50,000/mo" />
              <Row label="Freelancers" price="₹5,000–₹15,000/mo (inconsistent)" />
            </div>
          </div>
          <div>
            <div className="font-medium mb-3">Why we&apos;re different</div>
            <ul className="space-y-3 text-sm text-muted leading-relaxed">
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  Built in Gorakhpur with 4× lower operating costs than Bangalore
                  agencies — we pass that on to you.
                </span>
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  AI-powered drafting + human review = 5× faster than agencies
                  using junior content writers.
                </span>
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  Productized service — same workflow for every client means we
                  scale without hiring more managers.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-20">
        <div className="text-xs text-accent font-medium uppercase tracking-wider mb-3">
          Common questions
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tighter mb-12">
          Things you&apos;re probably wondering.
        </h2>

        <div className="space-y-8 max-w-3xl">
          <Faq
            q="Can I cancel anytime?"
            a="Yes. Monthly plans cancel with 7 days notice. No lock-in contracts. We also offer a 30-day money-back guarantee — if you're not happy with the first month's work, we refund."
          />
          <Faq
            q="What does the audit cost?"
            a="Nothing. The audit is genuinely free, no payment, no obligation. We deliver a 3-page PDF within 48 hours analyzing your current GBP, suggesting fixes, and showing 4 sample posts written for your business."
          />
          <Faq
            q="Will you really write content in Hindi?"
            a="Yes. Most of our clients prefer Hindi or Hindi+English mixed posts because their customers respond to them better. We can do pure English too if your audience is English-first."
          />
          <Faq
            q="Do you need access to my Google account?"
            a="We need 'Manager' access to your Google Business Profile (not full Google account login). You add us as a manager via Google's official portal — takes 2 minutes. We can revoke our access anytime, even if you don't cancel the service."
          />
          <Faq
            q="When will I see results?"
            a="Visible profile activity (posts, replies) starts week 1. Search ranking improvements typically show in 30–60 days. Foot traffic / call increases usually become noticeable in 60–90 days. We send a baseline report at start so you can measure clearly."
          />
          <Faq
            q="What payment methods do you accept?"
            a="UPI, Razorpay (cards, net banking, UPI Autopay), or direct bank transfer. We send invoices monthly with GST. Most clients pay via UPI Autopay so they never have to think about it."
          />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pb-12">
        <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tighter mb-4">
          Still unsure? Get a free audit.
        </h2>
        <p className="text-muted mb-8 max-w-xl mx-auto">
          See exactly what we&apos;d do for your business — no payment needed.
        </p>
        <Link href="/audit" className="btn-primary">
          Get my free audit
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

function Tier({
  name,
  price,
  tagline,
  features,
  notIncluded,
  featured = false,
}: {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  notIncluded: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`bg-bg p-7 rounded-xl relative ${
        featured ? "border-2 border-accent" : "border border-border"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-7 bg-accent text-bg text-[10px] px-3 py-1 rounded-full font-medium uppercase tracking-wider">
          Most popular
        </div>
      )}
      <div className={`text-sm font-medium mb-2 ${featured ? "text-accent" : "text-muted"}`}>
        {name}
      </div>
      <div className="flex items-baseline gap-1 mb-3">
        <span className="font-serif text-4xl font-medium">{price}</span>
        <span className="text-sm text-muted">/month</span>
      </div>
      <p className="text-sm text-muted mb-6 leading-relaxed">{tagline}</p>

      <ul className="space-y-2.5 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
        {notIncluded.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2 text-sm text-subtle line-through"
          >
            <X className="w-4 h-4 flex-shrink-0 mt-0.5 no-underline" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/audit"
        className={`block text-center py-3 rounded-lg font-medium text-sm transition-all ${
          featured
            ? "bg-ink text-bg hover:bg-accent"
            : "bg-bg text-ink border border-ink hover:bg-ink hover:text-bg"
        }`}
      >
        Start with free audit
      </Link>
    </div>
  );
}

function Row({ label, price }: { label: string; price: string }) {
  return (
    <div className="flex justify-between py-2 border-b border-border last:border-0">
      <span>{label}</span>
      <span className="font-medium text-ink">{price}</span>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="border-b border-border pb-6">
      <div className="font-medium text-lg mb-2">{q}</div>
      <p className="text-muted leading-relaxed">{a}</p>
    </div>
  );
}

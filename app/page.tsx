import Link from "next/link";
import { ArrowRight, Clock, MessageSquare, Search, Check, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="reveal inline-block px-3 py-1.5 bg-accent-soft text-accent text-[11px] font-medium rounded-full mb-6 uppercase tracking-wider">
            Gorakhpur · Made in Bharat
          </div>

          <h1 className="reveal reveal-1 font-serif text-5xl md:text-7xl leading-[1.05] mb-6 font-normal tracking-tightest">
            Where India&apos;s businesses get{" "}
            <em className="text-accent italic font-light">found</em> online.
          </h1>

          <p className="reveal reveal-2 text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-2xl">
            Premium Google Business Profile management for ambitious local businesses —
            clinics, jewellers, coaching centers, restaurants. Weekly content, review
            management, and Q&amp;A handled by our team. Starting at{" "}
            <span className="text-ink font-medium">₹1,999/month</span>.
          </p>

          <div className="reveal reveal-3 flex flex-col sm:flex-row gap-3 mb-16">
            <Link href="/audit" className="btn-primary">
              Get a free audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/pricing" className="btn-secondary">
              See pricing
            </Link>
          </div>

          <div className="reveal reveal-4 flex flex-wrap gap-12 pt-8 border-t border-border">
            <div>
              <div className="font-serif text-3xl font-medium">80%</div>
              <div className="text-xs text-muted mt-1">Cheaper than Birdeye</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-medium">48hr</div>
              <div className="text-xs text-muted mt-1">Audit turnaround</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-medium">100%</div>
              <div className="text-xs text-muted mt-1">Indian team</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-medium">7</div>
              <div className="text-xs text-muted mt-1">Founding seats left</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="services" className="px-6 py-24 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs text-accent font-medium uppercase tracking-wider mb-3">
            The problem
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tighter mb-2 max-w-2xl">
            Your Google Profile is leaking customers.
          </h2>
          <p className="text-muted mb-12 max-w-xl">
            Most local businesses set up their Google profile once and forget about it.
            Meanwhile, three things quietly cost you walk-ins every week.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <ProblemCard
              icon={<Clock className="w-4 h-4 text-accent" />}
              title="No fresh content for weeks"
              body="Google ranks active profiles higher. An inactive profile slowly disappears from local search results — and you never see it happen."
            />
            <ProblemCard
              icon={<MessageSquare className="w-4 h-4 text-accent" />}
              title="Negative reviews unanswered"
              body="73% of customers read reviews before visiting. Unaddressed bad reviews cost you walk-ins from people who would have given you a chance."
            />
            <ProblemCard
              icon={<Search className="w-4 h-4 text-accent" />}
              title="Customers find competitors first"
              body="Every search you don't show up for is a customer walking into someone else's shop. Local SEO is a slow leak — until it isn't."
            />
          </div>
        </div>
      </section>

      {/* SOLUTION / HOW IT WORKS */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="text-xs text-accent font-medium uppercase tracking-wider mb-3">
          How it works
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tighter mb-12 max-w-2xl">
          Four steps. Then you stop thinking about it.
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <Step
            num="01"
            title="Free audit"
            body="We analyze your current Google profile and send a 3-page PDF report within 48 hours — no payment needed."
          />
          <Step
            num="02"
            title="Onboarding call"
            body="20-minute WhatsApp or phone call. We learn your brand voice, services, festive patterns, and competitive position."
          />
          <Step
            num="03"
            title="Weekly delivery"
            body="Posts, review responses, Q&A — all drafted in your brand voice, scheduled and published. You approve via WhatsApp."
          />
          <Step
            num="04"
            title="Monthly insights"
            body="Detailed report showing search impressions, customer actions, top queries, and competitor benchmarks."
          />
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="px-6 py-24 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs text-accent font-medium uppercase tracking-wider mb-3">
                Pricing
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tighter">
                Premium service. Honest pricing.
              </h2>
              <p className="text-muted mt-3">
                No setup fees. Cancel anytime. 30-day money-back guarantee.
              </p>
            </div>
            <Link href="/pricing" className="btn-secondary self-start md:self-end">
              See full pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            <PricingCard
              tier="Starter"
              price="₹1,999"
              tagline="For single-location small businesses"
              features={[
                "4 weekly posts",
                "Review responses",
                "1 GBP location",
                "Monthly basic report",
              ]}
            />
            <PricingCard
              tier="Growth"
              price="₹3,499"
              tagline="For ambitious local businesses"
              features={[
                "Everything in Starter",
                "Q&A management",
                "Insights report",
                "WhatsApp support",
                "Priority turnaround",
              ]}
              featured
            />
            <PricingCard
              tier="Pro"
              price="₹5,999"
              tagline="For multi-location businesses"
              features={[
                "Everything in Growth",
                "Up to 3 locations",
                "Competitor tracking",
                "Ad copy included",
                "Dedicated manager",
              ]}
            />
          </div>

          <div className="mt-8 p-5 bg-accent-soft border border-accent-border rounded-xl flex gap-3 items-start">
            <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-3 h-3 text-bg" />
            </div>
            <div className="text-sm text-accent-deep">
              <strong className="font-medium">Founding Member offer:</strong> First 10
              clients get the Growth tier locked at{" "}
              <strong className="font-medium">₹1,499/month forever</strong>. 7 seats
              remaining.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 max-w-6xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tighter mb-6">
          Get a free audit.
          <br />
          <em className="text-accent italic font-light">No payment needed.</em>
        </h2>
        <p className="text-muted mb-10 max-w-xl mx-auto">
          We&apos;ll analyze your Google Business Profile and send you a detailed PDF
          report within 48 hours. You decide if you want to work with us — there&apos;s
          no obligation.
        </p>
        <Link href="/audit" className="btn-primary">
          Get my free audit
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}

function ProblemCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-bg p-6 rounded-lg border border-border hover:-translate-y-1 transition-transform duration-300">
      <div className="w-8 h-8 bg-accent-soft rounded-md flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="font-medium text-ink mb-2">{title}</div>
      <p className="text-sm text-muted leading-relaxed">{body}</p>
    </div>
  );
}

function Step({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div>
      <div className="font-serif text-2xl text-accent mb-3">{num}</div>
      <div className="font-medium mb-2">{title}</div>
      <p className="text-sm text-muted leading-relaxed">{body}</p>
    </div>
  );
}

function PricingCard({
  tier,
  price,
  tagline,
  features,
  featured = false,
}: {
  tier: string;
  price: string;
  tagline: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`bg-bg p-6 rounded-xl relative ${
        featured ? "border-2 border-accent" : "border border-border"
      }`}
    >
      {featured && (
        <div className="absolute -top-2.5 left-6 bg-accent text-bg text-[10px] px-3 py-1 rounded-full font-medium uppercase tracking-wider">
          Most popular
        </div>
      )}
      <div
        className={`text-xs font-medium mb-2 ${
          featured ? "text-accent" : "text-muted"
        }`}
      >
        {tier}
      </div>
      <div className="flex items-baseline gap-1 mb-1">
        <span className="font-serif text-3xl font-medium">{price}</span>
        <span className="text-xs text-muted">/month</span>
      </div>
      <div className="text-xs text-muted mb-5">{tagline}</div>
      <ul className="space-y-2">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm">
            <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

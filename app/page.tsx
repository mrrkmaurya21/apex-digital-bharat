import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Sparkles,
  Palette,
  Megaphone,
  MapPin,
  Store,
  Building2,
  Layers,
  ShieldCheck,
  HandCoins,
  Handshake,
  FileText,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { TrustStrip } from "./components/TrustStrip";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="reveal inline-block px-3 py-1.5 bg-accent-soft text-accent text-[11px] font-medium rounded-full mb-6 uppercase tracking-wider">
            Made in Bharat · End-to-end digital
          </div>

          <h1 className="reveal reveal-1 font-serif text-5xl md:text-7xl leading-[1.05] mb-6 font-normal tracking-tightest">
            Software, design, and growth —{" "}
            <em className="text-accent italic font-light">under one roof.</em>
          </h1>

          <p className="reveal reveal-2 text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-2xl">
            Web platforms, AI workflows, brand systems, and growth campaigns for
            ambitious Indian businesses — from single-location retailers to
            multi-state enterprises. One partner. End-to-end.
          </p>

          <div className="reveal reveal-3 flex flex-col sm:flex-row gap-3 mb-4">
            <Link href="/contact" className="btn-primary">
              Start a project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#services" className="btn-secondary">
              Explore services
            </Link>
          </div>

          <TrustStrip className="reveal reveal-3 mb-16" />

          <div className="reveal reveal-4 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 pt-8 border-t border-border">
            <Stat number="2026" label="Founded · Made in Bharat" />
            <Stat number="Solo-led" label="Founder-built, not outsourced" />
            <Stat number="5" label="Services under one roof" />
            <Stat number="< 1 hr" label="WhatsApp reply window" />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="services" className="px-6 py-24 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs text-accent font-medium uppercase tracking-wider mb-3">
            What we do
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tighter mb-2 max-w-2xl">
            End-to-end digital solutions, one partner.
          </h2>
          <p className="text-muted mb-12 max-w-xl">
            Whether you&apos;re a retail store going online or an enterprise
            modernising operations — we have the expertise to make it happen.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <ServiceCard
              icon={<Code2 className="w-4 h-4 text-accent" />}
              title="Web Development"
              body="High-performance websites, portals, and web apps built with modern frameworks. From landing pages to complex platforms — responsive, fast, and SEO-ready."
            />
            <ServiceCard
              icon={<Sparkles className="w-4 h-4 text-accent" />}
              title="AI & Automation"
              body="Intelligent chatbots, workflow automation, predictive analytics, and AI-driven tools that cut costs and unlock new capabilities for your operations."
            />
            <ServiceCard
              icon={<Palette className="w-4 h-4 text-accent" />}
              title="UI/UX Design"
              body="User-centred design that converts. We craft intuitive interfaces, design systems, and brand identities that make your product stand out and delight users."
            />
            <ServiceCard
              icon={<Megaphone className="w-4 h-4 text-accent" />}
              title="Digital Marketing"
              body="SEO, paid advertising, social media strategy, and content marketing that drives real traffic and conversions. Data-driven campaigns with measurable ROI."
            />
            <ServiceCard
              icon={<MapPin className="w-4 h-4 text-accent" />}
              title="Local SEO & GBP"
              body="Premium Google Business Profile management — weekly content, review responses, Q&A handled by our team. The fastest path to getting found locally."
              fullWidth
            />
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="text-xs text-accent font-medium uppercase tracking-wider mb-3">
          Who we serve
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tighter mb-2 max-w-2xl">
          Built for every scale of ambition.
        </h2>
        <p className="text-muted mb-12 max-w-xl">
          From a single-store retailer to a multi-location enterprise — our
          solutions meet you where you are and take you where you want to go.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <AudienceCard
            icon={<Store className="w-5 h-5 text-accent" />}
            title="Retail & SMBs"
            body="Digital-first solutions for businesses ready to grow online."
            bullets={[
              "E-commerce stores & marketplaces",
              "Point-of-sale & inventory systems",
              "Local SEO & Google Business optimisation",
              "Social media & WhatsApp commerce",
              "Customer loyalty & CRM platforms",
            ]}
          />
          <AudienceCard
            icon={<Building2 className="w-5 h-5 text-accent" />}
            title="Enterprise & Institutions"
            body="Scalable platforms for organisations with complex requirements."
            bullets={[
              "Custom ERP & workflow automation",
              "Multi-tenant SaaS platforms",
              "Healthcare & education portals",
              "Compliance-ready data architecture",
              "Legacy system modernisation",
            ]}
          />
        </div>
      </section>

      {/* WHY APEX */}
      <section className="px-6 py-24 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs text-accent font-medium uppercase tracking-wider mb-3">
            Why Apex
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tighter mb-12 max-w-2xl">
            Your growth is our only metric.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <WhyCard
              icon={<Layers className="w-4 h-4 text-accent" />}
              title="Full-stack expertise"
              body="One team for design, development, and marketing. No fragmented vendors. No miscommunication. Every part of the work answers to the same people."
            />
            <WhyCard
              icon={<ShieldCheck className="w-4 h-4 text-accent" />}
              title="India-first approach"
              body="We understand Indian markets, compliance standards, and user behaviour — from tier-1 cities to tier-3 towns. Every decision is made with your customer in mind."
            />
            <WhyCard
              icon={<HandCoins className="w-4 h-4 text-accent" />}
              title="Transparent pricing"
              body="No hidden costs, no scope-creep surprises. Fixed quotes with milestone-based delivery. You know what you&rsquo;re paying and what you&rsquo;re getting before we start."
            />
            <WhyCard
              icon={<Handshake className="w-4 h-4 text-accent" />}
              title="Long-term partnership"
              body="We don&rsquo;t just build and leave. Ongoing support, optimisation, and scaling as your business grows. We win when you win."
            />
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="text-xs text-accent font-medium uppercase tracking-wider mb-3 text-center">
          What happens next
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tighter mb-12 text-center max-w-2xl mx-auto">
          From brief to first commit, in under a week.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <NextStep
            num="01"
            icon={<FileText className="w-4 h-4 text-accent" />}
            title="Send a brief"
            body="Tell us what you want to build — services needed, timeline, budget range. 2 minutes via the form, or just WhatsApp us."
          />
          <NextStep
            num="02"
            icon={<MessageCircle className="w-4 h-4 text-accent" />}
            title="We reply within 24 hours"
            body="Quick acknowledgement plus one clarifying question. No bots, no SDR scripts — straight from the founder."
          />
          <NextStep
            num="03"
            icon={<CheckCircle2 className="w-4 h-4 text-accent" />}
            title="Full quote within 48 hours"
            body="Clear scope, fixed price, milestone breakdown, realistic timeline. No obligation. The brief is yours to keep either way."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 max-w-6xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tighter mb-6">
          Let&apos;s build something{" "}
          <em className="text-accent italic font-light">great.</em>
        </h2>
        <p className="text-muted mb-10 max-w-xl mx-auto">
          Tell us about your project. Whether it&apos;s a new idea or an
          existing system that needs a revamp — we&apos;re ready.
        </p>
        <Link href="/contact" className="btn-primary">
          Send a project brief
          <ArrowRight className="w-4 h-4" />
        </Link>
        <TrustStrip className="mt-6 justify-center" />
      </section>
    </>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-2xl md:text-3xl font-medium tracking-tighter">
        {number}
      </div>
      <div className="text-xs text-muted mt-1 leading-snug">{label}</div>
    </div>
  );
}

function NextStep({
  num,
  icon,
  title,
  body,
}: {
  num: string;
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-bg p-7 rounded-xl border border-border">
      <div className="flex items-center gap-3 mb-4">
        <div className="font-serif text-xl text-accent">{num}</div>
        <div className="w-8 h-8 bg-accent-soft rounded-md flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="font-medium text-ink mb-2">{title}</div>
      <p className="text-sm text-muted leading-relaxed">{body}</p>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  body,
  fullWidth = false,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`bg-bg p-6 rounded-lg border border-border hover:-translate-y-1 transition-transform duration-300 ${
        fullWidth ? "md:col-span-2" : ""
      }`}
    >
      <div className="w-8 h-8 bg-accent-soft rounded-md flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="font-medium text-ink mb-2">{title}</div>
      <p className="text-sm text-muted leading-relaxed">{body}</p>
    </div>
  );
}

function AudienceCard({
  icon,
  title,
  body,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  bullets: string[];
}) {
  return (
    <div className="bg-bg p-7 rounded-xl border border-border">
      <div className="w-10 h-10 bg-accent-soft rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="font-serif text-2xl font-normal tracking-tighter mb-2">
        {title}
      </div>
      <p className="text-sm text-muted mb-5 leading-relaxed">{body}</p>
      <ul className="space-y-2 text-sm">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-muted">
            <span className="text-accent mt-0.5 flex-shrink-0">·</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WhyCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-bg p-6 rounded-lg border border-border">
      <div className="w-8 h-8 bg-accent-soft rounded-md flex items-center justify-center mb-3">
        {icon}
      </div>
      <div className="font-medium text-ink mb-2">{title}</div>
      <p className="text-sm text-muted leading-relaxed">{body}</p>
    </div>
  );
}

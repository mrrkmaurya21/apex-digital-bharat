import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="px-6 py-20 max-w-4xl mx-auto">
      {/* HERO */}
      <div className="mb-16">
        <div className="inline-block px-3 py-1.5 bg-accent-soft text-accent text-[11px] font-medium rounded-full mb-6 uppercase tracking-wider">
          About
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-normal tracking-tightest mb-6">
          Built in Bharat. <em className="text-accent italic font-light">For all of Bharat.</em>
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-2xl">
          Apex Digital Bharat is a small team obsessed with one thing: helping local
          businesses across India get found by the customers searching for them right now.
        </p>
      </div>

      {/* WHY */}
      <div className="mb-20 prose prose-lg max-w-none">
        <h2 className="font-serif text-3xl font-normal tracking-tighter mb-6">
          Why we started this.
        </h2>
        <div className="space-y-5 text-muted leading-relaxed text-base">
          <p>
            A few years ago, my uncle ran a small clinic in Gorakhpur. Good doctor,
            loyal patients, decent reputation. Then a new clinic opened two streets
            away — younger doctor, no real reputation, but a Google profile with daily
            updates, photos, and quick review responses.
          </p>
          <p>
            Within a year, his walk-ins dropped 40%. Not because the new clinic was
            better — but because new patients searching &ldquo;clinic near me&rdquo; on
            Google found <em>them</em> first. By the time my uncle realized what was
            happening, the damage was done.
          </p>
          <p>
            That story repeats across every town in India — jewellers, salons, coaching
            centers, restaurants. The local SEO &ldquo;agencies&rdquo; that should help
            cost ₹15,000–₹50,000 a month, target tier-1 clients only, and deliver
            generic content. The cheaper alternatives (₹2,000 freelancers) deliver
            inconsistent garbage.
          </p>
          <p>
            <strong className="text-ink font-medium">
              We&apos;re building the agency we wish my uncle had access to.
            </strong>{" "}
            Premium quality, brutal pricing, productized service. Built where we
            live, with a cost base that lets us serve businesses across India
            properly — from metros to small towns.
          </p>
        </div>
      </div>

      {/* INDIA REACH */}
      <div className="mb-20 p-7 bg-accent-soft border border-accent-border rounded-xl">
        <div className="text-xs text-accent font-medium uppercase tracking-wider mb-3">
          Across India
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-normal tracking-tighter mb-4 text-accent-deep">
          Built to serve businesses across India.
        </h2>
        <p className="text-base text-accent-deep leading-relaxed">
          Clinics in Delhi NCR, jewellers in Bengaluru, coaching centres in
          Lucknow, salons in Hyderabad, restaurants in Mumbai, retail in Pune,
          spas in Kolkata. Anywhere your customers search &ldquo;near me&rdquo;,
          we work. <strong className="font-medium">No metro premium, no
          tier-2 surcharge</strong> — same productized service, same pricing,
          anywhere in Bharat.
        </p>
      </div>

      {/* HOW WE'RE DIFFERENT */}
      <div className="mb-20">
        <h2 className="font-serif text-3xl font-normal tracking-tighter mb-8">
          How we work.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Pillar
            title="Productized, not project-based"
            body="Same workflow, every client. We're not freelancers winging it — we have a tested system that delivers consistently."
          />
          <Pillar
            title="AI-powered drafting, human-reviewed"
            body="Every post, every reply, every report goes through human review before it goes live. AI gives us speed; humans guarantee quality."
          />
          <Pillar
            title="WhatsApp-first communication"
            body="No portal logins, no ticketing systems. You message us on WhatsApp, we reply. Like a friend who happens to handle your marketing."
          />
        </div>
      </div>

      {/* CONTACT */}
      <div className="mb-20 p-8 bg-surface border border-border rounded-2xl">
        <h2 className="font-serif text-3xl font-normal tracking-tighter mb-6">
          Reach us directly.
        </h2>
        <p className="text-muted mb-6 max-w-xl">
          We&apos;re a small team — when you message us, you&apos;re reaching the
          people actually doing the work. No layers, no SDRs, no &ldquo;account
          executives.&rdquo;
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <ContactCard
            icon={<MapPin className="w-4 h-4" />}
            label="Location"
            value="Gorakhpur, Uttar Pradesh"
          />
          <ContactCard
            icon={<Phone className="w-4 h-4" />}
            label="WhatsApp"
            value="+91 70520 67066"
            href="https://wa.me/917052067066"
          />
          <ContactCard
            icon={<Mail className="w-4 h-4" />}
            label="Email"
            value="apexbharatdigital@gmail.com"
            href="mailto:apexbharatdigital@gmail.com"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-12">
        <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tighter mb-4">
          Curious if we can help?
        </h2>
        <p className="text-muted mb-8">
          Get a free audit — no payment, no obligation.
        </p>
        <Link href="/audit" className="btn-primary">
          Get my free audit
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-6 bg-surface border border-border rounded-lg">
      <div className="font-medium mb-2">{title}</div>
      <p className="text-sm text-muted leading-relaxed">{body}</p>
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="p-4 bg-bg border border-border rounded-lg hover:border-accent transition-colors">
      <div className="flex items-center gap-2 text-xs text-muted mb-2">
        {icon}
        <span className="uppercase tracking-wider font-medium">{label}</span>
      </div>
      <div className="text-sm font-medium">{value}</div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}

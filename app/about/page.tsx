import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { TrustStrip } from "../components/TrustStrip";

export default function AboutPage() {
  return (
    <div className="px-6 py-20 max-w-4xl mx-auto">
      {/* HERO */}
      <div className="mb-16">
        <div className="inline-block px-3 py-1.5 bg-accent-soft text-accent text-[11px] font-medium rounded-full mb-6 uppercase tracking-wider">
          About
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-normal tracking-tightest mb-6">
          Built in Bharat.{" "}
          <em className="text-accent italic font-light">For all of Bharat.</em>
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-2xl">
          Apex Digital Bharat is a small, focused team obsessed with one thing:
          giving Indian businesses the digital toolkit they need to compete and
          win — locally, nationally, and online.
        </p>
      </div>

      {/* WHY */}
      <div className="mb-20 prose prose-lg max-w-none">
        <h2 className="font-serif text-3xl font-normal tracking-tighter mb-6">
          Why we started this.
        </h2>
        <div className="space-y-5 text-muted leading-relaxed text-base">
          <p>
            A few years ago, my uncle ran a small clinic in Gorakhpur. Good
            doctor, loyal patients, decent reputation. Then a new clinic opened
            two streets away — younger doctor, no real reputation, but a
            polished website, daily Google updates, and quick review responses.
          </p>
          <p>
            Within a year, his walk-ins dropped 40%. Not because the new clinic
            was better — but because new patients searching online found{" "}
            <em>them</em> first. By the time my uncle realised what was
            happening, the damage was done.
          </p>
          <p>
            That story repeats across every town in India — jewellers, salons,
            coaching centres, restaurants, hospitals, even mid-sized
            enterprises. Indian businesses aren&apos;t losing to better
            products. They&apos;re losing to better digital execution.
          </p>
          <p>
            <strong className="text-ink font-medium">
              We built Apex to give every Indian business — from
              neighbourhood retailers to enterprise teams — the digital
              capability they need to win.
            </strong>{" "}
            Web platforms, AI workflows, brand systems, growth campaigns, and
            local SEO — under one roof, with one accountable partner.
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
          spas in Kolkata, enterprises in Chennai. Anywhere your customers
          search, anywhere your team works.{" "}
          <strong className="font-medium">
            No metro premium, no tier-2 surcharge
          </strong>{" "}
          — same craft, same accountability, anywhere in Bharat.
        </p>
      </div>

      {/* HOW WE WORK */}
      <div className="mb-20">
        <h2 className="font-serif text-3xl font-normal tracking-tighter mb-8">
          How we work.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Pillar
            title="One team, one accountability"
            body="Design, development, and growth all live under one roof. No fragmented vendors, no email chains across three agencies. One contract, one team, one outcome."
          />
          <Pillar
            title="AI-powered, human-reviewed"
            body="We use AI to move faster — code generation, content drafting, automation pipelines. Every output goes through human review before it reaches you. Speed without sloppiness."
          />
          <Pillar
            title="WhatsApp-first communication"
            body="No portal logins. No ticketing systems. No 'we&rsquo;ll get back to you in 3 business days.' You message us on WhatsApp, we reply — usually within an hour during business hours."
          />
        </div>
      </div>

      {/* CONTACT */}
      <div className="mb-20 p-8 bg-surface border border-border rounded-2xl">
        <h2 className="font-serif text-3xl font-normal tracking-tighter mb-6">
          Reach us directly.
        </h2>
        <p className="text-muted mb-6 max-w-xl">
          We&apos;re a small team — when you message us, you&apos;re reaching
          the people actually doing the work. No layers, no SDRs, no &ldquo;account
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
          Have a project in mind?
        </h2>
        <p className="text-muted mb-8">
          Tell us what you&apos;re trying to build. We&apos;ll send a clear
          plan within 48 hours.
        </p>
        <Link href="/contact" className="btn-primary">
          Send a project brief
          <ArrowRight className="w-4 h-4" />
        </Link>
        <div className="flex justify-center mt-6">
          <TrustStrip />
        </div>
      </div>
    </div>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-6 bg-surface border border-border rounded-lg">
      <div className="font-medium mb-2">{title}</div>
      <p
        className="text-sm text-muted leading-relaxed"
        dangerouslySetInnerHTML={{ __html: body }}
      />
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

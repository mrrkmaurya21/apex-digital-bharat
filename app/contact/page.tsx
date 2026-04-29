import Link from "next/link";
import { ArrowRight, MessageCircle, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="px-6 py-20 max-w-3xl mx-auto">
      <div className="inline-block px-3 py-1.5 bg-accent-soft text-accent text-[11px] font-medium rounded-full mb-6 uppercase tracking-wider">
        Contact
      </div>
      <h1 className="font-serif text-5xl md:text-6xl font-normal tracking-tightest mb-6">
        Talk to us.
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-12 max-w-xl">
        Fastest way to reach us is WhatsApp — usually replied within an hour during
        business hours. For paying clients, we have a same-day SLA.
      </p>

      <div className="space-y-3 mb-12">
        <a
          href="https://wa.me/917052067066?text=Hi%20Apex%20Digital%20Bharat"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-5 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-accent-soft rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="font-medium mb-0.5">WhatsApp</div>
              <div className="text-sm text-muted">+91 70520 67066 · Replies within 1 hour</div>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
        </a>

        <a
          href="mailto:apexbharatdigital@gmail.com"
          className="flex items-center justify-between p-5 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-accent-soft rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="font-medium mb-0.5">Email</div>
              <div className="text-sm text-muted">apexbharatdigital@gmail.com</div>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
        </a>

        <a
          href="tel:+917052067066"
          className="flex items-center justify-between p-5 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-accent-soft rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="font-medium mb-0.5">Phone</div>
              <div className="text-sm text-muted">+91 70520 67066 · 9 AM – 7 PM IST</div>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
        </a>
      </div>

      <div className="text-center p-8 bg-accent-soft border border-accent-border rounded-xl">
        <h2 className="font-serif text-2xl font-normal tracking-tighter mb-3 text-accent-deep">
          Ready to start? Skip the chat.
        </h2>
        <p className="text-sm text-accent-deep mb-6 max-w-md mx-auto">
          Get a free audit instead — we&apos;ll send a detailed PDF report within
          48 hours. No payment, no obligation.
        </p>
        <Link href="/audit" className="btn-primary">
          Get my free audit
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

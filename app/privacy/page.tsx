import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Apex Digital Bharat collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <div className="px-6 py-20 max-w-3xl mx-auto">
      <div className="inline-block px-3 py-1.5 bg-accent-soft text-accent text-[11px] font-medium rounded-full mb-6 uppercase tracking-wider">
        Privacy
      </div>
      <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-tightest mb-4">
        Privacy Policy
      </h1>
      <p className="text-sm text-subtle mb-12">
        Last updated: <em>(to be filled in)</em>
      </p>

      <div className="space-y-8 text-muted leading-relaxed">
        <section>
          <h2 className="font-serif text-2xl font-normal tracking-tighter text-ink mb-3">
            Who we are
          </h2>
          <p>
            Apex Digital Bharat is a Google Business Profile management service
            operated from Gorakhpur, Uttar Pradesh, India. You can reach us at{" "}
            <a
              href="mailto:apexbharatdigital@gmail.com"
              className="text-accent hover:underline"
            >
              apexbharatdigital@gmail.com
            </a>{" "}
            or on WhatsApp at +91 70520 67066.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-normal tracking-tighter text-ink mb-3">
            What we collect
          </h2>
          <p className="mb-3">
            When you request a free audit or sign up as a client, we collect:
          </p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Business name and Google Business Profile link or location</li>
            <li>Your name, email address, and WhatsApp number</li>
            <li>
              Industry category and any details you share about your business
            </li>
            <li>
              Standard server logs (IP, browser, page visited) for fraud
              prevention and analytics
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-normal tracking-tighter text-ink mb-3">
            How we use it
          </h2>
          <p>
            We use your information only to deliver your audit, communicate
            about our service, and provide ongoing GBP management if you become
            a client. We do not sell or share your data with third parties for
            marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-normal tracking-tighter text-ink mb-3">
            Where it lives
          </h2>
          <p>
            Lead and client records are stored in Supabase (Postgres). Email is
            sent via Resend. Hosting is on Vercel. We retain data only as long
            as needed to provide the service.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-normal tracking-tighter text-ink mb-3">
            Your rights
          </h2>
          <p>
            You can ask us to delete or export your data at any time by emailing{" "}
            <a
              href="mailto:apexbharatdigital@gmail.com"
              className="text-accent hover:underline"
            >
              apexbharatdigital@gmail.com
            </a>
            . We respond within 7 business days.
          </p>
        </section>

        <section className="p-5 bg-accent-soft border border-accent-border rounded-xl text-sm text-accent-deep">
          <strong>Note:</strong> This is a placeholder policy intended to keep
          the footer link functional during launch. Replace this content with a
          policy reviewed by a lawyer (especially DPDP Act 2023 compliance for
          Indian users) before scaling beyond founding clients.
        </section>
      </div>
    </div>
  );
}

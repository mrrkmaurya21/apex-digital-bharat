import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms under which Apex Digital Bharat provides Google Business Profile management services.",
};

export default function TermsPage() {
  return (
    <div className="px-6 py-20 max-w-3xl mx-auto">
      <div className="inline-block px-3 py-1.5 bg-accent-soft text-accent text-[11px] font-medium rounded-full mb-6 uppercase tracking-wider">
        Terms
      </div>
      <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-tightest mb-4">
        Terms of Service
      </h1>
      <p className="text-sm text-subtle mb-12">
        Last updated: <em>(to be filled in)</em>
      </p>

      <div className="space-y-8 text-muted leading-relaxed">
        <section>
          <h2 className="font-serif text-2xl font-normal tracking-tighter text-ink mb-3">
            The agreement
          </h2>
          <p>
            By using apexdigitalbharat.com or signing up for our Google Business
            Profile management service, you agree to these terms. The service
            is provided by Apex Digital Bharat, operating from Gorakhpur, Uttar
            Pradesh, India.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-normal tracking-tighter text-ink mb-3">
            Audits
          </h2>
          <p>
            The free audit is genuinely free with no obligation to purchase.
            Audit content (PDF report, sample posts) is provided as a guide and
            is yours to keep regardless of whether you sign up for ongoing
            service.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-normal tracking-tighter text-ink mb-3">
            Subscriptions and billing
          </h2>
          <p className="mb-3">
            Subscription plans are billed monthly in advance. All prices listed
            are exclusive of GST. Payment is collected via UPI, Razorpay, or
            bank transfer.
          </p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Cancel anytime with 7 days notice for the next cycle</li>
            <li>
              30-day money-back guarantee on the first month if you&apos;re not
              satisfied with the work delivered
            </li>
            <li>
              Founding Member rates, where offered, are locked for as long as
              the subscription is active and uninterrupted
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-normal tracking-tighter text-ink mb-3">
            What we do
          </h2>
          <p>
            We post content, respond to reviews, and manage Q&amp;A on your
            Google Business Profile within the scope of your selected plan. You
            grant us Manager access to your GBP via Google&apos;s official
            portal. You can revoke this access at any time.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-normal tracking-tighter text-ink mb-3">
            What we don&apos;t guarantee
          </h2>
          <p>
            We deliver work; we do not guarantee specific outcomes such as
            ranking positions, foot traffic, or revenue. Local SEO results
            depend on competition, profile age, business category, and Google
            algorithm changes outside our control.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-normal tracking-tighter text-ink mb-3">
            Liability
          </h2>
          <p>
            Our total liability for any claim is limited to the most recent one
            month of fees paid. We are not liable for indirect or consequential
            damages.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-normal tracking-tighter text-ink mb-3">
            Disputes
          </h2>
          <p>
            These terms are governed by the laws of India. Any dispute will be
            handled in the courts of Gorakhpur, Uttar Pradesh.
          </p>
        </section>

        <section className="p-5 bg-accent-soft border border-accent-border rounded-xl text-sm text-accent-deep">
          <strong>Note:</strong> This is a placeholder document intended to keep
          the footer link functional during launch. Have a lawyer review and
          finalize before scaling beyond founding clients.
        </section>
      </div>
    </div>
  );
}

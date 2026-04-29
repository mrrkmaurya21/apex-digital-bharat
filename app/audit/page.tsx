"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Sparkles, Check, ArrowRight } from "lucide-react";

const auditSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  gbpUrl: z.string().min(3, "Please share your Google profile link or location name"),
  whatsapp: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Please enter a valid email"),
  industry: z.enum([
    "clinic",
    "salon",
    "restaurant",
    "jeweller",
    "coaching",
    "retail",
    "services",
    "other",
  ]),
  problem: z.string().optional(),
});

type AuditFormData = z.infer<typeof auditSchema>;

export default function AuditPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuditFormData>({
    resolver: zodResolver(auditSchema),
  });

  const onSubmit = async (data: AuditFormData) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/audit-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please try WhatsApp instead.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="px-6 py-32 max-w-2xl mx-auto text-center">
        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-6 h-6 text-bg" />
        </div>
        <h1 className="font-serif text-4xl mb-4 font-normal tracking-tighter">
          Audit request received.
        </h1>
        <p className="text-muted mb-8 leading-relaxed">
          We&apos;ll send your detailed audit PDF to your email within 48 hours. If you
          want to discuss it sooner, ping us on WhatsApp — we usually reply within an
          hour during business hours.
        </p>
        <a
          href="https://wa.me/917052067066?text=Hi%2C%20I%20just%20requested%20a%20free%20GBP%20audit"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Continue on WhatsApp
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="px-6 py-20 max-w-3xl mx-auto">
      <div className="inline-block px-3 py-1.5 bg-accent-soft text-accent text-[11px] font-medium rounded-full mb-6 uppercase tracking-wider">
        Free · No payment needed
      </div>

      <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-tighter mb-4">
        Get your free GBP audit.
      </h1>
      <p className="text-muted mb-10 leading-relaxed max-w-xl">
        We&apos;ll analyze your Google Business Profile and send you a detailed
        3-page PDF report within 48 hours. No obligation, no payment.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Field
          label="Business name"
          error={errors.businessName?.message}
        >
          <input
            type="text"
            {...register("businessName")}
            placeholder="Sharma Jewellers, Dr. Mehta Clinic, etc."
            className="input"
          />
        </Field>

        <Field
          label="Google Business Profile link OR location name"
          error={errors.gbpUrl?.message}
          hint="Paste the link from Google Maps, or just your business name + city if you don't have the link."
        >
          <input
            type="text"
            {...register("gbpUrl")}
            placeholder="https://maps.google.com/... or 'Sharma Jewellers, Lajpat Nagar Delhi'"
            className="input"
          />
        </Field>

        <div className="grid md:grid-cols-2 gap-6">
          <Field
            label="WhatsApp number"
            error={errors.whatsapp?.message}
            hint="We send the audit + answer questions here."
          >
            <input
              type="tel"
              {...register("whatsapp")}
              placeholder="9876543210"
              maxLength={10}
              className="input"
            />
          </Field>

          <Field label="Email" error={errors.email?.message}>
            <input
              type="email"
              {...register("email")}
              placeholder="you@business.com"
              className="input"
            />
          </Field>
        </div>

        <Field label="Industry" error={errors.industry?.message}>
          <select {...register("industry")} className="input">
            <option value="">Select your industry</option>
            <option value="clinic">Clinic / Hospital / Medical</option>
            <option value="salon">Salon / Spa / Beauty</option>
            <option value="restaurant">Restaurant / Cafe / Food</option>
            <option value="jeweller">Jeweller / Boutique</option>
            <option value="coaching">Coaching center / Education</option>
            <option value="retail">Retail / Shop</option>
            <option value="services">Services (legal, CA, etc.)</option>
            <option value="other">Other</option>
          </select>
        </Field>

        <Field
          label="What's the biggest issue you face right now? (optional)"
          error={errors.problem?.message}
        >
          <textarea
            {...register("problem")}
            placeholder="e.g., 'Reviews are old and we have a few negative ones we never replied to' or 'No one has updated our profile in 2 years'"
            rows={3}
            className="input"
          />
        </Field>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div className="pt-4">
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Get my free audit"}
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-subtle mt-4">
            We respect your privacy. We&apos;ll only contact you about your audit and
            our service.
          </p>
        </div>
      </form>

      <div className="mt-16 p-6 bg-accent-soft border border-accent-border rounded-xl">
        <div className="flex gap-3 items-start">
          <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-medium text-accent-deep mb-1">
              What you&apos;ll get in the audit
            </div>
            <ul className="text-sm text-accent-deep space-y-1.5 leading-relaxed">
              <li>• 10 specific issues with your current Google profile</li>
              <li>• 4 sample posts written specifically for your business</li>
              <li>• Competitor comparison — what they&apos;re doing better</li>
              <li>• Estimated impact: how many extra customers you could reach</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px 14px;
          background: #fffef9;
          border: 1px solid #f0e9dc;
          border-radius: 8px;
          font-size: 15px;
          color: #1a1a1a;
          transition: all 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: #c2410c;
          box-shadow: 0 0 0 3px #fff7ed;
        }
        .input::placeholder {
          color: #9ca3af;
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink mb-2">{label}</label>
      {hint && <p className="text-xs text-subtle mb-2">{hint}</p>}
      {children}
      {error && <p className="text-xs text-red-600 mt-1.5">{error}</p>}
    </div>
  );
}

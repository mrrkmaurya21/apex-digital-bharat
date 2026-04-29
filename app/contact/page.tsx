"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowRight,
  MessageCircle,
  Mail,
  Phone,
  Check,
  Sparkles,
} from "lucide-react";

const briefSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  company: z.string().min(1, "Company or business name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  service: z.enum([
    "web",
    "ai",
    "uiux",
    "marketing",
    "gbp",
    "multiple",
    "not-sure",
  ]),
  brief: z.string().min(10, "A short description (at least 10 chars) helps us respond well"),
});

type BriefFormData = z.infer<typeof briefSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BriefFormData>({
    resolver: zodResolver(briefSchema),
  });

  const onSubmit = async (data: BriefFormData) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/project-brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error(
          "Something went wrong. Please try WhatsApp instead."
        );
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
          Brief received.
        </h1>
        <p className="text-muted mb-8 leading-relaxed">
          We&apos;ll review your project and get back within 48 hours with a
          clear plan and timeline. For anything urgent, ping us on WhatsApp —
          usually replied within an hour during business hours.
        </p>
        <a
          href="https://wa.me/917052067066?text=Hi%2C%20I%20just%20sent%20a%20project%20brief"
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
    <div className="px-6 py-20 max-w-4xl mx-auto">
      <div className="inline-block px-3 py-1.5 bg-accent-soft text-accent text-[11px] font-medium rounded-full mb-6 uppercase tracking-wider">
        Contact
      </div>
      <h1 className="font-serif text-5xl md:text-6xl font-normal tracking-tightest mb-6">
        Let&apos;s build something{" "}
        <em className="text-accent italic font-light">great.</em>
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-12 max-w-2xl">
        Tell us about your project. Whether it&apos;s a new idea or an existing
        system that needs a revamp — we&apos;re ready. We respond to every
        brief within 48 hours.
      </p>

      {/* QUICK CONTACT */}
      <div className="grid sm:grid-cols-3 gap-3 mb-16">
        <a
          href="https://wa.me/917052067066?text=Hi%20Apex%20Digital%20Bharat"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
        >
          <div className="w-10 h-10 bg-accent-soft rounded-lg flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-4 h-4 text-accent" />
          </div>
          <div className="min-w-0">
            <div className="font-medium text-sm mb-0.5">WhatsApp</div>
            <div className="text-xs text-muted truncate">+91 70520 67066</div>
          </div>
        </a>

        <a
          href="mailto:apexbharatdigital@gmail.com"
          className="flex items-center gap-3 p-4 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
        >
          <div className="w-10 h-10 bg-accent-soft rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-4 h-4 text-accent" />
          </div>
          <div className="min-w-0">
            <div className="font-medium text-sm mb-0.5">Email</div>
            <div className="text-xs text-muted truncate">
              apexbharatdigital@gmail.com
            </div>
          </div>
        </a>

        <a
          href="tel:+917052067066"
          className="flex items-center gap-3 p-4 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
        >
          <div className="w-10 h-10 bg-accent-soft rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="w-4 h-4 text-accent" />
          </div>
          <div className="min-w-0">
            <div className="font-medium text-sm mb-0.5">Phone</div>
            <div className="text-xs text-muted truncate">
              9 AM – 7 PM IST
            </div>
          </div>
        </a>
      </div>

      {/* PROJECT BRIEF FORM */}
      <div>
        <h2 className="font-serif text-3xl font-normal tracking-tighter mb-2">
          Send a project brief.
        </h2>
        <p className="text-muted mb-10 max-w-xl">
          Fill in the form below — we&apos;ll come back with a clear scope,
          timeline, and quote within 48 hours.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Full name" error={errors.fullName?.message}>
              <input
                type="text"
                {...register("fullName")}
                placeholder="Your name"
                className="input"
              />
            </Field>

            <Field
              label="Company / Business"
              error={errors.company?.message}
            >
              <input
                type="text"
                {...register("company")}
                placeholder="Sharma Jewellers, Acme Health, etc."
                className="input"
              />
            </Field>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Email" error={errors.email?.message}>
              <input
                type="email"
                {...register("email")}
                placeholder="you@business.com"
                className="input"
              />
            </Field>

            <Field
              label="Phone (WhatsApp)"
              error={errors.phone?.message}
              hint="We send updates and quotes here."
            >
              <input
                type="tel"
                {...register("phone")}
                placeholder="9876543210"
                maxLength={10}
                className="input"
              />
            </Field>
          </div>

          <Field
            label="What do you need?"
            error={errors.service?.message}
          >
            <select {...register("service")} className="input">
              <option value="">Select a service</option>
              <option value="web">Website or Web App</option>
              <option value="ai">AI &amp; Automation</option>
              <option value="uiux">UI/UX Design</option>
              <option value="marketing">Digital Marketing</option>
              <option value="gbp">Local SEO &amp; Google Business Profile</option>
              <option value="multiple">Multiple services</option>
              <option value="not-sure">Not sure — help me figure out</option>
            </select>
          </Field>

          <Field
            label="Tell us about your project"
            error={errors.brief?.message}
            hint="What are you trying to build? Any specific goals, timeline, or budget range?"
          >
            <textarea
              {...register("brief")}
              placeholder="e.g., 'We&rsquo;re a 3-location dental chain looking to redo our website + integrate online booking + run paid ads in our cities. Budget around ₹3-5L. Need to launch in 60 days.'"
              rows={5}
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
              {submitting ? "Sending..." : "Send project brief"}
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-subtle mt-4">
              We respect your privacy. We&apos;ll only contact you about your
              project.
            </p>
          </div>
        </form>

        <div className="mt-16 p-6 bg-accent-soft border border-accent-border rounded-xl">
          <div className="flex gap-3 items-start">
            <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium text-accent-deep mb-1">
                What happens after you submit
              </div>
              <ul className="text-sm text-accent-deep space-y-1.5 leading-relaxed">
                <li>· We review your brief within 24 hours</li>
                <li>· You get a confirmation email immediately</li>
                <li>
                  · Within 48 hours, a clear scope, timeline, and fixed quote
                </li>
                <li>· No obligation. No pressure. Your brief is yours to keep.</li>
              </ul>
            </div>
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

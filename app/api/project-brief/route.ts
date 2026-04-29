import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

// Init Resend (only when key exists, so build doesn't fail)
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Init Supabase
const supabase =
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
    ? createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY
      )
    : null;

const SERVICE_LABELS: Record<string, string> = {
  web: "Website / Web App",
  ai: "AI & Automation",
  uiux: "UI/UX Design",
  marketing: "Digital Marketing",
  gbp: "Local SEO & GBP",
  multiple: "Multiple services",
  "not-sure": "Not sure",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, company, email, phone, service, brief } = body;

    if (!fullName || !company || !email || !phone || !service || !brief) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const serviceLabel = SERVICE_LABELS[service] ?? service;

    // 1. Save to Supabase
    if (supabase) {
      const { error: dbError } = await supabase.from("project_briefs").insert({
        full_name: fullName,
        company,
        email,
        phone,
        service,
        brief,
        status: "new",
      });
      if (dbError) {
        console.error("Supabase error:", dbError);
        // Continue — don't fail submission if DB hiccups
      }
    }

    // 2. Notify founder via email
    if (resend) {
      await resend.emails.send({
        from: "Apex Digital Bharat <noreply@apexdigitalbharat.com>",
        to: process.env.FOUNDER_EMAIL || "apex.bharat.digital@gmail.com",
        subject: `🚀 New project brief: ${company} (${serviceLabel})`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #C2410C;">New Project Brief</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #6b7280;">Name</td><td style="padding: 8px 0;"><strong>${fullName}</strong></td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;">Company</td><td style="padding: 8px 0;"><strong>${company}</strong></td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;">Service</td><td style="padding: 8px 0;">${serviceLabel}</td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;">WhatsApp</td><td style="padding: 8px 0;"><a href="https://wa.me/91${phone}">+91 ${phone}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Brief</td><td style="padding: 8px 0; white-space: pre-wrap;">${brief}</td></tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #FFF7ED; border-radius: 8px;">
              <strong>Action:</strong> Reply within 24 hours with a quick acknowledgement and a clarifying question.
              Send a full scope + quote within 48 hours.
            </div>
          </div>
        `,
      });

      // 3. Confirmation email to lead
      await resend.emails.send({
        from: "Apex Digital Bharat <noreply@apexdigitalbharat.com>",
        to: email,
        subject: "Your project brief is in — Apex Digital Bharat",
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="font-family: Georgia, serif; color: #1A1A1A;">Hi ${fullName.split(" ")[0]},</h2>
            <p style="color: #4A4A4A; line-height: 1.6;">
              Thanks for sending us your project brief. We've added it to the queue
              and will get back to you within <strong>48 hours</strong> with a clear
              scope, timeline, and fixed quote.
            </p>
            <p style="color: #4A4A4A; line-height: 1.6;">
              In the meantime, if you have anything urgent or want to walk us
              through the brief on a quick call, the fastest way to reach us is
              WhatsApp:
            </p>
            <p>
              <a href="https://wa.me/917052067066"
                 style="background: #C2410C; color: white; padding: 12px 20px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Continue on WhatsApp
              </a>
            </p>
            <p style="color: #6b7280; font-size: 13px; margin-top: 32px;">
              — Apex Digital Bharat<br/>
              Software, design, and growth — under one roof.
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Project brief error:", error);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}

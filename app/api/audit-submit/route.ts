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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { businessName, gbpUrl, whatsapp, email, industry, problem } = body;

    // Basic validation
    if (!businessName || !gbpUrl || !whatsapp || !email || !industry) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1. Save to Supabase
    if (supabase) {
      const { error: dbError } = await supabase.from("audit_requests").insert({
        business_name: businessName,
        gbp_url: gbpUrl,
        whatsapp,
        email,
        industry,
        problem: problem || null,
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
        to: process.env.FOUNDER_EMAIL || "apexbharatdigital@gmail.com",
        subject: `🔥 New audit request: ${businessName}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #C2410C;">New Audit Request</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #6b7280;">Business</td><td style="padding: 8px 0;"><strong>${businessName}</strong></td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;">GBP / Location</td><td style="padding: 8px 0;">${gbpUrl}</td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;">WhatsApp</td><td style="padding: 8px 0;"><a href="https://wa.me/91${whatsapp}">+91 ${whatsapp}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;">Email</td><td style="padding: 8px 0;">${email}</td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;">Industry</td><td style="padding: 8px 0;">${industry}</td></tr>
              ${problem ? `<tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Problem</td><td style="padding: 8px 0;">${problem}</td></tr>` : ""}
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #FFF7ED; border-radius: 8px;">
              <strong>Action:</strong> Generate audit PDF in Claude Max (~15 min) and send via email + WhatsApp within 48 hours.
            </div>
          </div>
        `,
      });

      // 3. Confirmation email to lead
      await resend.emails.send({
        from: "Apex Digital Bharat <noreply@apexdigitalbharat.com>",
        to: email,
        subject: "Your audit is in the queue — Apex Digital Bharat",
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="font-family: Georgia, serif; color: #1A1A1A;">Hi ${businessName.split(" ")[0]},</h2>
            <p style="color: #4A4A4A; line-height: 1.6;">
              Thanks for requesting a free audit of your Google Business Profile.
              We've added you to the queue and will send your detailed PDF report
              within <strong>48 hours</strong>.
            </p>
            <p style="color: #4A4A4A; line-height: 1.6;">
              In the meantime, if you have any urgent questions, the fastest way to reach us is WhatsApp:
            </p>
            <p>
              <a href="https://wa.me/917052067066"
                 style="background: #C2410C; color: white; padding: 12px 20px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Continue on WhatsApp
              </a>
            </p>
            <p style="color: #6b7280; font-size: 13px; margin-top: 32px;">
              — Apex Digital Bharat<br/>
              Gorakhpur, UP
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Audit submit error:", error);
    return NextResponse.json(
      { error: "Submission failed" },
      { status: 500 }
    );
  }
}

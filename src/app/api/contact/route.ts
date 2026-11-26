import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  service?: string;
  message?: string;
  website?: string; // honeypot
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Honeypot check: silently accept spam submissions without persisting
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({
        ok: true,
        message: "Thank you for your inquiry.",
      });
    }

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const subject = (body.subject ?? "").trim();
    const service = (body.service ?? "General Inquiry").trim();
    const message = (body.message ?? "").trim();

    if (name.length < 2 || name.length > 120) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid name (2–120 characters)." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email) || email.length > 180) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (subject.length < 3 || subject.length > 160) {
      return NextResponse.json(
        { ok: false, error: "Please provide a subject (3–160 characters)." },
        { status: 400 }
      );
    }

    if (message.length < 15 || message.length > 4000) {
      return NextResponse.json(
        {
          ok: false,
          error: "Message must be between 15 and 4000 characters.",
        },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey, {
        auth: { persistSession: false },
      });

      const { error } = await supabase.from("contact_messages").insert({
        name,
        email,
        subject,
        service,
        message,
      });

      if (error) {
        console.error("Supabase insert failed:", error.message);
        return NextResponse.json(
          {
            ok: false,
            error:
              "Could not store your message at the moment. Please email jolaetopia81@gmail.com directly.",
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        ok: true,
        stored: "supabase",
        message:
          "Thanks for reaching out! Your message has been saved and Andrew will reply shortly.",
      });
    }

    // Fallback when Supabase environment variables are not configured yet
    console.info("[Contact Form Validated Submission]", {
      name,
      email,
      service,
      subject,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      stored: "validated-log",
      message:
        "Message validated and received! For urgent inquiries you can also email jolaetopia81@gmail.com directly.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }
}

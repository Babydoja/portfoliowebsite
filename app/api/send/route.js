import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL; // e.g. "CodeMadeEasy <no-reply@codemadeeasy.xy.com>"

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    console.log("Email request:", email, subject, message);
    console.log(process.env.RESEND_API_KEY)

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email], // send copy to admin and user
      subject: subject, // use dynamic subject
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// app/api/contact/route.js - Using Resend API
import { NextResponse } from 'next/server';

export async function POST(request) {
  console.log('=== Contact API Started (Resend) ===');

  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check for Resend API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not found');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    console.log('Sending email via Resend...');

    // Send email to you with reply-to as the visitor’s email
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>', // Resend sandbox sender
        to: ['zeyad.nafea.cs@gmail.com'], // always YOUR inbox
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #22d3ee;">New Contact Form Submission</h2>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
              <h3 style="color: #333;">Message:</h3>
              <p style="line-height: 1.6; color: #555;">${message}</p>
            </div>
            <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-radius: 8px;">
              <p style="margin: 0; font-size: 14px; color: #1976d2;">
                <strong>Reply to:</strong> ${email}
              </p>
            </div>
          </div>
        `,
        reply_to: email, // makes reply go directly to the sender
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Resend API error:', errorData);
      throw new Error(`Resend API error: ${errorData.message}`);
    }

    const result = await response.json();
    console.log('Email sent successfully via Resend:', result.id);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('=== Email Error ===');
    console.error('Error:', error.message);

    return NextResponse.json(
      { error: `Failed to send email: ${error.message}` },
      { status: 500 }
    );
  }
}

// app/api/contact/route.js - Using Resend API (more reliable)
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

    // Send email using Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>', // Use Resend's default
        to: ['s-zeyad.nafea@zewailcity.edu.eg'],
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
        reply_to: email,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Resend API error:', errorData);
      throw new Error(`Resend API error: ${errorData.message}`);
    }

    const result = await response.json();
    console.log('Email sent successfully via Resend:', result.id);

    // Send confirmation email to sender
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Zeyad Mohamed Nafea <onboarding@resend.dev>',
          to: [email],
          subject: 'Thank you for contacting me!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 8px 8px 0 0;">
                <h1 style="color: white; margin: 0; text-align: center;">Thank You!</h1>
              </div>
              <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <p style="font-size: 16px; color: #333; line-height: 1.6;">Hi ${name},</p>
                <p style="font-size: 16px; color: #333; line-height: 1.6;">
                  Thank you for reaching out! I've received your message about "<strong>${subject}</strong>" and I'll get back to you as soon as possible.
                </p>
                <div style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #22d3ee; margin: 20px 0;">
                  <h3 style="color: #22d3ee; margin-top: 0;">Your Message:</h3>
                  <p style="color: #555; line-height: 1.6;">${message}</p>
                </div>
                <p style="font-size: 16px; color: #333; line-height: 1.6;">
                  I typically respond within 24-48 hours.
                </p>
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                  <p style="color: #666; font-size: 14px; margin: 0;">
                    Best regards,<br>
                    <strong>Zeyad Mohamed Nafea</strong><br>
                    Data Science Student
                  </p>
                </div>
              </div>
            </div>
          `,
        }),
      });
    } catch (confirmError) {
      console.error('Confirmation email failed:', confirmError);
      // Don't fail the main request
    }

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

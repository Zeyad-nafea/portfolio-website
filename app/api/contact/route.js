// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if environment variables exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing environment variables:', {
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_PASS: !!process.env.EMAIL_PASS
      });
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Add these options for better reliability
      secure: true,
      requireTLS: true,
      connectionTimeout: 60000, // 60 seconds
      greetingTimeout: 30000, // 30 seconds
      socketTimeout: 60000, // 60 seconds
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Email to yourself (notification)
    const mailToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
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
    };

    // Confirmation email to sender
    const mailToSender = {
      from: process.env.EMAIL_USER,
      to: email,
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
              I typically respond within 24-48 hours. In the meantime, feel free to check out my projects on 
              <a href="https://github.com/Zeyad-nafea" style="color: #22d3ee; text-decoration: none;">GitHub</a>.
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
    };

    // Send both emails with better error handling
    try {
      console.log('Sending notification email...');
      await transporter.sendMail(mailToYou);
      console.log('Notification email sent successfully');
      
      console.log('Sending confirmation email...');
      await transporter.sendMail(mailToSender);
      console.log('Confirmation email sent successfully');
    } catch (mailError) {
      console.error('Error sending emails:', mailError);
      
      // More specific error messages
      if (mailError.code === 'EAUTH') {
        return NextResponse.json(
          { error: 'Email authentication failed. Please check credentials.' },
          { status: 500 }
        );
      } else if (mailError.code === 'ENOTFOUND') {
        return NextResponse.json(
          { error: 'Email server not found. Check network connection.' },
          { status: 500 }
        );
      } else if (mailError.code === 'ETIMEDOUT') {
        return NextResponse.json(
          { error: 'Email sending timed out. Please try again.' },
          { status: 500 }
        );
      }
      
      return NextResponse.json(
        { error: `Failed to send email: ${mailError.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: `Server error: ${error.message}` },
      { status: 500 }
    );
  }
}

// app/api/contact/route.js - WORKING VERSION
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  console.log('=== Contact API Started ===');
  
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log('Missing required fields');
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

    // Check environment variables
    console.log('Environment check:', {
      EMAIL_USER: process.env.EMAIL_USER ? 'Set ✓' : 'Missing ✗',
      EMAIL_PASS: process.env.EMAIL_PASS ? 'Set ✓' : 'Missing ✗',
    });

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing environment variables!');
      return NextResponse.json(
        { error: 'Server configuration error - missing credentials' },
        { status: 500 }
      );
    }

    console.log('Creating transporter...');
    
    // Create transporter using Gmail
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Additional options for reliability
      pool: true,
      maxConnections: 1,
      rateDelta: 20000,
      rateLimit: 5,
    });

    console.log('Verifying SMTP connection...');
    
    // Test the connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully ✓');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { 
          error: 'Email service authentication failed. Please check Gmail App Password.',
          details: verifyError.message,
          code: verifyError.code
        },
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
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
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
      text: `Hi ${name},\n\nThank you for reaching out! I've received your message about "${subject}" and I'll get back to you as soon as possible.\n\nI typically respond within 24-48 hours.\n\nBest regards,\nZeyad Mohamed Nafea\nData Science Student`,
    };

    // Send both emails
    console.log('Sending notification email...');
    try {
      const info1 = await transporter.sendMail(mailToYou);
      console.log('Notification email sent successfully ✓', info1.messageId);
    } catch (mailError) {
      console.error('Failed to send notification email:', mailError);
      throw mailError;
    }

    console.log('Sending confirmation email...');
    try {
      const info2 = await transporter.sendMail(mailToSender);
      console.log('Confirmation email sent successfully ✓', info2.messageId);
    } catch (mailError) {
      console.error('Failed to send confirmation email:', mailError);
      // Don't fail the whole request if confirmation email fails
      console.log('Continuing despite confirmation email failure...');
    }

    console.log('=== Email process completed successfully ===');

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('=== Unexpected Error ===');
    console.error('Error type:', error.constructor.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error.message
      },
      { status: 500 }
    );
  }
}

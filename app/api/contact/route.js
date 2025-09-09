// app/api/contact/route.js - FIXED VERSION
import { NextResponse } from 'next/server';

// Fix the nodemailer import
const nodemailer = require('nodemailer');

export async function POST(request) {
  console.log('=== Contact API Started ===');
  
  try {
    const body = await request.json();
    console.log('Request received');

    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log('Missing required fields');
      return NextResponse.json(
        { error: 'All fields are required' },
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
    
    // Create transporter - using the correct method
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('Verifying connection...');
    
    // Test connection
    try {
      await transporter.verify();
      console.log('SMTP verified ✓');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError.message);
      return NextResponse.json(
        { 
          error: 'Email authentication failed',
          details: verifyError.message 
        },
        { status: 500 }
      );
    }

    // Email configuration
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
        </div>
      `,
    };

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
    };

    // Send emails
    console.log('Sending notification email...');
    try {
      await transporter.sendMail(mailToYou);
      console.log('Notification sent ✓');
    } catch (error) {
      console.error('Notification failed:', error.message);
      throw error;
    }

    console.log('Sending confirmation email...');
    try {
      await transporter.sendMail(mailToSender);
      console.log('Confirmation sent ✓');
    } catch (error) {
      console.error('Confirmation failed:', error.message);
      // Continue even if confirmation fails
    }

    console.log('=== Email sent successfully ===');
    
    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('=== Error Details ===');
    console.error('Type:', error.constructor.name);
    console.error('Message:', error.message);
    console.error('Stack:', error.stack);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

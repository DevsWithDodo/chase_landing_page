import nodemailer from 'nodemailer';

export interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  text: string;
}

/**
 * Creates and returns a configured nodemailer transporter for Gmail SMTP
 */
function createTransporter() {
  // Validate required environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    throw new Error('Email configuration missing: EMAIL_USER and EMAIL_PASSWORD must be set');
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false, // Use TLS (STARTTLS)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
}

/**
 * Sends an email using the configured Gmail SMTP transporter
 * 
 * @param options - Email options including recipient, subject, and content
 * @returns Promise that resolves when email is sent successfully
 * @throws Error if email configuration is missing or sending fails
 */
export async function sendEmail(options: SendEmailOptions) {
  const transporter = createTransporter();
  
  const from = process.env.EMAIL_FROM || process.env.EMAIL_USER;
  
  try {
    const info = await transporter.sendMail({
      from: from,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    });

    console.log('Email sent successfully:', {
      messageId: info.messageId,
      to: options.to,
      subject: options.subject,
    });

    return info;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}

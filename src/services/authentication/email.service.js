import nodemailer from 'nodemailer';
import Config from '../../../config.js';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: Config.email.user,
    pass: Config.email.password
  }
});

export const EmailService = {
  sendVerificationEmail: async (email, token) => {
    const verificationUrl = `${Config.appUrl}/api/auth/verify-email?token=${token}`;

    await transporter.sendMail({
      from: '"Brana" <noreply@yourapp.com>',
      to: email,
      subject: 'Email Verification',
      html: `
        <p>Please verify your email by clicking the link below:</p>
        <a href="${verificationUrl}">Verify Email</a>
        <p>This link will expire in 1 hour.</p>
      `
    });
  }
};
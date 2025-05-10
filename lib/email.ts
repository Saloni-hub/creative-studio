// import nodemailer from 'nodemailer';
// import { ContactFormData } from '@/types';

// interface EmailOptions {
//   to?: string;
//   subject?: string;
//   replyTo?: string;
// }

// // Create reusable transporter with environment variables
// const createTransporter = () => {
//   return nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: Number(process.env.EMAIL_PORT) || 587,
//     secure: process.env.EMAIL_SECURE === 'true',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });
// };

// // Admin email template (sent to you)
// const createAdminEmailContent = (formData: ContactFormData) => {
//   return {
//     subject: `New Website Inquiry: ${formData.service || 'General Contact'}`,
//     text: `
//       New Contact Form Submission
      
//       Name: ${formData.name}
//       Email: ${formData.email}
//       Phone: ${formData.phone || 'Not provided'}
//       Service Requested: ${formData.service || 'Not specified'}
      
//       Message:
//       ${formData.message}
      
//       This message was sent from your website contact form.
//     `,
//     html: `
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <style>
//           body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//           .container { max-width: 600px; margin: 0 auto; padding: 20px; }
//           .header { background-color: #f8f9fa; padding: 15px; border-bottom: 3px solid #0066cc; }
//           .content { padding: 20px 0; }
//           .footer { font-size: 12px; color: #666; padding-top: 20px; border-top: 1px solid #eee; }
//           h2 { color: #0066cc; }
//           .field { margin-bottom: 10px; }
//           .label { font-weight: bold; }
//           .message-box { background-color: #f8f9fa; padding: 15px; border-left: 3px solid #0066cc; margin: 15px 0; }
//         </style>
//       </head>
//       <body>
//         <div class="container">
//           <div class="header">
//             <h2>New Website Contact Form Submission</h2>
//           </div>
//           <div class="content">
//             <div class="field">
//               <span class="label">Name:</span> ${formData.name}
//             </div>
//             <div class="field">
//               <span class="label">Email:</span> <a href="mailto:${formData.email}">${formData.email}</a>
//             </div>
//             <div class="field">
//               <span class="label">Phone:</span> ${formData.phone || 'Not provided'}
//             </div>
//             <div class="field">
//               <span class="label">Service Requested:</span> ${formData.service || 'Not specified'}
//             </div>
//             <div class="field">
//               <span class="label">Message:</span>
//               <div class="message-box">
//                 ${formData.message.replace(/\n/g, '<br>')}
//               </div>
//             </div>
//           </div>
//           <div class="footer">
//             This message was sent from your website contact form on ${new Date().toLocaleString()}.
//           </div>
//         </div>
//       </body>
//       </html>
//     `,
//   };
// };

// // Client confirmation email template (sent to person who submitted the form)
// const createClientEmailContent = (formData: ContactFormData) => {
//   return {
//     subject: 'Thank you for contacting us',
//     text: `
//       Dear ${formData.name},
      
//       Thank you for reaching out to us. We have received your message regarding ${formData.service || 'your inquiry'}.
      
//       Here's a copy of the information you submitted:
      
//       Name: ${formData.name}
//       Email: ${formData.email}
//       Phone: ${formData.phone || 'Not provided'}
//       Service: ${formData.service || 'Not specified'}
      
//       Your message:
//       "${formData.message}"
      
//       We will review your message and get back to you as soon as possible, usually within 1-2 business days.
      
//       If you have any urgent matters, please feel free to call us directly.
      
//       Best regards,
//       Promotion Studio
//     `,
//     html: `
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <style>
//           body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//           .container { max-width: 600px; margin: 0 auto; padding: 20px; }
//           .header { background-color: #f8f9fa; padding: 20px; text-align: center; border-bottom: 3px solid #0066cc; }
//           .content { padding: 20px 0; }
//           .footer { font-size: 12px; color: #666; padding-top: 20px; border-top: 1px solid #eee; text-align: center; }
//           h2 { color: #0066cc; }
//           .thank-you { font-size: 18px; font-weight: bold; margin-bottom: 20px; }
//           .message-box { background-color: #f8f9fa; padding: 15px; border-left: 3px solid #0066cc; margin: 15px 0; font-style: italic; }
//           .info-table { width: 100%; border-collapse: collapse; margin: 15px 0; }
//           .info-table td { padding: 8px; border-bottom: 1px solid #eee; }
//           .info-table td:first-child { font-weight: bold; width: 30%; }
//           .cta-button { display: inline-block; background-color: #0066cc; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin-top: 20px; }
//         </style>
//       </head>
//       <body>
//         <div class="container">
//           <div class="header">
//             <h2>Thank You for Contacting Us!</h2>
//           </div>
//           <div class="content">
//             <p class="thank-you">Dear ${formData.name},</p>
            
//             <p>Thank you for reaching out to us. We have received your message regarding ${formData.service || 'your inquiry'} and appreciate your interest in our services.</p>
            
//             <p>Here's a copy of the information you submitted:</p>
            
//             <table class="info-table">
//               <tr>
//                 <td>Name:</td>
//                 <td>${formData.name}</td>
//               </tr>
//               <tr>
//                 <td>Email:</td>
//                 <td>${formData.email}</td>
//               </tr>
//               <tr>
//                 <td>Phone:</td>
//                 <td>${formData.phone || 'Not provided'}</td>
//               </tr>
//               <tr>
//                 <td>Service:</td>
//                 <td>${formData.service || 'Not specified'}</td>
//               </tr>
//             </table>
            
//             <p>message:</p>
//             <div class="message-box">
//               "${formData.message.replace(/\n/g, '<br>')}"
//             </div>
            
//             <p>We will review your inquiry and get back to you as soon as possible, usually within 1-2 business days.</p>
            
//             <p>If you have any urgent matters, please feel free to call us directly.</p>
            
//             <p>Best regards,<br>
//             <strong>Promotion Studio</strong></p>
            
//             <a href="https://yourwebsite.com" class="cta-button text-white">Visit Our Website</a>
//           </div>
//           <div class="footer">
//             <p>© ${new Date().getFullYear()} PromotionStudio. All rights reserved.</p>
//             <p>This is an automated message, please do not reply directly to this email.</p>
//           </div>
//         </div>
//       </body>
//       </html>
//     `,
//   };
// };

// // Send admin notification email
// export async function sendAdminEmail(formData: ContactFormData, options: EmailOptions = {}): Promise<void> {
//   const transporter = createTransporter();
//   const { subject, text, html } = createAdminEmailContent(formData);
  
//   const mailOptions = {
//     from: `"Website Contact Form" <${process.env.EMAIL_FROM}>`,
//     to: options.to || process.env.EMAIL_TO,
//     replyTo: formData.email,
//     subject: options.subject || subject,
//     text,
//     html,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//   } catch (error) {
//     console.error('Failed to send admin email:', error);
//     throw new Error('Email service failed to send admin notification');
//   }
// }

// // Send confirmation email to client
// // export async function sendClientEmail(formData: ContactFormData, options: EmailOptions = {}): Promise<void> {
// //   // Skip if email confirmation is disabled
// //   if (process.env.EMAIL_SEND_CONFIRMATION !== 'true') {
// //     return;
// //   }

// //   const transporter = createTransporter();
// //   const { subject, text, html } = createClientEmailContent(formData);
  
// //   const mailOptions = {
// //     from: `"Promotion Studio" <${process.env.EMAIL_FROM}>`,
// //     to: formData.email,
// //     subject: options.subject || subject,
// //     text,
// //     html,
// //   };

// //   try {
// //     await transporter.sendMail(mailOptions);
// //   } catch (error) {
// //     console.error('Failed to send client confirmation email:', error);
// //     // We don't throw here to avoid failing the form submission if only the confirmation fails
// //   }
// // }

// // Send confirmation email to client
// export async function sendClientEmail(formData: ContactFormData, options: EmailOptions = {}): Promise<void> {
//     // Debug log to see if this function is being called
//     console.log('Attempting to send client confirmation email');
    
//     // Check if email confirmation is enabled
//     if (process.env.EMAIL_SEND_CONFIRMATION !== 'true') {
//       console.log('Client confirmation emails are disabled (EMAIL_SEND_CONFIRMATION is not set to true)');
//       return;
//     }
  
//     try {
//       console.log('Creating email transporter for client email');
//       const transporter = createTransporter();
//       const { subject, text, html } = createClientEmailContent(formData);
      
//       const mailOptions = {
//         from: `"Promotion Studio" <${process.env.EMAIL_FROM}>`,
//         to: formData.email,
//         subject: options.subject || subject,
//         text,
//         html,
//       };
  
//       console.log(`Sending confirmation email to client: ${formData.email}`);
//       await transporter.sendMail(mailOptions);
//       console.log('Client confirmation email sent successfully');
//     } catch (error) {
//       console.error('Failed to send client confirmation email:', error);
//       // We don't throw here to avoid failing the form submission if only the confirmation fails
//     }
//   }

// // Main function to send all emails
// // export async function handleContactFormEmails(formData: ContactFormData): Promise<void> {
// //   try {
// //     // Send notification to admin (you)
// //     await sendAdminEmail(formData);
    
// //     // Send confirmation to client
// //     await sendClientEmail(formData);
// //   } catch (error) {
// //     console.error('Email sending failed:', error);
// //     throw new Error('Failed to process emails');
// //   }
// // }

// // Main function to send all emails
// export async function handleContactFormEmails(formData: ContactFormData): Promise<void> {
//     console.log('Starting email processing for contact form submission');
    
//     try {
//       // Log environment variable for debugging
//       console.log(`EMAIL_SEND_CONFIRMATION value: ${process.env.EMAIL_SEND_CONFIRMATION}`);
      
//       // Send notification to admin
//       console.log('Sending admin notification email');
//       await sendAdminEmail(formData);
//       console.log('Admin email sent successfully');
      
//       // Send confirmation to client
//       console.log('Attempting to send client confirmation email');
//       await sendClientEmail(formData);
      
//       console.log('Email processing completed successfully');
//     } catch (error) {
//       console.error('Email sending failed:', error);
//       throw new Error('Failed to process emails');
//     }
//   }


import nodemailer from 'nodemailer';
import { ContactFormData } from '@/types';

interface EmailOptions {
  to?: string;
  subject?: string;
  replyTo?: string;
}

// Create reusable transporter with environment variables and better error handling
const createTransporter = () => {
  // Log email configuration (remove passwords for security)
  console.log('Email Configuration:', {
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
    }
  });

  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    throw new Error('Missing email configuration. Check your environment variables.');
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    // For Gmail, enable this option for better debugging
    tls: {
      rejectUnauthorized: true
    }
  });
};

// Verify the transporter connection
async function verifyTransporter() {
  try {
    const transporter = createTransporter();
    const verification = await transporter.verify();
    console.log('SMTP connection verified:', verification);
    return true;
  } catch (error) {
    console.error('SMTP connection failed:', error);
    return false;
  }
}

// Admin email template (sent to you)
const createAdminEmailContent = (formData: ContactFormData) => {
  return {
    subject: `New Website Inquiry: ${formData.service || 'General Contact'}`,
    text: `
      New Contact Form Submission
      
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone || 'Not provided'}
      Service Requested: ${formData.service || 'Not specified'}
      
      Message:
      ${formData.message}
      
      This message was sent from your website contact form.
    `,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #f8f9fa; padding: 15px; border-bottom: 3px solid #0066cc; }
          .content { padding: 20px 0; }
          .footer { font-size: 12px; color: #666; padding-top: 20px; border-top: 1px solid #eee; }
          h2 { color: #0066cc; }
          .field { margin-bottom: 10px; }
          .label { font-weight: bold; }
          .message-box { background-color: #f8f9fa; padding: 15px; border-left: 3px solid #0066cc; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Website Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span> ${formData.name}
            </div>
            <div class="field">
              <span class="label">Email:</span> <a href="mailto:${formData.email}">${formData.email}</a>
            </div>
            <div class="field">
              <span class="label">Phone:</span> ${formData.phone || 'Not provided'}
            </div>
            <div class="field">
              <span class="label">Service Requested:</span> ${formData.service || 'Not specified'}
            </div>
            <div class="field">
              <span class="label">Message:</span>
              <div class="message-box">
                ${formData.message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          <div class="footer">
            This message was sent from your website contact form on ${new Date().toLocaleString()}.
          </div>
        </div>
      </body>
      </html>
    `,
  };
};

// Client confirmation email template (sent to person who submitted the form)
const createClientEmailContent = (formData: ContactFormData) => {
  return {
    subject: 'Thank you for contacting us',
    text: `
      Dear ${formData.name},
      
      Thank you for reaching out to us. We have received your message regarding ${formData.service || 'your inquiry'}.
      
      Here's a copy of the information you submitted:
      
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone || 'Not provided'}
      Service: ${formData.service || 'Not specified'}
      
      Your message:
      "${formData.message}"
      
      We will review your message and get back to you as soon as possible, usually within 1-2 business days.
      
      If you have any urgent matters, please feel free to call us directly.
      
      Best regards,
      Promotion Studio
    `,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #f8f9fa; padding: 20px; text-align: center; border-bottom: 3px solid #0066cc; }
          .content { padding: 20px 0; }
          .footer { font-size: 12px; color: #666; padding-top: 20px; border-top: 1px solid #eee; text-align: center; }
          h2 { color: #0066cc; }
          .thank-you { font-size: 18px; font-weight: bold; margin-bottom: 20px; }
          .message-box { background-color: #f8f9fa; padding: 15px; border-left: 3px solid #0066cc; margin: 15px 0; font-style: italic; }
          .info-table { width: 100%; border-collapse: collapse; margin: 15px 0; }
          .info-table td { padding: 8px; border-bottom: 1px solid #eee; }
          .info-table td:first-child { font-weight: bold; width: 30%; }
          .cta-button { display: inline-block; background-color: #0066cc; color: black; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank You for Contacting Us!</h2>
          </div>
          <div class="content">
            <p class="thank-you">Dear ${formData.name},</p>
            
            <p>Thank you for reaching out to us. We have received your message regarding ${formData.service || 'your inquiry'} and appreciate your interest in our services.</p>
            
            <p>Here's a copy of the information you submitted:</p>
            
            <table class="info-table">
              <tr>
                <td>Name:</td>
                <td>${formData.name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>${formData.email}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>${formData.phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td>Service:</td>
                <td>${formData.service || 'Not specified'}</td>
              </tr>
            </table>
            
            <p>Message:</p>
            <div class="message-box">
              "${formData.message.replace(/\n/g, '<br>')}"
            </div>
            
            <p>We will review your inquiry and get back to you as soon as possible, usually within 1-2 business days.</p>
            
            <p>If you have any urgent matters, please feel free to call us directly.</p>
            
            <p>Best regards,<br>
            <strong>Promotion Studio</strong></p>
            <a href="https://yourwebsite.com" class="cta-button text-white">Visit Our Website</a>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} PromotionStudio. All rights reserved.</p>
            <p>This is an automated message, please do not reply directly to this email.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };
};

// Send admin notification email
export async function sendAdminEmail(formData: ContactFormData, options: EmailOptions = {}): Promise<boolean> {
  console.log('Attempting to send admin email notification...');
  const transporter = createTransporter();
  const { subject, text, html } = createAdminEmailContent(formData);
  
  const mailOptions = {
    from: `"Website Contact Form" <${process.env.EMAIL_FROM}>`,
    to: options.to || process.env.EMAIL_FROM,
    replyTo: formData.email,
    subject: options.subject || subject,
    text,
    html,
  };

  console.log(`Sending admin email to: ${mailOptions.to}`);

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Admin email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Failed to send admin email:', error);
    return false;
  }
}

// Send confirmation email to client
export async function sendClientEmail(formData: ContactFormData, options: EmailOptions = {}): Promise<boolean> {
  console.log('Attempting to send client confirmation email...');
  console.log('EMAIL_SEND_CONFIRMATION value:', process.env.EMAIL_SEND_CONFIRMATION);
  
  // Always try to send client email regardless of environment variable
  // We'll keep the variable check for backward compatibility but log a warning
  if (process.env.EMAIL_SEND_CONFIRMATION !== 'true') {
    console.warn('Warning: EMAIL_SEND_CONFIRMATION is not set to "true" - sending client email anyway');
  }

  const transporter = createTransporter();
  const { subject, text, html } = createClientEmailContent(formData);
  
  const mailOptions = {
    from: `"Promotion Studio" <${process.env.EMAIL_FROM}>`,
    to: formData.email,
    subject: options.subject || subject,
    text,
    html,
  };

  console.log(`Sending confirmation email to client: ${mailOptions.to}`);

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Client confirmation email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Failed to send client confirmation email:', error);
    return false;
  }
}

// Main function to send all emails
export async function handleContactFormEmails(formData: ContactFormData): Promise<{adminSent: boolean, clientSent: boolean}> {
  console.log('Starting email processing for contact form submission');
  
  // First verify the SMTP connection
  const isSmtpValid = await verifyTransporter();
  if (!isSmtpValid) {
    console.error('SMTP connection verification failed - attempting to send emails anyway');
  }
  
  // Send admin email
  const adminSent = await sendAdminEmail(formData);
  
  // Send client email
  const clientSent = await sendClientEmail(formData);
  
  console.log('Email processing completed. Results:', { adminSent, clientSent });
  
  // Return success status for both email types
  return { adminSent, clientSent };
}
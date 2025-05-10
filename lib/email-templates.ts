import { ContactFormData } from '@/types';

const companyInfo = {
  name: 'Promotion Studio',
  website: 'https://promotionstudio.vercel.app/',
  phone: '+1 (123) 456-7890',
  address: '123 Business Street, City, Country',
  logoUrl: 'https://yourwebsite.com/logo.png',
  socialLinks: {
    facebook: 'https://facebook.com/yourcompany',
    twitter: 'https://twitter.com/yourcompany',
    instagram: 'https://instagram.com/yourcompany',
    linkedin: 'https://linkedin.com/company/yourcompany'
  },
  primaryColor: '#0066cc', // Main brand color
  accentColor: '#ff9900'   // Secondary color for accents
};

// Maps service values to readable service names
const serviceDisplayNames: Record<string, string> = {
  'video-editing': 'Video Editing',
  'graphic-design': 'Graphic Design',
  'social-media': 'Social Media Management',
  'web-development': 'Web Development',
  'content-writing': 'Content Writing',
  'ads-running': 'Ads Management',
  'cgi-video-animation': 'CGI & Video Animation',
  '2d-3d-svg-animation': '2D/3D/SVG Animation',
  'other': 'Other Services'
};

// Get a user-friendly service name
function getServiceName(serviceCode: string | undefined): string {
  if (!serviceCode) return 'General Inquiry';
  return serviceDisplayNames[serviceCode] || serviceCode;
}

// Format the date nicely
function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Create admin email template (the one sent to you)
export function createAdminEmailTemplate(formData: ContactFormData) {
  const serviceName = getServiceName(formData.service);
  const submissionDate = formatDate(new Date());
  
  return {
    subject: `New Website Inquiry: ${serviceName}`,
    text: `
      New Contact Form Submission
      
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone || 'Not provided'}
      Service Requested: ${serviceName}
      Submission Time: ${submissionDate}
      
      Message:
      ${formData.message}
      
      This message was sent from your website contact form.
    `,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: ${companyInfo.primaryColor}; padding: 20px; text-align: center; }
          .header h2 { color: white; margin: 0; }
          .content { padding: 20px; background-color: #ffffff; }
          .footer { background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; }
          .info-table { width: 100%; border-collapse: collapse; margin: 15px 0; }
          .info-table td { padding: 10px; border-bottom: 1px solid #eee; }
          .info-table td:first-child { font-weight: bold; width: 30%; }
          .message-box { background-color: #f8f9fa; padding: 15px; border-left: 3px solid ${companyInfo.primaryColor}; margin: 15px 0; }
          .priority-badge { display: inline-block; background-color: ${companyInfo.accentColor}; color: white; padding: 5px 10px; border-radius: 3px; font-size: 12px; margin-left: 10px; }
          .meta-info { background-color: #f8f9fa; padding: 10px; margin-top: 20px; border-radius: 4px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Website Inquiry ${formData.service ? `- ${serviceName}` : ''}</h2>
          </div>
          <div class="content">
            <p>You've received a new contact form submission from your website.</p>
            
            <table class="info-table">
              <tr>
                <td>Name:</td>
                <td>${formData.name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td><a href="mailto:${formData.email}">${formData.email}</a></td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>${formData.phone ? `<a href="tel:${formData.phone}">${formData.phone}</a>` : 'Not provided'}</td>
              </tr>
              <tr>
                <td>Service:</td>
                <td>${serviceName}</td>
              </tr>
              <tr>
                <td>Submitted:</td>
                <td>${submissionDate}</td>
              </tr>
            </table>
            
            <p><strong>Client Message:</strong></p>
            <div class="message-box">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
            
            <div class="meta-info">
              <p><strong>Technical Information:</strong></p>
              <p>Form ID: ${Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
              <p>Submission IP: [IP Address]</p>
              <p>User Agent: [User Agent]</p>
            </div>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} ${companyInfo.name} | <a href="${companyInfo.website}">${companyInfo.website}</a></p>
          </div>
        </div>
      </body>
      </html>
    `
  };
}

// Create client confirmation email template (sent to the person who filled the form)
export function createClientEmailTemplate(formData: ContactFormData) {
  const serviceName = getServiceName(formData.service);
  
  return {
    subject: `Thank you for contacting ${companyInfo.name}`,
    text: `
      Dear ${formData.name},
      
      Thank you for reaching out to ${companyInfo.name}. We have received your message regarding ${serviceName}.
      
      Here's a copy of the information you submitted:
      
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone || 'Not provided'}
      Service: ${serviceName}
      
      Your message:
      "${formData.message}"
      
      We will review your inquiry and get back to you as soon as possible, usually within 1-2 business days.
      
      If you have any urgent matters, please feel free to call us directly at ${companyInfo.phone}.
      
      Best regards,
      The ${companyInfo.name} Team
      ${companyInfo.website}
    `,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: ${companyInfo.primaryColor}; padding: 20px; text-align: center; }
          .logo { max-width: 150px; margin-bottom: 10px; }
          .header h2 { color: white; margin: 0; }
          .content { padding: 20px; background-color: #ffffff; }
          .footer { background-color: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666; }
          .thank-you { font-size: 18px; font-weight: bold; margin-bottom: 20px; color: ${companyInfo.primaryColor}; }
          .info-table { width: 100%; border-collapse: collapse; margin: 15px 0; }
          .info-table td { padding: 10px; border-bottom: 1px solid #eee; }
          .info-table td:first-child { font-weight: bold; width: 30%; }
          .message-box { background-color: #f8f9fa; padding: 15px; border-left: 3px solid ${companyInfo.primaryColor}; margin: 15px 0; font-style: italic; }
          .cta-button { display: inline-block; background-color: ${companyInfo.primaryColor}; color: black; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin-top: 20px; }
          .social-links { margin-top: 15px; }
          .social-link { display: inline-block; margin: 0 5px; }
          .divider { height: 1px; background-color: #eee; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            ${companyInfo.logoUrl ? `<img src="${companyInfo.logoUrl}" alt="${companyInfo.name} Logo" class="logo">` : ''}
            <h2>Thank You for Contacting Us!</h2>
          </div>
          <div class="content">
            <p class="thank-you">Dear ${formData.name},</p>
            
            <p>Thank you for reaching out to us. We have received your inquiry about <strong>${serviceName}</strong> and appreciate your interest in our services.</p>
            
            <p>A member of our team will review your message and get back to you as soon as possible, usually within 1-2 business days.</p>
            
            <div class="divider"></div>
            
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
                <td>${serviceName}</td>
              </tr>
            </table>
            
            <p>Your message:</p>
            <div class="message-box">
              "${formData.message.replace(/\n/g, '<br>')}"
            </div>
            
            <div class="divider"></div>
            
            <p>If you have any urgent matters, please feel free to call us directly at <strong>${companyInfo.phone}</strong>.</p>
            
            <p>Best regards,<br>
            <strong>The ${companyInfo.name} Team</strong></p>
            
            <center>
              <a href="${companyInfo.website}" class="cta-button">Visit Our Website</a>
            </center>
          </div>
          <div class="footer">
            <p>${companyInfo.name}</p>
            <p>${companyInfo.address}</p>
            <p>${companyInfo.phone} | <a href="mailto:${process.env.EMAIL_FROM}">${process.env.EMAIL_FROM}</a></p>
            
            <div class="social-links">
              ${Object.entries(companyInfo.socialLinks).map(([platform, url]) => 
                `<a href="${url}" class="social-link">${platform.charAt(0).toUpperCase() + platform.slice(1)}</a>`
              ).join(' | ')}
            </div>
            
            <p>© ${new Date().getFullYear()} ${companyInfo.name}. All rights reserved.</p>
            <p><small>This is an automated message. Please do not reply directly to this email.</small></p>
          </div>
        </div>
      </body>
      </html>
    `
  };
}
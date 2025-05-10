// import { NextRequest, NextResponse } from 'next/server';
// import { ContactFormData } from '@/types';
// import { handleContactFormEmails } from '@/lib/email';
// import { validateContactForm } from '@/lib/validation';

// export async function POST(request: NextRequest) {
//   try {
//     // Parse the JSON request body
//     const formData: ContactFormData = await request.json();
    
//     // Validate form data
//     const validationErrors = validateContactForm(formData);
//     if (validationErrors.length > 0) {
//       return NextResponse.json(
//         { 
//           error: 'Validation failed', 
//           errors: validationErrors 
//         },
//         { status: 400 }
//       );
//     }
    
//     // Process emails
//     try {
//       await handleContactFormEmails(formData);
//     } catch (emailError) {
//       console.error('Email sending failed:', emailError);
//       // Continue execution but log the error
//     }
    
//     // Here you could also save the submission to a database
//     // Example: await saveContactSubmission(formData);
    
//     // Return success response
//     return NextResponse.json(
//       { 
//         message: 'Form submitted successfully',
//         // You can include additional info here if needed
//         submitted: new Date().toISOString()
//       },
//       { status: 200 }
//     );
    
//   } catch (error) {
//     console.error('Contact form processing error:', error instanceof Error ? error.message : 'Unknown error');
    
//     return NextResponse.json(
//       { error: 'Failed to process your request. Please try again later.' },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData } from '@/types';
import { handleContactFormEmails } from '@/lib/email';
import { validateContactForm } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    console.log('Contact form submission received');
    
    // Parse the JSON request body
    const formData: ContactFormData = await request.json();
    console.log('Form data received:', {
      name: formData.name,
      email: formData.email,
      service: formData.service || 'Not specified',
      // Don't log the full message for privacy
      messageLength: formData.message?.length || 0
    });
    
    // Validate form data
    const validationErrors = validateContactForm(formData);
    if (validationErrors.length > 0) {
      console.log('Validation errors:', validationErrors);
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          errors: validationErrors 
        },
        { status: 400 }
      );
    }
    
    // Process emails
    try {
      console.log('Processing emails...');
      const emailResults = await handleContactFormEmails(formData);
      
      // Return detailed status about email sending
      return NextResponse.json(
        { 
          message: 'Form submitted successfully',
          emailStatus: {
            adminEmailSent: emailResults.adminSent,
            clientEmailSent: emailResults.clientSent
          },
          submitted: new Date().toISOString()
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Email processing error:', emailError);
      
      return NextResponse.json(
        { 
          error: 'Email sending failed', 
          message: emailError instanceof Error ? emailError.message : 'Unknown email error'
        },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error('Contact form processing error:', error instanceof Error ? error.message : 'Unknown error');
    
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 }
    );
  }
}
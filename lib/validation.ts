import { ContactFormData } from '@/types';

interface ValidationError {
  field: string;
  message: string;
}

export function validateContactForm(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  // Required fields validation
  const requiredFields: Array<keyof ContactFormData> = ['name', 'email', 'message'];
  for (const field of requiredFields) {
    if (!data[field] || data[field].trim() === '') {
      errors.push({
        field,
        message: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
      });
    }
  }

  // Email format validation
  if (data.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push({
        field: 'email',
        message: 'Please enter a valid email address',
      });
    }
  }

  // Phone number validation (optional field)
  if (data.phone && data.phone.trim() !== '') {
    // Basic phone validation - adjust regex as needed for your requirements
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(data.phone)) {
      errors.push({
        field: 'phone',
        message: 'Please enter a valid phone number',
      });
    }
  }

  // Message length validation
  if (data.message && data.message.length < 10) {
    errors.push({
      field: 'message',
      message: 'Message must be at least 10 characters long',
    });
  }

  return errors;
}
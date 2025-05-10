"use client"
import { useState, ChangeEvent, FormEvent, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface ValidationError {
  field: string;
  message: string;
}

interface ErrorResponse {
  error: string;
  errors?: ValidationError[];
}

type ServiceOption = {
  value: string;
  label: string;
}

const serviceOptions: ServiceOption[] = [
  { value: "video-editing", label: "Video Editing" },
  { value: "graphic-design", label: "Graphic Design" },
  { value: "social-media", label: "Social Media Management" },
  { value: "web-development", label: "Web Development" },
  { value: "content-writing", label: "Content Writing" },
  { value: "ads-running", label: "Ads Running" },
  { value: "cgi-video-animation", label: "CGI & Video Animation" },
  { value: "2d-3d-svg-animation", label: "2D/3D/SVG Animation" },
  { value: "other", label: "Other" }
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors(prev => {
        const updated = {...prev};
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormErrors({});
  
    try {
      console.log("Submitting form:", formData);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log("Response data:", data);
  
      if (!response.ok) {
        console.log("Response not OK:", response.status, data);
        
        // Handle validation errors
        if (data.errors && Array.isArray(data.errors)) {
          // Create a map of field errors
          const errorMap: Record<string, string> = {};
          
          data.errors.forEach((error:any) => {
            errorMap[error.field] = error.message;
          });
          
          setFormErrors(errorMap);
          
          // Show toast with the first error message
          if (data.errors.length > 0) {
            console.log("Showing validation error toast");
            toast({
              title: "Validation Error",
              description: data.errors[0].message,
              variant: "destructive",
            });
          } else {
            console.log("Showing general error toast");
            toast({
              title: "Submission Error",
              description: data.error || "Failed to submit form",
              variant: "destructive",
            });
          }
        } else {
          // Handle general error
          console.log("Showing general error toast (no errors array)");
          toast({
            title: "Submission Error",
            description: data.error || "Failed to submit form",
            variant: "destructive",
          });
        }
        return;
      }
  
      // Success case
      console.log("Showing success toast:", data.message);
      toast({
        title: "Success!",
        description: data.message || "Form submitted successfully! We'll get back to you soon.",
      });
  
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Error",
        description: "An unexpected error occurred while processing your request.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input 
            id="name" 
            name="name" 
            placeholder="Your name" 
            required 
            value={formData.name} 
            onChange={handleChange} 
            className={formErrors.name ? "border-red-500" : ""}
          />
          {formErrors.name && (
            <p className="text-sm text-red-500">{formErrors.name}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            required
            value={formData.email}
            onChange={handleChange}
            className={formErrors.email ? "border-red-500" : ""}
          />
          {formErrors.email && (
            <p className="text-sm text-red-500">{formErrors.email}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={handleChange}
            className={formErrors.phone ? "border-red-500" : ""}
          />
          {formErrors.phone && (
            <p className="text-sm text-red-500">{formErrors.phone}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service</Label>
          <select
            id="service"
            name="service"
            className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${formErrors.service ? "border-red-500" : ""}`}
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {formErrors.service && (
            <p className="text-sm text-red-500">{formErrors.service}</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project"
          required
          className={`min-h-[120px] ${formErrors.message ? "border-red-500" : ""}`}
          value={formData.message}
          onChange={handleChange}
        />
        {formErrors.message && (
          <p className="text-sm text-red-500">{formErrors.message}</p>
        )}
      </div>
      <Button 
        type="submit" 
        className="w-full bg-black text-white hover:bg-gray-800" 
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
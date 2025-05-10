// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { toast } from "@/components/ui/use-toast"

// export function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 1500))

//     toast({
//       title: "Form submitted!",
//       description: "We'll get back to you as soon as possible.",
//     })

//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       service: "",
//       message: "",
//     })
//     setIsSubmitting(false)
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//         <div className="space-y-2">
//           <Label htmlFor="name">Name</Label>
//           <Input id="name" name="name" placeholder="Your name" required value={formData.name} onChange={handleChange} />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="email">Email</Label>
//           <Input
//             id="email"
//             name="email"
//             type="email"
//             placeholder="Your email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//       </div>
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//         <div className="space-y-2">
//           <Label htmlFor="phone">Phone</Label>
//           <Input
//             id="phone"
//             name="phone"
//             placeholder="Your phone number"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="service">Service</Label>
//           <select
//             id="service"
//             name="service"
//             className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//             value={formData.service}
//             onChange={handleChange}
//           >
//             <option value="">Select a service</option>
//             <option value="video-editing">Video Editing</option>
//             <option value="graphic-design">Graphic Design</option>
//             <option value="social-media">Social Media Management</option>
//             <option value="web-development">Web Development</option>
//             <option value="content-writing">Content Writing</option>
//             <option value="ads-running">Ads Running</option>
//             <option value="cgi-video-animation">CGI & Video Animation</option>
//             <option value="2d-3d-svg-animation">2D/3D/SVG Animation</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//       </div>
//       <div className="space-y-2">
//         <Label htmlFor="message">Message</Label>
//         <Textarea
//           id="message"
//           name="message"
//           placeholder="Tell us about your project"
//           required
//           className="min-h-[120px]"
//           value={formData.message}
//           onChange={handleChange}
//         />
//       </div>
//       <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800" disabled={isSubmitting}>
//         {isSubmitting ? "Sending..." : "Send Message"}
//       </Button>
//     </form>
//   )
// }


"use client"

import { useState, ChangeEvent, FormEvent } from "react"
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
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      toast({
        title: "Form submitted!",
        description: "We'll get back to you as soon as possible.",
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
        title: "Submission error",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
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
          />
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
          />
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
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service</Label>
          <select
            id="service"
            name="service"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project"
          required
          className="min-h-[120px]"
          value={formData.message}
          onChange={handleChange}
        />
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

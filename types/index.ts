// Contact form interfaces
export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    service?: string;
    message: string;
  }
  
  // API response interfaces
  export interface ApiSuccessResponse {
    message: string;
  }
  
  export interface ApiErrorResponse {
    error: string;
  }
  
  export type ApiResponse = ApiSuccessResponse | ApiErrorResponse;
  
  // Service option type
  export interface ServiceOption {
    value: string;
    label: string;
  }
  
  export const serviceOptions: ServiceOption[] = [
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
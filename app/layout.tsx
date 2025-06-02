import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Promotion Studio – Best Digital Marketing & Creative Agency in India",
  description:
    "Promotion Studio offers expert video editing, graphic design, social media management, web development, content writing, and online advertising services to help your brand grow.",
  keywords: [
    "Promotion Studio",
    "digital marketing agency",
    "creative agency",
    "video editing",
    "graphic design",
    "social media management",
    "web development",
    "content writing",
    "ads running",
    "branding services India"
  ],
  generator: "v0.dev",
  authors: [{ name: "Promotion Studio", url: "https://www.promotionstudio.in" }],
  creator: "Promotion Studio",
  publisher: "Promotion Studio",
  openGraph: {
    title: "Promotion Studio – Best Digital Marketing & Creative Agency in India",
    description:
      "Explore Promotion Studio's range of professional services: video editing, branding, SEO, graphic design, and more.",
    url: "https://www.promotionstudio.in",
    siteName: "Promotion Studio",
    images: [
      {
        url: "https://www.promotionstudio.in/your-og-image.jpg", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Promotion Studio – Creative Branding and Marketing Agency",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://www.promotionstudio.in",
  },
  robots: "index, follow",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

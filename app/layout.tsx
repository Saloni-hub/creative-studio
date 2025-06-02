import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "PromotionStudio - Creative Agency",
  description:
    "Professional creative services including video editing, graphic design, social media management, web development, content writing, and ads running.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <title>Promotion Studio – Best Digital Marketing and Branding Agency in India</title>
      <meta name="description" content="Promotion Studio is your one-stop digital marketing and branding agency offering SEO, social media marketing, content creation, and complete online promotion services across India.">
      <meta name="keywords" content="Promotion Studio, digital marketing agency, branding services, SEO agency, online marketing India, social media marketing, content marketing">
      <meta name="robots" content="index, follow">
      <link rel="canonical" href="https://www.promotionstudio.in/" />
      <meta name="author" content="Promotion Studio" />
      <meta property="og:title" content="Promotion Studio – Best Digital Marketing and Branding Agency in India" />
      <meta property="og:description" content="Grow your brand online with Promotion Studio. Explore our expert SEO, branding, and social media services today." />
      <meta property="og:url" content="https://www.promotionstudio.in/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.promotionstudio.in/your-featured-image.jpg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

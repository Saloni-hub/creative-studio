"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  VideoIcon,
  PaletteIcon,
  ShareIcon,
  CodeIcon,
  FileTextIcon,
  TrendingUpIcon,
  MoreHorizontalIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface Service {
  id: string
  title: string
  description: string
  icon: string
  details: string[]
}

export function InteractiveServiceSelector() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const services: Service[] = [
    {
      id: "video-editing",
      title: "Video Editing",
      description: "Professional video editing services to create engaging content for your brand.",
      icon: "VideoIcon",
      details: [
        "Professional color grading",
        "Motion graphics and animations",
        "Sound design and mixing",
        "Transitions and effects",
        "Format optimization for different platforms",
      ],
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      description: "Eye-catching designs that communicate your brand's message effectively.",
      icon: "PaletteIcon",
      details: [
        "Logo design and brand identity",
        "Social media graphics",
        "Print materials and marketing collateral",
        "Packaging design",
        "Illustration and custom artwork",
      ],
    },
    {
      id: "social-media",
      title: "Social Media Management",
      description: "Strategic management of your social media presence to boost engagement.",
      icon: "ShareIcon",
      details: [
        "Content calendar planning",
        "Community engagement",
        "Analytics and reporting",
        "Trend research and implementation",
        "Cross-platform strategy",
      ],
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom website development tailored to your specific business needs.",
      icon: "CodeIcon",
      details: [
        "Responsive website design",
        "E-commerce solutions",
        "Content management systems",
        "Performance optimization",
        "SEO implementation",
      ],
    },
    {
      id: "content-writing",
      title: "Content Writing",
      description: "Compelling content that resonates with your target audience.",
      icon: "FileTextIcon",
      details: [
        "Blog posts and articles",
        "Website copy",
        "Email newsletters",
        "Product descriptions",
        "Script writing for videos",
      ],
    },
    {
      id: "ads-running",
      title: "Ads Running",
      description: "Targeted advertising campaigns to maximize your ROI.",
      icon: "TrendingUpIcon",
      details: [
        "PPC campaign management",
        "Social media advertising",
        "Display and retargeting ads",
        "Ad creative development",
        "Performance tracking and optimization",
      ],
    },
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "VideoIcon":
        return <VideoIcon className="h-10 w-10" />
      case "PaletteIcon":
        return <PaletteIcon className="h-10 w-10" />
      case "ShareIcon":
        return <ShareIcon className="h-10 w-10" />
      case "CodeIcon":
        return <CodeIcon className="h-10 w-10" />
      case "FileTextIcon":
        return <FileTextIcon className="h-10 w-10" />
      case "TrendingUpIcon":
        return <TrendingUpIcon className="h-10 w-10" />
      default:
        return <MoreHorizontalIcon className="h-10 w-10" />
    }
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedService(service)}
            className={`cursor-pointer rounded-lg p-4 text-center transition-all ${
              selectedService?.id === service.id ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <div className="flex justify-center mb-2">
              <div className={`p-2 rounded-full ${selectedService?.id === service.id ? "bg-white/20" : "bg-white"}`}>
                {getIcon(service.icon)}
              </div>
            </div>
            <h3 className="font-medium text-sm">{service.title}</h3>
          </motion.div>
        ))}
      </div>

      {selectedService && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          <Card className="border-2 border-black overflow-hidden">
            <CardHeader className="bg-black text-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">{getIcon(selectedService.icon)}</div>
                <div>
                  <CardTitle>{selectedService.title}</CardTitle>
                  <CardDescription className="text-gray-300 mt-1">{selectedService.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <h4 className="font-medium mb-3">What we offer:</h4>
              <ul className="grid gap-2">
                {selectedService.details.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="h-2 w-2 rounded-full bg-black"></div>
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="border-t bg-gray-50 flex justify-end gap-3 py-4">
              <Link href="#contact">
                <Button variant="outline">Get a Quote</Button>
              </Link>
              <Link href="#portfolio">
                <Button className="bg-black hover:bg-gray-800">See Examples</Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </div>
  )
}

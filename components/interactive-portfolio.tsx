"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

type Category = "all" | "video" | "design" | "web"

interface PortfolioItem {
  id: number
  title: string
  category: Category
  description: string
  image: string
}

export function InteractivePortfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all")
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Brand Promotional Video",
      category: "video",
      description: "A captivating promotional video for a tech startup that increased engagement by 45%.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "E-commerce Website Redesign",
      category: "web",
      description: "Complete redesign of an e-commerce platform that improved conversion rates by 32%.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Corporate Brand Identity",
      category: "design",
      description: "Comprehensive brand identity design for a financial services company.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Product Launch Campaign",
      category: "video",
      description: "Video series for a major product launch that generated over 1 million views.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Mobile App UI Design",
      category: "design",
      description: "User interface design for a fitness tracking mobile application.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Restaurant Website",
      category: "web",
      description: "Responsive website design and development for a high-end restaurant chain.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="w-full">
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 bg-gray-100 rounded-lg">
          {["all", "video", "design", "web"].map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              className={`capitalize ${selectedCategory === category ? "bg-black text-white" : ""}`}
              onClick={() => setSelectedCategory(category as Category)}
            >
              {category === "all" ? "All Work" : category}
            </Button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="p-4 bg-white">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 rounded-full mb-2 capitalize">
                  {item.category}
                </span>
                <h3 className="font-medium text-lg">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[50vh]">
                <Image
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
                <button
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  onClick={() => setSelectedItem(null)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 rounded-full mb-2 capitalize">
                  {selectedItem.category}
                </span>
                <h2 className="text-2xl font-bold mb-4">{selectedItem.title}</h2>
                <p className="text-gray-600 mb-6">{selectedItem.description}</p>
                <div className="flex gap-4">
                  <Button className="bg-black hover:bg-gray-800">View Case Study</Button>
                  <Button variant="outline" onClick={() => setSelectedItem(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

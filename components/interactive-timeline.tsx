"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface TimelineStep {
  number: number
  title: string
  description: string
}

export function InteractiveTimeline() {
  const steps: TimelineStep[] = [
    {
      number: 1,
      title: "Consultation",
      description: "We discuss your project requirements and goals to understand your vision.",
    },
    {
      number: 2,
      title: "Proposal",
      description: "We provide a detailed proposal with timeline and custom pricing.",
    },
    {
      number: 3,
      title: "Creation",
      description: "Our team works on your project with regular updates and revisions.",
    },
    {
      number: 4,
      title: "Delivery",
      description: "We deliver the final product and provide support as needed.",
    },
  ]

  return (
    <div className="relative">
      <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-gray-200 hidden md:block"></div>
      <div className="space-y-12 md:space-y-0">
        {steps.map((step, index) => (
          <TimelineStep key={index} step={step} index={index} />
        ))}
      </div>
    </div>
  )
}

function TimelineStep({ step, index }: { step: TimelineStep; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative md:grid md:grid-cols-2 md:gap-8 md:items-center ${index % 2 === 0 ? "md:text-right" : ""}`}
    >
      <div className={`md:col-span-1 ${index % 2 !== 0 ? "md:col-start-2" : ""}`}>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative">
          <div className="absolute top-6 -left-3 md:hidden">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white text-xs">
              {step.number}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 md:mb-4 pl-4 md:pl-0">{step.title}</h3>
          <p className="text-gray-600 pl-4 md:pl-0">{step.description}</p>
        </div>
      </div>

      <div
        className={`hidden md:flex md:col-span-1 md:items-center ${
          index % 2 === 0 ? "md:justify-end" : "md:justify-start"
        }`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="relative z-10"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white text-xl font-bold">
            {step.number}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

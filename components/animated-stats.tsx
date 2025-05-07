"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface Stat {
  value: number
  label: string
  prefix?: string
  suffix?: string
}

export function AnimatedStats() {
  const stats: Stat[] = [
    { value: 150, label: "Projects Completed", prefix: "" },
    { value: 98, label: "Client Satisfaction", suffix: "%" },
    { value: 5, label: "Years Experience", prefix: "" },
    { value: 24, label: "Awards Won", prefix: "" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
      {stats.map((stat, index) => (
        <AnimatedStat key={index} stat={stat} index={index} />
      ))}
    </div>
  )
}

function AnimatedStat({ stat, index }: { stat: Stat; index: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = stat.value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, stat.value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center text-center"
    >
      <div className="text-4xl md:text-5xl font-bold mb-2">
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <div className="text-gray-500">{stat.label}</div>
    </motion.div>
  )
}

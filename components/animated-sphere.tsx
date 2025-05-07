"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function AnimatedSphere() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dots, setDots] = useState<{ x: number; y: number; delay: number }[]>([])

  useEffect(() => {
    // Generate dots for the sphere effect
    const newDots = []
    const count = 180 // Number of dots
    const radius = 150 // Sphere radius

    for (let i = 0; i < count; i++) {
      // Calculate positions on a sphere
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi

      const x = radius * Math.cos(theta) * Math.sin(phi)
      const y = radius * Math.sin(theta) * Math.sin(phi)

      newDots.push({
        x,
        y,
        delay: i * 0.01,
      })
    }

    setDots(newDots)

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          rotateX: mousePosition.y,
          rotateY: mousePosition.x,
        }}
      >
        {dots.map((dot, index) => (
          <motion.div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full bg-white"
            style={{
              left: "50%",
              top: "50%",
              x: dot.x,
              y: dot.y,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{
              delay: dot.delay,
              duration: 0.5,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

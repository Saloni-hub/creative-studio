"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
}

export function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    // Generate particles
    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 150)
    const newParticles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    setParticles(newParticles)

    // Handle resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: particle.opacity,
            scale: particle.size / 10,
          }}
          animate={{
            x: [particle.x, particle.x + Math.random() * 100 - 50, particle.x],
            y: [particle.y, particle.y + Math.random() * 100 - 50, particle.y],
            opacity: [particle.opacity, particle.opacity + 0.2, particle.opacity],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  )
}

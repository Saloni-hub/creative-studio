"use client"

import { motion } from "framer-motion"

export function FloatingElements() {
  const shapes = [
    { type: "square", x: "10%", y: "20%", size: 40, delay: 0 },
    { type: "circle", x: "80%", y: "15%", size: 30, delay: 0.5 },
    { type: "triangle", x: "20%", y: "70%", size: 50, delay: 1 },
    { type: "square", x: "70%", y: "60%", size: 35, delay: 1.5 },
    { type: "circle", x: "40%", y: "30%", size: 25, delay: 2 },
    { type: "triangle", x: "60%", y: "80%", size: 45, delay: 2.5 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.1,
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 360],
          }}
          transition={{
            opacity: { duration: 1, delay: shape.delay },
            y: {
              duration: 3 + index,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: shape.delay,
            },
            x: {
              duration: 4 + index,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: shape.delay,
            },
            rotate: {
              duration: 10 + index * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: shape.delay,
            },
          }}
        >
          {shape.type === "square" && <div className="w-full h-full bg-black rounded-md" />}
          {shape.type === "circle" && <div className="w-full h-full bg-black rounded-full" />}
          {shape.type === "triangle" && (
            <div
              className="w-0 h-0 border-solid"
              style={{
                borderWidth: `0 ${shape.size / 2}px ${shape.size}px ${shape.size / 2}px`,
                borderColor: "transparent transparent black transparent",
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}

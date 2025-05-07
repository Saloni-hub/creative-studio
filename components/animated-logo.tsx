"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-[300px] h-[300px]"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: isHovered ? 5 : 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {/* Letter E */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main vertical bar */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[30px] h-[180px] bg-black rounded-md"
            whileHover={{ scale: 1.05 }}
          />
          {/* Top horizontal bar */}
          <motion.div
            className="absolute left-0 top-0 w-[120px] h-[30px] bg-black rounded-md"
            whileHover={{ scale: 1.05 }}
          />
          {/* Middle horizontal bar */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[100px] h-[30px] bg-black rounded-md"
            whileHover={{ scale: 1.05 }}
          />
          {/* Bottom horizontal bar */}
          <motion.div
            className="absolute left-0 bottom-0 w-[120px] h-[30px] bg-black rounded-md"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Letter A */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[200px] h-[200px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Left diagonal */}
          <motion.div
            className="absolute left-[120px] top-1/2 -translate-y-1/2 w-[30px] h-[180px] bg-black rounded-md origin-top"
            style={{ transform: "rotate(20deg)" }}
            whileHover={{ scale: 1.05 }}
          />
          {/* Right diagonal */}
          <motion.div
            className="absolute left-[180px] top-1/2 -translate-y-1/2 w-[30px] h-[180px] bg-black rounded-md origin-top"
            style={{ transform: "rotate(-20deg)" }}
            whileHover={{ scale: 1.05 }}
          />
          {/* Middle bar */}
          <motion.div
            className="absolute left-[130px] top-1/2 w-[70px] h-[30px] bg-black rounded-md"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 text-center text-white">
        <p className="text-sm">Hover to interact</p>
      </div>
    </div>
  )
}

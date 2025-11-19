"use client"
import { motion } from "framer-motion"

export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-sky-100 rounded-full opacity-20"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-20 w-16 h-16 bg-sky-200 rounded-full opacity-30"
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-40 left-1/4 w-12 h-12 bg-sky-300 rounded-full opacity-25"
      />
    </div>
  )
}

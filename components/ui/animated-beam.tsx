"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AnimatedBeamProps {
  className?: string
  delay?: number
}

export const AnimatedBeam = ({ className, delay = 0 }: AnimatedBeamProps) => {
  return (
    <motion.div
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        pathLength: { delay, duration: 2, ease: "easeInOut" },
        opacity: { delay, duration: 0.5 },
      }}
      className={cn("absolute inset-0", className)}
    >
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
        <motion.path
          d="M10,50 Q50,10 90,50"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}

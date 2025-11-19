"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type React from "react"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const AnimatedCard = ({ children, className, delay = 0 }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

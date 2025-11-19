"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type React from "react"

interface MagicCardProps {
  children: React.ReactNode
  className?: string
  gradientColor?: string
}

export const MagicCard = ({ children, className }: MagicCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative h-full w-full rounded-xl bg-white p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 group",
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

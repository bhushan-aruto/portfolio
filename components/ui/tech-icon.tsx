"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type React from "react"

interface TechIconProps {
  icon: React.ReactNode
  name: string
  className?: string
  delay?: number
}

export const TechIcon = ({ icon, name, className, delay = 0 }: TechIconProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -5 }}
      className={cn(
        "flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group",
        className,
      )}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="text-3xl group-hover:scale-110 transition-transform duration-300"
      >
        {icon}
      </motion.div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors">{name}</span>
    </motion.div>
  )
}

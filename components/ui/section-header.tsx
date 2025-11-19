"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export const SectionHeader = ({ title, subtitle, className }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn("text-center mb-16", className)}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-6 rounded-full" />
    </motion.div>
  )
}

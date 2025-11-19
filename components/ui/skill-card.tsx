"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type React from "react"

interface SkillCardProps {
  title: string
  skills: string[]
  icon: React.ReactNode
  className?: string
  delay?: number
}

export const SkillCard = ({ title, skills, icon, className, delay = 0 }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group",
        className,
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-sky-50 rounded-xl text-sky-600 group-hover:bg-sky-100 transition-colors">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: delay + index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-2 h-2 bg-sky-400 rounded-full" />
            <span className="text-gray-700 font-medium">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextRevealProps {
  text: string
  className?: string
}

export const TextReveal = ({ text, className }: TextRevealProps) => {
  const words = text.split(" ")

  return (
    <motion.div className={cn("", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

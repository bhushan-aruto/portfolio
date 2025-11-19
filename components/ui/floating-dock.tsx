"use client"
import { cn } from "@/lib/utils"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import type React from "react"

interface FloatingDockProps {
  items: {
    title: string
    icon: React.ReactNode
    href: string
  }[]
  className?: string
}

export const FloatingDock = ({ items, className }: FloatingDockProps) => {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      className={cn(
        "mx-auto flex h-16 items-end gap-4 rounded-2xl bg-white/80 backdrop-blur-md px-4 pb-3 border border-gray-200 shadow-lg",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  )
}

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: any
  title: string
  icon: React.ReactNode
  href: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref}
        style={{ width, height }}
        className="aspect-square rounded-full bg-sky-100 flex items-center justify-center relative hover:bg-sky-200 transition-colors"
      >
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-sky-600"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  )
}

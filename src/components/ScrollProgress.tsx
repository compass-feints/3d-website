"use client"

import { motion, useScroll, useSpring } from "motion/react"

// Thin brand-colored progress bar pinned above the nav.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 inset-x-0 z-[60] h-[3px] origin-left bg-brand"
    />
  )
}

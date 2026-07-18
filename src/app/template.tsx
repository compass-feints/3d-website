"use client"

import { motion } from "motion/react"

// Cross-route fade. Opacity only — a transform or filter here would turn this
// wrapper into the containing block for the fixed-position nav.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

"use client"

// Headline word cycler: the word blurs and drifts out while the next one
// blurs in, like the "This is something <beautiful>" reference.
import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"

interface RotatingWordProps {
  words: string[]
  interval?: number
  className?: string
}

export function RotatingWord({ words, interval = 2600, className = "" }: RotatingWordProps) {
  const [index, setIndex] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "")

  return (
    <span className={`relative inline-grid overflow-visible text-left align-baseline ${className}`}>
      {/* Reserve a fixed box (widest word) so the line never reflows or shifts
          vertically as words swap. Left-aligned, so the extra width is just
          invisible trailing space, not a gap before the word. */}
      <span className="invisible whitespace-nowrap [grid-area:1/1]" aria-hidden="true">
        {longest}
      </span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: "0.6em", filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: "-0.6em", filter: "blur(10px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="whitespace-nowrap [grid-area:1/1] justify-self-start will-change-transform"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

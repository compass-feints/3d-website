"use client"

import { MeshGradient } from "@paper-design/shaders-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { useIsClient, usePrefersReducedMotion } from "@/lib/hooks"

interface HeroSectionProps {
  title?: string
  highlightText?: string
  description?: string
  buttonText?: string
  onButtonClick?: () => void
  colors?: string[]
  distortion?: number
  swirl?: number
  speed?: number
  offsetX?: number
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  buttonClassName?: string
  maxWidth?: string
  veilOpacity?: string
  fontFamily?: string
  fontWeight?: number
}

export function HeroSection({
  title = "Be first through",
  highlightText = "the door.",
  description = "Join the waitlist and get early access before the public launch. One email when it matters — nothing else.",
  buttonText = "Sign up for the waitlist",
  onButtonClick,
  colors = ["#72b9bb", "#b5d9d9", "#ffd1bd", "#ffebe0", "#8cc5b8", "#dbf4a4"],
  distortion = 0.8,
  swirl = 0.6,
  speed = 0.42,
  offsetX = 0.08,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  buttonClassName = "",
  maxWidth = "max-w-6xl",
  veilOpacity = "bg-white/20 dark:bg-black/25",
  fontFamily = "var(--font-geist-sans), sans-serif",
  fontWeight = 500,
}: HeroSectionProps) {
  const mounted = useIsClient()
  const reducedMotion = usePrefersReducedMotion()
  const [email, setEmail] = useState("")
  const [joined, setJoined] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setJoined(true)
    onButtonClick?.()
  }

  return (
    <section
      className={`relative w-full min-h-screen overflow-hidden bg-background flex items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 w-full h-full">
        {mounted && (
          <>
            <MeshGradient
              className="absolute inset-0 w-full h-full"
              colors={colors}
              distortion={distortion}
              swirl={swirl}
              grainMixer={0}
              grainOverlay={0}
              speed={reducedMotion ? 0 : speed}
              offsetX={offsetX}
            />
            <div className={`absolute inset-0 pointer-events-none ${veilOpacity}`} />
          </>
        )}
      </div>

      <div className={`relative z-10 ${maxWidth} mx-auto px-6 w-full`}>
        <div className="text-center">
          <h2
            className={`font-bold text-foreground text-balance text-4xl sm:text-5xl md:text-6xl xl:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[1.1] mb-6 lg:text-7xl ${titleClassName}`}
            style={{ fontFamily, fontWeight }}
          >
            {title} <span className="text-primary">{highlightText}</span>
          </h2>
          <p
            className={`text-lg sm:text-xl text-white/85 text-pretty max-w-2xl mx-auto leading-relaxed mb-10 px-4 ${descriptionClassName}`}
          >
            {description}
          </p>

          <AnimatePresence mode="wait">
            {joined ? (
              <motion.p
                key="joined"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-lg sm:text-xl text-white font-medium"
              >
                You&apos;re on the list ✓
              </motion.p>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={false}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  aria-label="Email address"
                  className="w-full sm:flex-1 px-6 py-4 rounded-full bg-black/40 backdrop-blur border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  className={`shrink-0 px-6 py-4 sm:px-8 rounded-full border-4 bg-[rgba(63,63,63,1)] border-card text-sm sm:text-base text-white hover:bg-[rgba(63,63,63,0.9)] transition-colors ${buttonClassName}`}
                >
                  {buttonText}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

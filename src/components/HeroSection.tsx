"use client"

import { MeshGradient } from "@paper-design/shaders-react"
import { AnimatePresence, motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
  title = "Know what they think.",
  highlightText = "Before anyone else.",
  description = "Join the waitlist and get early access before the public launch. One email when it matters — nothing else.",
  buttonText = "Sign up for the waitlist",
  onButtonClick,
  colors = ["#ffffff", "#a8cdf0", "#2b7de0", "#dceafa", "#7db8ec"],
  distortion = 0.8,
  swirl = 0.6,
  speed = 0.42,
  offsetX = 0.08,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  buttonClassName = "",
  maxWidth = "max-w-6xl",
  veilOpacity = "bg-white/25",
  fontFamily = "var(--font-instrument), serif",
  fontWeight = 400,
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
            className={`font-display text-foreground text-balance tracking-[-0.01em] text-5xl sm:text-6xl md:text-7xl xl:text-[88px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[1.05] mb-6 ${titleClassName}`}
            style={{ fontFamily, fontWeight }}
          >
            {title} <span className="italic text-brand">{highlightText}</span>
          </h2>
          <p
            className={`text-lg sm:text-xl text-foreground/75 text-pretty max-w-2xl mx-auto leading-relaxed mb-10 px-4 ${descriptionClassName}`}
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
                className="text-lg sm:text-xl text-foreground font-medium"
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
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  aria-label="Email address"
                  className="w-full sm:flex-1 h-13 px-6 rounded-full bg-white/80 backdrop-blur border-foreground/15 text-base placeholder:text-foreground/40"
                />
                <Button
                  type="submit"
                  size="lg"
                  className={`group shrink-0 h-13 rounded-full px-7 text-base shadow-lg shadow-foreground/20 ${buttonClassName}`}
                >
                  {buttonText}
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Button>
              </motion.form>
            )}
          </AnimatePresence>

          {!joined && (
            <p className="text-sm text-foreground/50 mt-5">
              Your email stays yours — no spam, no sharing, unsubscribe anytime.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

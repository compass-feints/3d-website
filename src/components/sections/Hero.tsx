"use client"

import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { ShaderBackground } from "@/components/ShaderBackground"
import { ProductPanel } from "@/components/ProductPanel"
import { RotatingWord } from "@/components/RotatingWord"
import BlurText from "@/components/reactbits/BlurText"
import { Button } from "@/components/ui/button"

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <ShaderBackground className="min-h-screen">
      <div className="absolute inset-0 bg-[#f2ecd6]/35 pointer-events-none" />

      <div className="relative z-10 min-h-screen mx-auto max-w-7xl grid lg:grid-cols-2 items-center gap-12 px-6 pt-28 pb-16 lg:py-0">
        {/* Left — animated headline + CTA */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-display font-normal tracking-[-0.01em] text-foreground text-6xl sm:text-7xl xl:text-8xl leading-[1.02] mb-8 text-balance"
          >
            Every comment,
            <br />
            turned into{" "}
            <RotatingWord
              words={["answers.", "themes.", "quotes.", "decisions."]}
              className="italic text-brand"
            />
          </motion.h1>

          <BlurText
            text="Empty Placeholder"
            animateBy="words"
            direction="top"
            delay={50}
            className="justify-center lg:justify-start text-lg sm:text-xl text-foreground/65 max-w-xl mb-12"
          />

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button
              size="lg"
              className="group h-13 rounded-full px-7 text-base shadow-lg shadow-foreground/20"
              render={<a href="#waitlist" />}
            >
              Join the waitlist
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Button>
          </motion.div>
        </div>

        {/* Right — slanted product screenshot */}
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="pointer-events-none relative hidden lg:block h-full [perspective:2000px]"
          aria-hidden="true"
        >
          <div
            className="absolute top-1/2 left-6"
            style={{
              // Shadcn-style tilt: near-upright panel, verticals leaning right
              // at the top (skew), horizontals close to level, subtle 3D depth.
              transform:
                "translateY(-50%) rotateX(6deg) rotateY(-6deg) rotateZ(1.5deg) skewX(-6deg) scale(0.85)",
              transformOrigin: "left center",
            }}
          >
            <ProductPanel className="ring-1 ring-foreground/10" />
          </div>
        </motion.div>
      </div>
    </ShaderBackground>
  )
}

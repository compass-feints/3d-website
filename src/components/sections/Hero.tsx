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
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/50"
          >
            <span aria-hidden="true">[ 00 ]</span>
            Comment intelligence / YouTube
          </motion.p>
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
            text="Paste a YouTube link. Wedgio reads every comment and hands you the sentiment, the themes, and the exact quotes that prove your point."
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
              className="group h-13 rounded-md px-7 font-mono text-sm uppercase tracking-[0.12em] shadow-lg shadow-foreground/20"
              render={<a href="#waitlist" />}
            >
              Join the waitlist
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Button>
          </motion.div>

          {/* Spec strip — the numbers that matter, stated flatly */}
          <motion.dl
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            className="mt-12 grid grid-cols-3 gap-6 border-t border-foreground/15 pt-5 text-left"
          >
            {[
              ["50K", "comments per run"],
              ["100%", "replies included"],
              ["0", "accounts to connect"],
            ].map(([value, label]) => (
              <div key={label} className="border-l border-foreground/15 pl-4">
                <dt className="sr-only">{label}</dt>
                <dd className="font-mono text-xl text-foreground">{value}</dd>
                <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45">
                  {label}
                </dd>
              </div>
            ))}
          </motion.dl>
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
            <motion.div
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
            >
              <ProductPanel className="ring-1 ring-foreground/10" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </ShaderBackground>
  )
}

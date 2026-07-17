"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { ShaderBackground } from "@/components/ShaderBackground"
import { RotatingWord } from "@/components/RotatingWord"
import BlurText from "@/components/reactbits/BlurText"
import Magnet from "@/components/reactbits/Magnet"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <ShaderBackground className="min-h-screen">
      <div className="absolute inset-0 bg-white/30 pointer-events-none" />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge
            variant="outline"
            className="mb-8 h-auto rounded-full border-foreground/15 bg-white/60 backdrop-blur px-4 py-1.5 font-mono text-[11px] tracking-[0.25em] uppercase text-foreground/70"
          >
            <Sparkles className="size-3 text-brand" aria-hidden="true" />
            Comment intelligence for YouTube
          </Badge>
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-display font-normal tracking-[-0.01em] text-foreground text-6xl sm:text-8xl md:text-9xl leading-[1.02] mb-8 text-balance"
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
          text="Paste a YouTube link. We read every comment and hand you the sentiment, the themes, and the exact quotes that prove your point."
          animateBy="words"
          direction="top"
          delay={50}
          className="justify-center text-lg sm:text-xl text-foreground/65 max-w-2xl mb-12"
        />

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button
            variant="outline"
            size="lg"
            className="h-13 rounded-full px-7 text-base bg-white/80 backdrop-blur border-foreground/15 hover:bg-white"
            render={<a href="#how" />}
          >
            See how it works
          </Button>
          <Magnet padding={60} magnetStrength={4}>
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
          </Magnet>
        </motion.div>
      </div>
    </ShaderBackground>
  )
}

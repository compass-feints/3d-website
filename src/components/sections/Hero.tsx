"use client"

import { ShaderBackground } from "@/components/ShaderBackground"
import SplitText from "@/components/reactbits/SplitText"
import BlurText from "@/components/reactbits/BlurText"
import RotatingText from "@/components/reactbits/RotatingText"
import ShinyText from "@/components/reactbits/ShinyText"
import Magnet from "@/components/reactbits/Magnet"
import { BRAND } from "@/lib/brand"

export function Hero() {
  return (
    <ShaderBackground className="min-h-screen">
      <div className="absolute inset-0 bg-white/10 pointer-events-none" />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-xs sm:text-sm tracking-[0.35em] uppercase text-foreground/50 mb-6">
          Comment intelligence for YouTube
        </p>

        <SplitText
          text={BRAND}
          tag="h1"
          className="text-6xl sm:text-8xl md:text-9xl font-bold text-foreground tracking-tight leading-none mb-8"
          splitType="chars"
          delay={40}
          duration={1.1}
          ease="power3.out"
          from={{ opacity: 0, y: 44 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
        />

        <BlurText
          text="Paste a YouTube link. We read every comment and hand you the sentiment, the themes, and the exact quotes that prove your point."
          animateBy="words"
          direction="top"
          delay={70}
          className="justify-center text-lg sm:text-xl text-foreground/70 max-w-2xl mb-10"
        />

        <div className="flex items-center gap-2 text-lg sm:text-xl text-foreground/80 mb-12">
          <span>Built for</span>
          <RotatingText
            texts={["marketing teams", "creators", "PR & comms", "insight teams"]}
            rotationInterval={2200}
            staggerDuration={0.02}
            mainClassName="px-3 py-1 bg-primary text-white rounded-lg overflow-hidden font-semibold"
            elementLevelClassName="inline-block"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-5">
          <Magnet padding={60} magnetStrength={4}>
            <a
              href="#waitlist"
              className="inline-block px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/85 transition-colors shadow-lg shadow-primary/25"
            >
              Join the waitlist
            </a>
          </Magnet>
          <a href="#how" className="text-sm transition-colors">
            <ShinyText text="See how it works ↓" speed={3} color="#5b7a94" shineColor="#0e2233" />
          </a>
        </div>
      </div>
    </ShaderBackground>
  )
}

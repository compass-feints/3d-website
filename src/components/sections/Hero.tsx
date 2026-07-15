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
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-xs sm:text-sm tracking-[0.35em] uppercase text-white/60 mb-6">
          Something new is coming
        </p>

        <SplitText
          text={BRAND}
          tag="h1"
          className="text-6xl sm:text-8xl md:text-9xl font-bold text-white tracking-tight leading-none mb-8"
          splitType="chars"
          delay={40}
          duration={1.1}
          ease="power3.out"
          from={{ opacity: 0, y: 44 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
        />

        <BlurText
          text="One product. Infinite possibilities. The future doesn't wait — neither should you."
          animateBy="words"
          direction="top"
          delay={90}
          className="justify-center text-lg sm:text-xl text-white/80 max-w-2xl mb-10"
        />

        <div className="flex items-center gap-2 text-lg sm:text-xl text-white/90 mb-12">
          <span>Built for</span>
          <RotatingText
            texts={["dreamers", "builders", "creators", "what's next"]}
            rotationInterval={2200}
            staggerDuration={0.02}
            mainClassName="px-3 py-1 bg-primary/90 text-white rounded-lg overflow-hidden font-semibold"
            elementLevelClassName="inline-block"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-5">
          <Magnet padding={60} magnetStrength={4}>
            <a
              href="#waitlist"
              className="inline-block px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/85 transition-colors"
            >
              Join the waitlist
            </a>
          </Magnet>
          <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">
            <ShinyText text="See what's inside ↓" speed={3} color="#9ca3af" shineColor="#ffffff" />
          </a>
        </div>
      </div>
    </ShaderBackground>
  )
}

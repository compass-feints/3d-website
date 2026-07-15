"use client"

import ClickSpark from "@/components/reactbits/ClickSpark"
import { Nav } from "@/components/Nav"
import { Hero } from "@/components/sections/Hero"
import { Features } from "@/components/sections/Features"
import { Stats } from "@/components/sections/Stats"
import { Footer } from "@/components/sections/Footer"
import { HeroSection } from "@/components/HeroSection"

export default function Home() {
  return (
    <ClickSpark sparkColor="#8b5cf6" sparkSize={10} sparkRadius={22} sparkCount={8} duration={450}>
      <main id="top">
        <Nav />
        <Hero />
        <Features />
        <Stats />
        <div id="waitlist">
          <HeroSection
            colors={["#050505", "#8b5cf6", "#4c1d95", "#1e1b4b", "#c4b5fd"]}
            veilOpacity="bg-black/30"
            speed={0.35}
          />
        </div>
        <Footer />
      </main>
    </ClickSpark>
  )
}

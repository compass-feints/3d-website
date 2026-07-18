"use client"

import ClickSpark from "@/components/reactbits/ClickSpark"
import { Nav } from "@/components/Nav"
import { ScrollProgress } from "@/components/ScrollProgress"
import { Hero } from "@/components/sections/Hero"
import { Connect } from "@/components/sections/Connect"
import { FAQ } from "@/components/sections/FAQ"
import { HeroSection } from "@/components/HeroSection"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <ClickSpark sparkColor="#7d9440" sparkSize={10} sparkRadius={22} sparkCount={8} duration={450}>
      <main id="top">
        <ScrollProgress />
        <Nav />
        <Hero />
        <Connect />
        <FAQ />
        <div id="waitlist">
          <HeroSection veilOpacity="bg-[#f2ecd6]/30" speed={0.35} />
        </div>
        <Footer />
      </main>
    </ClickSpark>
  )
}

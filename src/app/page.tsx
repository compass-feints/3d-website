"use client"

import ClickSpark from "@/components/reactbits/ClickSpark"
import { Nav } from "@/components/Nav"
import { Hero } from "@/components/sections/Hero"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Features } from "@/components/sections/Features"
import { UseCases } from "@/components/sections/UseCases"
import { Stats } from "@/components/sections/Stats"
import { Testimonials } from "@/components/sections/Testimonials"
import { Footer } from "@/components/sections/Footer"
import { HeroSection } from "@/components/HeroSection"

export default function Home() {
  return (
    <ClickSpark sparkColor="#2b7de0" sparkSize={10} sparkRadius={22} sparkCount={8} duration={450}>
      <main id="top">
        <Nav />
        <Hero />
        <HowItWorks />
        <Features />
        <UseCases />
        <Stats />
        <Testimonials />
        <div id="waitlist">
          <HeroSection veilOpacity="bg-white/25" speed={0.35} />
        </div>
        <Footer />
      </main>
    </ClickSpark>
  )
}

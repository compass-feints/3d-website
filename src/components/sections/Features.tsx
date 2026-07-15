"use client"

import SpotlightCard from "@/components/reactbits/SpotlightCard"
import SplitText from "@/components/reactbits/SplitText"
import { BRAND } from "@/lib/brand"

const FEATURES = [
  {
    n: "01",
    title: "Impossibly fast",
    body: `${BRAND} does in seconds what used to take all day. You'll wonder how you ever lived without it.`,
  },
  {
    n: "02",
    title: "Radically simple",
    body: "No manuals. No onboarding calls. Open it and it already understands what you need.",
  },
  {
    n: "03",
    title: "Quietly powerful",
    body: "Under the calm surface: an engine built for the heaviest work you can throw at it.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative bg-background py-28 sm:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.35em] uppercase text-white/40 text-center mb-4">
          Why {BRAND}
        </p>
        <SplitText
          text="Built different. On purpose."
          tag="h2"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-16 w-full"
          splitType="words"
          delay={80}
          duration={0.9}
        />
        <div className="grid sm:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <SpotlightCard
              key={f.n}
              className="p-8 min-h-[240px] flex flex-col"
              spotlightColor="rgba(139, 92, 246, 0.25)"
            >
              <span className="font-mono text-xs tracking-[0.25em] text-primary mb-6">{f.n}</span>
              <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
              <p className="text-white/60 leading-relaxed">{f.body}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}

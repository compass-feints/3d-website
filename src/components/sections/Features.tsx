"use client"

import SpotlightCard from "@/components/reactbits/SpotlightCard"
import SplitText from "@/components/reactbits/SplitText"

const FEATURES = [
  {
    n: "01",
    title: "Zoom out",
    body: "The landscape at a glance — comment volume, sentiment trends, and how the reaction is shifting over time.",
  },
  {
    n: "02",
    title: "Zoom in",
    body: "The why behind the reaction. Recurring themes, sarcasm and in-jokes decoded, and the threads driving the conversation.",
  },
  {
    n: "03",
    title: "Decide",
    body: "Insights shaped into next steps — briefs, messaging angles, creative direction, and crisis response, in your audience's own words.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative bg-background pb-28 sm:pb-36 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.35em] uppercase text-foreground/40 text-center mb-4">
          Three layers deep
        </p>
        <SplitText
          text="From bird's-eye view to next move."
          tag="h2"
          className="font-display text-5xl sm:text-6xl md:text-7xl font-normal text-foreground tracking-[-0.01em] mb-16 w-full"
          splitType="words"
          delay={80}
          duration={0.9}
        />
        <div className="grid sm:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <SpotlightCard
              key={f.n}
              surfaceClassName="border-foreground/15 bg-white"
              spotlightColor="rgba(43, 125, 224, 0.14)"
              className="p-8 min-h-[240px] flex flex-col"
            >
              <span className="font-mono text-xs tracking-[0.25em] text-brand mb-6">{f.n}</span>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{f.body}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}

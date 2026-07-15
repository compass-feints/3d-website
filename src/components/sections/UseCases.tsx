"use client"

import {
  Ruler,
  Flame,
  ThumbsUp,
  Users,
  PieChart,
  MessagesSquare,
  Lightbulb,
  Banknote,
  Presentation,
  TextSearch,
  type LucideIcon,
} from "lucide-react"
import SpotlightCard from "@/components/reactbits/SpotlightCard"
import SplitText from "@/components/reactbits/SplitText"

const USE_CASES: { icon: LucideIcon; color: string; text: string }[] = [
  { icon: Ruler, color: "#c96a5a", text: "Measure how a campaign actually landed" },
  { icon: Flame, color: "#a63d40", text: "Read the room during a crisis or viral moment" },
  { icon: ThumbsUp, color: "#d99a3d", text: "Track how a brand or product is perceived" },
  { icon: Users, color: "#d9a03d", text: "See what people say on a competitor's videos" },
  { icon: PieChart, color: "#3d6b5c", text: "Turn thousands of comments into clear themes" },
  { icon: MessagesSquare, color: "#d97c66", text: "Pull the exact quotes that prove your point" },
  { icon: Lightbulb, color: "#8a4a5e", text: "Spot product and creative ideas as they emerge" },
  { icon: Banknote, color: "#3d6b5c", text: "Validate a hunch before you spend budget on it" },
  { icon: Presentation, color: "#d97c66", text: "Explain the why behind engagement numbers" },
  { icon: TextSearch, color: "#a63d40", text: "Surface recurring questions, complaints, requests" },
]

export function UseCases() {
  return (
    <section id="use-cases" className="relative bg-background pb-28 sm:pb-36 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.35em] uppercase text-foreground/40 text-center mb-4">
          Use cases
        </p>
        <SplitText
          text="One comment section. Ten reasons to read it."
          tag="h2"
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-[-0.02em] mb-16 w-full"
          splitType="words"
          delay={70}
          duration={0.9}
        />
        <div className="grid sm:grid-cols-2 gap-5">
          {USE_CASES.map((u) => (
            <SpotlightCard
              key={u.text}
              surfaceClassName="border-foreground/15 bg-white"
              spotlightColor="rgba(43, 125, 224, 0.12)"
              className="rounded-2xl"
            >
              <div className="flex items-center gap-5 px-7 py-6">
                <u.icon className="w-6 h-6 shrink-0" style={{ color: u.color }} aria-hidden="true" />
                <p className="text-lg text-foreground">{u.text}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}

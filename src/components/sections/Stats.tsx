"use client"

import CountUp from "@/components/reactbits/CountUp"
import StarBorder from "@/components/reactbits/StarBorder"

const STATS: { to: number; suffix: string; label: string; separator?: string }[] = [
  { to: 1.2, suffix: "M+", label: "Comments analyzed" },
  { to: 38, suffix: "", label: "Languages understood" },
  { to: 9, suffix: " min", label: "From link to report" },
]

export function Stats() {
  return (
    <section className="relative bg-background pb-28 sm:pb-36 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {STATS.map((s) => (
          <StarBorder key={s.label} as="div" color="#2b7de0" speed="6s" className="w-full">
            <div className="py-10 px-6">
              <div className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
                <CountUp to={s.to} duration={2} separator={s.separator ?? ""} />
                {s.suffix}
              </div>
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-foreground/50 mt-3">{s.label}</p>
            </div>
          </StarBorder>
        ))}
      </div>
    </section>
  )
}

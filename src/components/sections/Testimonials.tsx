"use client"

import { motion, useReducedMotion } from "motion/react"
import SplitText from "@/components/reactbits/SplitText"
import { Card, CardContent } from "@/components/ui/card"

const TESTIMONIALS = [
  {
    quote:
      "We stopped guessing why a launch video underperformed. The themes report told us in one page what three meetings couldn't.",
    name: "M. K.",
    role: "Social insights lead, beta user",
  },
  {
    quote:
      "I pulled six exact quotes into a client deck the morning after their campaign dropped. That used to take me a full day of scrolling.",
    name: "J. R.",
    role: "Agency strategist, beta user",
  },
  {
    quote:
      "It caught the sarcasm. Every other tool we tried counted 'yeah, sure, great job' as positive.",
    name: "A. T.",
    role: "Community manager, beta user",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
}

export function Testimonials() {
  const reduce = useReducedMotion()

  return (
    <section className="relative bg-background pb-28 sm:pb-36 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.35em] uppercase text-foreground/40 text-center mb-4">
          From the beta
        </p>
        <SplitText
          text="People who read comments for a living."
          tag="h2"
          className="font-display text-5xl sm:text-6xl md:text-7xl font-normal text-foreground tracking-[-0.01em] mb-16 w-full"
          splitType="words"
          delay={70}
          duration={0.9}
        />
        <motion.div
          className="grid sm:grid-cols-3 gap-6"
          variants={container}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={item}>
              <Card className="h-full rounded-3xl border-foreground/8 shadow-sm">
                <CardContent className="p-8 flex flex-col h-full">
                  <p className="font-display text-xl leading-snug text-foreground mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-auto flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-brand/10 text-brand flex items-center justify-center font-mono text-xs">
                      {t.name.replace(/[^A-Z]/g, "")}
                    </span>
                    <span className="text-sm text-foreground/50">{t.role}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

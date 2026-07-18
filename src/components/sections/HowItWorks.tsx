"use client"

import { motion, useReducedMotion } from "motion/react"
import { Link2, MessagesSquare, FileCheck2, Play, ThumbsUp } from "lucide-react"
import SplitText from "@/components/reactbits/SplitText"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { BRAND } from "@/lib/brand"

const STEPS = [
  {
    n: "01",
    icon: Link2,
    title: "Drop in a YouTube link",
    body: "Any video works — your launch, a sponsored creator, a competitor's upload. No account connection, no setup.",
  },
  {
    n: "02",
    icon: MessagesSquare,
    title: "Every comment, actually read",
    body: "Thousands of comments analyzed in minutes. Sentiment, sarcasm, in-jokes and all — replies included.",
  },
  {
    n: "03",
    icon: FileCheck2,
    title: "Answers, not exports",
    body: "Clear themes, exact quotes, and the questions your audience keeps asking. Ready to drop straight into a report.",
  },
]

const SENTIMENT = [
  { label: "Positive", pct: 71, color: "#4d9e77" },
  { label: "Neutral", pct: 18, color: "#94a3b8" },
  { label: "Negative", pct: 11, color: "#c96a5a" },
]

const THEMES = [
  { label: "Price concerns", count: 214 },
  { label: "Feature requests", count: 168 },
  { label: "Comparisons to v1", count: 92 },
  { label: "Shipping questions", count: 57 },
]

const QUOTES = [
  {
    text: "Honestly didn't expect much but the demo at 2:14 sold me. Take my money.",
    likes: 482,
    sentiment: "Positive",
  },
  {
    text: "Love it, but is there a student discount? Half my class wants this.",
    likes: 156,
    sentiment: "Question",
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

export function HowItWorks() {
  const reduce = useReducedMotion()

  return (
    <section id="how" className="relative bg-background py-28 sm:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.35em] uppercase text-foreground/40 text-center mb-4">
          How it works
        </p>
        <SplitText
          text="From link to insight in three steps."
          tag="h2"
          className="font-display text-5xl sm:text-6xl md:text-7xl font-normal text-foreground tracking-[-0.01em] mb-16 w-full"
          splitType="words"
          delay={80}
          duration={0.9}
        />

        <motion.div
          className="grid sm:grid-cols-3 gap-6 mb-20"
          variants={container}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {STEPS.map((s) => (
            <motion.div key={s.n} variants={item}>
              <Card className="h-full rounded-3xl border-foreground/8 shadow-sm">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs tracking-[0.25em] text-brand">{s.n}</span>
                    <s.icon className="w-5 h-5 text-brand" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{s.body}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Example analysis of a single video */}
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="rounded-3xl border-foreground/8 shadow-xl shadow-brand/5 overflow-hidden py-0 gap-0">
            <div className="px-6 sm:px-10 pt-8 pb-4 flex items-center justify-between flex-wrap gap-2">
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-foreground/40">
                Example · one video, fully read
              </p>
              <Badge className="h-auto rounded-full bg-brand/10 text-brand font-mono text-xs px-3 py-1">
                12,847 comments analyzed
              </Badge>
            </div>

            <div className="grid lg:grid-cols-[2fr_3fr] gap-8 p-6 sm:p-10 pt-4">
              {/* The video being analyzed */}
              <motion.div variants={item}>
                <div className="rounded-2xl overflow-hidden border border-foreground/10">
                  <div className="relative aspect-video bg-gradient-to-br from-[#7db8ec] via-[#2b7de0] to-[#0e2233] flex items-center justify-center">
                    <span className="absolute inset-0 bg-black/10" />
                    <span className="relative w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <Play
                        className="w-7 h-7 text-foreground translate-x-0.5"
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="absolute bottom-3 right-3 font-mono text-xs bg-black/70 text-white px-2 py-0.5 rounded">
                      8:24
                    </span>
                  </div>
                  <div className="p-4 bg-card">
                    <p className="font-heading font-semibold text-foreground leading-snug">
                      Spring launch — everything new, explained
                    </p>
                    <p className="text-sm text-foreground/50 mt-1">Your channel · 1.4M views · 2 days ago</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/50 mt-4 leading-relaxed">
                  Works the same on videos you don&apos;t own — a competitor&apos;s launch, a creator you sponsored, a
                  review that&apos;s blowing up. If it has a comment section, {BRAND} can read it.
                </p>
              </motion.div>

              {/* What comes back */}
              <div className="flex flex-col gap-6">
                {/* Sentiment */}
                <motion.div variants={item}>
                  <p className="font-heading text-sm font-semibold text-foreground mb-3">Sentiment</p>
                  <div className="flex h-3 rounded-full overflow-hidden bg-foreground/5">
                    {SENTIMENT.map((s) => (
                      <motion.div
                        key={s.label}
                        style={{ width: `${s.pct}%`, backgroundColor: s.color, transformOrigin: "left" }}
                        initial={reduce ? false : { scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                      />
                    ))}
                  </div>
                  <div className="flex gap-5 mt-2 flex-wrap">
                    {SENTIMENT.map((s) => (
                      <span key={s.label} className="text-xs text-foreground/60 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: s.color }} />
                        {s.label} {s.pct}%
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Themes */}
                <motion.div variants={item}>
                  <p className="font-heading text-sm font-semibold text-foreground mb-3">Top themes</p>
                  <div className="flex flex-wrap gap-2">
                    {THEMES.map((t) => (
                      <Badge
                        key={t.label}
                        variant="outline"
                        className="h-auto rounded-full bg-brand/5 border-brand/15 px-3 py-1.5 text-sm font-normal text-foreground/80"
                      >
                        {t.label} <span className="font-mono text-xs text-brand ml-1">{t.count}</span>
                      </Badge>
                    ))}
                  </div>
                </motion.div>

                {/* Quotes */}
                <motion.div variants={item}>
                  <p className="font-heading text-sm font-semibold text-foreground mb-3">Quotes worth keeping</p>
                  <div className="flex flex-col gap-3">
                    {QUOTES.map((q) => (
                      <blockquote
                        key={q.text}
                        className="rounded-xl border border-foreground/10 bg-background px-4 py-3 text-sm text-foreground/75 leading-relaxed"
                      >
                        &ldquo;{q.text}&rdquo;
                        <span className="flex items-center gap-3 mt-2 text-xs text-foreground/45">
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="w-3 h-3" aria-hidden="true" /> {q.likes}
                          </span>
                          <span className="font-mono uppercase tracking-wider">{q.sentiment}</span>
                        </span>
                      </blockquote>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>

        <p className="font-mono text-xs tracking-[0.2em] uppercase text-foreground/40 text-center mt-10">
          YouTube today · more platforms on the roadmap
        </p>
      </div>
    </section>
  )
}

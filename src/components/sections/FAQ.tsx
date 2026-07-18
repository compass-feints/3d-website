"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { BRAND } from "@/lib/brand"

const EASE = [0.22, 1, 0.36, 1] as const

const FAQS = [
  {
    q: `What does ${BRAND} actually do?`,
    a: "Paste a YouTube link and we read the entire comment section — replies included. You get sentiment, the themes people keep bringing up, the questions they keep asking, and the exact quotes that back it all up.",
  },
  {
    q: "Do I need to connect my YouTube account?",
    a: "No. Any public video works — just paste the link. There's nothing to install, no channel access to grant, and no setup beyond signing in.",
  },
  {
    q: "Does it work on videos I don't own?",
    a: "Yes. A competitor's launch, a creator you sponsored, a review that's blowing up — if it has a public comment section, we can read it and report back.",
  },
  {
    q: "How many comments can it handle?",
    a: "Tens of thousands per video, replies included. Large sections take a few minutes; you'll get the full report the moment it's done.",
  },
  {
    q: "Which platforms are supported?",
    a: "YouTube today. Instagram, TikTok, Reddit, X and the rest of the roadmap are on the way — one report, wherever your audience talks.",
  },
  {
    q: "How do I get access?",
    a: `${BRAND} is invite-only while we're in early access. Join the waitlist and we'll set you up as soon as a spot opens.`,
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export function FAQ() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-background px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-center font-mono text-xs uppercase tracking-[0.35em] text-foreground/40">
          FAQ
        </p>
        <h2 className="mb-14 text-center font-display text-5xl sm:text-6xl font-normal tracking-[-0.01em] text-foreground text-balance">
          Questions, answered.
        </h2>

        <motion.div
          className="flex flex-col gap-3"
          variants={container}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={faq.q}
                variants={item}
                className="overflow-hidden rounded-2xl border border-foreground/8 bg-card shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-heading text-base sm:text-lg font-semibold text-foreground">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={reduce ? { duration: 0 } : { duration: 0.3, ease: EASE }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-background text-foreground/60"
                  >
                    <Plus className="size-4" aria-hidden="true" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 leading-relaxed text-foreground/60">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

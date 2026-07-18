"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { Nav } from "@/components/Nav"
import { ScrollProgress } from "@/components/ScrollProgress"
import { Footer } from "@/components/sections/Footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BRAND } from "@/lib/brand"
import { cn } from "@/lib/utils"

const EASE = [0.22, 1, 0.36, 1] as const

type Billing = "monthly" | "annual"

const TIERS = [
  {
    name: "Starter",
    tagline: "Kick the tires on your own videos.",
    price: { monthly: 0, annual: 0 },
    cta: "Join the waitlist",
    popular: false,
    features: [
      "5 videos a month",
      "Up to 1,000 comments per video",
      "Sentiment & top themes",
      "7-day report history",
    ],
  },
  {
    name: "Pro",
    tagline: "For creators and marketers who live in the comments.",
    price: { monthly: 29, annual: 24 },
    cta: "Join the waitlist",
    popular: true,
    features: [
      "Unlimited videos",
      "Up to 50,000 comments per video",
      "Quotes with receipts & timestamps",
      "CSV, Notion & slide-ready exports",
      "Competitor video tracking",
      "Priority processing",
    ],
  },
  {
    name: "Team",
    tagline: "One workspace for the whole content org.",
    price: { monthly: 79, annual: 66 },
    cta: "Join the waitlist",
    popular: false,
    features: [
      "Everything in Pro",
      "5 seats included",
      "Shared workspaces & saved reports",
      "API access",
      "SSO & member roles",
      "Dedicated support",
    ],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}

export default function PricingPage() {
  const reduce = useReducedMotion()
  const [billing, setBilling] = useState<Billing>("annual")

  return (
    <main className="bg-background">
      <ScrollProgress />
      <Nav />

      <section className="relative overflow-hidden px-6 pt-40 pb-24 sm:pb-32">
        {/* Faint grid-line backdrop, faded toward the edges (matches Connect) */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(0.27 0.02 74 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.27 0.02 74 / 0.05) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(120% 100% at 50% 0%, #000 40%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(120% 100% at 50% 0%, #000 40%, transparent 90%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-12 text-center"
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-foreground/40">
              Pricing
            </p>
            <h1 className="mb-6 font-display text-5xl sm:text-6xl md:text-7xl font-normal tracking-[-0.01em] text-foreground text-balance">
              Every comment. One simple plan.
            </h1>
            <p className="mx-auto max-w-xl text-lg text-foreground/60 leading-relaxed">
              {`Start free on your own uploads and grow into the whole comment ecosystem. Early access is invite-only — your price locks in the day you're accepted.`}
            </p>
          </motion.div>

          {/* Billing toggle */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
            className="mb-14 flex items-center justify-center"
          >
            <div className="relative flex items-center gap-1 rounded-full border border-foreground/10 bg-card p-1 shadow-sm">
              {(["monthly", "annual"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setBilling(option)}
                  className={cn(
                    "relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200",
                    billing === option ? "text-primary-foreground" : "text-foreground/60 hover:text-foreground",
                  )}
                >
                  {billing === option && (
                    <motion.span
                      layoutId="billing-pill"
                      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 34 }}
                      className="absolute inset-0 rounded-full bg-primary shadow-md shadow-foreground/15"
                    />
                  )}
                  <span className="relative capitalize">{option}</span>
                  {option === "annual" && (
                    <span className="relative ml-2 font-mono text-[10px] uppercase tracking-wider text-brand-foreground/90 max-sm:hidden">
                      <Badge className="h-auto rounded-full bg-brand/90 px-2 py-0.5 text-[10px]">2 months free</Badge>
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tier cards */}
          <motion.div
            className="grid gap-6 lg:grid-cols-3 lg:items-stretch"
            variants={container}
            initial={reduce ? false : "hidden"}
            animate="show"
          >
            {TIERS.map((tier) => (
              <motion.div
                key={tier.name}
                variants={card}
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ duration: 0.3, ease: EASE }}
                className={cn(
                  "relative flex flex-col rounded-3xl border bg-card p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-foreground/10",
                  tier.popular
                    ? "border-brand/40 shadow-xl shadow-brand/10 ring-1 ring-brand/25 lg:-my-3 lg:py-11"
                    : "border-foreground/8",
                )}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 h-auto -translate-x-1/2 rounded-full bg-brand px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-brand-foreground shadow-md">
                    Most popular
                  </Badge>
                )}

                <h2 className="font-heading text-xl font-bold text-foreground">{tier.name}</h2>
                <p className="mt-1.5 min-h-10 text-sm leading-relaxed text-foreground/55">{tier.tagline}</p>

                <div className="mt-6 flex items-baseline gap-1.5 overflow-hidden">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={`${tier.name}-${billing}`}
                      initial={reduce ? false : { y: 18, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={reduce ? undefined : { y: -18, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="font-display text-5xl tracking-tight text-foreground"
                    >
                      ${tier.price[billing]}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-sm text-foreground/50">
                    {tier.price.monthly === 0 ? "forever" : "/ mo"}
                  </span>
                </div>
                <p className="mt-1 h-4 font-mono text-[11px] uppercase tracking-wider text-foreground/40">
                  {tier.price.monthly > 0 && billing === "annual" ? "billed annually" : " "}
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-foreground/75">
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          tier.popular ? "bg-brand/15 text-brand" : "bg-foreground/8 text-foreground/60",
                        )}
                      >
                        <Check className="size-3" aria-hidden="true" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-1 items-end">
                  <Button
                    size="lg"
                    variant={tier.popular ? "default" : "outline"}
                    className={cn(
                      "group h-12 w-full rounded-full text-base",
                      tier.popular
                        ? "shadow-lg shadow-foreground/20"
                        : "border-foreground/15 bg-background/60",
                    )}
                    render={<Link href="/#waitlist" />}
                  >
                    {tier.cta}
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footnote */}
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 text-center font-mono text-xs uppercase tracking-[0.2em] text-foreground/40"
          >
            {`${BRAND} is in invite-only early access · no card required to join the waitlist`}
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

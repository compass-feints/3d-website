"use client"

import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { SectionTag } from "@/components/SectionTag"
import { Button } from "@/components/ui/button"

// Staggered tile grid of the platforms Wedgio reads, shadcn-blocks style:
// copy + CTA on the left, offset rows of logo tiles on the right.
const ROWS: { name: string; logo: string }[][] = [
  [
    { name: "YouTube", logo: "/logos/youtube.svg" },
    { name: "Instagram", logo: "/logos/instagram.svg" },
    { name: "TikTok", logo: "/logos/tiktok.svg" },
    { name: "Reddit", logo: "/logos/reddit.svg" },
    { name: "X / Twitter", logo: "/logos/x.svg" },
  ],
  [
    { name: "Facebook", logo: "/logos/facebook.svg" },
    { name: "LinkedIn", logo: "/logos/linkedin.svg" },
    { name: "Threads", logo: "/logos/threads.svg" },
    { name: "Bluesky", logo: "/logos/bluesky.svg" },
    { name: "Discord", logo: "/logos/discord.svg" },
  ],
  [
    { name: "Twitch", logo: "/logos/twitch.svg" },
    { name: "Snapchat", logo: "/logos/snapchat.svg" },
    { name: "Pinterest", logo: "/logos/pinterest.svg" },
    { name: "Telegram", logo: "/logos/telegram.svg" },
    { name: "Mastodon", logo: "/logos/mastodon.svg" },
  ],
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const tile = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
}

export function Connect() {
  const reduce = useReducedMotion()

  return (
    <section id="connect" className="relative overflow-hidden bg-background px-6 py-24 sm:py-32">
      {/* Faint grid-line backdrop, faded toward the edges */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.27 0.02 74 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.27 0.02 74 / 0.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(120% 100% at 50% 50%, #000 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(120% 100% at 50% 50%, #000 40%, transparent 90%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionTag index="01" label="Integrations" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1.4fr]">
        {/* Left — copy + CTA */}
        <div className="text-center lg:text-left">
          <h2 className="font-display text-5xl sm:text-6xl font-normal tracking-[-0.01em] text-foreground text-balance mb-6">
            Comments that connect your workflow.
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed max-w-md mx-auto lg:mx-0 mb-10">
            One report on what your audience really thinks — ready for your
            deck, your standup, or your next brief. Starting with YouTube,
            headed everywhere they talk.
          </p>
          <Button
            size="lg"
            className="group h-13 rounded-md px-7 font-mono text-sm uppercase tracking-[0.12em] shadow-lg shadow-foreground/20"
            render={<a href="#waitlist" />}
          >
            Join the waitlist
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Button>
        </div>

        {/* Right — staggered logo tiles */}
        <motion.div
          className="flex flex-col gap-3 sm:gap-4"
          variants={container}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {ROWS.map((row, i) => (
            <div
              key={i}
              className={`flex justify-center gap-3 sm:gap-4 ${
                i % 2 === 1 ? "translate-x-6 sm:translate-x-10 lg:translate-x-14" : ""
              }`}
            >
              {row.map((p) => (
                <motion.div
                  key={p.name}
                  variants={tile}
                  title={p.name}
                  className="flex h-16 w-16 items-center justify-center rounded-md border border-foreground/8 bg-card shadow-md shadow-foreground/5 transition-transform duration-200 hover:-translate-y-1 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="h-7 w-7 object-contain sm:h-8 sm:w-8 lg:h-10 lg:w-10"
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

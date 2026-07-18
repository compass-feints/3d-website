"use client"

import { motion, useReducedMotion } from "motion/react"

// Comment sections Wedgio reads today and next.
const PLATFORMS = [
  { name: "YouTube", logo: "/logos/youtube.svg" },
  { name: "Instagram", logo: "/logos/instagram.svg" },
  { name: "TikTok", logo: "/logos/tiktok.svg" },
  { name: "Reddit", logo: "/logos/reddit.svg" },
  { name: "X / Twitter", logo: "/logos/x.svg" },
  { name: "Facebook", logo: "/logos/facebook.svg" },
  { name: "LinkedIn", logo: "/logos/linkedin.svg" },
  { name: "Threads", logo: "/logos/threads.svg" },
  { name: "Bluesky", logo: "/logos/bluesky.svg" },
  { name: "Discord", logo: "/logos/discord.svg" },
  { name: "Twitch", logo: "/logos/twitch.svg" },
  { name: "Snapchat", logo: "/logos/snapchat.svg" },
  { name: "Pinterest", logo: "/logos/pinterest.svg" },
  { name: "Telegram", logo: "/logos/telegram.svg" },
  { name: "Mastodon", logo: "/logos/mastodon.svg" },
  { name: "Rumble", logo: "/logos/rumble.svg" },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
}

const chip = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
}

export function Platforms() {
  const reduce = useReducedMotion()

  return (
    <section id="platforms" className="bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl rounded-3xl border border-foreground/8 bg-card shadow-xl shadow-foreground/5">
        <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1.6fr]">
          {/* Left — copy */}
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-normal tracking-[-0.01em] text-foreground text-balance mb-4">
              Wherever the comments are.
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              YouTube today — every other comment section on the roadmap. One
              report, no matter where your audience talks.
            </p>
          </div>

          {/* Right — platform chips */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            variants={container}
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {PLATFORMS.map((p) => (
              <motion.span
                key={p.name}
                variants={chip}
                className="flex items-center gap-2.5 rounded-full border border-foreground/10 bg-background px-4 py-2 shadow-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.logo} alt="" aria-hidden="true" className="h-4.5 w-4.5 object-contain" />
                <span className="text-sm font-medium text-foreground whitespace-nowrap">{p.name}</span>
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import ScrollVelocity from "@/components/reactbits/ScrollVelocity"
import { BRAND } from "@/lib/brand"

export function Footer() {
  return (
    <footer className="relative bg-white overflow-hidden">
      <div className="py-16 opacity-[0.07] select-none" aria-hidden="true">
        <ScrollVelocity
          texts={[`${BRAND} — EVERY COMMENT COUNTS — `]}
          velocity={80}
          className="font-heading text-[9vw] font-bold text-foreground uppercase tracking-tight"
        />
      </div>
      <div className="border-t border-foreground/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-foreground/50">{BRAND}</span>
          <p className="text-sm text-foreground/40">
            Comment intelligence for YouTube · © 2026 {BRAND}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

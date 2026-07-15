"use client"

import ScrollVelocity from "@/components/reactbits/ScrollVelocity"
import { BRAND } from "@/lib/brand"

export function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden">
      <div className="py-16 opacity-[0.08] select-none" aria-hidden="true">
        <ScrollVelocity
          texts={[`${BRAND} — THE FUTURE IS LOADING — `]}
          velocity={80}
          className="text-[9vw] font-bold text-white uppercase tracking-tight"
        />
      </div>
      <div className="border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/50">{BRAND}</span>
          <p className="text-sm text-white/40">© 2026 {BRAND}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

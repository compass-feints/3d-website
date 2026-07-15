"use client"

import { useEffect, useState } from "react"
import { BRAND } from "@/lib/brand"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 backdrop-blur-md ${
        scrolled ? "bg-black/40 border-b border-white/10" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-[0.2em] uppercase text-white">
          {BRAND}
        </a>
        <a
          href="#waitlist"
          className="px-5 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/85 transition-colors"
        >
          Join the waitlist
        </a>
      </nav>
    </header>
  )
}

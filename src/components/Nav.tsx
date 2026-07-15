"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
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
        scrolled ? "bg-white/70 border-b border-foreground/10" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-heading font-bold tracking-tight text-foreground">
          {BRAND}
        </a>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="hidden sm:inline-flex rounded-full text-foreground/70"
            render={<a href="#how" />}
          >
            How it works
          </Button>
          <Button
            variant="ghost"
            className="hidden sm:inline-flex rounded-full text-foreground/70"
            render={<a href="#use-cases" />}
          >
            Use cases
          </Button>
          <Button className="rounded-full px-5" render={<a href="#waitlist" />}>
            Join the waitlist
          </Button>
        </div>
      </nav>
    </header>
  )
}

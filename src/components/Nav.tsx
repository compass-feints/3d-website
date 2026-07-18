"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BRAND } from "@/lib/brand"
import { cn } from "@/lib/utils"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4">
      <nav
        className={cn(
          "mx-auto flex w-full items-center justify-between",
          "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "mt-3 h-14 max-w-4xl rounded-full border border-foreground/10 bg-card/85 px-4 shadow-lg shadow-foreground/10 backdrop-blur-md"
            : "mt-0 h-[4.5rem] max-w-none rounded-none border border-transparent bg-transparent px-5",
        )}
      >
        <a
          href="/"
          className="flex items-center gap-2.5 font-display text-2xl tracking-tight text-foreground"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/wedgio-logo.png" alt="" aria-hidden="true" className="h-11 w-11 object-contain" />
          {BRAND}
        </a>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button
            variant="ghost"
            size="lg"
            className="hidden md:inline-flex rounded-full px-5 text-base text-foreground/75"
            render={<a href="#waitlist" />}
          >
            Request a demo
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="hidden sm:inline-flex rounded-full px-5 text-base text-foreground/75"
            render={<Link href="/login" />}
          >
            Log in
          </Button>
          <Button
            size="lg"
            className="rounded-full px-6 text-base shadow-md shadow-foreground/15"
            render={<a href="#waitlist" />}
          >
            Join the waitlist
          </Button>
        </div>
      </nav>
    </header>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react"
import { Button } from "@/components/ui/button"
import { BRAND } from "@/lib/brand"

// CSS can't interpolate `max-width: none`, so the pill is driven by motion
// between two concrete widths — everything eases together on one curve.
const EASE = [0.22, 1, 0.36, 1] as const

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40))

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={false}
        animate={{
          maxWidth: scrolled ? "56rem" : "110rem",
          height: scrolled ? "3.5rem" : "4.5rem",
          marginTop: scrolled ? "0.75rem" : "0rem",
          paddingLeft: scrolled ? "1rem" : "1.25rem",
          paddingRight: scrolled ? "1rem" : "1.25rem",
          backgroundColor: scrolled ? "rgba(246, 242, 230, 0.85)" : "rgba(246, 242, 230, 0)",
          borderColor: scrolled ? "rgba(62, 56, 44, 0.1)" : "rgba(62, 56, 44, 0)",
          boxShadow: scrolled
            ? "0 10px 30px -10px rgba(62, 56, 44, 0.25)"
            : "0 10px 30px -10px rgba(62, 56, 44, 0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={reduce ? { duration: 0 } : { duration: 0.55, ease: EASE }}
        className="flex w-full items-center justify-between rounded-md border"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-2xl tracking-tight text-foreground"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/wedgio-logo.png" alt="" aria-hidden="true" className="h-11 w-11 object-contain" />
          {BRAND}
        </Link>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button
            variant="ghost"
            size="lg"
            className="hidden md:inline-flex rounded-md px-4 font-mono text-[13px] uppercase tracking-[0.12em] text-foreground/75"
            render={<Link href="/pricing" />}
          >
            Pricing
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="hidden lg:inline-flex rounded-md px-4 font-mono text-[13px] uppercase tracking-[0.12em] text-foreground/75"
            render={<Link href="/#waitlist" />}
          >
            Request a demo
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="hidden sm:inline-flex rounded-md px-4 font-mono text-[13px] uppercase tracking-[0.12em] text-foreground/75"
            render={<Link href="/login" />}
          >
            Log in
          </Button>
          <Button
            size="lg"
            className="rounded-md px-5 font-mono text-[13px] uppercase tracking-[0.12em] shadow-md shadow-foreground/15"
            render={<Link href="/#waitlist" />}
          >
            Join the waitlist
          </Button>
        </div>
      </motion.nav>
    </header>
  )
}

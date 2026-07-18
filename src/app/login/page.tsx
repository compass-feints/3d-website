"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { ShaderBackground } from "@/components/ShaderBackground"
import { FloatingSocials } from "@/components/FloatingSocials"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BRAND } from "@/lib/brand"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [attempted, setAttempted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // No auth backend yet — early access is invite-only.
    setAttempted(true)
  }

  return (
    <ShaderBackground className="min-h-screen">
      <div className="absolute inset-0 bg-[#f2ecd6]/45 pointer-events-none" />
      <FloatingSocials />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md"
        >
          {/* Header — centered logo, title, sign-up line (Acme-style) */}
          <div className="mb-8 flex flex-col items-center text-center">
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/wedgio-logo.png" alt={BRAND} className="h-12 w-12 object-contain" />
            </Link>
            <h1 className="mt-4 font-display text-4xl font-normal tracking-[-0.01em] text-foreground">
              {`Welcome to ${BRAND}.`}
            </h1>
            <p className="mt-3 text-foreground/60">
              {"Don't have an account? "}
              <Link
                href="/#waitlist"
                className="text-foreground underline underline-offset-4 hover:text-brand transition-colors"
              >
                Request access
              </Link>
            </p>
          </div>

          {/* Frosted panel keeps the form legible over the drifting logos */}
          <div className="rounded-3xl border border-foreground/10 bg-card/75 p-8 shadow-xl shadow-foreground/10 backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="m@example.com"
                  className="h-12 rounded-xl border-foreground/15 bg-background/80 px-4 text-base placeholder:text-foreground/40"
                />
              </div>
              <Button type="submit" size="lg" className="h-12 rounded-xl text-base shadow-lg shadow-foreground/20">
                Login
              </Button>
            </form>

            <AnimatePresence>
              {attempted && (
                <motion.p
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="overflow-hidden rounded-xl border border-destructive/25 bg-destructive/8 px-4 py-3 text-sm leading-relaxed text-foreground/75"
                >
                  {`Hmm — we couldn't find an account for that email. ${BRAND} is invite-only while we're in early access. Request access above and we'll set you up.`}
                </motion.p>
              )}
            </AnimatePresence>

            <div className="my-6 flex items-center gap-4" aria-hidden="true">
              <span className="h-px flex-1 bg-foreground/10" />
              <span className="text-sm text-foreground/45">Or</span>
              <span className="h-px flex-1 bg-foreground/10" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="h-11 rounded-xl border-foreground/15 bg-background/80 text-sm font-medium"
                render={<a href="#" />}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/apple.svg" alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
                Continue with Apple
              </Button>
              <Button
                variant="outline"
                className="h-11 rounded-xl border-foreground/15 bg-background/80 text-sm font-medium"
                render={<a href="#" />}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/google.svg" alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
                Continue with Google
              </Button>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-sm text-center text-sm leading-relaxed text-foreground/50">
            {"By clicking continue, you agree to our "}
            <a href="#" className="underline underline-offset-4 hover:text-foreground transition-colors">
              Terms of Service
            </a>
            {" and "}
            <a href="#" className="underline underline-offset-4 hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            .
          </p>

          <p className="mt-6 text-center">
            <Link href="/" className="text-sm text-foreground/55 hover:text-foreground transition-colors">
              {`← Back to ${BRAND}`}
            </Link>
          </p>
        </motion.div>
      </div>
    </ShaderBackground>
  )
}

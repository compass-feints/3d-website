"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { ShaderBackground } from "@/components/ShaderBackground"
import { FloatingSocials } from "@/components/FloatingSocials"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BRAND } from "@/lib/brand"

const EASE = [0.22, 1, 0.36, 1] as const

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export default function LoginPage() {
  const reduce = useReducedMotion()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
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
          variants={stagger}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="w-full max-w-md"
        >
          {/* Header — centered logo, title, sign-up line (Acme-style) */}
          <motion.div variants={rise} className="mb-8 flex flex-col items-center text-center">
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
          </motion.div>

          {/* Frosted panel keeps the form legible over the drifting logos */}
          <motion.div
            variants={rise}
            className="rounded-lg border border-foreground/10 bg-card/75 p-8 shadow-xl shadow-foreground/10 backdrop-blur-lg"
          >
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
                  className="h-12 rounded-md border-foreground/15 bg-background/80 px-4 text-base placeholder:text-foreground/40"
                />
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-foreground">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-sm text-foreground/55 underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="h-12 rounded-md border-foreground/15 bg-background/80 px-4 pr-12 text-base placeholder:text-foreground/40"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-foreground/45 transition-colors hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="size-4.5" aria-hidden="true" />
                    ) : (
                      <Eye className="size-4.5" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>
              <Button type="submit" size="lg" className="h-12 rounded-md font-mono text-sm uppercase tracking-[0.12em] shadow-lg shadow-foreground/20">
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
                  className="overflow-hidden rounded-md border border-destructive/25 bg-destructive/8 px-4 py-3 text-sm leading-relaxed text-foreground/75"
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
                className="h-11 rounded-md border-foreground/15 bg-background/80 text-sm font-medium"
                render={<a href="#" />}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/apple.svg" alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
                Continue with Apple
              </Button>
              <Button
                variant="outline"
                className="h-11 rounded-md border-foreground/15 bg-background/80 text-sm font-medium"
                render={<a href="#" />}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/google.svg" alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
                Continue with Google
              </Button>
            </div>
          </motion.div>

          <motion.p
            variants={rise}
            className="mx-auto mt-6 max-w-sm text-center text-sm leading-relaxed text-foreground/50"
          >
            {"By clicking continue, you agree to our "}
            <a href="#" className="underline underline-offset-4 hover:text-foreground transition-colors">
              Terms of Service
            </a>
            {" and "}
            <a href="#" className="underline underline-offset-4 hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            .
          </motion.p>

          <motion.p variants={rise} className="mt-6 text-center">
            <Link href="/" className="text-sm text-foreground/55 hover:text-foreground transition-colors">
              {`← Back to ${BRAND}`}
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </ShaderBackground>
  )
}

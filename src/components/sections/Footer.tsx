"use client"

import { BRAND } from "@/lib/brand"

const COLUMNS: { heading: string; links: string[] }[] = [
  { heading: "Product", links: ["Overview", "How it works", "Pricing", "Roadmap", "Changelog"] },
  { heading: "Company", links: ["About", "Team", "Blog", "Careers", "Contact"] },
  { heading: "Support", links: ["Help center", "Documentation", "Status", "Community"] },
  { heading: "Resources", links: ["Guides", "Templates", "API", "Press kit"] },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-foreground/10 px-6 pt-16 pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5 font-display text-2xl tracking-tight text-foreground">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/wedgio-logo.png" alt="" aria-hidden="true" className="h-10 w-10 object-contain" />
              {BRAND}
            </a>
            <p className="mt-4 text-foreground/55 leading-relaxed max-w-xs">
              Every comment, turned into answers.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="font-heading text-sm font-semibold text-foreground mb-4">{col.heading}</p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-foreground/55 hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-6 sm:flex-row">
          <p className="text-sm text-foreground/45">© 2026 {BRAND}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-foreground/55 underline underline-offset-4 hover:text-foreground transition-colors">
              Terms and Conditions
            </a>
            <a href="#" className="text-sm text-foreground/55 underline underline-offset-4 hover:text-foreground transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

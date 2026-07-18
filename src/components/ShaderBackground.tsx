"use client"

import type React from "react"
import { MeshGradient } from "@paper-design/shaders-react"
import { useIsClient, usePrefersReducedMotion } from "@/lib/hooks"

interface ShaderBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function ShaderBackground({ children, className = "min-h-screen" }: ShaderBackgroundProps) {
  const mounted = useIsClient()
  const reducedMotion = usePrefersReducedMotion()

  return (
    <div className={`${className} w-full relative overflow-hidden bg-[#e7ddc0]`}>
      {/* SVG Filters */}
      <svg className="absolute inset-0 w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Background Shaders — second layer blends over the first for depth */}
      {mounted && (
        <>
          <MeshGradient
            className="absolute inset-0 w-full h-full"
            colors={["#f4efdb", "#c9d488", "#a8ba62", "#e8ebc9", "#bccb77"]}
            distortion={0.9}
            swirl={0.4}
            speed={reducedMotion ? 0 : 0.25}
          />
          <MeshGradient
            className="absolute inset-0 w-full h-full opacity-50"
            colors={["#f7f2e0", "#d2dc9a", "#eef0d6", "#f7f2e0"]}
            distortion={0.6}
            swirl={0.2}
            speed={reducedMotion ? 0 : 0.15}
          />
        </>
      )}

      {children}
    </div>
  )
}

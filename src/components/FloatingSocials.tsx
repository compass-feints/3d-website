"use client"

// Gaussian-blurred social logos drifting slowly behind the login card.
// Placed around the edges so the center stays clear; purely decorative.
type FloatingIcon = {
  logo: string
  top: string
  left: string
  size: number
  blur: number
  opacity: number
  anim: "drift-a" | "drift-b" | "drift-c"
  dur: number
  delay: number
}

const ICONS: FloatingIcon[] = [
  { logo: "youtube", top: "8%", left: "6%", size: 68, blur: 7, opacity: 0.32, anim: "drift-a", dur: 14, delay: 0 },
  { logo: "instagram", top: "12%", left: "86%", size: 58, blur: 9, opacity: 0.3, anim: "drift-b", dur: 17, delay: 1 },
  { logo: "tiktok", top: "76%", left: "8%", size: 52, blur: 8, opacity: 0.28, anim: "drift-c", dur: 15, delay: 2 },
  { logo: "reddit", top: "82%", left: "84%", size: 62, blur: 10, opacity: 0.3, anim: "drift-a", dur: 18, delay: 0.5 },
  { logo: "x", top: "42%", left: "4%", size: 44, blur: 10, opacity: 0.24, anim: "drift-b", dur: 16, delay: 3 },
  { logo: "facebook", top: "55%", left: "91%", size: 48, blur: 8, opacity: 0.3, anim: "drift-c", dur: 13, delay: 1.5 },
  { logo: "linkedin", top: "5%", left: "36%", size: 40, blur: 11, opacity: 0.22, anim: "drift-b", dur: 19, delay: 2.5 },
  { logo: "threads", top: "90%", left: "44%", size: 44, blur: 12, opacity: 0.22, anim: "drift-a", dur: 16, delay: 1 },
  { logo: "bluesky", top: "24%", left: "92%", size: 42, blur: 9, opacity: 0.28, anim: "drift-c", dur: 14, delay: 0 },
  { logo: "discord", top: "68%", left: "2%", size: 56, blur: 12, opacity: 0.26, anim: "drift-a", dur: 20, delay: 2 },
  { logo: "twitch", top: "4%", left: "68%", size: 46, blur: 10, opacity: 0.24, anim: "drift-c", dur: 15, delay: 3.5 },
  { logo: "snapchat", top: "87%", left: "66%", size: 46, blur: 9, opacity: 0.26, anim: "drift-b", dur: 17, delay: 0.5 },
  { logo: "pinterest", top: "22%", left: "3%", size: 40, blur: 12, opacity: 0.2, anim: "drift-c", dur: 18, delay: 1.5 },
  { logo: "telegram", top: "66%", left: "94%", size: 42, blur: 11, opacity: 0.22, anim: "drift-a", dur: 16, delay: 2.5 },
  { logo: "mastodon", top: "93%", left: "22%", size: 40, blur: 12, opacity: 0.2, anim: "drift-b", dur: 19, delay: 0 },
  /* Two big, deep-blurred ones for depth */
  { logo: "youtube", top: "58%", left: "74%", size: 120, blur: 26, opacity: 0.1, anim: "drift-b", dur: 24, delay: 0 },
  { logo: "tiktok", top: "18%", left: "16%", size: 110, blur: 24, opacity: 0.1, anim: "drift-c", dur: 26, delay: 3 },
]

export function FloatingSocials() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
      {ICONS.map((i, idx) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`${i.logo}-${idx}`}
          src={`/logos/${i.logo}.svg`}
          alt=""
          className="drift-icon absolute"
          style={{
            top: i.top,
            left: i.left,
            width: i.size,
            height: i.size,
            filter: `blur(${i.blur}px)`,
            opacity: i.opacity,
            animation: `${i.anim} ${i.dur}s ease-in-out ${i.delay}s infinite alternate`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  )
}

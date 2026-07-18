"use client"

// Detailed static snapshot of the Wedgio product — used as the hero's slanted
// product visual. Purely presentational (rendered behind pointer-events-none).
import {
  Activity,
  Download,
  HelpCircle,
  LayoutGrid,
  Play,
  Quote,
  Sparkles,
  Tag,
  ThumbsUp,
  TrendingUp,
  Users,
} from "lucide-react"

const NAV = [
  { icon: LayoutGrid, label: "Overview", active: true },
  { icon: Activity, label: "Sentiment" },
  { icon: Tag, label: "Themes" },
  { icon: Quote, label: "Quotes" },
  { icon: HelpCircle, label: "Questions" },
  { icon: Users, label: "Audience" },
]

const RECENT = [
  "Spring launch — everything new",
  "Creator collab · @mia.builds",
  "Competitor: Volt X review",
]

const THEMES = [
  { label: "Price concerns", count: 214, pct: 100 },
  { label: "Feature requests", count: 168, pct: 78 },
  { label: "Comparisons to v1", count: 92, pct: 43 },
  { label: "Shipping questions", count: 57, pct: 27 },
]

const QUOTES = [
  { text: "Honestly didn't expect much but the demo at 2:14 sold me. Take my money.", likes: 482, tag: "POSITIVE" },
  { text: "Love it, but is there a student discount? Half my class wants this.", likes: 156, tag: "QUESTION" },
]

const QUESTIONS = [
  { q: "Is there a student discount?", n: 48 },
  { q: "Does it work with the v1 mount?", n: 31 },
  { q: "When does EU shipping start?", n: 26 },
]

export function ProductPanel({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-[1180px] rounded-3xl border border-foreground/10 bg-card shadow-2xl shadow-foreground/20 overflow-hidden ${className}`}
    >
      {/* App chrome */}
      <div className="flex items-center justify-between border-b border-foreground/8 px-6 py-3">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/wedgio-logo.png" alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
          <span className="font-heading text-sm font-semibold text-foreground">Wedgio</span>
          <span className="rounded-sm border border-foreground/10 bg-background px-3 py-1 font-mono text-[11px] text-foreground/50">
            youtube.com/watch?v=sp2026-launch
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-sm bg-brand/10 px-3 py-1 font-mono text-[11px] text-brand">
            12,847 comments analyzed
          </span>
          <span className="text-[11px] text-foreground/40">Updated 2 min ago</span>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-44 shrink-0 border-r border-foreground/8 bg-background/50 p-4">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">Report</p>
          <nav className="flex flex-col gap-0.5">
            {NAV.map((item) => (
              <span
                key={item.label}
                className={
                  item.active
                    ? "flex items-center gap-2 rounded-lg bg-brand/12 px-2.5 py-1.5 text-[13px] font-medium text-foreground"
                    : "flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[13px] text-foreground/55"
                }
              >
                <item.icon className={item.active ? "h-3.5 w-3.5 text-brand" : "h-3.5 w-3.5"} aria-hidden="true" />
                {item.label}
              </span>
            ))}
          </nav>
          <p className="mt-5 mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">Recent</p>
          <div className="flex flex-col gap-1.5">
            {RECENT.map((r) => (
              <span key={r} className="truncate text-[12px] text-foreground/50">
                {r}
              </span>
            ))}
          </div>
        </aside>

        {/* Main */}
        <div className="flex flex-1 flex-col gap-4 p-5">
          {/* KPI row */}
          <div className="grid grid-cols-[1.25fr_1fr_1fr_1fr] gap-4">
            <div className="overflow-hidden rounded-xl border border-foreground/10">
              <div className="relative flex h-[72px] items-center justify-center bg-gradient-to-br from-[#c9d488] via-[#8fa64f] to-[#3f4a25]">
                <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/90 shadow">
                  <Play className="h-4 w-4 translate-x-px text-foreground" fill="currentColor" aria-hidden="true" />
                </span>
                <span className="absolute bottom-1.5 right-1.5 rounded bg-black/70 px-1.5 font-mono text-[10px] text-white">
                  8:24
                </span>
              </div>
              <div className="bg-card p-2.5">
                <p className="truncate text-[12px] font-medium text-foreground">
                  Spring launch — everything new, explained
                </p>
                <p className="text-[11px] text-foreground/45">1.4M views · 2 days ago</p>
              </div>
            </div>

            <div className="rounded-xl border border-foreground/10 bg-background/60 p-3.5">
              <p className="text-[11px] text-foreground/50">Positive sentiment</p>
              <p className="mt-1 font-heading text-2xl font-bold text-foreground">71%</p>
              <p className="mt-1 flex items-center gap-1 text-[11px] text-brand">
                <TrendingUp className="h-3 w-3" aria-hidden="true" /> +4.2% vs channel avg
              </p>
            </div>
            <div className="rounded-xl border border-foreground/10 bg-background/60 p-3.5">
              <p className="text-[11px] text-foreground/50">Comments read</p>
              <p className="mt-1 font-heading text-2xl font-bold text-foreground">12,847</p>
              <p className="mt-1 text-[11px] text-foreground/45">incl. 3,102 replies</p>
            </div>
            <div className="rounded-xl border border-foreground/10 bg-background/60 p-3.5">
              <p className="text-[11px] text-foreground/50">Questions found</p>
              <p className="mt-1 font-heading text-2xl font-bold text-foreground">312</p>
              <p className="mt-1 text-[11px] text-foreground/45">58 still need answers</p>
            </div>
          </div>

          {/* Sentiment over time */}
          <div className="rounded-xl border border-foreground/10 bg-background/60 p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="font-heading text-[13px] font-semibold text-foreground">Sentiment across the video</p>
              <div className="flex items-center gap-4 text-[11px] text-foreground/55">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-sm bg-brand" /> Positive
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-sm bg-[#c07a4e]" /> Negative
                </span>
              </div>
            </div>
            <svg viewBox="0 0 560 110" className="h-auto w-full text-brand" aria-hidden="true">
              <g stroke="currentColor" strokeOpacity="0.08">
                <line x1="0" y1="28" x2="560" y2="28" />
                <line x1="0" y1="56" x2="560" y2="56" />
                <line x1="0" y1="84" x2="560" y2="84" />
              </g>
              <path
                d="M0,62 C30,58 50,66 78,60 S130,42 152,38 S210,52 240,48 S300,30 330,27 S400,36 430,31 S520,18 560,15 L560,110 L0,110 Z"
                fill="currentColor"
                fillOpacity="0.12"
              />
              <path
                d="M0,62 C30,58 50,66 78,60 S130,42 152,38 S210,52 240,48 S300,30 330,27 S400,36 430,31 S520,18 560,15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M0,92 C40,90 70,96 100,93 S180,86 210,88 S290,94 330,92 S430,84 470,86 S530,90 560,89"
                fill="none"
                stroke="#c07a4e"
                strokeWidth="1.5"
                strokeOpacity="0.8"
              />
              <line x1="152" y1="38" x2="152" y2="110" stroke="currentColor" strokeOpacity="0.25" strokeDasharray="3 3" />
              <circle cx="152" cy="38" r="3.5" fill="currentColor" />
              <text x="160" y="34" fontSize="10" fill="oklch(0.27 0.02 74 / 0.6)">
                2:14 · demo moment, +482 likes
              </text>
            </svg>
            <div className="mt-1 flex justify-between font-mono text-[10px] text-foreground/40">
              <span>0:00</span>
              <span>2:00</span>
              <span>4:00</span>
              <span>6:00</span>
              <span>8:24</span>
            </div>
          </div>

          {/* Themes / Quotes / Questions */}
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-xl border border-foreground/10 bg-background/60 p-4">
              <p className="mb-3 font-heading text-[13px] font-semibold text-foreground">Top themes</p>
              <div className="flex flex-col gap-2.5">
                {THEMES.map((t) => (
                  <div key={t.label}>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-[12px] text-foreground/75">{t.label}</span>
                      <span className="font-mono text-[11px] text-brand">{t.count}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-sm bg-foreground/8">
                      <div className="h-full rounded-sm bg-brand/70" style={{ width: `${t.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-foreground/10 bg-background/60 p-4">
              <p className="mb-3 font-heading text-[13px] font-semibold text-foreground">Quotes worth keeping</p>
              <div className="flex flex-col gap-2.5">
                {QUOTES.map((q) => (
                  <blockquote
                    key={q.text}
                    className="rounded-lg border border-foreground/10 bg-card px-3 py-2.5 text-[11.5px] leading-relaxed text-foreground/75"
                  >
                    &ldquo;{q.text}&rdquo;
                    <span className="mt-1.5 flex items-center gap-3 text-[10px] text-foreground/45">
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-2.5 w-2.5" aria-hidden="true" /> {q.likes}
                      </span>
                      <span className="font-mono tracking-wider">{q.tag}</span>
                    </span>
                  </blockquote>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-foreground/10 bg-background/60 p-4">
              <p className="mb-3 font-heading text-[13px] font-semibold text-foreground">Questions to answer</p>
              <div className="flex flex-col gap-2.5">
                {QUESTIONS.map((item) => (
                  <div key={item.q} className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 text-[12px] text-foreground/75">
                      <HelpCircle className="h-3 w-3 shrink-0 text-brand" aria-hidden="true" />
                      {item.q}
                    </span>
                    <span className="rounded-sm bg-brand/10 px-1.5 py-0.5 font-mono text-[10px] text-brand">
                      ×{item.n}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[11px] font-medium text-brand">View all 312 →</p>
            </div>
          </div>

          {/* AI summary */}
          <div className="flex items-center justify-between gap-4 rounded-xl border border-brand/25 bg-brand/8 p-4">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <p className="text-[12.5px] leading-relaxed text-foreground/75">
                Viewers love the 2:14 demo — sentiment jumps 18% right after. Main friction: price and EU
                shipping. Best quote to reuse: &ldquo;Take my money.&rdquo;
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-sm bg-primary px-3 py-1.5 text-[11px] font-medium text-primary-foreground">
                <Download className="h-3 w-3" aria-hidden="true" /> Export PDF
              </span>
              <span className="rounded-sm border border-foreground/15 bg-background px-3 py-1.5 text-[11px] font-medium text-foreground/70">
                Copy summary
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

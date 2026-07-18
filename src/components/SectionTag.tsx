"use client"

// Utilitarian section marker: [ 01 ] ————————— LABEL
export function SectionTag({ index, label }: { index: string; label: string }) {
  return (
    <div
      className="mb-10 flex w-full items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/45"
      aria-hidden="true"
    >
      <span className="shrink-0">[ {index} ]</span>
      <span className="h-px flex-1 bg-foreground/15" />
      <span className="shrink-0">{label}</span>
    </div>
  )
}

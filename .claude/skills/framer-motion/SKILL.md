---
name: framer-motion
description: Use when implementing or reviewing UI animations in this project with Framer Motion (motion.dev) - animated components, enter/exit transitions, gestures, scroll-linked effects, layout animations, or when animation code feels janky/inconsistent. Covers the motion component API, variants, AnimatePresence, and performance rules that matter alongside a 3D/WebGL canvas.
---

# Framer Motion

Guidance for adding and reviewing animations built with Framer Motion (package: `framer-motion` on npm, now also published as `motion`) in this project's React UI layer. This is for DOM/UI animation — canvas/3D-object animation (e.g. react-three-fiber meshes) should use `useFrame`/GSAP/spring libraries suited to WebGL, not Framer Motion.

## Setup

```bash
npm install framer-motion
```

Import from `framer-motion`:

```tsx
import { motion, AnimatePresence } from "framer-motion";
```

## Core mental model

1. Any HTML/SVG tag has a `motion.*` version (`motion.div`, `motion.svg`, `motion.button`, ...) that accepts animation props on top of normal props.
2. Four animation props matter most: `initial`, `animate`, `exit`, `transition`. `exit` only fires inside `AnimatePresence`.
3. Prefer **variants** (named animation states) over inline objects once more than one element needs to coordinate, or once a component has more than a trivial animation — they keep JSX readable and enable orchestration (`staggerChildren`, `delayChildren`).
4. Animate transform/opacity properties (`x`, `y`, `scale`, `rotate`, `opacity`) wherever possible — these run off the main thread. Animating `width`, `height`, `top`, `left`, box-shadow, etc. forces layout/paint and will visibly compete with a 3D canvas for frame budget.

## Basic animation

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
/>
```

## Variants (preferred for anything non-trivial)

```tsx
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

<motion.ul variants={container} initial="hidden" animate="show">
  {items.map((it) => (
    <motion.li key={it.id} variants={item}>{it.label}</motion.li>
  ))}
</motion.ul>
```

Child `motion` elements without their own `initial`/`animate` automatically inherit the parent's variant state — don't repeat `initial="hidden" animate="show"` on every child; just give children a `variants` prop.

## Exit animations — AnimatePresence

`exit` props are inert unless the element is a **direct child** of `AnimatePresence`, and the element must actually unmount (conditional render) for exit to trigger:

```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      key="panel"                 // required when animating list/conditional children
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  )}
</AnimatePresence>
```

Common mistakes:
- Missing `key` on the animated child when it's conditional/list-rendered — React can't track identity across renders and exit won't fire.
- Wrapping in an intermediate non-forwarding component that unmounts the child immediately instead of letting `AnimatePresence` control the unmount timing.
- Using `mode="wait"` when one element should fully exit before the next enters (route/tab transitions); omit it when overlapping enter/exit is fine (default `mode="sync"`).

## Gestures

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  whileFocus={{ outline: "2px solid var(--focus)" }}
/>
```

Respect `prefers-reduced-motion`: wrap hover/tap-only decorative motion behind `useReducedMotion()` and skip or shrink it for users who opt out.

## Scroll-linked animation

- Simple "animate once when scrolled into view": `whileInView={{...}} viewport={{ once: true, amount: 0.3 }}`.
- Continuous scroll-driven values (parallax, progress bars): `useScroll()` + `useTransform()`, not `whileInView`.

```tsx
const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
```

## Layout animations

`layout` / `layoutId` auto-animate size/position changes (reordering lists, shared-element transitions between views) without manually computing FLIP transforms:

```tsx
<motion.div layout layoutId="card-1" />
```

Use `layoutId` shared across two different elements to get a "morph from A to B" transition (e.g. a card expanding into a detail view). Keep `layout` off elements that also contain a WebGL canvas — the canvas won't resize cleanly under a transform-based FLIP animation; animate a wrapper instead.

## Performance notes specific to this project

- This is a 3D/WebGL-heavy site — the render loop already competes for frame budget. Keep Framer Motion animations on GPU-cheap properties (transform/opacity), avoid `layout` animations wrapping the canvas element, and avoid animating many elements simultaneously with non-transform properties.
- Prefer `transition={{ type: "spring", ... }}` for interactive/gesture-driven motion (feels responsive to interruption) and `type: "tween"` with explicit `duration`/`ease` for deliberate UI choreography (page transitions, staggers).
- Use `LazyMotion` + `domAnimation` feature bundle instead of importing the full `motion` component if bundle size matters for this project's initial load (it does, alongside 3D assets):

```tsx
import { LazyMotion, domAnimation, m } from "framer-motion";
<LazyMotion features={domAnimation}>
  <m.div animate={{ opacity: 1 }} />
</LazyMotion>
```

## Checklist when reviewing animation code

- [ ] Animating transform/opacity, not layout-triggering properties, unless `layout` prop is explicitly used
- [ ] `exit` animations wrapped in `AnimatePresence` with a stable `key`
- [ ] Variants used instead of duplicated inline animation objects across siblings
- [ ] Reduced-motion respected for purely decorative motion
- [ ] No `layout`/`layoutId` animation wrapping a WebGL canvas

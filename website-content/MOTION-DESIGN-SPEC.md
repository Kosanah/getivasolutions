# GETIVA — Motion Design Specification

**Brand:** GETIVA | **Tagline:** We Get It Done For You  
**Principle:** Motion is **subtle, corporate, and professional**. Dynamic and credible, never flashy or startup-like. Prefer ease-out, short durations (200–500ms), and low amplitude.

---

## 1. Hero Background Motion

### Placement
- **Where:** Full hero section (`.hero-enterprise`). Behind the overlay; content stays on top with higher z-index.

### Options (choose one)

| Option | Description | Style | Use when |
|--------|-------------|--------|----------|
| **A. Video loop** | Looping background video (muted, no sound). | Corporate team in office, or abstract tech/connection. Slow pan or static shot. 15–30 sec loop. | You have a high-quality, rights-cleared clip. |
| **B. Network connection animation** | Subtle SVG or CSS animation of nodes/lines (connections, dots). | Low opacity (5–15%), slow movement (8–12s cycle). Suggests “talent network” without distraction. | You want a custom, on-brand motion without video. |
| **C. Abstract gradient motion** | Animated gradient (hue or position shift). | Same navy/accent palette; position or opacity shift over 12–20s. Very subtle. | No video; want minimal implementation and file size. |

### Implementation notes
- **Video:** Use `<video autoplay muted loop playsinline>` as first child of hero; overlay on top. Format: MP4 (WebM fallback). Resolution: 1920×1080 or 1280×720. Keep file size under ~3MB for hero. **Remove class `hero-enterprise--motion`** from the hero when using video so the gradient animation does not run.
- **Network animation:** Use CSS keyframes (opacity, transform) or lightweight SVG animation. No heavy JS.
- **Gradient motion:** Implemented via CSS: class `hero-enterprise--motion` on the hero section triggers a slow `background-position` shift (18s loop). **Remove `hero-enterprise--motion`** if you set a custom hero image via `--hero-bg-url`, so only one motion type is active.

### What to avoid
- Fast motion, high contrast, or flashing.
- Sound on hero video.
- Motion that competes with headline or CTAs.

---

## 2. Section Motion Effects

### 2.1 Fade-in for content blocks

- **Where:** Section titles (`.section-title`), section intros (`.section-intro`), and body content blocks that appear on scroll.
- **Style:** Fade-in + slight upward move. Start: `opacity: 0`, `transform: translateY(16px)`. End: `opacity: 1`, `transform: translateY(0)`. Duration: 500–600ms. Easing: `ease-out`.
- **Trigger:** When the block enters the viewport (e.g. 10–15% visible). Use Intersection Observer; add class (e.g. `.in-view`) to trigger animation once.
- **Type:** CSS keyframes + JS for viewport detection. No continuous animation.

### 2.2 Slide-in service cards

- **Where:** `.service-card` in the Services grid.
- **Style:** Same as content fade-in: fade + translateY(20px). Stagger delay: 80–100ms per card (first card 0ms, second 100ms, etc.) so they appear in sequence.
- **Trigger:** When the services section enters view. One-time.
- **Type:** CSS animation with `animation-delay` set per card (e.g. `.service-card:nth-child(1)` 0s, nth-child(2) 0.1s, …).

### 2.3 Button hover effects

- **Where:** All `.btn` (primary, secondary, white).
- **Style:** Slight scale (e.g. 1.02) and smooth transition. Duration: 200ms. Easing: `ease-out`. Optional: very subtle box-shadow increase on primary buttons.
- **Type:** CSS only (`transform`, `transition`, `box-shadow`). No bounce or overshoot.

### 2.4 Animated icons (services)

- **Where:** `.service-icon` inside each `.service-card`.
- **Style:** On hover: gentle scale (1.05–1.08) and/or brief icon “draw” (stroke dashoffset) if SVG supports it. Default: scale + 200ms transition. Keep icon animation under 300ms.
- **Type:** CSS transition for scale; optional SVG stroke-dasharray/dashoffset for a simple “draw” effect. Fallback: scale only.

---

## 3. Animated Statistics Section

### Placement
- **Where:** Stats section (`.stats-section`), inside each `.stat-item` on the value (`.stat-value`).

### Behavior
- **Count-up:** When the stats section enters the viewport, numbers animate from 0 (or a small value) to the target (e.g. 10,000+; 5+). Duration: 1.2–1.8s. Easing: ease-out.
- **Non-numeric values:** For labels like “Enterprise” or “National,” use a simple fade-in (no count).
- **Style:** Same font/weight; only the numeric part animates. Suffix (e.g. “+”) stays fixed or appears with the final number.

### Implementation
- **Type:** JavaScript. Store target number in `data-count`, optional `data-suffix` (e.g. `+`). Use requestAnimationFrame or a small interval to increment; trigger via Intersection Observer when section is in view. Run once per page load.

### What to avoid
- Count-up that restarts on every scroll into view (trigger once).
- Very fast or bouncy easing.
- Animated decimals unless the stat is a percentage.

---

## 4. Process Visualization Animation

### Placement
- **Where:** Process section (`.process-section`), steps (`.process-step`) and connectors (`.process-connector`).

### Hiring workflow / timeline animation

- **Style:** Steps appear in order (1 → 2 → 3 → 4). Each step: fade-in + slight scale (0.98 → 1) or translateY(12px) → 0. Duration per step: 400ms. Stagger: 200–250ms between steps.
- **Connectors:** Horizontal (or vertical on mobile) line between steps. Animate as a “draw”: line grows from 0 to full width (e.g. `transform: scaleX(0)` → `scaleX(1)` or `width: 0` → 100%). Duration: 300–400ms. Start connector animation after the previous step is visible (or slightly before next step).
- **Trigger:** When process section enters viewport (e.g. 20% visible). Sequence runs once.

### Implementation
- **Type:** CSS keyframes for step opacity/transform and connector scaleX; JS adds `.in-view` (or step-specific classes) with staggered delay. Optional: one Intersection Observer for the section, then setTimeout or CSS animation-delay for each step/connector.

### What to avoid
- All steps appearing at once with no sequence.
- Connectors animating before steps (order: step 1 → connector → step 2 → …).
- Long or flashy transitions.

---

## 5. CTA Section Motion

### Placement
- **Where:** CTA banner (`.cta-banner`): background and buttons.

### 5.1 Background gradient movement

- **Style:** Very slow, subtle shift of a gradient (position or soft color pulse). Example: gradient position moves 5–10% over 15–20s, looped. Or a second layer with low-opacity gradient that shifts. Keeps section from feeling static without drawing attention.
- **Type:** CSS keyframes on background-position or a pseudo-element. No rapid changes.

### 5.2 Button hover micro-interactions

- **Where:** `.cta-banner .btn` (Hire Talent, Find Jobs).
- **Style:** Same as global buttons: slight scale (1.02), 200ms ease-out. Optional: subtle border or shadow change for the outline button. No “pop” or bounce.
- **Type:** CSS only.

### What to avoid
- Strong or fast gradient movement.
- Multiple animated elements in the CTA at once.

---

## Summary: Where to Place Each Motion

| Element | Location | Style | Type |
|---------|----------|--------|------|
| Hero background | Hero section | Video loop OR network animation OR gradient shift; slow, muted | Video / SVG+CSS / CSS |
| Content fade-in | Section titles, intros, blocks | Fade + translateY(16px), 500ms, ease-out, on scroll | CSS + IO |
| Service cards | Services grid | Fade + translateY(20px), stagger 100ms, on scroll | CSS + IO |
| Button hover | All .btn | Scale 1.02, 200ms ease-out | CSS |
| Service icons | .service-icon | Scale on hover 1.05, 200ms; optional stroke draw | CSS |
| Count-up stats | .stat-value (numeric) | 0 → target in 1.2–1.8s, ease-out, once on scroll | JS + IO |
| Process steps | .process-step, .process-connector | Staggered fade + scale; connectors scaleX draw | CSS + IO |
| CTA gradient | .cta-banner | Slow gradient position shift, 15–20s loop | CSS |
| CTA buttons | .cta-banner .btn | Same as global button hover | CSS |

---

## Technical Guidelines

- **Reduce motion:** Respect `prefers-reduced-motion: reduce`. When set, disable or simplify: no count-up (show final number), no scroll-triggered animations (show final state), no hero/video motion. Keep only essential hover transitions (e.g. opacity).
- **Performance:** Prefer CSS animations and transforms (GPU-friendly). Limit simultaneous JS animations. Use Intersection Observer with a single root; disconnect after elements have been revealed if needed.
- **Timing:** 200ms hover, 400–600ms reveal, 1.2–1.8s count-up, 15–20s ambient (hero/CTA). No animation longer than 2s except ambient background.
- **Easing:** Prefer `ease-out` or `cubic-bezier(0.25, 0.1, 0.25, 1)` for entrances; `ease-in-out` for loops.

Use this spec when implementing or auditing motion on the GETIVA site so it stays consistent, professional, and enterprise-level.

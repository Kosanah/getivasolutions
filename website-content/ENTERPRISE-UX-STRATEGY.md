# Getiva Solutions — Enterprise Website UX Strategy

**Purpose:** Guide for maintaining an enterprise-level, corporate vendor website similar to TEKsystems, Insight Global, and Robert Half. Avoid startup or landing-page aesthetics; emphasize structure, credibility, and Fortune 500 readiness.

---

## 1. Section Layout Order (Homepage)

Use this order for the homepage to match enterprise staffing site patterns:

| Order | Section | Purpose |
|-------|---------|--------|
| 1 | **Corporate hero** | Large headline, subhead, dual CTAs (Hire Talent / Find Jobs). Establishes who you are and primary actions. |
| 2 | **Credibility strip** | Trust signals (industries, speed, scale, satisfaction). Immediate proof you’re established. |
| 3 | **Services grid** | 4 service cards with icons and short descriptions. Clear, scannable offering. |
| 4 | **Who we serve** | Three audiences: Employers | Candidates | Consulting. Separates client and candidate paths. |
| 5 | **Why choose us** | Execution, reliability, partnership. Differentiators without hype. |
| 6 | **Industries** | Visual industry cards. Shows breadth and sector expertise. |
| 7 | **How we deliver (process)** | 4-step process. Reduces uncertainty and signals structure. |
| 8 | **Testimonials / credibility** | Short quotes or statements. Social proof for enterprise buyers. |
| 9 | **CTA banner** | Single full-width strip with headline and dual CTAs. Final conversion point. |
| 10 | **Structured footer** | Brand block + Company, Services, Candidates columns + legal. Dense but organized. |

---

## 2. Headline Upgrades

- **Hero:** Lead with benefit and audience, not company name.
  - **Strong:** “IT Staffing & Workforce Solutions That Deliver”
  - **Alternative:** “Scale Your IT Team With a Partner You Can Trust”
  - Avoid: “Welcome to Getiva” or long, generic mission statements.

- **Sections:** Use clear, benefit or category-led titles.
  - “Our Services” / “Who We Serve” / “Why Choose Getiva Solutions” / “Industries We Serve” / “How We Deliver Staffing Solutions” / “What Our Clients Say”.

- **CTAs:** Action-oriented and consistent.
  - Primary: “Hire Talent” (clients), “Find Jobs” (candidates).
  - Secondary: “Learn More,” “View All Industries,” “About Getiva Solutions,” “Contact Us.”

---

## 3. Visual Style Guidance

- **Tone:** Corporate, clean, trustworthy. No playful illustrations, meme-style graphics, or startup “growth” imagery.
- **Imagery:** Prefer:
  - Professional workplace scenes (offices, collaboration, technology in use).
  - Diverse professionals in business-casual or business dress.
  - Clean environments (no clutter, modern but not trendy).
- **Avoid:** Stock photos that look staged or cheesy; cartoon or comic-style art; heavy gradients or neon; “disruption” or “rocket” clichés.
- **Icons:** Simple, line-style or solid SVG icons. Consistent stroke weight and size. Prefer single-color (primary or accent) on light backgrounds.
- **Cards and panels:** Subtle borders, light shadows, rounded corners (6–8px). White or very light gray backgrounds; alternate sections with a light gray band for rhythm.

---

## 4. Colors and Typography

**Colors (current implementation):**

- **Primary (navy):** `#0a2540` — Headers, key UI, footer. Conveys stability and trust.
- **Primary light:** `#0f2942` — Hover states, secondary emphasis.
- **Accent:** `#c45a2a` — CTAs, highlights, process step numbers. Use sparingly for emphasis.
- **Text:** `#1e3a5f` (body), `#4a6579` (muted). Readable, not pure black.
- **Backgrounds:** `#ffffff`, `#f4f6f9` (alternate sections). Keep backgrounds light.

**Typography:**

- **Font stack:** `Segoe UI`, `Helvetica Neue`, Arial, sans-serif. System fonts for performance and a familiar enterprise look.
- **Optional upgrade:** If you add a custom font, use one web font (e.g. Source Sans Pro, Open Sans, or a licensed corporate font) for headings and body; avoid more than two type families.
- **Sizes:** Hero headline 2–2.75rem; section titles 1.5–1.875rem; body 16px; small text 0.875rem. Maintain clear hierarchy.
- **Weight:** Bold (700) for headlines and key labels; medium (500) for nav; regular (400) for body.

---

## 5. Images and Graphics

**Hero:**

- **Option A:** No image; solid or gradient background (navy) with strong type and CTAs. Fast and accessible.
- **Option B:** Large, subtle background image (blurred or darkened): office, team, or technology. Ensure contrast for headline and CTAs.

**Services grid:**

- Use SVG icons (people, briefcase, chart, document) for consistency and accessibility. Current implementation uses inline SVGs; keep style consistent.

**Industries:**

- **Option A:** Text-only cards with initials or short codes (e.g. FS, HC, IT) in a small badge. Clean and fast.
- **Option B:** Add small sector-specific icons or approved stock images per industry. Keep style consistent and professional.

**Process section:**

- Numbered steps (1–2–3–4) in circles or badges. Optional: simple line or arrow between steps on desktop; hide or stack on mobile.

**Testimonials:**

- Optional: small headshots (consistent size and shape). If no photos, use role/sector only (e.g. “— Hiring manager, Healthcare”). Avoid fake or overly marketing-style quotes.

**Footer:**

- Logo or wordmark only. No large imagery in footer.

---

## 6. Spacing and Layout

- **Section padding:** 80px vertical on desktop; 56px on tablet/mobile. Creates breathing room and separates sections clearly.
- **Container width:** Max 1200px for main content. Center with auto margins; pad sides (e.g. 32px) so content doesn’t touch viewport edges.
- **Grid gaps:** 24–32px between cards and columns. Consistent gaps make the layout feel intentional.
- **Header:** Sticky, 70px height. Logo left; nav center or right; primary and secondary CTAs visible. On small screens, collapse to hamburger or priority items only.
- **Footer:** Multi-column grid (e.g. brand + 3 link columns). Adequate line height and spacing between links for tap/click targets.

---

## 7. Credibility and Trust

- **Credibility strip:** Use real or aspirational metrics (e.g. “5+ Industries,” “Fast time to placement,” “National talent network,” “Enterprise client focus”). Update with real numbers when available.
- **Testimonials:** Short, specific, and attributable to role/sector. Rotate if you add more; keep tone professional.
- **Process:** Always show a clear 4-step (or similar) process. Reduces perceived risk and positions you as process-driven.
- **Compliance and security:** On Services or About, mention enterprise readiness, MSP/vendor programs, and compliance. Link to a dedicated page or section if you have one.

---

## 8. Responsive Behavior

- **Breakpoints:** 1200px (container), 900px (2-column grids, credibility 2-col), 768px (single column for cards, process), 560px (footer single column, industry grid 2-col).
- **Touch targets:** Buttons and links at least 44px height where possible.
- **Typography:** Use clamp() or fluid sizing for headlines so they scale between mobile and desktop without jarring jumps.

---

## 9. Content Principles

- **Tone:** Professional, confident, clear. “We” for Getiva, “you” for the reader. No startup buzzwords (e.g. “disruption,” “synergy,” “best-in-class” overuse).
- **Message:** Emphasize execution, reliability, partnership, compliance, and “we get it done for you” without explaining the name origin on the site.
- **Audience:** Speak to both clients (hiring managers, procurement, vendor managers) and candidates. Separate paths (Employers vs. Candidates) and CTAs so each segment knows where to go.

Use this document when adding new sections, refreshing copy, or briefing designers so the site continues to feel like a large, established US staffing firm and a credible enterprise vendor.

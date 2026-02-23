# GETIVA — Enterprise Website Design Specification

**Brand:** GETIVA  
**Tagline:** We Get It Done For You  
**Goal:** Realistic corporate design comparable to TEKsystems, Insight Global, and Robert Half—strong visuals, credible layout, not a plain text or startup landing page.

---

## 1. Corporate Hero Section

### Implementation
- **Background image:** Professional business environment. Suggested: modern corporate office (open plan or glass conference room), diverse professionals in business-casual dress, or a technology workspace with monitors/screens. Image should be high-resolution (min 1920×1080), slightly darkened (CSS overlay) so white text and CTAs remain readable.
- **Headline:** Strong, benefit-led. Example: *"IT Staffing & Workforce Solutions That Deliver"* or *"Scale Your Technology Team With a Partner You Can Trust."*
- **Subheadline:** One to two sentences: who you serve, what you deliver, and why they should care (e.g. contract/direct hire, compliance, enterprise reliability).
- **CTAs:** Two buttons—**Hire Talent** (primary, solid accent) and **Find Jobs** (secondary, outline/ghost). Place tagline **"We Get It Done For You"** just below subhead or above CTAs for brand reinforcement.

### Image suggestion (hero)
- **Option A:** Corporate team in a modern office, collaboration or meeting scene, well-lit, diverse.
- **Option B:** Technology workspace—developers or IT team at work, monitors, professional setting.
- **Option C:** Business handshake or onboarding moment (client and recruiter or candidate).

Use a **dark overlay** (e.g. rgba(10, 37, 64, 0.75)) so type stays legible.

**Implementation:** The hero uses a CSS overlay. To add your own background image, set the section’s inline style to `style="--hero-bg-url: url('your-image.jpg')"`. Without this variable, the gradient still displays.

---

## 2. Image Suggestions by Section (Site-Wide)

Use these for art direction when sourcing or shooting assets:

| Section / use | Suggested image |
|---------------|------------------|
| **Hero** | Corporate office team meeting; or tech workspace; or professional handshake. |
| **Recruiting / staffing** | Recruiter interviewing candidate (in-person or video call); resume review; candidate screening. |
| **Partnership / onboarding** | Business handshake; onboarding discussion at table; contract or paperwork handoff. |
| **Technology / delivery** | Technology workspace (screens, laptops, collaboration); developer or IT professional at work. |
| **Candidates / careers** | Professional candidate portraits (diverse, business attire); career coaching or interview prep. |
| **Consulting** | Consulting discussion (whiteboard or screen share); strategy meeting; workforce planning session. |
| **Corporate / about** | Corporate office exterior or lobby; team in conference room; company culture moment. |

**Style:** Professional, well-lit, diverse, business-casual or business dress. Avoid overly staged or “stocky” looks; prefer natural expressions and realistic settings.

---

## 3. Image Placement by Page

### Homepage
- **Hero:** Full-bleed background image (see §1).
- **Services:** Keep existing **icons** in each card; optionally add **one real photo** above or beside the grid (e.g. recruiter with candidate or team meeting).
- **Who We Serve (Employers / Candidates / Consulting):** Optional photo in one of the three cards (e.g. employer handshake, candidate portrait, consulting scene) or one hero image spanning the section.
- **Why Choose Us:** **Alternating image/text**—e.g. left: image (corporate team or handshake), right: copy; or center image strip between two text blocks.
- **Industries:** **Industry-themed images** per card (e.g. financial services: trading floor or office; healthcare: clinical/IT; technology: dev team; retail: distribution or digital; manufacturing: floor or control room). If budget is limited, use one strong “industries we serve” image above the grid.
- **Process:** Icons/numbers only, or add a **simple process diagram** (steps with connecting line/arrow).
- **Testimonials:** Optional small **headshots** (consistent crop) or role/sector text only.
- **CTA banner:** Solid color or very subtle pattern; no competing image.

### About page
- **Hero / page header:** **Corporate office or team imagery** (building, lobby, or team in meeting).
- **Story / values:** **Team or office photo**—e.g. team in conference room, or alternating image/text blocks (office, culture, delivery).

### Services page
- **Page header:** **Consulting or staffing scene** (meeting, handshake, or tech workspace).
- **Per service:** **Icons** (current) + optional **one photo per service** (staffing: recruiter/candidate; workforce: team; consulting: whiteboard; vendor: document/handshake).

### Industries page
- **Industry cards:** **Industry-themed image** per sector (financial, healthcare, technology, retail, manufacturing) as card background or above title.

### Candidates page
- **Hero / header:** **Career-focused visual**—professional candidate, interview prep, or diverse professionals in workplace.
- **Process / benefits:** **Candidate portrait(s)** or **recruiter-candidate** moment; optional alternating image/text.

### Contact page
- **Header or sidebar:** **Professional office imagery**—reception, office building, or team at desk. Reinforces “we’re a real company.”

---

## 4. Credibility Elements

### Stats section (below hero or after credibility strip)
- **Talent network:** e.g. “10,000+ professionals” or “National talent network.”
- **Industries served:** e.g. “5+ industries” or “Financial services, healthcare, technology, and more.”
- **Placements / delivery:** e.g. “Placements delivered” with a number, or “Fast time to placement.”
- **Client focus:** e.g. “Enterprise & mid-market clients.”
Use **large numbers** and short labels; single row on desktop, 2×2 or stack on mobile.

### Testimonial blocks
- **Layout:** 3 cards in a row (desktop); 1 column on mobile. Each card: quote, attribution (name/role optional), company/sector.
- **Visual:** Card with border or subtle shadow; optional small headshot or icon. Keep quotes short (1–3 sentences).

### Client logos placeholder
- **Section title:** e.g. “Trusted by leading organizations” or “Our clients.”
- **Layout:** Row of **logo placeholders** (gray boxes or generic “Client” text) in a strip. Replace with real client logos when approved. Use grayscale or muted colors so logos don’t compete with primary palette.
- **Placement:** After stats or after “Who We Serve”; above or below testimonials.

### Delivery process diagram
- **Visual:** 4 steps in a row with **numbered circles** and **connecting line or arrow** between them (e.g. Understand → Source & Screen → Present & Coordinate → Place & Support).
- **Style:** Same as current process section; add horizontal connector (line or chevrons) in CSS for a diagram feel. Optional: small icons per step.

---

## 5. Layout Improvements

| Element | Recommendation |
|--------|-----------------|
| **Section spacing** | 80px vertical padding per section on desktop; 56px on tablet/mobile. Consistent rhythm. |
| **Card-based layout** | Services, Who We Serve, Why Choose Us, Industries, Testimonials: use cards with border, rounded corners (8px), subtle shadow on hover. |
| **Alternating image/text** | Use on Home (Why Choose Us or similar), About, Candidates. One block: image left, text right; next: image right, text left. Improves scan and feels editorial. |
| **Banner CTA near bottom** | Full-width strip (primary color), headline + short line + two buttons (Hire Talent, Find Jobs). Placed after Testimonials, before Footer. |
| **Structured footer** | 4 columns: Brand (logo + tagline), Company links, Services links, Candidates links. Bottom bar: ©, tagline, optional Privacy/Terms. |

---

## 6. Visual Style

### Corporate color palette
- **Primary (navy):** `#0a2540` — Headers, footer, key UI. Trust and stability.
- **Primary light:** `#0f2942` — Hover states, secondary emphasis.
- **Accent:** `#c45a2a` — Primary CTAs, highlights, process numbers. Use sparingly.
- **Text:** `#1e3a5f` (body), `#4a6579` (muted). Avoid pure black.
- **Backgrounds:** `#ffffff`, `#f4f6f9` (alternate sections). Keep light.

### Professional fonts
- **Primary:** Segoe UI, Helvetica Neue, Arial (system stack). Clean, enterprise.
- **Optional web font:** Source Sans Pro or Open Sans for a slightly more polished look; use for headings and body. No more than two families.

### Icon style
- **Line icons** (stroke 1.5–2px), 24–28px for cards, 48px for process. Single color (primary or accent). Consistent stroke weight across the site.
- **Services:** Keep current SVG line icons; match stroke weight.

### Spacing guidance
- **Container max-width:** 1200px; horizontal padding 32px.
- **Grid gaps:** 24–32px between cards/columns.
- **Headline to body:** 12–16px margin.
- **Section title to intro:** 12px; intro to content 40px.

---

## 7. Redesigned Website Structure (Section Order + Headlines + Images + Style)

| # | Section | Headline | Image to place | Visual style |
|---|---------|----------|----------------|--------------|
| 1 | **Hero** | IT Staffing & Workforce Solutions That Deliver | Full-bleed: corporate office team meeting or tech workspace. Dark overlay. | Dark overlay on photo; white headline/subhead; tagline “We Get It Done For You”; 2 CTAs. |
| 2 | **Credibility strip** | (no headline) | None. | Stats only: Talent network size, Industries, Placements/delivery, Client focus. Single row, large numbers. |
| 3 | **Client logos** | Trusted by Leading Organizations | Placeholder row for client logos (gray boxes or “Client” text). | Neutral strip; logos grayscale when real. |
| 4 | **Services** | Our Services | Icons in each card (current). Optional: one photo above grid (recruiter/candidate or team meeting). | Card grid; icons + short copy; optional hero image. |
| 5 | **Who We Serve** | Who We Serve | Optional: one image per column (employer handshake, candidate portrait, consulting) or one section image. | 3 cards; optional image per card or one full-width image. |
| 6 | **Why Choose Us** | Why Choose GETIVA | Alternating: image left (corporate team or handshake), then text; or center image between two text blocks. | Split layout or image strip; card-style text blocks. |
| 7 | **Industries** | Industries We Serve | Industry-themed image per card (FS, HC, IT, Retail, Mfg) or one “industries” image above grid. | Visual cards; image as background or above label. |
| 8 | **Process** | How We Deliver Staffing Solutions | Process diagram: 4 steps with connecting line/arrow. Optional small icon per step. | Dark background; numbered circles; horizontal connector. |
| 9 | **Testimonials** | What Our Clients Say | Optional headshots per quote; or quote + role/sector only. | 3 cards; quote + attribution. |
| 10 | **CTA banner** | Ready to Partner With Us? | None (solid color or very subtle texture). | Full-width primary color; headline + 2 buttons. |
| 11 | **Footer** | (no headline) | None. | Brand + tagline; Company, Services, Candidates columns; © + tagline. |

### About page
| Section | Headline | Image | Style |
|---------|----------|--------|--------|
| Page header | About GETIVA | Corporate office or team (building, lobby, meeting room). | Full-width or large hero image. |
| Story / values | Our Story, Mission, Values | Team or office photo; optional alternating image/text. | Alternating or single hero image. |

### Candidates page
| Section | Headline | Image | Style |
|---------|----------|--------|--------|
| Page header | Find Your Next Role | Career-focused: professional candidate or interview moment. | Hero or large header image. |
| Benefits / process | Why Work With Us, Process | Candidate portrait(s) or recruiter-candidate. | Cards or alternating image/text. |

### Contact page
| Section | Headline | Image | Style |
|---------|----------|--------|--------|
| Page header / sidebar | Contact Us | Professional office (reception, building, desk). | Header image or image beside form. |

---

## Quick reference: where to add images

- **Hero:** Background image (required for “realistic corporate” look).
- **Services:** Icons (done) + optional one real photo above or beside grid.
- **Industries:** Industry-themed image per card or one above grid.
- **About:** Corporate office/team imagery in header and/or alternating blocks.
- **Candidates:** Career-focused imagery in header and benefits/process.
- **Contact:** Professional office imagery in header or sidebar.
- **Credibility:** Stats (numbers), testimonials (optional headshots), client logos (placeholder then real).

Use this spec when briefing designers, sourcing stock photography, or implementing new pages so the site consistently feels like a large, established US staffing firm.

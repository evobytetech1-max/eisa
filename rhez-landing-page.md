# RHEZ Landing Page — Design Specification

> **Brand:** RHEZ Sdn Bhd | **Inspired by:** Ajax Systems design language | **Stack:** HTML + CSS + JS (or your preferred framework)

---

## 1. Design Philosophy

Replicate the Ajax Systems premium dark aesthetic — hardware-forward, minimal, authoritative — mapped onto the RHEZ brand identity. Dark backgrounds anchor the layout. Soft Yellow gold accents drive CTAs and highlights. Photography and product imagery carry the visual weight.

---

## 2. Brand Tokens

### Colors

| Role | Name | Hex |
|---|---|---|
| Primary Accent | Soft Yellow | `#E1C564` |
| Primary Background | Black | `#000000` |
| Surface / Cards | Very Dark Gray | `#393939` |
| Muted Text / Borders | Dark Gray | `#858585` |
| Primary Text | White | `#FFFFFF` |

### Typography

| Usage | Font | Weight | Size |
|---|---|---|---|
| Logo wordmark | Anurati (or Rajdhani as fallback) | 700 | — |
| Tagline / sub-logo | Mylodon Light (or Barlow Condensed Light) | 300 | — |
| Page headlines | Seaford (or Barlow) | 400 | 32pt |
| Body / paragraphs | Seaford (or Barlow) | 400 | 11pt |
| Nav links | Barlow / system sans | 500 | 14px |
| CTA buttons | Uppercase tracking | 600 | 13px |

> **Fallback stack:** `'Rajdhani', 'Barlow Condensed', sans-serif` for headings; `'Barlow', 'Segoe UI', sans-serif` for body.

---

## 3. Navigation

- **Sticky top bar**, dark background (`#000` / `rgba(0,0,0,0.92)` + `backdrop-filter: blur`)
- **Left:** RHEZ shield logomark + wordmark
- **Right:** Nav links + gold `"Get a Quote"` CTA button
- Bottom border: `1px solid rgba(225,197,100,0.15)`

### Nav Links
- Products
- Solutions
- About
- Support
- Partner Portal

### CTA Button (Primary)
- Label: **GET A QUOTE**
- Style: Gold border + gold text, black fill → hover: gold fill + black text
- Border: `1px solid #E1C564`

---

## 4. Hero Section

- Full viewport height (`100vh`)
- Background: dark lifestyle/security photography or deep black with subtle noise texture
- **Headline:** `Elevating Security. Redefining Safety.`
  - Font: Anurati / Rajdhani 700, large (clamp 48px–80px)
  - Color: White
- **Sub-headline:** `Intelligent security solutions engineered for precision and peace of mind.`
  - Font: Barlow 300, 18–22px
  - Color: `#858585`
- **CTA Buttons (2):**
  - Primary: `EXPLORE SOLUTIONS` — gold fill, black text
  - Secondary: `WHERE TO BUY` — outlined gold, transparent fill
- **4 category tiles** below the headline (full-width grid, 2×2 on mobile / 4-col on desktop):
  - CCTV & Surveillance
  - Alarm Systems
  - Access Control
  - Cybersecurity
  - Each tile: background product/lifestyle image + gold label overlay + subtle dark gradient

---

## 5. "Our Solutions" Tabbed Section

- **Tabs (3):** New Products · By Facility · By Service
- **Content:** Horizontal scrollable card grid
- **Card anatomy:**
  - Dark card background (`#393939`)
  - Product image (top, full-bleed within card)
  - Title (white, 15px, Barlow 500)
  - Arrow link → gold on hover
- **Tab active state:** Gold underline + white text; inactive: `#858585`

---

## 6. Feature Highlight Grid

2×2 large image cards (full-bleed background images, dark overlay, white text):

| Card | Headline | CTA |
|---|---|---|
| 1 | Assemble Your Security Kit | Build Kit → |
| 2 | Solutions by Facility | Explore → |
| 3 | Customer Stories | Read More → |
| 4 | RHEZ Ready Products | View Products → |

- Cards: `border-radius: 4px`, hover lifts scale slightly (`transform: scale(1.01)`)
- Text position: bottom-left of card
- CTA: gold text link

---

## 7. "Why RHEZ" Stats Bar

Full-width dark section (`#0A0A0A`), single row of 3–4 stats:

| Stat | Label |
|---|---|
| 10,000+ | Installations Completed |
| 99.8% | System Uptime |
| 24/7 | Monitoring Support |
| ISO Certified | Security Standards |

- Numbers: large, bold, gold (`#E1C564`)
- Labels: small, gray (`#858585`)
- Dividers: `1px solid #393939` between each

---

## 8. Partner / B2B CTA Section

- Background: very dark gray (`#1A1A1A`) or dark image
- Headline: `Become a RHEZ Partner`
- Body: brief one-liner on partner benefits
- CTA: `APPLY NOW` — gold button
- Target: distributors, resellers, installers, monitoring companies

---

## 9. Footer

Multi-column link grid on black background:

| Column | Links |
|---|---|
| Products | CCTV, Alarm Systems, Door Locks, Biometrics, Guard Patrol, HRM |
| Solutions | By Facility Type, By Service |
| Support | Manuals, Tools, Submit a Request |
| Company | About, Blog, Careers, Events |
| Partners | Partner Portal, Become a Partner |
| Connect | Newsletter signup field |

**Contact block:**
- Email: `rhez2023@gmail.com`
- WhatsApp: `673 7451506`
- Social icons: Facebook · LinkedIn · Instagram · TikTok

**Bottom bar:**
- Left: `© 2025 RHEZ Sdn Bhd. All rights reserved.`
- Right: Privacy Policy · Terms · GDPR
- Gold accent slash divider (matching brand guideline footer style)

---

## 10. Interaction Patterns

| Pattern | Detail |
|---|---|
| Sticky nav | Persists on scroll; slight bg opacity increase on scroll |
| Mega-menu (optional) | Hover-triggered dropdown for Products and Solutions |
| Card hover | Scale `1.01` + brightness lift on category/feature cards |
| Tab switching | "Our Solutions" section — JS tab toggle, gold active underline |
| Gold CTA hover | Primary button: fill transitions gold → white, text transitions to black |
| Scroll reveal | Sections fade + slide up on scroll (`IntersectionObserver`) |

---

## 11. Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| `>1200px` | Full desktop layout, 4-col hero tiles, mega-menu |
| `768–1200px` | Tablet: 2-col hero tiles, collapsed nav |
| `<768px` | Mobile: single column, hamburger nav, stacked cards |

---

## 12. Assets Needed

- [ ] RHEZ shield logo (SVG — transparent background, gold fill)
- [ ] RHEZ wordmark (SVG — white version + black version)
- [ ] Hero background image (dark security/lifestyle photography)
- [ ] 4× category tile images (CCTV, Alarms, Access, Cyber)
- [ ] Product card images (for "Our Solutions" section)
- [ ] 4× feature grid images (high-quality, dark tone)
- [ ] Partner CTA background image

---

## 13. Brand Voice (Copy Tone)

Per RHEZ brand guidelines:
- **Formal** (not casual)
- **Serious** (not funny)
- **Respectful** (not irrelevant)
- **Practical** (not purely enthusiastic)

Headlines should be short, declarative, and confident. Body copy is concise and technical. No marketing fluff.

---

## 14. SEO / Meta

```html
<title>RHEZ — Elevating Security. Redefining Safety.</title>
<meta name="description" content="RHEZ delivers intelligent, integrated security solutions — CCTV, alarm systems, access control, and cybersecurity — engineered for precision and reliability." />
<meta property="og:image" content="/assets/og-cover.jpg" />
```

---

*Spec based on RHEZ Brand Guidelines 2023 and Ajax Systems design analysis, April 2026.*

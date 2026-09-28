# Taufiq Nashrullah — Portfolio Design System

## Direction

**Editorial Light**
- Clean, bright, content-first.
- Strong typographic hierarchy over decoration.
- Generous whitespace and clear vertical rhythm.
- Subtle, purposeful motion that supports reading, not distracts.
- Inspired by Vercel (precision) + Notion (warm minimalism).

---

## Surface Archetype

**Decide / Learn + Operate blend.**
The portfolio must convince a recruiter, but also let them quickly verify skills, experience, and projects. The primary surface is a scrolling narrative; the secondary surface is a quick-scan dashboard of capabilities.

---

## Brand Voice

- Professional but not cold.
- Clear, confident, direct.
- Technical accuracy first; no buzzword fluff.

---

## Color System

### Primitives

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#ffffff` | Page background |
| `--bg-subtle` | `#fafafa` | Section alternates, cards |
| `--text` | `#171717` | Primary text |
| `--text-muted` | `#737373` | Secondary text, labels |
| `--text-faint` | `#a3a3a3` | Tertiary text |
| `--border` | `#e5e5e5` | Dividers, card borders |
| `--border-strong` | `#d4d4d4` | Focus borders |
| `--accent` | `#171717` | Primary accent (buttons, links, highlights) |
| `--accent-contrast` | `#ffffff` | Text on accent |
| `--success` | `#16a34a` | Status: healthy, active |
| `--warning` | `#ca8a04` | Status: warning |

### Dark Mode (optional v2)

| Token | Value |
|-------|-------|
| `--bg` | `#0a0a0a` |
| `--bg-subtle` | `#171717` |
| `--text` | `#fafafa` |
| `--text-muted` | `#a3a3a3` |

---

## Typography

| Role | Font | Weight | Size (desktop) | Size (mobile) |
|------|------|--------|----------------|---------------|
| Display | Inter, system-ui | 700 | 64px / 4rem | 40px / 2.5rem |
| Headline 1 | Inter | 600 | 48px / 3rem | 32px / 2rem |
| Headline 2 | Inter | 600 | 24px / 1.5rem | 20px / 1.25rem |
| Body | Inter | 400 | 16px / 1rem | 16px / 1rem |
| Body Large | Inter | 400 | 18px / 1.125rem | 17px / 1.0625rem |
| Caption | Inter | 500 | 12px / 0.75rem | 12px / 0.75rem |
| Mono | JetBrains Mono | 400 | 14px / 0.875rem | 13px / 0.8125rem |

### Type Scale

- Line height body: `1.6`
- Line height display: `1.1`
- Letter spacing display: `-0.02em`

---

## Spacing

| Token | Value |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 24px |
| `--space-6` | 32px |
| `--space-7` | 48px |
| `--space-8` | 64px |
| `--space-9` | 96px |

### Section Rhythm

- Section vertical padding: `96px` desktop, `64px` mobile
- Container max-width: `960px` (content), `1200px` (full width)
- Container horizontal padding: `24px` mobile, `32px` desktop

---

## Radii & Elevation

| Token | Value |
|-------|-------|
| `--radius-sm` | 6px |
| `--radius-md` | 10px |
| `--radius-lg` | 16px |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.04)` |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.06)` |

---

## Animation

### Timing

| Token | Value |
|-------|-------|
| `--duration-fast` | 150ms |
| `--duration-normal` | 300ms |
| `--duration-slow` | 500ms |

### Easing

| Token | Value |
|-------|-------|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` |

### Effects

- Entrance: `opacity 0 → 1`, `translateY(16px) → translateY(0)` over 500ms with `--ease-out`
- Stagger: 80ms between items
- Hover on cards: `translateY(-2px)` + shadow-md over 200ms
- Links: underline grows from left to right on hover
- Progress/skills: width animates from 0% to value over 800ms

**Respect `prefers-reduced-motion`:** disable transforms, keep opacity.

---

## Components

### Button Primary

- Background: `--accent`
- Text: `--accent-contrast`
- Padding: `12px 20px`
- Radius: `--radius-md`
- Hover: opacity 0.9

### Button Secondary

- Background: transparent
- Border: 1px solid `--border-strong`
- Text: `--text`
- Hover: background `--bg-subtle`

### Card

- Background: `--bg-subtle`
- Border: 1px solid `--border`
- Radius: `--radius-lg`
- Padding: `--space-5`
- Hover: `translateY(-2px)` + `--shadow-md`

### Tag

- Background: `--bg-subtle`
- Border: 1px solid `--border`
- Text: `--text-muted`
- Padding: `4px 10px`
- Radius: `--radius-sm`

### Link

- Color: `--text`
- Underline offset: 2px
- Hover: underline animation

---

## Layout / Section Map

```
┌─────────────────────────────────────┐
│ 1. Navigation                       │
│    - Name left                        │
│    - Links: About, Experience,        │
│      Projects, Skills, Contact        │
│    - Mobile: hamburger menu           │
├─────────────────────────────────────┤
│ 2. Hero                               │
│    - Name + role                      │
│    - One-line value proposition       │
│    - Primary CTA + Secondary CTA      │
│    - Scroll hint / subtle motion      │
├─────────────────────────────────────┤
│ 3. About                              │
│    - Short paragraph                  │
│    - Location + languages           │
│    - Career focus                     │
├─────────────────────────────────────┤
│ 4. Experience                         │
│    - Timeline cards                   │
│    - Company, role, period, bullets │
├─────────────────────────────────────┤
│ 5. Education & Certifications         │
│    - Degree + bootcamp                │
│    - Relevant details                 │
├─────────────────────────────────────┤
│ 6. Projects                           │
│    - 3-4 featured projects            │
│    - Title, description, tech tags,     │
│      links (GitHub / live)            │
├─────────────────────────────────────┤
│ 7. Skills                             │
│    - Categorized skill groups         │
│    - Optional progress bars           │
├─────────────────────────────────────┤
│ 8. Contact                            │
│    - Email, phone, LinkedIn/GitHub  │
│    - Simple contact form (optional)   │
├─────────────────────────────────────┤
│ 9. Footer                             │
│    - Copyright                        │
│    - Back to top                      │
└─────────────────────────────────────┘
```

---

## Responsive Strategy

- Mobile-first CSS with `md:` and `lg:` Tailwind breakpoints.
- Navigation collapses to hamburger below `md`.
- Hero text scales down significantly on mobile.
- Timeline alternates left/right on desktop; single column on mobile.
- Cards stack 1 column on mobile, 2 columns on desktop.

---

## SEO & Meta

- Title: `Taufiq Nashrullah — Junior IT Support / System Administrator`
- Description: `Computer Science graduate based in Germany. Skilled in IT support, networking, Windows/Linux, and cybersecurity.`
- OG image: generate simple branded card
- Favicon: initials TN

---

## Self-Hosting on Hermes

- Build output: `out/` via `next.config.js` static export.
- Serve via Hermes gateway route or reverse proxy.
- Verify live URL after deploy.

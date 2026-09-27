<div align="center">

# Dr. Maya Reynolds, PsyD
### Licensed Clinical Psychologist · Santa Monica, California

An editorial, high-fidelity therapist practice web application engineered for clinical credibility, emotional grounding, and seamless responsive storytelling.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.6-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.4-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Ready-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://turbo.build/pack)

[Live Demo](#) · [Key Features](#-key-features) · [Design System](#-design-system--editorial-identity) · [Information Architecture](#-information-architecture) · [Getting Started](#-getting-started)

</div>

---

## 🌿 Executive Overview

This web application represents a bespoke digital presence designed for **Dr. Maya Reynolds, PsyD**, a licensed clinical psychologist based in Santa Monica, California, offering in-person therapy and secure statewide telehealth across California.

The project blends **clinical warmth and depth** with **editorial design architecture**, drawing inspiration from high-end wellness and therapy design systems. It prioritizes:
- **Atmospheric Storytelling**: Soft, grounding earth tones, refined serif headlines, and deliberate white space.
- **Asymmetric Composition**: Staggered image pairings on desktop that organically recompose into clean vertical hierarchies on tablet and mobile.
- **Accessible, Human-First Interactions**: Keyboard-trapped modals, smooth accordion transitions, sliding drawer navigation, and zero dead interactions.

---

## ✨ Key Features

### 1. Editorial Navigation & Drawer Choreography
- **Desktop Navigation**: Header featuring branded logo, interactive dropdown menus for *About*, *Specialties*, and *Methods*, direct route jumps, and an instant Consultation CTA.
- **Sliding Multi-Level Mobile Menu**: Full-screen drawer with drill-down nested submenus (`About`, `Specialties`, `Methods`), complete with smooth directional back transitions (`← Back to Menu`), body scroll lock, and ESC-key dismissal.
- **Cross-Route Anchor Jumps**: Root-relative anchor targeting (`/#intro`, `/#specialties`, `/#methods`, `/#office`, `/#contact`) enabling seamless navigation from both the root homepage and the dedicated `/faqs` route.

### 2. Intentional Responsive Recomposition (Mobile & Tablet)
- **Viewport-Specific Layouts**: Specifically tuned across 9 distinct device breakpoints (375px, 390px, 414px, 430px, 768px, 834px, 1024px, 1280px, and 1440px).
- **Portrait Preservation**: Maya's vertical portrait is framed within dedicated `3:4` aspect-ratio containers on mobile and CTA sections, preserving her full face, hair, shoulders, and upper torso without aggressive horizontal close-up cropping.
- **No Horizontal Scroll**: Zero layout shifts or edge clipping; consistent `clamp(1.25rem, 5vw, 4.5rem)` content gutters across every viewport.

### 3. Accessible FAQ Experience (`/faqs`)
- **Fluid Accordions**: Single-expansion toggle pattern with animated height transitions via Framer Motion.
- **WAI-ARIA Standard**: Fully wired `aria-expanded`, paired `aria-controls` / `id`, and container `role="region"` semantics for screen readers and tabbed keyboard navigation.

### 4. Interactive Consultation Dialog
- **Modal Ergonomics**: Accessible modal dialog with backdrop blur, smooth spring scaling, close button, and click-outside dismissal.
- **Form State Handling**: Real-time format selection (*In-Person Santa Monica* vs. *California Telehealth*), strict client-side validation, disabled submission state (`isSubmitting`) with feedback, and complete form cleanup upon close.

---

## 🎨 Design System & Editorial Identity

The visual language balances clinical trust with Santa Monica architectural serenity.

### Curated Color Palette
```
┌─────────────────────────────────────────────────────────────┐
│ #F7F4EE │ Primary Warm Stone Base (Page Background)         │
│ #E8E8DF │ Secondary Sand Muted Surface                      │
│ #FAF8F5 │ High-Key Warm Card Surface                        │
│ #43574D │ Deep Sage / Forest Accent (Primary Actions)       │
│ #A9B7A8 │ Soft Olive Sage (Secondary Accents / Badges)      │
│ #252824 │ Charcoal Umber (High-Contrast Editorial Text)     │
│ #4A4F48 │ Deep Slate Neutral (Subtle Body Text)             │
│ #DDD8CE │ Muted Stone Border Line                           │
└─────────────────────────────────────────────────────────────┘
```

### Typography Hierarchy
- **Serif Display**: `DM Serif Display` — Lends editorial authority, human warmth, and reflective pacing to all section titles and headlines.
- **Sans-Serif System**: `Manrope` — Clean geometric sans-serif optimized for reading legibility, uppercase metadata labels, and touch targets.
- **Monospace Accents**: Monospaced numerical indices (`01`, `02`, `03`) for numbered specialties and modalities.

---

## 🏛 Information Architecture

The website is structured into a deliberate editorial rhythm that guides the prospective client from initial emotional connection to clinical confidence:

```
Homepage (/)
│
├── 1. Announcement Bar       -> In-Person & Telehealth Availability Banner
├── 2. Header & Navigation    -> Logo, Dropdowns (About, Specialties, Methods), Contact CTA
├── 3. Hero Section           -> Editorial Staggered Layout / Recomposed Mobile 3/4 Portrait
├── 4. Intro & Philosophy     -> "You can be doing well on the outside and still feel exhausted"
├── 5. Alternating Narrative  -> Two-Row Image + Text Grid on Emotional & Physiological Awareness
├── 6. Who I Work With        -> 3-Card Editorial Focus Areas (Anxiety, Burnout, Trauma)
├── 7. Statement Banner       -> Full-Width Dusk Ocean Atmosphere & Centered Affirmation
├── 8. Areas of Expertise     -> Editorial Index & Keyword List with Numbered Badges
├── 9. How I Work (Approach)  -> Collaborative Philosophy, Checkpoint Highlights & Modalities
├── 10. Architectural Loft    -> Large Santa Monica Space Feature & Reflective Quote
├── 11. Clinical Methods      -> Detailed Modality Breakdown (CBT, EMDR, Mindfulness, Somatic)
├── 12. Office & Practice     -> Santa Monica Loft Details & Telehealth Practice Badges
├── 13. Consultation CTA     -> Split Editorial Card with Dr. Reynolds Portrait & Request Button
├── 14. Welcoming Sign-off    -> Location Credentials Strip
└── 15. Multi-Column Footer   -> Navigate, Focus Areas, Verbatim Office Address & Legal Notes

Dedicated Pages
└── /faqs                     -> Frequently Asked Questions (WAI-ARIA Accordions & Direct CTA)
```

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16.3.6 (App Router)** | Static site generation, server components, Turbopack bundling |
| **Runtime** | **React 19.2.8** | Concurrent UI rendering and state management |
| **Language** | **TypeScript 5.0** | Strict type safety across components, props, and handlers |
| **Styling** | **Tailwind CSS v4** | Modern utility engine with CSS variable design tokens |
| **Animation** | **Framer Motion 13.4** | Accordion height interpolation, mobile drawer springs, modals |
| **Icons** | **Lucide React** | Lightweight, accessible SVG icon primitives |
| **Typography** | **Google Fonts** | `DM Serif Display` & `Manrope` via `@next/font` |

---

## 📁 Repository Structure

```text
├── app/
│   ├── faqs/
│   │   └── page.tsx              # Accessible FAQ page with interactive accordions
│   ├── globals.css               # Design system tokens, typography rules & base styles
│   ├── layout.tsx                # Root layout with SEO metadata & OpenGraph tags
│   └── page.tsx                  # Primary editorial homepage choreography
├── components/
│   ├── AlternatingSection.tsx    # Two-row editorial image/text storytelling
│   ├── AnnouncementBar.tsx       # Subtle top availability notification strip
│   ├── ApproachSection.tsx       # "How I Work" clinical integration & check-list
│   ├── ClosingStatement.tsx      # Practice reassurance & location confirmation
│   ├── ConsultationCTA.tsx       # Bottom prominent consultation card & portrait
│   ├── ConsultationModal.tsx     # Accessible consultation inquiry modal dialog
│   ├── ExpertiseSection.tsx      # Numbered clinical focus keywords
│   ├── Footer.tsx                # Multi-column footer with verbatim practice address
│   ├── Hero.tsx                  # Staggered desktop composition / 3:4 mobile portrait
│   ├── ImageStatementSection.tsx # Architectural photo feature with reflective quote
│   ├── IntroSection.tsx          # Grounded care philosophy & coastal shoreline photo
│   ├── MethodsSection.tsx        # Evidence-based modalities (CBT, EMDR, Somatic)
│   ├── MobileMenu.tsx            # Multi-level sliding navigation drawer
│   ├── Navbar.tsx                # Sticky header with hover dropdowns & mobile trigger
│   ├── OfficeSection.tsx         # Santa Monica loft gallery & telehealth breakdown
│   ├── StatementSection.tsx      # Emotional dusk background statement banner
│   └── WhoIWorkWith.tsx          # 3-column card architecture for target clients
├── public/
│   └── maya/                     # High-resolution uncompressed master photography
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KoushikSagarr/grow_my_therapy_demo.git
   cd grow_my_therapy_demo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Compile for production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 📱 Responsive QA Matrix

Every component has been verified across key viewport tiers:

| Viewport | Device Target | Composition Strategy |
| :---: | :--- | :--- |
| **1440px** | Large Monitor | Asymmetrical staggered compositions, generous spacing, 1480px max bounds |
| **1280px** | Standard Desktop | Full desktop navigation, 3-column cards, split CTA |
| **1024px** | Laptop | Nav link spacing safety (`gap-5`), side-by-side split CTA |
| **834px** | iPad Pro / Tablet | Transition to mobile drawer + consultation pill, balanced 460px hero |
| **768px** | iPad / Tablet | Proportional card padding (`p-5`), stacked CTA (`min-h-[460px]`) |
| **430px** | iPhone Pro Max | Recomposed vertical hero, prominent `3:4` portrait, single-column flow |
| **390px** | iPhone 14 / 15 / 16 | 20px content gutters, thumb-accessible CTA buttons, zero horizontal scroll |
| **375px** | iPhone SE / Compact | Compact container (335px content width), no clipped typography or buttons |

---

## 🔒 Confidentiality & Practice Information

- **Therapist**: Dr. Maya Reynolds, PsyD (Licensed Clinical Psychologist)
- **Physical Office**: 123th Street 45 W, Santa Monica, CA 90401
- **Telehealth**: Secure HIPAA-compliant virtual care across California
- **Focus Areas**: Adults navigating anxiety, chronic worry, high-achievement burnout, trauma, and somatic tension

---

<div align="center">
<sub>Designed and developed with clinical care and modern web engineering.</sub>
</div>

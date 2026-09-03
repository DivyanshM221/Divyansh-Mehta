---
name: The Living Spec
description: A PM's portfolio built as a versioned, statused product document — paper ground, ink type, mono metadata strips, amber/teal status accents.
colors:
  paper: "#F5F5F1"
  paper-raised: "#FBFBF9"
  paper-sunken: "#ECEBE4"
  ink: "#14213D"
  ink-soft: "#4A5268"
  ink-faint: "#5A6578"
  line: "#D8D6CC"
  line-strong: "#B7B4A6"
  amber: "#C98A2C"
  amber-soft: "#E8D5B0"
  amber-deep: "#7A4D14"
  teal: "#2F6F5E"
  teal-soft: "#C9DED7"
  teal-deep: "#285F50"
typography:
  display:
    fontFamily: "Space Grotesk, Arial Narrow, sans-serif"
    fontSize: "clamp(2.25rem, 1.6rem + 3vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Space Grotesk, Arial Narrow, sans-serif"
    fontSize: "clamp(1.625rem, 1.4rem + 1vw, 2.125rem)"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Space Grotesk, Arial Narrow, sans-serif"
    fontSize: "clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  body-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "IBM Plex Mono, SFMono-Regular, Consolas, monospace"
    fontSize: "clamp(0.6875rem, 0.66rem + 0.1vw, 0.8125rem)"
    fontWeight: 500
    letterSpacing: "0.02em"
rounded:
  sm: "3px"
  md: "6px"
  pill: "100px"
spacing:
  1: "0.25rem"
  2: "0.5rem"
  3: "0.75rem"
  4: "1rem"
  5: "1.5rem"
  6: "2rem"
  7: "3rem"
  8: "4.5rem"
  9: "6.5rem"
  10: "9rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "#223059"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-ghost-hover:
    backgroundColor: "{colors.paper-raised}"
  pill-live:
    backgroundColor: "{colors.teal-soft}"
    textColor: "{colors.teal-deep}"
    rounded: "{rounded.pill}"
  pill-shipped:
    backgroundColor: "{colors.amber-soft}"
    textColor: "{colors.amber-deep}"
    rounded: "{rounded.pill}"
  pill-wrapped:
    backgroundColor: "{colors.paper-sunken}"
    textColor: "{colors.ink-faint}"
    rounded: "{rounded.pill}"
  pill-building:
    backgroundColor: "{colors.amber-soft}"
    textColor: "{colors.amber-deep}"
    rounded: "{rounded.pill}"
  card:
    backgroundColor: "{colors.paper-raised}"
    rounded: "{rounded.md}"
    padding: "32px"
  spec-grid-cell:
    backgroundColor: "{colors.paper-raised}"
    padding: "24px"
---

# Design System: The Living Spec

## Overview

**Creative North Star: "The Living Spec"**

The site treats a career as a versioned, statused product document rather than a portfolio brochure. Every page opens as if a file had been opened, not a landing page loaded: a metadata strip (`FILE:`, `STATUS:`, `LAST UPDATED:`) sits above the nav on every page, status pills (`Live` / `Shipped` / `Wrapped`) and version tags (`v7.0`, `v6.0`...) recur throughout, and numeric facts are laid out in a bordered mono spec-grid rather than as marketing stat cards. This direction was fixed by the project's own PRD (PRODUCT.md, Positioning section) before the build started — it is a brief-pinned world, not one arrived at through a concept-seed tournament, and the tokens/type/rejections below were set by that brief rather than discovered through exploration.

The palette is paper-and-ink: a warm off-white ground, near-navy ink for text, and two accent hues (amber, teal) reserved for status signaling — never for large fields of color or for direct body text. The system reads as restrained and document-like at rest, with warmth supplied by the fluid type scale, the 1.65 body line-height, and first-person case-study copy rather than by decoration.

**Key Characteristics:**
- Paper ground + ink type + hairline rules, styled like an opened document, not a marketing page.
- IBM Plex Mono reserved for all metadata (labels, dates, tags, status text); Space Grotesk for headings; Inter for reading copy.
- Amber and teal are structural/status accents only; a separate "deep" variant of each exists specifically so they can appear as text.
- Motion is additive only — every animated system (reveal, count-up, progress rail) ships a fully visible, fully functional zero-JS baseline first.
- Exactly one numeric-data visual vocabulary (the bordered `spec-grid`) is reused for both the hero's quick-facts and the animated career stats.

## Colors

Two-tone paper/ink neutrals carry nearly all surface and text; amber and teal are narrow-role accents, each with a "deep" sibling that exists solely to make that accent legible as text.

### Primary
- **Ink** (`#14213D`): primary text color, headings, primary button fill, focus ring, `::selection` background.

### Secondary
- **Amber** (`#C98A2C`): status/decorative accent — "Shipped" status dot and pill background, nav active-link underline, progress-rail gradient, Contact CTA button fill. Never used as text on light paper.
- **Amber-deep** (`#7A4D14`): the text-safe counterpart. Used wherever amber-family text sits on a light surface — active nav link color, "Shipped" pill text, case-study "Approach" label, preview-card footer link, achievement-list markers. Documented contrast: 6.6:1 on paper, 5:1 on amber-soft.
- **Teal** (`#2F6F5E`): status/decorative accent — "Live" status dot, "Live" pill background, progress-rail gradient. Never used as text on light paper.
- **Teal-deep** (`#285F50`): the text-safe counterpart, used for "Live" pill text and the case-study "Outcome" label. Contrast: 6.8:1 on paper, 5.2:1 on teal-soft.

### Neutral
- **Paper** (`#F5F5F1`): page background.
- **Paper-raised** (`#FBFBF9`): elevated surfaces — cards, spec-grid, preview cards, contact items, profile card, condensed-list.
- **Paper-sunken** (`#ECEBE4`): recessed section backgrounds (`.section--sunken`) and the "Wrapped" pill fill.
- **Ink-soft** (`#4A5268`): secondary reading text — subheads, card body copy, hero sub, nav label text.
- **Ink-faint** (`#5A6578`): all mono/muted metadata — meta-strip values, spec-grid labels, version tags, case-study meta dates. Darkened from an earlier `#8890A0` during finish review specifically to clear contrast on `paper`/`paper-raised`; do not lighten it back.
- **Line** (`#D8D6CC`) / **Line-strong** (`#B7B4A6`): hairline dividers and borders throughout (section rules, card borders, table rows); `line-strong` is reserved for emphasis borders (dashed PAO-grid rules, ghost-button borders, visual-placeholder dashed border).

### Named Rules
**The Deep-Variant-For-Text Rule.** `amber` and `teal` are reserved for backgrounds, borders, dots, and gradient fills — never for direct text color on a light surface. Any time amber or teal family color needs to render as legible text, use `amber-deep` or `teal-deep` instead. This split exists because the base hues failed WCAG contrast on paper during finish review; reintroducing base-hue text would reintroduce that failure.

## Typography

**Display Font:** Space Grotesk (with Arial Narrow, sans-serif fallback)
**Body Font:** Inter (with system-ui fallback stack)
**Label/Mono Font:** IBM Plex Mono (with SFMono-Regular, Consolas, monospace fallback)

**Character:** A geometric, slightly condensed display face for headings paired with a neutral humanist body face and a mono face for anything that reads as "metadata" — the pairing is what makes the document conceit legible at a glance.

### Hierarchy
- **Display / H1** (700, `clamp(2.25rem, 1.6rem + 3vw, 3.75rem)`, line-height 1.2): page headline, one per page, capped at 18ch in the hero.
- **Headline / H2** (700, `clamp(1.625rem, 1.4rem + 1vw, 2.125rem)`): section heads.
- **Title / H3** (600, `clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)`): card and subsection titles (`.subhead`).
- **Body-lg** (400, `clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)`, line-height 1.65, max-width 42rem measure): hero sub, section-head paragraphs, prose paragraphs.
- **Body** (400, 1rem, line-height 1.65): default running text.
- **Small** (400, 0.875rem): card/preview-card secondary copy.
- **Label/Mono** (400–600, `clamp(0.6875rem, 0.66rem + 0.1vw, 0.8125rem)`, letter-spacing 0.02em, tabular-nums): every metadata surface — meta-strip, spec-grid labels, pills, tags, version tags, case-study meta, table headers. Uppercase with 0.06–0.1em tracking where it labels a field (`FILE:`, `STATUS:`).

### Named Rules
**The Mono-Is-Metadata Rule.** IBM Plex Mono is used exclusively for data/label/status content (dates, tags, labels, counters, nav links) — never for headings or reading prose. If a piece of text is "information about the page" rather than "the page's content," it renders in mono.

## Layout

Single content column (`--content-max: 76rem`) centered with responsive inline padding (`--sp-5` mobile, `--sp-7` from 760px). Prose and hero copy clamp to a `42rem` measure (`--measure`) for readability regardless of the wider grid. Sections stack vertically, each full-bleed-background with a hairline bottom border (`.section` + `border-bottom: 1px solid var(--line)`), alternating `paper` / `paper-sunken` / `paper-raised` backgrounds to mark section boundaries without shadows.

Spacing runs on a 10-step rem scale from `0.25rem` to `9rem` (`--sp-1`…`--sp-10`), used consistently for section padding (`--sp-9` standard, `--sp-7` tight), card padding (`--sp-6`), and grid gaps (`--sp-4`/`--sp-5`). Grids collapse to a single column below their breakpoint and expand at fixed breakpoints (700px for 3–4 column grids, 900–1024px for two-column sticky-sidebar layouts on About and flagship case studies). No sub-760px breakpoint uses a different column strategy than "collapse to 1."

## Elevation & Depth

The system is flat by default: no ambient drop shadows on cards, buttons, or the header. Depth is conveyed through paper-tone layering (`paper` → `paper-raised` → `paper-sunken`) and 1px hairline borders, not shadow. The one shadow in the system is a soft directional lift used only as a hover response on preview cards (`0 12px 24px -16px rgba(20,33,61,0.25)`), reinforcing that shadow appears on interaction, not at rest.

### Named Rules
**The Flat-At-Rest Rule.** Surfaces are flat and bordered at rest. A shadow may appear only as a hover-state response on an interactive card; it must never be a resting-state property of any surface.

## Shapes

Small, consistent corner radii throughout: `3px` (`--radius-sm`) on buttons, tags, badges, and the nav mark badge; `6px` (`--radius-md`) on larger containers — cards, spec-grid, preview cards, profile card, contact items, condensed-list. Pills (status badges) use full `100px` radius. Borders are 1px hairline by default (`--line`), stepping up to 1.5–2px for emphasis elements (visual-placeholder dashed border, nav-mark badge, profile-card avatar ring). Dashed borders are reserved for two specific "unfinished/placeholder" signals: the PAO-grid rule and the visual-placeholder tile — a dashed line reads as "not final" everywhere it appears, so it should not be used decoratively elsewhere.

## Components

### Buttons
- **Shape:** small radius (3px), never pill or fully square.
- **Primary:** ink background, paper text, 1px ink border; padding `--sp-3 --sp-5`; hover deepens to `#223059`. Used for the single highest-priority action per view (résumé/CTA on hero, Contact page CTA).
- **Ghost:** transparent fill, ink text, `line-strong` border; hover raises border to ink and fills `paper-raised`. Used for secondary actions (résumé download alongside a primary CTA, "see all case studies").
- **Size variant:** `.btn--sm` for header/nav-embedded buttons.
- Interactive buttons in the nav and hero carry `.magnetic` — a small pointer-follow offset (desktop, fine-pointer only, disabled under reduced motion).

### Pills / Status
- **Style:** mono, uppercase, 0.06em tracking, full-pill radius, 1px `currentColor` border, a bullet glyph prefix.
- **Variants:** `pill--live` (teal-soft bg / teal-deep text), `pill--shipped` (amber-soft bg / amber-deep text), `pill--wrapped` (paper-sunken bg / ink-faint text, line-strong border), `pill--building` (amber-soft bg / amber-deep text, same pair as Shipped — building is on the path to shipped, not a new hue — plus an animated pulsing dot in place of the static bullet, `prefers-reduced-motion`-safe). These four statuses map to actual case-study states (Approval OS is the first `building` entry) — do not add a fifth without a corresponding real project state.

### Cards / Containers
- **Corner Style:** 6px radius.
- **Background:** `paper-raised` against a `paper`/`paper-sunken` section, so the card always reads one tone lighter than its section.
- **Shadow Strategy:** none at rest; preview-card gets the one directional hover shadow (see Elevation).
- **Border:** 1px `line`, strengthening to `line-strong` on hover for generic `.card`.
- **Internal Padding:** `--sp-6` (cards), `--sp-5` (spec-grid cells, preview-card sections, contact items).

### The Spec-Grid (signature component)
A bordered, mono-labeled data table used for every numeric or fact-based callout on the site: the hero's "quick spec" (Currently / Owning / Background / Based in) and the animated career-stat counters both render through the identical `.spec-grid` markup and styling — 1–4 column bordered cells on a `paper-raised` background, mono uppercase label above a bold value. There is deliberately no separate "stat card" or "hero metric" component; any future numeric callout should extend this component rather than introduce a new one.

### Navigation
- Sticky header below a 3px scroll-progress rail (teal→amber gradient fill).
- Meta-strip (mono, `FILE:`/`STATUS:`/`LAST UPDATED:`) sits above the nav row on every page, always inside the header.
- Desktop links use mono type with a left-to-right underline wipe on hover/focus (amber, 1.5px) and `amber-deep` text for the active page (`aria-current="page"`), rather than a background pill or bold weight.
- Below 900px, links collapse into a full-width `.mobile-nav` panel toggled by a hamburger with an animated X-morph; nav CTAs (Résumé, Get in touch) move into the mobile panel below a divider.

## Do's and Don'ts

### Do:
- **Do** reserve IBM Plex Mono for metadata/labels/status content only (see The Mono-Is-Metadata Rule).
- **Do** use `amber-deep`/`teal-deep` for any accent-family text on a light surface; use base `amber`/`teal` only for backgrounds, borders, dots, and the progress-rail gradient (The Deep-Variant-For-Text Rule).
- **Do** route any new numeric/stat callout through the existing `.spec-grid` component rather than building a new stat-card pattern.
- **Do** ship every motion-based feature (reveal-on-scroll, count-up, etc.) with a fully visible, fully functional CSS-only baseline that requires no JS, matching `prefers-reduced-motion` behavior already established for reveal, count-up, and magnetic hover.
- **Do** preserve the triple-redundant trigger pattern (IntersectionObserver + manual scroll/resize bounding-rect check + ~2500ms hard timeout fallback) in any future reveal or count-up work; do not simplify it back to IO-only. This exists because a prior build of this exact site shipped content that stayed permanently invisible when IO never fired in a static-rendering context.
- **Do** keep dashed borders limited to the two "not-final/placeholder" signals (PAO-grid rule, visual-placeholder tile).

### Don't:
- **Don't** add a decorative eyebrow/kicker line above headings. An earlier version of the hero had one; it was removed site-wide during finish review as an unconditional anti-pattern. (A `.hero__eyebrow` style still exists in `css/main.css` but is unused by any page — it is dead CSS from that removal, not a component to reinstate or reference.)
- **Don't** use base `amber` or `teal` as a direct text color on `paper`, `paper-raised`, or `paper-sunken` — it fails contrast; use the `-deep` variant.
- **Don't** add a fifth status-pill variant without a real corresponding project status; the four (`live`/`shipped`/`wrapped`/`building`) map to actual case-study states, not decorative options.
- **Don't** introduce a resting-state box-shadow on any card, button, or container; shadow is reserved for the one hover-interaction case on preview cards.

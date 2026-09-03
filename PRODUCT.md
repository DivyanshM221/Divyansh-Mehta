# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/vanilla JS, no framework. Explicitly specified in the source PRD (Section 12.1) to keep load times low and avoid unnecessary build tooling for a 4-page site.

## Users

**Primary:** Hiring managers and recruiters at AI/product companies, scanning on a laptop in an ATS-adjacent workflow, comparing this candidate against 5-10 others in one sitting. Time-poor (3-5 minute skim budget), pattern-matching for signal (metrics, ownership language, clarity) over decoration.

**Secondary:** Founders and operators who found Divyansh via LinkedIn builder-journey content, sizing him up before a conversation. More tolerant of narrative/personality; will read the About page in full.

## Product Purpose

A personal portfolio website for Divyansh Mehta, positioned as an AI Product Manager, that gets him shortlisted for AI/0-to-1 PM roles. It must make his product thinking scannable in under 5 minutes and impressive in under 15. Secondary purpose: a credible link for applications, LinkedIn, and cold outreach.

## Positioning

**"The Living Spec."** Divyansh's job is turning ambiguity into structured documents other people can act on (PRDs). The site is built as a literal extension of that: his career *is* the product, and the site is its spec sheet - versioned, statused, dated, structured - but paced with enough warmth to read as a person, not a template. Every page opens with a metadata strip (`FILE:`, `STATUS:`, `LAST UPDATED:`) as if a document had been opened, not a marketing page. No neighboring PM portfolio (Notion doc, Squarespace template) or generic "immersive" site can truthfully copy this framing, because it's grounded in what Divyansh actually does day to day.

## Operating Context

- Evaluated in an ATS-adjacent recruiting workflow: opened from a resume link, LinkedIn profile, or job application field.
- Recruiter reads on a laptop; founder-audience may read on mobile.
- The résumé PDF and the site's content must stay in sync - a recruiter cross-checking the two against each other is a realistic scenario.
- Site is dropped cold into outreach messages, so individual case studies need stable, linkable anchor URLs (e.g. `/work#scorevedaa`).

## Capabilities and Constraints

- Exactly 4 pages: Home, Work, About, Contact. Work is a single scrollable page with 7 anchor-linked case studies, not 7 separate URLs.
- No CMS, no blog/posts collection, no login walls or gated case studies in v1 (deferred to Phase 2/3, out of scope now).
- No 3D/WebGL. No forced scroll-jacking - Contact and full nav must remain reachable at any scroll position.
- Résumé is a direct PDF download (`/Divyansh_Mehta_Resume.pdf` placeholder path for now, file not yet supplied), linked from Home and nav with no interstitial page.
- Contact page uses direct channels only (email with one-click copy, tel: link, LinkedIn) - explicitly no contact form.
- Open/undecided product facts (do not invent): custom domain DNS access is unconfirmed; analytics tool choice (Plausible vs. alternative vs. skip) is undecided for v1.

## Brand Commitments

- Name: Divyansh Mehta. Positioning line: "AI Product Manager - Pune, India."
- Voice: first person, plain verbs, confident but not inflated ("own," "wrote," "drove," "shipped" - not "spearheaded," "leveraged synergies").
- Every case study leads with the problem, never the solution. Every case study closes with a quantified outcome where a real number exists, and an honestly-scoped outcome (no invented metrics) where it doesn't - credibility over polish is a binding commitment, not a style preference.
- One human, personal detail is deliberately surfaced (background story, basketball/athletics) mainly on the About page, so Home and Work stay tight.

## Evidence on Hand

- Full case study copy for 8 work entries (ScoreVedaa/NeuraMach.AI, Product Space fellowship, Point Of, Arkade Media, Startup Mela/E-Cell, freelance builds for Spectrum Infotech & Securities/VitaMind/Foresight College, and a condensed campus/early-roles list), each with Problem/Approach/Outcome, dates, and status.
- Real, final résumé PDF on file at `Divyansh_Mehta_Resume.pdf` ("New Divyansh Resume", supplied 2026-08-26 and explicitly designated by the user as his final resume - this is now the authoritative source for dates/facts, overriding the earlier CV/LinkedIn export where they disagreed). Point Of and Arkade Media dates on the Work page were corrected to match it (Point Of: Jun 2025 - Nov 2025; Arkade Media: Nov 2023 - Dec 2024).
- Contact email corrected to `divyanshmehta21@gmail.com` site-wide to match this final resume (previously used `divyansh21nov@gmail.com` per the LinkedIn export/old draft - that was the wrong call, now reconciled).
- **Known unresolved discrepancy, not applied to the site:** the final resume lists "General Secretary - The Entrepreneurship Cell" (the Startup Mela role) with dates Dec 2023 - Feb 2024, which exactly duplicates the TTL internship's date row directly above it in the same resume and contradicts three independent sources (LinkedIn export, the old CV, and his own prior design draft) that all place this role in 2024-2025. Almost certainly a copy/paste error in his resume. The site keeps the corroborated Apr 2024 - Feb 2025 and this was flagged to the user rather than silently overwritten.
- Real ScoreVedaa product screenshot in use as the flagship case study's pinned visual (`assets/case-studies/scorevedaa-hero.webp`, sourced from the user's own prior portfolio draft).
- Real, verified contact channels: email `divyanshmehta21@gmail.com`, phone `+91 97667 18233`, LinkedIn `linkedin.com/in/divyansh-mehta-2153182a4`.
- Real certifications, achievements, and skills list from the user's final resume (About page Skills table now mirrors its four categories: Product & Strategy / Growth & Marketing / UX & Tech / Tools) - not the original placeholder generic list.
- Confirmed real company LinkedIn link for Arkade Media: linkedin.com/company/madebyarkade.
- Live client site links for two freelance builds: spectruminfotechs.in, vitaminds.in.
- **Not yet supplied, do not fabricate:** professional headshot (currently a "DM" monogram placeholder; a candid photo of two people exists in the user's old design draft, dropped into a "headshot" slot, but which person is him and whether he wants that photo used is unconfirmed - do not use it without asking), Foresight College of Commerce live URL (a real, similarly-named college site exists publicly but is unconfirmed as his work - do not link it), real traffic/user/conversion metrics for ScoreVedaa or the freelance builds, specifics of what he actually did during the Product Space fellowship (title and dates only are confirmed).

## Product Principles

1. **Process over polish.** Show the thinking (trade-offs, prioritization, how ambiguity was navigated), not just outcomes - this is what separates a portfolio that lands PM offers from one that doesn't.
2. **Scannable first, immersive second.** Borrow scrollytelling's grammar (pinned sections, progressive reveal, purposeful pacing) in service of a 3-5 minute skim, never at its expense. Motion must never gate or delay content.
3. **Honesty over invented metrics.** Where real numbers don't exist yet (ScoreVedaa is in beta), say so plainly rather than manufacturing a number - credibility compounds, a caught fabrication doesn't.
4. **Contact is never more than one click away.** No forced linear "tunnel," no hidden contact info - this is one of the most common self-inflicted wounds in PM portfolios per research.
5. **Fewer pages, not more.** 4 pages with anchor-linked depth beats a page-per-project site; recruiters want fewer clicks to signal, not more surface area to explore.

## Accessibility & Inclusion

- `prefers-reduced-motion` must be fully respected everywhere - all animation (progressive reveal, count-up stats, pinned scroll, smooth-scroll easing, magnetic hover) collapses to instant/none, not just reduced.
- Visible keyboard focus states on every interactive element.
- All text content must be real, server-rendered HTML - never generated only after JS executes (a past build of this same site shipped a bug where content was hidden behind an `IntersectionObserver` gate with no fallback and never became visible without JS; every reveal effect here must ship a working pure-CSS/no-JS baseline first).
- LCP target under 2.5s even with motion features active.

# Journeyletter — site scope (v1)

Founding document, 2026-07-26. Decisions made in the vantage theme-3 dialogue; this doc
is the build-side contract. The publication's editorial rules live in the pieces
themselves (see piece #1's "rules it runs under" section) — this file scopes the *site*.

## Identity

| | |
|---|---|
| Masthead | **Journeyletter** |
| Byline | Tom Murphy (real name, every piece) |
| Publisher | Pezi Labs LLC |
| Audience | Serious agent-builders lacking design/experience judgment |
| Tone | True, not fluff. Field notes, not thought leadership. |
| Signature | Colophon on every piece: stack, agents by name, human's role — structured data, not prose |

## Locked decisions (with reasons)

1. **Masthead: Journeyletter.** Tom's coinage — a new word for a new category, matching
   the label-sidestep strategy. Ownable; means nothing to anyone yet, which is the point.
2. **URL: landing + `/notes/`.** Minimal one-page Pezi Labs front at pezilabs.com root;
   publication at `pezilabs.com/notes/`, pieces at `/notes/<slug>`. Piece URLs never move
   when whr2 ships and the company site grows.
3. **GitHub: new `pezilabs` org, repo `journeyletter`.** LLC assets under the LLC's org,
   separable from personal turphAI — the wall doctrine, applied to GitHub. (Side effect
   worth doing at the same time: give `_company` and `whr2` remotes under the org — they
   currently have NO offsite backup.)
4. **Repo visibility: public.** The receipts ethos applied to the publication itself —
   colophons verifiable against commit history. Safe by construction: drafts live in
   vantage (turph side) until wall-cleared and final; only publishable content ever
   enters this repo.
5. **Stack: Astro, static output.** Markdown-native content collections; zero JS by
   default; RSS nearly free; future pipeline = "agent writes a markdown file and pushes."
6. **Hosting: Vercel**, DNS pointed from DreamHost (domain is registered there; currently
   no DNS records — clean slate, nothing to migrate).

## The colophon as structured data (signature feature)

Each piece is one `.md` in a content collection. The colophon is frontmatter, rendered
into the styled block — and machine-readable across the archive:

```yaml
title: "All of my agents write memos. None of them act."
date: 2026-07-XX
description: "Field notes from handing the visionary role to an AI."
colophon:
  stack: ["Claude Code (Claude Fable 5) · macOS", "vantage repo as working memory"]
  agents:
    - name: "Claude Fable 5"
      role: "surfaced the five directions; drafted and structured from session exhaust"
  human:
    name: "Tom Murphy"
    role: "author of the decisions, editor of the words"
```

Convention: `role` values are full sentences — capitalized first letter, closing period.

This makes the longitudinal experiment queryable: a future `/colophons` page charts the
human role shrinking piece by piece. v1 renders the block; the chart page is v1.1.

## v1 feature set (deliberately small)

- **Landing** (root): one page — Pezi Labs, one paragraph, link to the Journeyletter.
- **`/notes/`**: piece list, reverse-chron, with descriptions.
- **Piece page**: clean reading typography; colophon rendered as a visually distinct
  block at the end.
- **About page**: the four rules (exhaust not authorship · cadence by accumulation ·
  the wall · full transparency), adapted from piece #1.
- **RSS** (`/notes/rss.xml`) — non-negotiable for this audience.
- **Light/dark** via `prefers-color-scheme`.

**Out of scope for v1:** email list, comments, analytics, tags, search, `/colophons`
chart page, and the automated harvest/publish pipeline (pipeline design waits until a
few pieces have shipped manually — the overhead trap guard).

## Build plan

- **Session 1 — scaffold:** Astro project, content collection + colophon schema, base
  layout and typography, piece #1 migrated in, about page, landing page, RSS. Local
  preview.
- **Session 2 — ship:** design pass (Tom), Vercel project + deploy, DreamHost DNS →
  Vercel, publish piece #1, post the LinkedIn companion (manual), vantage graduation
  note finalized.

## Prerequisites — all complete

- [x] **pezilabs** GitHub org created; repo public at github.com/pezilabs/journeyletter.
- [x] Vercel: deployed under the **pezilabs team** scope (LLC-owned).
- [x] DNS: pezilabs.com nameservers → Vercel (ns1/ns2.vercel-dns.com); Vercel manages
      all records + SSL.

## Shipped (2026-07-26)

Live at **https://pezilabs.com** — landing, `/notes/`, piece #1, about, RSS, HTTPS.
Piece #1: `/notes/all-my-agents-write-memos/`.

Still open:
- [ ] Vercel GitHub App on the pezilabs org (web OAuth, Tom) → push-to-deploy. Until
      then, deploys are `vercel deploy --prod` from this repo.
- [ ] LinkedIn companion post (Tom's send — draft in vantage has the live link).

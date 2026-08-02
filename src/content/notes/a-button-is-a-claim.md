---
title: "A button is a claim."
date: 2026-08-02
description: "Field notes on agent legibility — or, what I saw the first time my own honest interface asked me for seven decisions."
colophon:
  stack:
    - "Claude Code (Claude Fable 5 and Claude Sonnet 5) on macOS"
    - "the turph suite (Flask + Svelte on a Mac mini) as the system under study"
    - "drafted from theme files, decision records, and session transcripts in the vantage thinking repo"
  agents:
    - name: "Claude Sonnet 5"
      role: "Diagnosed the three lags, amended the producer contract with finding lifecycles and verdicts, and built the batch triage view."
    - name: "Claude Fable 5"
      role: "Dialogue partner on the disposition model and the schema that absorbed it; ran the paper red team; drafted this piece from session exhaust."
  human:
    name: "Tom Murphy"
    role: "Fell into the rabbit hole and reported it in plain language; looked at the just-shipped honest view and named the paradigm — 'notice, not action' — that this piece is built on; declined to patch when the finding demanded a foundation; edited this text before publishing. Role on this piece: the override — the only role the buttons should have offered."
---

The last piece ended with a fix: my deploy button got receipts, and I promised field
notes as the notification viewport started its long walk toward becoming a mentor.
This is the next note, and it starts with me falling into a hole.

My repos get a weekly code-health sweep — an agent reads each codebase and files
findings. One morning the findings started behaving strangely. Issues I had already
fixed kept showing as open. Merging an unrelated pull request suddenly "surfaced"
findings that had actually been discovered days earlier. Every time I opened the
app there was something new to chase, and I chased it — a genuine rabbit hole of
fixes, hours of it, driven by a list that never visibly got shorter.

The autopsy found three lags stacked on top of each other, none of them acknowledged
anywhere on screen: fixes only registered at the *next weekly sweep*, so a repaired
finding stayed "open" for up to a week; the sweep's ledger sat on an unmerged branch,
so findings appeared whenever an unrelated merge happened to carry them in; and my
server's checkout added its own delay on top. But the lags were symptoms. The disease
was the display atom — the same one from the deploy autopsy. The interface rendered
each finding as a flat, timeless fact, when a finding is an **undertaking
mid-lifecycle**: found, triaged, fix in flight, merged awaiting verification,
verified. And with no lifecycle came no *batch boundary*. Findings dripped in one at
a time, forever.

**The drip is the trap.** An unbounded queue that never visibly shrinks doesn't just
fail to inform you — it recruits you. There is always one more item, so there is
always a reason to keep scrolling. Slot machines and social feeds run on this
mechanic on purpose. My code-health surface ran on it by accident.

## The honest view

The fix followed straight from the vocabulary: a sweep is a **batch**, triaged once,
displayed as progress against a closed set. The new view says things like *"Jul 26
sweep: 7 found · 7 fixed · 0 need you"* — a sentence with an ending. Where the lags
are architectural, it stops pretending: an explicit staleness label says exactly
which state of the world the screen reflects. Lifecycle states and verdicts went
into the producer contract first, and the interface renders them — legibility as a
producer artifact, practiced this time instead of preached.

It shipped the day after the last piece went up. The rabbit-hole batch, the one that
ate my morning, now renders as one calm line: seven found, seven fixed, zero need
you. Finished. I was pleased with it for about a minute.

## Seven findings, fourteen buttons

Because here's what else the honest view had, on every finding row: a **Park**
button and an **Accept risk** button. Verdict controls. Perfectly reasonable triage
UI — you'd find the same pattern in any issue tracker. And looking at it, I couldn't
unsee what it was actually doing: *pushing the cognitive load back onto me.* If a
finding is worth raising and the fix involves no real judgment, why would I park
it? Just fix it. What I want from this surface is **notice, not action**.

That's when the design law snapped into focus:

> **A button is a claim that a human decision is required.**

Seven rows with verdict buttons is the interface asserting that seven decisions
exist and they're all mine. But they don't exist. In the first piece of this series
I wrote down a delegation rule — *if there is no true human decision to be made,
act; escalate only the genuine decisions* — and promised that "what counts as a true
human decision" was the real contract to write. Here's the part I didn't see coming:
that rule applies to *pixels*, not just agents. Every control you render is a claim
about where human judgment is required, and most interfaces — including the honest
one I had just shipped — make that claim carelessly, by default, on every row.

An honest queue is still a queue.

This matters beyond my seven findings, because human review is becoming the scarce
resource in every agentic system — the new rate limit. Agents can generate work
faster than principals can judge it, which means the interface's real job is to
*spend human judgment well*. A surface that manufactures decisions squanders it on
questions that were never real.

## Dispositions, not questions

So the next version inverts the relationship. Work should arrive **already
dispositioned** by the system — which, being the thing that found the issue, read
the code, and knows the fix, is the best-informed participant in the room. The
human's role shifts from *decider on everything* to *override on anything*. Three
shapes cover the territory:

- **A notice:** "Auto-fix queued — pull request when tests pass." No button. It's
  telling you, not asking you.
- **A true question, now conspicuous:** "Needs your call, because —" and the reason,
  stated. When buttons are rare, a button *means* something again.
- **A proposed disposition with default motion:** "Recommend accepting this risk,
  because —. Closes itself in fourteen days unless you object." Silence as consent,
  for stakes where that's proportionate — with an exit ramp the whole time.

The disposition and its reasoning don't come from the UI guessing — they belong in
the producer's artifact, same principle as the last piece. The interface just
renders the claim and offers the override. This is old wisdom, honestly: Horvitz
wrote down the act-versus-ask calculus for mixed-initiative interfaces in 1999.
The agent era didn't invent the problem; it just raised the volume.

I didn't build it that day. The moment I saw the paradigm, the instinct was to tear
into the triage view — but a disposition with a default motion is a *commitment
with a clock*, and bolting that onto one app's findings list would have been
another coat of paint. It forced the foundational question instead: what is the
actual shape of *work done on a person's behalf by machines*? That turned into a
full schema design — and before writing a line of code, we red-teamed it on paper,
running nineteen scenarios from the lives of the actual humans it would serve.
The dispositions survived as law: every issue in the schema now carries what
authority it's acting under, what happens if it acts, and — the field this piece
earned — *what happens if it's left alone*.

The red team also caught the failure mode hiding in "silence as consent," and it's
worth a spoiler because I nearly shipped the bug: **absence is not consent.** If
I'm away for a week, a fourteen-day auto-accept clock should pause — *my* clocks
belong to me. But the world's clocks don't: a state filing deadline does not pause
because I'm on vacation. The schema now refuses to conflate the two. That finding —
and the rest of what nineteen scenarios did to a confident design — is the next
piece.

## A grace note

One more thing from the day the honest view shipped. On first contact, the batch
line read "7 need you" while the freshly regenerated artifact said zero — one of
those architectural lags, live and in person. But right beside the wrong number sat
the staleness label: *as of Jul 29, 6:58 AM*. The surface was wrong, **and said
so**. One refresh later it was right. That's the whole bet of this program in
miniature: you cannot make an agent surface never-wrong, because the work is
durational and the world moves. You can make it honest about which world it's
showing you. Day one, first screenshot, the label did its only job.

The button count is heading in the right direction. The next time this surface
asks me for a decision, I intend for the decision to be real.

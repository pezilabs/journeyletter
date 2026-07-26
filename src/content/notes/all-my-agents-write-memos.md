---
title: "All of my agents write memos. None of them act."
date: 2026-07-26
description: "Field notes from handing the visionary role to an AI — and what it saw in my system that I didn't."
colophon:
  stack:
    - "Claude Code (Claude Fable 5) on macOS"
    - "a git repo of theme files and dialogue as the working memory"
    - "drafted from the actual session transcripts of the conversation described in the piece"
  agents:
    - name: "Claude Fable 5"
      role: "surfaced the five directions; drafted and structured this piece from session exhaust"
  human:
    name: "Tom Murphy"
    role: "asked the turned-table question, answered the delegation questions, made every decision this piece reports, corrected the record where the agent had facts wrong, and edited this text before publishing. Author of the decisions, editor of the words."
---

For most of the past year I've been building a personal agent stack. Not a demo — a
working system my household is gradually learning to run on. A small PWA on a Mac mini, reachable only
over my tailnet, that serves as the consumption layer for everything the stack produces.
Behind it, producer agents: a twice-daily digest that reads my newsletter subscriptions
so I don't have to, repo health checks, research briefs. Three layers — apps, per-app ops
agents, and a manager that synthesizes across them — governed by a written contract that
says exactly what every agent may produce, in what shape, to what location. Producer and
consumer never blur. It's the most disciplined software I've ever built, and I built it
for an audience of one.

Then one evening I turned the tables. Instead of handing the model another task, I asked
it to be the visionary: *you've watched me work for months — tell me what I should be
doing next. No derivative ideas. Ask me questions. Push.*

The first thing it said back stung:

> You built a personal intelligence agency where all the analysts write memos and nobody
> has authority to act.

It was right. I had casually thought about this but was not sure I was ready or capable of doing it. Every agent in my stack — every carefully contracted,
supervised, health-checked one of them — terminates in a briefing. Something for me to
read. I had automated the production of information and kept 100% of the action for
myself, and I'd done it so systematically that the limitation was invisible. It wasn't a
gap in the roadmap. It was the *architecture*: a read-only relationship with my own
workforce.

## What came back when I stopped assigning tasks

The model laid out five directions. Two of them touch parts of my life personal enough
that they stay behind a wall I'll describe below. The three I can share:

**Cross the delegation frontier deliberately.** Stop adding analysts; start granting
authority. Not by handing an agent my inbox and hoping — by writing a delegation policy
the same way I'd written the artifact contract: what an agent may do on its own, what it
must escrow for approval, what it must log as a receipt.

**Build the corpus that outlives every model.** Models keep changing underneath us. What
compounds is the accumulated record of decisions, preferences, and reasoning — structured
so the *next* model becomes yours in minutes instead of months. The moat isn't the
tooling. It's the corpus.

**Turn the work itself into a public body of work.** The one you're reading.

## The question that found the real boundary

The exchange that followed produced the most useful design insight I've had in months,
and it came from answering one question honestly: *what would you let an agent do without
asking — and what would you never delegate?*

The first half was easy. Code-health fixes: anything in my repos' maintenance queues that
involves no genuine human decision, just do it. It's the perfect starting rung — every
action an agent takes there is a git commit, which means every action is automatically
receipted and automatically reversible. If you're looking for your own first delegation,
look for the domain where the receipts and the undo already exist.

The second half is where it got interesting. My instinctive "never" was paying bills. But
when I wrote down *why*, it wasn't distrust of the agent — it was that my everyday
banking sits structurally close to accounts I genuinely cannot afford to have touched.
The risk wasn't the agent's judgment. It was the blast radius of the surface I'd be
handing it. Which means the fix isn't "wait for models to get more trustworthy." The fix
is architectural: isolate the surfaces, then delegate freely inside the contained zone. I
had been thinking about delegation as a trust problem when it was an infrastructure
problem.

That became the first written rule of my delegation policy:

> **An agent never gets a surface whose failure mode touches what you can't afford to
> lose. Expand the frontier by isolating blast radii, not by trusting harder.**

The second rule fell out of the code-fix decision:

> **If there is no true human decision to be made, act. Escalate only the genuine
> decisions.** (Which quietly makes "what counts as a true human decision" the real
> contract to write — that's a future piece.)

And underneath both, a north star that I said out loud for the first time in that
conversation: I believe that within a few years the vast majority of sending and deciding
can be offloaded to systems. The durable human work is **mentoring, not managing** —
building the rules and harnesses, then spending attention only on the variants and drift
the harness didn't anticipate. If that's the end state, then every approval queue I build
today is scaffolding, and I should design it to be dismantled.

## This publication is the third recommendation, executing itself

Here's the part I find genuinely fun. This piece — and the ones that will follow — is the
"public body of work" direction, running as designed: an agent-operated publication about
learning to operate agents.

The rules it runs under:

**Exhaust, not authorship.** I never sit down to "write a post." I work; the agent
harvests the exhaust — repo history, decision records, the transcripts of conversations
like the one above — and tells me when there's a piece worth making. A publication that
demands homework from its author dies. This one is a consumer of byproducts, same as
every other consumer in my stack.

**Cadence by accumulation.** It publishes when there's something real, not on a calendar.
No filler, ever. If you don't hear from this publication, nothing worth your time
happened.

**The wall.** Patterns, struggles, and learnings cross into these pieces. Personal data
never does — health, family, finances stay categorically behind the wall, filtered out at
the harvest stage before a draft even exists, no matter how good the story would be.
Field notes, not oversharing. You'll occasionally see the wall's outline (like the two
directions I didn't describe above); that's it working.

**Full transparency, every time.** Every piece ends with a colophon naming the stack, the
agents that did the work, and exactly what the human did. Over time, those colophons will
tell their own story: you'll watch my role shrink from author to editor to mentor, piece
by piece, with receipts. I know of no other way to write honestly about delegation than
to practice it in public.

That last convention is the real experiment. Plenty of people write *about* agentic
systems. This publication is *run as one*, and the colophons are the longitudinal data.

More field notes soon — first up, most likely: giving an agent standing authority to fix
things, and the judgment contract that decides what it may touch.

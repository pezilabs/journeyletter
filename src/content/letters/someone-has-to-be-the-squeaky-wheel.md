---
title: "Someone has to be the squeaky wheel."
date: 2026-08-18
description: "A letter on why I'm building a dedicated skeptic into my agent workflow — and what happens when nobody's assigned to doubt the green checkmark."
colophon:
  stack:
    - "Claude Code (Claude Sonnet 5) on macOS"
    - "drafted by hand in turphVoice, structured and edited from that draft"
  agents:
    - name: "Claude Sonnet 5"
      role: "Structured the draft into the piece, tightened prose, and grounded the hand-fix section in a real example from turphOps journal 007."
  human:
    name: "Tom Murphy"
    role: "Wrote the draft this piece is built from — the argument, the examples, the voice — start to finish, by hand, before any agent touched it."
---

I spent most of my career as a squeaky wheel. Not the political kind — not org-chart
maneuvering, not the usual reasons people earn that reputation. I was vocal about a
narrower thing: customer experiences built thin, and the flow gaps we shipped anyway.
Anyone who's built software has lived this. You gear up to solve something that
theoretically matters a great deal, and then you release to prod because a milestone
hit, or the team is exhausted, or everyone just wants the project to end.

Product grumbled. Development grumbled. UX grumbled. Each group had real concerns —
some voiced, some swallowed. Each, looking through its own lens, could see that
something wasn't right. But the process was rigid enough, and the responsibilities
split enough, that you were simultaneously accountable for the outcome and powerless
to stop it.

Now I'm working differently — agents doing the actual construction — and the same
failure is back, wearing a different coat. The question I keep landing on: how do I
inject that adversarial voice back into a system that, left alone, would rather just
agree with me?

## The false-success trap

When I'm planning and scoping with an LLM, it's easy to go with the flow and push
back only lightly. You get numb to reading the claude-speak, and you start accepting
outputs and recommendations closer to face value than you should. That compounds the
moment we pivot to actually building — especially as more of the construction gets
offloaded to automated agentic systems. The agent reports it's done. The metric looks
green. But the underlying goal wasn't actually met.

That's the trap: not quite a bug, and not a lie either. Just a report that agrees
with itself.

## Why agents are especially prone to it

Agents are built to predict the average — the next logical step, not necessarily the
correct one. Most of the time the output isn't outright wrong. It's just rarely fully
right, and there's no mechanism inside the loop that flags the gap between the two.
Reward hacking, confirmation loops, the distance between a proxy measure and the real
outcome — these are structural, not incidental. Autonomy amplifies the problem the
moment nobody's checking: the more of the loop you hand over, the fewer places a
mismatch has to surface before it gets called "done."

## The hand-fix moment

I catch this most often on the experience layer — a flow that's off, a component
that's off, data that's off. At first I don't notice, because I'm still in the "oh,
cool" moment of watching something get built fast. But the quirks surface slowly,
and then I'm back in the old job: investigating, untangling, writing instructions to
push back and query. Being the squeaky wheel again, except now the org chart is a
context window.

A recent, concrete version of this: a code-health sweep on one of my repos flagged
three findings, and I ended up fixing all three by hand after pasting them into a
session myself. Asked afterward whether that loop actually needed a human, the
honest answer was no — all three were mechanically diagnosable and fixable straight
from the repo. Nothing about them required judgment. They just hadn't been caught by
anything running ahead of me. That's the gap exactly: not that the agent was wrong,
but that nothing in the loop was assigned to doubt it before I was.

## The skeptical layer

So I started asking: what if there were a dedicated layer in my process whose whole
job is to be the adversarial agent? An always-on tool watching my design journals,
plans, specs, and code — someone with the standing to push back throughout the
journey, and the authority to actually stop the process.

### What a built-in skeptic actually does

It's a second perspective inside the system, one whose job is to interrogate the
success signal instead of trusting it. Mine is thin right now — but every time I
catch something by hand, that's a case I can feed back into it. Why did this happen?
What did the primary process miss? How do I tune this so it catches the same pattern
upstream, in real time, next time?

### Design principles for the skeptic layer

A few things I think have to be true for this to actually work, not just exist:

- **It fires on commit.** Right when we've just finished a body of work and feel good
  about it — that's exactly the moment to inject the challenge, before the good
  feeling hardens into "done."
- **It checks the work, not the vibe.** Its purpose is to question, to offer
  alternatives, to say plainly when something goes against established guidelines
  or rules.
- **It resists becoming a rubber stamp.** Its reward isn't agreement — it's whether
  it actually fired, actually elicited a change, actually altered the course of
  something. A skeptic that never changes an outcome isn't adversarial, it's
  ceremonial.

I don't have a clean answer yet for what makes a skeptic genuinely adversarial
instead of theater. That's the open question I'm building toward, not one I've
solved by naming it.

## Why it matters to me

I'm not a developer, but I play one, because these tools give me the power to act
like one. I can get stuff done. What I struggle with is knowing whether what I'm
making is actually good — solid, responsible — and that's true for Product,
Development, and UX alike, not just for me.

Like I said at the top: it's too easy to keep accepting the recommendations. Think,
plan, do — commit, merge, push. I can feel myself building an echo chamber, a
rubber-stamp process, in the rush to see my own ideas turn real.

As I hand agents more autonomy — let them take on higher-stakes work — accepting on
faith stops being an option. Blowing away a hobby repo and its data would suck, but
it would just be a bad afternoon. As this work gets bigger and more consequential,
the real-world harm that follows from undetected false success stops being
theoretical. The 2026 deployment wave is what makes this urgent instead of
hypothetical — and, if I'm honest, what makes it exciting and a little frightening
at the same time.

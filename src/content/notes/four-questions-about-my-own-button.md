---
title: "I couldn't answer four questions about my own button."
date: 2026-07-28
description: "Field notes on agent legibility — or, the day I tapped a control I built and had no idea what I was executing."
colophon:
  stack:
    - "Claude Code (Claude Fable 5 and Claude Sonnet 5) on macOS"
    - "the turph suite (Flask + Svelte on a Mac mini) as the system under autopsy"
    - "drafted from session transcripts, git history, and the bug report the author filed in plain frustration"
  agents:
    - name: "Claude Sonnet 5"
      role: "Built the deploy action and, on report of the confusion, diagnosed and shipped the receipts fix."
    - name: "Claude Fable 5"
      role: "Developed the legibility framing in dialogue and drafted this piece from session exhaust."
  human:
    name: "Tom Murphy"
    role: "Tapped the button, got lost, said so in plain language — the paragraph of confusion that seeded this piece; set the direction (mentor viewport, not dashboard); made every judgment this piece reports; edited this text before publishing. Role on this piece: the principal — which turned out to be the qualification."
---

Last week I gave an agent standing authority to deploy one of my apps. Not
hypothetically: a declared action in a written contract, a poller on my server picking
up intents every sixty seconds, receipts logged, the works. My phone showed a button —
**Deploy latest** — with a confirmation prompt I'd approved word by word.

I tapped it. I got a message. I went to the home screen to see the result — nothing. I
went back — same issue list, same idle button, no trace anything had happened. And
somewhere in there I noticed the actual state of my mind: *I have no idea what I just
executed.* What ran? Why did it need to run? How long should it take? What did it
touch? The bedrock questions of any interface — what, why, when, where — and I couldn't
answer one of them.

Here's the part that makes this a field note instead of a gripe: **I built every layer
of this system.** The contract, the action, the poller, the button. If anyone on earth
should have been able to read that screen, it was me. The deploy, for the record, had
worked perfectly — filed, executed, verified, receipted, all within seconds. The system
did its job. The interface erased the evidence: the success state lived only in that
one page-visit's memory, and the confirmation message pointed me to a screen that
didn't exist. My agent had acted competently on my behalf, and the surface I'd given it
made competence indistinguishable from silence.

## Observability is for debuggers. Principals need something else.

Every "look inside the agent" surface I've used has the same shape: traces, spans,
event streams, spinning indicators. A Splunk dashboard. And I've come to think the
problem isn't execution quality — some of these are well-built — it's that they answer
the wrong question for the wrong person.

Engineering observability answers *"what is the system doing?"* It exists for
**debuggers** — people whose job is the system itself, who happily pay the cost of
assembling raw events into meaning. But the person delegating work to an agent is not a
debugger. They're a **principal**, and their question is different: *"what is being
done on my behalf, what does it mean, and where do I fit?"* Call that property
**legibility**. Products keep shipping observability to principals because the people
building them are debuggers, and they surfaced the view they themselves needed. The
cognitive overload you feel watching an agent dashboard is real work — it's you doing,
by hand, the meaning-assembly the interface declined to do.

The tell is the unit of display. Telemetry's atom is the *event* — the exhaust of
computation. But principals don't reason in events; they reason in commitments and
outcomes. The atom of a legible surface is something more like an **undertaking**: what
was committed to, under what authority, where it stands against its milestones, the
next moment that needs a human, and the receipt when it's done.

## Nobody watches the truck

Agent work has a property almost nothing else in our interfaces has: it takes *time*.
Minutes, hours, sometimes days. And nearly every UI convention we own assumes *instant*
— request, response, done. Sitting a human in front of a live dashboard to watch
durational work is a category error.

But durational work is a solved interface problem — just not in software-for-software
land. Your package tracker doesn't show you engine telemetry; it shows **milestones** —
shipped, out for delivery, delivered — notifies you on state change, and gives you a
durable page to check whenever *you* want. Nobody watches the truck. Domino's built its
pizza tracker in 2008 for exactly this reason: not to entertain anyone, but to stop
customers phoning the store mid-bake for a status the kitchen could only vaguely give.
Milestones absorb the anxiety that live-watching would otherwise have to serve. And the best
agent-work interface ever shipped wasn't designed as one: the **pull request** — a
durable artifact that accumulates evidence over days, holds its state while you're
gone, and has the human moment (review) built into its lifecycle rather than bolted on.
There's a reason every background-coding-agent product has converged on delivering work
as PRs.

That's the design law my button broke: *milestone semantics, notification on state
change, a durable artifact you can return to — never live watching.* I left the page
and came back, which is exactly what a durational interface should expect me to do, and
it punished me for it.

## The finding that stung: the system already knew all the answers

When I autopsied the button, I expected to find missing information. I found the
opposite. Every bedrock question had an answer *already sitting in the contract*:

- **What?** The action's declaration describes exactly what the deploy runs.
- **Why?** The health monitor knew the server's checkout was behind.
- **Where — what's the blast radius?** The contract literally carries a declared
  reversibility class on every action — `read_only`, `reversible`, or one-way door —
  put there, per its own documentation, *"so the consumer can reason about
  delegation."*
- **What happened?** The receipt was written to disk seconds after the run.

The interface rendered none of it. One sentence of description and a bare button. The
data layer of my system was more honest than its presentation layer — which suggests
the failure mode for this whole product category: we've been treating legibility as a
UI afterthought, something a dashboard team sprinkles on top of the agent
infrastructure. It has to be the reverse.

## Legibility is a producer artifact

Here's the principle I'm carrying forward, and the thing I'd tell anyone building agent
products: the agent system is the smartest participant in the conversation. It does not
need a UI team to guess at explaining it — it needs to be *required to explain itself*,
as a first-class output, in the same contract that governs its actions and artifacts.
Every action declares its blast radius. Every undertaking carries its milestones and
its next-human-moment. Every receipt ships with its own explanation — and at more than
one altitude, because the person reading it might be me today and someone entirely
non-technical tomorrow. Same honest artifact, multiple renderings.

Do that, and the interface's job collapses from *reconstructing* what the agent did
into merely *rendering* what the agent already said about itself. That's a job
interfaces are actually good at.

I've started paying this down in my own stack — the button now sits above a persistent
"recent activity" section fed by the agent's own receipts, so leaving and returning
shows you what happened instead of erasing it. A small patch. The real work is ahead:
turning a notification viewport into something closer to a mentor — an interface that
gives a capable system room to work, and gives the human an honest, calm account of
what's being done in their name. Field notes to follow as that takes shape.

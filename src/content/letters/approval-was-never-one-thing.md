---
title: "Approval was never one thing."
date: 2026-08-19
description: "A letter on building my own Steward to slowly earn the trust to use it, and what Intercom's real PR-approval experiment taught me about what 'approval' actually means."
colophon:
  stack:
    - "Claude Code (Claude Sonnet 5) on macOS"
    - "drafted by hand in turphVoice, structured and edited from that draft"
  agents:
    - name: "Claude Sonnet 5"
      role: "Structured the draft into the piece, grounded the approval-mechanics section in Intercom's own published account of their system, and, per Tom's correction mid-review, replaced every reference to his own project's misremembered name with its real one, the Steward."
  human:
    name: "Tom Murphy"
    role: "Wrote the draft this piece is built from: the argument, the examples, the voice, start to finish, by hand, before any agent touched it. Caught and corrected a naming mix-up on his own project during review."
---

There's an unwritten rule that designers are bad at repository management. Over the
years I've started and stopped trying to get better at it more times than I can count,
and it never stuck. I could blame the jobs that didn't require it, or the design teams
that never pushed it, but honestly, it falls on me for not staying current. The one
thing that did stick: a basic, functional sense of why repositories matter and how they
work.

Now that I'm vibe coding daily, running several projects at once and occasionally
working with others, I've had to brush that knowledge off and wade back in. This time
it's different. No more wrestling with command lines, no cheat sheets taped to the
monitor, no hours lost Googling how to undo whatever I just broke.

IDEs and the Claude Code app removed all that mental juggling, and it's genuinely
amazing. Commit, PR, land. It reminds me about open PRs, trims stale branches, keeps me
on main, warns me before I break something. Liberating, but I noticed a side effect: it
was so good that I quickly became a passive approver. That's what got me asking whether
I could start handing an agent real authority over this work, slowly.

## Building the Steward

The plan is to move gradually toward more automation, but full trust hasn't been earned
yet, not from me. I want to stay involved, not just for control but for the learning.
Reading about how Intercom actually built their own approval system is what pushed me
to try building a version of it for myself. Working with Claude in a design journal, we
talked through what trust and responsibility actually mean here, and sketched a ladder:
find small, repetitive tasks that are easy to reverse if they go wrong, let an agent
handle those first, watch what happens over time, and only then look for more to add to
the list.

We named it the Steward — a name that fit the actual job: responsible oversight,
careful handling, authority that grows only as trust does. It's early. The tasks it's
cleared for are neither frequent nor exciting, which is understandable and a little
frustrating; of course I want to just go, hand over full trust, but this isn't that
kind of situation. It's going to take a long time before I'm comfortable being hands
off, and right now I'm not seeing much change in my day-to-day since what it picks up
is small and rare.

One piece of this already lives in my CEO view: a display of how many actions the
human is taking versus how many the system is. It's real data, wired to what's actually
happening, not a mockup. I won't just feel the work get offloaded over time. I'll be
able to watch it happen.

## Why This Moment, Not Six Months Ago

As I said, the tools today, and the model capability behind them, are what made AI PR
approval feel viable now, not six months ago. For the work I do and the complexity I'm
working at, accepting the recommendation and hitting the button has been close to
error-free. When something does go wrong, Claude reports the issue and fixes it.

That track record, built up session after session, is what led me to decide I could
start being more hands-off.

## What 'Approval' Actually Means

Intercom's approval does more than the word "approval" lets on. Their agent breaks the
review into pieces: does the diff match what the PR claims to do, is the logic correct,
does it follow the team's own conventions, does anything look unsafe. In one case it
caught a one-line text change that quietly contradicted validation logic sitting
somewhere else in the codebase. That's not a syntax check. That's tracing a consequence
through a system, and it's something I doubt I'd catch myself.

So here's the question I had to ask myself: when I approve something Claude builds for
me, what am I actually checking? Some sessions the honest answer is "does it run, does
it look right" — closer to what Intercom's own writeup calls human review's actual
baseline: "a useful heuristic, but one with real limitations." I'm not tracing
execution paths. I don't have the training to know what I'd even be tracing them for.

Intercom's system also knows its own limits. It won't approve a PR that's too big or
too tangled; when that happens, the rules force the change to get broken down first.
And even with the AI's sign-off, someone still has to watch the thing go live, ready to
roll it back. Approval didn't erase that job. It just never touched it.

That's the layer I think actually matters here, more than "is the AI as good as a
senior designer or engineer." Approval was never one thing. It's syntax, and it's
intent, and it's whether anyone is still watching after the merge button gets pressed.
Intercom's AI covers more of that stack than I expected going in. It doesn't cover all
of it. Neither, most days, do I.

## The Code Ownership Question

I fully expect the Steward to merge bugs. That's inevitable. But let's be realistic: I
merge bugs in a fully manual system today too. If something breaks, that's ultimately
on me either way. What's different now is that when it does break, there's a place for
the postmortem to go, a path for the learning loop to actually inform the next
decision.

This was never really about "ownership," especially about owning bad outcomes. Our
systems and tools are a long way from perfect, so until they are, the job is to manage
risk: start small, reduce the blast radius, hand over authority slowly, and earn the
trust as you go.

## Risks the Experiment Doesn't Surface Yet

Everything, honestly. This whole thing is an experiment in learning, and I have to be
realistic that my volume of work is low, which makes learning from it slow. Any
experiment needs volume and time to mean something, so it's a real balance, and a bit
of a headache: whitelist too little and there's no risk, but no signal either;
whitelist too much and I've outrun what I actually trust.

I built the Steward hoping it would reduce my load. The open question is whether it's
doing the opposite: accumulating technical debt, becoming another system I have to
monitor and maintain, for a payoff too small to justify it. Am I chasing the right
problems, or heading straight into edge-case blindness?

The plan is to keep moving up the ladder as trust earns it, letting the Steward take on
more on its own. My real worry is that the low volume and complexity of my work makes
it hard to even identify what's safe to automate next. The upside: as model capability
keeps improving, maybe it meets me in the middle.

## What to Actually Take Away

As I said, the Steward is still in its infancy. What it's giving me is a controlled way
to actually experiment with real agent automation, instead of jumping on whatever hype
machine is loudest this month and accepting a black box because everyone else is. The
goal was to build one thing that adds real value, in an area where my own skill is
limited but the need is real.

The framework, the learning cycles, the missteps and the challenges: I know those will
carry over. The Steward won't be the only autonomous system I build. I'm looking
forward to watching that count of machine-completed tasks tick up over time.

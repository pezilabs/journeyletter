---
title: "The fix was done. The record said it wasn't."
date: 2026-10-05
description: "A short field note on the quiet failure: real work a system finished but never wrote down."
colophon:
  stack:
    - "Claude Code (Claude Opus 5.5) on macOS"
    - "the turph suite (Flask + Svelte on a Mac mini) as the system under study"
    - "drafted from the session transcript of the repair this note describes"
  agents:
    - name: "Claude Opus 5.5"
      role: "Traced the stuck records to their cause, shipped the fix in four repos, wrote and verified the one-time repair, and drafted this note from session exhaust."
  human:
    name: "Tom Murphy"
    role: "Went looking for fixes stuck mid-lifecycle, approved each step of the repair, ran the backfill by hand, and asked for this note."
---

In August I wrote about a code-health surface that wouldn't stop dripping findings at
me, and the fix: treat each finding as an undertaking with a lifecycle that ends. The
[honest view](https://pezilabs.com/notes/a-button-is-a-claim/) now closes each weekly
sweep with a sentence like *7 found · 7 fixed · 0 need you.*

That view is only as honest as the record underneath it. This week I found a hole in
the record.

## What was hiding

Every fix in my system carries a short history. When a fix lands, it gets stamped
"worked." A week later the sweep looks again, and if the problem is gone it adds the
stamp that matters: "confirmed, held." The fixer says it's fixed. Someone else checks
and agrees. Only then is it done.

Forty fixes were sitting at "worked." All forty were real. The sweep had looked, found
every problem gone, and marked them resolved in its own list. It just never wrote the
confirmation onto the fixes themselves.

The cause was one missing line. Six of my ten repos had it. Four had been set up from an
older pattern without it. No error, no alert. A missing signal makes no noise.

## Why it isn't harmless

My [squeaky-wheel letter](https://pezilabs.com/letters/someone-has-to-be-the-squeaky-wheel/)
argued for a built-in skeptic, because agents claim success they haven't earned. This
is the mirror image: a system hiding success it did earn. It sounds harmless, since the
work is done either way.

It isn't. A record that under-reports teaches you to double-check it, and a record you
double-check has stopped doing its job. Done work that looks undone gets re-checked and
sometimes redone. More of my system now acts on a single tap from my phone, and the
record of what held is the only memory it has.

## The repair

The fix went in first, with a test in each repo that failed until it passed. Then a
one-time script backfilled the forty, and it was built to be distrusted. It printed its
plan before changing anything, refused to run on stale data, and was checked afterward:
only the forty changed, each by one stamp.

The stale-data rule earned its keep straight away. One server copy was three commits
behind. Run against it, the repair would have found 8 of that repo's 12 stuck fixes and
called the job done. A false success, hiding inside the fix for a false failure.

What I'm keeping from this: when you audit a system, don't only ask what it claims. Ask
what it should be saying and isn't.

---
number: 3
title: "Whr2"
summary: "Helps a couple decide where to live next by ruling places out, together."
line: household
for: "A couple deciding where to live next"
status: productizing
stack: ["Ollama, a local AI model", "Plain files, no database"]
published: 2026-10-04
---

## The need

Deciding where to live next is one of the biggest calls a household makes, and the tools for
it are thin. The space belongs to "best places to retire" lists and financial calculators.
Neither knows anything about you.

When two people decide together, the hard part usually isn't the data. It's that they want
different things, and the quieter partner's preferences tend to get lost in the conversation.

## What I built

A decision tool that works by ruling places out instead of ranking them. You set what matters
(care nearby, taxes on retirement income, distance from family, climate, cost of living on a
fixed income) and watch the list of places narrow.

The version I'm designing for couples takes each partner's preferences separately, in private,
before merging them. Then it shows where they already agree, which is usually most of it, and
prices each person's position in places given up. Insist on living within two hours of the
grandkids and most of the warm, affordable places drop out. Relax it to three hours and some
come back that you'd both rate highly. It never picks for them. It makes the trade-off visible.

## What changed

The household version, called ReLo, does the ruling-out well enough that the bigger question
became worth asking. Whr2 is the product built from it, for people who have just retired and
are asking where to live next. It's at the research stage: a first round of conversations with
recently retired couples is being planned before any of the product is built.

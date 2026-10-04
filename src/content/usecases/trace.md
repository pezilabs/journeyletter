---
title: "Trace"
summary: "A private health record that keeps the whole story of a long-term condition in one place."
line: household
for: "A family member managing a long-term condition"
status: productizing
stack: ["Flask", "Svelte", "A local AI model"]
published: 2026-10-03
---

## The need

Someone in my family manages a long-term condition. Their health story was scattered.
Documents sat in patient portals. Medication changes lived on pill bottles and in memory.
Symptoms were barely written down at all.

Then, in a short appointment, the doctor would ask why a medication had been stopped, and
nobody could remember. A symptom means little without knowing what was being taken at the
time, and that's exactly the detail memory loses first.

## What I built

A health record kept by the person it's about, built around one idea: nothing is recorded
alone. Every medication change carries its reason. Every symptom note is stamped with what
was being taken at that moment. Documents link to the events they describe.

Adding to it happens in plain words, not forms. Questions get answered from the record
itself, privately, without handing a health history to an outside AI company. It doesn't
diagnose anything. It makes sure the history comes to the appointment.

## What changed

It works, and it's in real use today. Then people who saw it started asking whether it would
work for their condition too. That question is why it's becoming a product, called Trace.
Trace is in research now: I'm talking with people who manage long-term conditions before
building the version meant for them.

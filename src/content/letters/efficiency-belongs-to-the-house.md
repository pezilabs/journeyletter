---
title: "Efficiency belongs to the house, not the box."
date: 2026-10-02
description: "A letter on what two years of thermostat data and a stack of utility bills taught me about the machines in my basement, and why efficiency only makes sense for the whole system."
colophon:
  stack:
    - "Claude Code (Claude Sonnet 5.5) on macOS"
    - "drafted by hand in turphVoice, structured and edited from that draft"
  agents:
    - name: "Claude Sonnet 5.5"
      role: "Structured the draft into the piece, tightened prose, and grounded the data claims in the output of the heating report and the utility bills."
  human:
    name: "Tom Murphy"
    role: "Wrote the draft this piece is built from: the argument, the examples, the voice, start to finish, by hand, before any agent touched it."
---

My house is a climate system made of several devices. Each device takes in an energy
product and puts out part of the result: heat, hot water, cool air. Almost nobody
understands the machines doing that work inside their own home, and I didn't either until
I started looking.

While this letter is about my climate system, the same concepts hold true for business
processes and systems. As you read, think about your own job and how you use your system
data. Are you using it to optimize inputs and efficiencies against the output you
actually want?

## It started with solar

I came to this sideways. I wanted to know whether adding solar to the house made economic
sense. It doesn't. But to answer the question I first had to know how much energy the
house uses, when, and for what, and I realized I couldn't say. I could read a bill. I
couldn't explain one.

## What I thought I knew

The house has a gas-fed furnace, a hot water tank, a mini split, and a wood-burning
insert in an existing fireplace. The furnace heats water, which runs through a three-zone
forced hot water loop to radiators throughout the house, and each zone has its own Nest
thermostat. (Strictly speaking that makes it a boiler. I'll keep calling it the furnace,
because that's what everyone in the house calls it.) The tank is a fourth zone on the same
furnace, so one machine both heats the house and makes the household's hot water. The
mini split is electric and cools the main living area. It runs off a remote, not a
thermostat, and we use it only on the hottest days and nights. The insert sits in the
basement living space and is for special occasions. We don't burn wood to offset other
energy.

Like most people, we don't think much about any of it. When we're cold, we deal with the
Nest app or a thermometer. When we're hot, we click the remote. We turn on a faucet and
expect hot water. We think about these machines when they break or need their yearly
service, and we complain when a bill arrives and wonder why it's so high. We pay and
enjoy the conveniences until something fails, and then it's catastrophic and we go into
panic mode.

I also believed, without ever checking, that the furnace was newer, the right type of
device, and sized well for the house. So I started with the data to see whether that held
up.

## Putting it together

I had multiple inputs and multiple bills, and I had never looked at them together. I had
more than a year of utility bills with usage data in my application. Then I pulled two
years of 15-minute zone records from the Nest thermostats. For the first time I could see
the rhythms and demands of the system.

The two main bills turned out to tell very different stories. Over the twelve months
ending in May, gas cost me about $2,200 and swung from 25 therms in August to over 200 in
January. Electricity cost about $1,250 and barely moved, between roughly 320 and 460 kWh a
month all year. Electricity is more than a third of what I spend on energy, and it
arrives as a flat floor under the seasonal gas curve. The two bills come from different
companies that know nothing about each other.

The gas data also showed a base load. Even in the warm months, with no heat called, the
house burns 25 to 35 therms a month. That is most likely the hot water tank, the
furnace's other job, running every day of the year.

Inside the heating itself, it seems logical that the main floor zone does the most work.
I never understood that it does more than half of it. In the 2025-26 season it accounted
for 54% of all the hours the house called for heat.

## The days the furnace stopped

The part I didn't expect was in the odd days. The report flagged ten cold days where the
heating barely ran. I had never told it about the fireplace insert, and I can't prove the
insert is the reason. We don't log when we light a fire, so there is no record to check.
It is my best guess, and one of the ten dates is Thanksgiving.

If it is the insert, it says something I would never have guessed. I expected the
basement, where the insert lives, to need little heat on those days. I did not expect the
upstairs to go quiet as well. One source of heat appears to have replaced another for a
stretch of time, across the whole house.

It also puts the insert in proportion. Those ten days displaced about 27 therms of gas
over two winters. Whatever caused them changes what the house does on the day, but it
barely moves the bill. The gap in my own data is the lesson here: I can see the furnace
stop, and I can't see the fire that may have made it stop. Logging fire days is the
obvious next addition.

## The wrong question

By this point, the question I had been asking, how efficient is each device, was starting
to look like the wrong one. The efficiency of an individual device means very little to
the whole. It matters that a device can turn an energy source into an output efficiently.
But a highly efficient device used poorly inside a system still compromises the output.

That brought me back to the furnace I thought I understood. It turns out to be only
partly what I assumed. It works fine, and it does its job, but the data shows plenty of
headroom. On the coldest days, under 10°F, the busiest zone calls for heat about six hours
out of twenty-four. Of the time that any zone is calling for heat, two or more zones call
together only 22% of the time. The furnace isn't failing. It simply has far more capacity
than the house asks of it, which turns "does it handle the load" into "how much of its
capacity do we ever use."

## Replacing a system, not a box

That changes how I think about replacement, which was the part we never thought about at
all. I couldn't tell you how old these devices are or how long they should last. My plan,
if something failed, was to put back whatever had been there or follow a tradesperson's
recommendation on the spot. Making a large decision that affects both long-term finances
and comfort, with no data and no plan, is clearly the worst case.

Now I can start to see what it means to upgrade the house as a system, based on how we
actually use it. The furnace, the tank, the mini split and the insert should work
together, sized and timed for the job each one has. Right-sizing is a whole-house
question, and my replacement options are still a work in progress.

## Watching the system

I could add sensors to each device, but the first priority is an application that tracks
inputs and outputs across the whole house. That means understanding the scope of the
problem and building a plan for both the near and long term. The heating report I ran for
this piece is a snapshot of the past. A live logger now runs every minute and feeds the
same analysis, so a problem can show up as a change in the data instead of a surprise in
January.

## Back to your system

The house taught me this, but the conversations that followed were about work. With
friends, we started talking about how broken our UX processes are. UX has historically
been bad with data. Organizations don't know how to balance their resources. We aren't
tracking inputs and outputs, or how individuals really contribute to the result.

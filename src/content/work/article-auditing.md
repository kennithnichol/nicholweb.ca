---
title: Rebuilding an undocumented article auditing system
summary: Reverse-engineering a custom editorial workflow buried in a legacy WordPress platform, then rebuilding it on a headless Next.js and Payload CMS stack.
client: Enterprise healthcare company (same platform migration)
role: Senior full-stack engineer
years: 2025–2026
stack: [Next.js, Payload CMS, TypeScript, Node.js, WordPress (legacy source)]
order: 2
---

## The situation

Inside the legacy WordPress platform was a custom **article auditing system**: the workflow editors used to review and keep published content in order. It had grown over years, it had no real documentation, and the people who built it weren't the people using it.

It couldn't be dropped and it couldn't be copied as-is. It had to be understood, then rebuilt on the new stack.

## What I did

- **Mapped the system before touching it.** I traced its functionality, its dependencies on the rest of the platform, and the user flows editors actually followed.
- **Worked it out alongside the internal teams.** That separated "what the code does" from "what people rely on", which aren't always the same thing.
- **Rebuilt it on Next.js and Payload CMS**, porting the behaviour the teams needed rather than every accident of the old implementation.

## Why this is the interesting one

Most legacy migrations stall on exactly this kind of component: business-critical, undocumented, and tangled into everything else. Getting it across meant doing archaeology first and engineering second, and that order is the part I'd repeat on any modernization.

---
title: Moving an enterprise healthcare marketing platform off legacy WordPress
summary: A 1:1 port of a high-traffic marketing and support platform from a custom WordPress build to headless Next.js and Payload CMS, including a multi-tenant setup for the support sites.
client: Enterprise healthcare company (marketing and support web properties)
role: Senior full-stack engineer on a small remote team
years: 2025–2026
stack: [Next.js, Payload CMS, TypeScript, Node.js, PNPM monorepos, GitLab CI/CD, "AWS (EC2, S3)", Claude Code, Cursor]
order: 1
---

## The situation

The company's commercial and support websites ran on a custom, long-lived WordPress platform. It worked, but every change carried the weight of years of custom code, and the team wanted a decoupled architecture they could keep evolving: content managed in a modern CMS, delivered by a modern front end.

The brief was a **functional 1:1 port**. Visitors and editors shouldn't lose anything they relied on, which meant the old platform's behaviour was the spec, documented or not.

## What I did

- **Ported the commercial and support properties** to Next.js with Payload CMS as the content layer, matching existing functionality page by page.
- **Set up multi-tenancy** using Payload's tenant features, so several support sites could be run from one CMS instead of separate installs.
- **Organised the code as two PNPM monorepos**, deployed through GitLab CI/CD to AWS (EC2 and S3), on the team's two-week release cycle.
- **Used AI tools deliberately.** Claude Code and Cursor sped up implementation and test-writing; every change still went through review against the legacy behaviour it replaced.

## What made it hard

A 1:1 port is mostly an investigation problem. The hard part wasn't writing Next.js; it was finding out what the old system actually did, including the parts nobody had written down. The clearest example of that became its own piece of work: the [article auditing system](/work/article-auditing).

## What I'd bring to your project

If you're sitting on a platform that works but has become expensive to change, the approach carries over: treat the current system as the specification, find the undocumented behaviour early, move it piece by piece, and keep the release cadence steady while you do.

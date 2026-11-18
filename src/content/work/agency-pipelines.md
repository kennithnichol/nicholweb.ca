---
title: Deployment pipelines and upgrades for a digital agency's client sites
summary: Replacing manual deploys with CI/CD across several agency-managed WordPress sites on two hosts, and carrying a theme framework through a major version upgrade.
client: Digital agency, multiple client websites
role: Senior full-stack engineer (contract)
years: 2025–2026
stack: [GitHub Actions, Bitbucket Pipelines, GitLab CI/CD, WP Engine, Cloudways, WordPress, Sage / Acorn, Notion]
order: 3
---

## The situation

The agency looked after a portfolio of client websites across two managed hosts. Deployments depended too much on manual steps, and the theme framework the sites were built on was due for a major version upgrade.

## What I did

- **Built CI/CD pipelines** for client sites deploying to WP Engine and Cloudways, working through the build, caching and environment-variable problems that come up when you automate a deploy that used to be done by hand.
- **Moved a theme and deployment workflow from Bitbucket to GitHub**, with GitHub Actions handling multiple environments.
- **Upgraded sites from Sage 10 to Sage 11**, untangling Acorn and Laravel version compatibility along with host-level caching and file-permission issues.
- **Wrote the runbooks.** Deployment and onboarding guides in Notion, so the next developer doesn't have to rediscover any of it.

## The takeaway

Pipelines are only half the job. The other half is leaving the team able to run them without you, which is why the documentation was part of the deliverable rather than an afterthought.

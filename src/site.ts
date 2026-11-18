// Single source for names, contact details and profile links used across the site.
export const site = {
  name: 'Ken Nichol',
  business: 'Nichol Web Consulting',
  role: 'Senior full-stack engineer',
  location: 'Vancouver Island, BC, Canada · working remotely',
  email: 'hello@nicholweb.ca',
  description:
    'Ken Nichol is a senior full-stack engineer who modernizes legacy web platforms: WordPress and PHP to TypeScript, Next.js and headless CMS, shipped through CI/CD.',
  links: {
    linkedin: 'https://www.linkedin.com/in/kennithnichol',
    github: 'https://github.com/kennithnichol',
    toptal: 'https://www.toptal.com/developers/resume/kennith-nichol',
  },
} as const;

export const nav = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
] as const;

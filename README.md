# nicholweb.ca

Source for [nicholweb.ca](https://nicholweb.ca), the site of Ken Nichol, senior full-stack engineer.

Built with [Astro](https://astro.build) as a fully static site, deployed on Cloudflare Pages. The reasoning is written up on the site: [How this site is built](https://nicholweb.ca/how-this-site-is-built).

## Develop

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # type-check, then build to dist/
npm run preview  # serve the built site
```

## Structure

```
src/
  content/work/      case studies (Markdown, typed by src/content.config.ts)
  components/        shared Astro components
  layouts/Base.astro page shell: head, header, footer
  pages/             routes
  site.ts            name, email and profile links in one place
  styles/global.css  all styles
public/              static files copied as-is
```

## Adding a case study

Create `src/content/work/<slug>.md` with the frontmatter fields defined in `src/content.config.ts` (`title`, `summary`, `client`, `role`, `years`, `stack`, `order`). It appears on the home page and `/work` automatically.

Case studies are anonymized: describe clients by sector and size, never by name, and don't commit drafts that name them. Git history is permanent.

## Deploy

Cloudflare Pages is connected to this repo and builds every push to `main` (production) and every other branch (preview URL).

- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `NODE_VERSION=24`

`.github/workflows/ci.yml` type-checks and builds pull requests on GitHub as well, so a broken change shows up before merge.

DNS is on Cloudflare. The site uses only the root and `www` records; mail is hosted separately, so MX, SPF, DKIM and DMARC records must not be changed or proxied.

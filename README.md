# jasonhall.dev

Personal publication site for Jason Hall.

The site is built from the Tailwind Plus Spotlight TypeScript template with Next.js App Router, Tailwind CSS, and MDX articles.

## Development

Install dependencies:

```bash
npm install
```

Create `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Run the development server:

```bash
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

## PWA Install

The site is installable as a PWA through `src/app/manifest.ts`, `public/sw.js`,
and the generated icons in `public/icons/`. This lets visitors add the site to
their phone home screen.

## License Note

This project uses the Tailwind Plus Spotlight template as part of an end product. Do not redistribute this repository as a template or starter kit.

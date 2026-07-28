# FTC Team 506 Pandara — Website Source

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide.
This is the editable source for the site. GitHub Pages serves the plain
static export, which lives at the **repository root**, not here.

## Develop

```bash
npm install
npm run dev
```

Edit sections in `src/components/sections/`, shared content/copy in
`src/lib/data.ts`, design tokens (colors, fonts, shadows, radii) in
`src/app/globals.css`.

## Deploy to GitHub Pages

The site is statically exported (`output: "export"` in `next.config.ts`) and
the repo's Pages settings serve straight from the `main` branch root, so the
build output has to be copied there after every change:

```bash
npm run build              # writes web/out/
cd ..
cp -R web/out/. .           # copy the fresh export over the repo root
git add -A
git commit -m "..."
git push
```

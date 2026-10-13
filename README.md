# Jadoo – Travel Agency Landing Page

Responsive landing page built from the supplied Figma design.

**Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, lucide-react.

## Setup
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to /dist
npm run preview
```
Deploy: import the repo in Vercel or Netlify (build `npm run build`, output `dist`).

## Implementation notes
- Mobile-first layout; verified breakpoints: mobile, `sm`, `lg`.
- Design tokens (colors, fonts) live in `src/index.css` under `@theme`.
- One component per section in `src/components`; shared `Reveal`, `Heading`, `Dots`, `Button` in `ui.tsx`.
- Animations: staggered scroll reveals, hover lifts, hero entrance + floating planes, animated progress bar, animated testimonial carousel. All respect `prefers-reduced-motion` where scroll-triggered.
- Accessibility: semantic landmarks, labelled controls, keyboard-focus styles, `aria-live` testimonial and form status, mobile menu `aria-expanded`.
- Images converted to WebP, lazy-loaded below the fold (hero is high priority).

## Not done / next steps
- Testimonial avatars use initials (no photos in the source file); third testimonial is placeholder copy.
- Nav links, Play Demo and the subscribe form are front-end only (no backend).
- With more time: real photos at higher resolution, `srcset`, Lighthouse tuning, unit tests.

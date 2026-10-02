# CodeSphere

A responsive developer-event landing page built with React 19, TypeScript, Vite, Tailwind CSS v4, Motion, and Lucide. Custom SVG visuals keep the animated sphere and Git graph lightweight.

## Run locally

```sh
npm install
npm run dev
```

`npm run build` checks TypeScript and produces `dist/`. `npm run preview` serves the production build.

## Included

- Animated hero sphere with interactive commit labels, terminal boot sequence, and marquee.
- Three workshop cards, animated stats, and an interactive stage → commit → push playground.
- Informational Git, GitHub, and DSA track descriptions with session details.
- Proposed Git-history agenda, FAQ accordion, mobile navigation, and native accessible dialogs.
- Keyboard navigation, reduced-motion support, responsive layouts, metadata, and favicon.

## Event setup

Edit `src/data/event.ts` to update event content, workshop descriptions, proposed agenda, and FAQs. Date and venue remain unannounced until real details are supplied. Mentors, organizer branding, canonical URL, and Event structured data should be added only after the corresponding details are confirmed.

The site presents the event and its schedule. Registration and competition participation are handled by the organizers outside this site; it does not collect signup details or host coding exams.

Fonts load from Google Fonts with system fallbacks. The sphere uses SVG rather than a WebGL runtime. Animation is disabled for users who request reduced motion.

# CodeSphere

A responsive developer-event experience built with React 19, TypeScript, Vite, Tailwind CSS v4, Motion, and Lucide. Custom SVG visuals keep the animated sphere and Git graph lightweight.

## Run locally

```sh
npm install
npm run dev
```

`npm run build` checks TypeScript and produces `dist/`. `npm run preview` serves the production build.

## Included

- Animated hero sphere with interactive commit labels, terminal boot sequence, and marquee.
- Three workshop cards, animated stats, and an interactive stage → commit → push playground.
- DSA warm-ups with difficulty filters, hints, answer validation, and a session practice score.
- Proposed Git-history agenda, FAQ accordion, mobile navigation, and native accessible dialogs.
- Keyboard navigation, reduced-motion support, responsive layouts, metadata, and favicon.

## Event setup

Edit `src/data/event.ts` to update event content, workshop descriptions, proposed agenda, FAQs, and warm-up problems. Date and venue remain unannounced until real details are supplied. Mentors, organizer branding, public leaderboard, canonical URL, and Event structured data should be added only after the corresponding details are confirmed.

The interest form is explicitly a local preview. It saves name, email, and track in this browser's local storage under `codesphere-interest`. It does not submit data, reserve a place, or subscribe anyone. Connect an actual registration service before using it for event signups. Practice scores last for the current page session and are not a public leaderboard.

Fonts load from Google Fonts with system fallbacks. The sphere uses SVG rather than a WebGL runtime. Animation is disabled for users who request reduced motion.

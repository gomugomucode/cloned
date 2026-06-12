# StackForge — Programming Education Platform

A production-quality, dark-themed programming education UI built with **React**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

Inspired by modern developer-learning platform design patterns — with **100% original content**, placeholder data, and a generic brand identity.

## Features

### UI Patterns
- Sticky glassmorphism navigation with animated active states
- Large animated hero with code preview window
- Feature cards grid with gradient borders and glow
- Animated statistics counters
- Categories showcase
- Resource & activity cards
- Blog card layout with filters and pagination
- Testimonial cards with star ratings
- FAQ accordion with smooth expand/collapse
- Dual call-to-action sections
- Modern responsive footer

### Design System
- Premium dark theme with purple/cyan accents
- Glassmorphism (`glass`, `glass-card`, `glass-nav`)
- Subtle glow effects and gradient typography
- Framer Motion scroll & hover animations
- Fully responsive (mobile → desktop)
- Accessible semantic HTML and ARIA attributes

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- React Router v7
- Framer Motion
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── about/       Founder profile sections
│   ├── blog/        Blog listing with search/filters
│   ├── home/        All homepage sections
│   ├── layout/      Navbar, Footer, Layout, ScrollToTop
│   ├── resources/   Resources page
│   └── ui/          Button, Card, Motion, Accordion, SearchInput
├── data/            Editable content arrays
├── hooks/           useCounter, useScrollAnimation
├── pages/           Route pages
└── utils/           Icon helpers
```

## Customization

| What | Where |
|------|-------|
| Brand name & nav | `src/data/navigation.ts` |
| Stats, articles, FAQ | `src/data/*.ts` |
| Theme colors | `src/index.css` `@theme` block |

## License

Original frontend code with fictional placeholder content. No backend or authentication required.

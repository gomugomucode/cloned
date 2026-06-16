# CodeNova — Programming Education Platform

A modern, dark-themed programming education website inspired by developer learning platforms. Built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

## Features

- **Home page** — Hero, animated stats, featured categories, offerings, languages, quizzes/games/tools, roadmaps, articles, visual collections, weekly challenge, and founder preview
- **About page** — Founder profile, mission statement, achievements, and contact buttons
- **Blog page** — Article cards with category filters, search, and pagination
- **Resources page** — PDFs, cheat sheets, downloads, and developer tools with search/filter UI
- **Responsive design** — Optimized for desktop, tablet, and mobile
- **Animations** — Scroll-triggered fade-ins and animated stat counters
- **Accessibility** — Semantic HTML, keyboard-friendly controls, ARIA labels

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Lucide React (icons)
- Framer Motion (available for future enhancements)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── about/          # Founder & about sections
│   ├── blog/           # Blog listing & filters
│   ├── home/           # Home page sections
│   ├── layout/         # Navbar, Footer, Layout
│   ├── resources/      # Resources page content
│   └── ui/             # Reusable UI (Button, Card, SearchInput)
├── data/               # Content arrays (easy to edit)
├── hooks/              # useScrollAnimation, useCounter
├── pages/              # Route pages
└── utils/              # Icon mapping helper
```

## Customization

All content lives in `src/data/` — edit arrays for stats, articles, resources, languages, roadmaps, and more without touching component logic.

Brand name and navigation links are in `src/data/navigation.ts`.

## License

Original code and placeholder content. Not affiliated with any third-party brand.

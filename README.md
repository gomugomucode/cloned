# ⚒️ StackForge

**The Ultimate Forge for Modern Developers.**

StackForge is a high-performance developer resource platform designed to transition coders into elite engineers. By providing architectural blueprints, distilled cheat sheets, and production-grade projects, we bridge the gap between tutorial hell and real-world engineering.

## 🚀 Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 🏗️ Architecture

The project follows a **Modular-Feature Architecture**:

- **UI Layer**: Atomic components (`src/components/ui`) used across the application.
- **Feature Layer**: High-level organisms (`src/components/home/`) grouped by page logic.
- **Data Layer**: Single source of truth for content located in `src/data/`.
- **Global Styles**: Design tokens defined in `src/app/globals.css` using CSS variables for theme consistency.

## 🛠️ Development

### Installation

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## 📐 Design Principles

- **Dark Mode Luxury**: Utilizing a depth-based color palette (Pure Black $\rightarrow$ Charcoal $\rightarrow$ Zinc).
- **Bento Layouts**: Implementing high-density information grids for maximum scannability.
- **Micro-Interactions**: Using Framer Motion for staggered entries and spotlight hover effects.
- **Precision Typography**: Leveraging Geist Sans for clarity and JetBrains Mono for technical accuracy.

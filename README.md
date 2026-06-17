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
- **Database**: Prisma ORM

## 🏗️ Project Structure

```text
src/
├── app/                # Next.js App Router (Pages, API Routes)
│   ├── api/            # Backend endpoints
│   ├── interview/       # Interview preparation modules
│   ├── projects/      # Project learning system
│   └── tools/          # Developer utilities
├── components/         # React Components
│   ├── ui/             # Atomic UI elements (Buttons, Inputs, etc.)
│   ├── layout/         # Global layout components (Navbar, CommandMenu)
│   └── projects/       # Project-specific components
├── context/            # React Context for global state management
├── data/               # Static content and mock data
└── lib/                # Utility functions and shared logic
prisma/                 # Database schema and migrations
public/                 # Static assets
```

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd stackforge
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory and add your credentials:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/stackforge"
NEXTAUTH_SECRET="your-nextauth-secret"
# Add other necessary environment variables here
```

### 4. Database Initialization
Initialize the Prisma client and push the schema to your database:
```bash
npx prisma generate
npx prisma db push
```

### 5. Run Development Server
```bash
npm run dev
```

### 6. Build for Production
```bash
npm run build
```

## 📐 Design Principles

- **Dark Mode Luxury**: Utilizing a depth-based color palette (Pure Black $\rightarrow$ Charcoal $\rightarrow$ Zinc).
- **Bento Layouts**: Implementing high-density information grids for maximum scannability.
- **Micro-Interactions**: Using Framer Motion for staggered entries and spotlight hover effects.
- **Precision Typography**: Leveraging Geist Sans for clarity and JetBrains Mono for technical accuracy.

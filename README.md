# NEXT.JS STARTER

A high-performance, unapologetically bold starter template built for speed. It eliminates boilerplate fatigue and embraces a strong, poster-like design philosophy. Pre-configured with the essentials to build fast, modern web applications, marketing pages, and complex UIs.

[**View the Demo Repository**](https://github.com/itsyasirkhandev/next_marketing_starter)

## THE PHILOSOPHY

1. **Performance Above All Else**: Fast to load, fast to interact with. Designed to avoid waterfalls and provide optimistic updates by default.
2. **Bold & Direct Design**: Think posters, not dashboards. Massive headlines, high contrast, stark typography, and obvious interactions. Whitespace and scale do the heavy lifting.
3. **Good Defaults**: Less configuration, more building. Things behave correctly out of the box.
4. **Convenience**: Simple, zero-friction UX. Minimal blocking states.

## THE STACK

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI & Components:** [React 19](https://react.dev/) (Server Components)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Data Fetching:** [TanStack Query v5](https://tanstack.com/query/latest)
- **Accessible UI Primitives:** [shadcn/ui](https://ui.shadcn.com/)
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Animations:** [GSAP](https://greensock.com/gsap/) + `@gsap/react`
- **Icons:** Phosphor Icons & Lucide React
- **Package Manager:** `pnpm`

## GETTING STARTED

### Prerequisites

- Node.js 20+
- `pnpm` installed globally

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/itsyasirkhandev/next_marketing_starter.git

# 2. Navigate into the directory
cd next_marketing_starter

# 3. Install dependencies
pnpm install

# 4. Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the bold, high-contrast homepage in action.

## PROJECT ARCHITECTURE

Designed for scalability using a hybrid feature-based module system alongside standard Next.js routing.

```
src/
├── app/                    # Next.js App Router (pages, layouts, globals.css)
├── components/             # Shared UI components
│   ├── ui/                 # Core unstyled/accessible primitives (shadcn/ui, etc.)
│   └── index.ts
├── features/               # Feature-based domain logic
│   └── [feature_name]/     # Isolated module (e.g., 'auth', 'dashboard')
│       ├── components/
│       ├── hooks/
│       ├── services/
│       └── types/
├── hooks/                  # Global custom hooks
├── lib/                    # Third-party instance setups (axios, etc.)
├── services/               # Global API services
├── stores/                 # Global state stores
├── types/                  # Global TypeScript types
└── utils/                  # Global helper functions
```

## KEY FEATURES IN ACTION

### Bold Styling (Tailwind v4)

Embrace harsh contrasts, monolithic sizing (`text-[12vw]`), and stark monochrome palettes. The starter avoids subtle gradients and rounded edges in favor of direct, brutalist aesthetics.

### Optimized Data Fetching (TanStack Query)

Pre-configured for optimistic updates to make interactions feel instant. Combine Server Components for initial load and TanStack Query on the client for highly interactive experiences.

### High-Performance Animations (GSAP)

Drop in `@gsap/react` hooks for unconstrained, timeline-based sequencing that CSS transitions can't easily match.

### Type-Safe Forms

Forms are wired up out of the box using Zod for robust schema definitions and React Hook Form to keep renders snappy without pulling in massive external dependencies.

## SCRIPTS

```bash
pnpm dev          # Start local development server
pnpm build        # Compile Next.js build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint validation
pnpm typecheck    # Run TypeScript compiler checks
```

## LICENSE

MIT

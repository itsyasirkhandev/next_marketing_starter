import React from 'react';
import { Demo } from '@/components/demo';
import { PostList } from '@/features/example/components';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground flex flex-col justify-center transition-colors duration-300">
      {/* Header with Theme Toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 lg:px-24 py-6 bg-background/80 backdrop-blur-md border-b-2 border-foreground/10">
        <div className="font-black text-2xl uppercase tracking-tighter">
          Bold<span className="text-primary">Starter</span>
        </div>
        <ThemeToggle />
      </header>

      {/* Hero Section */}
      <section className="px-8 md:px-16 lg:px-24 pt-48 pb-24 md:pb-32 border-b-2 border-foreground/10">
        <div className="max-w-7xl">
          <p className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-6">
            v0.1.0 // Production Ready
          </p>
          <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter mb-12 uppercase">
            Next.js <br />
            Starter
          </h1>
          <p className="text-2xl md:text-3xl font-medium max-w-3xl leading-snug text-muted-foreground">
            A high-performance, unapologetically bold starter template. Built for speed, eliminating
            boilerplate fatigue.
          </p>
        </div>
      </section>

      {/* Posts Section (NEW) */}
      <section className="px-8 md:px-16 lg:px-24 py-24 border-b-2 border-foreground/10 bg-muted/30">
        <div className="max-w-7xl">
          <div className="mb-16 flex items-end justify-between border-b-2 border-foreground pb-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Live Feed
              </h2>
              <p className="mt-4 font-mono text-sm uppercase opacity-70">
                Fetched via TanStack Query + apiFetch
              </p>
            </div>
            <div className="hidden md:block font-black text-8xl opacity-10 uppercase tracking-tighter select-none">
              Posts
            </div>
          </div>
          <PostList />
        </div>
      </section>

      {/* Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-foreground/10 border-b-2 border-foreground/10">
        {/* The Stack */}
        <div className="px-8 md:px-16 lg:px-24 py-16 md:py-24">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12 uppercase">
            The Stack
          </h2>
          <ul className="space-y-6 text-xl">
            <li className="flex flex-col gap-1 border-b border-foreground/10 pb-4">
              <span className="font-black text-2xl">Next.js 16</span>
              <span className="text-muted-foreground font-mono text-sm">App Router</span>
            </li>
            <li className="flex flex-col gap-1 border-b border-foreground/10 pb-4">
              <span className="font-black text-2xl">React 19</span>
              <span className="text-muted-foreground font-mono text-sm">Server Components</span>
            </li>
            <li className="flex flex-col gap-1 border-b border-foreground/10 pb-4">
              <span className="font-black text-2xl">Tailwind CSS v4</span>
              <span className="text-muted-foreground font-mono text-sm">Styling Framework</span>
            </li>
            <li className="flex flex-col gap-1 border-b border-foreground/10 pb-4">
              <span className="font-black text-2xl">TanStack Query v5</span>
              <span className="text-muted-foreground font-mono text-sm">Data Fetching</span>
            </li>
            <li className="flex flex-col gap-1 border-b border-foreground/10 pb-4">
              <span className="font-black text-2xl">shadcn/ui</span>
              <span className="text-muted-foreground font-mono text-sm">Accessible Components</span>
            </li>
            <li className="flex flex-col gap-1 border-b border-foreground/10 pb-4">
              <span className="font-black text-2xl">Zod + Hook Form</span>
              <span className="text-muted-foreground font-mono text-sm">Form Management</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-black text-2xl">GSAP</span>
              <span className="text-muted-foreground font-mono text-sm">Complex Animations</span>
            </li>
          </ul>
        </div>

        {/* How To Use */}
        <div className="px-8 md:px-16 lg:px-24 py-16 md:py-24 bg-foreground text-background flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12 uppercase">
              How To Use
            </h2>
            <div className="space-y-8 font-mono text-lg">
              <div>
                <p className="text-muted-foreground text-sm mb-2 uppercase tracking-wider">
                  01. Install
                </p>
                <div className="bg-muted p-4 font-bold border-l-4 border-primary text-foreground">
                  pnpm install
                </div>
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-2 uppercase tracking-wider">
                  02. Run
                </p>
                <div className="bg-muted p-4 font-bold border-l-4 border-primary text-foreground">
                  pnpm dev
                </div>
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-2 uppercase tracking-wider">
                  03. Edit
                </p>
                <div className="bg-muted p-4 font-bold border-l-4 border-primary text-foreground">
                  src/app/page.tsx
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <a
              href="https://github.com/itsyasirkhandev/next_marketing_starter"
              className="group inline-flex items-center gap-4 bg-primary text-primary-foreground font-black text-2xl px-8 py-6 hover:bg-primary/90 transition-colors w-full uppercase tracking-tight justify-between"
            >
              <span>View On GitHub</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="bg-muted/30 border-t border-foreground/10">
        <div className="px-8 md:px-16 lg:px-24 py-12 border-b border-foreground/10 bg-background">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
            Component Playground
          </h2>
          <p className="text-muted-foreground font-mono text-sm mt-4 uppercase">
            Powered by shadcn/ui
          </p>
        </div>
        <div className="p-8 md:p-16 lg:p-24">
          <Demo />
        </div>
      </section>
    </main>
  );
}

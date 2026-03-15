import React from 'react';
import { Demo } from '@/components/demo';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-white selection:text-black flex flex-col justify-center">
      {/* Hero Section */}
      <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32 border-b border-neutral-800">
        <div className="max-w-7xl">
          <p className="font-mono text-sm tracking-widest uppercase text-neutral-400 mb-6">
            v0.1.0 // Production Ready
          </p>
          <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter mb-12 uppercase">
            Next.js <br />
            <span className="text-white">Starter</span>
          </h1>
          <p className="text-2xl md:text-3xl font-medium max-w-3xl leading-snug text-neutral-300">
            A high-performance, unapologetically bold starter template. Built for speed, eliminating
            boilerplate fatigue.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800 border-b border-neutral-800">
        {/* The Stack */}
        <div className="px-8 md:px-16 lg:px-24 py-16 md:py-24">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12 uppercase">
            The Stack
          </h2>
          <ul className="space-y-6 text-xl">
            <li className="flex flex-col gap-1 border-b border-neutral-800 pb-4">
              <span className="font-black text-2xl">Next.js 16</span>
              <span className="text-neutral-400 font-mono text-sm">App Router</span>
            </li>
            <li className="flex flex-col gap-1 border-b border-neutral-800 pb-4">
              <span className="font-black text-2xl">React 19</span>
              <span className="text-neutral-400 font-mono text-sm">Server Components</span>
            </li>
            <li className="flex flex-col gap-1 border-b border-neutral-800 pb-4">
              <span className="font-black text-2xl">Tailwind CSS v4</span>
              <span className="text-neutral-400 font-mono text-sm">Styling Framework</span>
            </li>
            <li className="flex flex-col gap-1 border-b border-neutral-800 pb-4">
              <span className="font-black text-2xl">TanStack Query v5</span>
              <span className="text-neutral-400 font-mono text-sm">Data Fetching</span>
            </li>
            <li className="flex flex-col gap-1 border-b border-neutral-800 pb-4">
              <span className="font-black text-2xl">shadcn/ui</span>
              <span className="text-neutral-400 font-mono text-sm">Accessible Components</span>
            </li>
            <li className="flex flex-col gap-1 border-b border-neutral-800 pb-4">
              <span className="font-black text-2xl">Zod + Hook Form</span>
              <span className="text-neutral-400 font-mono text-sm">Form Management</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-black text-2xl">GSAP</span>
              <span className="text-neutral-400 font-mono text-sm">Complex Animations</span>
            </li>
          </ul>
        </div>

        {/* How To Use */}
        <div className="px-8 md:px-16 lg:px-24 py-16 md:py-24 bg-white text-black flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12 uppercase">
              How To Use
            </h2>
            <div className="space-y-8 font-mono text-lg">
              <div>
                <p className="text-neutral-500 text-sm mb-2 uppercase tracking-wider">
                  01. Install
                </p>
                <div className="bg-neutral-100 p-4 font-bold border-l-4 border-black">
                  pnpm install
                </div>
              </div>
              <div>
                <p className="text-neutral-500 text-sm mb-2 uppercase tracking-wider">02. Run</p>
                <div className="bg-neutral-100 p-4 font-bold border-l-4 border-black">pnpm dev</div>
              </div>
              <div>
                <p className="text-neutral-500 text-sm mb-2 uppercase tracking-wider">03. Edit</p>
                <div className="bg-neutral-100 p-4 font-bold border-l-4 border-black">
                  src/app/page.tsx
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <a
              href="https://github.com/itsyasirkhandev/next_marketing_starter"
              className="group inline-flex items-center gap-4 bg-black text-white font-black text-2xl px-8 py-6 hover:bg-neutral-800 transition-colors w-full uppercase tracking-tight justify-between"
            >
              <span>View On GitHub</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="bg-neutral-900 border-t border-neutral-800">
        <div className="px-8 md:px-16 lg:px-24 py-12 border-b border-neutral-800 bg-neutral-950">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
            Component Playground
          </h2>
          <p className="text-neutral-400 font-mono text-sm mt-4 uppercase">Powered by shadcn/ui</p>
        </div>
        <div className="dark">
          <Demo />
        </div>
      </section>
    </main>
  );
}

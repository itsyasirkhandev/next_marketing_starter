import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-8 md:px-16">
        <div className="text-sm font-semibold tracking-tight uppercase">
          Starter
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#stack"
            className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
          >
            Stack
          </Link>
          <Link
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
          >
            Docs
          </Link>
        </nav>
        <Link
          href="https://github.com/itsyasirkhandev/next_marketing_starter"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-foreground px-6 py-3 text-sm font-semibold text-background hover:bg-foreground/80 transition-colors"
        >
          Get Started
        </Link>
      </header>

      {/* Hero */}
      <main className="px-8 py-24 md:px-16 md:py-32 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-black leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
            Build faster.
            <br />
            Ship sooner.
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            A minimal Next.js starter with everything you need. No bloat, no 
            decisions—just ship.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://github.com/itsyasirkhandev/next_marketing_starter"
              className="inline-flex items-center justify-center bg-foreground px-8 py-4 text-sm font-semibold text-background hover:bg-foreground/80 transition-colors"
            >
              Clone Repository
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center border border-border px-8 py-4 text-sm font-semibold hover:bg-muted transition-colors"
            >
              See Features
            </Link>
          </div>
        </div>
      </main>

      {/* Features */}
      <section id="features" className="border-t border-border px-8 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What&apos;s included
          </h2>
          <div className="mt-16 grid gap-16 md:grid-cols-3">
            <div>
              <div className="text-sm font-mono text-muted-foreground">01</div>
              <h3 className="mt-4 text-lg font-semibold">Next.js 16</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                App Router, Server Components, and the latest React features 
                out of the box.
              </p>
            </div>
            <div>
              <div className="text-sm font-mono text-muted-foreground">02</div>
              <h3 className="mt-4 text-lg font-semibold">Tailwind v4</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Modern CSS with the new engine. 10x faster builds, zero 
                configuration.
              </p>
            </div>
            <div>
              <div className="text-sm font-mono text-muted-foreground">03</div>
              <h3 className="mt-4 text-lg font-semibold">shadcn/ui</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Beautiful, accessible components you own. Copy, paste, and 
                customize.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="border-t border-border px-8 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            The Stack
          </h2>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
            {[
              { name: "Next.js", version: "16.x", desc: "React Framework" },
              { name: "React", version: "19.x", desc: "UI Library" },
              { name: "TypeScript", version: "5.x", desc: "Type Safety" },
              { name: "Tailwind CSS", version: "4.x", desc: "Styling" },
              { name: "shadcn/ui", version: "latest", desc: "Components" },
              { name: "TanStack Query", version: "5.x", desc: "Data Fetching" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between bg-background p-8"
              >
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {item.desc}
                  </div>
                </div>
                <div className="font-mono text-sm text-muted-foreground">
                  {item.version}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-8 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            Ready to build?
          </h2>
          <p className="mx-auto mt-8 max-w-md text-base text-muted-foreground">
            Clone the repo and start building. No setup required.
          </p>
          <div className="mt-12">
            <code className="inline-block bg-muted px-6 py-4 font-mono text-sm">
              pnpm create next-app -e https://github.com/itsyasirkhandev/next_marketing_starter
            </code>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-8 py-16 md:px-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-sm font-semibold tracking-tight uppercase">
            Starter
          </div>
          <div className="flex items-center gap-8">
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
            >
              Next.js
            </Link>
            <Link
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
            >
              Tailwind
            </Link>
            <Link
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
            >
              shadcn/ui
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            Built with Next.js
          </div>
        </div>
      </footer>
    </div>
  );
}
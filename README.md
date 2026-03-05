# Next.js Landing Page Template

A production-ready Next.js template optimized for building beautiful marketing pages and landing sites. Features a scalable hybrid folder structure, modern animations, form handling, and SEO optimization.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [GSAP](https://greensock.com/gsap/) + @gsap/react
- **Forms:** [React Hook Form](https://react-hook-form.com/) + Zod validation
- **Icons:** [Lucide React](https://lucide.dev/)
- **SEO:** [next-seo](https://github.com/garmeeh/next-seo)
- **Package Manager:** [pnpm](https://pnpm.io/)

## Features

- ⚡ **Next.js App Router** - Modern routing with layouts and streaming
- 🎨 **Tailwind CSS** - Utility-first styling
- 🏗️ **Hybrid Folder Structure** - Scalable architecture with feature-based modules
- 🎬 **GSAP Animations** - Professional-grade animations for landing pages
- 📝 **React Hook Form** - Performant forms with Zod schema validation
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and structured data
- 🌙 **Dark Mode Ready** - Easy theme integration
- 📦 **Barrel Exports** - Clean imports with index.ts files

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

```bash
# Install pnpm if you haven't
npm install -g pnpm
```

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project
cd nextjs_starter_tanstack_query

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
│
├── components/             # Shared UI components
│   ├── ui/                 # UI primitives (buttons, inputs, etc.)
│   └── index.ts            # Barrel export
│
├── features/               # Feature-based modules
│   └── [feature]/          # Individual feature
│       ├── components/     # Feature-specific components
│       ├── hooks/          # Feature-specific hooks
│       ├── services/       # Feature-specific API calls
│       ├── schemas/        # Feature-specific Zod schemas
│       ├── types/          # Feature-specific types
│       ├── utils/          # Feature-specific utilities
│       └── index.ts        # Feature public API
│
├── hooks/                  # Shared custom hooks
├── lib/                    # Third-party configurations
├── services/               # Shared API services
├── stores/                 # Global state management
├── types/                  # Shared TypeScript types
│   ├── api.ts              # API response types
│   └── index.ts
└── utils/                  # Utility functions
```

## Usage Examples

### GSAP Animations

```tsx
'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.hero-title', {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power4.out'
    });
  }, { scope: container });

  return (
    <section ref={container}>
      <h1 className="hero-title">Welcome</h1>
    </section>
  );
}
```

### Form with Zod Validation

```tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message too short'),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} placeholder="Email" />
      {errors.email && <span>{errors.email.message}</span>}
      
      <textarea {...register('message')} placeholder="Message" />
      {errors.message && <span>{errors.message.message}</span>}
      
      <button type="submit">Send</button>
    </form>
  );
}
```

### SEO Configuration

```tsx
import { NextSeo } from 'next-seo';

export default function Page() {
  return (
    <>
      <NextSeo
        title="My Landing Page | Brand"
        description="Build beautiful landing pages with this template"
        openGraph={{
          type: 'website',
          url: 'https://example.com',
          title: 'My Landing Page',
          description: 'Build beautiful landing pages',
          images: [{ url: 'https://example.com/og.png' }],
        }}
      />
      {/* Page content */}
    </>
  );
}
```

### Lucide Icons

```tsx
import { ArrowRight, Check, Mail, Menu } from 'lucide-react';

<Button>
  Get Started <ArrowRight className="w-4 h-4 ml-2" />
</Button>
```

## Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Recommended Additions

For a complete marketing site, consider adding:

- `next-themes` - Dark mode support
- `embla-carousel-react` - Testimonials carousel
- `clsx` + `tailwind-merge` - Utility class merging
- `@vercel/analytics` - Analytics integration
- `resend` - Transactional emails

## Deployment

Deploy easily on [Vercel](https://vercel.com):

```bash
vercel
```

Or use the Vercel GitHub integration for automatic deployments.

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

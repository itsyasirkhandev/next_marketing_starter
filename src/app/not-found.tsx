import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-[15vw] font-black leading-tight tracking-tighter uppercase mb-4">404</h1>
      <p className="font-mono text-sm uppercase mb-12 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className={cn(buttonVariants({ size: 'lg' }), 'uppercase font-bold tracking-widest')}
      >
        Back to Home
      </Link>
    </div>
  );
}

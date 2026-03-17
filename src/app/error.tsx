'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-[12vw] font-black leading-tight tracking-tighter uppercase mb-8">
        Something <br /> went wrong
      </h1>
      <p className="font-mono text-sm uppercase mb-12 max-w-md">
        An unexpected error occurred. We have been notified and are looking into it.
      </p>
      <Button onClick={() => reset()} size="lg" className="uppercase font-bold tracking-widest">
        Try again
      </Button>
    </div>
  );
}

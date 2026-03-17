'use client';

import { usePosts } from '../hooks';
import { Card } from '@/components/ui/card';

export function PostList() {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="h-48 animate-pulse bg-muted" />
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="p-8 text-center text-destructive">Failed to load posts.</div>;
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts?.slice(0, 9).map((post) => (
        <Card
          key={post.id}
          className="group relative border-2 border-foreground p-6 transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0_0_rgba(255,255,255,1)]"
        >
          <h3 className="mb-2 text-xl font-black uppercase leading-tight tracking-tight">
            {post.title}
          </h3>
          <p className="line-clamp-3 font-mono text-xs uppercase opacity-70">{post.body}</p>
          <div className="mt-4 inline-flex items-center text-xs font-black uppercase tracking-widest underline decoration-2 underline-offset-4 group-hover:no-underline">
            Read More
          </div>
        </Card>
      ))}
    </div>
  );
}

import { apiGet } from '@/lib/fetch';
import type { Post } from '../types';

export const postService = {
  getPosts: async (): Promise<Post[]> => {
    // Using a public API for demonstration
    // In a real app, this would use env.NEXT_PUBLIC_API_URL
    return apiGet<Post[]>('https://jsonplaceholder.typicode.com/posts');
  },
  getPost: async (id: number): Promise<Post> => {
    return apiGet<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  },
};

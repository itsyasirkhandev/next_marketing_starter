import { useQuery } from '@tanstack/react-query';
import { postService } from '../services';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => postService.getPosts(),
  });
};

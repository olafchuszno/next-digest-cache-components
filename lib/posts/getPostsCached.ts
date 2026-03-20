'use server';

import { Post } from '@/types/post';
import { getPostsDB } from './db/getPostsDB';
import { cacheTag } from 'next/cache';

export const getPostsCached = async (): Promise<Post[]> => {
  'use cache';

  cacheTag('posts');

  return await getPostsDB();
};

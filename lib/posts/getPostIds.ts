'use server';

import { Post } from '@/types/post';
import { getPostIdsDB } from './db/getPostIdsDB';

/**
 * You can also try it out as well with a real API
 *   const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
 *   const posts: Post[] = await response.json();
 */

export const getPostIds = async (): Promise<Post['id'][]> => {
  return await getPostIdsDB();
};

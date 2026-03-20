'use server';

import { Post } from '@/types/post';
import { getPostsDB } from './db/getPostsDB';


export const getPosts = async (): Promise<Post[]> => {
  return await getPostsDB();
};

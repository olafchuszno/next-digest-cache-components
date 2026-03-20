import { wait } from '@/lib/wait';
import { POSTS_DB } from './_postsDB';
import { Post } from '@/types/post';

export const getPostsDB = async (): Promise<Post[]> => {
  await wait(2000);

  return POSTS_DB
};

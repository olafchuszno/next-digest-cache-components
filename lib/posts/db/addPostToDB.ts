import { Post } from '@/types/post';
import { POSTS_DB } from './_postsDB';
import { wait } from '@/lib/wait';

export const addPostToDB = async (post: Post): Promise<void> => {
  await wait(2000);

  POSTS_DB.push(post);
};

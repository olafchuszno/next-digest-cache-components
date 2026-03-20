import { wait } from '@/lib/wait';
import { Post } from '@/types/post';
import { POSTS_DB } from './_postsDB';

export const getPostByIdDB = async (postId: Post['id']) => {
  await wait(2000);

  const foundPost = POSTS_DB.find(({ id }) => id === postId);
  return foundPost || null;
};

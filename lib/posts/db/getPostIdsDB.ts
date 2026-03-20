import { wait } from '@/lib/wait';
import { Post } from '@/types/post';
import { POSTS_DB } from './_postsDB';

export const getPostIdsDB = async (): Promise<Post['id'][]> => {
  await wait(2000);

  const postIds = POSTS_DB.map(({ id }) => id);
  return postIds;
};

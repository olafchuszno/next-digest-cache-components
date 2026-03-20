import { POSTS_DB } from './_postsDB';
import { wait } from '@/lib/wait';
import { Post } from '@/types/post';

type PostLikeUpdateData = {
  id: Post['id'];
  likes: Post['likes'];
};

export const updatePostLikesDB = async (
  postLikeUpdateData: PostLikeUpdateData
): Promise<Post | null> => {
  await wait(2000);

  const foundPost = POSTS_DB.find(({ id }) => id === postLikeUpdateData.id);

  if (!foundPost) {
    return null;
  }

  foundPost.likes = postLikeUpdateData.likes;

  return foundPost;
};

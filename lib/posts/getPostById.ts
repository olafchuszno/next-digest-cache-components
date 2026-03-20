import { getPostByIdDB } from './db/getPostByIdDB';

export const getPostById = async (postId: number) => {
  return await getPostByIdDB(postId);
};

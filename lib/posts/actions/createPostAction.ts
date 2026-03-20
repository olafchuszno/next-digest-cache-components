import { Post } from '@/types/post';
import z from 'zod';
import { addPostToDB } from '../db/addPostToDB';

const postSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string().min(1),
  likes: z.number(),
  body: z.string().min(1),
});

export const createUserAction = async (post: Post): Promise<Post | null> => {
  'use server';
  const parsedPost = await postSchema.safeParseAsync(post);
  if (!parsedPost.success) {
    return null;
  }
  await addPostToDB(parsedPost.data);
  return parsedPost.data;
};

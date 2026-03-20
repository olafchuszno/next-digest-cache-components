'use server';

import { Post } from '@/types/post';
import z from 'zod';
import { updatePostLikesDB } from '../db/updatePostLikesDB';
import { revalidatePath } from 'next/cache';

const postLikeUpdateSchema = z.object({
  id: z.number(),
  likes: z.number().min(0),
});

type PostLikeUpdate = z.infer<typeof postLikeUpdateSchema>;

export const updatePostLikesAction = async (data: PostLikeUpdate): Promise<Post | null> => {
  const parsed = postLikeUpdateSchema.safeParse(data);

  if (!parsed.success) {
    return null;
  }

  const updatedPost = await updatePostLikesDB(parsed.data);
  revalidatePath(`/post/${parsed.data.id}`);

  return updatedPost;
};

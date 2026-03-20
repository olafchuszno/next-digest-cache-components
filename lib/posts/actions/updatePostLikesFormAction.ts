'use server';

import { revalidatePath } from 'next/cache';
import z from 'zod';
import { updatePostLikesDB } from '../db/updatePostLikesDB';

const schema = z.object({
  id: z.coerce.number(),
  likes: z.coerce.number().min(0),
});

export const updatePostLikesFormAction = async (formData: FormData): Promise<void> => {
  const parsed = schema.safeParse({
    id: formData.get('id'),
    likes: formData.get('likes'),
  });

  if (!parsed.success) return;

  await updatePostLikesDB(parsed.data);
  revalidatePath(`/post/${parsed.data.id}`);
};

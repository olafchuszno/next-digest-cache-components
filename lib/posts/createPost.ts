'use server';

import { addPostToDB } from './db/addPostToDB';
import { POSTS_DB } from './db/_postsDB';
import { revalidateTag } from 'next/cache';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const body = formData.get('body') as string;

  const newPost = {
    id: POSTS_DB.length,
    userId: 1,
    title,
    body,
    likes: 0,
  };

  await addPostToDB(newPost);

  revalidateTag('posts', "max")
}

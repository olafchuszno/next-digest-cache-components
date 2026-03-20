import { getPosts } from '@/lib/posts/getPosts';
import { Suspense } from 'react';

export default async function SuspensePage() {
  return (
    <main>
      <h1>Static title</h1>
      <Suspense fallback={"Loading..."}>
        <PostsList />
      </Suspense>
    </main>
  );
}

const PostsList = async () => {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map(({ id, title }) => (
        <li key={id}>Post: {title}</li>
      ))}
    </ul>
  );
};

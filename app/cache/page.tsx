import { getPosts } from '@/lib/posts/getPosts';

export default async function CachePage() {
  'use cache'
  const posts = await getPosts();

  return (
    <main>
      <h1>Static title</h1>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>Post: {title}</li>
        ))}
      </ul>
    </main>
  );
}

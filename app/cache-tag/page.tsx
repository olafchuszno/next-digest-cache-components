import { getPostsCached } from '@/lib/posts/getPostsCached';

export default async function CachePage() {
  const posts = await getPostsCached();

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

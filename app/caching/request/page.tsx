import { wait } from '@/lib';
import { cache, Suspense } from 'react';

// fetchPost() called three times — React dedupes into one network request.
const fetchPost = cache(async () => {
  await wait(2000);

  console.log('fetchPost called');

  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  return res.json();
});

async function DeduplicatedPosts() {
  console.log('\n\n---page visit---');

  const postA = await fetchPost();
  const postB = await fetchPost();

  return (
    <div className="flex flex-col gap-2">
      <div className="rounded border border-gray-600 px-4 py-3">
        <p className="text-sm text-gray-500">Call A</p>
        <p className="font-mono text-sm">{postA.title}</p>
      </div>
      <div className="rounded border border-gray-600 px-4 py-3">
        <p className="text-sm text-gray-500">Call B (same fetch, deduped)</p>
        <p className="font-mono text-sm">{postB.title}</p>
      </div>
      <NestedPost />
    </div>
  );
}

async function NestedPost() {
  const post = await fetchPost();

  return (
    <div className="flex flex-col gap-2">
      <div className="rounded border border-gray-600 px-4 py-3">
        <p className="text-sm text-gray-500">Nested post (also - same fetch)</p>
        <p className="font-mono text-sm">{post.title}</p>
      </div>
    </div>
  );
}

export default function RequestMemoizationPage() {
  return (
    <main className="flex flex-col gap-4 p-8">
      <h1 className="text-2xl">Request Memoization</h1>

      <p className="text-gray-400 max-w-prose">
        React deduplicates identical <code>fetch()</code> calls within a single
        render pass. <code>fetchPost()</code> is called twice but only one HTTP
        request is made. Scoped to one render — cleared after each request.
        Wrapped in <code>{'<Suspense>'}</code> because the data is uncached.
      </p>

      <Suspense fallback={<p className="text-gray-500 text-sm">Loading…</p>}>
        <DeduplicatedPosts />
      </Suspense>
    </main>
  );
}

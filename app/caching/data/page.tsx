import { Suspense } from 'react';
import { cacheLife } from 'next/cache';
import { wait } from '@/lib';

export default function DataCachePage() {
  return (
    <main className="flex flex-col gap-4 p-8">
      <h1 className="text-2xl">
        Data Cache (&apos;use cache&apos; on function)
      </h1>

      <p className="text-gray-400 max-w-prose">
        With <code>cacheComponents: true</code>, add{' '}
        <code>&apos;use cache&apos;</code> to any async function to persist its
        result across requests. Uncached async data must be inside{' '}
        <code>{'<Suspense>'}</code> — the build will fail otherwise.
      </p>

      <div className="flex flex-col gap-3">
        <CachedPost />

        <Suspense
          fallback={
            <div className="rounded border border-yellow-800 px-4 py-3 text-yellow-500 text-sm">
              Loading fresh post…
            </div>
          }
        >
          <FreshPost />
        </Suspense>
      </div>

      <p className="text-sm text-gray-500">
        Invalidate with <code>cacheTag()</code> + <code>revalidateTag()</code>,
        or set a TTL via <code>cacheLife()</code>.
      </p>
    </main>
  );
}

async function fetchPost() {
  await wait(5000);
  return fetch('https://jsonplaceholder.typicode.com/posts/1');
}

// 'use cache' on a function = persisted across requests (replaces force-cache).
async function getCachedPost() {
  'use cache';
  cacheLife('days');

  await wait(5000);

  const res = await fetchPost();
  return res.json();
}

// No 'use cache' = dynamic. Must be inside <Suspense>.
async function FreshPost() {
  const res = await fetchPost();
  const post = await res.json();
  return (
    <div className="rounded border border-yellow-800 px-4 py-3">
      <p className="text-sm text-yellow-500 mb-1">
        No &apos;use cache&apos; — fresh fetch on every request (must be in{' '}
        {'<Suspense>'})
      </p>
      <p className="font-mono text-sm">{post.title}</p>
    </div>
  );
}

async function CachedPost() {
  const post = await getCachedPost();
  return (
    <div className="rounded border border-green-800 px-4 py-3">
      <p className="text-sm text-green-500 mb-1">
        &apos;use cache&apos; + cacheLife(&apos;days&apos;) — persists across
        requests
      </p>
      <p className="font-mono text-sm">{post.title}</p>
    </div>
  );
}

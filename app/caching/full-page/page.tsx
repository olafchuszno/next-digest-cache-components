import { cacheLife } from 'next/cache';

// 'use cache' + cacheLife('max') = full page cached at build time.
export default async function FullPageCachePage() {
  'use cache';
  cacheLife('max');

  const renderedAt = new Date().getSeconds();

  return (
    <main className="flex flex-col gap-4 p-8">
      <h1 className="text-2xl">Full Route Cache (Full-Page Cache)</h1>

      <p className="text-gray-400 max-w-prose">
        With <code>cacheComponents: true</code>, pages are dynamic by default.
        Adding <code>&apos;use cache&apos;</code> +{' '}
        <code>cacheLife(&apos;max&apos;)</code> caches the entire rendered page
        on the server. Every visitor gets the same pre-rendered output.
      </p>

      <div className="rounded border border-gray-600 px-4 py-3 w-fit">
        <span className="text-gray-500 text-sm">Rendered at: </span>
        <span className="font-mono">{renderedAt}</span>
      </div>

      <p className="text-sm text-gray-500">
        In <code>next dev</code> every request re-renders — deploy to see the
        frozen cached timestamp.
      </p>
    </main>
  );
}

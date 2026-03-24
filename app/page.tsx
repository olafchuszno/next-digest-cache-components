import Link from 'next/link';

const GROUPS = [
  {
    title: 'Rendering Modes',
    description:
      'With cacheComponents: true, pages are dynamic by default. Static output is only produced when components use "use cache" or contain only deterministic, pure computations.',
    pages: [
      {
        href: '/static-route',
        label: 'Static Route',
        description:
          'No dynamic APIs, no "use cache" — Next.js detects it is fully deterministic and pre-renders it at build time automatically. Zero per-request work.',
      },
      {
        href: '/suspense',
        label: 'Suspense (Streaming)',
        description:
          'Async component without "use cache" = fresh data on every request. Wrap in <Suspense> so the static shell renders instantly while content streams in.',
      },
    ],
  },
  {
    title: 'Caching with "use cache"',
    description:
      'The "use cache" directive marks a page, component, or function as cacheable. Results are stored on the server and replayed on future requests — no fetch options, no route segment config needed.',
    pages: [
      {
        href: '/cache',
        label: 'Page-Level Cache',
        description:
          '"use cache" at the top of the page caches the entire rendered UI. The page is pre-rendered once and served to every visitor until revalidated.',
      },
      {
        href: '/cache-tag',
        label: 'Cache Tag',
        description:
          'cacheTag() attaches a string tag to a cached function\'s entry. Call revalidateTag("posts") later to surgically expire just that slice of cache.',
      },
      {
        href: '/cached-function',
        label: 'Cached Function (client-callable)',
        description:
          'A "use server" async function marked with "use cache". Client components can call it; the result is cached server-side and reused across calls with the same args.',
      },
    ],
  },
  {
    title: 'Mutations & Revalidation',
    description:
      'Server Actions mutate data. After a mutation, call revalidateTag() or revalidatePath() to expire the relevant cache entries so the next visitor sees fresh data.',
    pages: [
      {
        href: '/create-post',
        label: 'Create Post (Server Action)',
        description:
          'A form whose action is a "use server" function. The mutation runs on the server with no client JS required — the App Router equivalent of an API route POST.',
      },
      {
        href: '/revalidate',
        label: 'Create Post + Revalidate',
        description:
          'Same Server Action form, but calls revalidateTag() after the mutation so cached pages that display posts are immediately invalidated.',
      },
    ],
  },
  {
    title: 'Server ↔ Client',
    description:
      'Server functions can be passed as props to client components. The server renders the function reference; the client receives a callable RPC stub — no manually written API route.',
    pages: [
      {
        href: '/function-from-server-to-client-component',
        label: 'Server Function → Client Component',
        description:
          '"use server" functions defined inline in a Server Component and passed as props. The client component calls them like regular callbacks; execution always stays on the server.',
      },
    ],
  },
  {
    title: 'The 4 Cache Types',
    description:
      'Next.js has 4 cache layers. With cacheComponents: true the Data Cache is replaced by "use cache" on functions/components. The other three layers (Router, Full Route, Request Memoization) still apply.',
    pages: [
      {
        href: '/caching/client',
        label: 'Router Cache (Client)',
        prefetch: true,
        description:
          'In-memory cache on the client. Stores RSC payloads for navigated routes. Navigate away and back — the page is replayed from cache without a server round-trip.',
      },
      {
        href: '/caching/full-page',
        label: 'Full Route Cache (Full-Page)',
        description:
          'With cacheComponents: true, add "use cache" + cacheLife("max") to cache the entire page on the server. Without it, pages render fresh on every request.',
      },
      {
        href: '/caching/request-broken',
        label: 'Without Request Memoization',
        description: 'Post data is fetched multiple times in a single request',
      },
      {
        href: '/caching/request',
        label: 'Request Memoization',
        description:
          'React deduplicates identical fetch() calls within a single render pass. Call the same URL twice — only 1 network request is made. Cleared after each request.',
      },
      {
        href: '/caching/data',
        label: 'Data Cache ("use cache" on function)',
        description:
          'With cacheComponents: true, cache data by adding "use cache" to an async function instead of fetch options. The result persists across requests until revalidated.',
      },
    ],
  },
];

export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold mb-2">
        Welcome to Next.js Cache Components Digest!
      </h1>
      <p className="text-gray-400 mb-8">(cacheComponents: true)</p>

      <h2 className="text-xl font-medium mb-4">Available Pages:</h2>

      <nav className="flex flex-col mt-4 gap-8">
        {GROUPS.map(({ title, description, pages }) => (
          <div key={title}>
            <div className="relative group w-fit mb-3">
              <h3 className="text-lg font-semibold text-gray-400 cursor-default">
                {title}
              </h3>
              <span
                className="
                pointer-events-none absolute left-0 top-full mt-1 z-10
                w-96 rounded-lg border border-gray-600 bg-gray-900 px-3 py-2
                text-sm text-gray-200 shadow-lg
                opacity-0 group-hover:opacity-100
                transition-opacity duration-200
              "
              >
                {description}
              </span>
            </div>

            <div className="flex flex-col gap-4 pl-4 border-l border-gray-700">
              {pages.map(({ href, label, description: pageDesc, prefetch }) => (
                <div key={href} className="relative group w-fit">
                  <Link href={href} prefetch={prefetch} className="bordered">
                    {label}
                  </Link>
                  <span
                    className="
                    pointer-events-none absolute left-0 top-full mt-1 z-10
                    w-80 rounded-lg border border-gray-500 bg-gray-900 px-3 py-2
                    text-sm text-gray-200 shadow-lg
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-200
                  "
                  >
                    {pageDesc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </main>
  );
}

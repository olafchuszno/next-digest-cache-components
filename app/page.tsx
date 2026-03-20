import Link from 'next/link';

const PAGES = [
  { href: '/static-route', label: 'Static Route' },
  { href: '/cache', label: 'Cache' },
  { href: '/suspense', label: 'Suspense' },
  { href: '/create-post', label: 'Create Post' },
  { href: '/cache-tag', label: 'Cache Tag' },
  { href: '/revalidate', label: 'Revalidate' },
];

export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Welcome to Next.js Cache Components Digest!</h1>

      <h2 className="text-xl font-medium mb-4">Available Pages:</h2>

      <nav className="flex flex-col mt-4 gap-2">
        {PAGES.map(({ href, label }) => (
          <Link key={href} href={href} className="w-fit bordered">
            {label}
          </Link>
        ))}
      </nav>
    </main>
  );
}

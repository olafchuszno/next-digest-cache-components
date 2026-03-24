import Link from 'next/link';
import { connection } from 'next/server';
import { Suspense } from 'react';

// Static page ('use cache'). On client navigation, Next.js serves the RSC
// payload from the Router Cache (in-memory, 5 min) — no server request made.
export default async function ClientCachePage() {
  return (
    <Suspense fallback="Loading...">
      <DisplayDynamicRandomNumber />
    </Suspense>
  );
}

const getRandomNumber = () => Math.floor(Math.random() * 100);

const DisplayDynamicRandomNumber = async () => {
  await connection();

  const randomNumber = getRandomNumber();

  return (
    <main className="flex flex-col gap-4 p-8">
      <h1 className="text-2xl">Router Cache (Client Cache)</h1>
      <p className="text-gray-400 max-w-prose">CACHE DESCRIPTION</p>
      <div className="rounded border border-gray-600 px-4 py-3 w-fit">
        <span className="text-gray-500 text-sm">Random number: </span>
        <span className="font-mono">{randomNumber}</span>
      </div>
      <Link href="/" className="bordered w-fit">
        ← Home
      </Link>
    </main>
  );
};

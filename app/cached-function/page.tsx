'use client';

import { useTransition } from 'react';
import { getCachedData } from './getCachedData';

export default function Page() {
  const [isPending, startTransition] = useTransition();

  const fetchNumber = (valueCacheKey: number) =>
    startTransition(async () => {
      const result = await getCachedData(valueCacheKey);
      alert(`fetched result is ${result}`);
    });

  return (
    <div>
      {isPending && <div className="animate-pulse">Loading...</div>}
      <div className="flex gap-2">
        <button className="px-2 py-1 bordered" onClick={() => fetchNumber(1)}>
          Fetch number 1
        </button>
        <button className="px-2 py-1 bordered" onClick={() => fetchNumber(2)}>
          Fetch number 2
        </button>
        <button className="px-2 py-1 bordered" onClick={() => fetchNumber(3)}>
          Fetch number 3
        </button>
      </div>
    </div>
  );
}

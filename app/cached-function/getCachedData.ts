'use server'

import { wait } from "@/lib"
import { cacheLife } from "next/cache";

export const getCachedData = async (valueCacheKey: number) => {
  'use cache'

  cacheLife('days');

  await wait(3000);

  return valueCacheKey;
}
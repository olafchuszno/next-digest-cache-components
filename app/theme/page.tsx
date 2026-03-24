import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default async function Page() {
  return (
    <main className="flex gap-2">
      <Link className="bordered flex items-center" href="/theme-check">
        Go to Theme check
      </Link>
      <ThemeToggle />
    </main>
  );
}

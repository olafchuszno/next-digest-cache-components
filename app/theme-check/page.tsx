import Link from 'next/link';
import { ThemeCheck } from './ThemeCheck';

export default function Page() {
  return (
    <main className="flex gap-2">
      <Link className="bordered flex items-center" href="/theme">
        Go to Theme
      </Link>
      <ThemeCheck />
    </main>
  );
}

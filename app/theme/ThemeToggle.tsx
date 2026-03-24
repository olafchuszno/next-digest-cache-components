'use client';

import type { FC } from 'react';
import { useTheme } from '../Providers';

export const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2 client-border">
      <div className="bordered">Current theme: {theme}</div>
      <button
        className="bordered"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
      </button>
    </div>
  );
};

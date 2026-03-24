'use client';

import { useTheme } from '../Providers';

export const ThemeCheck = () => {
  const { theme } = useTheme();
  return <div className="client-border">{theme}</div>;
};

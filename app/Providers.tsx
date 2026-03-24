'use client';

import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  type FC,
} from 'react';

type Theme = 'light' | 'dark';

type ThemeContextData = {
  theme: Theme;
  setTheme: (newThemeValue: Theme) => void;
};

const ThemeContext = createContext<ThemeContextData | null>(null);

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('Theme accessed outside of context');
  return context;
};

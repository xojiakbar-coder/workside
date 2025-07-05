import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ColorScheme = 'light' | 'dark';

interface ColorSchemeContextType {
  colorScheme: ColorScheme;
  toggleColorScheme: () => void;
}

const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(undefined);

interface ColorSchemeProviderProps {
  children: ReactNode;
  defaultColorScheme?: ColorScheme;
}

export const ThemeProvider: React.FC<ColorSchemeProviderProps> = ({ children, defaultColorScheme = 'light' }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
    const stored = localStorage.getItem('color-scheme');
    return (stored as ColorScheme) || defaultColorScheme;
  });

  useEffect(() => {
    localStorage.setItem('color-scheme', colorScheme);
    document.documentElement.setAttribute('data-theme', colorScheme);
  }, [colorScheme]);

  const toggleColorScheme = () => {
    setColorScheme(current => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, toggleColorScheme }}>{children}</ColorSchemeContext.Provider>
  );
};

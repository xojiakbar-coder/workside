import React, { createContext, useEffect, useState } from 'react';
import * as Types from './types';
import * as Constants from './constants';
import { storage } from '@/services/storage';

export const ThemeContext = createContext<Types.ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorScheme, setColorSchemeState] = useState<Types.ColorScheme>('light');

  const applyColorScheme = (scheme: Types.ColorScheme) => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(scheme);
  };

  useEffect(() => {
    const stored = storage.local.get(Constants.COLOR_SCHEME_KEY) as Types.ColorScheme | null;
    const initialScheme = stored === 'dark' || stored === 'light' ? stored : 'light';
    setColorSchemeState(initialScheme);
    applyColorScheme(initialScheme);
  }, []);

  const setColorScheme = (scheme: Types.ColorScheme) => {
    setColorSchemeState(scheme);
    storage.local.set(Constants.COLOR_SCHEME_KEY, scheme);
    applyColorScheme(scheme);
  };

  const clearColorScheme = () => {
    storage.local.remove(Constants.COLOR_SCHEME_KEY);
    setColorSchemeState('light');
    applyColorScheme('light');
  };

  const toggleColorScheme = () => {
    const newScheme = colorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(newScheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        colorScheme,
        setColorScheme,
        clearColorScheme,
        toggleColorScheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

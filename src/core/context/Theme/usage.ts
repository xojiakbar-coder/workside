import { useContext } from 'react';

import { ThemeContext } from './Theme';

import * as Types from './types';

const useTheme = (): Types.ThemeContextProps => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};

export default useTheme;

export type ColorScheme = 'light' | 'dark';

export interface ThemeContextProps {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  clearColorScheme: () => void;
  toggleColorScheme: () => void;
}

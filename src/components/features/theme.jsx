import { createTheming } from 'react-color-theme';

export const [ThemeProvider, useTheme, themes] = createTheming(
  {
    background: '#282836',
    foreground: '#3e3e4a',
    text: '#fff',
    primary: '#fc6',
    secondary: '#4f6bab',
  },
  {
    dark: {
      background: '#282836',
      foreground: '#3e3e4a',
      text: '#fff',
    },
    light: {
      background: 'red',
      foreground: '#eee',
      text: '#333',
    },
  },
);

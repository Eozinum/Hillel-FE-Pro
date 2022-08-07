import React from 'react';
import { themeContext } from './themeContext';
import { useEffect, useState, useMemo } from 'react';

const themes = {
  light: 'light',
  dark: 'dark',
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    window.document.querySelector('.all-notes').classList.add('theme-' + theme);
    return () => window.document.querySelector('.all-notes').classList.remove('theme-' + theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      themes,
    }),
    [theme, setTheme, themes]
  );

  return <themeContext.Provider value={value}>{children}</themeContext.Provider>;
};

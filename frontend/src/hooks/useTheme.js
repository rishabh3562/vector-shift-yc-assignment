import { useState, useEffect } from 'react';
import { THEMES } from '../constants/ui';

export const useTheme = () => {
  const [theme, setTheme] = useState(THEMES.DARK);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.className = theme;
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
  };

  return { theme, toggleTheme };
};
import { useState, useEffect } from 'react';
import { ThemeContext, themes } from './ThemeContext';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.remove('dark');
        break;
      case themes.dark:
      default:
        document.body.classList.add('dark');
        break;
    }
  }, [theme]);

  const changeTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

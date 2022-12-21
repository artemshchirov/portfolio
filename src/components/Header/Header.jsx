import { useState, useEffect, useContext } from 'react';
import { ThemeContext, themes } from '../../contexts/ThemeContext';

import ToggleDark from '../ui/ToggleDark';
import NavMenu from '../NavMenu/NavMenu';

import CustomLink from '../ui/CustomLink/CustomLink';

import './Header.scss';
import Button from '../ui/Button/Button';
import Title from '../ui/Title/Title';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const { changeTheme } = useContext(ThemeContext);

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    if (
      (!localStorage.getItem('theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) ||
      localStorage.getItem('theme') === 'dark'
    ) {
      setDarkMode(!darkMode);
      changeTheme(themes.dark);
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (evt) => {
        const colorScheme = evt.matches ? themes.dark : themes.light;
        setDarkMode(colorScheme === themes.dark);
        changeTheme(colorScheme);
        localStorage.setItem('theme', colorScheme);
      });
  }, []);

  return (
    <header className="header center">
      <Title Tag="h3">
        <CustomLink path="https://github.com/artemshchirov">ⱯS</CustomLink>
      </Title>

      <NavMenu isNavExpanded={isNavExpanded}>
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <ToggleDark
              toggleDark={() => {
                setDarkMode(!darkMode);
                const currentTheme = darkMode ? themes.light : themes.dark;
                changeTheme(currentTheme);
                localStorage.setItem('theme', currentTheme);
              }}
              isDarkMode={darkMode}
            />
          )}
        </ThemeContext.Consumer>

        <Button
          aria-label="toggle navigation"
          className="button_type_icon nav__hamburger"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <i
            aria-hidden="true"
            className={`fas ${isNavExpanded ? 'fa-times' : 'fa-bars'}`}
          />
        </Button>
      </NavMenu>
    </header>
  );
}

export default Header;

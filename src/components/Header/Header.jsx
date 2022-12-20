import { useState, useEffect, useContext } from 'react';
import { ThemeContext, themes } from '../../contexts/ThemeContext';

import ToggleDark from '../ui/ToggleDark';
import NavMenu from '../NavMenu/NavMenu';

import CustomLink from '../ui/CustomLink/CustomLink';

import './Header.scss';

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
      <h3>
        <CustomLink path="https://github.com/artemshchirov">ⱯS</CustomLink>
      </h3>

      <NavMenu isNavExpanded={isNavExpanded} />

      <nav className="nav center">
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

        <button
          type="button"
          aria-label="toggle navigation"
          className="button button_type_icon nav__hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <i
            aria-hidden="true"
            className={`fas ${isNavExpanded ? 'fa-times' : 'fa-bars'}`}
          />
        </button>
      </nav>
    </header>
  );
}

export default Header;

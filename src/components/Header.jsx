import { useState, useEffect, useContext } from 'react';
import { ThemeContext, themes } from '../contexts/ThemeContext';
import ToggleDark from './ToggleDark';
import NavMenu from './NavMenu';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const { changeTheme } = useContext(ThemeContext);

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(!darkMode);
      changeTheme(themes.dark);
    }
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (evt) => {
        const colorScheme = evt.matches ? themes.dark : themes.light;
        setDarkMode(colorScheme === themes.dark);
        changeTheme(colorScheme);
      });
  }, []);

  return (
    <header className="header center">
      <h3>
        <a href="https://artemshchirov.github.io/portfolio/" className="link">
          ⱯS
        </a>
      </h3>

      <NavMenu isNavExpanded={isNavExpanded} />

      <nav className="nav center">
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <ToggleDark
              toggleDark={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);
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

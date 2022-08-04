import { useState, useEffect, useContext } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { ThemeContext, themes } from "../contexts/ThemeContext";
import ToggleDark from "./ToggleDark";
import NavMenu from "./NavMenu";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { changeTheme } = useContext(ThemeContext);

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(!darkMode);
      changeTheme(themes.dark);
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (evt) => {
        const colorScheme = evt.matches ? themes.dark : themes.light;
        setDarkMode(colorScheme === themes.dark);
        changeTheme(colorScheme);
      });
  }, []); //TODO: missing dependency

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
            />
          )}
        </ThemeContext.Consumer>

        <Hamburger
          label="Show menu"
          toggled={isNavExpanded}
          toggle={setIsNavExpanded}
          size={20}
          duration={0}
        />
      </nav>
    </header>
  );
};

export default Header;

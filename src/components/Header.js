import { useState, useEffect, useContext } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { ThemeContext, themes } from "../contexts/ThemeContext";
import ToggleDark from "./ToggleDark";

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

      <nav className="nav center">
        <ul className={`nav__list center ${isNavExpanded && "opened"}`}>
          <li className="nav__list-item">
            <a className="link link_type_nav" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav__list-item">
            <a className="link link_type_nav" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a className="link link_type_nav" href="#contact">
              Contact
            </a>
          </li>
          <li className="nav__list-item">
            <a className="link link_type_nav" href="#top">
              Feedback
            </a>
          </li>
        </ul>

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
          toggled={isNavExpanded}
          toggle={setIsNavExpanded}
          size={20}
          duration={0.2}
        />
      </nav>
    </header>
  );
};

export default Header;

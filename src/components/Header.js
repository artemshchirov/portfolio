import { useState } from "react";
import { ThemeContext, themes } from "../contexts/ThemeContext";
import ToggleDark from "./ToggleDark";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="header center">
      <h3>
        <a href="https://example.com" className="link">
          ⱯS
        </a>
      </h3>

      <nav className="nav center">
        <ul className="nav__list center ">
          <li className="nav__list-item">
            <a className="link link_type_link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav__list-item">
            <a className="link link_type_link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a className="link link_type_nav" href="#contact">
              Contact
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

        <button
          type="button"
          aria-label="toggle navigation"
          className="button button_type_icon nav__hamburger"
        >
          <i aria-hidden="true" className="fas fa-bars"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;

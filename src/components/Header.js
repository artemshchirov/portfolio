import React from "react";

const Header = () => {
  //TODO: fas fa-moon
  //TODO: fas fa-bars
  return (
    <header className="header">
      <h3>
        <a
          href="https://rajshekhar26.github.io/cleanfolio-minimal"
          className="link"
        >
          AS.
        </a>
      </h3>

      <nav className="nav center">
        <ul className="nav__list center">
          <li className="nav__list-item">
            <a className="link nav__list-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav__list-item">
            <a className="link nav__list-link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a className="link link_type_nav" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label="toggle theme"
          className="button button_type_icon"
        >
          <i aria-hidden="true" id="btn-theme" className="fas fa-moon"></i>
        </button>

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
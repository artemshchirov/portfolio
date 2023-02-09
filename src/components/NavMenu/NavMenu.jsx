import './NavMenu.scss';

function NavMenu({ isNavExpanded, children }) {
  return (
    <nav className="nav center">
      <ul className={`nav__list center ${isNavExpanded && 'opened'}`}>
        <li className="nav__list-item">
          <a className="link_type_nav link" href="#projects">
            Projects
          </a>
        </li>
        <li className="nav__list-item">
          <a className="link_type_nav link" href="#skills">
            Skills
          </a>
        </li>
        <li className="nav__list-item">
          <a className="link_type_nav link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      {children}
    </nav>
  );
}

export default NavMenu;

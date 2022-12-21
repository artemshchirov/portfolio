import CustomLink from '../ui/CustomLink/CustomLink';

import './NavMenu.scss';

function NavMenu({ isNavExpanded, children }) {
  return (
    <nav className="nav center">
      <ul className={`nav__list center ${isNavExpanded && 'opened'}`}>
        <li className="nav__list-item">
          <CustomLink className="link_type_nav" path="#projects">
            Projects
          </CustomLink>
        </li>
        <li className="nav__list-item">
          <CustomLink className="link_type_nav" path="#skills">
            Skills
          </CustomLink>
        </li>
        <li className="nav__list-item">
          <CustomLink className="link_type_nav" path="#contact">
            Contact
          </CustomLink>
        </li>
      </ul>
      {children}
    </nav>
  );
}

export default NavMenu;

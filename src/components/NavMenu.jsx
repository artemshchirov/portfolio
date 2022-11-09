import CustomLink from './CustomLink/CustomLink';

function NavMenu({ isNavExpanded }) {
  return (
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
  );
}

export default NavMenu;

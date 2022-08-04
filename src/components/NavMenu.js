export default function NavMenu({ isNavExpanded }) {
  return (
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
    </ul>
  );
}

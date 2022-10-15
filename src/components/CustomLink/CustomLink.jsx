import './CustomLink.css';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

function CustomLink({
  path,
  children,
  className,
  activeClassName,
  target = '_blank',
  ariaLabel,
}) {
  let finalClassName = 'link';
  if (className) {
    finalClassName += ` ${className}`;
  }

  if (path.startsWith('http')) {
    return (
      <a
        href={path}
        className={finalClassName}
        aria-label={ariaLabel}
        target={target}
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }
  if (path.startsWith('#')) {
    return (
      <a className={finalClassName} href={path}>
        {children}
      </a>
    );
  }

  if (activeClassName) {
    return (
      <NavLink
        to={path}
        className={({ isActive }) =>
          `${finalClassName} ${isActive ? activeClassName : ''}`
        }
      >
        {children}
      </NavLink>
    );
  }
  return (
    <Link to={path} className={finalClassName}>
      {children}
    </Link>
  );
}

CustomLink.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  target: PropTypes.string,
  activeClassName: PropTypes.string,
};

CustomLink.defaultProps = {
  target: '_blank',
  activeClassName: '',
};

export default CustomLink;

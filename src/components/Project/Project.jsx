import Stack from './Stack';
import CustomLink from '../ui/CustomLink/CustomLink';

import './Project.scss';

function Project({ title, subtitle, stack, github, link }) {
  return (
    <article className="project">
      <div className="project__description">
        <h3 className="project__title">{title}</h3>
        <p className="project__subtitle">{subtitle}</p>
      </div>

      <div className="project__about">
        <Stack items={stack} />
        <CustomLink
          path={github}
          className="link_type_icon"
          ariaLabel="source code"
        >
          <i aria-hidden="true" className="fab fa-github" />
        </CustomLink>

        <CustomLink
          path={link}
          className="link_type_icon"
          ariaLabel="live preview"
        >
          <i aria-hidden="true" className="fas fa-external-link-alt" />
        </CustomLink>
      </div>
    </article>
  );
}

export default Project;

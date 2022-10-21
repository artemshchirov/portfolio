import './Project.css';
import Stack from '../Stack/Stack';
import CustomLink from '../CustomLink/CustomLink';

const Project = ({ title, subtitle, stack, github, link }) => {
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
          <i aria-hidden="true" className="fab fa-github"></i>
        </CustomLink>

        <CustomLink
          path={link}
          className="link_type_icon"
          ariaLabel="live preview"
        >
          <i aria-hidden="true" className="fas fa-external-link-alt"></i>
        </CustomLink>
      </div>
    </article>
  );
};

export default Project;

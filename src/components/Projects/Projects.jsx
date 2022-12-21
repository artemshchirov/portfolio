import Project from '../Project/Project';

import './Projects.scss';

const Projects = ({ cards, allProjects, displayedProjects, onClick }) => {
  return (
    <>
      <div className="projects__grid">
        {cards.map((card) => (
          <Project
            key={card.id}
            title={card.title}
            subtitle={card.subtitle}
            stack={card.stack}
            link={card.link}
            github={card.github}
          />
        ))}
      </div>

      <div className="projects__load">
        {allProjects !== displayedProjects.length && (
          <button className="button button_type_outline" onClick={onClick}>
            Show more projects
          </button>
        )}
      </div>
    </>
  );
};

export default Projects;

import Project from '../Project/Project';
import Button from '../ui/Button/Button';

import './Projects.scss';

function Projects({ cards, allProjects, displayedProjects, onClick }) {
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
          <Button
            aria-label="show more project cards"
            className="button_type_outline"
            onClick={onClick}
          >
            Show more projects
          </Button>
        )}
      </div>
    </>
  );
}

export default Projects;

import Project from '../Project/Project';

function Projects({ cards }) {
  return (
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
  );
}

export default Projects;

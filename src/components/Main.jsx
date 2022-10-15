import Typewriter from 'typewriter-effect';
import Project from './Projects/Projects';
import Skills from './Skills/Skills';
import CustomLink from './CustomLink/CustomLink';

const projects = [
  {
    id: 0,
    title: 'How to Learn',
    subtitle:
      'Web page describing various learning strategies, from experts such as Barbara Oakley, Feynman and Josh Kaufman.',
    stack: ['HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/artemshchirov/how-to-learn',
    link: 'https://artemshchirov.github.io/how-to-learn/#en',
  },
  {
    id: 1,
    title: 'Around The World',
    subtitle:
      'Web page showing a user`s information and photos they have uploaded from around the World. Images can be deleted, liked, and new images added.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/artemshchirov/mesto-react',
    link: 'https://artemshchirov.github.io/mesto/',
  },
  {
    id: 2,
    title: 'Travel',
    subtitle:
      'Web page describing various stops along the way of a train trip around the Portland.',
    stack: ['HTML', 'CSS'],
    github: 'https://github.com/artemshchirov/russian-travel',
    link: 'https://artemshchirov.github.io/russian-travel/',
  },
  {
    id: 3,
    title: 'Around The World',
    subtitle:
      'Web page showing a user`s information and photos they have uploaded from around the World. Images can be deleted, liked, and new images added.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/artemshchirov/russian-travel',
    link: 'https://artemshchirov.github.io/russian-travel/',
  },
  {
    id: 4,
    title: 'How to Learn',
    subtitle:
      'Web page describing various learning strategies, from experts such as Barbara Oakley, Feynman and Josh Kaufman.',
    stack: ['HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/artemshchirov/russian-travel',
    link: 'https://artemshchirov.github.io/russian-travel/',
  },
  {
    id: 5,
    title: 'Travel',
    subtitle:
      'Web page describing various stops along the way of a train trip around the Portland.',
    stack: ['HTML', 'CSS'],
    github: 'https://github.com/artemshchirov/russian-travel',
    link: 'https://artemshchirov.github.io/russian-travel/',
  },
];

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Node.js',
  'Express',
  'MongoDB',
  'Git',
  'GitHub',
  'Python',
  'Linux',
];

const Main = () => {
  return (
    <main className="content">
      <section className="about center">
        <h1 className="about__title">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `Hi, I am <span class="about__name">Artem Shchirov</span>.`
                )
                .start();
            }}
          />
        </h1>
        <h2 className="about__role">A Junior Front End Developer.</h2>
        <p className="about__description">
          I'm a Full-stack web developer specializing in building (sometimes
          designing) web platforms and applications.
          <br />
          Currently, I'm looking for some companies or teams to join and improve
          my experience and knowledge.
        </p>

        <div className="about__contact center">
          <a
            href="https://drive.google.com/file/d/1ifyxXgMoB2A0kK5Cwl5EX7nsxnJuo8BM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="button button_type_outline">Resume</span>
          </a>
          <CustomLink
            path="https://github.com/artemshchirov"
            className="link_type_icon"
            ariaLabel="github"
          >
            <i aria-hidden="true" className="fab fa-github"></i>
          </CustomLink>
          <CustomLink
            path="https://www.linkedin.com/in/artemshchirov/"
            className="link_type_icon"
            ariaLabel="linkedin"
          >
            <i aria-hidden="true" className="fab fa-linkedin"></i>
          </CustomLink>
        </div>
      </section>

      <section className="projects section" id="projects">
        <h2 className="title projects__title">Projects</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              stack={project.stack}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>
      </section>

      <section className="skills section" id="skills">
        <h2 className="title skills__title">Skills</h2>
        <Skills items={skills} />
      </section>

      <section className="contact section center" id="contact">
        <h2 className="title contact__title">Contact</h2>
        <a href="mailto:artemschirov@gmail.com">
          <span className="button button_type_outline">Email me</span>
        </a>
        <ul className="contact__items">
          <li>artemshchirov@gmail.com</li>
          <li>telegram: @mindisakey</li>
          <li>+972584441705</li>
        </ul>
      </section>
    </main>
  );
};

export default Main;

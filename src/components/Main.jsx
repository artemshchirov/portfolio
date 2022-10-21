import Typewriter from 'typewriter-effect';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import CustomLink from './CustomLink/CustomLink';
import { PROJECTS, SKILLS } from '../utils/constants';

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
        <Projects cards={PROJECTS} />
      </section>

      <section className="skills section" id="skills">
        <h2 className="title skills__title">Skills</h2>
        <Skills items={SKILLS} />
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

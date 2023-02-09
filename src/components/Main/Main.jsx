import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import CustomLink from '../ui/CustomLink/CustomLink';
import Title from '../ui/Title/Title';
import Section from '../ui/Section/Section';

import './Main.scss';

import {
  PROJECTS,
  SKILLS,
  CARD_COUNT,
  CARD_BREAKPOINT,
} from '../../utils/constants';

import useCardCount from '../../hooks/useCardCount';

function Main({ showAlert }) {
  const { t } = useTranslation();

  const [displayedProjects, setDisplayedProjects] = useState([]);

  const { countAddCards, startCountCards, setParamsCountCards } = useCardCount(
    CARD_COUNT,
    CARD_BREAKPOINT
  );

  useEffect(() => {
    setParamsCountCards('all');
    window.addEventListener('resize', setParamsCountCards);
    return () => window.removeEventListener('resize', setParamsCountCards);
  }, [setParamsCountCards]);

  useEffect(() => {
    setDisplayedProjects(PROJECTS.slice(0, startCountCards));
  }, [startCountCards]);

  const showMoreProjects = () => {
    const startIndex = displayedProjects.length;
    const endIndex = startIndex + countAddCards;

    setDisplayedProjects([
      ...displayedProjects,
      ...PROJECTS.slice(startIndex, endIndex),
    ]);
  };

  return (
    <main className="content">
      <Section className="about center">
        <Title Tag="h1" className="about__title">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `Hi, I am <span class="about__name">Artem Shchirov</span>.`
                )
                .start();
            }}
          />
        </Title>
        <Title className="about__role">{t('about__role')}</Title>
        <p className="about__description">
          I`m a Web Developer specializing in building (sometimes designing) web
          platforms and applications.
          <br />
          Currently, I`m looking for some companies or teams to join and improve
          my experience and knowledge.
        </p>

        <div className="about__contact center">
          <a
            href="https://drive.google.com/file/d/1xd22C068yESKEoRQ1_6lFnOQZotZnFIi/view?usp=sharing"
            aria-label="resume"
            target="_blank"
            rel="noreferrer"
          >
            <span className="button button_type_outline">Resume</span>
          </a>
          <CustomLink
            path="https://github.com/artemshchirov"
            className="link_type_icon"
            aria-label="github"
          >
            <i aria-hidden="true" className="fab fa-github" />
          </CustomLink>
          <CustomLink
            path="https://www.linkedin.com/in/artemshchirov/"
            className="link_type_icon"
            aria-label="linkedin"
          >
            <i aria-hidden="true" className="fab fa-linkedin" />
          </CustomLink>
        </div>
      </Section>

      <Section className="projects" id="projects">
        <Title className="projects__title">Projects</Title>
        <Projects
          cards={displayedProjects}
          allProjects={PROJECTS.length}
          displayedProjects={displayedProjects.length}
          onClick={showMoreProjects}
        />
      </Section>

      <Section className="skills" id="skills">
        <Title className="title skills__title">Skills</Title>
        <Skills items={SKILLS} />
      </Section>

      <Section className="contact center" id="contact">
        <Title className="title contact__title">Contact</Title>
        <a
          href="mailto:artemshchirov@gmail.com"
          onClick={() => {
            navigator.clipboard.writeText('artemshchirov@gmail.com');
            showAlert('email address copied to clipboard');
          }}
        >
          <span className="button button_type_outline">Email me</span>
        </a>
        <ul className="contact__items">
          <li>artemshchirov@gmail.com</li>
          <li>telegram: @mindisakey</li>
          <li>+972584441705</li>
        </ul>
      </Section>
    </main>
  );
}

export default Main;

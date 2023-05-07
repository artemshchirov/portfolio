// TODO refactor https://www.delasign.com/blog/custom-ga-event-reactjs-gatsbyjs/

import ReactGA from 'react-ga4';

const clickedShowMoreProjectsButton = () =>
  ReactGA.event({
    action: 'Click Show More Projects Button',
    category: 'Dashboard',
    label: 'real',
  });

const clickedChangeThemeButton = () =>
  ReactGA.event({
    action: 'Click Change Theme Button',
    category: 'UI',
    label: 'real',
  });

const clickedDownloadCVButton = () =>
  ReactGA.event({
    action: 'Click Download CV Button',
    category: 'Dashboard',
    label: 'real',
  });

const clickedGitHubButton = () =>
  ReactGA.event({
    action: 'Click GitHub Button',
    category: 'Dashboard',
    label: 'real',
  });

const clickedLinkedInButton = () =>
  ReactGA.event({
    action: 'Click LinkedIn Button',
    category: 'Dashboard',
    label: 'real',
  });

const clickedEmailMeButton = () =>
  ReactGA.event({
    action: 'Click Email Me Button',
    category: 'Dashboard',
    label: 'real',
  });

const clickedSourceButton = () =>
  ReactGA.event({
    action: 'Click Source Button',
    category: 'Dashboard',
    label: 'real',
  });

const clickedBurgerMenuButton = () =>
  ReactGA.event({
    action: 'Click Burger Menu Button',
    category: 'UI',
    label: 'real',
  });

const clickedScrollButton = () =>
  ReactGA.event({
    action: 'Click Scroll Button',
    category: 'UI',
    label: 'real',
  });

const gaEvents = {
  eventClickShowProjects: () => clickedShowMoreProjectsButton,
  eventClickChangeTheme: () => clickedChangeThemeButton,
  eventClickDownloadCV: () => clickedDownloadCVButton,
  eventClickGitHub: () => clickedGitHubButton,
  eventClickLinkedIn: () => clickedLinkedInButton,
  eventClickEmailMe: () => clickedEmailMeButton,
  eventClickSource: () => clickedSourceButton,
  eventClickBurgerMenu: () => clickedBurgerMenuButton,
  eventClickScrollButton: () => clickedScrollButton,
};

export default gaEvents;

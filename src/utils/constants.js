const SKILLS = [
  'HTML',
  'CSS',
  'SCSS',
  'Tailwind CSS',
  'JavaScript',
  'React.js',
  'TypeScript',
  'Git',
  'GitHub',
  'Node.js',
  'Express.js',
  'NestJS',
  'SQL',
  'MongoDB',
  'Firebase',
  'Linux',
  'Python',
];

const PROJECTS = [
  {
    id: 0,
    title: 'Electronic Store',
    subtitle:
      'The online store app where buyers can see a catalog of products and electronically purchase them. Currently project at frontend and backend connection step.',
    stack: ['React.js', 'TypeScript', 'NestJS', 'PostgreSQL'],
    github: 'https://github.com/artemshchirov/react-store-nest',
    link: 'https://github.com/artemshchirov/react-store-nest',
  },
  {
    id: 1,
    title: 'Hackwagon',
    subtitle:
      'The Hackwagon hackathon app features forms that allow you to gather data from users and send it to the backend. The full application enables you to create predictions for train arrival times.',
    stack: ['React.js', 'TypeScript', 'TailwindCSS', 'Primereact'],
    github: 'https://github.com/artemshchirov/hackwagon',
    link: 'https://hackwagon.vercel.app/',
  },
  {
    id: 2,
    title: 'DevRel Hack',
    subtitle:
      'The Developer Relations hackathon app is a multi-page website equipped with tools for locating and analyzing data about active contributors and repositories on GitHub.',
    stack: ['React.js', 'TypeScript', 'TailwindCSS', 'Primereact'],
    github: 'https://github.com/artemshchirov/devrel-hack',
    link: 'https://devrel-hack.vercel.app/',
  },
  {
    id: 3,
    title: 'Work Calendar',
    subtitle:
      'An application that allows you to select a date and register your day off in the calendar with a notification to the director.',
    stack: ['React.js', 'TypeScript', 'TailwindCSS', 'Firebase'],
    github: 'https://github.com/artemshchirov/work-calendar',
    link: 'https://work-calendar.vercel.app/',
  },
  {
    id: 4,
    title: 'Web Starter',
    subtitle:
      'A custom web starter template has been created for fast prototyping, primarily for use in hackathons. You can quickly create a new website and deploy it within a matter of minutes.',
    stack: ['React.js', 'TypeScript', 'TailwindCSS', 'Primereact'],
    github: 'https://github.com/artemshchirov/web-starter',
    link: 'https://web-starter-gamma.vercel.app/',
  },
  {
    id: 5,
    title: 'Chess 2D',
    subtitle:
      'A chess game was created as a learning exercise to familiarize oneself with TypeScript and some related tools.',
    stack: ['TypeScript', 'OOP', 'SCSS'],
    github: 'https://github.com/artemshchirov/ts-chess',
    link: 'https://github.com/artemshchirov/ts-chess',
  },
  {
    id: 6,
    title: 'Movies Explorer',
    subtitle:
      'This is a multiple page website with a landing on the main page and search and filter functionality available after user registration.',
    stack: ['React.js', 'Express.js', 'MongoDB', 'Nginx', 'i18next'],
    github: 'https://github.com/artemshchirov/react-movies-explorer-api-full',
    link: 'https://movies.explorer.project.nomoredomains.sbs',
  },
  {
    id: 7,
    title: 'Around',
    subtitle:
      'The web gallery allows users to explore and share their personal experiences and memories from different places around the globe.',
    stack: ['React.js', 'Express.js', 'MongoDB', 'Nginx', 'i18next'],
    github: 'https://github.com/artemshchirov/react-around-api-full',
    link: 'https://around.nomoredomains.sbs',
  },
  {
    id: 8,
    title: 'Dialog',
    subtitle:
      'Chat app that makes it easy to communicate with people anywhere by sending and receiving messages in real time.',
    stack: ['React.js', 'SCSS', 'BEM', 'Firebase'],
    github: 'https://github.com/artemshchirov/react-chat-app',
    link: 'https://chat-b4d42.web.app/',
  },
  {
    id: 9,
    title: 'NestJS backend',
    subtitle:
      'Backend application getting started project written in NestJS with PostgreSQL and docs with Swagger UI.',
    stack: ['NestJS', 'SwaggerUI', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/artemshchirov/nestjs-start-docker',
    link: 'https://github.com/artemshchirov/nestjs-start-docker',
  },
  {
    id: 10,
    title: 'Portfolio',
    subtitle:
      'Current website that showcases best web developer work, personality and talents.',
    stack: ['React.js', 'SCSS', 'BEM', 'i18next'],
    github: 'https://github.com/artemshchirov/portfolio',
    link: 'https://artemshchirov.github.io/portfolio/',
  },
  {
    id: 11,
    title: 'Travel',
    subtitle:
      'Web page describing various stops along the way of a train trip around the Portland.',
    stack: ['HTML', 'CSS', 'JavaScript', 'BEM', 'i18next'],
    github: 'https://github.com/artemshchirov/travel',
    link: 'https://artemshchirov.github.io/travel/',
  },
  {
    id: 12,
    title: 'Lubimovka',
    subtitle:
      'Team project web resource for theatre describing their next performance.',
    stack: ['HTML', 'CSS', 'JavaScript', 'BEM', 'Teamwork'],
    github: 'https://github.com/artemshchirov/lubimovka',
    link: 'https://github.com/artemshchirov/lubimovka',
  },
  {
    id: 13,
    title: 'How to Learn',
    subtitle:
      'Web page describing various learning strategies, from experts such as Barbara Oakley, Feynman and Josh Kaufman.',
    stack: ['HTML', 'CSS', 'Javascript', 'BEM'],
    github: 'https://github.com/artemshchirov/how-to-learn',
    link: 'https://artemshchirov.github.io/how-to-learn/#en',
  },
  {
    id: 14,
    title: 'Web console',
    subtitle:
      'A simple online console written as an exercise to learn React.js with styled-components library.',
    stack: ['React.js', 'CSS', 'styled-components'],
    github: 'https://github.com/artemshchirov/react-console',
    link: 'https://github.com/artemshchirov/react-console',
  },
  {
    id: 15,
    title: 'Tic Tac Toe',
    subtitle: 'A simple XO game written as an exercise to learn React.js.',
    stack: ['React.js', 'CSS'],
    github: 'https://github.com/artemshchirov/react-xo',
    link: 'https://github.com/artemshchirov/react-xo',
  },

  {
    id: 16,
    title: 'Weather-Cartoons',
    subtitle:
      'Getting started with Vue.js application that helps you find What To Watch When You Don`t Know What To Watch.',
    stack: ['Vue.js', 'CSS'],
    github: 'https://github.com/artemshchirov/vue-weather-cartoons',
    link: 'https://artemshchirov.github.io/vue-weather-cartoons/',
  },
  {
    id: 17,
    title: 'Life',
    subtitle:
      'Variety of The Game of Life, also known simply as Life, is a cellular automaton.',
    stack: ['Python', 'Pygame'],
    github: 'https://github.com/artemshchirov/life',
    link: 'https://github.com/artemshchirov/life',
  },
];

const CARD_COUNT = {
  SMALL_DEVICE: {
    ADD: 3,
    START: 3,
  },
  MIDDLE_DEVICE: {
    ADD: 2,
    START: 4,
  },
  BIG_DEVICE: {
    ADD: 3,
    START: 6,
  },
};

const CARD_BREAKPOINT = {
  TWO: 1000,
  ONE: 700,
};

export { SKILLS, PROJECTS, CARD_COUNT, CARD_BREAKPOINT };

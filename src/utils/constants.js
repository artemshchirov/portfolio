const SKILLS = [
  'HTML',
  'CSS',
  'SCSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Git',
  'GitHub',
  'Node.js',
  'Express.js',
  'NestJS',
  'SQL',
  'MongoDB',
  'Firebase',
  'Python',
  'Linux',
];

const PROJECTS = [
  {
    id: 0,
    title: 'Movies Explorer',
    subtitle:
      'This is a multiple page website with a simple landing on the main page and search and filter functionality available after user registration.',
    stack: ['React.js', 'Express.js', 'MongoDB', 'Nginx', 'i18next'],
    github: 'https://github.com/artemshchirov/react-movies-explorer-api-full',
    link: 'https://movies.explorer.project.nomoredomains.sbs',
  },
  {
    id: 1,
    title: 'Around',
    subtitle:
      'Interactive gallery showing a user`s information and pictures they have uploaded online from around the World.',
    stack: ['React.js', 'Express.js', 'MongoDB', 'Nginx', 'i18next'],
    github: 'https://github.com/artemshchirov/react-around-api-full',
    link: 'https://around.nomoredomains.sbs',
  },
  {
    id: 2,
    title: 'Chess 2D',
    subtitle:
      'A chess game written as an exercise to learn TypeScript and some associated tools.',
    stack: ['TypeScript', 'OOP', 'SCSS'],
    github: 'https://github.com/artemshchirov/ts-chess',
    link: 'https://github.com/artemshchirov/ts-chess',
  },
  {
    id: 3,
    title: 'Dialog',
    subtitle:
      'Chat app that makes it easy to communicate with people anywhere by sending and receiving messages in real time. (In progress...)',
    stack: ['React.js', 'SCSS', 'BEM', 'Firebase'],
    github: 'https://github.com/artemshchirov/react-chat-app',
    link: 'https://chat-b4d42.web.app/',
  },
  {
    id: 4,
    title: 'NestJS backend',
    subtitle:
      'Backend application getting started project written in NestJS with PostgreSQL and docs with Swagger UI.',
    stack: ['NestJS', 'SwaggerUI', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/artemshchirov/nestjs-start-docker',
    link: 'https://github.com/artemshchirov/nestjs-start-docker',
  },
  {
    id: 5,
    title: 'Portfolio',
    subtitle:
      'Current web developer website that showcases best work, personality and talents.',
    stack: ['React.js', 'SCSS', 'BEM', 'i18next'],
    github: 'https://github.com/artemshchirov/portfolio',
    link: 'https://artemshchirov.github.io/portfolio/',
  },
  {
    id: 6,
    title: 'Travel',
    subtitle:
      'Web page describing various stops along the way of a train trip around the Portland.',
    stack: ['HTML', 'CSS', 'JavaScript', 'BEM', 'i18next'],
    github: 'https://github.com/artemshchirov/travel',
    link: 'https://artemshchirov.github.io/travel/',
  },
  {
    id: 7,
    title: 'Lubimovka',
    subtitle:
      'Team project web resource for theatre describing their next performance.',
    stack: ['HTML', 'CSS', 'JavaScript', 'BEM', 'Teamwork'],
    github: 'https://github.com/artemshchirov/lubimovka',
    link: 'https://github.com/artemshchirov/lubimovka',
  },
  {
    id: 8,
    title: 'How to Learn',
    subtitle:
      'Web page describing various learning strategies, from experts such as Barbara Oakley, Feynman and Josh Kaufman.',
    stack: ['HTML', 'CSS', 'Javascript', 'BEM'],
    github: 'https://github.com/artemshchirov/how-to-learn',
    link: 'https://artemshchirov.github.io/how-to-learn/#en',
  },
  {
    id: 9,
    title: 'Web console',
    subtitle:
      'A simple online console written as an exercise to learn React.js with styled-components library.',
    stack: ['React.js', 'CSS', 'styled-components'],
    github: 'https://github.com/artemshchirov/react-console',
    link: 'https://github.com/artemshchirov/react-console',
  },
  {
    id: 10,
    title: 'Tic Tac Toe',
    subtitle: 'A simple XO game written as an exercise to learn React.js.',
    stack: ['React.js', 'CSS'],
    github: 'https://github.com/artemshchirov/react-xo',
    link: 'https://github.com/artemshchirov/react-xo',
  },

  {
    id: 11,
    title: 'Weather-Cartoons',
    subtitle:
      'Getting started with Vue.js application that helps you find What To Watch When You Don`t Know What To Watch.',
    stack: ['Vue.js', 'CSS'],
    github: 'https://github.com/artemshchirov/vue-weather-cartoons',
    link: 'https://artemshchirov.github.io/vue-weather-cartoons/',
  },
  {
    id: 12,
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

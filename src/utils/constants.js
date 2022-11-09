const SKILLS = [
  'HTML',
  'CSS',
  'Sass',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Firebase',
  'Git',
  'GitHub',
  'Python',
  'Linux',
];

const PROJECTS = [
  {
    id: 0,
    title: 'Movies Explorer',
    subtitle:
      'This is a multiple page website with a simple landing on the main page and search and filter functionality available after user registration.',
    stack: ['React.js', 'Express.js', 'MongoDB', 'Nginx'],
    github: 'https://github.com/artemshchirov/react-movies-explorer-api-full',
    link: 'https://movies.explorer.project.nomoredomains.sbs',
  },
  {
    id: 1,
    title: 'Around',
    subtitle:
      'Interactive gallery showing a user`s information and pictures they have uploaded online from around the World.',
    stack: ['React.js', 'Express.js', 'MongoDB', 'Nginx'],
    github: 'https://github.com/artemshchirov/react-around-api-full',
    link: 'https://around.nomoredomains.sbs',
  },
  {
    id: 2,
    title: 'Dialog',
    subtitle:
      'Chat app that makes it easy to communicate with people anywhere by sending and receiving messages in real time.',
    stack: ['React.js', 'Sass', 'Firebase'],
    github: 'https://github.com/artemshchirov/react-chat-app',
    link: 'https://chat-b4d42.web.app/',
  },
  {
    id: 3,
    title: 'Portfolio',
    subtitle: 'Website that showcases your best work, personality and talents.',
    stack: ['React.js', 'CSS'],
    github: 'https://github.com/artemshchirov/portfolio',
    link: 'https://artemshchirov.github.io/portfolio/',
  },
  {
    id: 5,
    title: 'Travel',
    subtitle:
      'Web page describing various stops along the way of a train trip around the Portland.',
    stack: ['HTML', 'CSS', 'JavaScript', 'i18next'],
    github: 'https://github.com/artemshchirov/travel',
    link: 'https://artemshchirov.github.io/travel/',
  },
  {
    id: 6,
    title: 'How to Learn',
    subtitle:
      'Web page describing various learning strategies, from experts such as Barbara Oakley, Feynman and Josh Kaufman.',
    stack: ['HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/artemshchirov/how-to-learn',
    link: 'https://artemshchirov.github.io/how-to-learn/#en',
  },
  {
    id: 7,
    title: 'Lubimovka',
    subtitle:
      'Team project web resource for theatre describing their next performance',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/artemshchirov/lubimovka',
    link: 'https://github.com/artemshchirov/lubimovka',
  },
  {
    id: 8,
    title: 'Weather-Cartoons',
    subtitle:
      'Team project web resource for theatre describing their next performance',
    stack: ['Vue.js', 'CSS'],
    github: 'https://github.com/artemshchirov/vue-weather-cartoons',
    link: 'https://artemshchirov.github.io/vue-weather-cartoons/',
  },
  {
    id: 9,
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

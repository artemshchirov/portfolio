const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Vue.js",
  "Nuxt3",
  "SCSS",
  "TailwindCSS",
  "Node.js",
  "Express.js",
  "NestJS",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "AWS",
  "Digital Ocean",
  "Vercel",
  "Docker",
  "Linux",
  "Postman",
  "Git",
  "Teamwork",
];

const PROJECTS = [
  {
    id: 6,
    title: "Widegamut Landing",
    subtitle:
      "The startup approached with a request to create a landing page with ability collect user data based on their Figma design 'as soon as possible'. From scratch to deployment, they received a Pixel Perfect result in 3 days",
    stack: ["Next.js", "TS", "Excel API", "TailwindCSS"],
    link: "https://lp.widegamut.co",
  },
  {
    id: 7,
    title: "Widegamut",
    subtitle:
      "widegamut.co is a portfolio platform for filmmakers. Users can showcase their work, find inspiration, and collaborate with other filmmakers — all in one place. The project is currently at the pre-launch stage",
    stack: ["Next.js", "TS", "PostgreSQL", "Prisma", "NestJS"],
    link: "https://beta.widegamut.co/stills",
  },
  {
    id: 8,
    title: "Photography Portfolio",
    subtitle:
      "Website where every shot turns into a story. The project is a personal portfolio of a photographer, showcasing their best work and providing a way to contact them. Built alongside with a Butcher Studio design team",
    stack: ["Nuxt3", "TypeScript", "SCSS", "GSAP", "OOP"],
    github: "https://github.com/artemshchirov/nadia-websito",
    link: "https://nadyabeson.com",
  },
  {
    id: 9,
    title: "Art Box Shop",
    subtitle:
      "The unique online store app allows buyers to view a catalog of products sorted by categories and purchase them online. The project is currently at the pre-launch stage, with the design completed by a web studio",
    stack: ["Next.js", "TS", "PostgreSQL", "Prisma", "GraphQL"],
    github: "https://github.com/artemshchirov/artboxshop",
    link: "https://artboxshop.co.il",
  },
  {
    id: 10,
    title: "Ultracube",
    subtitle:
      "Ecommerce Vue.js project demonstrating data management, API communication, navigation with Vue Router, styling with TailwindCSS, and animations",
    stack: ["Vue.js", "TypeScript", "SCSS", "REST", "Vercel"],
    github: "https://github.com/artemshchirov/ultracube",
    link: "https://ultracube.vercel.app/",
  },
  {
    id: 11,
    title: "Syncer CRM",
    subtitle:
      "Nuxt3 dashboard build with Vue Query for server sync, VeeValidate for forms, Pinia for state, Shadcn & TailwindCSS for design. Build for my personal use to manage clients and projects",
    stack: ["Nuxt3", "TS", "Appwrite", "Pinia", "Shadcn/ui"],
    github: "https://github.com/artemshchirov/syncer-crm",
    link: "https://github.com/artemshchirov/syncer-crm",
  },
  {
    id: 12,
    title: "AquaTherm",
    subtitle:
      "AquaTherm Systems - Specializes in high-efficiency boiler systems for hot water needs ecommerse store build as freelancer. The project is currently at the pre-launch stage",
    stack: ["Next.js", "TS", "Effector", "NestJS", "MySQL"],
    github: "https://github.com/artemshchirov/ecommerce-template",
    link: "https://ecommerce-template-web.vercel.app/auth",
  },
  {
    id: 13,
    title: "Work Calendar",
    subtitle:
      "An application that allows you to select a date and register your day off in the calendar with a notification to the director. Currently, the application is being used by Beeri-print workers",
    stack: ["React.js", "TypeScript", "TailwindCSS", "Firebase"],
    github: "https://github.com/artemshchirov/work-calendar",
    link: "https://vip-beeri.vercel.app",
  },
  {
    id: 14,
    title: "DevRel Hack",
    subtitle:
      "The Developer Relations hackathon app is a multi-page website equipped with tools for locating and analyzing data about active contributors and repositories on GitHub",
    stack: ["React.js", "TypeScript", "TailwindCSS", "Primereact"],
    github: "https://github.com/artemshchirov/devrel-hack",
    link: "https://devrel-hack.vercel.app/",
  },
  {
    id: 15,
    title: "Hackwagon",
    subtitle:
      "The Hackwagon hackathon app features forms that allow you to gather data from users and send it to the backend. The full application enables you to create predictions for train arrival times",
    stack: ["React.js", "TypeScript", "TailwindCSS", "Primereact"],
    github: "https://github.com/artemshchirov/hackwagon",
    link: "https://hackwagon.vercel.app/",
  },
  {
    id: 16,
    title: "Electronic Store",
    subtitle:
      "The online store app where buyers can see a catalog of products and electronically purchase them. Currently project at frontend and backend connection step",
    stack: ["React.js", "TypeScript", "NestJS", "PostgreSQL"],
    github: "https://github.com/artemshchirov/react-store-nest",
    link: "https://github.com/artemshchirov/react-store-nest",
  },
  {
    id: 17,
    title: "Web Starter",
    subtitle:
      "A custom web starter template has been created for fast prototyping, primarily for use in hackathons. You can quickly create a new website and deploy it within a matter of minutes",
    stack: ["React.js", "TypeScript", "TailwindCSS", "Primereact"],
    github: "https://github.com/artemshchirov/web-starter",
    link: "https://web-starter-gamma.vercel.app/",
  },
  {
    id: 18,
    title: "Chess 2D",
    subtitle:
      "A chess game was created as a learning exercise to familiarize oneself with TypeScript and some related tools",
    stack: ["React.js", "TypeScript", "OOP", "SCSS"],
    github: "https://github.com/artemshchirov/ts-chess",
    link: "https://github.com/artemshchirov/ts-chess",
  },
  {
    id: 19,
    title: "Movies Explorer",
    subtitle:
      "This is a multiple page website with a landing on the main page and search and filter functionality available after user registration",
    stack: ["React.js", "Express.js", "MongoDB", "Nginx", "i18next"],
    github: "https://github.com/artemshchirov/react-movies-explorer-api-full",
    link: "https://movies.explorer.project.nomoredomains.sbs",
  },
  {
    id: 20,
    title: "Around. React.js",
    subtitle:
      "The web gallery allows users to explore and share their personal experiences and memories from different places around the globe",
    stack: ["React.js", "Express.js", "MongoDB", "Nginx", "i18next"],
    github: "https://github.com/artemshchirov/react-around-api-full",
    link: "https://artemshchirov.github.io/around/",
  },
  {
    id: 21,
    title: "Around. JavaScript",
    subtitle:
      "The web gallery allows users to explore and share their personal experiences and memories from different places around the globe",
    stack: ["JavaScript", "CSS", "OOP", "DOM", "REST API"],
    github: "https://github.com/artemshchirov/around",
    link: "https://artemshchirov.github.io/around/",
  },
  {
    id: 22,
    title: "Portfolio",
    subtitle: "Current website that showcases best web developer work, personality and talents",
    stack: ["React.js", "SCSS", "BEM", "i18next"],
    github: "https://github.com/artemshchirov/portfolio",
    link: "https://artemshchirov.github.io/portfolio/",
  },
  {
    id: 23,
    title: "Dialog",
    subtitle:
      "Chat app that makes it easy to communicate with people anywhere by sending and receiving messages in real time. The project needs some refactoring; it is on my to-do list",
    stack: ["React.js", "SCSS", "BEM", "Firebase"],
    github: "https://github.com/artemshchirov/react-chat-app",
    link: "https://chat-b4d42.web.app/",
  },
  {
    id: 25,
    title: "Travel",
    subtitle: "Web page describing various stops along the way of a train trip around the Portland",
    stack: ["HTML", "CSS", "JavaScript", "BEM", "i18next"],
    github: "https://github.com/artemshchirov/travel",
    link: "https://artemshchirov.github.io/travel/",
  },
  {
    id: 26,
    title: "Lubimovka",
    subtitle: "Team project web resource for theatre describing their next performance",
    stack: ["HTML", "CSS", "JavaScript", "BEM", "Teamwork"],
    github: "https://github.com/artemshchirov/lubimovka",
    link: "https://github.com/artemshchirov/lubimovka",
  },
  {
    id: 27,
    title: "How to Learn",
    subtitle:
      "Web page describing various learning strategies, from experts such as Barbara Oakley, Feynman and Josh Kaufman",
    stack: ["HTML", "CSS", "Javascript", "BEM"],
    github: "https://github.com/artemshchirov/how-to-learn",
    link: "https://artemshchirov.github.io/how-to-learn/#en",
  },
  {
    id: 28,
    title: "Web console",
    subtitle:
      "A simple online console written as an exercise to learn React.js with styled-components library",
    stack: ["React.js", "CSS", "styled-components"],
    github: "https://github.com/artemshchirov/react-console",
    link: "https://github.com/artemshchirov/react-console",
  },
  {
    id: 30,
    title: "Weather-Cartoons",
    subtitle:
      "Getting started with Vue.js application that helps you find What To Watch When You Don`t Know What To Watch",
    stack: ["Vue.js", "CSS", "REST API"],
    github: "https://github.com/artemshchirov/vue-weather-cartoons",
    link: "https://artemshchirov.github.io/vue-weather-cartoons/",
  },
  {
    id: 31,
    title: "PyDew Valley",
    subtitle:
      "A Stardew Valley style game. This includes farming, a day and night cycle, weather effects and a merchant",
    stack: ["Python", "Pygame", "Tiled"],
    github: "https://github.com/artemshchirov/pydew-valley",
    link: "https://github.com/artemshchirov/pydew-valley",
  },
  {
    id: 32,
    title: "PyZelda RPG",
    subtitle:
      "A Zelda style game. This includes weapons and enemies, a magic and spells, upgrades and a sound effects",
    stack: ["Python", "Pygame", "Tiled"],
    github: "https://github.com/artemshchirov/pymario-maker",
    link: "https://github.com/artemshchirov/pymario-maker",
  },
  {
    id: 33,
    title: "The Game of Life",
    subtitle: "Variety of The Game of Life, also known simply as Life, is a cellular automaton",
    stack: ["Python", "Pygame"],
    github: "https://github.com/artemshchirov/life",
    link: "https://github.com/artemshchirov/life",
  },
  {
    id: 34,
    title: "Pymario Maker",
    subtitle:
      "Mario Maker style game in Python with a level editor, transitions, enemy behavior, animations, menus and a player camera.",
    stack: ["Python", "Pygame", "Tiled"],
    github: "https://github.com/artemshchirov/pyzelda-rpg",
    link: "https://github.com/artemshchirov/pyzelda-rpg",
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

export { CARD_BREAKPOINT, CARD_COUNT, PROJECTS, SKILLS };

export type ProjectData = {
  id: number;
  title: string;
  image?: string | null;
  links: ProjectDataLink[];
  description: string;
  freelance: boolean;
  tags: string[];
};

export type ProjectDataLink = {
  id: number;
  url: string;
  title: string;
};

export const projectData = [
  {
    id: 1,
    title: "BallotBox",
    image: "/vote-ballotbox.png",
    description:
      "Custom voting platform with embeddable polling widget. Built with a React \
      frontend and a Ruby on Rails API that uses a Postgres database. I've also setup a REDIS instance that powers \
      the Activity Feed. Voters are able to create their own Ballots and choose the correct winning Option which \
      will kick of a worker using SolidQueue. Heavily uses service object design and has RSpec tests to validate functionality.",
    freelance: false,
    links: [
      {
        id: 1,
        url: "https://voteballotbox.com",
        title: "Live Site",
      },
    ],
    tags: [
      "React",
      "Typescript",
      "Ruby on Rails",
      "REDIS",
      "SolidQueue",
      "Postgres",
      "RSpec",
      "Figma",
    ],
  },
  {
    id: 2,
    title: "Simple Budget Control",
    image: "/simple-budget-control.png",
    description:
      "A simple tool to help manage your budget paycheck to paycheck. This is based off of an automated \
      spreadsheet I've been using for years as others have asked for it. Built with just React v18 and we \
      are storing all data in LocalStorage",
    freelance: false,
    links: [
      {
        id: 1,
        url: "https://simplebudgetcontrol.com/",
        title: "Live Site",
      },
      {
        id: 2,
        url: "https://github.com/denvermullets/simple-budget-control",
        title: "Frontend Repo",
      },
    ],
    tags: ["React", "Typescript", "Figma"],
  },

  {
    id: 3,
    title: "When the Music Stops",
    image: "/wtms.png",
    description:
      "A super minimal callback to oldschool PhPbb forums, built with Ruby on Rails. Initially started as a way to play with newest Hotwire and Turbo stuff in Rails 7, and it\
      has grown into a small collection of people talking about music. It's really basic but I added some regex to handle auto embeds so we don't have to use bbcode style tags all\
      over the place.",
    freelance: false,
    links: [
      {
        id: 1,
        url: "https://whenthemusicstops.net",
        title: "Live Site",
      },
      {
        id: 2,
        url: "https://github.com/denvermullets/when-the-music-stops",
        title: "Rails Repo",
      },
    ],
    tags: ["Ruby on Rails", "Postgres", "Tailwind", "Figma"],
  },
  {
    id: 4,
    title: "MindWire",
    image: null,
    description:
      "I was tasked with building an employee resource dashboard using Strapi for the backend and React Typescript on the frontend. I can't show the app but it exists, I promise 😁",
    freelance: true,
    links: [],
    tags: ["React", "Typescript", "Strapi", "Node.js"],
  },
  {
    id: 5,
    title: "Basketball Timeline",
    image: "/basketball-timeline.png",
    description:
      "NBA Lineup visualizer uitilizing data scraped via my Ruby on Rails API to show you the starting \
      lineups thru the season. The backend uses a Sidekiq for initial ingestion of data that is scraped\
      from a popular site.",
    freelance: false,
    links: [
      {
        id: 1,
        url: "https://basketball-timeline.com/?team=PHO&year=2023",
        title: "Live Site",
      },
      {
        id: 2,
        url: "https://github.com/denvermullets/basketball-timeline-client",
        title: "Frontend Repo",
      },
      {
        id: 3,
        url: "https://github.com/denvermullets/basketball-timeline",
        title: "Backend Repo",
      },
    ],
    tags: ["React", "Typescript", "Ruby on Rails", "Sidekiq", "Figma"],
  },
  {
    id: 6,
    title: "99 Staples",
    image: "/99staples.png",
    description:
      "A Magic: The Gathering collection app built with Typescript, React, and Ruby on Rails. Hosted on \
      Render and it uses Sidekiq, REDIS, and a Postgresql database. A worker keeps the current database of \
      cards up to date and also adds basic current pricing info. I setup github actions to handle merging \
      and generating release notes. This project is a few years old now so a lot of the frontend code and \
      probably some of the backend code should be updated.",
    freelance: false,
    links: [
      {
        id: 1,
        url: "https://www.99staples.com/collections/denvermullets/9",
        title: "Live Site",
      },
      {
        id: 2,
        url: "https://github.com/denvermullets/ninetynine-staples-front-end",
        title: "Frontend Repo",
      },
      {
        id: 3,
        url: "https://github.com/denvermullets/ninetynine-staples",
        title: "Backend Repo",
      },
    ],
    tags: ["React", "Typescript", "Ruby on Rails", "Sidekiq", "Postgres", "Figma"],
  },
  {
    id: 7,
    title: "Mentumm",
    image: "/mentumm.png",
    description:
      "Career coach booking service. Built using Typescript, React, and uses a Nodejs, Express, REST API on the backend. Admin dashboard was built with ReTool and also uses Mixpanel to track events for reporting.",
    freelance: true,
    links: [
      {
        id: 1,
        url: "https://portal.mentumm.com/",
        title: "Live Site",
      },
    ],
    tags: ["React", "Typescript", "Node.js", "Postgres"],
  },
  {
    id: 8,
    title: "Collectable Moments",
    image: "/collectable-moments.png",
    description:
      "A simple daily memory app built with Typescript, React, and a Ruby on Rails API. ",
    freelance: false,
    links: [
      {
        id: 1,
        url: "https://github.com/denvermullets/collectable-moments",
        title: "Frontend Repo",
      },
      {
        id: 2,
        url: "https://github.com/denvermullets/collectable-moments-api",
        title: "Backend Repo",
      },
    ],
    tags: ["React", "Typescript", "Ruby on Rails", "Postgres"],
  },
];

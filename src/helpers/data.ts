export type ProjectData = {
  id: number;
  title: string;
  image: string;
  links: ProjectDataLink[];
  description: string;
  freelance: boolean;
  tags: string[];
};

type ProjectDataLink = {
  id: number;
  url: string;
  title: string;
};

export const projectData = [
  {
    id: 1,
    title: "BallotBox",
    image: "src/assets/vote-ballotbox.png",
    description:
      "Custom voting platform with embeddable polling widget. Built with a React \
      frontend and a Ruby on Rails API that uses a Postgres database. I've also setup a REDIS instance that powers \
      the Activity Feed. Voters are able to create their own Ballots and choose the correct winning Option which \
      will kick of a worker using SolidQueue.",
    freelance: true,
    links: [
      {
        id: 1,
        url: "https://github.com/denvermullets",
        title: "Live Site",
      },
      {
        id: 2,
        url: "https://github.com/denvermullets",
        title: "Frontend Repo",
      },
      {
        id: 3,
        url: "https://github.com/denvermullets",
        title: "Backend Repo",
      },
    ],
    tags: ["React", "Typescript", "Ruby on Rails", "REDIS", "SolidQueue", "Figma", "Design"],
  },
  {
    id: 2,
    title: "Basketball Timeline",
    image: "src/assets/basketball-timeline.png",
    description: "This is a fun way to visualize lineup changes over a season.",
    freelance: false,
    links: [
      {
        id: 1,
        url: "https://github.com/denvermullets",
        title: "Frontend",
      },
    ],
    tags: ["Figma", "Design", "React 18", "Typescript", "Ruby on Rails"],
  },
  {
    id: 3,
    title: "Collectable Moments",
    image: "src/assets/collectable-moments.png",
    description: "This is a fun way to visualize lineup changes over a season.",
    freelance: false,
    links: [
      {
        id: 1,
        url: "https://github.com/denvermullets",
        title: "Frontend",
      },
    ],
    tags: ["Figma", "Design", "React 18", "Typescript", "Ruby on Rails"],
  },
  {
    id: 4,
    title: "Mentumm",
    image: "src/assets/mentumm.png",
    description: "This is a fun way to visualize lineup changes over a season.",
    freelance: false,
    links: [
      {
        id: 1,
        url: "https://github.com/denvermullets",
        title: "Frontend",
      },
    ],
    tags: ["Figma", "Design", "React 18", "Typescript", "Ruby on Rails"],
  },
];

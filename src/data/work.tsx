import { v4 } from "uuid";

export interface Timeline {
  id: string;
  title: string;
  description: string;
  alt: string;
  dates: string;
  stacks: string[];
  content: string[];
}

const work = [
  {
    id: v4(),
    title: "Senior Software Engineer",
    description: "Rhino Partners",
    alt: "Colombo, Sri Lanka",
    dates: "Dec 2021 - Present",
    stacks: ["React Native", "Redux", "Redux-Saga", "AppCenter"],
    content: [
      "Currently engaged in developing multiple features for a React Native project written using Typescript including designing, UI/UX development, integrations, unit testing as well as deployment in to multiple environments via AppCenter.",
    ],
  },
  {
    id: v4(),
    title: "Software Engineer",
    description: "Calcey Technologies",
    alt: "Colombo, Sri Lanka",
    dates: "Dec 2020 - Dec 2021",
    stacks: [
      "React",
      "React Native",
      "Redux",
      "Redux-Saga",
      "Fastlane",
      "CircleCI",
      "Reselect",
      "Next JS",
      "D3JS",
      "Konva JS",
    ],
    content: [
      "Solely responsible in writing CI/CD pipelines for multiple React and React Native projects in CircleCi. Also setup distribution for multiple mobile applications using Fastlane via Firebase.",
      "Successful in reviving an obsolete React Native kiosk application for restaurants and developing multiple feature while also bringing the application to production. Also acquired experience developing multiple features for multiple React Native projects including a POS application.",
      "Instrumental in developing a graphical table management feature for a React JS project to seamlessly design the layout of a restaurant with chairs/tables and other objects and assign and display order information (see OpenTable and draw.io).",
      "Developed multiple Data Visualisation graphs such as Bar Graphs (Grouped, Stacked, Vertical, Horizontal), Line Charts and Pie Charts on a React JS project using D3 JS.",
      "Also developed multiple features for multiple React JS and Next JS applications while also optimising overall application performance and improving Redux architecture.",
    ],
  },
  {
    id: v4(),
    title: "Software Engineer",
    description: "Atlas Labs",
    alt: "Colombo, Sri Lanka",
    dates: "Jul 2020 - Dec 2020",
    stacks: ["Angular", "Express JS", "Node JS"],
    content: [
      "Responsibilities in developing multiple features for a project cost management application with an Angular front end as well as Express back end with MongoDB as a database solution with exposure in Data Visualisation.",
      "Instrumental in updating multiple legacy Angular front end projects and Express JS contract based micro services while fixing all discrepancies and taking the applications to production. Also developed multiple features for the above applications.",
      "Automated build and deployment workflows for 10+ MERN stack projects to be built and deployed in various environments with zero downtime.",
    ],
  },
  {
    id: v4(),
    title: "Associate Software Engineer",
    description: "Etcetera Solutions",
    alt: "Colombo, Sri Lanka",
    dates: "Jul 2020 - Dec Feb 2021",
    stacks: ["React JS", "React Native", "Redux", "Redux-Saga", "Spring Boot"],
    content: [
      "Spearheaded the front-end team behind thyaga.lk while setting up multiple projects and Redux architectures also implementing Auth Flows, UI/UX development, integration and Payment gateway features. Also was responsible for improving the overall performance of the application.",
    ],
  },
  {
    id: v4(),
    title: "Intern Software Engineer",
    description: "Calcey Technologies",
    alt: "Colombo, Sri Lanka",
    dates: "Nov 2018 - Apr 2019",
    stacks: ["React Native", "Redux", "Redux Saga", "Realm JS"],
    content: [
      "Contributed in setting up the initial project structure for a React Native fitness tracker application and developed features such as Authentication Flows and data visualisation.",
      "Performed research and integrations in to Computer Vision APIs such as Cloud Vision, AWS Rekognition, Microsoft Cognitive and Firebase MLKit with exposure in to writing Native Modules.",
      "Implemented IOS Messenger type swipe-able button for React Native using Native Modules.",
    ],
  },
];

export default work;

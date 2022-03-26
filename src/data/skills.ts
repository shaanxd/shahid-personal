export enum SkillLevel {
  AVERAGE = "EXPOSED",
  GOOD = "GOOD",
  GREAT = "GREAT",
}

export interface SkillItem {
  label: string;
  level: SkillLevel;
}

export interface Skill {
  title: string;
  skills: SkillItem[];
}

const skills: Skill[] = [
  {
    title: "Languages",
    skills: [
      {
        label: "JavaScript",
        level: SkillLevel.GREAT,
      },
      {
        label: "TypeScript",
        level: SkillLevel.GREAT,
      },
      {
        label: "Java",
        level: SkillLevel.GOOD,
      },
      {
        label: "C#",
        level: SkillLevel.AVERAGE,
      },
    ],
  },
  {
    title: "Web Development",
    skills: [
      {
        label: "React",
        level: SkillLevel.GREAT,
      },
      {
        label: "Angular",
        level: SkillLevel.GREAT,
      },
      {
        label: "Node JS",
        level: SkillLevel.GREAT,
      },
      {
        label: "Express JS",
        level: SkillLevel.GREAT,
      },
      {
        label: "HTML",
        level: SkillLevel.GREAT,
      },
      {
        label: "CSS",
        level: SkillLevel.GREAT,
      },
      {
        label: "SCSS",
        level: SkillLevel.GREAT,
      },
      {
        label: "Next JS",
        level: SkillLevel.GOOD,
      },
      {
        label: "Spring Boot",
        level: SkillLevel.GOOD,
      },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      {
        label: "React Native",
        level: SkillLevel.GREAT,
      },
      {
        label: "Android",
        level: SkillLevel.GOOD,
      },
      {
        label: "Flutter",
        level: SkillLevel.AVERAGE,
      },
    ],
  },
  {
    title: "Database solutions",
    skills: [
      {
        label: "Sequelize",
        level: SkillLevel.GREAT,
      },
      {
        label: "Mongoose",
        level: SkillLevel.GREAT,
      },
      {
        label: "MongoDB",
        level: SkillLevel.GREAT,
      },
      {
        label: "MySQL",
        level: SkillLevel.AVERAGE,
      },
    ],
  },
  {
    title: "Data Visualization",
    skills: [
      {
        label: "D3 JS",
        level: SkillLevel.GREAT,
      },
      {
        label: "Konva JS",
        level: SkillLevel.GREAT,
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        label: "Fastlane",
        level: SkillLevel.GREAT,
      },
      {
        label: "CircleCI",
        level: SkillLevel.GREAT,
      },
      {
        label: "Firebase",
        level: SkillLevel.GREAT,
      },
      {
        label: "AppCenter",
        level: SkillLevel.GOOD,
      },
      {
        label: "Codepush",
        level: SkillLevel.AVERAGE,
      },
    ],
  },
  {
    title: "Version Controlling",
    skills: [
      {
        label: "Git",
        level: SkillLevel.GREAT,
      },
      {
        label: "GitHub",
        level: SkillLevel.GREAT,
      },
      {
        label: "BitBucket",
        level: SkillLevel.GREAT,
      },
      {
        label: "GitLab",
        level: SkillLevel.GREAT,
      },
    ],
  },
  {
    title: "Other frameworks/libraries",
    skills: [
      {
        label: "Redux JS",
        level: SkillLevel.GREAT,
      },
      {
        label: "Redux Saga",
        level: SkillLevel.GREAT,
      },
      {
        label: "Normalizr",
        level: SkillLevel.GREAT,
      },
      {
        label: "Moment JS",
        level: SkillLevel.GREAT,
      },
      {
        label: "Lodash",
        level: SkillLevel.GREAT,
      },
      {
        label: "Reselect",
        level: SkillLevel.GREAT,
      },
      {
        label: "Axios",
        level: SkillLevel.GREAT,
      },
    ],
  },
];

export default skills;

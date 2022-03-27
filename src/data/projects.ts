export interface Project {
  name: string;
  description: string;
  demo?: string;
  github?: string;
  stacks: string[];
}

const projects: Project[] = [
  {
    name: "Table Maps",
    description:
      "A graphical restaurant layout management system made using Konva JS and React JS.",
    demo: "https://table-maps-9f262.web.app/",
    github: "https://github.com/shaanxd/table-maps",
    stacks: ["React JS", "Konva JS", "Styled Components"],
  },
  {
    name: "React D3 Google Calendar",
    description: "A clone of google calendar made using D3 JS and React JS.",
    demo: "https://d3-calendar-244bd.web.app",
    github: "https://github.com/shaanxd/react-d3-calendar",
    stacks: ["React JS", "D3 JS", "Styled Components"],
  },
];

export default projects;

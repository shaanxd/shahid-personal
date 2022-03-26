import { IconType } from "react-icons";
import { IoLogoJavascript, IoLogoNodejs, IoLogoReact } from "react-icons/io5";

export interface Highlight {
  title: string;
  percentage: number;
  people: string;
  icon: IconType;
  color: string;
}

const highlights: Highlight[] = [
  {
    title: "JavaScript",
    percentage: 5,
    people: "1.7m",
    icon: IoLogoJavascript,
    color: "#F7E018",
  },
  {
    title: "React JS",
    percentage: 30,
    people: "571.7k",
    icon: IoLogoReact,
    color: "#04D1F7",
  },
  {
    title: "Node JS",
    percentage: 15,
    people: "292.4k",
    icon: IoLogoNodejs,
    color: "#509640",
  },
];

export default highlights;

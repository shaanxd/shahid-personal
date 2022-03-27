import React from "react";
import styled from "styled-components";
import skills, { Skill, SkillItem, SkillLevel } from "../data/skills";
import highlights, { Highlight } from "../data/highlights";
import colors from "../styles/colors";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import projects, { Project } from "../data/projects";

const asOfDate = "26th March 2022";

const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  color: ${colors.WHITE};
`;

const Title = styled(Label)`
  font-size: 50px;
  font-weight: 600;
  padding-bottom: 2px;
  margin-top: 20px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

const AltLabel = styled.span`
  font-weight: 800;
  color: ${colors.PRIMARY};
`;

const Description = styled(Label)`
  font-size: 15px;
  margin: 20px 0px;
  line-height: 30px;
`;

const TextContainer = styled.div`
  width: 100%;
  text-align: justify;
  display: flex;
  flex-direction: column;
  max-width: 800px;
`;

const Anchor = styled.a`
  color: ${colors.PRIMARY};
  cursor: pointer;
  border-bottom: 1px solid transparent;

  :-webkit-any-link {
    text-decoration: none;
    -webkit-text-decoration: none;
  }

  &:hover {
    border-bottom-color: ${colors.PRIMARY};
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillRoot = styled.div`
  display: flex;
  margin: 15px 0px;
  display: flex;
  flex-direction: column;
`;

const HighlightContainer = styled.div`
  display: flex;
  margin: 20px 0px;
`;

const HighlightItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex: 1;
  align-items: center;
`;

const SkillsTitle = styled(Label)`
  font-size: 26px;
  margin-top: 10px;
  font-weight: 600;
`;

const HighlightPercentage = styled(Label)`
  margin-top: 20px;
  padding: 5px 8px;
  background-color: ${colors.PRIMARY};
  color: ${colors.WHITE};
  border-radius: 5px;
  font-size: 18px;
  text-align: center;
`;

const HighlightPeople = styled(Label)`
  margin-top: 5px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
`;

interface SkillsProps {
  level: SkillLevel;
}

const Skills = styled.span<SkillsProps>`
  font-size: 12px;
  padding: 12px 18px;
  margin-right: 5px;
  font-weight: 600;
  border-radius: 5px;
  color: ${colors.WHITE};
  white-space: nowrap;
  margin-top: 10px;

  background-color: ${({ level }) =>
    level === SkillLevel.GREAT
      ? colors.PRIMARY
      : level === SkillLevel.GOOD
      ? colors.SECONDARY_LIGHT
      : colors.SECONDARY_DARK};
`;

const Stack = styled.div`
  font-size: 12px;
  padding: 4px 4px;
  margin-right: 5px;
  border-radius: 5px;
  color: ${colors.WHITE};
  white-space: nowrap;
  margin-top: 10px;
  background-color: ${colors.PRIMARY};
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${Skills}:last-child {
    margin-right: 0px;
  }

  ${Stack}
`;

const SkillsDescription = styled(Label)`
  font-size: 14px;
  margin-top: 5px;
  font-weight: 600;
  line-height: 30px;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  background-color: ${colors.SECONDARY_LIGHT};
  padding: 15px;
  border-radius: 5px;

  box-shadow: 10px 10px ${colors.BLACK};
`;

const ProjectHeader = styled(Label)`
  font-size: 18px;
  font-weight: 600;
`;

const ProjectDescription = styled(Description)`
  margin: 0px;
`;

const Link = styled.a`
  color: ${colors.WHITE};
  margin-right: 10px;
  border-bottom: 1px solid ${colors.WHITE};

  :-webkit-any-link {
    text-decoration: none;
    -webkit-text-decoration: none;
  }
`;

const ResumeDescription = styled(Label)`
  text-align: center;
  font-size: 20px;
  margin-top: 30px;
  font-weight: 600;
`;

const ResumeLink = styled.a`
  color: ${colors.PRIMARY};

  :-webkit-any-link {
    text-decoration: none;
    -webkit-text-decoration: none;
  }
`;

const About = () => {
  const renderSkill = ({ label, level }: SkillItem) => (
    <Skills level={level}>{label}</Skills>
  );

  const renderSkillItem = ({ title, skills }: Skill) => {
    return (
      <SkillRoot>
        <ProjectHeader>{title}</ProjectHeader>
        <SkillList>{skills.map(renderSkill)}</SkillList>
      </SkillRoot>
    );
  };

  const renderHighlightItem = ({
    title,
    percentage,
    people,
    icon: HighlightIcon,
    color,
  }: Highlight) => {
    return (
      <HighlightItem key={title}>
        <CircularProgressbarWithChildren
          value={percentage}
          styles={buildStyles({
            pathColor: colors.PRIMARY,
          })}
          strokeWidth={5}
        >
          <HighlightIcon size="9vw" color={color} />
        </CircularProgressbarWithChildren>
        <HighlightPercentage>Top {percentage}%</HighlightPercentage>
        <HighlightPeople>of {people} people</HighlightPeople>
      </HighlightItem>
    );
  };

  const renderStackItem = (label: string) => {
    return <Stack>{label}</Stack>;
  };

  const renderProjectItem = ({
    name,
    description,
    stacks,
    demo,
    github,
  }: Project) => {
    return (
      <ProjectItem>
        <ProjectHeader>{name}</ProjectHeader>
        <SkillList>{stacks.map(renderStackItem)}</SkillList>
        <ProjectDescription>{description}</ProjectDescription>
        <SkillList>
          <Link href={demo} target="_blank" rel="noreferrer">
            Live Demo
          </Link>
          <Link href={github} target="_blank" rel="noreferrer">
            Github
          </Link>
        </SkillList>
      </ProjectItem>
    );
  };

  return (
    <Container>
      <TextContainer>
        <Title>
          About me <AltLabel>.</AltLabel>
        </Title>
        {/* <CoderCat /> */}
        <Description>
          I'm a <AltLabel>Software Engineer</AltLabel> based on Colombo, Sri
          Lanka who loves solving problems constantly to scratch that itch in
          the brain. Having 2 years of hands experience with a strong{" "}
          <AltLabel>JavaScript</AltLabel> background with exposure in to
          frameworks and libraries such as <AltLabel>React</AltLabel>,{" "}
          <AltLabel>React Native</AltLabel>, <AltLabel>Express</AltLabel> and{" "}
          <AltLabel>Angular</AltLabel>, I've worked across multiple projects at
          well reputed Sri Lankan companies, having contributed to projects from{" "}
          <AltLabel>Tavistock Group</AltLabel>,{" "}
          <AltLabel>Ancon Sweden</AltLabel> and{" "}
          <AltLabel>Singlife by Aviva.</AltLabel> When I'm not working you can
          find me throwing a tantrum at <AltLabel>Sekiro</AltLabel>, having a
          scuffle with <AltLabel>JavaScript</AltLabel> or just trying to explore
          new stacks and technologies. Want to get to know me better? Take a
          look at my resume.
        </Description>
        <Title>
          Skills <AltLabel>.</AltLabel>
        </Title>
        <SkillsTitle>
          Assessed skills <AltLabel>.</AltLabel>
        </SkillsTitle>
        <SkillsDescription>
          Based on LinkedIn assessments as of {asOfDate}. For more assessed
          skills, please visit my{" "}
          <Anchor href="https://www.linkedin.com/in/shahid-xd/">
            linkedin.
          </Anchor>
        </SkillsDescription>
        <HighlightContainer>
          {highlights.map(renderHighlightItem)}
        </HighlightContainer>
        <SkillsTitle>
          Preferred skills <AltLabel>.</AltLabel>
        </SkillsTitle>
        <SkillsDescription>
          From the listings below, the{" "}
          <Skills level={SkillLevel.GREAT}>highlighted ones</Skills> are what
          I'm proficient at.
        </SkillsDescription>
        <SkillsContainer>{skills.map(renderSkillItem)}</SkillsContainer>
        <Title>
          Projects <AltLabel>.</AltLabel>
        </Title>
        <ProjectsContainer>{projects.map(renderProjectItem)}</ProjectsContainer>
        <ResumeDescription>
          Interested in more of my work? Take a look at my resume{" "}
          <ResumeLink href="/resume.pdf" target="_blank" rel="noreferrer">
            here
          </ResumeLink>
        </ResumeDescription>
      </TextContainer>
    </Container>
  );
};

export default About;

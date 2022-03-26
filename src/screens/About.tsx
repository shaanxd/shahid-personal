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

const Button = styled.a`
  margin-top: 30px;
  padding: 20px 10px;
  border-radius: 10px;
  border: 1px solid ${colors.PRIMARY};
  background-color: ${colors.PRIMARY};
  color: ${colors.WHITE};
  font-size: 17px;
  cursor: pointer;
  text-align: center;

  :-webkit-any-link {
    text-decoration: none;
    -webkit-text-decoration: none;
  }
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
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
`;

const SkillHeader = styled(Label)`
  font-size: 15px;
  font-weight: 600;
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
  font-size: 22px;
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

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${Skills}:last-child {
    margin-right: 0px;
  }
`;

const SkillsDescription = styled(Label)`
  font-size: 14px;
  margin-top: 5px;
  font-weight: 600;
  line-height: 30px;
`;

const About = () => {
  const renderSkill = ({ label, level }: SkillItem) => (
    <Skills level={level}>{label}</Skills>
  );

  const renderSkillItem = ({ title, skills }: Skill) => {
    return (
      <SkillRoot>
        <SkillHeader>{title}</SkillHeader>
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
        <Button href="/resume.pdf" target="_blank" rel="noreferrer">
          Download Resume
        </Button>
      </TextContainer>
    </Container>
  );
};

export default About;

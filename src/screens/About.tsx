import React from "react";
import styled from "styled-components";
// import CoderCat from "../components/CoderCat";
import colors from "../styles/colors";

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
  color: ${colors.PRIMARY_LIGHT};
`;

const Description = styled(Label)`
  font-size: 15px;
  margin-top: 20px;
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

const About = () => {
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
        <Button href="/resume.pdf" target="_blank" rel="noreferrer">
          Download Resume
        </Button>
      </TextContainer>
    </Container>
  );
};

export default About;

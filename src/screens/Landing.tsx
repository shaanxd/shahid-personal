import React from "react";
import styled from "styled-components";
import { Background, Card } from "../components";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Work from "./Work";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: 1.5%;
`;

const Landing = () => {
  const renderHeader = () => {
    return <Header />;
  };
  const renderAbout = () => <About />;

  const renderWorkExperience = () => <Work />;

  const renderContactMe = () => <Contact />;

  return (
    <Container>
      <Background />
      {renderHeader()}
      <Card isAlt>{renderAbout()}</Card>
      <Card>{renderWorkExperience()}</Card>
      <Card isAlt>{renderContactMe()}</Card>
    </Container>
  );
};

export default Landing;

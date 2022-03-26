import React from "react";
import styled from "styled-components";
import {
  IoIosCall,
  IoIosMail,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io";

import colors from "../styles/colors";
import { SleepyCat } from "../components";

const Container = styled.div`
  min-height: 94%;
  margin: 1.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.PRIMARY};
  border-radius: 5px;
  padding: 40px;
  box-shadow: 10px 10px ${colors.SECONDARY_DARK};
  border: 1px solid ${colors.SECONDARY_DARK};
`;

const Label = styled.span`
  color: ${colors.WHITE};
`;

const Greeting = styled(Label)``;

const Title = styled(Label)`
  font-size: 70px;
  font-weight: 600;

  @media (max-width: 600px) {
    text-align: center;
    font-size: 35px;
  }
`;

const AltLabel = styled.span`
  color: ${colors.PRIMARY};
`;

const Occupation = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const IconList = styled.div`
  margin-top: 30px;
  display: flex;
`;

const Link = styled.a`
  margin: 0px 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${colors.WHITE};

  span {
    margin-left: 10px;
  }

  :-webkit-any-link {
    text-decoration: none;
    -webkit-text-decoration: none;
  }

  @media (max-width: 600px) {
    font-size: 16px;

    svg {
      font-size: 30px;
    }
  }
`;

const OccupationLabel = styled(Label)`
  font-size: 20px;
  color: ${colors.WHITE};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const OccupationSeparator = styled(Label)`
  font-size: 25px;
  margin: 0px 10px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const TopIconList = styled(IconList)`
  @media (max-width: 600px) {
    flex-direction: column;

    ${Link} {
      margin: 10px 0px;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <SleepyCat />
      <Greeting>Hi there, I'm</Greeting>
      <Title>
        Shahid Hassan<AltLabel>.</AltLabel>
      </Title>
      <Occupation>
        <OccupationLabel>Software Engineer</OccupationLabel>
        <OccupationSeparator> | </OccupationSeparator>
        <OccupationLabel>Gamer</OccupationLabel>
        <OccupationSeparator> | </OccupationSeparator>
        <OccupationLabel>Tech Enthusiast</OccupationLabel>
      </Occupation>
      <TopIconList>
        <Link href="tel:+94774406047">
          <IoIosCall fontSize="40px" color={colors.WHITE} />
          <span>+ (94) 77 4406047</span>
        </Link>
        <Link href="mailto:shaahid.xd@gmail.com">
          <IoIosMail fontSize="40px" color={colors.WHITE} />
          <span>shaahid.xd@gmail.com</span>
        </Link>
      </TopIconList>
      <IconList>
        <Link
          href="https://www.linkedin.com/in/shahid-xd/"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoLinkedin fontSize="40px" color={colors.WHITE} />
        </Link>
        <Link
          href="https://www.github.com/shaanxd/"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoGithub fontSize="40px" color={colors.WHITE} />
        </Link>
        <Link
          href="https://www.instagram.com/shaanxd"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoInstagram fontSize="40px" color={colors.WHITE} />
        </Link>
      </IconList>
    </Container>
  );
};

export default Header;

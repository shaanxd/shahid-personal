import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: 230px;
  width: 350px;
  position: relative;
`;

const Inner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Cat = styled.div`
  position: absolute;
`;

const Face = styled.div`
  position: absolute;
  background-color: #f19b1a;
  height: 80px;
  width: 150px;
  border-radius: 100px;
  top: 30px;
  left: 82px;
`;

const Ear = styled.div`
  position: absolute;
  background-color: #d07219;
  height: 23px;
  width: 22px;
  border-radius: 10px 30px 0 0;
  top: -23px;
  left: 60px;
  box-shadow: 21px 0 #d07219;
`;

const Blink = keyframes`0% {
  transform: scaleY(0.3);
}
4% {
  transform: scaleY(0.3);
}
5% {
  transform: scaleY(1);
}
`;

const Eye = styled.div`
  background-color: #330033;
  height: 12px;
  width: 12px;
  position: absolute;
  top: 20px;
  left: 70px;
  border-radius: 50%;
  box-shadow: 18px 0 #330033;
  animation: ${Blink} 4.5s infinite;
`;

const Mouth = styled.div`
  background-color: #ffffff;
  width: 47px;
  height: 15px;
  position: absolute;
  top: 45px;
  left: 65px;
  border-radius: 20px;

  &:before {
    content: "";
    position: absolute;
    background-color: #ffffff;
    height: 25px;
    width: 25px;
    left: -2px;
    border-radius: 50%;
    box-shadow: 27px 0 #ffffff;
  }
`;

const Nose = styled.div`
  position: absolute;
  height: 0;
  width: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 12px solid #ff9999;
  top: 0;
  left: 12px;
`;

const WhiskerLeft = styled.div`
  background-color: #330033;
  height: 1.2px;
  width: 25px;
  position: absolute;
  bottom: 3px;
  right: 40px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: #330033;
    height: 1.2px;
    width: 20px;
    right: 0;
  }

  &:before {
    bottom: 8px;
    transform: rotate(7deg);
  }

  &:after {
    bottom: -8px;
    transform: rotate(-7deg);
  }
`;

const WhiskerRight = styled.div`
  background-color: #330033;
  height: 1.2px;
  width: 25px;
  position: absolute;
  bottom: 3px;
  z-index: 1px;
  left: 40px;

  &:before,
  &:after {
    position: absolute;
    content: "";
    background-color: #330033;
    height: 1.2px;
    width: 20px;
    left: 0;
  }
  &:before {
    bottom: 8px;
    transform: rotate(-7deg);
  }
  &:after {
    bottom: -8px;
    transform: rotate(7deg);
  }
`;

const Body = styled.div`
  position: absolute;
  height: 0;
  width: 150px;
  border-bottom: 110px solid #f19b1a;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  top: 70px;
  left: -10px;
`;

const Hand = styled.div`
  height: 50px;
  position: absolute;
`;

const TypeOne = keyframes`
50% {
  transform: translateY(50px);
  height: 18px;
}
`;

const HandLeft = styled.div`
  position: relative;
  background-color: #ffffff;
  height: 29px;
  width: 22px;
  border-radius: 10px;
  left: 45px;
  top: 30px;
  animation: ${TypeOne} 1.5s infinite;
`;

const TypeTwo = keyframes`
50% {
  transform: translateY(-40px);
  height: 29px;
}`;

const HandRight = styled.div`
  position: relative;
  background-color: #ffffff;
  height: 18px;
  width: 22px;
  border-radius: 10px;
  left: 85px;
  top: 48px;
  animation: ${TypeTwo} 1.5s infinite;
`;

const Tail = styled.div`
  height: 22px;
  width: 50px;
  background-color: #d07219;
  position: absolute;
  left: -15px;
  top: 165px;
  border-radius: 22px;
`;

const Laptop = styled.div`
  position: absolute;
  background-color: #d07219;
  height: 15px;
  width: 120px;
  border-radius: 15px;
  top: 200px;
  left: 195px;

  &:before {
    position: absolute;
    content: "";
    background-color: #330033;
    height: 15px;
    width: 100px;
    border-radius: 15px;
    top: 0;
    right: 80px;
  }
  &:after {
    position: absolute;
    content: "";
    background-color: #330033;
    height: 80px;
    width: 110px;
    bottom: 14px;
    left: 10px;
    border-radius: 5px;
    transform: skew(-10deg);
  }
`;

const Logo = styled.div`
  position: absolute;
  background-color: #f19b1a;
  height: 18px;
  width: 35px;
  border-radius: 20px;
  top: -40px;
  left: 50px;
  z-index: 1;
`;

const CoderCat = () => {
  return (
    <Container>
      <Inner>
        <Cat>
          <Face>
            <Ear />
            <Eye />
            <Mouth>
              <Nose />
              <WhiskerLeft />
              <WhiskerRight />
            </Mouth>
            <Body>
              <Hand>
                <HandLeft />
                <HandRight />
              </Hand>
            </Body>
            <Tail />
          </Face>
          <Laptop>
            <Logo />
          </Laptop>
        </Cat>
      </Inner>
    </Container>
  );
};

export default CoderCat;

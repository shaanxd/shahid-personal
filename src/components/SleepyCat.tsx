import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: 200px;
  width: 350px;
  margin-bottom: 20px;
  position: relative;
`;

const Inner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Shadow = styled.div`
  height: 10px;
  width: 240px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: absolute;
  bottom: 52px;
  left: 70px;
  animation: shadow 2s infinite;
`;

const Cat = styled.div`
  background-color: #f19b1a;
  height: 65px;
  width: 80px;
  border-radius: 0 80px 80px 0;
  position: absolute;
  bottom: 60px;
  right: 50px;
`;

const Ear = styled.div`
  height: 15px;
  width: 15px;
  background-color: #f19b1a;
  position: absolute;
  bottom: 64px;
  left: 8px;
  border-radius: 20px 0 0 0;
  box-shadow: 25px 0 #f19b1a;
`;
const Eye = styled.div`
  height: 7px;
  width: 10px;
  border: 2px solid #2c2c2c;
  position: absolute;
  border-radius: 0 0 15px 15px;
  border-top: none;

  &:before {
    height: 7px;
    width: 10px;
    border: 2px solid #2c2c2c;
    position: absolute;
    border-radius: 0 0 15px 15px;
    border-top: none;
  }

  top: 18px;
  left: 15px;

  &:before {
    content: "";
    left: 30px;
  }
`;

const MouthMove = keyframes`
50% {
    transform: scaleY(0.7);
}`;

const Mouth = styled.div`
  background-color: #2c2c2c;
  height: 15px;
  width: 17px;
  position: absolute;
  border-radius: 0 0 5px 5px;
  top: 38px;
  left: 27px;
  animation: ${MouthMove} 2s infinite;
  transform-origin: top;
`;

const Nose = styled.div`
  background-color: #ffffff;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  position: absolute;
  top: 32px;
  left: 25px;
  box-shadow: 12px 0 #ffffff;

  &:before {
    content: "";
    width: 12px;
    height: 8px;
    position: absolute;
    background-color: #ffffff;
    left: 6px;
  }

  &:after {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    border-top: 8px solid #ef926b;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    bottom: 7px;
    left: 6px;
  }
`;
const Tail = styled.div`
  background-color: #d07219;
  height: 20px;
  width: 100px;
  position: absolute;
  right: 150px;
  bottom: 0;
  border-radius: 20px 0 0 20px;
`;

const Sleep = keyframes`50% {
    transform: scale(0.9, 1.05);
}`;

const Body = styled.div`
  background-color: #f19b1a;
  height: 90px;
  width: 140px;
  position: absolute;
  right: 65px;
  bottom: 0;
  border-radius: 60px 60px 0 0;
  animation: ${Sleep} 2s infinite;
  transform-origin: bottom right;

  &:before {
    content: "";
    position: absolute;
    background-color: #ffffff;
    height: 12px;
    width: 30px;
    border-radius: 6px;
    bottom: 0;
    left: 22px;
    box-shadow: 45px 0 #ffffff;
  }
`;

const BubbleScale = keyframes`
50% {
    transform: scale(1.6);
}`;

const Bubble = styled.div`
  height: 20px;
  width: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  position: absolute;
  left: 65px;
  top: 20px;
  border-radius: 50px 50px 50px 5px;
  animation: ${BubbleScale} 2s infinite;
`;

export const SleepyCat = () => {
  return (
    <Container>
      <Inner>
        <Shadow />
        <Cat>
          <Ear />
          <Eye />
          <Mouth />
          <Nose />
          <Tail />
          <Body />
          <Bubble />
        </Cat>
      </Inner>
    </Container>
  );
};

export default SleepyCat;

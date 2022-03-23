import React from "react";
import styled from "styled-components";

import colors from "../styles/colors";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${colors.PRIMARY};
  overflow: hidden;
`;

const Backdrop = styled.div`
  position: absolute;
  top: -50%;
  width: 0px;
  height 0px;
  border: 100vw solid transparent;
  border-left-color: ${colors.BLACK};
`;

const Background = () => {
  return (
    <Container>
      <InnerContainer>
        <Backdrop />
      </InnerContainer>
    </Container>
  );
};

export default Background;

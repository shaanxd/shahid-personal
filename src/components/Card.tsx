import React, { ReactNode } from "react";
import styled from "styled-components";

import colors from "../styles/colors";

interface OwnProps {
  children?: ReactNode;
}

interface ContainerProps {
  isAlt: boolean;
}

const Container = styled.div<ContainerProps>`
  background-color: ${({ isAlt }) =>
    isAlt ? colors.SECONDARY : colors.PRIMARY};
  box-shadow: 10px 10px ${colors.SECONDARY_DARK};
  margin: 1.5%;
  display: flex;
  border-radius: 5px;
  border: 1px solid ${colors.SECONDARY_DARK};
`;

const Card = ({ isAlt, children }: OwnProps & ContainerProps) => (
  <Container isAlt={isAlt}>{children}</Container>
);

Card.defaultProps = {
  isAlt: false,
};

export default Card;

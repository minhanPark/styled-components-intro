import React from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
`;

interface CircleProps {
  bgColor: string;
}

const Circle = ({ bgColor }: CircleProps) => <Container bgColor={bgColor} />;

export default Circle;

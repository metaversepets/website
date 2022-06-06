import React from 'react';
import styled, { keyframes } from 'styled-components';

/**
 * Snowfall Background
 */
const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  color: white;
  overflow: hidden;
  height: 100%;
  width: 100%;
  z-index: -1;
`;
const animSnowflakes = keyframes`
  from { transform: translateX(0px); }
  to { transform: translateX(-5000px);}
`;
const random = (x) => Math.floor(Math.random(x) * x);
const multipleBoxShadow = (length) => {
  const biggestScreenSize = 2560;
  let value = `${random(biggestScreenSize)}px ${random(biggestScreenSize)}px #FFF`;
  for (let i = 0; i < length; i += 1) {
    value += `, ${random(biggestScreenSize)}px ${random(biggestScreenSize)}px #FFF`;
  }
  return value;
};
const snowflakes = (h, w, animationTime, shadow) => styled.div`
  width: ${w}px;
  height: ${h}px;
  background: transparent;
  box-shadow: ${multipleBoxShadow(shadow)};
  animation: ${animSnowflakes} ${animationTime}s linear infinite;
  &:after {
    content: ' ';
    position: absolute;
    top: 2000px;
    width: ${w}px;
    height: ${h}px;
    box-shadow: ${multipleBoxShadow(shadow)};
  }
`;
const SmallSnowflakes = snowflakes(1, 1, 100, 700);
const MediumSnowflakes = snowflakes(2, 2, 150, 200);
const BigSnowflakes = snowflakes(3, 3, 200, 100);

const Snowflakes = ({ children, ...props }) => (
  <Container {...props}>
  {children}
  <SmallSnowflakes />
  <MediumSnowflakes />
  <BigSnowflakes />
  </Container>
);

export default Snowflakes;

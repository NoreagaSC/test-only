import React from 'react';

import { DOTS_COUNT } from './constants';
import { Dot, StyledCircle } from './rotatingCircle.styles';
import { generateDots } from './utils';

export const RotatingCircle = () => {
  const dots = generateDots(DOTS_COUNT, Dot);

  return <StyledCircle>{dots}</StyledCircle>;
};

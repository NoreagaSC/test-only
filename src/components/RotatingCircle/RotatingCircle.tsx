import React, { useState } from 'react';

import { DOTS_COUNT } from './constants';
import { Dot, StyledCircle } from './rotatingCircle.styles';
import { generateDots } from './utils';

export const RotatingCircle = () => {
  const [activeDot, setActiveDot] = useState<number | null>(0);

  const dots = generateDots(DOTS_COUNT, Dot, activeDot, setActiveDot);

  return <StyledCircle>{dots}</StyledCircle>;
};

import React, {
  type Dispatch,
  type FC,
  type ReactElement,
  type SetStateAction,
} from 'react';

import { DOTS_COUNT } from './constants';
import { Dot, StyledCircle } from './rotatingCircle.styles';
import { generateDots } from './utils';

interface IProps {
  activeDot: number | null;
  setActiveDot: Dispatch<SetStateAction<number | null>>;
}

export const RotatingCircle: FC<IProps> = ({
  activeDot,
  setActiveDot,
}): ReactElement => {
  const dots = generateDots(DOTS_COUNT, Dot, activeDot, setActiveDot);

  return <StyledCircle>{dots}</StyledCircle>;
};

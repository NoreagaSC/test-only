import React, {
  type Dispatch,
  type FC,
  type ReactElement,
  type SetStateAction,
  useState,
} from 'react';
import { DOTS_COUNT } from 'shared';

import { Dot, StyledCircle } from './rotatingCircle.styles';
import { generateDots } from './utils';

interface IProps {
  activePeriod: number;
  setActivePeriod: Dispatch<SetStateAction<number>>;
}

export const RotatingCircle: FC<IProps> = (
  // eslint-disable-next-line no-empty-pattern
  {
    // activePeriod,
    // setActivePeriod
  },
): ReactElement => {
  const [hoveredDot, setHoveredDot] = useState<number | null>(0);

  const dots = generateDots(DOTS_COUNT, Dot, hoveredDot, setHoveredDot);

  return <StyledCircle>{dots}</StyledCircle>;
};

import React, {
  type Dispatch,
  type FC,
  type ReactElement,
  type SetStateAction,
  useRef,
  useState,
} from 'react';
import { DOTS_COUNT } from 'shared';

import { Dot, StyledCircle } from './rotatingCircle.styles';
import { generateDots } from './utils';

interface IProps {
  activePeriod: number;
  setActivePeriod?: Dispatch<SetStateAction<number>>;
  maxSteps: number;
}

export const RotatingCircle: FC<IProps> = ({
  activePeriod,
  // setActivePeriod,
  maxSteps,
}): ReactElement => {
  const [hoveredDot, setHoveredDot] = useState<number | null>(0);

  const dots = generateDots(DOTS_COUNT, Dot, hoveredDot, setHoveredDot);

  const circleRef = useRef<HTMLDivElement>(null);

  console.log(activePeriod, maxSteps);

  return <StyledCircle ref={circleRef}>{dots}</StyledCircle>;
};

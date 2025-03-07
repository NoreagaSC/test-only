import { useGSAP } from '@gsap/react';
import { BASE_ROTATION_STEP } from 'components/RotatingCircle/constants';
import gsap from 'gsap';
import React, {
  type Dispatch,
  type FC,
  type ReactElement,
  type SetStateAction,
  useRef,
  useState,
} from 'react';
import { BASE_SPEED, DOTS_COUNT, SLOWDOWN_FACTOR } from 'shared';

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
  /** Ссылка на вращающийся круг. */
  const circleRef = useRef<HTMLDivElement>(null);

  const duration = BASE_SPEED * maxSteps * (1 + SLOWDOWN_FACTOR / maxSteps);

  /** Состояние для точки, на которую наведён курсор. */
  const [hoveredDot, setHoveredDot] = useState<number | null>(0);
  const dots = generateDots(DOTS_COUNT, Dot, hoveredDot, setHoveredDot);
  const prevActivePeriod = useRef<number>(activePeriod);

  useGSAP(() => {
    if (prevActivePeriod.current !== activePeriod) {
      const delta = activePeriod - prevActivePeriod.current;
      const direction = delta > 0 ? 1 : -1;
      const rotationAngle = Math.abs(delta) * BASE_ROTATION_STEP;

      gsap.to(circleRef.current, {
        rotation: `+=${rotationAngle * direction}`,
        duration,
        ease: 'power2.out',
        transformOrigin: 'center',
      });

      prevActivePeriod.current = activePeriod;
    }
  }, [activePeriod]);

  return <StyledCircle ref={circleRef}>{dots}</StyledCircle>;
};

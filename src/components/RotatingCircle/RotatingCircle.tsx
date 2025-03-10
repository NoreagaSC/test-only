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

import { StyledCircle } from './rotatingCircle.styles';
import { generateDots } from './utils';

interface IProps {
  activePeriod: number;
  setActivePeriod: Dispatch<SetStateAction<number>>;
  isAnimating: boolean;
  setIsAnimating: Dispatch<SetStateAction<boolean>>;
  maxSteps: number;
  hoveredDot: number | null;
  setHoveredDot: Dispatch<SetStateAction<number | null>>;
}

export const RotatingCircle: FC<IProps> = ({
  activePeriod,
  setActivePeriod,
  maxSteps,
  isAnimating,
  setIsAnimating,
  hoveredDot,
  setHoveredDot,
}): ReactElement => {
  /** Ссылка на вращающийся круг. */
  const circleRef = useRef<HTMLDivElement>(null);
  const prevActivePeriod = useRef<number>(activePeriod);

  const duration = BASE_SPEED * maxSteps * (1 + SLOWDOWN_FACTOR / maxSteps);

  const [compensatingAngle, setCompensatingAngle] = useState<number>(0);

  const [shouldTitleShow, setShouldTitleShow] = useState<boolean>(true);

  /** Функция для генерации кнопок. */
  const dots = generateDots(
    hoveredDot,
    isAnimating,
    setHoveredDot,
    setActivePeriod,
    compensatingAngle,
    activePeriod,
    shouldTitleShow,
    setShouldTitleShow,
  );

  useGSAP(() => {
    if (prevActivePeriod.current !== activePeriod) {
      setIsAnimating(true);

      let delta =
        (activePeriod - prevActivePeriod.current + DOTS_COUNT) % DOTS_COUNT;

      if (delta > DOTS_COUNT / 2) {
        delta -= DOTS_COUNT;
      }

      let rotationAngle = -delta * BASE_ROTATION_STEP;

      setCompensatingAngle((prev) => (prev + rotationAngle) % 360);

      gsap.to(circleRef.current, {
        rotation: `+=${rotationAngle}`,
        duration,
        ease: 'power2.out',
        transformOrigin: 'center',
        onComplete: () => {
          setIsAnimating(false);
          setShouldTitleShow(true);
        },
      });

      prevActivePeriod.current = activePeriod;
    }
  }, [activePeriod]);

  return <StyledCircle ref={circleRef}>{dots}</StyledCircle>;
};

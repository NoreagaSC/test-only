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
import { BASE_SPEED, SLOWDOWN_FACTOR } from 'shared';

import { StyledCircle } from './rotatingCircle.styles';
import { generateDots } from './utils';

interface IProps {
  activePeriod: number;
  setActivePeriod: Dispatch<SetStateAction<number>>;
  isAnimating: boolean;
  setIsAnimating: Dispatch<SetStateAction<boolean>>;
  maxSteps: number;
}

export const RotatingCircle: FC<IProps> = ({
  activePeriod,
  setActivePeriod,
  maxSteps,
  isAnimating,
  setIsAnimating,
}): ReactElement => {
  /** Ссылка на вращающийся круг. */
  const circleRef = useRef<HTMLDivElement>(null);

  const duration = BASE_SPEED * maxSteps * (1 + SLOWDOWN_FACTOR / maxSteps);

  /** Состояние для точки, на которую наведён курсор. */
  const [hoveredDot, setHoveredDot] = useState<number | null>(0);

  const prevActivePeriod = useRef<number>(activePeriod);

  const delta = activePeriod - prevActivePeriod.current;
  const direction = delta > 0 ? 1 : -1;
  const absoluteAngle = Math.abs(delta) * BASE_ROTATION_STEP;
  const rotationAngle = absoluteAngle * direction;

  const [compensatingAngle, setCompensatingAngle] =
    useState<number>(rotationAngle);

  /** Функция для генерации кнопок. */
  const dots = generateDots(
    hoveredDot,
    isAnimating,
    setHoveredDot,
    setActivePeriod,
    compensatingAngle,
  );

  useGSAP(() => {
    if (prevActivePeriod.current !== activePeriod) {
      setIsAnimating(true);
      setCompensatingAngle((prev) => Math.abs(prev + rotationAngle));

      gsap.to(circleRef.current, {
        rotation: `+=${rotationAngle}`,
        duration,
        ease: 'power2.out',
        transformOrigin: 'center',
        onComplete: () => {
          setIsAnimating(false);
        },
      });

      prevActivePeriod.current = activePeriod;
    }
  }, [activePeriod]);

  return <StyledCircle ref={circleRef}>{dots}</StyledCircle>;
};

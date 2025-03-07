import {
  Dot,
  DotTextWrapper,
} from 'components/RotatingCircle/rotatingCircle.styles';
import React, {
  type Dispatch,
  type ReactElement,
  type SetStateAction,
} from 'react';
import { DOTS_COUNT } from 'shared';

import { ANGLE_STEP, FIXED_ACTIVE_INDEX, RADIUS } from './constants';

export const generateDots = (
  // count: number,
  // DotComponent: ElementType,
  hoveredDot: number | null,
  isAnimating: boolean,
  setHoveredDot: Dispatch<SetStateAction<number | null>>,
  setActivePeriod: Dispatch<SetStateAction<number>>,
  compensatingAngle: number,
): ReactElement[] => {
  return [...new Array(DOTS_COUNT)].map((_, index) => {
    const angle = index * ANGLE_STEP - Math.PI + 2 * (Math.PI / 3); // Начало с верхней левой точки
    const x = RADIUS + RADIUS * Math.cos(angle);
    const y = RADIUS + RADIUS * Math.sin(angle);

    const isFixedActive = index === FIXED_ACTIVE_INDEX;
    const isHovered = index === hoveredDot;
    const isActive = isFixedActive || isHovered;

    const handleMouseEnter = () => {
      setHoveredDot(index);
    };

    const handleMouseLeave = () => {
      setHoveredDot(null);
    };

    const handleClick = () => {
      if (!isAnimating) {
        // setActivePeriod((prev) => prev + Math.abs(prev - index));
        setActivePeriod(index);
      }
    };

    return (
      <Dot
        key={index}
        $x={x}
        $y={y}
        $isActive={isActive}
        $isHovered={isHovered}
        $compensatingAngle={compensatingAngle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <DotTextWrapper $compensatingAngle={compensatingAngle}>
          <span>{isActive && index + 1}</span>
        </DotTextWrapper>
      </Dot>
    );
  });
};

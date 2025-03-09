import {
  Dot,
  DotIndex,
  DotTextWrapper,
  DotTitle,
} from 'components/RotatingCircle/rotatingCircle.styles';
import React, {
  type Dispatch,
  type ReactElement,
  type SetStateAction,
} from 'react';
import { DOTS_COUNT, getTitles } from 'shared';

import { ANGLE_STEP, RADIUS } from './constants';

export const generateDots = (
  hoveredDot: number | null,
  isAnimating: boolean,
  setHoveredDot: Dispatch<SetStateAction<number | null>>,
  setActivePeriod: Dispatch<SetStateAction<number>>,
  compensatingAngle: number,
  activePeriod: number,
  shouldTitleShow: boolean,
  setShouldTitleShow: Dispatch<SetStateAction<boolean>>,
): ReactElement[] => {
  const titles = getTitles();

  return [...new Array(DOTS_COUNT)].map((_, index) => {
    const angle = index * ANGLE_STEP - Math.PI + 2 * (Math.PI / 3); // Начало с верхней левой точки
    const x = RADIUS + RADIUS * Math.cos(angle);
    const y = RADIUS + RADIUS * Math.sin(angle);

    const isFixedActive = index === activePeriod % DOTS_COUNT;

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
        setShouldTitleShow(false);
        setActivePeriod(index);
        setHoveredDot(null);
      }
    };

    return (
      <Dot
        key={index}
        $x={x}
        $y={y}
        $isActive={isActive}
        $isHovered={isHovered}
        $isAnimating={isAnimating}
        $compensatingAngle={compensatingAngle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <DotTextWrapper $compensatingAngle={compensatingAngle}>
          <DotIndex>{isActive && index + 1}</DotIndex>
          {isFixedActive && shouldTitleShow && (
            <DotTitle $isActive={isActive} $isAnimating={isAnimating}>
              {titles[index]}
            </DotTitle>
          )}
        </DotTextWrapper>
      </Dot>
    );
  });
};

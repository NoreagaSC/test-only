import React, {
  type Dispatch,
  type ElementType,
  type ReactElement,
  type SetStateAction,
} from 'react';

import { ANGLE_STEP, FIXED_ACTIVE_INDEX, RADIUS } from './constants';

export const generateDots = (
  count: number,
  DotComponent: ElementType,
  hoveredDot: number | null,
  setHoveredDot: Dispatch<SetStateAction<number | null>>,
): ReactElement[] => {
  return [...new Array(count)].map((_, index) => {
    const angle = index * ANGLE_STEP - Math.PI + 2 * (Math.PI / 3); // Начало с верхней левой точки
    const x = RADIUS + RADIUS * Math.cos(angle);
    const y = RADIUS + RADIUS * Math.sin(angle);

    const isFixedActive = index === FIXED_ACTIVE_INDEX;
    const isHovered = index === hoveredDot;
    const isActive = isFixedActive || isHovered;

    return (
      <DotComponent
        key={index}
        $x={x}
        $y={y}
        $isActive={isActive}
        $isHovered={isHovered}
        onMouseEnter={() => setHoveredDot(index)}
        onMouseLeave={() => setHoveredDot(null)}
      >
        <span>{isActive && index + 1}</span>
      </DotComponent>
    );
  });
};

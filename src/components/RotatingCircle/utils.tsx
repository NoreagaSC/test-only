import React, { type ElementType, type ReactElement } from 'react';

import { ANGLE_STEP, RADIUS } from './constants';

export const generateDots = (count: number, DotComponent: ElementType): ReactElement[] => {
  return [...new Array(count)].map((_, index) => {
    const angle = index * ANGLE_STEP;
    const x = RADIUS + RADIUS * Math.cos(angle);
    const y = RADIUS + RADIUS * Math.sin(angle);

    return (
      <DotComponent key={index} $x={x} $y={y}>
        <span>{index + 1}</span>
      </DotComponent>
    );
  });
};

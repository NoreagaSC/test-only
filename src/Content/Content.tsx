import React, { type FC, type ReactElement } from 'react';

import { RotatingCircle } from '../RotatingCircle';

import { GridItem, StyledContent } from './contentStyle';

export const Content: FC = (): ReactElement => {
  return (
    <StyledContent>
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <RotatingCircle />
    </StyledContent>
  );
};

import React, { type FC, type ReactElement } from 'react';

import { RotatingCircle } from '../RotatingCircle';
import { Title } from '../Title';
import { GridItem, StyledContent } from './content.styles';

export const Content: FC = (): ReactElement => {
  return (
    <StyledContent>
      <Title />
      {[...Array(4)].map((_, index) => (
        <GridItem key={index} />
      ))}
      <RotatingCircle />
    </StyledContent>
  );
};

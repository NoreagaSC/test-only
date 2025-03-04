import React, { type FC, type ReactElement, useState } from 'react';

import { Dates } from '../Dates';
import { Pagination } from '../Pagination';
import { RotatingCircle } from '../RotatingCircle';
import { Slider } from '../Slider';
import { Title } from '../Title';
import { GridItem, StyledContent } from './content.styles';

export const Content: FC = (): ReactElement => {
  const [dateFrom, setDateFrom] = useState<number>(1995);
  const [dateTo, setDateTo] = useState<number>(2012);

  return (
    <StyledContent>
      <Title />
      {[...Array(4)].map((_, index) => (
        <GridItem key={index} />
      ))}
      <RotatingCircle />
      <Dates dateFrom={dateFrom} dateTo={dateTo} />
      <Pagination setDateFrom={setDateFrom} setDateTo={setDateTo} />
      <Slider />
    </StyledContent>
  );
};

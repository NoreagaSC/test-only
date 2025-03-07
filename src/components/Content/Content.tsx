import { Dates, Pagination, RotatingCircle, Slider, Title } from 'components';
import React, { type FC, type ReactElement, useState } from 'react';

import { GridItem, StyledContent } from './content.styles';

export const Content: FC = (): ReactElement => {
  const [dateFrom, setDateFrom] = useState<number>(1995);
  const [dateTo, setDateTo] = useState<number>(2012);

  /** Текущий период для отображения в слайдере и пагинации. */
  const [activePeriod, setActivePeriod] = useState<number>(0);

  return (
    <StyledContent>
      <Title />
      {[...Array(4)].map((_, index) => (
        <GridItem key={index} />
      ))}
      <RotatingCircle activeDot={activePeriod} setActiveDot={setActivePeriod} />
      <Dates dateFrom={dateFrom} dateTo={dateTo} />
      <Pagination
        activePeriod={activePeriod}
        setActivePeriod={setActivePeriod}
        setDateFrom={setDateFrom}
        setDateTo={setDateTo}
      />
      <Slider />
    </StyledContent>
  );
};

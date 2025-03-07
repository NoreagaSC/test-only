import { Dates, Pagination, RotatingCircle, Slider, Title } from 'components';
import React, { type FC, type ReactElement, useState } from 'react';
import { parseYearRange, progressPeriods } from 'shared';

import { GridItem, StyledContent } from './content.styles';

export const Content: FC = (): ReactElement => {
  /** Текущий период для отображения в слайдере и пагинации. */
  const [activePeriod, setActivePeriod] = useState<number>(0);

  const { startDate, endDate } = parseYearRange(
    progressPeriods[activePeriod].period,
  );

  return (
    <StyledContent>
      <Title />
      {[...Array(4)].map((_, index) => (
        <GridItem key={index} />
      ))}
      <RotatingCircle activeDot={activePeriod} setActiveDot={setActivePeriod} />
      <Dates dateFrom={startDate} dateTo={endDate} />
      <Pagination
        activePeriod={activePeriod}
        setActivePeriod={setActivePeriod}
        // setDateFrom={setDateFrom}
        // setDateTo={setDateTo}
      />
      <Slider activePeriod={activePeriod} />
    </StyledContent>
  );
};

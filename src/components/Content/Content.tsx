import { Dates, Pagination, RotatingCircle, Slider, Title } from 'components';
import { usePrevious } from 'hooks';
import React, { type FC, type ReactElement, useState } from 'react';
import { parseYearRange, progressPeriods } from 'shared';

import { GridItem, StyledContent } from './content.styles';

export const Content: FC = (): ReactElement => {
  /** Текущий период для отображения в слайдере и пагинации. */
  const [activePeriod, setActivePeriod] = useState<number>(0);

  /** Флаг активной анимации. */
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const { startDate, endDate } = parseYearRange(
    progressPeriods[activePeriod].period,
  );

  /** Сохраненные предыдущие значения */
  const prevFrom = usePrevious(startDate);
  const prevTo = usePrevious(endDate);

  /* Максимальное количество шагов для анимации. */
  const maxSteps = Math.max(
    Math.abs(startDate - prevFrom),
    Math.abs(endDate - prevTo),
  );

  return (
    <StyledContent>
      <Title />
      {[...Array(4)].map((_, index) => (
        <GridItem key={index} />
      ))}
      <RotatingCircle
        activePeriod={activePeriod}
        setActivePeriod={setActivePeriod}
        isAnimating={isAnimating}
        setIsAnimating={setIsAnimating}
        maxSteps={maxSteps}
      />
      <Dates
        dateFrom={startDate}
        dateTo={endDate}
        prevFrom={prevFrom}
        prevTo={prevTo}
        maxSteps={maxSteps}
      />
      <Pagination
        activePeriod={activePeriod}
        setActivePeriod={setActivePeriod}
        isAnimating={isAnimating}
      />
      <Slider
        activePeriod={activePeriod}
        isAnimating={isAnimating}
        setIsAnimating={setIsAnimating}
      />
    </StyledContent>
  );
};

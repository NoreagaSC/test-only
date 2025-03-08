import { Dates, Pagination, RotatingCircle, Slider, Title } from 'components';
import { usePrevious, useScreenSize } from 'hooks';
import React, { type FC, type ReactElement, useState } from 'react';
import { parseYearRange, progressPeriods } from 'shared';

import { GridItem, StyledContent } from './content.styles';

export const Content: FC = (): ReactElement => {
  const { isMobile, isDesktop } = useScreenSize();

  /** Текущий период для отображения в слайдере и пагинации. */
  const [activePeriod, setActivePeriod] = useState<number>(0);

  /** Флаг активной анимации. */
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  /** Состояние для точки, на которую наведён курсор. */
  const [hoveredDot, setHoveredDot] = useState<number | null>(0);

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

  console.log({ isMobile, isDesktop });

  return (
    <StyledContent>
      <Title />
      {!isMobile && [...Array(4)].map((_, index) => <GridItem key={index} />)}
      {!isMobile && (
        <RotatingCircle
          activePeriod={activePeriod}
          setActivePeriod={setActivePeriod}
          isAnimating={isAnimating}
          setIsAnimating={setIsAnimating}
          maxSteps={maxSteps}
          hoveredDot={hoveredDot}
          setHoveredDot={setHoveredDot}
        />
      )}
      <Dates
        dateFrom={startDate}
        dateTo={endDate}
        prevFrom={prevFrom}
        prevTo={prevTo}
        maxSteps={maxSteps}
      />
      <Slider
        activePeriod={activePeriod}
        isAnimating={isAnimating}
        setIsAnimating={setIsAnimating}
      />
      <Pagination
        activePeriod={activePeriod}
        setActivePeriod={setActivePeriod}
        isAnimating={isAnimating}
        setHoveredDot={setHoveredDot}
      />
    </StyledContent>
  );
};

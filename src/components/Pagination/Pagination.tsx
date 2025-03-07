import React, { type Dispatch, type FC, type SetStateAction } from 'react';
import { DOTS_COUNT } from 'shared';

import { NextPaginationArrow, PrevPaginationArrow } from '../UI';
import {
  Counter,
  NavigationButtonWrapper,
  NextButton,
  PaginationLayout,
  PrevButton,
} from './pagination.styles';

interface IProps {
  activePeriod: number;
  setActivePeriod: Dispatch<SetStateAction<number>>;
  setDateFrom: Dispatch<SetStateAction<number>>;
  setDateTo: Dispatch<SetStateAction<number>>;
}

export const Pagination: FC<IProps> = ({
  activePeriod,
  setActivePeriod,
  setDateFrom,
  setDateTo,
}: IProps) => {
  const currentPoint = activePeriod || 0;

  const handlePrevPeriod = () => {
    setDateFrom((prev) => prev - 7);
    setDateTo((prev) => prev - 11);

    setActivePeriod((prev) => {
      if (prev - 1 < 0) {
        return prev;
      }

      return prev - 1;
    });
  };

  const handleNextPeriod = () => {
    setDateFrom((prev) => prev + 7);
    setDateTo((prev) => prev + 11);

    setActivePeriod((prev) => {
      if (prev + 1 > DOTS_COUNT) {
        return prev;
      }

      return prev + 1;
    });
  };

  return (
    <PaginationLayout>
      <Counter>{`0${currentPoint}/0${DOTS_COUNT}`}</Counter>
      <NavigationButtonWrapper>
        <PrevButton onClick={handlePrevPeriod}>
          <PrevPaginationArrow />
        </PrevButton>
        <NextButton onClick={handleNextPeriod}>
          <NextPaginationArrow />
        </NextButton>
      </NavigationButtonWrapper>
    </PaginationLayout>
  );
};

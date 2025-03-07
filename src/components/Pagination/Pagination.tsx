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
  isAnimating: boolean;
}

export const Pagination: FC<IProps> = ({
  activePeriod,
  setActivePeriod,
  // setDateFrom,
  // setDateTo,
  isAnimating,
}: IProps) => {
  const currentPoint = activePeriod + 1 || 1;

  const handlePrevPeriod = () => {
    if (!isAnimating) {
      setActivePeriod((prev) => {
        if (prev - 1 < 0) {
          return prev;
        }

        return prev - 1;
      });
    }
  };

  const handleNextPeriod = () => {
    if (!isAnimating) {
      setActivePeriod((prev) => {
        if (prev + 1 > DOTS_COUNT - 1) {
          return prev;
        }

        return prev + 1;
      });
    }
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

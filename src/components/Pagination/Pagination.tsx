import React, { type Dispatch, type FC, type SetStateAction } from 'react';

import { DOTS_COUNT } from '../RotatingCircle/constants';
import { NextPaginationArrow, PrevPaginationArrow } from '../UI';
import {
  Counter,
  NavigationButtonWrapper,
  NextButton,
  PaginationLayout,
  PrevButton,
} from './pagination.styles';

interface IProps {
  activeDot: number | null;
  setDateFrom: Dispatch<SetStateAction<number>>;
  setDateTo: Dispatch<SetStateAction<number>>;
}

export const Pagination: FC<IProps> = ({
  activeDot,
  setDateFrom,
  setDateTo,
}: IProps) => {
  const handleClick = () => {
    setDateFrom((prev) => prev + 7);
    setDateTo((prev) => prev + 11);
  };

  const currentPoint = activeDot || 0;

  return (
    <PaginationLayout>
      <Counter>{`0${currentPoint}/0${DOTS_COUNT}`}</Counter>
      <NavigationButtonWrapper>
        <PrevButton onClick={handleClick}>
          <PrevPaginationArrow />
        </PrevButton>
        <NextButton onClick={handleClick}>
          <NextPaginationArrow />
        </NextButton>
      </NavigationButtonWrapper>
    </PaginationLayout>
  );
};

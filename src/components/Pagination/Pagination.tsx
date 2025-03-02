import React, { type Dispatch, type FC, type SetStateAction } from 'react';

import { PaginationLayout } from './pagination.styles';

interface IProps {
  setDateFrom: Dispatch<SetStateAction<number>>;
  setDateTo: Dispatch<SetStateAction<number>>;
}

export const Pagination: FC<IProps> = ({ setDateFrom, setDateTo }: IProps) => {
  const handleClick = () => {
    setDateFrom((prev) => prev + 1);
    setDateTo((prev) => prev + 1);
  };

  return (
    <PaginationLayout>
      <button onClick={handleClick}>Pagination</button>
    </PaginationLayout>
  );
};

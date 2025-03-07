import React, { type ReactElement } from 'react';

import { Digit } from './dates.styles';

export const renderDigits = (
  digits: string[],
  keyPrefix: string,
): ReactElement[] => {
  return digits.map((digit, index) => (
    <Digit key={`${keyPrefix}-${index}`}>{digit}</Digit>
  ));
};

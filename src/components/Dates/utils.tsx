import React, { type RefObject } from 'react';

import { Digit } from './dates.styles';

/*
 * Функция для рендера чисел
 * ref - для связи с анимацией
 * children - для первого рендера до отображения измененных
 *  через ref значений
 *
 */
export const renderDigits = (
  value: number,
  refs: RefObject<(HTMLDivElement | null)[]>,
  keyPrefix: string,
) => {
  const digits = value.toString().padStart(4, '0').split('');

  return digits.map((digit, index) => (
    <Digit
      key={`${keyPrefix}-${index}`}
      ref={(el) => {
        refs.current[index] = el;
      }}
    >
      {digit}
    </Digit>
  ));
};

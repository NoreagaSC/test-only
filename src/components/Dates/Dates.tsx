import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { type FC, type ReactElement, useRef } from 'react';

import { DateWrapper, NumberWrapper } from './dates.styles';
import { renderDigits } from './utils';

interface IProps {
  dateFrom: number;
  dateTo: number;
}

export const Dates: FC<IProps> = ({ dateFrom, dateTo }): ReactElement => {
  const fromRefs = useRef<HTMLDivElement[]>([]);
  const toRefs = useRef<HTMLDivElement[]>([]);

  /* Запоминаем предыдущие значения, чтобы изменять только нужные цифры */
  const currentFrom = useRef(dateFrom);
  const currentTo = useRef(dateTo);

  useGSAP(() => {
    const startFrom = currentFrom.current;
    const startTo = currentTo.current;
    currentFrom.current = dateFrom;
    currentTo.current = dateTo;

    const fromDigits = startFrom.toString().padStart(4, '0').split('');
    const toDigits = startTo.toString().padStart(4, '0').split('');

    const targetFromDigits = dateFrom.toString().padStart(4, '0').split('');
    const targetToDigits = dateTo.toString().padStart(4, '0').split('');

    /* Максимальное количество шагов для анимации. */
    const maxSteps = Math.max(
      Math.abs(dateFrom - startFrom),
      Math.abs(dateTo - startTo),
    );

    const baseSpeed = 0.05;
    const slowDownFactor = 30;
    const duration = baseSpeed * maxSteps * (1 + slowDownFactor / maxSteps);

    let fromObj = { value: startFrom };
    let toObj = { value: startTo };

    gsap.to(fromObj, {
      value: dateFrom,
      duration: duration,
      ease: 'power2.out',
      onUpdate: () => {
        const currentVal = Math.round(fromObj.value)
          .toString()
          .padStart(4, '0')
          .split('');

        currentVal.forEach((digit, i) => {
          if (fromDigits[i] !== targetFromDigits[i] && fromRefs.current[i]) {
            fromRefs.current[i]!.innerText = digit;
          }
        });
      },
    });

    gsap.to(toObj, {
      value: dateTo,
      duration: duration,
      ease: 'power2.out',
      onUpdate: () => {
        const currentVal = Math.round(toObj.value)
          .toString()
          .padStart(4, '0')
          .split('');

        currentVal.forEach((digit, i) => {
          if (toDigits[i] !== targetToDigits[i] && toRefs.current[i]) {
            toRefs.current[i]!.innerText = digit;
          }
        });
      },
    });
  }, [dateFrom, dateTo]);

  return (
    <DateWrapper>
      <NumberWrapper color='light_blue'>
        {renderDigits(dateFrom, fromRefs, 'from')}
      </NumberWrapper>
      <NumberWrapper color='pink'>
        {renderDigits(dateTo, toRefs, 'to')}
      </NumberWrapper>
    </DateWrapper>
  );
};

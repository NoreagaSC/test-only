import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, {
  type FC,
  type ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';

import { DateWrapper, Digit, NumberWrapper } from './dates.styles';

interface IProps {
  dateFrom: number;
  dateTo: number;
}

export const Dates: FC<IProps> = ({ dateFrom, dateTo }): ReactElement => {
  const [displayedFrom, setDisplayedFrom] = useState(dateFrom);
  const [displayedTo, setDisplayedTo] = useState(dateTo);

  const fromRefs = useRef<(HTMLDivElement | null)[]>([]);
  const toRefs = useRef<(HTMLDivElement | null)[]>([]);

  const getDigits = (num: number) => num.toString().split('').map(Number);

  // Определяем, какие цифры должны меняться
  const prevFrom = useRef(dateFrom);
  const prevTo = useRef(dateTo);

  useEffect(() => {
    if (displayedFrom !== dateFrom || displayedTo !== dateTo) {
      const interval = setInterval(() => {
        setDisplayedFrom((prev) => (prev < dateFrom ? prev + 1 : prev));
        setDisplayedTo((prev) => (prev < dateTo ? prev + 1 : prev));
      }, 100);

      return () => clearInterval(interval);
    }
  }, [dateFrom, dateTo, displayedFrom, displayedTo]);

  const fromDigits = getDigits(displayedFrom);
  const toDigits = getDigits(displayedTo);
  const prevFromDigits = getDigits(prevFrom.current);
  const prevToDigits = getDigits(prevTo.current);

  // Анимация смены чисел "счетчиком"
  useGSAP(
    () => {
      fromRefs.current.forEach((el, index) => {
        if (el && fromDigits[index] !== prevFromDigits[index]) {
          gsap.fromTo(
            el,
            { y: '0%', opacity: 1 },
            {
              y: '-100%',
              opacity: 0,
              duration: 0.1,
              ease: 'power1.in',
              delay: index * 0.05,
            },
          );
          gsap.fromTo(
            el,
            { y: '100%', opacity: 0 },
            {
              y: '0%',
              opacity: 1,
              duration: 0.1,
              ease: 'power1.out',
              delay: 0.1 + index * 0.05,
            },
          );
        }
      });

      toRefs.current.forEach((el, index) => {
        if (el && toDigits[index] !== prevToDigits[index]) {
          gsap.fromTo(
            el,
            { y: '0%', opacity: 1 },
            {
              y: '-100%',
              opacity: 0,
              duration: 0.1,
              ease: 'power1.in',
              delay: index * 0.05,
            },
          );
          gsap.fromTo(
            el,
            { y: '100%', opacity: 0 },
            {
              y: '0%',
              opacity: 1,
              duration: 0.1,
              ease: 'power1.out',
              delay: 0.1 + index * 0.05,
            },
          );
        }
      });

      prevFrom.current = displayedFrom;
      prevTo.current = displayedTo;
    },
    { dependencies: [displayedFrom, displayedTo] },
  );

  return (
    <DateWrapper>
      <NumberWrapper>
        {fromDigits.map((digit, i) => (
          <Digit
            key={`from-${i}`}
            ref={(el) => {
              fromRefs.current[i] = el;
            }}
          >
            {digit}
          </Digit>
        ))}
      </NumberWrapper>
      <NumberWrapper>
        {toDigits.map((digit, i) => (
          <Digit
            key={`to-${i}`}
            ref={(el) => {
              toRefs.current[i] = el;
            }}
          >
            {digit}
          </Digit>
        ))}
      </NumberWrapper>
    </DateWrapper>
  );
};

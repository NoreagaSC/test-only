import { progressPeriods } from './periods';

export const parseYearRange = (
  yearRange: string,
): { startDate: number; endDate: number } => {
  const [start, end] = yearRange.split(' - ');

  return {
    startDate: Number(start),
    endDate: Number(end),
  };
};

export const getDatePeriods = (): string[] =>
  progressPeriods.map((progressPeriod) => progressPeriod.period);

export const getEventsById = (id: number) =>
  progressPeriods.map((progressPeriod) => progressPeriod.events)[id];

/** Функция, разбивающая '1925' на ['1', '9', '2', '5'] */
export const padAndSplit = (number: string | number): string[] => {
  return number.toString().padStart(4, '0').split('');
};

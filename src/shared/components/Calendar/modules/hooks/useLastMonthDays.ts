import dayjs from 'dayjs';
import { useMemo } from 'react';

const useLastMonthDays = ({ count, month, year }: { count: number; month: number; year: number }): number[] => {
  return useMemo(() => {
    const prevMonth = month === 1 ? 12 : month - 1;
    const prevMonthDays = dayjs(`${year}-${String(prevMonth).padStart(2, '0')}`).daysInMonth();

    const resault: number[] = [];

    for (let i = 0; i < count; i++) {
      resault.push(prevMonthDays - i);
    }
    return resault.reverse();
  }, [count]);
};

export default useLastMonthDays;

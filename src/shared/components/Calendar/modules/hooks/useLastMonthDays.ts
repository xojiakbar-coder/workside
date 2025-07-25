import { useMemo } from 'react';
import dayjs from 'dayjs';

const useLastMonthDays = (count: number): number[] => {
  return useMemo(() => {
    const today = dayjs();
    const currentMonth = today.month();
    const lastMonth = today.subtract(1, 'month');
    const lastMonthTotalDays = lastMonth.daysInMonth();

    const offset = currentMonth === 6 ? 1 : 0;

    const start = lastMonthTotalDays - count + 1 + offset;

    return Array.from({ length: count }, (_, i) => start + i);
  }, [count]);
};

export default useLastMonthDays;

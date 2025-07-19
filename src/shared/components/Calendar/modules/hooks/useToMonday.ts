import dayjs from 'dayjs';
import { useMemo } from 'react';

const useToMonday = ({ month, year }: { month: number; year: number }): number => {
  return useMemo(() => {
    const jsDay = dayjs(`${year}-${String(month).padStart(2, '0')}-01`).day();
    return jsDay === 0 ? 7 : jsDay;
  }, [month, year]);
};

export default useToMonday;

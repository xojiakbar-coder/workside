import dayjs from 'dayjs';
import { useMemo } from 'react';
import * as Types from '../types';

const useCheckMonth = ({ month, year }: Types.IEntity.CheckMonthHookProps): Types.IEntity.CheckMonthReturnType => {
  return useMemo(() => {
    const inputDate = dayjs(`${year}-${String(month).padStart(2, '0')}-01`).startOf('month');
    const currentDate = dayjs().startOf('month');

    if (inputDate.isBefore(currentDate)) return 'past';
    if (inputDate.isSame(currentDate)) return 'current';
    return 'future';
  }, [month, year]);
};

export default useCheckMonth;

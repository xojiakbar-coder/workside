import dayjs from 'dayjs';
import * as Types from '../types';
import useCheckMonth from './useCheckMonth';

const useDays = ({ month, year }: Types.IEntity.DaysHookProps) => {
  const monthDays = dayjs(`${year}-${month}-01`).daysInMonth();
  const checkedMonth = useCheckMonth({ year, month });
  const days = Array.from({ length: monthDays }, (_, index) => {
    switch (index + 1) {
      case dayjs().date():
        return {
          day: index + 1,
          today: checkedMonth === 'current',
          future: checkedMonth === 'future'
        };

      default:
        return {
          day: index + 1,
          today: false,
          future: checkedMonth === 'future'
        };
    }
  });

  return days;
};

export default useDays;

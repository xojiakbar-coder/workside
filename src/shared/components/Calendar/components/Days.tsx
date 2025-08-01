import dayjs from 'dayjs';

// hooks
import useCalendar from '@/core/context/Calendar/usage';
import { useToMonday, useColumnsBalance, useLastMonthDays } from '../modules/hooks';

// styles
import styles from '../Calendar.module.scss';

// components
import WeekDays from './WeekDays';
import ThisMonth from './ThisMonth';

const Days = () => {
  const { year, month } = useCalendar();

  const daysLeft = useToMonday({ month, year }) - 1;
  const lastMonthDays = useLastMonthDays({ count: daysLeft, month, year });
  const futureMonthDays = useColumnsBalance(daysLeft + dayjs(`${year}-${month}-01`).daysInMonth(), 14);

  return (
    <div className={styles.days_section}>
      {/* Week days */}
      <WeekDays />

      {/* Past month days */}
      {lastMonthDays.map(day => {
        return (
          <div key={day} className={styles.days_section_item_inactive}>
            {day}
          </div>
        );
      })}

      {/* This month days */}
      <ThisMonth />

      {/* Future month days */}
      {Array.from({ length: futureMonthDays }, (_, index) => {
        return (
          <div key={index} className={styles.days_section_item_inactive}>
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};

export default Days;

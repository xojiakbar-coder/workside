import dayjs from 'dayjs';

// Constants
import * as Constants from './modules/constants';

// hooks
import useCalendar from '@/core/context/Calendar/usage';
import { useDays, useCheckMonth, useToMonday, useColumnsBalance } from './modules/hooks';

// styles
import styles from './Calendar.module.scss';

const Days = () => {
  const { year, month } = useCalendar();

  const days = useDays({ month, year });
  const checkMonth = useCheckMonth({ year, month });

  const daysLeft = useToMonday({ month, year }) - 1;
  const futureMonthDays = useColumnsBalance(daysLeft + dayjs(`${year}-${month}-01`).daysInMonth(), 14);

  return (
    <div className={styles.days_section}>
      {Constants.weekDaysArray.map(weekDay => (
        <div key={weekDay} className={styles.days_section_item_week_day}>
          {weekDay}
        </div>
      ))}

      {Array.from({ length: daysLeft }, (_, index) => {
        return (
          <div key={index} className={styles.days_section_item_inactive}>
            {index + 1}
          </div>
        );
      })}
      {days.map(({ day, today, future }) => {
        if (today && checkMonth === 'current') {
          return (
            <div key={day} className={styles.days_section_item_today}>
              <div className={styles.days_section_item_today_indicator}>{day}</div>
            </div>
          );
        } else if ((future && checkMonth === 'future') || (checkMonth === 'current' && day > dayjs().date())) {
          return (
            <div key={day} className={styles.days_section_item}>
              {day}
            </div>
          );
        } else if (checkMonth === 'past' || (checkMonth === 'current' && day < dayjs().date())) {
          return (
            <div key={day} className={styles.days_section_item}>
              {day}
            </div>
          );
        }
      })}
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

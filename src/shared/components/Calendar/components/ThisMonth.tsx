import dayjs from 'dayjs';

// hooks
import useCalendar from '@/core/context/Calendar/usage';
import { useCheckMonth, useDays } from '../modules/hooks';

// styles
import styles from '../Calendar.module.scss';

const ThisMonth = () => {
  const { year, month } = useCalendar();

  const days = useDays({ month, year });
  const checkMonth = useCheckMonth({ year, month });

  return (
    <>
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
    </>
  );
};

export default ThisMonth;

import dayjs from 'dayjs';
import { useState } from 'react';

import { useDays, useCheckMonth, useToMonday, useColumnsBalance } from './modules/hooks';

// styles
import styles from './Calendar.module.scss';
import { WeekDaysArray } from './modules/constants';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState({
    month: dayjs().month() + 1,
    year: dayjs().year()
  });

  const days = useDays({ month: selectedDate.month, year: selectedDate.year });
  const checkMonth = useCheckMonth({ year: selectedDate.year, month: selectedDate.month });

  const daysLeft = useToMonday({ month: selectedDate.month, year: selectedDate.year }) - 1;
  const futureMonthDays = useColumnsBalance(
    daysLeft + dayjs(`${selectedDate.year}-${selectedDate.month}-01`).daysInMonth(),
    14
  );

  console.log(selectedDate.month, selectedDate.year);

  return (
    <div className={styles.calendar}>
      <div className={styles.days_section}>
        {WeekDaysArray.map(weekDay => (
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
      <div className={styles.selected_date_section}>
        <button onClick={() => setSelectedDate({ ...selectedDate, year: 2027 })}>2027</button>
        <button onClick={() => setSelectedDate({ ...selectedDate, month: 1 })}>1</button>
      </div>
    </div>
  );
};

export default Calendar;

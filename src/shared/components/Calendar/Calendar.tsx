import dayjs from 'dayjs';

import { Calendar as MantineCalendar } from '@mantine/dates';

// import cx from "clsx";
import styles from './Calendar.module.scss';
import { Input, Textarea } from '@mantine/core';
import { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState<string>(dayjs().startOf('month').toDate().toString());

  return (
    <div className={styles.calendar}>
      <MantineCalendar
        static
        defaultDate={dayjs().startOf('month').toDate()}
        onDateChange={date => setCurrentDate(date)}
        renderDay={date => {
          const day = dayjs(date).date();
          const isSameMonth = dayjs(date).isSame(dayjs(currentDate), 'month');
          const isSameYear = dayjs(date).isSame(dayjs(), 'year');
          const isTodayOrFuture = dayjs(date).isSame(dayjs(), 'day') || dayjs(date).isAfter(dayjs(), 'day');

          const showEventSection = isSameMonth && isSameYear && isTodayOrFuture;
          return (
            <div className={styles.day_section}>
              {day}
              {showEventSection && (
                <div className={styles.event_section}>
                  <Input size="xs" placeholder="Enter event name" />
                  <Textarea size="xs" placeholder="Enter event description (optional)" />
                </div>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};

export default Calendar;

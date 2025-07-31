// components
import { Calendar as CalendarBody } from '@/shared/components';

// styles
import styles from './Calendar.module.scss';

const Calendar = () => {
  return (
    <div className={styles.container}>
      <CalendarBody />
    </div>
  );
};

export default Calendar;

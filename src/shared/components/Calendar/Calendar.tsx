// hooks
import useCalendar from '@/core/context/Calendar/usage';

// styles
import styles from './Calendar.module.scss';

// components
import Days from './Days';
import SelectYear from './SelectYear';
import SelectMonth from './SelectMonth';
import YearMonthController from './YearMonthController';

const Calendar = () => {
  const { view } = useCalendar();

  return (
    <div className={styles.calendar}>
      <YearMonthController />
      {view === 'days' && <Days />}
      {view === 'month' && <SelectMonth />}
      {view === 'year' && <SelectYear />}
    </div>
  );
};

export default Calendar;

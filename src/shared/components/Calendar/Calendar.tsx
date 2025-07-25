// hooks
import useDecade from './modules/hooks/useDecade';
import useCalendar from '@/core/context/Calendar/usage';

// styles
import styles from './Calendar.module.scss';

// components
import { Days, SelectYear, SelectMonth, YearMonthController } from './components';

const Calendar = () => {
  const decade = useDecade();
  const { view } = useCalendar();

  return (
    <div className={styles.calendar}>
      <YearMonthController decade={decade} />
      {view === 'days' && <Days  />}
      {view === 'month' && <SelectMonth />}
      {view === 'year' && <SelectYear decade={decade} />}
    </div>
  );
};

export default Calendar;

// hooks
import { useDecade } from './modules/hooks';
import useCalendar from '@/core/context/Calendar/usage';

// styles
import styles from './Calendar.module.scss';

const SelectYear = () => {
  const { setYear, setView } = useCalendar();
  const { years } = useDecade();

  const handleYear = (year: number) => {
    setYear(year);
    setView('month');
  };

  return (
    <div className={styles.select_year}>
      {years.map(year => (
        <div key={year} className={styles.select_year_item} onClick={() => handleYear(year)}>
          <div className={styles.select_year_item_content}>{year}</div>
        </div>
      ))}
    </div>
  );
};

export default SelectYear;

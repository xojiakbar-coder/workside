// hooks
import useCalendar from '@/core/context/Calendar/usage';

// styles
import styles from '../Calendar.module.scss';

type IProps = {
  decade: {
    years: number[];
  };
};

const SelectYear = ({ decade }: IProps) => {
  const { setYear, setView } = useCalendar();

  const handleYear = (year: number) => {
    setYear(year);
    setView('month');
  };

  return (
    <div className={styles.select_year}>
      {decade.years.map(year => (
        <div key={year} className={styles.select_year_item} onClick={() => handleYear(year)}>
          <div className={styles.select_year_item_content}>{year}</div>
        </div>
      ))}
    </div>
  );
};

export default SelectYear;

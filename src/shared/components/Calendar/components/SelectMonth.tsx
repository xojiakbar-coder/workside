// Constants
import * as Constants from '../modules/constants';

// hooks
import useCalendar from '@/core/context/Calendar/usage';

// styles
import styles from '../Calendar.module.scss';

const SelectMonth = () => {
  const { setMonth, setView } = useCalendar();

  const handleMonth = (newMonth: number) => {
    setMonth(newMonth);
    setView('days');
  };

  return (
    <div className={styles.select_month}>
      {Constants.monthNamesArray.map((month, index) => (
        <div key={index} className={styles.select_month_item} onClick={() => handleMonth(index + 1)}>
          <div className={styles.select_month_item_content}>{month.slice(0, 3)}</div>
        </div>
      ))}
    </div>
  );
};

export default SelectMonth;

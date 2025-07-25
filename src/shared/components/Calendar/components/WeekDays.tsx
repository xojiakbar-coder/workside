// Constants
import * as Constants from '../modules/constants';

// styles
import styles from '../Calendar.module.scss';

const WeekDays = () => {
  return (
    <>
      {Constants.weekDaysArray.map(weekDay => (
        <div key={weekDay} className={styles.days_section_item_week_day}>
          {weekDay}
        </div>
      ))}
    </>
  );
};

export default WeekDays;

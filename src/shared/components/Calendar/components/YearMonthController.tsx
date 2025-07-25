// Icons
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

// Constants
import * as Constants from '../modules/constants';

// hooks
import useCalendar from '@/core/context/Calendar/usage';

// styles
import styles from '../Calendar.module.scss';

type IProps = {
  decade: {
    decadeLabel: string;
    nextDecade: () => void;
    prevDecade: () => void;
  };
};

const YearMonthController = ({ decade }: IProps) => {
  const { year, month, view, setMonth, setView, setYear } = useCalendar();

  const handleView = () => {
    if (view === 'month') {
      setView('year');
    } else if (view === 'days') {
      setView('month');
    }
  };

  const plusAction = () => {
    if (view === 'days') {
      setMonth(month + 1);
    } else if (view === 'month') {
      setYear(year + 1);
    } else if (view === 'year') {
      decade.nextDecade();
    }
  };

  const minusAction = () => {
    if (view === 'days') {
      setMonth(month - 1);
    } else if (view === 'month') {
      setYear(year - 1);
    } else if (view === 'year') {
      decade.prevDecade();
    }
  };

  return (
    <div className={styles.year_month_controller}>
      <div className={styles.year_month_controller_button} onClick={minusAction}>
        <IconChevronLeft />
      </div>
      <div className={styles.year_month_controller_title} onClick={handleView}>
        {view === 'days'
          ? `${Constants.monthNamesArray[month - 1]} ${year}`
          : view === 'month'
          ? year
          : view === 'year'
          ? decade.decadeLabel
          : ''}
      </div>
      <div className={styles.year_month_controller_button} onClick={plusAction}>
        <IconChevronRight />
      </div>
    </div>
  );
};

export default YearMonthController;

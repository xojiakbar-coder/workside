// Constants
import * as Constants from './modules/constants';

// Hooks
import useCalendar from '@/core/context/Calendar/usage';

const SelectMonth = () => {
  const { year, month, setYear, setMonth } = useCalendar();

  console.log(year, month);

  return (
    <div>
      {Constants.monthNamesArray.map(month => (
        <div key={month}>{month}</div>
      ))}
      <button onClick={() => setYear(year + 1)}>+</button>
      <button onClick={() => setMonth(month + 1)}>+</button>
      <button onClick={() => setYear(year - 1)}>-</button>
      <button onClick={() => setMonth(month - 1)}>-</button>
    </div>
  );
};

export default SelectMonth;

import { useState } from 'react';

const SelectYear = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <div>
      <div>Select Year</div>
      <div>
        <button onClick={() => setYear(year - 1)}>Previous Year</button>
        <span>{year}</span>
        <button onClick={() => setYear(year + 1)}>Next Year</button>
      </div>
    </div>
  );
};

export default SelectYear;

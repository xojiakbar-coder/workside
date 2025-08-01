import dayjs from 'dayjs';
import { useState } from 'react';

const useDecade = (initialDate: Date = new Date()) => {
  const initialYear = dayjs(initialDate).year();
  const startOfDecade = initialYear - (initialYear % 10);

  const [startYear, setStartYear] = useState(startOfDecade);

  const years = Array.from({ length: 10 }, (_, i) => startYear + i);

  const nextDecade = () => {
    setStartYear(prev => prev + 10);
  };

  const prevDecade = () => {
    setStartYear(prev => prev - 10);
  };

  const decadeLabel = `${startYear}-${startYear + 9}`;

  return {
    years,
    startYear,
    endYear: startYear + 9,
    decadeLabel,
    nextDecade,
    prevDecade
  };
};

export default useDecade;

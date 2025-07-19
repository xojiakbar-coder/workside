import { useMemo } from 'react';

const useColumnsBalance = (count: number, columns: number): number => {
  return useMemo(() => {
    const remainder = count % columns;
    return remainder === 0 ? 0 : columns - remainder;
  }, [count, columns]);
};

export default useColumnsBalance;

// React
import { useContext } from 'react';

// Context
import { CalendarContext } from './CalendarProvider';

// Hook
const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error('useCalendar must be used within a CalendarProvider');
  }
  return context;
};

export default useCalendar;

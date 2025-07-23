import React, { createContext, useState, useEffect } from 'react';

// Types
import * as Types from './types';

// Context
export const CalendarContext = createContext<Types.IProps | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'calendar-date';

export const CalendarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const now = new Date();

  const getInitialDate = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (typeof parsed.year === 'number' && typeof parsed.month === 'number') {
          return parsed;
        }
      } catch {
        // fallback to current date
      }
    }
    return { year: now.getFullYear(), month: now.getMonth() + 1 };
  };

  const [year, setYearState] = useState<number>(getInitialDate().year);
  const [month, setMonthState] = useState<number>(getInitialDate().month);
  const [view, setViewState] = useState<'month' | 'year' | 'days'>('days');

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ year, month }));
  }, [year, month]);

  const setYear = (newYear: number) => setYearState(newYear);
  const setMonth = (newMonth: number) => setMonthState(newMonth);
  const setView = (newView: 'month' | 'year' | 'days') => setViewState(newView);

  return (
    <CalendarContext.Provider value={{ year, month, view, setYear, setMonth, setView }}>
      {children}
    </CalendarContext.Provider>
  );
};

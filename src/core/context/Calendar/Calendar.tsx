import React, { createContext, useState, useEffect } from 'react';

import * as Types from './types';
import * as Constants from './constants';

// Hooks
import { storage } from '@/core/services/storage';

// Context
export const CalendarContext = createContext<Types.IProps | undefined>(undefined);

export const CalendarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const now = new Date();

  const getInitialDate = () => {
    const saved = storage.session.get(Constants.SESSION_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (typeof parsed.year === 'number' && typeof parsed.month === 'number') {
          return parsed;
        }
      } catch {}
    }
    return { year: now.getFullYear(), month: now.getMonth() + 1 };
  };

  const [year, setYearState] = useState<number>(getInitialDate().year);
  const [month, setMonthState] = useState<number>(getInitialDate().month);
  const [view, setViewState] = useState<'month' | 'year' | 'days'>('days');

  useEffect(() => {
    storage.session.set(Constants.SESSION_STORAGE_KEY, JSON.stringify({ year, month }));
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

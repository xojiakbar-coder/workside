import React, { createContext, useState, useEffect } from 'react';

import * as Types from './types';
import * as Constants from './constants';

import { storage } from '@/core/services/storage';

export const LayoutContext = createContext<Types.IProps | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getInitialData = (): Types.Layout => {
    const saved = storage.session.get(Constants.LAYOUT_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (typeof parsed.sidebarView === 'boolean' && typeof parsed.topBarView === 'boolean') {
          return parsed;
        }
      } catch {}
    }
    return { sidebarView: true, topBarView: true };
  };

  const [layout, setLayout] = useState<Types.Layout>(getInitialData);

  useEffect(() => {
    storage.session.set(Constants.LAYOUT_STORAGE_KEY, JSON.stringify(layout));
  }, [layout]);

  return <LayoutContext.Provider value={{ layout, setLayout }}>{children}</LayoutContext.Provider>;
};

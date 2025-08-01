// React
import React, { StrictMode } from 'react';

// React Router
import { BrowserRouter } from 'react-router-dom';

// Mantine
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

// Contexts
import * as Context from '../context';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StrictMode>
      <Context.Theme.Provider.ThemeProvider>
        <MantineProvider defaultColorScheme="auto">
          <BrowserRouter>
            <Notifications />
            <Context.Calendar.Provider.CalendarProvider>{children}</Context.Calendar.Provider.CalendarProvider>
          </BrowserRouter>
        </MantineProvider>
      </Context.Theme.Provider.ThemeProvider>
    </StrictMode>
  );
};

export default AppProvider;

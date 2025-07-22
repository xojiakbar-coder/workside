// React
import React, { StrictMode } from 'react';
// Router
import { BrowserRouter } from 'react-router-dom';
// Mantine
import { Notifications } from '@mantine/notifications';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

// Contexts
import * as Context from '../context';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StrictMode>
      <MantineProvider>
        <BrowserRouter>
          <Notifications />
          <ColorSchemeScript defaultColorScheme="light" />
          <Context.Calendar.Provider.CalendarProvider>{children}</Context.Calendar.Provider.CalendarProvider>
        </BrowserRouter>
      </MantineProvider>
    </StrictMode>
  );
};

export default AppProvider;

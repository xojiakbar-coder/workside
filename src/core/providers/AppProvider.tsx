import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Notifications } from '@mantine/notifications';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StrictMode>
      <MantineProvider>
        <BrowserRouter>
          <Notifications />
          <ColorSchemeScript defaultColorScheme="light" />
          {children}
        </BrowserRouter>
      </MantineProvider>
    </StrictMode>
  );
};

export default AppProvider;

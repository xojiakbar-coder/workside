// import Root from './root/root';
import './assets/styles/main.css';
import { StrictMode } from 'react';
import GenericElement from './view/GenericPage';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <Notifications />
        <GenericElement />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);

import './assets/styles/main.css';
import '@mantine/core/styles.css';
import '@mantine/core/styles/global.css';
// import '@mantine/core/styles/global.css';
import '@mantine/core/styles/NavLink.css';
import '@mantine/core/styles/Accordion.css';
import '@mantine/dates/styles.css';
import { Router } from './router';
import { createRoot } from 'react-dom/client';
import AppProvider from './core/providers/AppProvider';

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <Router />
  </AppProvider>
);

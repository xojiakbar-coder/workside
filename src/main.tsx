import './assets/styles/main.css';
import { Router } from './router';
import { createRoot } from 'react-dom/client';
import AppProvider from './core/providers/AppProvider';

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <Router />
  </AppProvider>
);

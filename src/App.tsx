import React, { Suspense, useMemo } from 'react';
import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import * as AuthModule from '@/modules/auth';

import Splash from '@/components/Splash';

import getRoutesData from './router';
import { ThemeProvider } from './core/providers/ThemeProvider';
import { useColorScheme } from '@mantine/hooks';

const config = {
  token: {
    fontFamily: `'Golos Text'`,
    colorPrimary: '#1890ff'
  },
  components: {
    Layout: {
      lightSiderBg: '#126dda',
      siderBg: '#126dda'
    },
    Modal: {
      borderRadiusLG: 16,
      paddingLG: 32,
      paddingMD: 24,
      paddingSM: 16,
      paddingXS: 8,
      paddingContentHorizontalLG: 32,
      colorBgMask: 'rgba(3, 4, 94, 0.32)'
    }
  }
};

const theme = createTheme({
  /** Your theme override here */
});

const App: React.FC = () => {
  const preferredColorScheme = useColorScheme();

  return (
    <>
      <ColorSchemeScript />
      <ThemeProvider defaultColorScheme={preferredColorScheme}>
        <MantineProvider forceColorScheme={preferredColorScheme}>
          <Suspense fallback={<Splash />}>
            <ApplicationRouter />
          </Suspense>
        </MantineProvider>
      </ThemeProvider>
    </>
  );
};

const ApplicationRouter = () => {
  const routes = getRoutesData();

  const router = useMemo(() => {
    return createBrowserRouter(routes);
  }, [routes]);

  return <RouterProvider router={router} />;
};

export default App;

import Layout from '@layout/Layout';
import TempPage from '@/view/TempPage';
import { type RouteObject } from 'react-router-dom';

const routes_data: RouteObject[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: TempPage },
      { path: 'general/attendance', Component: TempPage },
      { path: 'general/bugungi-ishlar', Component: TempPage },
      {
        path: 'general/xodimlar',
        Component: TempPage,
        children: [
          { index: true, Component: TempPage },
          { path: 'settings', Component: TempPage }
        ]
      }
    ]
  },
  {
    path: '/auth',
    Component: TempPage
  },
  {
    path: '/',
    Component: TempPage
  },
  {
    path: '/general/aktivlik',
    Component: TempPage
  },
  {
    path: '/general/analitika',
    Component: TempPage
  },
  {
    path: '/general/bugungi-ishlar',
    Component: TempPage
  },
  {
    path: '/general/xodimlar',
    children: [
      { index: true, Component: TempPage },
      { path: 'settings', Component: TempPage }
    ]
  }
];

export default routes_data;

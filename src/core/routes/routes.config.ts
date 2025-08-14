import TempPage from '@/view/TempPage';
import Layout from '@/core/layouts/Layout';
import Home from '@/pages/Dashboard/Dashboard';
import Calendar from '@/pages/Calendar/Calendar';
import { type RouteObject } from 'react-router-dom';

const routes_data: RouteObject[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: '/attendance', Component: TempPage },
      {
        path: '/work',
        Component: TempPage,
        children: [
          { path: 'tasks', Component: TempPage },
          { path: 'workload', Component: TempPage },
          { path: 'projects', Component: TempPage },
          { path: 'sprints', Component: TempPage },
          { path: 'reports', Component: TempPage },
          { path: 'timesheet', Component: TempPage },
          { path: 'project-roadmap', Component: TempPage }
        ]
      },
      {
        path: '/colleagues',
        Component: TempPage
      },
      {
        path: '/employees',
        Component: TempPage,
        children: [
          { path: 'employees-report', Component: TempPage },
          { path: 'employees-info', Component: TempPage },
          { path: 'add-employee', Component: TempPage },
          { path: 'create-report', Component: TempPage }
        ]
      },
      {
        path: '/projects',
        Component: TempPage,
        children: [
          { path: 'media', Component: TempPage },
          { path: 'news', Component: TempPage },
          { path: 'integrations', Component: TempPage }
        ]
      },
      { path: '/calendar', Component: Calendar },
      {
        path: 'settings',
        Component: TempPage,
        children: [
          { path: 'notifications', Component: TempPage },
          { path: 'security', Component: TempPage },
          { path: 'monitoring', Component: TempPage },
          { path: 'advantages', Component: TempPage },
          { path: 'help-center', Component: TempPage },
          { path: 'theme', Component: TempPage }
        ]
      }
    ]
  }
];

export default routes_data;

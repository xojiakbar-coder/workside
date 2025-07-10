export interface SidebarChildrenItemType {
  id: string | number;
  name: string;
  title: string;
  icon: null;
  element: null;
}

export interface SidebarItemType {
  name: string;
  title: string;
  icon: null;
  id: number | string;
  element: null;
  children: SidebarChildrenItemType[] | null;
}

export type OpenState = (number | string)[];

export const sidebar_items: SidebarItemType[] = [
  {
    id: 1,
    name: '/',
    icon: null,
    element: null,
    children: null,
    title: 'Dashboard'
  },
  {
    id: 2,
    children: null,
    title: 'Attendance',
    name: '/attendance',
    icon: null,
    element: null
  },
  {
    id: 3,
    children: null,
    icon: null,
    title: 'Tasks',
    element: null,
    name: '/tasks'
  },
  {
    id: 4,
    title: 'Employees',
    icon: null,
    element: null,
    name: '/employees',
    children: [
      {
        id: `4-1`,
        icon: null,
        element: null,
        title: 'Employees report',
        name: '/employees/employees-report'
      },
      {
        id: `4-2`,
        icon: null,
        element: null,
        title: 'Employees info',
        name: '/employees/employees-info'
      },
      {
        id: `4-3`,
        icon: null,
        element: null,
        title: 'Add employee',
        name: '/employees/add-employee'
      }
      // {
      //   id: `4-4`,
      //   icon: null,
      //   element: null,
      //   title: "Hisobot tayyorlash",
      //   name: "/general/hisobot-tayyorlash",
      // },
    ]
  },
  {
    id: 5,
    icon: null,
    title: 'Projects',
    element: null,
    name: '/projects',
    children: [
      {
        id: `5-1`,
        icon: null,
        title: 'Media',
        element: null,
        name: '/projects/media'
      },
      {
        id: `5-2`,
        title: 'News',
        element: null,
        icon: null,
        name: '/projects/news'
      },
      {
        id: `5-3`,
        icon: null,
        element: null,
        title: 'Integrations',
        name: '/projects/integrations'
      }
    ]
  },
  {
    id: 6,
    children: null,
    element: null,
    title: 'Calendar',
    icon: null,
    name: '/calendar'
  },
  {
    id: 7,
    icon: null,
    title: 'Settings',
    element: null,
    name: '/settings',
    children: [
      {
        id: `7-1`,
        icon: null,
        element: null,
        title: 'Notifications',
        name: '/settings/notifications'
      },
      {
        id: `7-2`,
        icon: null,
        title: 'Security',
        element: null,
        name: '/settings/security'
      },
      {
        id: `7-3`,
        icon: null,
        title: 'Monitoring',
        element: null,
        name: '/settings/monitoring'
      },
      {
        id: `7-4`,
        icon: null,
        title: 'Advantages',
        element: null,
        name: '/settings/advantages'
      },
      {
        id: `7-5`,
        icon: null,
        title: 'Help center',
        element: null,
        name: '/settings/help-center'
      },
      {
        id: `7-6`,
        icon: null,
        title: 'Theme',
        element: null,
        name: '/settings/theme'
      }
    ]
  }
];

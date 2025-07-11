import { IconBell, IconBriefcase, IconCalendar, IconCalendarEvent, IconClipboardPlus, IconHelp, IconHome, IconList, IconNews, IconPalette, IconPhotoVideo, IconReportAnalytics, IconSettings, IconShield, IconStar, IconTransfer, IconUserPlus, IconUsers, type Icon } from "@tabler/icons-react";

export interface SidebarChildrenItemType {
  id: string | number;
  name: string;
  title: string;
  icon: Icon | null;
  element: null;
}

export interface SidebarItemType {
  name: string;
  title: string;
  icon: Icon | null;
  id: number | string;
  element: null;
  children: SidebarChildrenItemType[] | null;
}

export type OpenState = (number | string)[];

export const sidebar_items: SidebarItemType[] = [
  {
    id: 1,
    name: '/',
    icon: IconHome,
    element: null,
    children: null,
    title: 'Dashboard'
  },
  {
    id: 2,
    children: null,
    title: 'Attendance',
    name: '/attendance',
    icon: IconCalendarEvent,
    element: null
  },
  {
    id: 3,
    children: null,
    icon: IconList,
    title: 'Tasks',
    element: null,
    name: '/tasks'
  },
  {
    id: 4,
    title: 'Employees',
    icon: IconUsers,
    element: null,
    name: '/employees',
    children: [
      {
        id: `4-1`,
        icon: IconReportAnalytics,
        element: null,
        title: 'Employees report',
        name: '/employees/employees-report'
      },
      {
        id: `4-2`,
        icon: IconUsers,
        element: null,
        title: 'Employees info',
        name: '/employees/employees-info'
      },
      {
        id: `4-3`,
        icon: IconUserPlus,
        element: null,
        title: 'Add employee',
        name: '/employees/add-employee'
      },
      {
        id: `4-4`,
        icon: IconClipboardPlus,
        element: null,
        title: 'Create Report',
        name: '/employees/create-report'
      }
    ]
  },
  {
    id: 5,
    icon: IconBriefcase,
    title: 'Projects',
    element: null,
    name: '/projects',
    children: [
      {
        id: `5-1`,
        icon: IconPhotoVideo,
        title: 'Media',
        element: null,
        name: '/projects/media'
      },
      {
        id: `5-2`,
        title: 'News',
        element: null,
        icon: IconNews,
        name: '/projects/news'
      },
      {
        id: `5-3`,
        icon: IconTransfer,
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
    icon: IconCalendar,
    name: '/calendar'
  },
  {
    id: 7,
    icon: IconSettings,
    title: 'Settings',
    element: null,
    name: '/settings',
    children: [
      {
        id: `7-1`,
        icon: IconBell,
        element: null,
        title: 'Notifications',
        name: '/settings/notifications'
      },
      {
        id: `7-2`,
        icon: IconShield,
        title: 'Security',
        element: null,
        name: '/settings/security'
      },
      {
        id: `7-3`,
        icon: IconStar,
        title: 'Advantages',
        element: null,
        name: '/settings/advantages'
      },
      {
        id: `7-4`,
        icon: IconHelp,
        title: 'Help center',
        element: null,
        name: '/settings/help-center'
      },
      {
        id: `7-5`,
        icon: IconPalette,
        title: 'Theme',
        element: null,
        name: '/settings/theme'
      }
    ]
  }
];

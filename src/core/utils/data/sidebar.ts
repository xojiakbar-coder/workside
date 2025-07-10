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
    name: 'general/attendance',
    icon: null,
    element: null
  },
  {
    id: 3,
    children: null,
    icon: null,
    title: 'Tasks',
    element: null,
    name: '/general/bugungi-ishlar'
  },
  {
    id: 4,
    title: 'Xodimlar',
    icon: null,
    element: null,
    name: '/general/general-xodimlar',
    children: [
      {
        id: `4-1`,
        icon: null,
        element: null,
        title: 'Xodimlar hisobotlari',
        name: '/general/xodimlar-hisobotlari'
      },
      {
        id: `4-2`,
        icon: null,
        element: null,
        title: "Xodimlar ma'lumotlari",
        name: '/general/xodimlar-malumotlari'
      },
      {
        id: `4-3`,
        icon: null,
        element: null,
        title: "Xodim qo'shish",
        name: '/general/xodim-qoshish'
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
    title: 'Loyihalar',
    element: null,
    name: '/general/loyihalar',
    children: [
      {
        id: `5-1`,
        icon: null,
        title: 'Media',
        element: null,
        name: '/general/media'
      },
      {
        id: `5-2`,
        title: 'Xabarlar',
        element: null,
        icon: null,
        name: '/general/xabarlar'
      },
      {
        id: `5-3`,
        icon: null,
        element: null,
        title: 'Integratsiyalar',
        name: '/general/integratsiyalar'
      }
    ]
  },
  {
    id: 6,
    children: null,
    element: null,
    title: 'Kalendar',
    icon: null,
    name: '/general/kalendar'
  },
  {
    id: 7,
    icon: null,
    title: 'Sozlanmalar',
    element: null,
    name: '/general/sozlamalar',
    children: [
      {
        id: `7-1`,
        icon: null,
        element: null,
        title: 'Bildirishnomalar',
        name: '/general/bildirishnomalar'
      },
      {
        id: `7-2`,
        icon: null,
        title: 'Xavsizlik',
        element: null,
        name: '/general/xavsizlik'
      },
      {
        id: `7-3`,
        icon: null,
        title: 'Nazorat qilish',
        element: null,
        name: '/general/nazorat-qilish'
      },
      {
        id: `7-4`,
        icon: null,
        title: 'Afzalliklar',
        element: null,
        name: '/general/afzalliklar'
      },
      {
        id: `7-5`,
        icon: null,
        title: 'Yordam markazi',
        element: null,
        name: '/general/yordam-markazi'
      },
      {
        id: `7-6`,
        icon: null,
        title: 'Mavzu',
        element: null,
        name: '/general/mavzu'
      }
    ]
  }
];

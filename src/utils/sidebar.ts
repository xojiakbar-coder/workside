import { ReactNode } from "react";
import GenericElement from "../view";
import StaffList from "../components/StaffList";

interface SidebarChildrenItemType {
  id: string;
  name: string;
  title: string;
  element: () => ReactNode;
}

export interface SidebarItemType {
  id: number | string;
  name?: string;
  title: string;
  children?: SidebarChildrenItemType[];
  element?: () => ReactNode;
}

const sidebar_items: SidebarItemType[] = [
  {
    id: 1,
    title: "Hisobotlar",
    name: "/hisobotlar",
    element: GenericElement,
    children: [],
  },
  {
    id: 2,
    title: "Aktivlik",
    name: "/umumiy-korinish/aktivlik",
    element: GenericElement,
    children: [],
  },
  {
    id: 3,
    title: "Analitika",
    name: "/umumiy-korinish/analitika",
    element: GenericElement,
    children: [],
  },
  {
    id: 4,
    title: "Kunlik topshiriqlar",
    name: "/umumiy-korinish/kunlik-topshiriqlar",
    element: GenericElement,
    children: [],
  },
  {
    id: 5,
    title: "Xodimlar",
    children: [
      {
        id: `5-1`,
        title: "Yangi xodim qo'shish",
        name: "/umumiy-korinish/xodim-qoshish",
        element: GenericElement,
      },
      {
        id: `5-2`,
        title: "Xodimlar ma'lumotlari",
        name: "/umumiy-korinish/xodimlar-malumotlari",
        element: StaffList,
      },
      {
        id: `5-3`,
        title: "Xodimlar hisobotlari",
        name: "/umumiy-korinish/xodimlar-hisobotlari",
        element: GenericElement,
      },
    ],
  },
  {
    id: 6,
    title: "Loyihalar",
    children: [
      {
        id: `6-1`,
        title: "Media",
        name: "/umumiy-korinish/media",
        element: GenericElement,
      },
      {
        id: `6-2`,
        title: "Xabarlar",
        name: "/umumiy-korinish/xabarlar",
        element: GenericElement,
      },
      {
        id: `6-3`,
        title: "Integratsiyalar",
        name: "/umumiy-korinish/integratsiyalar",
        element: GenericElement,
      },
    ],
  },
  {
    id: 7,
    title: "Kalendar",
    name: "/umumiy-korinish/kalendar",
    element: GenericElement,
    children: [],
  },
  {
    id: 8,
    title: "Obuna",
    name: "/umumiy-korinish/obuna",
    element: GenericElement,
    children: [],
  },
  {
    id: 9,
    title: "Sozlamalar",
    children: [
      {
        id: `9-1`,
        title: "Bildirishnomalar",
        name: "/umumiy-korinish/bildirishnomalar",
        element: GenericElement,
      },
      {
        id: `9-2`,
        title: "Xavsizlik",
        name: "/umumiy-korinish/xavsizlik",
        element: GenericElement,
      },
      {
        id: `9-3`,
        title: "Nazorat qilish",
        name: "/umumiy-korinish/nazorat-qilish",
        element: GenericElement,
      },
      {
        id: `9-4`,
        title: "Afzalliklar",
        name: "/umumiy-korinish/afzalliklar",
        element: GenericElement,
      },
      {
        id: `9-5`,
        title: "Yordam markazi",
        name: "/umumiy-korinish/yordam-markazi",
        element: GenericElement,
      },
      {
        id: `9-6`,
        title: "Biz haqimizda",
        name: "/umumiy-korinish/biz-haqimizda",
        element: GenericElement,
      },
      {
        id: `9-7`,
        title: "Mavzu",
        name: "/umumiy-korinish/mavzu",
        element: GenericElement,
      },
    ],
  },
  // {
  //   id: 10,
  //   title: "Logout",
  //   name: "/umumiy-korinish/logout",
  //   element: GenericElement,
  //   children: [],
  // },
];

export default sidebar_items;

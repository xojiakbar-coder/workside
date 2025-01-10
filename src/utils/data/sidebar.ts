import { ReactNode } from "react";
import { IconType } from "react-icons";
import GenericElement from "../../view";
import { RiCalendar2Fill } from "react-icons/ri";
import Calendar from "../../components/Calendar";
import StaffList from "../../components/StaffList";
import AddNewEmployee from "../../components/AddEmployee";
import EmployeeReports from "../../components/EmployeeReports";
import {
  LuBellPlus,
  LuSettings,
  LuSquarePen,
  LuNotebookText,
  LuSquareActivity,
  LuChartNoAxesColumn,
} from "react-icons/lu";

export interface SidebarChildrenItemType {
  id: string;
  name: string;
  title: string;
  element: () => ReactNode;
}

export interface SidebarItemType {
  name: string;
  title: string;
  icon: IconType;
  id: number | string;
  element: () => ReactNode;
  children: SidebarChildrenItemType[];
}

export type OpenState = (number | string)[];

export const sidebar_items: SidebarItemType[] = [
  {
    id: 1,
    children: [],
    title: "Hisobotlar",
    name: "/hisobotlar",
    icon: LuNotebookText,
    element: GenericElement,
  },
  {
    id: 2,
    children: [],
    title: "Aktivlik",
    icon: LuSquareActivity,
    element: GenericElement,
    name: "/umumiy-korinish/aktivlik",
  },
  {
    id: 3,
    children: [],
    title: "Analitika",
    element: GenericElement,
    icon: LuChartNoAxesColumn,
    name: "/umumiy-korinish/analitika",
  },
  {
    id: 4,
    children: [],
    icon: LuSquarePen,
    title: "Bugungi ishlar",
    element: GenericElement,
    name: "/umumiy-korinish/bugungi-ishlar",
  },
  {
    id: 5,
    title: "Xodimlar",
    icon: LuSquareActivity,
    element: GenericElement,
    name: "/umumiy-korinish/umumiy-xodimlar",
    children: [
      {
        id: `5-1`,
        title: "Xodimlar hisobotlari",
        name: "/umumiy-korinish/xodimlar-hisobotlari",
        element: EmployeeReports,
      },
      {
        id: `5-2`,
        title: "Xodimlar ma'lumotlari",
        name: "/umumiy-korinish/xodimlar-malumotlari",
        element: StaffList,
      },
      {
        id: `5-3`,
        title: "Yangi xodim qo'shish",
        name: "/umumiy-korinish/xodim-qoshish",
        element: AddNewEmployee,
      },
    ],
  },
  {
    id: 6,
    title: "Loyihalar",
    icon: LuSquareActivity,
    element: GenericElement,
    name: "/umumiy-korinish/loyihalar",
    children: [
      {
        id: `6-1`,
        title: "Media",
        element: GenericElement,
        name: "/umumiy-korinish/media",
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
    children: [],
    element: Calendar,
    title: "Calendar",
    icon: RiCalendar2Fill,
    name: "/umumiy-korinish/calendar",
  },
  {
    id: 8,
    children: [],
    title: "Obuna",
    icon: LuBellPlus,
    element: GenericElement,
    name: "/umumiy-korinish/obuna",
  },
  {
    id: 9,
    icon: LuSettings,
    title: "Sozlamalar",
    element: GenericElement,
    name: "/umumiy-korinish/sozlamalar",
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
];

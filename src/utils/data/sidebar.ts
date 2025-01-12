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
  LuUsersRound,
  LuFolders,
  LuVideo,
} from "react-icons/lu";

export interface SidebarChildrenItemType {
  id: string | number;
  name: string;
  title: string;
  icon: IconType;
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
    icon: LuUsersRound,
    element: GenericElement,
    name: "/umumiy-korinish/umumiy-xodimlar",
    children: [
      {
        id: `5-1`,
        icon: LuVideo,
        element: EmployeeReports,
        title: "Xodimlar hisobotlari",
        name: "/umumiy-korinish/xodimlar-hisobotlari",
      },
      {
        id: `5-2`,
        icon: LuVideo,
        element: StaffList,
        title: "Xodimlar ma'lumotlari",
        name: "/umumiy-korinish/xodimlar-malumotlari",
      },
      {
        id: `5-3`,
        icon: LuVideo,
        element: AddNewEmployee,
        title: "Yangi xodim qo'shish",
        name: "/umumiy-korinish/xodim-qoshish",
      },
      {
        id: `5-4`,
        icon: LuVideo,
        element: GenericElement,
        title: "Hisobot tayyorlash",
        name: "/umumiy-korinish/hisobot-tayyorlash",
      },
    ],
  },
  {
    id: 6,
    icon: LuFolders,
    title: "Loyihalar",
    element: GenericElement,
    name: "/umumiy-korinish/loyihalar",
    children: [
      {
        id: `6-1`,
        icon: LuVideo,
        title: "Media",
        element: GenericElement,
        name: "/umumiy-korinish/media",
      },
      {
        id: `6-2`,
        icon: LuVideo,
        title: "Xabarlar",
        name: "/umumiy-korinish/xabarlar",
        element: GenericElement,
      },
      {
        id: `6-3`,
        icon: LuVideo,
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
    title: "Sozlanmalar",
    element: GenericElement,
    name: "/umumiy-korinish/sozlamalar",
    children: [
      {
        id: `9-1`,
        icon: LuVideo,
        title: "Bildirishnomalar",
        name: "/umumiy-korinish/bildirishnomalar",
        element: GenericElement,
      },
      {
        id: `9-2`,
        icon: LuVideo,
        title: "Xavsizlik",
        name: "/umumiy-korinish/xavsizlik",
        element: GenericElement,
      },
      {
        id: `9-3`,
        icon: LuVideo,
        title: "Nazorat qilish",
        name: "/umumiy-korinish/nazorat-qilish",
        element: GenericElement,
      },
      {
        id: `9-4`,
        icon: LuVideo,
        title: "Afzalliklar",
        name: "/umumiy-korinish/afzalliklar",
        element: GenericElement,
      },
      {
        id: `9-5`,
        icon: LuVideo,
        title: "Yordam markazi",
        name: "/umumiy-korinish/yordam-markazi",
        element: GenericElement,
      },
      {
        id: `9-6`,
        icon: LuVideo,
        title: "Biz haqimizda",
        name: "/umumiy-korinish/biz-haqimizda",
        element: GenericElement,
      },
      {
        id: `9-7`,
        icon: LuVideo,
        title: "Mavzu",
        name: "/umumiy-korinish/mavzu",
        element: GenericElement,
      },
    ],
  },
];

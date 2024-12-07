import { ReactNode } from "react";
import GenericElement from "@/view";
import Home from "@/components/Home/Home";
import StaffList from "@/components/StaffList";

export interface NavbarItemType {
  id: number;
  path: string;
  title: string;
  sidebar?: boolean;
  element: ReactNode;
}

const navbar_items: NavbarItemType[] = [
  {
    id: 1,
    path: "/",
    title: "Asosiy",
    element: Home,
    sidebar: false,
  },
  {
    id: 2,
    path: "/hisobotlar",
    title: "Hisobotlar",
    element: StaffList,
    sidebar: true,
  },
  {
    id: 3,
    path: "/aloqa",
    title: "Aloqa",
    element: GenericElement,
    sidebar: false,
  },
  {
    id: 4,
    path: "/biz-haqimizda",
    title: "Biz haqimizda",
    element: GenericElement,
    sidebar: false,
  },
];

export default navbar_items;

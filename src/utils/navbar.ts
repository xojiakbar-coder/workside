import { ReactNode } from "react";
import GenericElement from "../view";
import Contact from "../components/Contact";

export interface NavbarItemType {
  id: number;
  path: string;
  title: string;
  sidebar?: boolean;
  element: () => ReactNode;
}

const navbar_items: NavbarItemType[] = [
  {
    id: 1,
    path: "/hisobotlar",
    title: "Hisobotlar",
    element: GenericElement,
    sidebar: true,
  },
  {
    id: 2,
    path: "/biz-haqimizda",
    title: "Biz haqimizda",
    element: GenericElement,
    sidebar: false,
  },
  {
    id: 3,
    path: "/aloqa",
    title: "Aloqa",
    element: Contact,
    sidebar: false,
  },
];

export default navbar_items;

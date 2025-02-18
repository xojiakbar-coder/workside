import { ReactNode } from "react";
import GenericElement from "../../view";
import Subscribe from "../../components/Subscribe";

export interface NavbarItemType {
  id: number;
  path: string;
  title: string;
  sidebar?: boolean;
  element: () => ReactNode;
}

export interface ProfilesItemType {
  id: number;
  url: string;
  icon: string;
  name: string;
}

const navbar_items: NavbarItemType[] = [
  {
    id: 1,
    path: "/",
    sidebar: false,
    title: "Asosiy",
    element: GenericElement,
  },
  {
    id: 2,
    sidebar: true,
    path: "/hisobotlar",
    title: "Hisobotlar",
    element: GenericElement,
  },
  {
    id: 3,
    sidebar: false,
    path: "/obuna",
    title: "Obuna",
    element: Subscribe,
  },
];

export default navbar_items;

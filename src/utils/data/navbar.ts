import { ReactNode } from "react";
import GenericElement from "../../view";
import { RiGithubFill } from "react-icons/ri";
import { RiTelegramFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";

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
    path: "/",
    sidebar: true,
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
];

export default navbar_items;

export const profiles_data = [
  {
    id: 1,
    name: "Instagram",
    href: "",
    icon: RiInstagramLine,
  },
  {
    id: 2,
    name: "Instagram",
    href: "",
    icon: RiTelegramFill,
  },
  {
    id: 3,
    name: "Instagram",
    href: "",
    icon: RiGithubFill,
  },
];

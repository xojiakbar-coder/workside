import { ReactNode } from "react";
import GenericElement from "../../view";
import { RiGithubFill } from "react-icons/ri";
import Contact from "../../components/Contact";
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
  {
    id: 3,
    sidebar: false,
    path: "/biz-haqimizda",
    title: "Biz haqimizda",
    element: GenericElement,
  },
  {
    id: 4,
    sidebar: false,
    path: "/aloqa",
    title: "Aloqa",
    element: Contact,
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

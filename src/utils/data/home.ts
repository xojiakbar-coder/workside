import { NavbarItemType } from "./navbar";
import Home from "../../components/Home/Home";
import OurCase from "../../components/OurCase";
import OurService from "../../components/OurService";

export const home_sections: NavbarItemType[] = [
  {
    id: 1,
    sidebar: true,
    title: "Home",
    path: "/",
    element: Home,
  },
  {
    id: 3,
    sidebar: false,
    element: OurService,
    path: "/bizning-xizmatlarimiz",
    title: "Bizning Xizmatlarimiz",
  },
  {
    id: 3,
    sidebar: false,
    element: OurCase,
    path: "/bizning-xizmatlarimiz",
    title: "Bizning Xizmatlarimiz",
  },
];

export const our_sevices = [
  {
    id: 1,
    title: "Analitik amallar",
  },
  {
    id: 2,
    title: "Xodimlar nazorati",
  },
  {
    id: 3,
    title: "Aktivlikni boshqarish",
  },
];

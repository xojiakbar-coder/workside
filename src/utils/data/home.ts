import { NavbarItemType } from "./navbar";
import Home from "../../components/Home/Home";
import OurCase from "../../components/OurCase";
import OurService from "../../components/OurService";
import {
  RiUser2Fill,
  RiPieChartFill,
  RiBarChartGroupedFill,
} from "react-icons/ri";

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
    icon: RiBarChartGroupedFill,
  },
  {
    id: 2,
    title: "Xodimlar nazorati",
    icon: RiUser2Fill,
  },
  {
    id: 3,
    icon: RiPieChartFill,
    title: "Aktivlikni boshqarish",
  },
];

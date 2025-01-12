import { IconType } from "react-icons";

export interface TabDataType {
  id: number | string;
  name: string;
  title: string;
  icon: IconType;
}

export interface TabsProps {
  data: TabDataType[];
  toggleSidebar: boolean;
  type: "link" | "text" | "sidebar";
}

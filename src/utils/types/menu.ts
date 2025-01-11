import { IconType } from "react-icons";
import { SidebarChildrenItemType } from "../data/sidebar";

export interface GenericMenuPropsType {
  leftIcon?: {
    icon: boolean;
    iconBody: IconType;
  };
  rightIcon?: {
    icon: boolean;
    iconBody: IconType;
  };
  storageName?: string;
  defaultValue?: string;
  items: SidebarChildrenItemType[];
}

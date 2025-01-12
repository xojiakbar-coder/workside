import { IconType } from "react-icons";

export interface MenuItemType {
  id: number;
  title: string;
}

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
  items: MenuItemType[];
}

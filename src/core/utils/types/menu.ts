import { IconType } from "react-icons";

export interface MenuItemType {
  id: number;
  title: string;
}

export interface GenericMenuPropsType {
  leftIcon?: IconType;
  rightIcon?: IconType;
  storageName?: string;
  defaultValue?: string;
  items: MenuItemType[];
  type: "text" | "icon" | "text-icon";
}

export interface GenericMenuContentPropsType {
  items: MenuItemType[];
  menuValue: string;
  handleLanguageChange: (value: string) => void;
}

export interface GenericMenuTriggerPropsType {
  leftIcon?: IconType;
  menuValue?: string;
  rightIcon?: IconType;
  type: "text" | "icon" | "text-icon";
}

import { IconType } from "react-icons";

export interface GenericMenuPropsType {
  leftIcon?: {
    icon: boolean;
    iconBody: IconType;
  };
  rightIcon?: {
    icon: boolean;
    iconBody: IconType;
  };
  defaultValue: string;
  items: GenericMenuItemType[];
}

export interface GenericMenuItemType {
  id: number;
  value: string;
}

import { FC } from "react";
import { Menu } from "../Generic";
import { RiGlobalLine } from "react-icons/ri";
import { GenericMenuPropsType } from "../../utils/types/menu";

const Lang: FC<Omit<GenericMenuPropsType, "defaultValue">> = ({
  items,
  leftIcon,
}) => {
  const defaultLeftIcon = {
    icon: true,
    iconBody: RiGlobalLine,
  };

  const langItems = items || [
    {
      id: 1,
      value: "o'zbek",
    },
    {
      id: 2,
      value: "english",
    },
    {
      id: 3,
      value: "russian",
    },
  ];

  return (
    <Menu
      items={langItems}
      defaultValue="o'zbek"
      leftIcon={leftIcon || defaultLeftIcon}
    />
  );
};

export default Lang;

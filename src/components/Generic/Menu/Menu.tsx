import { FC, useState } from "react";
import { MenuRoot } from "../../ui/menu";
import GenericMenuContent from "./MenuContent";
import GenericMenuTrigger from "./MenuTrigger";
import { GenericMenuPropsType } from "../../../utils/types/menu";

const GenericMenu: FC<GenericMenuPropsType> = ({
  type,
  items,
  leftIcon,
  rightIcon,
  storageName,
  defaultValue,
}) => {
  const [menuValue, setMenuValue] = useState(
    localStorage.getItem(storageName || "menu-value") || defaultValue || ""
  );

  const handleLanguageChange = (value: string) => {
    setMenuValue(value);
    localStorage.setItem(storageName || "menu-value", value);
  };

  return (
    <MenuRoot>
      <GenericMenuTrigger
        type={type}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        menuValue={menuValue}
      />
      <GenericMenuContent
        items={items}
        menuValue={menuValue}
        handleLanguageChange={handleLanguageChange}
      />
    </MenuRoot>
  );
};

export default GenericMenu;

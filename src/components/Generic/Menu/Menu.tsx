import { FC, useState } from "react";
import { Text } from "@chakra-ui/react";
import { Button } from "../../ui/button";
import { GenericMenuPropsType } from "../../../utils/types/menu";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../../ui/menu";

const GenericMenu: FC<GenericMenuPropsType> = ({
  items,
  leftIcon,
  rightIcon,
  storageName,
  defaultValue,
}) => {
  const [menuValue, setMenuValue] = useState(() => {
    return (
      localStorage.getItem(storageName || "menu-value") || defaultValue || ""
    );
  });

  const handleLanguageChange = (value: string) => {
    setMenuValue(value);
    localStorage.setItem(storageName || "menu-value", value);
  };

  return (
    <MenuRoot>
      <MenuTrigger asChild className="outline-none">
        <Button
          size="sm"
          variant="outline"
          className="flex items-center group gap-[8px]"
        >
          <div className="mt-[2px]">
            {leftIcon && leftIcon.icon && <leftIcon.iconBody />}
          </div>
          <Text className="text-[16px] text-item-color group-hover:text-light">
            {menuValue}
          </Text>
          {rightIcon && rightIcon.icon && <rightIcon.iconBody />}
        </Button>
      </MenuTrigger>
      <MenuContent className="flex gap-[14px] flex-col outline-none px-[14px] py-[12px] bg-ghost-bg-color">
        {items.map((item) => (
          <MenuItem
            key={item.id}
            value={item.title}
            className="px-[10px] py-[8px] cursor-pointer"
            onClick={() => handleLanguageChange(item.title)}
          >
            {item.title}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default GenericMenu;

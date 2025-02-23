import { FC } from "react";
import { MenuContent, MenuItem } from "../../ui/menu";
import { GenericMenuContentPropsType } from "../../../utils/types/menu";

const GenericMenuContent: FC<GenericMenuContentPropsType> = ({
  items,
  menuValue,
  handleLanguageChange,
}) => {
  return (
    <MenuContent className="flex gap-[14px] flex-col outline-none px-[14px] py-[12px] bg-ghost-bg-color">
      {items.map((item) => (
        <MenuItem
          key={item.id}
          value={item.title}
          onClick={() => handleLanguageChange(item.title)}
          className={`capitalize px-[10px] py-[8px] cursor-pointer ${
            item.title === menuValue && "text-primary-color"
          }`}
        >
          {item.title}
        </MenuItem>
      ))}
    </MenuContent>
  );
};

export default GenericMenuContent;

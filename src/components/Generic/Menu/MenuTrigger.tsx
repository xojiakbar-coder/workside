import { Text } from "@chakra-ui/react";
import { FC, createElement } from "react";
import { MenuTrigger } from "../../ui/menu";
import { GenericMenuTriggerPropsType } from "../../../utils/types/menu";

const GenericMenuTrigger: FC<GenericMenuTriggerPropsType> = ({
  type,
  leftIcon,
  rightIcon,
  menuValue,
}) => {
  return (
    <MenuTrigger asChild>
      <div className="flex items-center group gap-[8px] cursor-pointer">
        <div
          className={
            type === "icon" ? "992:text-[20px] text-[16px]" : "mt-[2px]"
          }
        >
          {leftIcon && createElement(leftIcon)}
        </div>
        {type !== "icon" && (
          <Text className="text-[16px] text-item-color group-hover:text-light select-none">
            {menuValue}
          </Text>
        )}
        {rightIcon && createElement(rightIcon)}
      </div>
    </MenuTrigger>
  );
};

export default GenericMenuTrigger;

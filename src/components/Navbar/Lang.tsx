import { RiGlobalLine } from "react-icons/ri";
import { Button } from "../../components/ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";
import { Text } from "@chakra-ui/react";

const Lang = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild className="outline-none">
        <Button variant="outline" size="sm" className="flex items-center group">
          <RiGlobalLine className="mr-[-2px] text-item-color group-hover:text-light" />
          <Text className="text-[16px] text-item-color group-hover:text-light">
            Uzbek
          </Text>
        </Button>
      </MenuTrigger>
      <MenuContent className="flex gap-[14px] flex-col outline-none px-[14px] py-[12px] bg-ghost-bg-color">
        <MenuItem value="rename" className="px-[10px] py-[8px] cursor-pointer">
          Uzbek
        </MenuItem>
        <MenuItem value="export" className="px-[10px] py-[8px] cursor-pointer">
          English
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default Lang;

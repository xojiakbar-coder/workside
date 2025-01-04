import { useState } from "react";
import { Text } from "@chakra-ui/react";
import { RiGlobalLine } from "react-icons/ri";
import { Button } from "../../components/ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";

const Lang = () => {
  const [lang, setLang] = useState<"uzbek" | "english">("uzbek");

  const handleLanguageChange = (newLang: "uzbek" | "english") => {
    setLang(newLang);
  };

  return (
    <MenuRoot>
      <MenuTrigger asChild className="outline-none">
        <Button variant="outline" size="sm" className="flex items-center group">
          <RiGlobalLine className="mr-[-2px] text-item-color group-hover:text-light" />
          <Text className="text-[16px] text-item-color group-hover:text-light">
            {lang === "uzbek" ? "uzbek" : "english"}
          </Text>
        </Button>
      </MenuTrigger>
      <MenuContent className="flex gap-[14px] flex-col outline-none px-[14px] py-[12px] bg-ghost-bg-color">
        <MenuItem
          value="uzbek"
          className="px-[10px] py-[8px] cursor-pointer"
          onClick={() => handleLanguageChange("uzbek")}
        >
          Uzbek
        </MenuItem>
        <MenuItem
          value="english"
          className="px-[10px] py-[8px] cursor-pointer"
          onClick={() => handleLanguageChange("english")}
        >
          English
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default Lang;

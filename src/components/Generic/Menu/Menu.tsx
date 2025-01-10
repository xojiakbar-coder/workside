import { useState } from "react";
import { Text } from "@chakra-ui/react";
import { RiGlobalLine } from "react-icons/ri";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../../ui/menu";
import { Button } from "../../ui/button";

const Lang = () => {
  const [lang, setLang] = useState<"o'zbek" | "english">("o'zbek");

  const handleLanguageChange = (newLang: "o'zbek" | "english") => {
    setLang(newLang);
  };

  return (
    <MenuRoot>
      <MenuTrigger asChild className="outline-none">
        <Button variant="outline" size="sm" className="flex items-center group">
          <RiGlobalLine className="mr-[-2px] text-item-color group-hover:text-light" />
          <Text className="text-[16px] text-item-color group-hover:text-light">
            {lang === "o'zbek" ? "o'zbek" : "english"}
          </Text>
        </Button>
      </MenuTrigger>
      <MenuContent className="flex gap-[14px] flex-col outline-none px-[14px] py-[12px] bg-ghost-bg-color">
        <MenuItem
          value="o'zbek"
          className="px-[10px] py-[8px] cursor-pointer"
          onClick={() => handleLanguageChange("o'zbek")}
        >
          O'zbek
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

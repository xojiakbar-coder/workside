import { Menu } from "../Generic";
import { RiGlobalLine } from "react-icons/ri";
import { MenuItemType } from "../../utils/types/menu";

const Lang = () => {
  const leftIcon = {
    icon: true,
    iconBody: RiGlobalLine,
  };

  const langItems: MenuItemType[] = [
    {
      id: 1,
      title: "o'zbek",
    },
    {
      id: 2,
      title: "english",
    },
    {
      id: 3,
      title: "russian",
    },
  ];

  return (
    <Menu
      items={langItems}
      storageName="lang"
      defaultValue="o'zbek"
      leftIcon={leftIcon || leftIcon}
    />
  );
};

export default Lang;

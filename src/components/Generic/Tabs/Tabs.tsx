import { ElementType, FC } from "react";
import { Tabs } from "@chakra-ui/react";
import { MenuItemType } from "../../../utils/types/menu";

interface GenericTabsConentItemType {
  id: number;
  value: string;
  className?: string;
  element: ElementType;
}

interface GenericTabsPropsType {
  defaultValue: string;
  menu_items: MenuItemType[];
  content: GenericTabsConentItemType[];
}

const GenericTabs: FC<GenericTabsPropsType> = ({ menu_items, content }) => {
  return (
    <Tabs.Root
      variant="enclosed"
      defaultValue="year"
      className="flex flex-col justify-center items-center w-full"
    >
      <Tabs.List
        p="1"
        bg="bg.muted"
        className="576:w-max w-[320px] rounded-md mb-[35px] gap-[20px]"
      >
        {menu_items?.map((item) => {
          return (
            <Tabs.Trigger
              key={item.id}
              value={item.title}
              className="flex items-center justify-center w-full 576:px-[10px] px-[3px] 576:text-[16px] text-[14px] whitespace-nowrap"
            >
              {item.title}
            </Tabs.Trigger>
          );
        })}
        <Tabs.Indicator rounded="l2" />
      </Tabs.List>
      {content?.map((item) => {
        const Element = item.element;
        return (
          <Tabs.Content
            key={item.id}
            value={item.value}
            className={item.className}
          >
            <Element />
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
};

export default GenericTabs;

import { Tabs } from "../Generic";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Collapsible } from "@chakra-ui/react";
import sidebar_items from "../../utils/sidebar";

type ID = string | number;
type Arrow = boolean;

interface SidebarItem {
  id: ID;
  children?: Array<{
    id: ID;
    title: string;
    name: string;
  }>;
  title: string;
  name: string;
}

const SidebarContent: FC = () => {
  // const arrowRotate = arrowActive
  // ? "rotate-90 text-primary-btn"
  // : "rotate-0 group-hover:text-light";

  return (
    <div className="w-full h-full flex flex-col gap-[12px] overflow-y-auto p-[16px] select-none">
      {sidebar_items.map((item) => {
        const { id, children, title, name } = item;
        if (children?.length) {
          return (
            <Collapsible.Root
              key={id}
              // onOpenChange={() => handleChange({ id })}
            >
              <Collapsible.Trigger
              // className={`flex items-center justify-between group ${
              //   itemId === id && arrowActive
              //     ? "text-primary-btn"
              //     : "text-item-color hover:text-light"
              // } p-2 hover:bg-ghost-bg-color rounded-lg text-left cursor-pointer h-[47px] min-h-[47px] px-[14px] font-grotesk w-full`}
              >
                {title}
                <div>
                  <i
                  // className={`fa-solid fa-chevron-right text-item-color ${
                  //   // id === itemId && arrowRotate
                  // }`}
                  />
                </div>
              </Collapsible.Trigger>
              <Collapsible.Content className="flex py-[5px] pl-[12px] w-full">
                <Tabs data={children && children} />
              </Collapsible.Content>
            </Collapsible.Root>
          );
        } else {
          return (
            <NavLink
              key={id}
              to={name || ""}
              // className={({ isActive }) =>
              //   `flex items-center group p-2 rounded-lg text-left cursor-pointer h-[47px] min-h-[47px] px-[14px] font-grotesk text-item-color ${
              //     // isActive && arrowActive == false
              //       // ? "text-primary-btn"
              //       // : "hover:text-light"
              //   }`
              // }
            >
              {title}
            </NavLink>
          );
        }
      })}
    </div>
  );
};

export default SidebarContent;

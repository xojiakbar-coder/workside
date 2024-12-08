import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import sidebar_items from "@/utils/sidebar";
import { Collapsible } from "@chakra-ui/react";

interface ItemProps {
  id: string | number;
  arrow: boolean;
}

const SidebarContent: FC = () => {
  const [itemOpen, setItemOpen] = useState<ItemProps>({
    id: "",
    arrow: false,
  });

  const handleChange = ({ id }: { id: string | number }) => {
    setItemOpen((prevState) => ({
      id,
      arrow: prevState.id === id ? !prevState.arrow : true,
    }));
  };

  const arrowRotate = itemOpen.arrow ? "rotate-90" : "rotate-0";

  return (
    <div className="overflow-y-auto h-full">
      <div className="w-full px-[18px] h-full flex flex-col gap-[12px]">
        {sidebar_items.map((item) => {
          const { id, children, title, name } = item;
          if (children?.length) {
            return (
              <Collapsible.Root
                key={id}
                onOpenChange={() => handleChange({ id })}
              >
                <Collapsible.Trigger
                  className={`flex items-center justify-between group ${
                    itemOpen.id === id && itemOpen.arrow
                      ? "text-primary-btn"
                      : "text-item-color hover:text-light"
                  } p-2 hover:bg-ghost-bg-color rounded-lg text-left cursor-pointer h-[47px] min-h-[47px] px-[14px] font-grotesk w-full`}
                >
                  {title}
                  <div>
                    <i
                      className={`fa-solid fa-chevron-right text-item-color ${
                        id === itemOpen.id && arrowRotate
                      }`}
                    />
                  </div>
                </Collapsible.Trigger>
                <Collapsible.Content className="flex flex-col gap-[12px] py-[5px] rounded-lg">
                  {children.map((child) => (
                    <NavLink
                      key={child.id}
                      to={child.name || ""}
                      className={({ isActive }) =>
                        `flex items-center group hover:bg-ghost-bg-color p-2 rounded-lg text-left cursor-pointer h-[47px] min-h-[47px] px-[14px] font-grotesk text-item-color ${
                          isActive ? "text-primary-btn" : "hover:text-light"
                        }`
                      }
                    >
                      {child.title}
                    </NavLink>
                  ))}
                </Collapsible.Content>
              </Collapsible.Root>
            );
          } else {
            return (
              <NavLink
                key={id}
                to={name || ""}
                className={({ isActive }) =>
                  `flex items-center group hover:bg-ghost-bg-color p-2 rounded-lg text-left cursor-pointer h-[47px] min-h-[47px] px-[14px] font-grotesk text-item-color ${
                    isActive ? "text-primary-btn" : "hover:text-light"
                  }`
                }
              >
                {title}
              </NavLink>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SidebarContent;

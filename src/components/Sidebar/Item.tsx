import sidebar_items from "@/utils/sidebar";
import { FC } from "react";
import { NavLink } from "react-router-dom";

const SidebarContent: FC = () => {
  return (
    <div>
      <div></div>
      <div className="w-full px-[18px] py-[20px] h-max">
        <ul className="flex flex-col gap-[12px]">
          {sidebar_items.map((item) => (
            <NavLink
              key={item.id}
              to={item.name}
              className="flex items-center group hover:bg-ghost-bg-color p-2 rounded-lg text-left cursor-pointer h-[47px] min-h-[47px] px-[14px] font-grotesk text-item-color hover:text-light"
            >
              {item.title}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarContent;

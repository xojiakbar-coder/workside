import { FC } from "react";
import { Tabs } from "../Generic";
import sidebar_items from "../../utils/data/sidebar";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
} from "../ui/accordion";

const SidebarContent: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const generalSidebarItemStyle = `flex items-center group p-2 rounded-lg text-left cursor-pointer h-[47px] min-h-[47px] px-[14px] font-grotesk text-item-color  hover:text-light hover:bg-ghost-bg-color`;

  return (
    <div className="w-full h-full flex flex-col gap-[12px] overflow-y-auto p-[16px] select-none">
      {sidebar_items.map((item) => {
        const { id, children, title, name } = item;
        if (children?.length) {
          return (
            <AccordionRoot key={id} collapsible>
              <AccordionItem value={title}>
                <AccordionItemTrigger
                  className={`${generalSidebarItemStyle} ${
                    name === location.pathname &&
                    "bg-ghost-bg-color text-primary-btn hover:text-primary-btn"
                  }`}
                  onClick={() => navigate(name)}
                >
                  {title}
                </AccordionItemTrigger>
                <AccordionItemContent>
                  <Tabs data={children && children} type="link" />
                </AccordionItemContent>
              </AccordionItem>
            </AccordionRoot>
          );
        } else {
          return (
            <NavLink
              key={id}
              to={name || ""}
              className={({ isActive }) =>
                `${generalSidebarItemStyle} ${
                  isActive
                    ? "text-primary-btn bg-ghost-bg-color hover:text-primary-btn"
                    : "hover:text-light"
                }`
              }
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

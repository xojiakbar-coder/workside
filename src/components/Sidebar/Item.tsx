import { Tabs } from "../Generic";
import { useEffect, useState } from "react";
import sidebar_items from "../../utils/data/sidebar";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
} from "../ui/accordion";

const SidebarContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState<string[]>([]);

  useEffect(() => {
    const path = JSON.parse(localStorage.getItem("open") || "[]");
    setOpen(path);
  }, []);

  useEffect(() => {}, [location]);

  const handleItemToggle = (id: string | number) => {
    console.log(id);
  };

  const generalSidebarItemStyle = `flex items-center group p-2 rounded-lg text-left cursor-pointer h-[47px] min-h-[47px] px-[14px] font-grotesk text-item-color hover:text-light hover:bg-ghost-bg-color`;

  return (
    <div className="w-full h-full flex flex-col gap-[12px] overflow-y-auto p-[16px] select-none">
      {sidebar_items.map((item) => {
        const { id, children, title, name } = item;

        if (children?.length) {
          return (
            <AccordionRoot key={id} collapsible>
              <AccordionItem
                value={id.toString()}
                // onClick={() => handleItemToggle(id)}
              >
                <AccordionItemTrigger
                  name={name === location.pathname ? name : ""}
                  className={`${generalSidebarItemStyle} ${
                    location.pathname === name &&
                    "bg-ghost-bg-color text-primary-btn hover:text-primary-btn"
                  }`}
                  onClick={() => {
                    if (location.pathname !== name) {
                      navigate(name);
                    }
                  }}
                >
                  {title}
                </AccordionItemTrigger>
                <AccordionItemContent>
                  <Tabs data={children} type="link" />
                </AccordionItemContent>
              </AccordionItem>
            </AccordionRoot>
          );
        } else {
          return (
            <NavLink
              key={id}
              to={item.name || name}
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

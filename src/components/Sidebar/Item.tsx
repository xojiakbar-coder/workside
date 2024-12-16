import { Tabs } from "../Generic";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  OpenState,
  sidebar_items,
  SidebarItemType,
} from "../../utils/data/sidebar";

const SidebarContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState<OpenState>([]);

  useEffect(() => {
    const path = JSON.parse(localStorage.getItem("open") || "[]") as OpenState;
    setOpen(path);
  }, []);

  const onClickParent = (
    item: SidebarItemType,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (location.pathname !== item.name) navigate(item.name);
    if (open.includes(item.id)) {
      const data = open.filter((val) => val !== item.id);
      localStorage.setItem("open", JSON.stringify(data));
      setOpen(data);
    } else {
      localStorage.setItem("open", JSON.stringify([...open, item.id]));
      setOpen([...open, item.id]);
    }

    if (!item.children.length && item.name) {
      e.preventDefault();
      navigate(item.name);
    }
  };

  const generalSidebarItemStyle = `flex items-center group p-2 rounded-xl text-left cursor-pointer group text-item-color hover:text-light transition-all ease-out duration-[115ms] h-[47px] min-h-[47px] px-[14px] font-grotesk hover:bg-ghost-bg-color`;

  return (
    <div className="w-full h-full flex flex-col gap-[12px] overflow-y-auto p-[16px] select-none">
      {sidebar_items.map((item) => {
        const active = open.includes(item.id);
        const activeRotate = active ? "rotate-90" : "rotate-0";
        const activePath = location.pathname.includes(item.name);

        if (item.children?.length) {
          return (
            <div key={item.id}>
              <div>
                <div
                  onClick={(e) => onClickParent(item, e)}
                  className={`${generalSidebarItemStyle} flex items-center justify-between ${
                    activePath &&
                    "bg-ghost-bg-color text-primary-btn hover:text-primary-btn"
                  }`}
                >
                  <p className="text-inherit">{item.title}</p>
                  <i
                    className={`fa-solid fa-angle-right text-inherit ${activeRotate}`}
                  />
                </div>
                {active && <Tabs data={item.children} type="link" />}
              </div>
            </div>
          );
        } else {
          return (
            <NavLink
              key={item.id}
              to={item.name || ""}
              className={({ isActive }) =>
                `${generalSidebarItemStyle} ${
                  isActive
                    ? "text-primary-btn bg-ghost-bg-color hover:text-primary-btn"
                    : "hover:text-light"
                }`
              }
            >
              {item.title}
            </NavLink>
          );
        }
      })}
    </div>
  );
};

export default SidebarContent;

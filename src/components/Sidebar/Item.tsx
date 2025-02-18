import { Tabs } from "../Generic";
import { FC, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  OpenState,
  sidebar_items,
  SidebarItemType,
} from "../../utils/data/sidebar";

interface SidebarPropsType {
  onClose?: () => void;
  toggleSidebar?: boolean;
}

const SidebarItems: FC<SidebarPropsType> = ({ onClose, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState<OpenState>([]);

  useEffect(() => {}, [toggleSidebar]);

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

  const generalSidebarItemStyle = `flex items-center ${
    toggleSidebar && "justify-center"
  } group rounded-md text-[14px] text-left gap-[14px] cursor-pointer text-item-color hover:text-light transition-all ease-out duration-[115ms] h-[47px] min-h-[47px] px-[14px] font-mont font-medium hover:bg-dark-bg-color`;

  return (
    <div className="w-full h-max flex flex-col gap-[12px] px-[16px] py-[24px] select-none">
      {sidebar_items.map((item) => {
        const Icon = item.icon;
        const active = open.includes(item.id);
        const activeRotate = active ? "rotate-90" : "rotate-0";
        const activePath = location.pathname.includes(item.name);

        if (item.children?.length) {
          return (
            <div key={item.id}>
              <div className={toggleSidebar ? "group flex items-center" : ""}>
                <div
                  title={item.title}
                  onClick={(e) => onClickParent(item, e)}
                  className={`${generalSidebarItemStyle} flex items-center ${
                    !toggleSidebar ? "justify-between" : "justify-center"
                  } ${
                    activePath &&
                    "text-primary-color hover:text-primary-color bg-dark-bg-color"
                  }`}
                >
                  <p className="flex items-center gap-[14px] text-inherit">
                    <Icon className="text-[20px] cursor-pointer" />
                    {!toggleSidebar && item.title}
                  </p>
                  {!toggleSidebar && (
                    <i
                      className={`fa-solid fa-angle-right text-inherit ${activeRotate}`}
                    />
                  )}
                </div>
                {active && (
                  <>
                    {!toggleSidebar && (
                      <Tabs
                        type="link"
                        data={item.children}
                        toggleSidebar={toggleSidebar ? toggleSidebar : false}
                      />
                    )}
                  </>
                )}
                <div className="absolute w-0 min-w-0 group-hover:w-[330px] group-hover:min-w-[330px] overflow-y-auto z-[888] mt-[50px] ml-[31px] left-[50px] tabs h-[240px]">
                  <Tabs
                    type="sidebar"
                    data={item.children}
                    toggleSidebar={toggleSidebar ? toggleSidebar : false}
                  />
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <NavLink
              key={item.id}
              onClick={onClose}
              title={item.title}
              to={item.name || ""}
              className={({ isActive }) =>
                `${generalSidebarItemStyle} ${
                  isActive
                    ? "text-primary-color hover:text-primary-color bg-dark-bg-color"
                    : "hover:text-light"
                }`
              }
            >
              <Icon className="text-[20px]" />
              {!toggleSidebar && item.title}
            </NavLink>
          );
        }
      })}
    </div>
  );
};

export default SidebarItems;

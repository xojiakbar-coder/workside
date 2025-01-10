import { useState } from "react";
import SidebarItems from "./Item";
import { RiSideBarFill, RiSideBarLine } from "react-icons/ri";

const Aside = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <aside
      className={`hidden sm:flex flex-col h-full py-[7px] border-r border-r-[#111111] ${
        sidebar ? "w-[90px]" : "w-[345px]"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`flex px-[10px] ${
          sidebar ? "justify-center" : "justify-end"
        } items-center my-[12px]`}
      >
        {sidebar ? (
          <RiSideBarLine
            onClick={toggleSidebar}
            className="text-[26px] cursor-pointer"
          />
        ) : (
          <RiSideBarFill
            onClick={toggleSidebar}
            className="text-[26px] cursor-pointer"
          />
        )}
      </div>
      <div className="flex flex-col overflow-y-auto h-section-h min-h-section-h">
        <SidebarItems toggleSidebar={sidebar} />
      </div>
    </aside>
  );
};

export default Aside;

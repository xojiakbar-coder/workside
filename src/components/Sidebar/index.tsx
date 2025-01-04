import Logout from "./Logout";
import Drawer from "./Drawer";
import Navbar from "../Navbar";
import SidebarContent from "./Item";
import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import useSize from "../../hooks/useSize";
import { LuAlignLeft } from "react-icons/lu";

const Sidebar: FC = () => {
  const { width } = useSize();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <main className="text-light h-[100vh] min-h-[100vh] overflow-y-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Body */}
      <section
        className={`flex ${
          width >= 878 ? "items-center" : "items-start"
        } h-full`}
      >
        {width >= 878 ? (
          <aside className="h-full w-[18vw] min-w-[345px] border-r border-r-[#111111] overflow-y-auto">
            <div className="flex flex-col overflow-y-auto h-section-h min-h-section-h">
              <SidebarContent />
              <Logout />
            </div>
          </aside>
        ) : (
          <div
            className="fixed z-10 bg-body-bg-color select-none py-[12px] px-[10px] cursor-pointer mt-[10px] ml-[1.8%] rounded-md transition duration-[240ms] ease-in-out"
            onClick={toggleDrawer}
          >
            <LuAlignLeft className="text-[26px]" />
          </div>
        )}
        <section className="w-full h-full overflow-y-auto">
          <Outlet />
        </section>
      </section>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </main>
  );
};

export default Sidebar;

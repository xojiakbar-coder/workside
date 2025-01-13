import Aside from "./Aside";
import Drawer from "./Drawer";
import Navbar from "../Navbar";
import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";

const Sidebar: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <main className="text-light h-[100dvh] min-h-[100dvh] overflow-y-hidden w-full">
      {/* Navbar */}
      <Navbar />
      <section className="flex 992:items-center items-start h-[92dvh]">
        <div className="h-full py-[16px] px-[18px]">
          {/* Sidebar */}
          <Aside />
        </div>
        <div
          onClick={toggleDrawer}
          className="992:hidden fixed z-[666] flex items-center gap-x-[3px] select-none py-[12px] w-max px-[14px] pr-[18px] cursor-pointer mt-[9px] ml-[12px] rounded-md"
        >
          <LuChevronRight className="text-[18px]" />
          <div>Menu</div>
        </div>
        {/* Body */}
        <section className="mb-auto w-full h-[92dvh] overflow-y-auto">
          <Outlet />
        </section>
      </section>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </main>
  );
};

export default Sidebar;

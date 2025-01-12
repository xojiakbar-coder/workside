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
    <main className="text-light h-[100dvh] min-h-[100dvh] overflow-y-hidden">
      {/* Navbar */}
      <Navbar />
      <section className="flex sm:items-center items-start h-[92dvh] py-[16px] px-[18px]">
        {/* Sidebar */}
        <Aside />
        <div
          onClick={toggleDrawer}
          className="fixed sm:hidden flex items-center z-10 bg-body-bg-color select-none py-[12px] w-max px-[14px] pr-[18px] cursor-pointer mt-[9px] ml-[1.8%] rounded-md transition duration-[240ms] ease-in-out"
        >
          <LuChevronRight className="text-[26px]" />
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

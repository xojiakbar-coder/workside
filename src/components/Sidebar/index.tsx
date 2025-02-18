import Aside from "./Aside";
import Drawer from "./Drawer";
import Navbar from "../Navbar";
import { FC, useState } from "react";
import { LuChevronRight } from "react-icons/lu";
import { Outlet, useLocation } from "react-router-dom";

const Sidebar: FC = () => {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  function splitUrl(url: string) {
    const trimmedSlash = url.slice(1);
    const general = trimmedSlash.split("/");
    const second = general[1] ? general[1].replace("-", " ") : "";
    return { first: general[0], second };
  }

  return (
    <main className="flex flex-col text-light h-[100dvh] min-h-[100dvh] overflow-y-hidden w-full">
      {/* Navbar */}
      <Navbar />
      <section className="flex 992:items-center items-start h-[93dvh]">
        <aside className="hidden 992:flex h-full">
          <Aside />
        </aside>
        <section className="mb-auto w-full h-full overflow-y-auto">
          <div
            onClick={toggleDrawer}
            className="992:hidden h-max flex items-center text-[14px] cursor-pointer bg-transparent border-b border-border-color py-[12px] w-full px-[14px] pr-[18px]"
          >
            <div className="flex items-center gap-x-[5px]">
              <LuChevronRight className="text-[18px]" />
              <div className="flex items-center gap-x-[5px] font-semibold capitalize">
                {splitUrl(location.pathname).first}
                {splitUrl(location.pathname).second && (
                  <LuChevronRight className="text-[18px]" />
                )}
                {splitUrl(location.pathname).second}
              </div>
            </div>
          </div>
          <div>
            <Outlet />
          </div>
        </section>
      </section>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </main>
  );
};

export default Sidebar;

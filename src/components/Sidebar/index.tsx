import { FC } from "react";
import Navbar from "../Navbar";
import SidebarContent from "./Item";
import { Outlet } from "react-router-dom";

const Sidebar: FC = () => {
  return (
    <main className="text-light">
      {/* Navbar */}
      <Navbar />
      {/* Body */}
      <section className="flex items-center h-[92vh]">
        <aside className="h-full w-[18vw] min-w-[345px] border-r border-r-gray-color overflow-y-auto">
          <SidebarContent />
        </aside>
        <section className="w-full h-full overflow-x-auto">
          <Outlet />
        </section>
      </section>
    </main>
  );
};

export default Sidebar;

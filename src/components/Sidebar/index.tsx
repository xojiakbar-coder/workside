import { FC } from "react";
import Navbar from "../Navbar";
import SidebarContent from "./Item";
import { Outlet } from "react-router-dom";

const Sidebar: FC = () => {
  return (
    <main className="text-light h-[100vh] min-h-[100vh] overflow-y-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Body */}
      <section className="flex items-center h-full">
        <aside className="h-full w-[18vw] min-w-[345px] border-r border-r-gray-color overflow-y-auto">
          <SidebarContent />
        </aside>
        <section className="w-full h-full">
          <Outlet />
        </section>
      </section>
    </main>
  );
};

export default Sidebar;

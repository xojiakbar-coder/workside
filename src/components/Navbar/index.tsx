import { FC } from "react";
import useSize from "@/hooks/useSize";
import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import Item from "./Item";

const Navbar: FC = () => {
  const { scrollY } = useSize();

  return (
    <main>
      {/* Sticky Navbar */}
      <header className="sticky z-[999] top-0 w-full">
        <div
          className={`flex justify-between items-center ${
            scrollY !== null && scrollY > 5 && "shadow-navbar-shadow b"
          } h-[80px] px-[3%] py-[25px] border-none transition-all ease-out duration-[230ms] bg-body-bg-color`}
        >
          <Logo />
          <Item />
        </div>
      </header>

      {/* Body */}
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default Navbar;

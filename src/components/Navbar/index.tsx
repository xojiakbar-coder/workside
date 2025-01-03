import Logo from "./Logo";
import Item from "./Item";
import Drawer from "./Drawer";
import { useState } from "react";
import useSize from "../../hooks/useSize";
import { LuAlignLeft } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import Lang from "./Lang";

const Navbar = () => {
  const { scrollY, width } = useSize();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const location = useLocation();
  let shdaowVisible = false;
  let shadow = false;
  if (scrollY !== null && scrollY > 5) {
    shadow = true;
  }

  if (
    !location.pathname.search("/umumiy-korinish") ||
    !location.pathname.search("/hisobotlar")
  ) {
    shdaowVisible = true;
  }

  return (
    //  Sticky Navbar
    <header
      className={`sticky z-[999] backdrop-blur-[20px] bg-[#09090bf5] ${
        !shadow && shdaowVisible && "border border-[#111111]"
      } top-0 w-full h-[8vh] min-h-[8vh]`}
    >
      <div
        className={`flex justify-between items-center ${
          shadow && "shadow-navbar-shadow"
        } px-[3%] py-[25px] transition-all ease-out duration-[230ms] h-full`}
      >
        {width > 878 && <Logo />}
        {width > 878 && (
          <div className="flex gap-[20px]">
            <Item dir="row" />
            <Lang />
          </div>
        )}
        {width <= 878 && (
          <div
            className="select-none py-[7px] px-[20px] cursor-pointer rounded-[8px] transition duration-[240ms] ease-in-out"
            onClick={toggleDrawer}
          >
            <LuAlignLeft className="text-[26px]" />
          </div>
        )}
        {width < 878 && <Logo />}
        {width < 878 && <Lang />}
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </header>
  );
};

export default Navbar;

import Logo from "./Logo";
import Item from "./Item";
import Lang from "./Lang";
import Drawer from "./Drawer";
import { useState } from "react";
import { Timer } from "../Generic";
import useSize from "../../hooks/useSize";
import { LuAlignLeft } from "react-icons/lu";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { scrollY } = useSize();
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
      className={`sticky z-[999] backdrop-blur-[14px] bg-[#09090be0] ${
        !shadow && shdaowVisible && "border border-[#111111]"
      } top-0 w-full h-[8vh] min-h-[8vh]`}
    >
      <div
        className={`flex justify-between items-center ${
          shadow && "shadow-navbar-shadow"
        } px-[3%] py-[25px] transition-all ease-out duration-[230ms] h-full`}
      >
        <div className="992:flex hidden">
          <Logo />
        </div>

        <div className="992:flex hidden items-center gap-[20px]">
          <Item dir="row" />
          <Timer format="LT" bottom_date_visible={false} />
          <Lang />
        </div>
        <div className="992:hidden flex w-full justify-between">
          <div
            className="992:hidden flex select-none py-[7px] cursor-pointer rounded-[8px] transition duration-[240ms] ease-in-out"
            onClick={toggleDrawer}
          >
            <LuAlignLeft className="text-[26px]" />
          </div>
          <Logo />
          <Lang />
        </div>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </header>
  );
};

export default Navbar;

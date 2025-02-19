import Logo from "./Logo";
import Item from "./Item";
import Lang from "./Lang";
import Drawer from "./Drawer";
import { useState } from "react";
import useSize from "../../hooks/useSize";
import { Button, Timer } from "../Generic";
import { LuAlignLeft } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { scrollY } = useSize();
  const navigate = useNavigate();
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
    !location.pathname.search("/umumiy") ||
    !location.pathname.search("/hisobotlar")
  ) {
    shdaowVisible = true;
  }

  return (
    <header
      className={`sticky z-[999] bg-body-bg-color ${
        !shadow && shdaowVisible && "border-b border-border-color"
      } top-0 w-full h-[78px] min-h-[78px]`}
    >
      <div
        className={`flex justify-between items-center ${
          shadow && "shadow-navbar-shadow"
        } px-[3%] py-[25px] transition-all ease-out duration-[230ms] h-full`}
      >
        <div className="992:flex hidden">
          <Logo />
        </div>

        <div className="992:flex hidden items-center gap-[28px]">
          <Item dir="row" />
          <Timer format="LT" bottom_date_visible={false} />
          <Lang />
          <Button
            type="outline"
            onClick={() => navigate("/signin")}
            className="w-max font-[500] text-[14px] py-[22px]"
          >
            SignIn
          </Button>
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

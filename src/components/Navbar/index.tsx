import Logo from "./Logo";
import Item from "./Item";
import { FC } from "react";
import useSize from "@/hooks/useSize";
import { useLocation } from "react-router-dom";

const Navbar: FC = () => {
  const { scrollY } = useSize();
  const location = useLocation();
  let shadow = false;
  if (scrollY !== null && scrollY > 5) {
    shadow = true;
  }

  return (
    //  Sticky Navbar
    <header
      className={`sticky z-[999] ${
        !shadow &&
        location.pathname === "/hisobotlar" &&
        "border-b border-gray-color"
      } top-0 w-full h-[8vh] min-h-[8vh] bg-body-bg-color`}
    >
      <div
        className={`flex justify-between items-center ${
          shadow && "shadow-navbar-shadow"
        } px-[3%] py-[25px] transition-all ease-out duration-[230ms] h-full`}
      >
        <Logo />
        <Item />
      </div>
    </header>
  );
};

export default Navbar;

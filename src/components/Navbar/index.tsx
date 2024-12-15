import Logo from "./Logo";
import Item from "./Item";
import useSize from "../../hooks/useSize";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { scrollY } = useSize();
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
      className={`sticky z-[999] ${
        !shadow && shdaowVisible && "border-b border-gray-color"
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

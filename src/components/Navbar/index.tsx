import { FC } from "react";
import { Outlet } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <div>
      <div>Navbar</div>
      <Outlet />
    </div>
  );
};

export default Navbar;

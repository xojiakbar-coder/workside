import { FC } from "react";
import Logo from "./Logo";
import Item from "./Item";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

interface DrawerPropsType {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: FC<DrawerPropsType> = ({ isOpen, onClose }) => {
  useLockBodyScroll(isOpen);
  return (
    <div
      className={`fixed top-0 w-full h-[100dvh] min-h-[100dvh] flex flex-col justify-between backdrop-blur-[20px] bg-[#09090bf5] transform transition duration-[370ms] ease-in-out z-[999] ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-row w-full items-center justify-between py-[15px] px-[20px]">
        <div>
          <Logo onClose={() => onClose()} />
        </div>
        <div>
          <button onClick={onClose} className="p-2">
            {/* <img
              src={}
              alt="close icon not found"
              className="w-[40px] select-none font-outfit transition duration-105 ease-in-out"
            /> */}
            close
          </button>
        </div>
      </div>
      <div className="py-5 px-[20px]">
        <Item dir="col" onClose={() => onClose()} />
      </div>
      <div className="flex justify-center items-center py-10 px-[20px] mx-auto w-[80%]">
        profiles land
        {/* <Profiles w="max" dir={"row"} /> */}
      </div>
    </div>
  );
};

export default Drawer;

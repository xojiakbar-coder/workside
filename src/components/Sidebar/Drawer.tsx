import { FC } from "react";
import SidebarItems from "./Item";
import { LuX } from "react-icons/lu";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

interface DrawerPropsType {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: FC<DrawerPropsType> = ({ isOpen, onClose }) => {
  useLockBodyScroll(isOpen);

  return (
    <div
      className={`fixed top-0 w-full h-[100dvh] min-h-[100dvh] overflow-y-auto flex flex-col justify-end backdrop-blur-[7px] bg-[#09090bd7] transform transition duration-[370ms] ease-in-out z-[999] ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <aside className="h-full w-full border-t border-t-[#111111] bg-body-bg-color">
        <div className="flex justify-end w-full pt-5 pb-1 px-4">
          <button onClick={onClose}>
            <LuX className="text-[28px]" />
          </button>
        </div>
        <div className="flex flex-col h-full py-[30px]">
          <SidebarItems onClose={onClose} />
        </div>
      </aside>
    </div>
  );
};

export default Drawer;

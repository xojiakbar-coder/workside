import { FC } from "react";
import { NavLink } from "react-router-dom";
import navbar_items from "../../utils/data/navbar";

interface ItemType {
  dir: "col" | "row";
  onClose?: () => void;
}

const Item: FC<ItemType> = ({ dir = "row", onClose }) => {
  const handleClickItem = () => {
    if (onClose) onClose();
  };

  return (
    <nav
      className={`flex items-center gap-[20px] ${
        dir === "col" && "justify-center"
      }`}
    >
      <div className={`flex items-center gap-[25px] flex-${dir}`}>
        {navbar_items.map((item) => {
          const { id, title, path } = item;

          const activeClass = "text-primary-btn";
          const defaultClass =
            "text-[14px] text-item-color font-mont font-medium cursor-pointer transition-all ease-out duration-[115ms] tracking-[.5px] py-[6px] px-[9px] rounded-[4px]";

          return (
            <NavLink
              key={id}
              to={path}
              onClick={() => handleClickItem()}
              className={({ isActive }) =>
                `${defaultClass} ${isActive ? activeClass : "hover:text-light"}`
              }
            >
              {title}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Item;

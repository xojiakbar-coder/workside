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
      className={`flex items-center gap-[28px] flex-${dir} ${
        dir === "col" && "justify-center"
      }`}
    >
      {navbar_items.map((item) => {
        const { id, title, path } = item;

        const activeClass = "text-primary-color";
        const defaultClass =
          "text-[14px] text-item-color font-mont font-medium cursor-pointer transition-all ease-out duration-[115ms] tracking-[.5px] py-[6px]";

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
    </nav>
  );
};

export default Item;

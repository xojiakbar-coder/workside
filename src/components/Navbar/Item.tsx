import { FC } from "react";
import { NavLink } from "react-router-dom";
import navbar_items from "../../utils/data/navbar";

const Item: FC = () => {
  return (
    <nav className="flex items-center gap-[20px]">
      <div className="flex items-center gap-[25px]">
        {navbar_items.map((item) => {
          const { id, title, path } = item;

          const activeClass = "text-primary-btn";
          const defaultClass =
            "text-[14px] text-item-color font-mont cursor-pointer transition-all ease-out duration-[115ms] py-[6px] px-[9px] rounded-[4px] capitalize";

          return (
            <NavLink
              key={id}
              to={path}
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

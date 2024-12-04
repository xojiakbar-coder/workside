import { FC } from "react";
import navbar_items from "@/utils/navbar";

const Item: FC = () => {
  return (
    <nav className="flex items-center gap-[20px]">
      <div className="flex items-center gap-[25px]">
        {navbar_items.map((item) => {
          const { id, title } = item;
          return (
            <div
              key={id}
              className="text-[14px] hover:text-white text-[#a9a9a9] font-grotesk cursor-pointer transition-all ease-out duration-[115ms] py-[6px] px-[9px] rounded-[4px] capitalize"
            >
              {title}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Item;

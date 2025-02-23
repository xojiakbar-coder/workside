import { FC } from "react";
import { Button } from "..";
import { LuCheck } from "react-icons/lu";
import { SubscribeCardItemType } from "../../../utils/types/general";

const SubscribeCard: FC<SubscribeCardItemType> = ({
  name,
  price,
  features,
}) => {
  return (
    <div className="flex flex-col relative border border-border-color py-[24px] rounded-[16px] px-[20px] gap-[32px]">
      <div className="capitalize text-center w-full 992:text-[30px] sm:text-[24px] text-[22px]">
        {name}
      </div>
      <div className="flex items-center justify-center text-[28px] font-bold uppercase">
        {price} / Month
      </div>
      <div className="flex justify-center w-full">
        <Button
          type="primary"
          className="font-semibold yellow-btn font-jost text-light px-[10px] py-[27px] 1024:text-[18px] text-[16px] uppercase w-full"
        >
          Activate now
        </Button>
      </div>
      <div className="flex justify-start w-full">
        <ul className="flex flex-col gap-[24px] pl-[20px] w-[85%]">
          {features.map((feature) => (
            <li
              key={feature.id}
              className="flex items-center w-full gap-[16px]"
            >
              <LuCheck className="text-[#1cb97d]" />
              <p className="text-left">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubscribeCard;

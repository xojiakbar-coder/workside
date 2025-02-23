import { FC } from "react";
import * as Icons from "react-icons/ri";
import { DigitCardPropsType } from "../../../../utils/types/general";

const DigitCard: FC<DigitCardPropsType> = ({ name, icon, value }) => {
  const IconComponent = Icons[icon as keyof typeof Icons] || Icons.RiGithubFill;
  return (
    <div className="flex flex-col bg-dark-bg-color rounded-xl border border-border-color">
      <div className="flex items-center justify-evenly w-full px-[25px] py-[30px] gap-[30px]">
        <div>
          <IconComponent className="1200:text-[35px] text-primary-color text-[25px]" />
        </div>
        <div className="flex flex-col gap-[6px] overflow-hidden">
          <div className="1200:text-[26px] text-[20px] text-teal-600 overflow-hidden text-ellipsis whitespace-nowrap">
            {value + "k"}
          </div>
          <div className="font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
            {name}
          </div>
        </div>
      </div>
      <div className="w-full h-[11px] bg-primary-color rounded-b-xl"></div>
    </div>
  );
};

export default DigitCard;

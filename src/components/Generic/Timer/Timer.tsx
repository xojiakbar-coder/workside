import { FC } from "react";
import moment from "moment";

interface TimeType {
  format: string;
}

const GenericTimer: FC<TimeType> = ({ format }) => {
  return (
    <div className="flex flex-col justify-center text-light bg-dark-bg-color border-t px-[24px] gap-[10px] py-[18px] border-outer-bdr-color">
      <div className="font-jost text-[16px] w-max text-item-color font-medium uppercase">
        {moment().format(format)}
      </div>
      <div className="font-mont text-[14px] w-max text-item-color font-medium">
        {`${moment().format("ddd Do MMM")}`}
      </div>
    </div>
  );
};

export default GenericTimer;

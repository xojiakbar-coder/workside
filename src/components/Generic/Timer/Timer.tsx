import { FC } from "react";
import moment from "moment";

interface TimeType {
  format: string;
  bottom_date?: string;
  bottom_date_visible: boolean;
}

const GenericTimer: FC<TimeType> = ({
  format,
  bottom_date,
  bottom_date_visible,
}) => {
  return (
    <div className="flex flex-col justify-center text-light px-[24px] gap-[10px] py-[18px] border-outer-bdr-color h-full">
      <div className="font-mont text-[16px] w-max text-item-color font-medium uppercase">
        {moment().format(format)}
      </div>
      {bottom_date_visible && (
        <div className="font-mont text-[14px] w-max text-item-color font-medium">
          {`${moment().format(bottom_date)}`}
        </div>
      )}
    </div>
  );
};

export default GenericTimer;

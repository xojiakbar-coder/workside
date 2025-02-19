import moment from "moment";
import { FC, useEffect, useState } from "react";

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
  const [time, setTime] = useState(moment().format(format));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format(format));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [format]);

  return (
    <div className="flex flex-col justify-center text-light gap-[10px] h-full">
      <div className="font-mont text-[16px] w-max text-item-color font-medium uppercase">
        {time}
      </div>
      {bottom_date_visible && bottom_date && (
        <div className="font-mont text-[14px] w-max text-item-color font-medium">
          {moment().format(bottom_date)}
        </div>
      )}
    </div>
  );
};

export default GenericTimer;

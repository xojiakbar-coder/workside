import { FC, useEffect, useState } from "react";

interface TimeType {
  hour: string;
  minute: string;
  status: string;
}

const Time: FC = () => {
  const dateData = new Date();
  const [date, setDate] = useState<TimeType>({
    hour: "",
    minute: "",
    status: "",
  });

  const getTime = () => {
    let hour = dateData.getHours();
    let minute = dateData.getMinutes();
    const status = hour >= 12 ? "PM" : "AM";

    if (hour > 12) {
      hour %= 12;
    }
    if (hour === 0) {
      hour = 12;
    }

    const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
    const formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;

    setDate({
      hour: formattedHour,
      minute: formattedMinute,
      status,
    });
  };

  useEffect(() => {
    getTime();
    const interval = setInterval(getTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center text-light bg-dark-bg-color p-[16px] border-t border-outer-bdr-color">
      <div className="font-jost text-[16px] w-max text-item-color font-medium">
        {`${date.hour}:${date.minute} ${date.status}`}
      </div>
      <div className="font-jost text-[14px] w-max text-item-color font-medium">
        {`${
          dateData.getMonth() + 1
        }/${dateData.getDate()}/${dateData.getFullYear()}`}
      </div>
    </div>
  );
};

export default Time;

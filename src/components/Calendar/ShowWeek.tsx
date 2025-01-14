import moment from "moment";

const getCurrentWeekDates = () => {
  const startOfWeek = moment().startOf("week");
  const endOfWeek = moment().endOf("week");
  let days = [];

  for (let day = startOfWeek; day <= endOfWeek; day.add(1, "day")) {
    days.push({
      date: day.format("MM-DD-YYYY"),
      dayOfWeek: day.isoWeekday(),
      dayName: day.format("dddd"),
    });
  }

  return days;
};

const ShowWeek = () => {
  const weekDates = getCurrentWeekDates();
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 justify-between items-center gap-4">
      {weekDates.map((day) => (
        <div
          key={day.date}
          className="flex flex-col items-center relative justify-center border border-outer-bdr-color py-[12px] bg-ghost-bg-color hover:bg-outer-bdr-color transition"
        >
          <div className="text-sm text-orange-200">{day.dayName}</div>
          <div
            className={`text-md font-medium font-mont my-[20px] ${
              +moment().day() === +day.dayOfWeek && "text-primary-btn px-[8px]"
            }`}
          >{`Day ${day.dayOfWeek}`}</div>
          <div className="absolute right-[4px] bottom-0 text-gray-500 text-[14px] font-[500]">
            {day.date}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowWeek;

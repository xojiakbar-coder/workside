import moment from "moment";

const weeksData = [
  { id: 1, day_name: "Monday", day_index: 1 },
  { id: 2, day_name: "Tuesday", day_index: 2 },
  { id: 3, day_name: "Wednesday", day_index: 3 },
  { id: 4, day_name: "Thursday", day_index: 4 },
  { id: 5, day_name: "Friday", day_index: 5 },
  { id: 6, day_name: "Saturday", day_index: 6 },
  { id: 7, day_name: "Sunday", day_index: 7 },
];

const ShowWeek = () => {
  const today = moment();
  const currentDayIndex = today.isoWeekday();

  return (
    <div className="grid 1400:grid-cols-7 992:grid-cols-2 grid-cols-1 justify-between items-center gap-4">
      {weeksData.map((day, index) => {
        const currentDate = today
          .clone()
          .startOf("isoWeek")
          .add(day.day_index - 1, "days");
        const formattedDate = currentDate.format("DD.MM.YYYY");
        const isActive = day.day_index === currentDayIndex;
        const isPast = currentDate.isBefore(today, "day");

        return (
          <div
            key={index}
            className={`flex flex-col items-center relative justify-center border border-outer-bdr-color py-[12px] bg-ghost-bg-color transition 
             ${isPast ? "opacity-50 select-none" : ""}`}
          >
            <div className={`text-sm text-orange-200`}>{day.day_name}</div>
            <div
              className={`uppercase text-md font-medium font-mont my-[20px] ${
                isActive && "text-primary-color"
              } ${!isActive && isPast && "line-through"}`}
            >{`Day ${day.day_index}`}</div>
            <div className="absolute right-[4px] bottom-0 text-gray-500 text-[14px] font-[500]">
              {formattedDate}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowWeek;

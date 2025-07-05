import moment from "moment";

const getTodayHoursAndMinutes = () => {
  const today = moment().startOf("day");
  const hours = [];

  for (let hour = 0; hour < 24; hour++) {
    const minutes = Array.from({ length: 60 }, (_) => {
      return today.clone().add(hour, "hours").format("HH:mm");
    });
    hours.push({
      hour: today.clone().add(hour, "hours").format("HH:00"),
      isPast: today.clone().add(hour, "hours").isBefore(moment()),
      minutes,
    });
  }

  return hours;
};

const ShowDay = () => {
  const todayHoursAndMinutes = getTodayHoursAndMinutes();

  return (
    <div className="grid xl:grid-cols-4 grid-cols-2">
      {todayHoursAndMinutes.map((hourBlock, index) => (
        <div
          key={index}
          className={`flex items-center p-4 border border-outer-bdr-color transition h-[70px] min-h-[70px] ${
            hourBlock.isPast
              ? "bg-ghost-bg-color text-outer-bdr-color"
              : "bg-ghost-bg-color cursor-pointer text-light"
          }`}
        >
          <div className="flex items-center w-full gap-[12px] h-full">
            <div className="font-[500]">
              {!hourBlock.isPast ? hourBlock.hour : <del>{hourBlock.hour}</del>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowDay;

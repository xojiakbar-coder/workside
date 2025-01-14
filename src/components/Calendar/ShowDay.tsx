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
    <div className="grid grid-cols-4">
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
            {!hourBlock.isPast && (
              <div className="flex items-center justify-between w-full">
                <input
                  maxLength={100}
                  placeholder="your subtext"
                  className="outline-none h-full w-full p-[10px] bg-ghost-bg-color resize-none text-[14px]  placeholder:text-subtitle-color text-light"
                />
                <button className="w-max border border-outer-bdr-color py-[10px] px-[14px] rounded-md">
                  saqlash
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowDay;

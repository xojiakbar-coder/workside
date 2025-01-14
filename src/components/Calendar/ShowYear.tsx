import moment from "moment";
import { GridBox } from "../Generic";

const ShowYear = () => {
  const months = Array.from({ length: 12 }, (_, monthIndex) => {
    return moment().month(monthIndex).format("MMMM");
  });

  function getDaysOfMonth(year: number, monthIndex: number) {
    const daysInMonth = moment(
      `${year}-${monthIndex + 1}`,
      "YYYY-MM"
    ).daysInMonth();
    const days = Array.from({ length: daysInMonth }, (_, dayIndex) => {
      const date = moment(
        `${year}-${monthIndex + 1}-${dayIndex + 1}`,
        "YYYY-MM-DD"
      );
      return {
        date: date.format("YYYY-MM-DD"),
        dayName: date.format("dddd"),
      };
    });

    return days;
  }

  const today = {
    year: moment().format("YYYY"),
    month: moment().format("MMMM"),
    day: moment().format("DD"),
    dayName: moment().format("dddd"),
  };

  return (
    <GridBox cols="1fr 1fr 1fr 1fr" gap={5}>
      {months.map((monthName, monthIndex) => (
        <div key={monthIndex} className="hover:cursor-pointer">
          <div className="w-full h-full">
            <div className="flex flex-col justify-start items-start h-full bg-ghost-bg-color w-full border border-outer-bdr-color h-full">
              <div className="relative flex flex-col items-center pt-[20px] pb-[14px] px-[8px] font-mont text-[15px] w-full h-full">
                <div className="md:text-[18px] 992:text-[16px] font-[500]">
                  {monthName}
                </div>
                <div className="grid grid-cols-7 w-full justify-between mt-[24px]">
                  {getDaysOfMonth(Number(today.year), monthIndex).map(
                    (item, index) => (
                      <div
                        className="flex justify-center flex-col items-center"
                        key={item.date}
                      >
                        {index < 7 && (
                          <div className="text-orange-200 mb-[8px]">
                            {item.dayName.slice(0, 1)}
                          </div>
                        )}
                        <div
                          className={`pb-[8px] pt-[8px] px-[12px] ${
                            today.month === monthName &&
                            today.day === item.date.split("-")[2] &&
                            "bg-primary-btn rounded-md"
                          }`}
                        >
                          {+item.date.split("-")[2]}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </GridBox>
  );
};

export default ShowYear;

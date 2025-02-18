import moment from "moment";
import { useState } from "react";
import { Pagination } from "../Generic";
import { PageChangeDetails } from "../Generic/Pagination/Pagination";

const ShowYear = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const months_data = [];
  const week = Array.from({ length: 7 }, (_, i) =>
    moment()
      .day(i + 1)
      .format("dddd")
  );

  for (let i = 1; i <= 12; i++) {
    months_data.push({
      index: i,
      month_name: moment()
        .month(i - 1)
        .format("MMMM"),
      length: moment()
        .month(i - 1)
        .daysInMonth(),
    });
  }

  let monthLastDaysLength = [2, 5, 5, 1, 3, 0, 1, 4, 0, 2, 5, 0];

  function updateMonthLastDays() {
    const currentYear = moment().year();
    const lastRunYear = localStorage.getItem("lastRunYear");

    if (!lastRunYear || parseInt(lastRunYear, 10) < currentYear) {
      console.log(`Funksiya ${currentYear}-yilda ishga tushdi.`);

      let arr = [];

      for (let i in monthLastDaysLength) {
        if (+i === 11) break;
        arr.push(monthLastDaysLength[i] + 1);
      }

      monthLastDaysLength = arr;
      console.log("Yangilangan massiv:", monthLastDaysLength);

      localStorage.setItem("lastRunYear", String(currentYear));
    } else {
      console.log(`Funksiya ${currentYear}-yilda allaqachon ishga tushgan.`);
    }
  }

  updateMonthLastDays();

  const handlePageChange = (details: PageChangeDetails) => {
    setCurrentPage(details.page);
  };

  const paginatedData = months_data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="flex flex-col justify-center w-full">
      <div className="grid 1400:grid-cols-3 992:grid-cols-2 576:grid-cols-[567px] grid-cols-1 place-content-center auto-rows gap-[20px]">
        {paginatedData.map((item, index) => {
          const start = item.length - monthLastDaysLength[index] + 1;
          const days = Array.from({ length: item.length }, (_, i) => i + 1);
          const firstDays = Array.from(
            { length: monthLastDaysLength[index] },
            (_, i) => start + i
          );
          return (
            <div
              key={item.index}
              className="py-[20px] bg-ghost-bg-color rounded-md border border-outer-bdr-color"
            >
              <div className="w-full text-center font-semibold">
                {item.month_name}
              </div>
              <div className="pt-[30px] w-full">
                <div className="grid grid-cols-7 place-items-center w-full select-none">
                  {week.map((item) => {
                    return (
                      <div key={item} className="text-orange-200 mb-[16px]">
                        {item.slice(0, 2)}
                      </div>
                    );
                  })}
                  {firstDays.map((item) => {
                    return (
                      <div
                        key={item}
                        className="text-zinc-500 my-[5px] py-[5px] mx-[5px] px-[12px] hover:bg-gray-color rounded-[4px]"
                      >
                        {item}
                      </div>
                    );
                  })}
                  {days.map((day) => {
                    return (
                      <div
                        key={day}
                        className={`rounded-md my-[5px] py-[5px] mx-[5px] px-[12px] ${
                          item.index == moment().month() + 1 &&
                          day === moment().date()
                            ? "bg-primary-color"
                            : "bg-transparent hover:bg-gray-color"
                        }`}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center w-full">
        <Pagination
          defaultPage={1}
          page={currentPage}
          pageSize={pageSize}
          className="my-[38px]"
          data_length={months_data.length}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ShowYear;

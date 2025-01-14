import moment from "moment";
import { useState } from "react";
import { Pagination } from "../Generic";
import { PageChangeDetails } from "../Generic/Pagination/Pagination";

const ShowYear = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 3;

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

  const startIndex = (currentPage - 1) * pageSize;
  const selectedData = months.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (details: PageChangeDetails): void => {
    setCurrentPage(details.page);
  };

  return (
    <div className="flex flex-col justify-center w-full">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">
        {selectedData.map((monthName, monthIndex) => (
          <div key={monthIndex} className="hover:cursor-pointer">
            <div className="flex items-center justify-center h-full">
              <div className="flex flex-col justify-start items-start h-full bg-ghost-bg-color border border-outer-bdr-color h-full md:w-full sm:w-[70%] w-full">
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
                            className={`pb-[8px] pt-[8px] px-[12px] active:bg-body-bg-color active:rounded-md ${
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
      </div>
      <div className="flex justify-center w-full">
        <Pagination
          defaultPage={1}
          page={currentPage}
          pageSize={pageSize}
          className="my-[38px]"
          data_length={months.length}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ShowYear;

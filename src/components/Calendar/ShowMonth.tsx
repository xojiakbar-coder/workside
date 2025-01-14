import moment from "moment";
import { Fragment } from "react";
import { Table } from "@chakra-ui/react";

const ShowMonth = () => {
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

  const currentYear = moment().year();
  const currentMonthIndex = moment().month();
  const daysOfMonth = getDaysOfMonth(currentYear, currentMonthIndex);

  return (
    <Fragment>
      <Table.Root variant="outline" className="w-full">
        <Table.Header>
          <Table.Row className="grid grid-cols-7 justify-between w-full">
            {daysOfMonth.map(
              (item, index) =>
                index < 7 && (
                  <Table.ColumnHeader
                    key={item.date}
                    className="flex items-center justify-center h-[50px] border md:text-[16px] text-[14px] border-outer-bdr-color text-[14px] leading-[20px] font-[500] font-mont px-[10px] text-orange-200"
                  >
                    {item.dayName.slice(0, 2)}
                  </Table.ColumnHeader>
                )
            )}
          </Table.Row>
        </Table.Header>
        <Table.Body className="grid grid-cols-7 w-full">
          {daysOfMonth.map((item, dayIndex) => (
            <Table.Row key={dayIndex} className="w-full">
              <Table.Cell className="flex flex-col justify-start items-start h-full bg-ghost-bg-color w-full border border-outer-bdr-color">
                <div className="relative flex items-center p-[10px] font-mont text-[15px] w-full">
                  <div
                    className={`p-[8px] ${
                      today.day === item.date.split("-")[2] &&
                      "bg-primary-btn rounded-md"
                    }`}
                  >
                    {+item.date.split("-")[2]}
                  </div>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Fragment>
  );
};

export default ShowMonth;

import { FC } from "react";
import { Container } from "../..";
import { GenericReportsCardPropsType } from "../../../../utils/types/reports";

const GenericReportCard: FC<GenericReportsCardPropsType> = ({
  name,
  message,
  position,
  data_date,
  report_data,
}) => {
  return (
    <Container
      fluid
      className="border h-max rounded-md border-border-color relative"
    >
      <div className="flex 992:flex-row-reverse flex-col-reverse gap-[30px] items-center h-full md:px-[20px] px-[12px] py-[10px]">
        <Container
          fluid
          className="grid 992:grid-cols-[auto_auto] grid-cols-2 992:justify-end justify-start items-end gap-[20px] w-full h-full"
        >
          {report_data.map((item) => {
            return (
              <div key={item.value} className="flex py-[20px] justify-center px-[16px] items-center border-2 border-border-color w-full gap-[8px] rounded-lg bg-transparent">
                <div className="text-teal-600 font-bold">{item.value}</div>
                <div>-</div>
                <div className="whitespace-nowrap text-ellipsis overflow-hidden">
                  {item.name}
                </div>
              </div>
            );
          })}
        </Container>
        <div className="flex justify-start flex-col w-full overflow-hidden h-full">
          <div className="flex flex-col pt-[15px] md:gap-[10px] gap-[7px] h-full">
            <div className="md:text-[18px] text-[16px] font-mont font-semibold capitalize">
              {name}
            </div>
            <div className="text-[14px] text-light py-[1px] px-[3px] w-max rounded-[3px] bg-yellow-950 text-balance text-ellipsis w-full h-max font-jost">
              {position}
            </div>
            <div className="w-full h-max">
              <p className="text-subtitle-color">{message}</p>
            </div>
          </div>
          <div className="mt-[20px] text-[14px] text-subtitle-color w-full">
            {data_date}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GenericReportCard;

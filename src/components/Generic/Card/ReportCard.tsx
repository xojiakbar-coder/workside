import { FC } from "react";
import { Container } from "..";
import CustomPieChart, { ChartDataItemType } from "../PieChart/PieChart";

interface GenericReportsCardPropsType {
  name: string;
  message: string;
  position: string;
  data_date: string;
  chart_data: ChartDataItemType[];
}

const GenericReportCard: FC<GenericReportsCardPropsType> = ({
  name,
  message,
  position,
  data_date,
  chart_data,
}) => {
  return (
    <Container
      fluid
      className="border 992:h-[270px] h-full rounded-md border-border-color"
    >
      <div className="flex 992:flex-row flex-col gap-[20px] 992:h-[270px] items-center h-full md:px-[20px] px-[12px] py-[10px] relative">
        <div className="flex justify-start flex-col w-full overflow-hidden h-full ">
          <div className="flex flex-col pt-[15px] md:gap-[10px] gap-[7px] h-full">
            <div className="md:text-[18px] text-[16px] font-mont font-semibold capitalize">
              {name}
            </div>
            <div className="text-[14px] text-light text-balance text-ellipsis w-full h-max">
              {position}
            </div>
            <div className="w-full h-max">
              <p className="text-balance text-subtitle-color">{message}</p>
            </div>
          </div>
          <div className="mt-auto text-[14px] text-subtitle-color w-full">
            {data_date}
          </div>
        </div>
        <Container
          fluid
          className="flex justify-center 992:items-end items-center min-w-[200px] h-full"
        >
          <div className="flex justify-center items-center w-[300px] h-full 992:h-[300px] 992:text-[18px] text-[14px]">
            <CustomPieChart data={chart_data} />
          </div>
        </Container>
      </div>
    </Container>
  );
};

export default GenericReportCard;

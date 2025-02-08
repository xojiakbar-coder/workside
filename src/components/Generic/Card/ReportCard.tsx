import { FC } from "react";
import { Container } from "..";
import CustomPieChart from "../PieChart/PieChart";

interface GenericReportsCardPropsType {
  title: string;
  subtitle: string;
  data_date: string;
  chart_type: string;
  data_about?: string;
}

const GenericReportCard: FC<GenericReportsCardPropsType> = ({
  title,
  subtitle,
  // chart_type,
  data_about,
  data_date,
}) => {
  return (
    <Container
      fluid
      className="border 992:h-[270px] h-max rounded-md border-outer-bdr-color"
    >
      <div className="flex 992:flex-row flex-col gap-[20px] 992:h-[240px] h-max md:px-[20px] px-[12px] py-[10px] relative">
        <div className="flex justify-between w-full h-[90%] overflow-hidden h-full">
          <div className="flex flex-col pt-[5px] md:gap-[10px] gap-[7px] h-full">
            <div className="md:text-[18px] text-[16px] font-mont font-semibold capitalize">
              {title}
            </div>
            <div className="text-[14px] text-light text-balance text-ellipsis w-full h-full">
              {subtitle}
            </div>
            <div className="w-full h-full overflow-hidden text-ellipsis hyphens-auto">
              <p className="line-clamp-4 text-subtitle-color">{data_about}</p>
            </div>
          </div>
        </div>
        <Container
          fluid
          className="flex justify-center 992:items-end items-center min-w-[200px] h-full"
        >
          <div className="flex justify-center items-center w-[300px] h-full 992:h-[300px] 992:text-[18px] text-[14px]">
            <CustomPieChart />
          </div>
        </Container>
      </div>
      <div className="text-[14px] left-[10px] text-subtitle-color w-full pb-[12px] 992:pl-[20px] pl-[12px]">
        {data_date}
      </div>
    </Container>
  );
};

export default GenericReportCard;

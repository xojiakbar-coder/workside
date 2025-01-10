import { FC } from "react";
import { Container, GridBox } from "..";
import useSize from "../../../hooks/useSize";

interface GenericReportsCardPropsType {
  title: string;
  subtitle: string;
  data_date: string;
  chart_type: string;
  data_about: string;
}

const GenericReportCard: FC<GenericReportsCardPropsType> = ({
  title,
  subtitle,
  chart_type,
  data_about,
  data_date,
}) => {
  const { width } = useSize();

  const cols =
    width >= 1140
      ? "70% 30%"
      : width <= 1140
      ? "60% 40%"
      : width <= 768
      ? "100%"
      : "1fr";

  return (
    <Container
      fluid
      className="border h-[230px] rounded-md border-outer-bdr-color"
    >
      <GridBox
        cols={cols}
        className="h-full md:px-[20px] px-[12px] py-[10px] relative"
      >
        <div className="flex justify-between w-full h-[90%] overflow-hidden">
          <div className="flex flex-col pt-[5px] md:gap-[10px] gap-[7px]">
            <div className="md:text-[18px] text-[16px] font-mont font-semibold">
              {title}
            </div>
            <div className="text-[14px] text-light">{subtitle}</div>
            <div className="w-full h-full overflow-hidden text-ellipsis hyphens-auto">
              <p className="line-clamp-4 text-subtitle-color">{data_about}</p>
            </div>
          </div>
        </div>
        <div className="absolute text-[14px] bottom-[6px] left-[10px] z-[88] text-subtitle-color">
          {data_date}
        </div>
        <Container
          fluid
          className="flex justify-center items-end min-w-[200px]"
        >
          <div className="flex justify-center items-center w-[170px] h-[170px] border border-ghost-bg-color rounded-full uppercase">
            {chart_type}
          </div>
        </Container>
      </GridBox>
    </Container>
  );
};

export default GenericReportCard;

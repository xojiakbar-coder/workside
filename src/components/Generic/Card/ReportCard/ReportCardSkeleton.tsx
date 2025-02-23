import { Skeleton } from "../../../ui/skeleton";

const GenericReportCard = () => {
  return (
    <div className="border h-max rounded-md border-border-color relative">
      <div className="flex 992:flex-row-reverse flex-col-reverse gap-[30px] items-center h-full md:px-[20px] px-[12px] py-[10px]">
        <div className="grid 992:grid-cols-[auto_auto] grid-cols-2 992:justify-end justify-start items-end gap-[20px] w-full h-full">
          <div className="flex py-[20px] justify-center px-[16px] items-center border-2 border-border-color w-full gap-[8px] rounded-lg bg-transparent">
            <Skeleton className="w-[25px] h-[25px]"></Skeleton>
            <Skeleton className="w-[105px] h-[20px]"></Skeleton>
          </div>
          <div className="flex py-[20px] justify-center px-[16px] items-center border-2 border-border-color w-full gap-[8px] rounded-lg bg-transparent">
            <Skeleton className="w-[25px] h-[25px]"></Skeleton>
            <Skeleton className="w-[105px] h-[20px]"></Skeleton>
          </div>
          <div className="flex py-[20px] justify-center px-[16px] items-center border-2 border-border-color w-full gap-[8px] rounded-lg bg-transparent">
            <Skeleton className="w-[25px] h-[25px]"></Skeleton>
            <Skeleton className="w-[105px] h-[20px]"></Skeleton>
          </div>
          <div className="flex py-[20px] justify-center px-[16px] items-center border-2 border-border-color w-full gap-[8px] rounded-lg bg-transparent">
            <Skeleton className="w-[25px] h-[25px]"></Skeleton>
            <Skeleton className="w-[105px] h-[20px]"></Skeleton>
          </div>
        </div>
        <div className="flex justify-start flex-col w-full overflow-hidden h-full">
          <div className="flex flex-col pt-[15px] md:gap-[10px] gap-[7px] h-full">
            <Skeleton className="w-[110px] h-[30px]"></Skeleton>
            <Skeleton className="w-[70px] h-[20px] bg-yellow-950"></Skeleton>
            <Skeleton className="w-[400px] h-[50px]"></Skeleton>
            <Skeleton className="w-[85px] h-[20px] mt-[10px]"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericReportCard;

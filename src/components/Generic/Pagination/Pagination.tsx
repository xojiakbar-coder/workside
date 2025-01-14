import { FC } from "react";
import { HStack } from "@chakra-ui/react";
import {
  PaginationRoot,
  PaginationItems,
  PaginationPrevTrigger,
  PaginationNextTrigger,
} from "../../ui/pagination";

export interface PageChangeDetails {
  page: number;
}

interface GenericPaginationPropsType {
  page: number;
  pageSize: number;
  className?: string;
  data_length: number;
  defaultPage?: number;
  handlePageChange: (details: PageChangeDetails) => void;
}

const GenericPagination: FC<GenericPaginationPropsType> = ({
  page,
  pageSize,
  defaultPage,
  data_length,
  handlePageChange,
}) => {
  return (
    <PaginationRoot
      page={page}
      pageSize={pageSize}
      defaultPage={defaultPage}
      onPageChange={handlePageChange}
      count={Math.ceil(data_length / 1)}
      className="flex justify-center items-center my-[38px] 992:text-[16px] text-[14px]"
    >
      <HStack className="flex gap-[2px] w-full" gap={"0.6"}>
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </PaginationRoot>
  );
};

export default GenericPagination;

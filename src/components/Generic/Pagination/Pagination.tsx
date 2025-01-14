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
      className="my-[38px]"
      defaultPage={defaultPage}
      onPageChange={handlePageChange}
      count={Math.ceil(data_length / 1)}
    >
      <HStack>
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </PaginationRoot>
  );
};

export default GenericPagination;

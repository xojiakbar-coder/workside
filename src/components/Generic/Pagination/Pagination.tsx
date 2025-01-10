import { FC } from "react";
import { HStack } from "@chakra-ui/react";
import {
  PaginationRoot,
  PaginationItems,
  PaginationPrevTrigger,
  PaginationNextTrigger,
} from "../../ui/pagination";

interface GenericPaginationPropsType {
  count: number;
  pageSize: number;
  className?: string;
  // currentPage: number;
  defaultPage?: number;
}

const GenericPagination: FC<GenericPaginationPropsType> = ({
  count,
  pageSize,
  defaultPage,
  // currentPage,
}) => {
  return (
    <PaginationRoot
      // page={currentPage}
      count={count || 20}
      className="my-[38px]"
      pageSize={pageSize || 2}
      defaultPage={defaultPage || 1}
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

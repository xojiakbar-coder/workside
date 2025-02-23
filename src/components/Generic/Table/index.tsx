import { FC } from "react";
import TableBody from "./TableBody";
import { Table } from "@chakra-ui/react";
import { TablePropsType } from "../../../utils/types/table";

const GenericTable: FC<TablePropsType> = ({ table_head, table_body }) => {
  return (
    <Table.Root variant="outline" className="rounded-xl">
      <Table.Header className="w-full">
        <Table.Row className="w-full h-[68px]">
          <Table.ColumnHeader className="text-[14px] leading-[20px] font-[500] font-mont 992:px-[32px] px-[14px] 992:py-[17px] py-[14px]">
            ID
          </Table.ColumnHeader>
          {table_head.length > 0 &&
            table_head.map((item) => {
              return (
                <Table.ColumnHeader
                  key={item.id}
                  className="text-[14px] leading-[20px] font-[500] font-mont 992:px-[32px] px-[14px] 992:py-[17px] py-[14px] 768:text-[16px]"
                >
                  {item.title}
                </Table.ColumnHeader>
              );
            })}
        </Table.Row>
      </Table.Header>
      <TableBody table_body={table_body} />
    </Table.Root>
  );
};

export default GenericTable;

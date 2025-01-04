import { FC } from "react";
import { Table } from "@chakra-ui/react";
import { TablePropsType } from "../../../utils/types/table";

const GenericTable: FC<TablePropsType> = ({ table_head, table_body }) => {
  const rows = table_body.map((item, index) => (
    <Table.Row
      key={item.name}
      className={`px-[20px] py-[12px] ${
        table_body[table_body.length - 1].id !== item.id && "border-b"
      } border-b-ghost-bg-color w-full`}
    >
      <Table.Cell className="md:px-[32px] px-[14px] md:py-[17px] py-[14px] lg:text-[16px] md:text-[14px] sm:text-[10px] text-[8px]">
        {index + 1}
      </Table.Cell>
      <Table.Cell className="md:px-[32px] px-[14px] md:py-[17px] py-[14px] lg:text-[16px] md:text-[14px] sm:text-[10px] text-[8px]">
        {item.name}
      </Table.Cell>
      <Table.Cell className="md:px-[32px] px-[14px] md:py-[17px] py-[14px] lg:text-[16px] md:text-[14px] sm:text-[10px] text-[8px]">
        {item.email}
      </Table.Cell>
      <Table.Cell className="md:px-[32px] px-[14px] md:py-[17px] py-[14px] lg:text-[16px] md:text-[14px] sm:text-[10px] text-[8px]">
        {item.phone}
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <Table.Root variant="outline" className="rounded-md w-full mb-[60px]">
      <Table.Header className="w-full">
        <Table.Row className="w-full h-[68px] border-red-700">
          <Table.ColumnHeader className="text-[14px] leading-[20px] font-[500] font-mont md:px-[32px] px-[14px] md:py-[17px] py-[14px]">
            ID
          </Table.ColumnHeader>
          {table_head.length > 0 &&
            table_head.map((item) => {
              return (
                <Table.ColumnHeader
                  key={item.id}
                  className="text-[14px] leading-[20px] font-[500] font-mont md:px-[32px] px-[14px] md:py-[17px] py-[14px]"
                >
                  {item.title}
                </Table.ColumnHeader>
              );
            })}
        </Table.Row>
      </Table.Header>
      <Table.Body>{rows}</Table.Body>
    </Table.Root>
  );
};

export default GenericTable;

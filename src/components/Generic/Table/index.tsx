import { FC } from "react";
import { Table } from "@chakra-ui/react";
import { TablePropsType } from "../../../utils/types/table";

const GenericTable: FC<TablePropsType> = ({ table_head, table_body }) => {
  const rows = table_body.map((item, index) => (
    <Table.Row
      key={item.id}
      className={`px-[20px] py-[12px] border-y border-y-border-color w-full`}
    >
      <Table.Cell className="md:px-[32px] px-[14px] 992:py-[17px] py-[14px] 576:text-[16px]">
        {index + 1}
      </Table.Cell>
      <Table.Cell className="md:px-[32px] px-[14px] 992:py-[17px] py-[14px] 576:text-[16px]">
        {item.name}
      </Table.Cell>
      <Table.Cell className="md:px-[32px] px-[14px] 992:py-[17px] py-[14px] 576:text-[16px]">
        {item.position}
      </Table.Cell>
      <Table.Cell className="md:px-[32px] px-[14px] 992:py-[17px] py-[14px] 576:text-[16px]">
        {item.work_schedule}
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <Table.Root variant="line" className="">
      <Table.Header className="w-full">
        <Table.Row className="w-full h-[68px] bg-ghost-bg-color">
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

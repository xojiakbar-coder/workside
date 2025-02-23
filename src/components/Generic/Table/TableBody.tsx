import { FC } from "react";
import { Table } from "@chakra-ui/react";
import { TableBodyPropsType } from "../../../utils/types/table";

const TableBody: FC<TableBodyPropsType> = ({ table_body }) => {
  return (
    <Table.Body>
      {table_body.map((item, index) => (
        <Table.Row
          key={item.id}
          className={`px-[20px] py-[12px] border-t border-y-outer-bdr-color w-full`}
        >
          <Table.Cell className="md:px-[32px] px-[14px] 992:py-[17px] py-[14px] 768:text-[16px] text-[14px]">
            {index + 1}
          </Table.Cell>
          <Table.Cell className="md:px-[32px] px-[14px] 992:py-[17px] py-[14px] 768:text-[16px] text-[14px]">
            {item.name}
          </Table.Cell>
          <Table.Cell className="md:px-[32px] px-[14px] 992:py-[17px] py-[14px] 768:text-[16px] text-[14px]">
            {item.position}
          </Table.Cell>
          <Table.Cell className="md:px-[32px] px-[14px] 992:py-[17px] py-[14px] 768:text-[16px] text-[14px]">
            {item.work_schedule}
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
};

export default TableBody;

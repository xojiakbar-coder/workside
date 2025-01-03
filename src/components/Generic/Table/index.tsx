import { Button } from "..";
import { FC, useContext } from "react";
import { Table } from "@chakra-ui/react";
import { Checkbox } from "../../ui/checkbox";
import { TableBodyType, TableHeadType } from "../../../utils/types/table";
// import {
//   ActionBarRoot,
//   ActionBarContent,
//   ActionBarSeparator,
//   ActionBarSelectionTrigger,
// } from "../../ui/action-bar";
import { TableContext } from "../../../context/TableContext/TableContext";

interface TablePropsType {
  table_head: TableHeadType[];
  table_body: TableBodyType[];
}

const GenericTable: FC<TablePropsType> = ({ table_head, table_body }) => {
  const { dispatch } = useContext(TableContext);
  // const [selection, setSelection] = useState<string[]>([]);

  // const hasSelection = selection.length > 0;
  // const indeterminate = hasSelection && selection.length < table_body.length;

  const rows = table_body.map((item, index) => (
    <Table.Row
      key={item.name}
      className={`px-[20px] ${
        table_body[table_body.length - 1].id !== item.id && "border-b"
      } border-b-ghost-bg-color w-full`}
      // data-selected={
      //   selection.indexOf(item.name?.toString()) !== -1 ? "" : undefined
      // }
    >
      <Table.Cell className="pl-[40px] py-[10px]">
        <Checkbox
          top="1"
          className="border border-subtitle-color rounded-[6px]"
          // checked={selection.indexOf(item.name) !== -1}
          // onCheckedChange={(changes) => {
          //   setSelection((prev) =>
          //     changes.checked
          //       ? [...prev, item.name]
          //       : selection.filter((name) => name !== item.name)
          //   );
          // }}
        />
      </Table.Cell>
      <Table.Cell className="px-[12px]">{index + 1}</Table.Cell>
      <Table.Cell className="px-[12px]">{item.name}</Table.Cell>
      <Table.Cell className="px-[12px]">{item.email}</Table.Cell>
      <Table.Cell className="px-[12px]">{item.phone}</Table.Cell>
      <Table.Cell className="flex justify-end px-[20px] py-[10px]">
        <Button type="danger">o'chirish</Button>
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <>
      <Table.Root variant="outline" className="rounded-md w-full">
        <Table.Header className="w-full">
          <Table.Row className="w-full h-[90px] border-red-700">
            <Table.ColumnHeader className="pl-[40px]">
              <Checkbox
                top="1"
                className="border border-subtitle-color rounded-[6px]"
                // checked={indeterminate ? "indeterminate" : selection.length > 0}
                // onCheckedChange={(changes) => {
                //   setSelection(
                //     changes.checked ? table_body.map((item) => item.name) : []
                //   );
                // }}
              />
            </Table.ColumnHeader>
            <Table.ColumnHeader className="text-[14px] leading-[20px] font-[500] font-mont px-[12px]">
              {table_body?.length?.toString()}
            </Table.ColumnHeader>
            {table_head.length > 0 &&
              table_head.map((item) => {
                return (
                  <Table.ColumnHeader
                    key={item.id}
                    className="text-[14px] leading-[20px] font-[500] font-mont px-[12px]"
                  >
                    {item.title}
                  </Table.ColumnHeader>
                );
              })}
            <Table.ColumnHeader className="flex justify-end w-full items-center relative px-[20px] h-[90px]">
              {/* <Text
                className={`absolute text-[14px] leading-[20px] font-[500] font-mont
                  ${
                    selection.length !== table_body.length
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }
                      `}
              >
                Xodimni o'chirish
              </Text> */}
              <Button
                type="danger"
                onClick={() =>
                  dispatch({ type: "delete", items: rows, payload: 1 })
                }
                // className={`${
                //   selection.length === table_body.length
                //     ? "opacity-100"
                //     : "opacity-0 pointer-events-none"
                // }`}
              >
                Hammasini o'chirish
              </Button>
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
      </Table.Root>

      {/* <ActionBarRoot open={hasSelection}>
        <ActionBarContent>
          <ActionBarSelectionTrigger>
            {selection.length} selected
          </ActionBarSelectionTrigger>
          <ActionBarSeparator />
          <Button type="ghost">Delete</Button>
          <Button type="ghost">Share</Button>
        </ActionBarContent>
      </ActionBarRoot> */}
    </>
  );
};

export default GenericTable;

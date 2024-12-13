import { TableType } from "./table";
import { FC, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";

const GenericTable: FC<TableType> = ({
  checking,
  table_body,
  table_head,
  deleteAction,
}) => {
  const [selection, setSelection] = useState<number[]>([]);
  const hasSelection = selection.length > 0;
  const indeterminate = hasSelection && selection.length < table_body.length;

  // const onDeleteItem = () => {};

  return (
    <table className="w-full rounded-lg border-separate border-spacing-0 border border-ghost-bg-color">
      <thead className="h-[100px] font-mont w-full px-[10px]">
        <tr>
          {checking && (
            <th className="px-5 py-2 border-b border-ghost-bg-color">
              <Checkbox
                size="lg"
                variant="solid"
                aria-label="Tanlash"
                checked={
                  indeterminate
                    ? "indeterminate"
                    : selection.length === table_body.length
                }
                onCheckedChange={(changes) => {
                  setSelection(
                    changes.checked ? table_body.map((item) => item.id) : []
                  );
                }}
                className="border border-gray-color bg-body-bg-color"
              />
            </th>
          )}
          {table_head.map((item) => (
            <th
              key={item.id}
              className={`px-5 py-2 text-center border-b border-ghost-bg-color capitalize`}
            >
              {item.title}
            </th>
          ))}
          {deleteAction && (
            <th className="border-b border-ghost-bg-color text-right px-5 py-2">
              Xodimni o'chirish
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {table_body.map((item, index) => {
          const lastIndex = table_body.length - 1;
          return (
            <tr key={item.id} className="rounded-lg">
              {checking && (
                <td
                  className={`border-r border-ghost-bg-color px-3 py-3 text-center ${
                    index !== lastIndex && "border-b"
                  }`}
                >
                  <Checkbox
                    size="lg"
                    variant="solid"
                    aria-label="Select row"
                    checked={selection.indexOf(item.id) !== -1}
                    onCheckedChange={(changes) => {
                      setSelection((prev) =>
                        changes.checked
                          ? [...prev, item.id]
                          : prev.filter((selectedId) => selectedId !== item.id)
                      );
                    }}
                    className="border border-gray-color"
                  />
                </td>
              )}
              <td
                className={`border-r font-mont capitalize border-ghost-bg-color pl-5 pr-3 py-3 ${
                  index !== lastIndex && "border-b"
                }`}
              >
                {item.name}
              </td>
              <td
                className={`border-r font-mont capitalize border-ghost-bg-color pl-5 pr-3 py-3 ${
                  index !== lastIndex && "border-b"
                }`}
              >
                {item.job || "-"}
              </td>
              <td
                className={`border-r border-ghost-bg-color font-mont pl-5 pr-3 py-3 text-[#16a34a] ${
                  index !== lastIndex && "border-b"
                }`}
              >
                {"$" + (item.salary || "-")}
              </td>
              {deleteAction && (
                <td
                  className={`flex justify-end border-ghost-bg-color pl-5 pr-3 py-3 text-right ${
                    index !== lastIndex && "border-b"
                  }`}
                >
                  <Button className="border-2 text-danger font-mont border-danger rounded-xl hover:bg-ghost-bg-color px-[14px] py-[24px] lowercase font-[500]">
                    o'chirish
                  </Button>
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GenericTable;

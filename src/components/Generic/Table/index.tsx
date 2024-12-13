import { FC } from "react";
import { TableType } from "./table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@chakra-ui/react";

const GenericTable: FC<TableType> = ({ table_head, table_body }) => {
  return (
    <table className="w-full rounded-lg border-separate border-spacing-0 border border-ghost-bg-color">
      {/* table head */}
      <thead className="h-[100px] w-full px-[10px]">
        <tr>
          {table_head.map((item) => (
            <th
              key={item.id}
              className={`${
                item.element === "delete"
                  ? "text-right px-4 py-2"
                  : "text-center"
              } border-b border-ghost-bg-color capitalize`}
            >
              {item.element === "checkbox" ? (
                <Checkbox
                  size="lg"
                  variant="solid"
                  className="border border-gray-color bg-body-bg-color"
                />
              ) : (
                item.title
              )}
            </th>
          ))}
        </tr>
      </thead>

      {/* table body */}
      <tbody>
        {table_body.map((item, index) => {
          const lastIndex = table_body.length - 1;
          return (
            <tr key={item.id} className="rounded-lg">
              {item.checkbox && (
                <td
                  className={`border-r border-ghost-bg-color px-3 py-3 text-center ${
                    index !== lastIndex && "border-b"
                  }`}
                >
                  <Checkbox
                    size="lg"
                    variant="solid"
                    className="border border-gray-color"
                  />
                </td>
              )}
              <td
                className={`border-r capitalize border-ghost-bg-color pl-5 pr-3 py-3 ${
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
              <td
                className={`flex justify-end border-ghost-bg-color pl-5 pr-3 py-3 text-right ${
                  index !== lastIndex && "border-b"
                }`}
              >
                <Button className="border-2 text-danger font-mont border-danger rounded-xl hover:bg-ghost-bg-color px-[14px] py-[24px] lowercase font-[500]">
                  o'chirish
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GenericTable;

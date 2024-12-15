import { Button } from "..";
import Tbody from "./Tbody";
import { TableType } from "./table";
import { Text } from "@chakra-ui/react";
import { Checkbox } from "../../ui/checkbox";
import { FC, useContext, useEffect, useState } from "react";
import { StaffListDataTable } from "../../../context/StaffListDataTable";

const GenericTable: FC<TableType> = ({
  checking,
  table_body,
  table_head,
  deleteAction,
}) => {
  const { setItems } = useContext(StaffListDataTable);
  const [tableItems, setTableItems] = useState(table_body);
  const [selection, setSelection] = useState<number[]>([]);
  const hasSelection = selection.length > 0;
  const indeterminate = hasSelection && selection.length < table_body.length;

  useEffect(() => {
    setTableItems(table_body);
  }, [table_body]);

  const handleHeaderCheckboxChange = (changes: { checked: boolean }) => {
    setSelection(changes.checked ? table_body.map((item) => item.id) : []);
  };

  return (
    <div className="h-max">
      <table className="w-full rounded-lg border-separate border-spacing-0 border border-gray-700">
        <thead className="h-[100px] font-mont w-full px-[10px]">
          <tr>
            {checking && (
              <th className="px-5 py-2 border-b border-gray-700">
                <Checkbox
                  size="lg"
                  variant="solid"
                  aria-label="Tanlash"
                  checked={
                    indeterminate
                      ? "indeterminate"
                      : selection.length === table_body.length
                  }
                  onCheckedChange={handleHeaderCheckboxChange}
                  className={`border-2 ${
                    !hasSelection ? "border-subtitle-color" : "border-light"
                  } rounded-md bg-body-bg-color`}
                />
              </th>
            )}
            <th className="px-5 py-2 text-center font-grotesk border-b border-gray-700 capitalize">
              &#8470;
            </th>
            {table_head.map((item) => (
              <th
                key={item.id}
                className="px-5 py-2 text-center font-mont border-b border-gray-700 capitalize font-semibold"
              >
                {item.title}
              </th>
            ))}
            {deleteAction && (
              <th className="border-b border-gray-700 text-right px-3 py-2 font-mont font-semibold">
                <div className="flex w-full justify-end items-center gap-[20px] relative">
                  {!hasSelection && (
                    <Text className="absolute">Xodimni o'chirish</Text>
                  )}
                  <Button
                    onClick={() => setItems([])}
                    className={`w-max capitalize transition-all ease-in-out-expo duration-[170ms] ${
                      hasSelection
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                    type="danger"
                  >
                    Hammasini o'chirish
                  </Button>
                </div>
              </th>
            )}
          </tr>
        </thead>
        <Tbody
          table_body={tableItems}
          checking={checking}
          deleteAction={deleteAction || false}
          selection={selection}
          setSelection={setSelection}
        />
      </table>
    </div>
  );
};

export default GenericTable;

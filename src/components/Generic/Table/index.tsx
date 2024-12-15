import Tbody from "./Tbody";
import { Button } from "..";
import { Text } from "@chakra-ui/react";
import { Checkbox } from "../../ui/checkbox";
import { TableType } from "../../../utils/types/table";
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
      <table className="w-full rounded-lg border-separate border-spacing-0 border border-b-2 border-l-2 border-r-2 border-ghost-bg-color">
        <thead className="h-[100px] font-mont w-full px-[10px]">
          <tr>
            {checking && (
              <th className="px-5 py-2 border-b border-ghost-bg-color rounded-tl-md bg-ghost-bg-color">
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
                  className={`border ${
                    !hasSelection ? "border-subtitle-color" : "border-light"
                  } rounded-md bg-body-bg-color`}
                />
              </th>
            )}
            <th className="px-5 py-2 text-center font-grotesk border-b border-ghost-bg-color capitalize bg-ghost-bg-color">
              {tableItems?.length || <p>&#8470;</p>}
            </th>
            {table_head.map((item) => (
              <th
                key={item.id}
                className="px-5 py-2 text-center font-mont border-b border-ghost-bg-color capitalize font-semibold bg-ghost-bg-color"
              >
                {item.title}
              </th>
            ))}
            {deleteAction && (
              <th className="border-b border-ghost-bg-color text-right px-3 py-2 font-mont font-semibold rounded-tr-md bg-ghost-bg-color">
                <div className="flex w-full justify-end items-center gap-[20px] relative">
                  <Text
                    className={`absolute
                  ${
                    selection.length !== table_body.length
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }
                      `}
                  >
                    Xodimni o'chirish
                  </Text>
                  <Button
                    type="danger"
                    onClick={() => setItems([])}
                    className={`hover:bg-black-color ease-in-out-expo ${
                      selection.length === table_body.length
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    Hammasini o'chirish
                  </Button>
                </div>
              </th>
            )}
          </tr>
        </thead>
        <Tbody
          checking={checking}
          selection={selection}
          table_body={tableItems}
          setSelection={setSelection}
          deleteAction={deleteAction || false}
        />
      </table>
    </div>
  );
};

export default GenericTable;

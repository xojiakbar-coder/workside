import Dialog from "../Dialog";
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
  const [items, setItems] = useState(table_body);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selection, setSelection] = useState<number[]>([]);
  const hasSelection = selection.length > 0;
  const indeterminate = hasSelection && selection.length < table_body.length;

  const onDeleteItem = (id: number) => {
    if (selection.indexOf(id) !== -1) {
      setIsDialogOpen(true);
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      setSelection((prevSelection) =>
        prevSelection.filter((selectedId) => selectedId !== id)
      );
    } else {
      alert("Iltimos, checkboxni tanlang va qayta urinib ko'ring.");
    }
  };

  return (
    <div className="h-full">
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
            <th className="px-5 py-2 text-center font-grotesk border-b border-ghost-bg-color capitalize">
              &#8470;
            </th>
            {table_head.map((item) => (
              <th
                key={item.id}
                className="px-5 py-2 text-center font-jet border-b border-ghost-bg-color capitalize"
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
          {items.map((item, index) => {
            const { id, name, job, salary } = item;
            const lastIndex = items.length - 1;
            return (
              <tr key={id} className="rounded-lg">
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
                      checked={selection.indexOf(id) !== -1}
                      onCheckedChange={(changes) => {
                        setSelection((prev) =>
                          changes.checked
                            ? [...prev, id]
                            : prev.filter((selectedId) => selectedId !== id)
                        );
                      }}
                      className="border border-gray-color"
                    />
                  </td>
                )}
                <td
                  className={`border-r text-center font-jet capitalize border-ghost-bg-color pl-5 pr-3 py-3 ${
                    index !== lastIndex && "border-b"
                  }`}
                >
                  {index + 1 || "——"}
                </td>
                <td
                  className={`border-r font-jet capitalize border-ghost-bg-color pl-5 pr-3 py-3 ${
                    index !== lastIndex && "border-b"
                  }`}
                >
                  {name || "——"}
                </td>
                <td
                  className={`border-r font-mont capitalize border-ghost-bg-color pl-5 pr-3 font-jet py-3 ${
                    index !== lastIndex && "border-b"
                  }`}
                >
                  {job || "——"}
                </td>
                <td
                  className={`border-r border-ghost-bg-color font-jet font-mont pl-5 pr-3 py-3 text-[#16a34a] ${
                    index !== lastIndex && "border-b"
                  }`}
                >
                  {"$" + salary || "——"}
                </td>
                {deleteAction && (
                  <td
                    className={`flex justify-end border-ghost-bg-color pl-5 pr-3 py-3 text-right ${
                      index !== lastIndex && "border-b"
                    }`}
                  >
                    <Button
                      className="border-2 text-danger font-mont border-danger rounded-xl hover:bg-ghost-bg-color px-[14px] py-[24px] lowercase font-[600]"
                      onClick={() => onDeleteItem(id)}
                    >
                      o'chirish
                    </Button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Dialog
        makeSureValue="on"
        confirmText="O'chirish"
        onConfirm={() => onDeleteItem}
        title="Xodimni o'chirish"
        cancelText="bekor qilish"
        isOpenDialog={isDialogOpen}
        description={`Rostdan ham o'chirmoqchimisiz?`}
        isCloseDialog={(details) => setIsDialogOpen(details.open)}
      />
    </div>
  );
};

export default GenericTable;

import { Button } from "..";
import Dialog from "../Dialog";
import { Checkbox } from "../../ui/checkbox";
import { FC, Fragment, useContext, useState, memo } from "react";
import { StaffListDataTable } from "../../../context/StaffListDataTable";
import { TbodyProps } from "../../../utils/types/table";

const Tbody: FC<TbodyProps> = ({
  checking,
  table_body,
  deleteAction,
  selection,
  setSelection,
}) => {
  const { setItems } = useContext(StaffListDataTable);
  const [tableItems, setTableItems] = useState(table_body);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onDeleteItem = (id: number) => {
    if (selection.indexOf(id) !== -1) {
      const updatedItems = tableItems.filter((item) => item.id !== id);
      setTableItems(updatedItems);
      setItems(updatedItems);
      setSelection((prevSelection) =>
        prevSelection.filter((selectedId) => selectedId !== id)
      );
    } else {
      setIsDialogOpen(true);
    }
  };

  const handleCheckboxChange = (checked: boolean, id: number) => {
    setSelection((prev) =>
      checked ? [...prev, id] : prev.filter((selectedId) => selectedId !== id)
    );
  };

  return (
    <Fragment>
      <tbody>
        {tableItems.map((item, index) => {
          const { id, username, name, email, phone, job, salary } = item;
          const lastIndex = tableItems.length - 1;
          const isChecked = selection.indexOf(id) !== -1;

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
                    checked={isChecked}
                    onCheckedChange={(changes) =>
                      handleCheckboxChange(!!changes.checked, id)
                    }
                    className={`border ${
                      isChecked ? "border-light" : "border-subtitle-color"
                    } rounded-md`}
                  />
                </td>
              )}
              <td
                className={`border-r text-center font-jet text-[14px] capitalize border-ghost-bg-color pl-5 pr-3 py-3 ${
                  index !== lastIndex && "border-b"
                }`}
              >
                {index + 1 || "—"}
              </td>
              <td
                className={`border-r font-jet text-[14px] capitalize border-ghost-bg-color pl-5 pr-3 py-3 ${
                  index !== lastIndex && "border-b"
                }`}
              >
                {name || username || "—"}
              </td>
              <td
                className={`border-r font-mont capitalize border-ghost-bg-color pl-5 pr-3 font-jet text-[14px] py-3 ${
                  index !== lastIndex && "border-b"
                }`}
              >
                {job || email || "—"}
              </td>
              <td
                className={`border-r border-ghost-bg-color font-jet text-[14px] font-mont pl-5 pr-3 py-3 text-[#16a34a] ${
                  index !== lastIndex && "border-b"
                }`}
              >
                {phone || `$${salary}` || "—"}
              </td>
              {deleteAction && (
                <td
                  className={`flex justify-end border-ghost-bg-color text-[14px] pl-5 pr-3 py-3 text-right ${
                    index !== lastIndex && "border-b"
                  }`}
                >
                  <Button type="danger" onClick={() => onDeleteItem(id)}>
                    o'chirish
                  </Button>
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
      <Dialog
        confirmText="Tushunarli"
        title="Xodim o'chirilmadi"
        isOpenDialog={isDialogOpen}
        isCloseDialog={(details) => setIsDialogOpen(details.open)}
        description="Iltimos, o'chirmoqchi bo'lgan xodimingizni avval tanlang va qayta urinib ko'ring"
      />
    </Fragment>
  );
};

export default memo(Tbody);

import { ActionBar, Button } from "..";
import { Checkbox } from "../../ui/checkbox";
import { TbodyProps } from "../../../utils/types/table";
import { FC, Fragment, useContext, useState, memo } from "react";
import { UserDataFetchContext } from "../../../context/UserDataFetch/UserDataFetchContext";

const Tbody: FC<TbodyProps> = ({
  checking,
  table_body,
  deleteAction,
  selection,
  setSelection,
}) => {
  const { setItems } = useContext(UserDataFetchContext);
  const [itemCheckbox, setItemCheckbox] = useState<boolean>(false);
  const [tableItems, setTableItems] = useState(table_body);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const lastRowClass = "border-b";
  const borderClass = "border-ghost-bg-color";
  const cellClass = `pl-5 pr-3 py-3 text-[14px] ${borderClass} font-mont`;
  const textCenterClass = `${cellClass} text-center`;

  const onDeleteItem = (id: number) => {
    if (selectedItem === id) {
      const updatedItems = tableItems.filter((item) => item.id !== id);
      setSelection((prev) => prev.filter((selectedId) => selectedId !== id));
      setItemCheckbox(true);
      setTableItems(updatedItems);
      setItems(updatedItems);
    }
  };

  const handleCheckboxChange = (checked: boolean, id: number) => {
    if (checked) {
      setSelectedItem(id);
    }
    setSelection((prev) =>
      checked ? [...prev, id] : prev.filter((selectedId) => selectedId !== id)
    );
  };

  return (
    <Fragment>
      <tbody>
        {tableItems.map((item, index) => {
          const { id, username, name, email, phone, job, salary } = item;
          const isChecked = selection.includes(id);

          return (
            <tr key={id} className="rounded-lg">
              {checking && (
                <td
                  className={`${textCenterClass} ${
                    index !== tableItems.length - 1 ? lastRowClass : ""
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
                    className={`border rounded-md ${
                      isChecked ? "border-light" : "border-subtitle-color"
                    }`}
                  />
                </td>
              )}
              <td
                className={`${textCenterClass} ${
                  index !== tableItems.length - 1 ? lastRowClass : ""
                }`}
              >
                {index + 1 || "—"}
              </td>
              <td
                className={`${cellClass} capitalize ${
                  index !== tableItems.length - 1 ? lastRowClass : ""
                }`}
              >
                {name || username || "—"}
              </td>
              <td
                className={`${cellClass} capitalize font-jet ${
                  index !== tableItems.length - 1 ? lastRowClass : ""
                }`}
              >
                {job || email || "—"}
              </td>
              <td
                className={`${cellClass} text-[#3a86ff] ${
                  index !== tableItems.length - 1 ? lastRowClass : ""
                }`}
              >
                {phone || `$${salary}` || "—"}
              </td>
              {deleteAction && (
                <td
                  className={`flex justify-end ${cellClass} text-right ${
                    index !== tableItems.length - 1 ? lastRowClass : ""
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
      <ActionBar open={itemCheckbox} content={`${selectedItem} tanlandi`} />
    </Fragment>
  );
};

export default memo(Tbody);

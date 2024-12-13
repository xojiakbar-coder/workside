import { Table } from "../Generic";
import { FC, useState } from "react";
import Dialog from "../Generic/Dialog";
import { Button, Heading } from "@chakra-ui/react";
import GenericEmptyState from "../Generic/EmptyState";
import initialItems, { ListType, table_head } from "@/utils/staffList";
import {
  ActionBarRoot,
  ActionBarContent,
  ActionBarSeparator,
  ActionBarSelectionTrigger,
} from "../ui/action-bar";

const StaffList: FC = () => {
  const [items, setItems] = useState<ListType[]>(initialItems);
  const [selection, setSelection] = useState<number[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);
  // const hasSelection = selection.length > 0;
  // const indeterminate = hasSelection && selection.length < items.length;
  // const onRemove = (id: number) => {
  //   setItemToDelete(id);
  //   setIsDialogOpen(true);
  // };

  const handleDelete = () => {
    if (itemToDelete) {
      const updatedItems = items.filter((item) => item.id !== itemToDelete);
      setItems(updatedItems);
      setSelection((prev) =>
        prev.filter((selectedId) => selectedId !== itemToDelete)
      );
      setIsDialogOpen(false);
      setItemToDelete(null);
    }
  };

  return (
    <div className="flex flex-col h-[92svh] overflow-y-auto w-full py-[20px]">
      {items.length > 0 ? (
        <div className="overflow-y-auto px-[25px]">
          <Heading className="font-mont font-[600] text-center py-[20px] text-[24px]">
            Xodimlar ma'lumotlari
          </Heading>
          <Table table_head={table_head} table_body={items} />

          <Dialog
            isOpenDialog={isDialogOpen}
            isCloseDialog={(details) => setIsDialogOpen(details.open)}
            title="Xodimni o'chirish"
            description={`Rostdan ham o'chirmoqchimisiz?`}
            confirmText="O'chirish"
            cancelText="bekor qilish"
            makeSureValue="on"
            onConfirm={handleDelete}
          />

          <ActionBarRoot>
            <ActionBarContent className="flex justify-center items-center px-[20px] py-[12px] w-max">
              <ActionBarSelectionTrigger>
                {selection.length} selected
              </ActionBarSelectionTrigger>
              <ActionBarSeparator />
              <Button variant="outline" size="sm">
                Deleted
              </Button>
              <Button variant="outline" size="sm">
                Share
              </Button>
            </ActionBarContent>
          </ActionBarRoot>
        </div>
      ) : (
        <div className="h-full">
          <GenericEmptyState
            button={true}
            buttonContent="Yangi xodim qo'shish"
            buttonPath="/umumiy-korinish/xodim-qoshish"
            title="Hozircha xodimlar ma'lumotlari topilmadi"
            description="Agar siz yangi xodim qo'shishni xohlasangiz xodimlarni qo'shish sahifasiga o'ting"
          />
        </div>
      )}
    </div>
  );
};

export default StaffList;

{
  /* <Table.Root
            size="lg"
            variant="outline"
            colorScheme="gray"
            className="w-full rounded-md"
          >
            <Table.Header className="h-[70px] max-h-[70px] min-h-[70px]">
              <Table.Row>
                <Table.ColumnHeader className="h-[54px] px-[18px] py-[16px] min-[54px]">
                  <Checkbox
                    top="1"
                    size="lg"
                    className="border border-gray-color rounded-sm bg-body-bg-color"
                    variant="outline"
                    aria-label="Tanlash"
                    checked={
                      indeterminate
                        ? "indeterminate"
                        : selection.length === items.length
                    }
                    onCheckedChange={(changes) => {
                      setSelection(
                        changes.checked ? items.map((item) => item.id) : []
                      );
                    }}
                  />
                </Table.ColumnHeader>
                <Table.ColumnHeader className="h-[54px] px-[18px] py-[16px] min-[54px]">
                  Ism
                </Table.ColumnHeader>
                <Table.ColumnHeader className="h-[54px] px-[18px] py-[16px] min-[54px]">
                  Kasb
                </Table.ColumnHeader>
                <Table.ColumnHeader className="h-[54px] px-[18px] py-[16px] min-[54px]">
                  Maosh
                </Table.ColumnHeader>
                <Table.ColumnHeader
                  className="h-[54px] px-[18px] py-[16px] min-[54px]"
                  textAlign="end"
                >
                  Xodimni o'chirish
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body className="h-full">{rows}</Table.Body>
          </Table.Root> */
}

// const rows = items.map((item) => (
// <Table.Row key={item.id}>
//   <Table.Cell className="h-[50px] border-b px-[18.3px] min-h-[50px] border-gray-color">
//     <Checkbox
//       size="lg"
//       variant="outline"
//       className="flex items-center justify-center w-max h-max border border-gray-color rounded-sm bg-body-bg-color"
//       aria-label="Select row"
//       checked={selection.indexOf(item.id) !== -1}
//       onCheckedChange={(changes) => {
//         setSelection((prev) =>
//           changes.checked
//             ? [...prev, item.id]
//             : prev.filter((selectedId) => selectedId !== item.id)
//         );
//       }}
//     />
//   </Table.Cell>
//   <Table.Cell className="h-[50px] border-b px-[18.3px] min-h-[50px] py-[5px] border-gray-color">
//     {item.name}
//   </Table.Cell>
//   <Table.Cell className="h-[50px] text-yellow-500 border-b px-[18.3px] py-[5px] min-h-[50px] border-gray-color">
//     {item.category}
//   </Table.Cell>
//   <Table.Cell className="h-[50px] text-[#16a34a] border-b px-[18.3px] min-h-[50px] border-gray-color py-[5px]">
//     {"$" + item.price}
//   </Table.Cell>
//   {/* text-teal-500 */}
//   <Table.Cell
//     className="h-[50px] border-b px-[18.3px] min-h-[50px] border-gray-color py-[5px]"
//     textAlign="end"
//   >
//     <Button
//       className="bg-danger px-[14px] py-[16px] lowercase text-light font-semibold hover:opacity-70"
//       onClick={() => onRemove(item.id)}
//     >
//       o'chirish
//     </Button>
//   </Table.Cell>
// </Table.Row>
// ));

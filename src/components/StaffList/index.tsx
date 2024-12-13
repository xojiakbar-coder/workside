import { Table } from "../Generic";
import { FC, useState } from "react";
import Dialog from "../Generic/Dialog";
import GenericEmptyState from "../Generic/EmptyState";
import { Container, Button, Heading } from "@chakra-ui/react";
import initialItems, { ListType, table_head } from "@/utils/staffList";
import {
  ActionBarRoot,
  ActionBarContent,
  ActionBarSeparator,
  ActionBarSelectionTrigger,
} from "../ui/action-bar";

const StaffList: FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selection, setSelection] = useState<number[]>([]);
  const [items, setItems] = useState<ListType[]>(initialItems);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);

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
    <Container
      className="flex flex-col h-[92svh] overflow-y-auto w-full py-[25px]"
      fluid
    >
      {items.length > 0 ? (
        <div className="overflow-y-auto px-[25px] w-full">
          <Heading className="font-mont font-[600] text-center py-[20px] text-[24px]">
            Xodimlar ma'lumotlari
          </Heading>
          <Table
            checking={true}
            table_body={items}
            deleteAction={true}
            table_head={table_head}
          />

          <Dialog
            makeSureValue="on"
            confirmText="O'chirish"
            onConfirm={handleDelete}
            title="Xodimni o'chirish"
            cancelText="bekor qilish"
            isOpenDialog={isDialogOpen}
            description={`Rostdan ham o'chirmoqchimisiz?`}
            isCloseDialog={(details) => setIsDialogOpen(details.open)}
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
    </Container>
  );
};

export default StaffList;

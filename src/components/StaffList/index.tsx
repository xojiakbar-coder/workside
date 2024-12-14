import { Table } from "../Generic";
import { useEffect, useState } from "react";
import { table_head } from "../../utils/staffList";
import { Container, Heading } from "@chakra-ui/react";
// import GenericEmptyState from "../Generic/EmptyState";
// import {
//   ActionBarRoot,
//   ActionBarContent,
//   ActionBarSeparator,
//   ActionBarSelectionTrigger,
// } from "../ui/action-bar";

const StaffList = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(`Ma'lumotlar yuklanmadi: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run only once on mount

  return (
    <Container
      className="flex flex-col h-[92svh] overflow-y-auto w-full py-[25px]"
      fluid
    >
      <div className="overflow-y-auto px-[25px] w-full h-full">
        <Heading className="font-mont font-[600] text-center py-[20px] text-[24px]">
          Xodimlar ma'lumotlari
        </Heading>
        <Table
          checking={true}
          deleteAction={true}
          table_head={table_head}
          table_body={[...data]}
        />

        {/* <Dialog
          makeSureValue="on"
          confirmText="O'chirish"
          onConfirm={handleDelete}
          title="Xodimni o'chirish"
          cancelText="bekor qilish"
          isOpenDialog={isDialogOpen}
          description={`Rostdan ham o'chirmoqchimisiz?`}
          isCloseDialog={(details) => setIsDialogOpen(details.open)}
        /> */}

        {/* {selection.length} selected */}
        {/* <ActionBarRoot>
          <ActionBarContent className="flex justify-center items-center px-[20px] py-[12px] w-max">
            <ActionBarSelectionTrigger></ActionBarSelectionTrigger>
            <ActionBarSeparator />
            <Button variant="outline" size="sm">
              Deleted
            </Button>
            <Button variant="outline" size="sm">
              Share
            </Button>
          </ActionBarContent>
        </ActionBarRoot> */}
      </div>

      {/* <GenericEmptyState
          button={true}
          buttonContent="Yangi xodim qo'shish"
          buttonPath="/umumiy-korinish/xodim-qoshish"
          title="Hozircha xodimlar ma'lumotlari topilmadi"
          description="Agar siz yangi xodim qo'shishni xohlasangiz xodimlarni qo'shish sahifasiga o'ting"
        /> */}
    </Container>
  );
};

export default StaffList;

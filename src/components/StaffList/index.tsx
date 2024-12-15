import { Table } from "../Generic";
import { useContext, useEffect } from "react";
import { table_head } from "../../utils/staffList";
import { Container, Heading } from "@chakra-ui/react";
import GenericEmptyState from "../Generic/EmptyState";
import { StaffListDataTable } from "../../context/StaffListDataTable";
// import {
//   ActionBarRoot,
//   ActionBarContent,
//   ActionBarSeparator,
//   ActionBarSelectionTrigger,
// } from "../ui/action-bar";

const StaffList = () => {
  const { items } = useContext(StaffListDataTable);

  useEffect(() => {
    console.log(items ?? "No data available");
  }, [items]);

  return (
    <Container
      className="flex flex-col h-[92svh] overflow-y-auto w-full pt-[25px] px-[2%] pb-[35px]"
      fluid
    >
      {items?.length > 0 && (
        <>
          <Heading className="font-mont font-[600] text-center text-[24px] pb-[25px]">
            Xodimlar ma'lumotlari
          </Heading>
          <Table
            checking={true}
            deleteAction={true}
            table_head={table_head}
            table_body={items}
          />
        </>
      )}

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

      {items?.length <= 0 && (
        <GenericEmptyState
          button={true}
          buttonContent="Yangi xodim qo'shish"
          buttonPath="/umumiy-korinish/xodim-qoshish"
          title="Hozircha xodimlar ma'lumotlari topilmadi"
          description="Agar siz yangi xodim qo'shishni xohlasangiz xodimlarni qo'shish sahifasiga o'ting"
        />
      )}
    </Container>
  );
};

export default StaffList;

import { useContext } from "react";
import { Table, Title } from "../Generic";
import { Container } from "@chakra-ui/react";
import GenericEmptyState from "../Generic/EmptyState";
import { table_head } from "../../utils/data/staffList";
import { StaffListDataTable } from "../../context/StaffListDataTable";

const StaffList = () => {
  const { items } = useContext(StaffListDataTable);

  return (
    <Container
      className="flex flex-col h-[92svh] overflow-y-auto w-full pt-[25px] px-[2%] pb-[35px]"
      fluid
    >
      {items?.length > 0 && (
        <>
          <Title type="section">Xodimlar ma'lumotlari</Title>

          <Table
            checking={true}
            table_body={items}
            deleteAction={true}
            table_head={table_head}
          />
        </>
      )}

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

import { useContext } from "react";
import { Container, Table, Title } from "../Generic";
import GenericEmptyState from "../Generic/EmptyState";
import { table_head } from "../../utils/data/staffList";
import { UserDataFetchContext } from "../../context/UserDataFetch/UserDataFetchContext";

const StaffList = () => {
  const { items } = useContext(UserDataFetchContext);

  return (
    <Container fluid type="section">
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

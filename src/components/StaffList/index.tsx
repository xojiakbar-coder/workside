import BASE_URL from "../../config/baseUrl";
import { useEffect, useState } from "react";
import { users_url } from "../../config/endpoints";
import { Container, Table, Title } from "../Generic";
import GenericEmptyState from "../Generic/EmptyState";
import { table_head } from "../../utils/data/staffList";
import { TableBodyType } from "../../utils/types/table";

const StaffList = () => {
  const [data, setData] = useState<TableBodyType[] | []>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/${users_url}/`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <Container fluid type="section" className="overflow-y-auto">
      {data.length > 0 && (
        <>
          <Title type="section">Xodimlar ma'lumotlari</Title>
          <Table table_head={table_head} table_body={data} />
        </>
      )}

      {data.length === 0 && (
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

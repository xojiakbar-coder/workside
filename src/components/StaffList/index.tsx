import BASE_URL from "../../config/baseUrl";
import GenericEmptyState from "../Generic/EmptyState";
import { table_head } from "../../utils/data/staffList";
import { useContext, useEffect, useState } from "react";
import { TableBodyType } from "../../utils/types/table";
import { Container, Loader, Table, Title } from "../Generic";
import { LoaderContext } from "../../context/LoaderContext/LoaderContext";

const StaffList = () => {
  const { show_load, setShowLoad } = useContext(LoaderContext);
  const [data, setData] = useState<TableBodyType[] | []>([]);

  useEffect(() => {
    setShowLoad(true);
    fetch(`${BASE_URL}/employee`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setShowLoad(false);
      })
      .catch((err) => {
        console.error(err);
        setShowLoad(false);
      });
  }, []);

  return (
    <Container fluid type="section">
      <Title type="section">Xodimlar ma'lumotlari</Title>
      {!show_load ? (
        <>
          {data.length > 0 ? (
            <Table table_head={table_head} table_body={data} />
          ) : (
            <GenericEmptyState
              button={true}
              buttonContent="Yangi xodim qo'shish"
              buttonPath="/umumiy/xodim-qoshish"
              title="Hozircha xodimlar ma'lumotlari topilmadi"
              description="Agar siz yangi xodim qo'shishni xohlasangiz xodimlarni qo'shish sahifasiga o'ting"
            />
          )}
        </>
      ) : (
        <Loader type="section" />
      )}
    </Container>
  );
};

export default StaffList;

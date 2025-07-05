import BASE_URL from "../../config/baseUrl";
import { Container, Table, Title } from "../Generic";
import GenericEmptyState from "../Generic/EmptyState";
import { table_head } from "../../utils/data/staffList";
import { useContext, useEffect, useState } from "react";
import { TableBodyType } from "../../utils/types/table";
import TableSkeleton from "../Generic/Table/TableSkeleton";
import { LoaderContext } from "../../context/LoaderContext/LoaderContext";

const StaffList = () => {
  const { show_load, setShowLoad } = useContext(LoaderContext);
  const [data, setData] = useState<TableBodyType[] | null>(null);

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
      <Title type="section" className="border">Xodimlar ma'lumotlari</Title>

      {/* If the information has not yet arrived, let the Loader exit. */}
      {show_load && <TableSkeleton />}

      {/* If data is received and it is empty, return GenericEmpty */}
      {!show_load && data?.length === 0 && (
        <GenericEmptyState
          button={true}
          buttonContent="Yangi xodim qo'shish"
          buttonPath="/umumiy/xodim-qoshish"
          title="Hozircha xodimlar ma'lumotlari topilmadi"
          description="Agar siz yangi xodim qo'shishni xohlasangiz xodimlarni qo'shish sahifasiga o'ting"
        />
      )}

      {/* If data is received and it is not empty, then Table should be output. */}
      <div className="border">

      {!show_load && data && data.length > 0 && (
        <Table table_head={table_head} table_body={data} />
      )}
      </div>
    </Container>
  );
};

export default StaffList;

import BASE_URL from "../../config/baseUrl";
import { useContext, useEffect, useState } from "react";
import { TodosDataType } from "../../utils/types/reports";
import { PageChangeDetails } from "../Generic/Pagination/Pagination";
import { LoaderContext } from "../../context/LoaderContext/LoaderContext";
import {
  Title,
  Loader,
  GridBox,
  Container,
  Pagination,
  ReportCard,
} from "../Generic";

const EmployeeReports = () => {
  const [data, setData] = useState<TodosDataType>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { show_load, setShowLoad } = useContext(LoaderContext);
  const pageSize = 6;

  useEffect(() => {
    setShowLoad(true);
    fetch(`${BASE_URL}/reports`)
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

  const startIndex = (currentPage - 1) * pageSize;
  const selectedData = data.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (details: PageChangeDetails): void => {
    setCurrentPage(details.page);
  };

  return (
    <Container fluid type="section" className="overflow-y-auto">
      <Title type="section">Xodimlar hisobotlari</Title>
      {!show_load ? (
        <>
          <GridBox cols={"1fr 1fr"} gap={8}>
            {selectedData.length > 0 ? (
              selectedData.map((item) => (
                <ReportCard
                  key={item.id}
                  name={item?.name}
                  message={item.message}
                  position={item.position}
                  data_date={item.data_date}
                  chart_data={item.chart_data}
                />
              ))
            ) : (
              <p>Ma'lumot yo'q</p>
            )}
          </GridBox>
          <Container fluid type="full-center">
            <Pagination
              defaultPage={1}
              page={currentPage}
              pageSize={pageSize}
              className="my-[38px]"
              data_length={data.length}
              handlePageChange={handlePageChange}
            />
          </Container>
        </>
      ) : (
        <Loader type="section" />
      )}
    </Container>
  );
};

export default EmployeeReports;

import moment from "moment";
import { useEffect, useState } from "react";
import BASE_URL from "../../config/baseUrl";
import { todos_url } from "../../config/endpoints";
import { TodosDataType } from "../../utils/types/reports";
import { PageChangeDetails } from "../Generic/Pagination/Pagination";
import { Container, GridBox, Pagination, ReportCard, Title } from "../Generic";

const EmployeeReports = () => {
  const [data, setData] = useState<TodosDataType>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 2;

  useEffect(() => {
    fetch(`${BASE_URL}/${todos_url}/`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  const startIndex = (currentPage - 1) * pageSize;
  const selectedData = data.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (details: PageChangeDetails): void => {
    setCurrentPage(details.page);
  };

  return (
    <Container fluid type="section" className="overflow-y-auto">
      <Title type="section">Xodimlar hisobotlari</Title>
      <GridBox cols={"1fr"} gapY={8}>
        {selectedData.length > 0 &&
          selectedData.map((item) => (
            <ReportCard
              key={item.id}
              title={item?.name}
              chart_type="Pie chart"
              data_about={item?.title}
              data_date={`${moment().format("MMM Do, Y")}`}
              subtitle={`this is subtitle for report card ${item?.id}`}
            />
          ))}
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
    </Container>
  );
};

export default EmployeeReports;

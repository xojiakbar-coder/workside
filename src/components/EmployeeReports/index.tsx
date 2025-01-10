import { useEffect, useState } from "react";
import BASE_URL from "../../config/baseUrl";
import { todos_url } from "../../config/endpoints";
import { TodosDataType } from "../../utils/types/reports";
import { Container, GridBox, Pagination, ReportCard, Title } from "../Generic";
import moment from "moment";

const EmployeeReports = () => {
  const [data, setData] = useState<TodosDataType>([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const pageSize = 3;

  useEffect(() => {
    fetch(`${BASE_URL}/${todos_url}/`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  // const startIndex = (currentPage - 1) * pageSize;
  // const selectedData = data.slice(startIndex, startIndex + pageSize);

  return (
    <Container fluid type="section" className="overflow-y-auto">
      <Title type="section">Xodimlar hisobotlari</Title>
      <GridBox cols={"1fr"} gapY={8}>
        {data.length > 0 &&
          data.map((item) => {
            return (
              <ReportCard
                key={item.id}
                title={item?.title}
                chart_type="Pie chart"
                data_about={item?.title}
                data_date={`${moment().format("MMM Do, Y")}`}
                subtitle="this is subtitle for report card"
              />
            );
          })}
      </GridBox>
      <Container fluid type="full-center">
        <Pagination
          count={data.length}
          // currentPage={currentPage}
          pageSize={20}
        />
      </Container>
    </Container>
  );
};

export default EmployeeReports;

import BASE_URL from "../../config/baseUrl";
import GenericEmptyState from "../Generic/EmptyState";
import { useContext, useEffect, useState } from "react";
import { TodosDataType } from "../../utils/types/reports";
import { PageChangeDetails } from "../Generic/Pagination/Pagination";
import { Title, Container, Pagination, ReportCard } from "../Generic";
import { LoaderContext } from "../../context/LoaderContext/LoaderContext";
import ReportCardSkeleton from "./../Generic/Card/ReportCard/ReportCardSkeleton";

const EmployeeReports = () => {
  const { setShowLoad } = useContext(LoaderContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [data, setData] = useState<TodosDataType | null>(null);
  const pageSize = 6;

  useEffect(() => {
    setShowLoad(true);
    fetch(`${BASE_URL}/reports`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.length > 0 ? res : []);
        setShowLoad(false);
      })
      .catch((err) => {
        console.error("Error fetching reports:", err);
        setData([]);
        setShowLoad(false);
      });
  }, []);

  const startIndex = (currentPage - 1) * pageSize;
  const selectedData = data
    ? data.slice(startIndex, startIndex + pageSize)
    : [];

  const handlePageChange = (details: PageChangeDetails): void => {
    setCurrentPage(details.page);
  };

  return (
    <Container fluid type="section" className="overflow-y-auto">
      <Title type="section">Xodimlar hisobotlari</Title>

      {/* Show Empty State only if data is empty ([]) */}
      {data !== null && data.length === 0 && (
        <GenericEmptyState
          button={true}
          buttonPath="/hisobotlar"
          buttonContent="Add Report"
          title="No employee reports found"
          description="If you want to add a report, go to the add report page."
        />
      )}

      {/* Show ReportCard only if data is available */}
      {data !== null && selectedData.length > 0 && (
        <div className="grid grid-cols-1 gap-[10px]">
          {selectedData.map((item) => (
            <ReportCard
              key={item.id}
              name={item.name}
              message={item.message}
              position={item.position}
              data_date={item.data_date}
              report_data={item.report_data}
            />
          ))}
        </div>
      )}
      {data === null && (
        <div className="flex flex-col gap-[30px] w-full">
          <ReportCardSkeleton />
          <ReportCardSkeleton />
          <ReportCardSkeleton />
          <ReportCardSkeleton />
        </div>
      )}

      {/* Pagination controls (only if data exists) */}
      {data !== null && selectedData.length > 0 && (
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
      )}
    </Container>
  );
};

export default EmployeeReports;

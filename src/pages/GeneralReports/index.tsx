import BASE_URL from "../../config/baseUrl";
import { Container, Title } from "../Generic";
import { useContext, useEffect, useState } from "react";
import DigitCard from "../Generic/Card/Digit/DigitCard";
import { LoaderContext } from "../../context/LoaderContext/LoaderContext";
import { DigitCardPropsType } from "../../utils/types/general";

const GeneralReports = () => {
  const { setShowLoad } = useContext(LoaderContext);
  const [data, setData] = useState<DigitCardPropsType[] | null>(null);

  useEffect(() => {
    setShowLoad(true);
    fetch(`${BASE_URL}/social`)
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
  console.log(data);

  return (
    <Container fluid type="section">
      <Title type="section">Asosiy Hisobotlar</Title>

      {data !== null && (
        <div className="flex flex-wrap 576:grid-cols-2 grid-cols-1 gap-[25px] justify-start items-center">
          {data.map((item) => {
            return (
              <DigitCard
                key={item.id}
                name={item.name}
                icon={item.icon}
                value={item.value}
              />
            );
          })}
        </div>
      )}
    </Container>
  );
};

export default GeneralReports;

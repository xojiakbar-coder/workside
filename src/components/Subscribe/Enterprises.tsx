import BASE_URL from "../../config/baseUrl";
import { Container, SubscribeCard } from "../Generic";
import { useContext, useEffect, useState } from "react";
import { SubscribeCardItemType } from "../../utils/types/general";
import { LoaderContext } from "../../context/LoaderContext/LoaderContext";

const Enterprises = () => {
  const { setShowLoad } = useContext(LoaderContext);
  const [data, setData] = useState<SubscribeCardItemType[] | null>(null);

  useEffect(() => {
    setShowLoad(true);
    fetch(`${BASE_URL}/subscribe`)
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
    <Container
      fluid
      className="grid 1200:grid-cols-[27vw_27vw_27vw] 1024:grid-cols-[30vw_30vw_30vw] grid-cols-1 justify-center items-stretch h-full 992:gap-[40px] gap-[30px]"
    >
      {data?.map(
        (item) =>
          item.category === "enterprises" && (
            <SubscribeCard
              key={item.id}
              name={item.name}
              price={item.price}
              features={item.features}
            />
          )
      )}
    </Container>
  );
};

export default Enterprises;

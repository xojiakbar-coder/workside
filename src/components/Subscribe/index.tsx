import BASE_URL from "../../config/baseUrl";
import { useContext, useEffect, useState } from "react";
import { Button, Container, Loader, Title } from "../Generic";
import { SubscribeCardItemType } from "../../utils/types/general";
import { LoaderContext } from "../../context/LoaderContext/LoaderContext";

const Subscribe = () => {
  const [data, setData] = useState<SubscribeCardItemType[] | null>(null);
  const { show_load, setShowLoad } = useContext(LoaderContext);

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
    <Container fluid className="h-max">
      <Container fluid type="section">
        <Title type="section">Subscribe</Title>
        {!show_load ? (
          <Container
            fluid
            className="grid 1024:grid-cols-3 grid-cols-1 justify-center items-stretch h-full 992:gap-[40px] gap-[30px]"
          >
            {data?.length &&
              data?.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col relative border border-border-color py-[24px] rounded-[16px] px-[20px] gap-[32px]"
                  >
                    <div className="capitalize text-center w-full 992:text-[30px] sm:text-[24px] text-[22px]">
                      {item?.name}
                    </div>
                    <div className="flex items-center justify-center text-[28px] font-bold uppercase">
                      {item.price} / Month
                    </div>
                    <div className="flex justify-center">
                      <ul className="flex flex-col gap-[24px] text-center text-balance pl-[20px] w-[85%]">
                        {item?.features.map((item) => {
                          return (
                            <li key={item.id} className="text-balance">
                              {item.text}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <Button
                      type="primary"
                      className="font-semibold yellow-btn font-jost text-light px-[45px] py-[20px] 992:text-[22px] text-[16px] mt-auto uppercase"
                    >
                      Get Activation
                    </Button>
                  </div>
                );
              })}
          </Container>
        ) : (
          <Loader type="home-pgs" />
        )}
      </Container>
    </Container>
  );
};

export default Subscribe;

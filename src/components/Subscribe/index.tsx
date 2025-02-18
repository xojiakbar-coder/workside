import { useEffect, useState } from "react";
import BASE_URL from "../../config/baseUrl";
import { Button, Container, Title } from "../Generic";
import { SubscribeCardItemType } from "../../utils/types/general";

const Subscribe = () => {
  const [data, setData] = useState<SubscribeCardItemType[] | null>(null);

  useEffect(() => {
    fetch(`${BASE_URL}/subscribe`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container fluid type="wrapper" className="h-max">
      <Container fluid type="section" className="">
        <Title type="section">Subscribe</Title>
        <Container
          fluid
          className="grid 1024:grid-cols-3 grid-cols-1 justify-center items-center h-full 992:gap-[40px] gap-[30px]"
        >
          {data?.length &&
            data?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col border border-border-color py-[24px] rounded-[16px] px-[20px] gap-[14px]"
                >
                  <div className="capitalize text-center w-full font-bold 992:text-[30px] sm:text-[24px] text-[22px]">
                    {item?.name}
                  </div>
                  <div className="flex justify-center">
                    <ul className="flex flex-col gap-[24px] text-center text-balance pl-[20px] w-[85%]">
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </li>
                    </ul>
                  </div>
                  <Button
                    type="primary"
                    className="font-semibold mt-[24px] yellow-btn font-jost text-black text-[22px]"
                  >
                    {"$" + item.price}
                  </Button>
                </div>
              );
            })}
          {data?.length &&
            data?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col border border-border-color py-[24px] rounded-[16px] px-[20px] gap-[14px]"
                >
                  <div className="capitalize text-center w-full font-bold 992:text-[30px] sm:text-[24px] text-[22px]">
                    {item?.name}
                  </div>
                  <div className="flex justify-center">
                    <ul className="flex flex-col gap-[24px] text-center text-balance pl-[20px] w-[85%]">
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </li>
                    </ul>
                  </div>
                  <Button
                    type="primary"
                    className="font-semibold mt-[24px] yellow-btn font-jost"
                  >
                    {"$" + item.price}
                  </Button>
                </div>
              );
            })}
        </Container>
      </Container>
    </Container>
  );
};

export default Subscribe;

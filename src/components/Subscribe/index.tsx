import { Button, Container, Title } from "../Generic";

const Subscribe = () => {
  return (
    <Container fluid type="wrapper" className="h-content-height">
      <Container fluid type="section" className="">
        <Title type="section">Subscribe</Title>
        <Container
          fluid
          className="grid 1024:grid-cols-3 grid-cols-1 justify-center items-center h-full 992:gap-[40px] gap-[30px]"
        >
          <div className="flex flex-col border border-outer-bdr-color py-[24px] rounded-[16px] px-[20px] gap-[14px]">
            <div className="capitalize text-center w-full font-bold 992:text-[30px] sm:text-[24px] text-[22px]">
              freemium
            </div>
            <div className="flex justify-center">
              <ul className="flex flex-col gap-[24px] text-center text-balance pl-[20px] w-[85%]">
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
            <Button type="primary" className="font-semibold mt-[24px]">
              Activate subscription
            </Button>
          </div>
          <div className="flex flex-col border border-outer-bdr-color py-[24px] rounded-[16px] px-[20px] gap-[14px]">
            <div className="capitalize text-center w-full font-bold 992:text-[30px] sm:text-[24px] text-[22px]">
              Standart
            </div>
            <div className="flex justify-center">
              <ul className="flex flex-col gap-[24px] text-center text-balance pl-[20px] w-[85%]">
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
            <Button type="primary" className="font-semibold mt-[24px]">
              Activate subscription
            </Button>
          </div>
          <div className="flex flex-col border border-outer-bdr-color py-[24px] rounded-[16px] px-[20px] gap-[14px]">
            <div className="capitalize text-center w-full font-bold 992:text-[30px] sm:text-[24px] text-[22px]">
              Preemium
            </div>
            <div className="flex justify-center">
              <ul className="flex flex-col gap-[24px] text-center text-balance pl-[20px] w-[85%]">
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
            <Button type="primary" className="font-semibold mt-[24px]">
              Activate subscription
            </Button>
          </div>
        </Container>
      </Container>
    </Container>
  );
};

export default Subscribe;

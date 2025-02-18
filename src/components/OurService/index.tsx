import { Container, Title } from "../Generic";
import { our_sevices } from "../../utils/data/home";

const OurService = () => {
  return (
    <Container
      fluid
      className="flex w-full flex-col justify-center h-screen min-h-screen"
    >
      <Title type="secondary">Bizning xizmatlar</Title>
      <div
        className={`grid 992:grid-cols-3 576:grid-cols-[80%] grid-cols-1 992:justify-between justify-center 992:gap-0 gap-[20px] w-full mt-[12px] border-y border-border-color mb-[100px] auto-rows-full h-[60%]`}
      >
        {our_sevices.map(({ id, title, icon: Icon }) => (
          <div
            key={id}
            className={`cursor-pointer transition-all ease-out duration-[250ms] w-full h-full ${
              id === 2 && "border-x border-border-color"
            }`}
          >
            <div className="flex items-start justify-start text-light text-center p-[20px] font-mont font-semibold lg:text-[18px] md:text-[16px] text-[14px] bg-transparent w-full h-full">
              <div className="flex justify-between items-center rounded-md text-center bg-dark-bg-color w-full">
                <div className="bg-primary-color py-[20px] px-[20px] rounded-l-md flex-shrink-0 select-none cursor-pointer">
                  <Icon className="md:text-[34px] smtext-[20px] text-[24px] text-light" />
                </div>
                <div className="flex-grow text-center">{title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default OurService;

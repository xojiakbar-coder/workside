// import useSize from "../../hooks/useSize";
import { Container, Title } from "../Generic";
import { our_sevices } from "../../utils/data/home";

const OurService = () => {
  // const { width } = useSize();

  // const gridAutoRows =
  //   width > 1400
  //     ? "380px"
  //     : width > 1250
  //     ? "350px"
  //     : width > 768
  //     ? "450px"
  //     : width > 567
  //     ? "400px"
  //     : "370px";

  return (
    <Container
      fluid
      className="flex w-full flex-col justify-center h-max min-h-max"
    >
      <Title type="secondary">Bizning xizmatlar</Title>
      <div
        className={`grid 992:grid-cols-3 576:grid-cols-[80%] grid-cols-1 h-max 992:justify-between justify-center 992:gap-0 gap-[20px] w-full mt-[12px] mb-[100px] auto-rows-[400px]`}
      >
        {our_sevices.map(({ id, title, icon: Icon }) => (
          <div
            key={id}
            className={`cursor-pointer transition-all ease-out duration-[250ms] w-full h-full border-body-bg-color ${
              id === 2 && "border-x-[3px]"
            }`}
          >
            <div className="flex items-start justify-start text-light text-center p-[20px] font-mont font-semibold lg:text-[18px] md:text-[16px] text-[14px] bg-ghost-bg-color w-full h-full">
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

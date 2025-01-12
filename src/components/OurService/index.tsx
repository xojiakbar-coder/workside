import useSize from "../../hooks/useSize";
import { our_sevices } from "../../utils/data/home";
import { Container, GridBox, Title } from "../Generic";

const OurService = () => {
  const { width } = useSize();

  const cols =
    width > 1400
      ? "420px 420px 420px"
      : width > 1250
      ? "350px 350px 350px"
      : width > 768
      ? "550px"
      : width > 567
      ? "450px"
      : "1fr";

  const gridAutoRows =
    width > 1400
      ? "380px"
      : width > 1250
      ? "350px"
      : width > 768
      ? "450px"
      : width > 567
      ? "400px"
      : "370px";

  const justifyContent = width > 768 ? "justify-evenly" : "justify-center";

  return (
    <Container
      fluid
      type="home-section"
      className="flex w-full flex-col justify-center h-section-h"
    >
      <Title type="secondary">Bizning xizmatlar</Title>
      <GridBox
        gap="25px"
        cols={cols}
        gridAutoRows={gridAutoRows}
        className={`flex h-max ${justifyContent} w-full mt-[12px] mb-[100px]`}
      >
        {our_sevices.map(({ id, title, icon: Icon }) => (
          <div
            className="rounded-lg cursor-pointer transition-all ease-out duration-[250ms] p-[10px] border-[3px] border-dark-bg-color"
            key={id}
          >
            <div className="flex items-start justify-start text-light text-center font-mont font-semibold lg:text-[18px] md:text-[16px] text-[14px] rounded-md bg-ghost-bg-color w-full h-full">
              <div className="flex justify-between items-center rounded-t-md text-center bg-dark-bg-color w-full">
                <div className="bg-primary-btn py-[20px] px-[20px] rounded-tl-md flex-shrink-0 select-none cursor-pointer">
                  <Icon className="md:text-[34px] smtext-[20px] text-[24px] text-light" />
                </div>
                <div className="flex-grow text-center">{title}</div>
              </div>
            </div>
          </div>
        ))}
      </GridBox>
    </Container>
  );
};

export default OurService;

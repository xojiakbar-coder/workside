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

  return (
    <Container fluid type="home-section" className="w-full">
      <Title type="secondary">Bizning xizmatlar</Title>
      <GridBox
        gap="25px"
        cols={cols}
        gridAutoRows={gridAutoRows}
        className="h-max justify-center w-full mb-[100px]"
      >
        {our_sevices.map((item) => (
          <div
            className="rounded-lg cursor-pointer transition-all ease-out duration-[250ms] p-[10px] border-[3px] border-dark-bg-color"
            key={item.id}
          >
            <div className="flex items-start justify-start text-light text-center font-mont font-semibold lg:text-[18px] md:text-[16px] text-[14px] rounded-md bg-ghost-bg-color w-full h-full">
              <div className="flex justify-between items-center rounded-t-md text-center bg-dark-bg-color w-full">
                <p className="bg-primary-btn py-[20px] px-[20px] rounded-tl-md flex-shrink-0 select-none cursor-pointer">
                  icon
                </p>
                <div className="flex-grow text-center">{item.title}</div>
              </div>
            </div>
          </div>
        ))}
      </GridBox>
    </Container>
  );
};

export default OurService;

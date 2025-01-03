import Marquee from "react-fast-marquee";
import { Container, Title } from "../Generic";
import our_case_data from "../../utils/data/case";

const OurCase = () => {
  return (
    <Container
      fluid
      type="wrapper"
      flexDirection="column"
      className="my-[100px] h-max"
    >
      <Title type="secondary">Bizning keyslar</Title>
      <Container fluid type="home-section" className="relative mt-[12px]">
        <Marquee gradient={false} speed={50}>
          {our_case_data.concat(our_case_data, our_case_data).map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center mx-2"
            >
              <img
                src={item.image}
                alt={`Image of ${item.title}`}
                className="w-48 h-24 object-cover rounded-md cursor-pointer"
              />
            </div>
          ))}
        </Marquee>
      </Container>
    </Container>
  );
};

export default OurCase;

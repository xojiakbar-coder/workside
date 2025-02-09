import { Container, Title } from "../Generic";
import GenericMarquee from "../Generic/Marquee";
import our_case_data from "../../utils/data/case";
import useSize from "../../hooks/useSize";

const OurCase = () => {
  const { width } = useSize();
  return (
    <Container fluid className="flex flex-col items-center mt-[100px] h-max">
      <Title type="secondary">Bizning keyslar</Title>
      <GenericMarquee
        speed={60}
        gradient={true}
        pauseOnHover={true}
        gradientColor="#000"
        gradientWidth={width > 992 ? "400px" : "90px"}
        marquee_data={our_case_data}
      />
    </Container>
  );
};

export default OurCase;

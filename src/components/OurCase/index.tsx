import { Container, Title } from "../Generic";
import GenericMarquee from "../Generic/Marquee";
import our_case_data from "../../utils/data/case";

const OurCase = () => {
  return (
    <Container fluid className="flex flex-col items-center mt-[100px] h-max">
      <Title type="secondary">Bizning keyslar</Title>
      <GenericMarquee
        speed={60}
        gradient={true}
        pauseOnHover={true}
        gradientColor="#000"
        gradientWidth="400px"
        marquee_data={our_case_data}
      />
    </Container>
  );
};

export default OurCase;

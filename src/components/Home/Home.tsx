import { useNavigate } from "react-router-dom";
import { Button, Container, Title } from "../Generic";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container fluid type="wrapper" className="h-section-h">
      <Container fluid gap="24px" type="full-center" flexDirection="column">
        <Title type="title">
          Raqamli kelajak sari yana <br /> bir qadam
        </Title>
        <p className="text-[18px] text-subtitle-color text-balance text-center font-semibold md:w-[100%] w-[80%]">
          UZREPODASH loyihasi orqali ishlaringizni raqamlashtiring.
        </p>
        <div className="grid grid-cols-2 gap-[10px] mt-[10px] w-max">
          <Button
            type="solid"
            className="w-full font-semibold"
            onClick={() => navigate("/hisobotlar")}
          >
            Ishlarni boshlash
          </Button>
          <Button
            type="surface"
            className="w-full font-semibold"
            onClick={() => navigate("/signin")}
          >
            Kirish
          </Button>
        </div>
      </Container>
    </Container>
  );
};

export default Home;

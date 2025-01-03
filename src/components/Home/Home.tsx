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
        <p className="text-[18px] text-subtitle-color text-balance text-center font-semibold md:w-[40%] w-[70%]">
          UZREPODASH loyihasi orqali ishlaringizni raqamlashtiring. Bu esa
          vaqtingizni tejashni kafolatlaydi.
        </p>
        <div className="grid grid-cols-2 gap-[10px] mt-[10px] w-max">
          <Button
            type="solid"
            className="w-full h-[74px] font-semibold"
            onClick={() => navigate("/hisobotlar")}
          >
            Ishlarni boshlash
          </Button>
          <Button
            type="primary"
            className="w-full h-[74px] font-semibold"
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

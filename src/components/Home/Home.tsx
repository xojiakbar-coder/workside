import Logo from "../Navbar/Logo";
import { Button, Container } from "../Generic";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container fluid type="wrapper">
      <Container
        fluid
        gap="gap-[24px]"
        type="full-center"
        flexDirection="column"
      >
        <Logo logo={false} />
        <p className="text-[18px] text-subtitle-color text-balance text-center font-semibold w-[30%]">
          Biz bilan o'z kompaniyanigizni yoki kichikdan kattagacha bo'lgan
          loyiha, va boshqa raqamlashtirish mumkin bo'lgan ishlaringizni oson va
          qulay tartibda raqamashtiring.
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

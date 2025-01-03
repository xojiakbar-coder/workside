import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Title } from "../Generic";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container
      fluid
      type="wrapper"
      flexDirection="column"
      className="justify-center items-center h-screen min-h-screen w-full relative"
    >
      <Container fluid type="full-center" className="absolute">
        <Text className="font-jost font-extrabold text-ghost-bg-color text-center w-full flex justify-center md:pl-[120px] pl-[30px] md:text-[180px] text-[100px] md:tracking-[130px] sm:tracking-[70px] tracking-[30px] blur-[7px]">
          404
        </Text>
      </Container>
      <Container
        fluid
        gap={10}
        type="wrapper"
        flexDirection="column"
        className="w-full h-full justify-center items-center h-screen min-h-screen overflow-hidden text-center px-[12px]"
      >
        <Title
          type="danger-title"
          className="text-center w-full font-mont leading-10"
        >
          Kechirasiz, bu sahifa mavjud emas
        </Title>
        <Text className="leading-7">
          Siz izlagan sahifani topa olmadik. Asosiy sahifaga qaytishga harakat
          qiling
        </Text>
        <Button
          type="solid"
          className="font-bold h-[65px]"
          onClick={() => navigate("/")}
        >
          Bosh sahifaga qaytish
        </Button>
      </Container>
    </Container>
  );
};

export default NotFoundPage;

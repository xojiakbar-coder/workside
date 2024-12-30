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
      className="justify-center items-center h-screen min-h-screen w-full bg-not-found bg-cover bg-center bg-no-repeat"
    >
      <Container
        fluid
        gap={10}
        type="wrapper"
        flexDirection="column"
        className="w-full h-full justify-center items-center h-screen min-h-screen overflow-hidden"
      >
        <Title type="danger-title" className="text-center w-full font-mont">
          Kechirasiz, bu sahifa mavjud emas
        </Title>
        <Text>
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

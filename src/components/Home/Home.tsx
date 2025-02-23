import { useEffect, useState } from "react";
import BASE_URL from "../../config/baseUrl";
import { useNavigate } from "react-router-dom";
import { Button, Container, Title } from "../Generic";
import { HomeContentType } from "../../utils/types/general";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<HomeContentType | null>(null);

  useEffect(() => {
    fetch(`${BASE_URL}/home`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container fluid type="wrapper" className="h-section">
      <Container fluid gap="24px" type="full-center" flexDirection="column">
        <Title type="title" className="text-wrap">
          {data?.title}
        </Title>
        <p className="text-[18px] text-subtitle-color text-balance text-center font-semibold md:w-[100%] w-[80%]">
          {data?.subtitle}
        </p>
        <div className="grid grid-cols-2 justify-center items-center gap-[10px] mt-[10px] w-max">
          <Button
            type="solid"
            className="font-semibold py-btn-pdg"
            onClick={() => navigate("/hisobotlar")}
          >
            Ishlarni boshlash
          </Button>
          <Button
            type="outline"
            onClick={() => navigate("/signin")}
            className="font-semibold py-btn-pdg"
          >
            Kirish
          </Button>
        </div>
      </Container>
    </Container>
  );
};

export default Home;

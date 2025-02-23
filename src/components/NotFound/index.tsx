import { Button, Title } from "../Generic";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen min-h-screen w-full">
      <div className="absolute flex w-full items-center justify-evenly h-max text-center w-full z-[10] font-jost font-extrabold text-border-color select-none 992:text-[160px] text-[130px]">
        <b>4</b>
        <b>0</b>
        <b>4</b>
      </div>
      <div className="absolute z-[40] top-0 flex flex-col gap-[25px] w-full h-full backdrop-blur-[10px] justify-center items-center min-h-max overflow-hidden text-center px-[12px]">
        <Title
          type="danger-title"
          className="text-center w-full font-mont leading-10"
        >
          Kechirasiz, bu sahifa mavjud emas
        </Title>
        <div className="leading-7">
          Siz izlagan sahifani topa olmadik. Asosiy sahifaga qaytishga harakat
          qiling
        </div>
        <Button
          type="solid"
          onClick={() => navigate("/")}
          className="font-bold h-[65px]"
        >
          Bosh sahifaga qaytish
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;

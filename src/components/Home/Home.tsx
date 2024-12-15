import Logo from "../Navbar/Logo";
import { Button } from "../Generic";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[92vh] min-h-[92vh]">
      <div className="grid items-center grid-cols-1 w-full justify-between h-full bg-file-image bg-right-top bg-no-repeat">
        <div className="flex flex-col justify-center items-center h-full overflow-y-auto w-full">
          <div className="flex flex-col justify-center gap-[20px] h-max w-max mt-[-20vh]">
            <Logo bg="primary-btn" logo={false} />
            <div>
              <p className="text-[19px] text-subtitle-color font-semibold text-center">
                Barcha ishlar biz bilan osonroq
              </p>
            </div>
            <div className="grid grid-cols-2 items-center justify-between gap-[10px] mt-[28px]">
              <Button
                type="solid"
                className="w-full h-[73.4px]"
                onClick={() => navigate("/hisobotlar")}
              >
                Ishlarni boshlash
              </Button>
              <Button type="surface" className="w-full h-[74px]">
                Kirish
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

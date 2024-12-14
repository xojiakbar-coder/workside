import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/Generic";

const GenericElement = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[60px] justify-center h-screen min-h-screen items-center w-full py-[100px] px-10">
      <h1 className="text-light font-body-font text-[24px] w-full text-center">
        {location.pathname} page coming soon. . .
      </h1>
      <Button
        type="outline"
        onClick={() => navigate("/")}
        rightIcon={
          <i className="fa-solid fa-chevron-right text-item-color group-hover:text-light mt-[4px]" />
        }
      >
        Back to Home page
      </Button>
    </div>
  );
};

export default GenericElement;

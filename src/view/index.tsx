import { Button } from "../components/Generic";
import { useLocation, useNavigate } from "react-router-dom";

const GenericElement = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[25px] justify-center h-section min-h-section items-center w-full py-[100px] px-[3%]">
      <h1 className="text-light font-jost text-[22px] w-max text-center">
        {`${
          location.pathname !== "/" ? location.pathname : "Asosiy"
        } page coming soon...`}
      </h1>
      {location.pathname !== "/" && (
        <Button
          type="outline"
          className="font-jost w-max py-btn-pdg"
          onClick={() => navigate("/")}
          rightIcon={
            <i className="fa-solid fa-chevron-right text-item-color group-hover:text-light mt-[4px]" />
          }
        >
          Back to Home page
        </Button>
      )}
    </div>
  );
};

export default GenericElement;

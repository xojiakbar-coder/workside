import { useLocation, useNavigate } from "react-router-dom";

const GenericElement = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[60px] justify-center h-screen min-h-screen items-center w-full py-[100px] px-10">
      <h1 className="text-light font-body-font text-[24px] w-full text-center">
        {location.pathname} page coming soon. . .
      </h1>
      <button onClick={() => navigate("/")}>Back to Home page</button>
    </div>
  );
};

export default GenericElement;

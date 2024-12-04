import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Logo: FC = () => {
  const loaction = useLocation();
  const navigate = useNavigate();
  const handleNavigate = () => {
    loaction.pathname !== "/" && navigate("/");
  };
  return (
    <div
      className="text-[22px] uppercase font-mont font-bold cursor-pointer"
      onClick={handleNavigate}
    >
      Dashboard
    </div>
  );
};

export default Logo;

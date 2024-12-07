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
      className="uppercase font-mont my-[14px] font-bold text-[22px] text-light cursor-pointer"
      onClick={handleNavigate}
    >
      UZREPO
      <mark className="text-light font-bold text-[22px] bg-primary-btn rounded-md px-[3px]">
        DASH
      </mark>
    </div>
  );
};

export default Logo;

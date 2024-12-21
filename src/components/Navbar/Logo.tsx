import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface LogoItemType {
  bg?: string;
  logo?: boolean;
}

const Logo: FC<LogoItemType> = ({ bg, logo = true }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  const bgColor = bg ? `bg-${bg}` : "bg-primary-btn";
  const textSize = !logo ? `text-[44px]` : "text-[22px]";

  return (
    <div
      className={`flex justify-center items-center gap-[3px] uppercase font-mont font-extrabold ${textSize} text-light ${
        logo ? "cursor-pointer select-none" : ""
      }`}
      onClick={logo ? handleNavigate : undefined}
    >
      UZREPO
      <mark
        className={`flex items-center justify-center text-light font-extrabold ${bgColor} ${textSize} rounded-md ${
          !logo && "shadow-lg shadow-ghost-bg-color"
        } px-[3px]`}
      >
        DASH
      </mark>
    </div>
  );
};

export default Logo;

import { FC } from "react";
import logoSvg from "../../assets/icons/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

interface LogoItemType {
  bg?: string;
  logo?: boolean;
}

const Logo: FC<LogoItemType> = ({ logo = true }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (logo: boolean) => {
    if (location.pathname !== "/" && logo) navigate("/");
  };

  const logoSize = !logo ? `w-[380px]` : "w-[180px]";

  return (
    <div
      onClick={() => handleNavigate(logo)}
      className={`flex justify-center items-center select-none w-max  ${
        logo && "cursor-pointer"
      }`}
    >
      <img
        src={logoSvg}
        className={`${logoSize}`}
        alt="uzrepodash logo not found"
      />
    </div>
  );
};

export default Logo;

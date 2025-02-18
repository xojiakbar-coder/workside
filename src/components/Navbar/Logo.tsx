import { FC } from "react";
import logoSvg from "../../assets/icons/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

interface LogoItemType {
  bg?: string;
  logo?: boolean;
  onClose?: () => void;
}

const Logo: FC<LogoItemType> = ({ logo = true, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (location.pathname !== "/" && logo) navigate("/");
    if (onClose) onClose();
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        handleNavigate();
      }}
      className="flex justify-center items-center select-none w-max cursor-pointer"
    >
      <img
        src={logoSvg}
        alt="logo not found"
        className="576:w-[180px] w-[130px]"
      />
    </div>
  );
};

export default Logo;

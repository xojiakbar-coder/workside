import { FC } from "react";
import useSize from "../../hooks/useSize";
import logoSvg from "../../assets/icons/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

interface LogoItemType {
  bg?: string;
  logo?: boolean;
  onClose?: () => void;
}

const Logo: FC<LogoItemType> = ({ logo = true, onClose }) => {
  const { width } = useSize();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (location.pathname !== "/" && logo) navigate("/");
    if (onClose) onClose();
  };

  const logoSize = logo ? "w-[180px]" : "w-[180px]";
  const responsiveLogoSize = width < 567 && "w-[130px]";

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
        alt="workside logo not found"
        className={`${logoSize} ${responsiveLogoSize}`}
      />
    </div>
  );
};

export default Logo;

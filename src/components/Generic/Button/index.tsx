import { FC, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

interface GenericButtonType {
  children: string;
  className?: string;
  onClick?: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  type?: "solid" | "subtle" | "outline" | "surface" | "ghost";
}

const getButtonStyle = (type: GenericButtonType["type"]) => {
  switch (type) {
    case "outline":
      return "bg-transparent border-outer-bdr-color text-light border-[2px] rounded-[14px] hover:bg-ghost-bg-color";
    case "surface":
      return "hover:bg-gray-color bg-ghost-bg-color text-light border-[2px] rounded-[14px] border-outer-bdr-color";
    case "solid":
      return "bg-light text-body-bg-color rounded-[14px]";
    case "ghost":
      return "hover:bg-gray-color bg-transparent text-light rounded-[14px]";
    default:
      return "bg-transparent text-light underline underline-offset-2";
  }
};

const GenericButton: FC<GenericButtonType> = ({
  children,
  leftIcon,
  rightIcon,
  type,
  className,
  onClick,
}) => {
  const generalStyle = `flex min-w-max min-h-max items-center font-grotesk font-extrabold lg:text-[18px] md:text-[16px] text-[14px] px-[20px] py-[33px] hover:opacity-85 text-center outline-none transition-all ease-in-out duration-[140ms] select-none cursor-pointer`;

  return (
    <Button
      className={`${getButtonStyle(type)} ${generalStyle} ${className}`}
      onClick={onClick}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </Button>
  );
};

export default GenericButton;

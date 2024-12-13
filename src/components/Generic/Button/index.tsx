import { FC, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

interface GenericButtonType {
  children: string;
  className?: string;
  onClick?: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  type?:
    | "solid"
    | "subtle"
    | "outline"
    | "surface"
    | "ghost"
    | "danger"
    | "success"
    | "warning"
    | "info";
}

const getButtonStyle = (type: GenericButtonType["type"]) => {
  switch (type) {
    case "outline":
      return "bg-transparent hover:bg-ghost-bg-color hover:bg-opacity-25 border-outer-bdr-color text-light border-[2px] rounded-[14px]";
    case "surface":
      return "bg-ghost-bg-color hover:bg-ghost-bg-color hover:bg-opacity-25 text-light border-[2px] rounded-[14px] border-outer-bdr-color";
    case "solid":
      return "bg-light hover:bg-light hover:bg-opacity-25 text-body-bg-color rounded-[14px]";
    case "ghost":
      return "bg-transparent hover:bg-ghost-bg-color hover:bg-opacity-25 text-light rounded-[14px]";
    case "danger":
      return "bg-transparent hover:bg-ghost-bg-color hover:bg-opacity-25 text-danger rounded-[14px] border-[2px] border-outer-bdr-color";
    default:
      return "bg-transparent hover:bg-ghost-bg-color hover:bg-opacity-25 text-light underline underline-offset-2";
  }
};

const GenericButton: FC<GenericButtonType> = ({
  children,
  leftIcon,
  rightIcon,
  type,
  className = "flex items-center gap-[12px]",
  onClick,
}) => {
  const generalStyle = `flex min-w-max min-h-max items-center font-grotesk font-extrabold lg:text-[18px] md:text-[16px] text-[14px] px-[20px] py-[33px] hover:bg-opacity-25 text-center outline-none transition-all ease-in-out duration-[140ms] select-none cursor-pointer`;

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

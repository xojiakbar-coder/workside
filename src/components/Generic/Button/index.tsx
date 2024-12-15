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
      return "bg-transparent hover:bg-ghost-bg-color border-outer-bdr-color text-light border-[2px] rounded-[14px] font-extrabold";
    case "surface":
      return "bg-ghost-bg-color hover:bg-outer-bdr-color text-light border-[2px] rounded-[14px] border-outer-bdr-color font-extrabold";
    case "solid":
      return "bg-light hover:bg-light text-body-bg-color rounded-[14px] font-extrabold";
    case "ghost":
      return "bg-transparent hover:bg-ghost-bg-color text-light rounded-[14px] font-extrabold";
    case "danger":
      return "border-2 text-danger font-mont border-danger rounded-[14px] font-bold";
    default:
      return "bg-transparent hover:bg-ghost-bg-color text-light underline underline-offset-2 font-bold";
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
  const generalStyle = `flex min-w-max min-h-max items-center font-grotesk xl:text-[16px] text-[14px] px-[20px] py-[28px] text-center outline-none transition-all ease-in-out duration-[140ms] select-none cursor-pointer`;

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

import { FC, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

interface GenericButtonType {
  children: string | ReactNode;
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
    | "primary"
    | "danger"
    | "success"
    | "warning"
    | "info";
}

const getButtonStyle = (type: GenericButtonType["type"]) => {
  switch (type) {
    case "primary":
      return "bg-primary-btn text-light rounded-[14px]";
    case "outline":
      return "bg-transparent hover:bg-ghost-bg-color border-outer-bdr-color text-light border-[2px] rounded-[14px]";
    case "surface":
      return "bg-ghost-bg-color hover:bg-outer-bdr-color text-light border-[2px] rounded-[14px] border-outer-bdr-color";
    case "solid":
      return "bg-light hover:bg-light text-body-bg-color rounded-[14px]";
    case "ghost":
      return "bg-transparent hover:bg-ghost-bg-color text-light rounded-[14px]";
    case "danger":
      return "text-light font-mont bg-danger rounded-[12px] hover:bg-hover-danger";
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
  ...props
}) => {
  const generalStyle = `flex min-w-max min-h-max items-center font-mont xl:text-[16px] text-[14px] px-[20px] py-[28px] text-center outline-none transition-all ease-in-out duration-[240ms] select-none cursor-pointer`;

  return (
    <Button
      className={`${getButtonStyle(type)} ${generalStyle} ${className}`}
      onClick={onClick}
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </Button>
  );
};

export default GenericButton;

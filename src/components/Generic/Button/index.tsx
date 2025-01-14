import { FC, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

interface GenericButtonType {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: string | ReactNode;
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

const getButtonStyle = (type: GenericButtonType["type"], disabled = false) => {
  switch (type) {
    case "primary":
      return "bg-primary-btn text-light rounded-sm";
    case "outline":
      return "bg-transparent hover:bg-ghost-bg-color border-outer-bdr-color text-light border-[2px] rounded-sm";
    case "surface":
      return "bg-ghost-bg-color text-light rounded-sm";
    case "solid":
      return `bg-light text-body-bg-color hover:bg-[#d9d9d9] rounded-sm ${
        disabled && "bg-[#b1b0b0]"
      }`;
    case "ghost":
      return "bg-transparent hover:bg-ghost-bg-color text-light rounded-sm";
    case "danger":
      return "text-light font-mont bg-danger rounded-[12px] hover:bg-hover-danger";
    default:
      return "bg-transparent hover:bg-ghost-bg-color text-light underline underline-offset-2 font-bold";
  }
};

const GenericButton: FC<GenericButtonType> = ({
  type,
  onClick,
  children,
  leftIcon,
  rightIcon,
  className,
  ...props
}) => {
  const generalStyle = `flex items-center gap-[12px] lg:h-[58px] md:h-[48px] h-[42px] min-w-max min-h-max font-mont xl:text-[16px] text-[14px] px-[20px] md:py-[20px] py-[18px] text-center outline-none transition-all ease-in-out duration-[240ms] select-none cursor-pointer`;

  return (
    <Button
      className={`${getButtonStyle(type)} ${generalStyle} ${className}`}
      onClick={onClick}
      {...props}
    >
      {leftIcon && <span className="mr-2 ">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </Button>
  );
};

export default GenericButton;

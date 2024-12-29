import { FC, ReactNode } from "react";
import { Heading } from "@chakra-ui/react";

interface TitlePropsType {
  className?: string;
  children: ReactNode;
  type: "primary" | "secondary" | "section" | "danger-title";
}

const getTitleType = (
  type: "primary" | "secondary" | "section" | "danger-title"
): string => {
  switch (type) {
    case "primary":
      return "font-semibold text-primary-btn text-[32px]";
    case "secondary":
      return "font-semibold text-light text-[32px]";
    case "section":
      return "font-mont font-[600] text-center text-[24px] pt-[25px] pb-[40px]";
    case "danger-title":
      return "font-bold text-danger text-[32px] py-[20px]";
    default:
      return "text-2xl font-semibold text-light";
  }
};

const GenericTitle: FC<TitlePropsType> = ({
  children = "",
  type = "primary",
  className = "w-full",
}) => {
  const titleClass = getTitleType(type);

  return <Heading className={`${titleClass} ${className}`}>{children}</Heading>;
};

export default GenericTitle;

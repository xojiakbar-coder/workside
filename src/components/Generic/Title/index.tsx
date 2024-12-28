import { FC } from "react";
import { Heading } from "@chakra-ui/react";

interface TitlePropsType {
  children: string;
  className?: string;
  type: "primary" | "secondary" | "section";
}

const getTitleType = (type: "primary" | "secondary" | "section"): string => {
  switch (type) {
    case "primary":
      return "font-semibold text-primary-btn text-[32px]";
    case "secondary":
      return "font-semibold text-light text-[32px]";
    case "section":
      return "font-mont font-[600] text-center text-[24px] py-[25px]";
    default:
      return "text-2xl font-semibold text-light";
  }
};

const GenericTitle: FC<TitlePropsType> = ({
  children = "",
  className = "w-full",
  type = "primary",
}) => {
  const titleClass = getTitleType(type);

  return <Heading className={`${titleClass} ${className}`}>{children}</Heading>;
};

export default GenericTitle;

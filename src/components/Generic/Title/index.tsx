import { FC, ReactNode } from "react";
import { Heading } from "@chakra-ui/react";

interface TitlePropsType extends React.ComponentProps<typeof Heading> {
  className?: string;
  children: ReactNode;
  type: "primary" | "secondary" | "section" | "danger-title" | "title";
}

const getTitleType = (
  type: "primary" | "secondary" | "section" | "danger-title" | "title"
): string => {
  switch (type) {
    case "primary":
      return "font-semibold text-primary-color text-[32px]";
    case "secondary":
      return "font-semibold text-light md:text-[28px] sm:text-[28px] text-[22px] font-mont text-center py-[34px] md:leading-[40px] lg:leading-[42px] leading-[38px]";
    case "title":
      return "font-bold text-light text-center text-balance lg:text-[62px] md:text-[46px] text-[38px] font-mont md:leading-[57px] lg:leading-[85px] leading-[50px] w-full";
    case "section":
      return "font-mont font-[600] text-center text-[24px] pt-[5px] pb-[30px]";
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
  ...props
}) => {
  const titleClass = getTitleType(type);

  return (
    <Heading className={`${titleClass} ${className}`} {...props}>
      {children}
    </Heading>
  );
};

export default GenericTitle;

import { FC, ReactNode } from "react";
import { Container } from "@chakra-ui/react";

interface GenericContainerType {
  gap?: number;
  full?: boolean;
  section?: boolean;
  className?: string;
  children: ReactNode;
  flexDir?: "row" | "col";
  type: "default" | "section" | "wrapper" | "center" | "full-center" | "box";
}

const getContainerStyle = (type: GenericContainerType["type"]) => {
  switch (type) {
    case "wrapper":
      return `h-section-h md:px-main-padding`;
    case "section":
      return `h-section-h flex-col md:px-[2%] pt-[25px] pb-[30px]`;
    case "center":
      return "h-section-h justify-center";
    case "full-center":
      return "justify-center items-center";
    case "box":
      return "h-section-h justify-center";
    default:
      return "border border-gray-600";
  }
};

const GenericContainer: FC<GenericContainerType> = ({
  gap,
  full,
  section,
  children,
  className,
  flexDir = "row",
  type = "default",
  ...props
}) => {
  const baseStyle = `flex overflow-y-auto`;

  return (
    <Container
      gap={gap}
      fluid={full}
      className={`${getContainerStyle(type)} ${baseStyle} flex-${flexDir} w-${
        full ? "full" : "max"
      } ${className}`}
      {...props}
    >
      {children}
    </Container>
  );
};

export default GenericContainer;

import { FC, ReactNode } from "react";
import { Container } from "@chakra-ui/react";

interface GenericContainerType extends React.ComponentProps<typeof Container> {
  className?: string;
  children: ReactNode;
  type: "default" | "section" | "wrapper" | "center" | "full-center";
}

const getContainerStyle = (type: GenericContainerType["type"]) => {
  switch (type) {
    case "wrapper":
      return `md:px-main-padding`;
    case "section":
      return `flex-col md:px-main-padding pt-[25px] pb-[30px]`;
    case "center":
      return "justify-center";
    case "full-center":
      return "justify-center items-center";
    default:
      return "border border-gray-600";
  }
};

const GenericContainer: FC<GenericContainerType> = ({
  children,
  className,
  type = "default",
  ...props
}) => {
  const baseStyle = `flex overflow-y-auto h-section-h`;

  return (
    <Container
      {...props}
      className={`${getContainerStyle(type)} ${baseStyle} ${className}`}
    >
      {children}
    </Container>
  );
};

export default GenericContainer;

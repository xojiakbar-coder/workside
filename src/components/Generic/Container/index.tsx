import { FC, ReactNode, useContext } from "react";
import { Container } from "@chakra-ui/react";
import { LoaderContext } from "../../../context/LoaderContext/LoaderContext";

interface GenericContainerType extends React.ComponentProps<typeof Container> {
  className?: string;
  children: ReactNode;
  type?:
    | "default"
    | "section"
    | "wrapper"
    | "center"
    | "full-center"
    | "home-section";
}

const getContainerStyle = (type: GenericContainerType["type"]) => {
  const { show_load } = useContext(LoaderContext);
  switch (type) {
    case "wrapper":
      return `${!show_load ? "px-main-padding" : ""}`;
    case "section":
      return `flex-col ${
        !show_load ? "px-main-padding pb-[30px]" : ""
      } pt-[25px] h-max overflow-y-auto`;
    case "center":
      return "justify-center";
    case "full-center":
      return "justify-center items-center";
    case "home-section":
      return "flex h-max lg:px-[4%] px-main-padding";
    default:
      return "flex flex-col";
  }
};

const GenericContainer: FC<GenericContainerType> = ({
  children,
  className,
  type = "default",
  ...props
}) => {
  const baseStyle = `flex`;

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

import { FC } from "react";
import { Container } from "@chakra-ui/react";
import ChildrenType from "../../../utils/types/general";

interface GenericContainerType {
  full: boolean;
  section: boolean;
  className: string;
  children: ChildrenType;
}

const GenericContainer: FC<GenericContainerType> = ({
  children,
  full,
  className,
  section,
}) => {
  const generalSectionStyle = `flex flex-col h-[92svh] overflow-y-auto w-full pt-[25px] px-[2%] pb-[35px]`;
  return (
    <Container
      fluid={full}
      className={`${section && generalSectionStyle} ${className}`}
    >
      {children}
    </Container>
  );
};

export default GenericContainer;

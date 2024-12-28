import { Grid } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface GridBoxPropsType {
  gap?: string;
  className?: string;
  children: ReactNode;
  cols?: string | number;
  rows?: string | number;
}

const GridBox: FC<GridBoxPropsType> = ({
  cols,
  rows,
  children,
  className,
  gap,
}) => {
  const gridClasses = ``;
  return (
    <Grid
      gap={gap}
      templateRows={rows}
      templateColumns={cols}
      className={`${gridClasses} ${className}`}
    >
      {children}
    </Grid>
  );
};

export default GridBox;

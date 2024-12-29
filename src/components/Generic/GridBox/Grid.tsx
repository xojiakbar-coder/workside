import { Grid } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface GridBoxPropsType extends React.ComponentProps<typeof Grid> {
  className?: string;
  children: ReactNode;
  cols: string | number;
  rows?: string | number;
}

const GridBox: FC<GridBoxPropsType> = ({
  cols,
  rows,
  children,
  className,
  ...props
}) => {
  const gridClasses = ``;
  return (
    <Grid
      {...props}
      templateRows={rows}
      templateColumns={cols}
      className={`${gridClasses} ${className}`}
    >
      {children}
    </Grid>
  );
};

export default GridBox;

import { FC, ReactNode } from "react";
import { Grid } from "@chakra-ui/react";

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
  return (
    <Grid
      templateRows={rows}
      className={className}
      templateColumns={cols}
      {...props}
    >
      {children}
    </Grid>
  );
};

export default GridBox;

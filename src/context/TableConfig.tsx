import { createContext, FC, useState } from "react";
import { OnlyChildren } from "../utils/types/general";

const TableConfigContext = createContext([]);

const TableConfigContextProvider: FC<OnlyChildren> = ({ children }) => {
  // const [checked, setChecked] = useState();
  return (
    <TableConfigContext.Provider value={[]}>
      {children}
    </TableConfigContext.Provider>
  );
};

import { TableBodyType } from "../../utils/types/table";
import { createContext, useReducer, Dispatch, FC } from "react";
import { initialState, reducer, ReducerActionType } from "./reducer";

interface TableContextType {
  list: TableBodyType[];
  dispatch: Dispatch<ReducerActionType>;
}

export const TableContext = createContext<TableContextType>({
  list: [],
  dispatch: () => null,
});

export const TableContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [list, dispatch] = useReducer(reducer, initialState);

  return (
    <TableContext.Provider value={{ list, dispatch }}>
      {children}
    </TableContext.Provider>
  );
};

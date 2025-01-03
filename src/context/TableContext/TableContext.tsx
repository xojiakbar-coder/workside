import { reducer, ReducerActionType } from "./reducer";
import { TableBodyType } from "../../utils/types/table";
import { OnlyChildren } from "../../utils/types/general";
import { createContext, Dispatch, FC, useReducer } from "react";

type UserDataFetchType = {
  list: TableBodyType[];
  dispatch: Dispatch<ReducerActionType>;
};

export const TableContext = createContext<UserDataFetchType>({
  list: [],
  dispatch: () => null,
});

export const TableContextProvider: FC<OnlyChildren> = ({ children }) => {
  const [list, dispatch] = useReducer(reducer, []);

  return (
    <TableContext.Provider value={{ list, dispatch }}>
      {children}
    </TableContext.Provider>
  );
};

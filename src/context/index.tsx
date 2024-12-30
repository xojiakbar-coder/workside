import { FC } from "react";
import { Provider } from "../components/ui/provider";
import { OnlyChildren } from "../utils/types/general";
import { TableContextProvider } from "./Table/TableContext";
import { UserDataFetchProvider } from "./UserDataFetch/UserDataFetchContext";

const RootProvider: FC<OnlyChildren> = ({ children }) => {
  return (
    <Provider>
      <UserDataFetchProvider>
        <TableContextProvider>{children}</TableContextProvider>
      </UserDataFetchProvider>
    </Provider>
  );
};

export default RootProvider;

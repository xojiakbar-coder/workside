import { createContext } from "react";
import { OnlyChildren } from "../utils/types/general";

export const UserDataFetchContext = createContext(null);

export const UserDataFetchProvider = ({ children }:OnlyChildren) => {
  return (
    <UserDataFetchContext.Provider value={null}>
      {children}
    </UserDataFetchContext.Provider>
  );
};

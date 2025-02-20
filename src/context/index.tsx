import { FC } from "react";
import { Provider } from "../components/ui/provider";
import { OnlyChildren } from "../utils/types/general";
import { LoaderProvider } from "./LoaderContext/LoaderContext";
import { TableContextProvider } from "./TableContext/TableContext";

const ContextProvider = [Provider, TableContextProvider, LoaderProvider];

const RootProvider: FC<OnlyChildren> = ({ children }) => {
  return ContextProvider.reduceRight(
    (account, Provider) => <Provider>{account}</Provider>,
    children
  );
};

export default RootProvider;

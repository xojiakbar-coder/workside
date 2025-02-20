import { createContext, FC, useState } from "react";
import { OnlyChildren } from "../../utils/types/general";

type LoaderContextType = {
  show_load: boolean;
  setShowLoad: (value: boolean) => void;
};

export const LoaderContext = createContext<LoaderContextType>({
  show_load: false,
  setShowLoad: () => {},
});

export const LoaderProvider: FC<OnlyChildren> = ({ children }) => {
  const [showLoad, setShowLoad] = useState(false);

  return (
    <LoaderContext.Provider value={{ show_load: showLoad, setShowLoad }}>
      {children}
    </LoaderContext.Provider>
  );
};

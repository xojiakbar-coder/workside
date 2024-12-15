import BASE_URL from "../config/baseUrl";
import { users_url } from "../config/endpoints";
import { TableBodyType } from "../utils/types/table";
import { OnlyChildren } from "../utils/types/general";
import { createContext, FC, useEffect, useState } from "react";

type StaffListContextType = {
  items: TableBodyType[] | [];
  setItems: (items: TableBodyType[] | []) => void;
};

export const StaffListDataTable = createContext<StaffListContextType>({
  items: [],
  setItems: () => {},
});

const StaffListProvider: FC<OnlyChildren> = ({ children }) => {
  const [items, setItems] = useState<TableBodyType[] | []>([]);

  const fetchListData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/${users_url}/`);
      const res = await response.json();
      setItems(res);
    } catch (error) {
      console.error(`Something went wrong: ${error}`);
    }
  };

  useEffect(() => {
    fetchListData();
  }, []);

  return (
    <StaffListDataTable.Provider value={{ items, setItems }}>
      {children}
    </StaffListDataTable.Provider>
  );
};

export default StaffListProvider;

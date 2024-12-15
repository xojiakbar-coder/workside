import BASE_URL from "../config/baseUrl";
import ChildrenType from "../utils/general";
import { users_url } from "../config/endpoints";
import { createContext, FC, useEffect, useState } from "react";
import { TableBodyType } from "../components/Generic/Table/table";

type StaffListContextType = {
  items: TableBodyType[] | [];
  setItems: (items: TableBodyType[] | []) => void;
};

export const StaffListDataTable = createContext<StaffListContextType>({
  items: [],
  setItems: () => {},
});

const StaffListProvider: FC<ChildrenType> = ({ children }) => {
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

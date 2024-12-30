import BASE_URL from "../../config/baseUrl";
import { users_url } from "../../config/endpoints";
import { TableBodyType } from "../../utils/types/table";
import { OnlyChildren } from "../../utils/types/general";
import { createContext, FC, useEffect, useState } from "react";

type UserDataFetchType = {
  items: TableBodyType[] | [];
  setItems: (items: TableBodyType[] | []) => void;
};

export const UserDataFetchContext = createContext<UserDataFetchType>({
  items: [],
  setItems: () => {},
});

export const UserDataFetchProvider: FC<OnlyChildren> = ({ children }) => {
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
    <UserDataFetchContext.Provider value={{ items, setItems }}>
      {children}
    </UserDataFetchContext.Provider>
  );
};

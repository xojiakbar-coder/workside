import { TableBodyType } from "../../utils/types/table";

export interface ReducerActionType {
  items?: any[];
  payload?: number;
  type: "get" | "delete" | "post";
}

export const reducer = (
  state: TableBodyType[],
  action: ReducerActionType
): TableBodyType[] => {
  const { type, items, payload } = action;
  switch (type) {
    case "get":
      return items || state;
    case "delete":
      return state.filter((item) => item.id !== payload);
    default:
      return state;
  }
};

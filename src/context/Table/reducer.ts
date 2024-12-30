import { TableBodyType } from "../../utils/types/table";

export interface ReducerActionType {
  type: "DELETE" | "ADD";
  payload: number;
}

export const initialState: TableBodyType[] = [];

export const reducer = (
  state: TableBodyType[],
  action: ReducerActionType
): TableBodyType[] => {
  switch (action.type) {
    case "DELETE":
      return state.filter((item) => item.id !== action.payload);
    case "ADD":
      return state;
    default:
      return state;
  }
};

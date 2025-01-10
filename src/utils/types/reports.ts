export interface TodosDataItemType {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

export type TodosDataType = TodosDataItemType[];

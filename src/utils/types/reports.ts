export interface TodosDataItemType {
  id: number;
  name: string;
  email: string;
  title: string;
  userId: number;
  completed: boolean;
}

export type TodosDataType = TodosDataItemType[];

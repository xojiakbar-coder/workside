export interface ChartDataItemType {
  name: string;
  value: number | string;
}

export interface GenericReportsCardPropsType {
  name: string;
  message: string;
  position: string;
  data_date: string;
  report_data: ChartDataItemType[];
}

export interface TodosDataItemType {
  id: number;
  name: string;
  title: string;
  message: string;
  position: string;
  data_date: string;
  report_data: ChartDataItemType[];
}

export type TodosDataType = TodosDataItemType[];

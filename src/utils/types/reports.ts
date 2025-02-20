import { ChartDataItemType } from "../../components/Generic/PieChart/PieChart";

export interface TodosDataItemType {
  id: number;
  name: string;
  title: string;
  message: string;
  position: string;
  data_date: string;
  chart_data: ChartDataItemType[];
}

export type TodosDataType = TodosDataItemType[];

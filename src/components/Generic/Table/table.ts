export interface TableBodyType {
  job?: string;
  checkbox?: boolean;
  id: number | string;
  name: string | number;
  salary?: string | number;
}

export interface TableHeadType {
  title: string;
  element: string;
  id: number | string;
}

export interface TableType {
  table_head: TableHeadType[];
  table_body: TableBodyType[];
}

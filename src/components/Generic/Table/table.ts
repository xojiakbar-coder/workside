export interface TableBodyType {
  id: number;
  job: string;
  name: string | number;
  salary?: string | number;
}

export interface TableHeadType {
  id: number;
  title: string;
}

export interface TableType {
  checking?: boolean;
  deleteAction?: boolean;
  table_head: TableHeadType[];
  table_body: TableBodyType[];
}

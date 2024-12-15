export interface TableBodyType {
  id: number;
  job: string;
  email: string;
  phone: string;
  username: string;
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

export interface TbodyProps {
  selection: number[];
  deleteAction: boolean;
  table_body: TableBodyType[];
  checking: boolean | false | undefined;
  setSelection: React.Dispatch<React.SetStateAction<number[]>>;
}

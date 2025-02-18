export interface TableBodyType {
  id: number;
  name: string;
  position: string;
  work_schedule: string;
}

export interface TableHeadType {
  id: number;
  title: string;
}

export interface TablePropsType {
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

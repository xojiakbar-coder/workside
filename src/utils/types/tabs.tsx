export interface TabDataType {
  id: number | string;
  name?: string;
  title: string;
}

export interface TabsProps {
  type: "link" | "text";
  data: TabDataType[];
}

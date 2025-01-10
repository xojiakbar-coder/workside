export interface TabDataType {
  id: number | string;
  name: string;
  title: string;
}

export interface TabsProps {
  data: TabDataType[];
  type: "link" | "text";
  toggleSidebar: boolean;
}

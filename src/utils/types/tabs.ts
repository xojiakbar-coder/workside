export interface TabDataType {
  id: number | string;
  name: string;
  title: string;
}

export interface TabsProps {
  data: TabDataType[];
  toggleSidebar: boolean;
  type: "link" | "text" | "sidebar";
}

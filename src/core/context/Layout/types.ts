export interface Layout {
  topBarView: boolean;
  sidebarView: boolean;
}

export type IProps = {
  layout: Layout;
  setLayout: React.Dispatch<React.SetStateAction<Layout>>;
};

import SidebarBody from './Body';
import SidebarHeader from './Header';
import SidebarFooter from './Footer';

import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarHeader />
      <SidebarBody />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
